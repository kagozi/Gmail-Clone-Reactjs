import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDnIUKs9vaaawZ_7UjVObHWuuxfUlnD_Bw",
    authDomain: "clone-609ac.firebaseapp.com",
    projectId: "clone-609ac",
    storageBucket: "clone-609ac.appspot.com",
    messagingSenderId: "517502310367",
    appId: "1:517502310367:web:2a4b44bba573434ff7d66a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider}