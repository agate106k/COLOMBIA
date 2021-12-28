import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyAR2bUz0DboSJIzi68-uEAHnaXs_qxN1x0",
    authDomain: "campusfiretest.firebaseapp.com",
    databaseURL: "https://campusfiretest-default-rtdb.firebaseio.com",
    projectId: "campusfiretest",
    storageBucket: "campusfiretest.appspot.com",
    messagingSenderId: "405977687881",
    appId: "1:405977687881:web:aaf0393e1ca428fff55c98",
    measurementId: "G-KL7LTJPHWP"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();