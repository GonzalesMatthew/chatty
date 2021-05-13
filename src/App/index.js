import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  const [currentChannel, setCurrentChannel] = useState({
    name: 'Default Channel'
  });

  const [channelArr, setChannelArr] = useState([
    { name: 'E14 Cohort ' },
    { name: 'Channel #2' },
    { name: 'Channel #3' }
  ]);

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
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((response) => setMessages(response));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user}
          currentChannel={currentChannel}
          setCurrentChannel={setCurrentChannel}
          channelArr={channelArr}
          setChannelArr={setChannelArr} />
        <Routes
          messages={messages}
          setMessages={setMessages}
          user={user}
        />
      </Router>
    </div>
  );
}

export default App;
