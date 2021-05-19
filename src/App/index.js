import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getChannels } from '../helpers/data/channelData';
import { createUser, getUserbyUid } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState(null);
  const [currentChannel, setCurrentChannel] = useState({
    name: 'Default Channel'
  });
  const [channelArr, setChannelArr] = useState([]);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          username: authed.email.split('@')[0]
        };
        getUserbyUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj).then((resp) => setUser(resp));
          } else {
            setUser(userInfoObj);
          }
        });
        getChannels().then((loadChannelArr) => {
          setChannelArr(loadChannelArr);
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  useEffect(() => {
    getChannels().then((resp) => setChannelArr(resp));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user}
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
          channelArr={channelArr}
          setChannelArr={setChannelArr}
          setModal={setModal} />
        <Routes user={user}
          setChannelArr={setChannelArr}
          modal={modal}
          setModal={setModal} />
      </Router>
    </div>
  );
}

export default App;
