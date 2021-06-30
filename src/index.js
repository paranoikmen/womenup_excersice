import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore'

firebase.initializeApp({
        apiKey: "AIzaSyAWl13-VFufa-3_R2ulomkcaEHp6wws-9w",
        authDomain: "womenupchat.firebaseapp.com",
        projectId: "womenupchat",
        storageBucket: "womenupchat.appspot.com",
        messagingSenderId: "638732852103",
        appId: "1:638732852103:web:48b90c533783363b5e9122"
    }
);

const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App firestore={firestore}/>
  </React.StrictMode>,
  document.getElementById('root')
);


