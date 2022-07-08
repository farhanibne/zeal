// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
import "firebase/database" ; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRXx1nsV8iqlvYp5JreZ9K1_9STY9g3Co",
    authDomain: "zeal-edu.firebaseapp.com",
    databaseURL: "https://zeal-edu-default-rtdb.firebaseio.com",
    projectId: "zeal-edu",
    storageBucket: "zeal-edu.appspot.com",
    messagingSenderId: "1035977251180",
    appId: "1:1035977251180:web:4f8fb1f1fa03c95e4c3b49",
    measurementId: "G-J7LN6D5X0P"
};

// Initialize Firebase
if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}


// const analytics = getAnalytics(app); 

// export const auth = firebase.auth()
// export default app 

export {firebase}