import firebase from 'firebase'
    
 firebase.initializeApp({
    apiKey: "AIzaSyAh5H6Y2jsM8Ht8FFdcqy-lfnN2_6zvLoQ",
    authDomain: "blongo-fcfe8.firebaseapp.com",
    projectId: "blongo-fcfe8",
    storageBucket: "blongo-fcfe8.appspot.com",
    messagingSenderId: "408737263152",
    appId: "1:408737263152:web:489b345f9e70d9214807f5" 
 });

var db = firebase.database();
export { db };