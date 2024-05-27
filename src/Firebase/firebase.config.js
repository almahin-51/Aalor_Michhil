import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAt77l5mfB_D3MVpcoyyRJn5S3oRptQ1IA",
  authDomain: "aalor-michhil.firebaseapp.com",
  projectId: "aalor-michhil",
  storageBucket: "aalor-michhil.appspot.com",
  messagingSenderId: "439770232707",
  appId: "1:439770232707:web:d3e8628491e6f95d56a8b6",
  measurementId: "G-0TBQDG8MK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
