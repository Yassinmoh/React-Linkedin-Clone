import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoiHcKZCXu1wNKTDH2uQ8KshVfZuNodc4",
    authDomain: "linkedin-clone-da6ac.firebaseapp.com",
    projectId: "linkedin-clone-da6ac",
    storageBucket: "linkedin-clone-da6ac.appspot.com",
    messagingSenderId: "378855915684",
    appId: "1:378855915684:web:1c607c90a288f42971e631"
  };


const firebaseApp = initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider()
const storage =firebase.storage();


export {auth,provider,storage}

export default db





