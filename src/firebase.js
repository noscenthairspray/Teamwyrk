// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const messaging = getMessaging(app);

export const addRequestToDB = httpsCallable(functions, "addRequestToDB");

// Function to add an email to the "mail" collection
export const addEmailToMailCollection = (emailData) => {
  const addEmail = functions.httpsCallable('addEmailToMailCollection');
  return addEmail(emailData)
    .then((result) => {
      console.log(result.data); // handle the result here
    })
    .catch((error) => {
      console.error('Error adding email:', error);
      throw error;
    });
};


export const signOut = async () => {
  try {
    await auth.signOut();
    return true;
  } catch (error) {
    return false;
  }
};

