import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNAg6-TPj4VMd3PgK8MnIepus5EsFODWQ",
  authDomain: "challenge-2c96a.firebaseapp.com",
  projectId: "challenge-2c96a",
  storageBucket: "challenge-2c96a.appspot.com",
  messagingSenderId: "1072246980605",
  appId: "1:1072246980605:web:62b1c7e0db447a5cdce394",
  measurementId: "G-2DB7RWEF96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
