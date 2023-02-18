// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

