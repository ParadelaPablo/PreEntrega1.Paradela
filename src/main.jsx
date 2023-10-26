import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
// import { initializeApp } from "firebase/app";

/*  const firebaseConfig = {
  apiKey: "AIzaSyABNlX7iXXr-g5rJSp_kIevd3dBImfiDdA",
  authDomain: "proyecto-coder-house-pablo.firebaseapp.com",
  projectId: "proyecto-coder-house-pablo",
  storageBucket: "proyecto-coder-house-pablo.appspot.com",
  messagingSenderId: "934011928496",
  appId: "1:934011928496:web:10bf348a21db448ed02075"
};*/

//const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
