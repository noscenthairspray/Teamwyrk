const functions = require("firebase-functions");

 // Create and deploy your first functions
 // https://firebase.google.com/docs/functions/get-started
const admin = require("firebase-admin");
admin.initializeApp();

/*
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection("messages").add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

*/

exports.addUserToDB = functions.auth.user().onCreate((user) => {

  const userDoc = {
    Id: user.uid,
    Name: user.displayName,
    Email: user.email,
    ProfileImage: user.photoURL,
    Resume: null,
    RequestFormID: null,
  };
  
  admin.firestore().collection("users").add(userDoc);
});