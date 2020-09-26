import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDkZZNANcaUxu_v-WChFMGkauvT96iZXvY",
  authDomain: "app-5c2a7.firebaseapp.com",
  databaseURL: "https://app-5c2a7.firebaseio.com",
  projectId: "app-5c2a7",
  storageBucket: "app-5c2a7.appspot.com",
  messagingSenderId: "162633458037",
  appId: "1:162633458037:web:590a4360894c5f67aab33c",
  measurementId: "G-7896JE6XSH",
});
const auth = firebase.auth();
export { auth };
