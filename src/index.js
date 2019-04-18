import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
var config = {
    apiKey: process.env.REACT_APP_API,
    authDomain: process.env.REACT_APP_AUTH,
    databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PROJECT,
    storageBucket: process.env.REACT_APP_STORAGE,
    messagingSenderId: process.env.REACT_APP_SENDER
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
