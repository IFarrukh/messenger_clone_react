import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAp2TpaJSidODUad6XxG6y7NOGddphKMLg",
  authDomain: "messenger-clone-a21fd.firebaseapp.com",
  databaseURL: "https://messenger-clone-a21fd.firebaseio.com",
  projectId: "messenger-clone-a21fd",
  storageBucket: "messenger-clone-a21fd.appspot.com",
  messagingSenderId: "92108312822",
  appId: "1:92108312822:web:6ccc2e99a94f16071b5cd7",
  measurementId: "G-WDB6PCJSG7"
});

const db = firebaseApp.firestore();

export default db;
