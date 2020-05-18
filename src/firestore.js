import * as firebase from 'firebase'
import 'firebase/firestore'
const config = {
  apiKey: "AIzaSyCbAQtecWijBleF3nPmiIgEKkdC-mKNM_0",
  authDomain: "vue-msal-example.firebaseapp.com",
  databaseURL: "https://vue-msal-example.firebaseio.com",
  projectId: "vue-msal-example",
  storageBucket: "vue-msal-example.appspot.com",
  messagingSenderId: "152503221955",
  appId: "1:152503221955:web:5fa20b530595d69937ec76",
  measurementId: "G-1SR5L6LZYN"
  }

var firebaseApp = firebase.initializeApp(config)
export const db = firebaseApp.firestore();
window.db = db;
