
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyABNlX7iXXr-g5rJSp_kIevd3dBImfiDdA',
  authDomain: 'proyecto-coder-house-pablo.firebaseapp.com',
  projectId: 'proyecto-coder-house-pablo',
  storageBucket: "proyecto-coder-house-pablo.appspot.com",
  messagingSenderId: "934011928496",
  appId: "1:934011928496:web:10bf348a21db448ed02075"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
