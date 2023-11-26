import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEBzCSR2mRwVOASyNW9HXzBc8HLQWB-GY",
  authDomain: "portfolio-9ec37.firebaseapp.com",
  projectId: "portfolio-9ec37",
  storageBucket: "portfolio-9ec37.appspot.com",
  messagingSenderId: "812019332146",
  appId: "1:812019332146:web:85d5d59a6ee7c2ec7ff82b",
  measurementId: "G-JY4BQTXJX6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
