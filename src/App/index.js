import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getChannels } from '../helpers/data/channelData';

function App() {
  const [user, setUser] = useState(null);
  const [currentChannel, setCurrentChannel] = useState({
    name: 'Default Channel'
  });

  const [channelArr, setChannelArr] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
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
          setChannelArr={setChannelArr} />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
