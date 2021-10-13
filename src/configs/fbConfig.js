import  { initializeApp } from 'firebase/app'
import  { getDatabase } from 'firebase/database'



const firebaseConfig = {
  apiKey: "AIzaSyCaep7GAtwPkfzTK5xAF2HH7pJVGFqLwgQ",
  authDomain: "bloginreact.firebaseapp.com",
  projectId: "bloginreact",
  storageBucket: "bloginreact.appspot.com",
  messagingSenderId: "550125011780",
  appId: "1:550125011780:web:a21e966afec55b55dd8d11",
  measurementId: "G-1H228T3XRD"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const db = getDatabase();


export default db
