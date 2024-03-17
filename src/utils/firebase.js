import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXknIodfNCWMYIx7HYP_qxc3ZT-Mn8SX4",
  authDomain: "netflixgpt-ffea9.firebaseapp.com",
  databaseURL:
    "https://netflixgpt-ffea9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflixgpt-ffea9",
  storageBucket: "netflixgpt-ffea9.appspot.com",
  messagingSenderId: "1075018359535",
  appId: "1:1075018359535:web:b8396f7713c8c9dc6db11a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
