import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyD3VFrp5yalDZCKgtFRmJcS94wCdCgNkuo",
    authDomain: "clone-59eef.firebaseapp.com",
    projectId: "clone-59eef",
    storageBucket: "clone-59eef.appspot.com",
    messagingSenderId: "471919005447",
    appId: "1:471919005447:web:f4d5692681d39ca833ffa2",
    measurementId: "G-29WBL7RQJ8"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};