import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// for temporary test, will import from firebase.js in /src"
// ---------------------------------------------------------
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

// ----------------------------------------------------------



const provider = new GoogleAuthProvider();

const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  export {provider, auth, signInWithPopup};




