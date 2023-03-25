// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3dgZnYhTh3x89r4sY0Y8UnvCSWu4BkkM",
  authDomain: "clone-trial-1.firebaseapp.com",
  projectId: "clone-trial-1",
  storageBucket: "clone-trial-1.appspot.com",
  messagingSenderId: "366859768555",
  appId: "1:366859768555:web:135f2a6198b94dc8ede4ae",
  measurementId: "G-Y5XDJK3ML3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
