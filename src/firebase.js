// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh9ML7wDmE69c70gdd_i9rbLFG5mhYZOU",
  authDomain: "teamwyrk.firebaseapp.com",
  projectId: "teamwyrk",
  storageBucket: "teamwyrk.appspot.com",
  messagingSenderId: "923269802647",
  appId: "1:923269802647:web:594aeb6b85694ce23d57d2",
  measurementId: "G-SCBRBYFPZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


