// Import the functions you need from the SDKs you need
// import AsyncStorage from '@react-native-community/async-storage';
// : Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEVdzbstYy3lA5J5by3GxEu-LRyXArI2k",
  authDomain: "gifted-chat-3c85c.firebaseapp.com",
  projectId: "gifted-chat-3c85c",
  storageBucket: "gifted-chat-3c85c.appspot.com",
  messagingSenderId: "516252119405",
  appId: "1:516252119405:web:083072306e5d64e5b4aa64"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}
// export default !firebase.app.length ? firebase.initializeApp(config) : firebase.app();
const db = app.firestore();
const auth = firebase.auth();
export {db, auth};
