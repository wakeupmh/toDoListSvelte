import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "<yourApiKey>",
  authDomain: "<yourAuthDomain>",
  databaseURL: "<yourDatabaseURL>",
  projectId: "<yourProjectId>",
  storageBucket: "<yourStorageBucket>",
  messagingSenderId: "<yourMessagingSenderId>"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();


