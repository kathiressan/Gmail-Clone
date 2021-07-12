import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGCgJg0mXB6zCSB_z55HIeJI7fFitD1PE",
  authDomain: "clone-yt-739fd.firebaseapp.com",
  projectId: "clone-yt-739fd",
  storageBucket: "clone-yt-739fd.appspot.com",
  messagingSenderId: "909455985386",
  appId: "1:909455985386:web:cc9d844d2234839dfa2593",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
