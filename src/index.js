import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import firebaseConfig from './helpers/apiKeys';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
