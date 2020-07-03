
import firebase from "firebase/app";

import "firebase/auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images
const firebaseConfig = {
    apiKey: "AIzaSyDznv9brVD1JK9DmdRhQ3sML9yEPmYLQbg",
    authDomain: "e-prime-ea6d8.firebaseapp.com",
    databaseURL: "https://e-prime-ea6d8.firebaseio.com",
    projectId: "e-prime-ea6d8",
    storageBucket: "e-prime-ea6d8.appspot.com",
    messagingSenderId: "7302546209",
    appId: "1:7302546209:web:6702f8467a2a3d5fb63460"
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;