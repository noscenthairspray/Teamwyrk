const functions = require("firebase-functions");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
const admin = require("firebase-admin");

admin.initializeApp();

// Triggers when a user is created with firebase auth - google
exports.addUserToDB = functions.auth.user().onCreate((user) => {
  const userDoc = {
    name: user.displayName,
    email: user.email,
    profile_image: user.photoURL,
  };

  // Create a new user document in the "user" collection
  // with the same document ID as the user's UID.
  admin.firestore().collection("user").doc(user.uid).set(userDoc);
});


//*****request form submittal*****//
exports.addRequestToDB = functions.https.onCall(async (data, context) => {
  // Verify that the user is authenticated
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "You must be authenticated to submit a request."
    );
  }
  //Get the user's uid (user document id) from the context
  const userId = context.auth.uid;
  // Get a reference to the user's document in the Firestore database
  const userRef = admin.firestore().collection("user").doc(userId);
  // Get the user's document from the Firestore database
  const userDoc = await userRef.get();

  // Create a new request document in the request collection
  const requestDoc = {
    name: data.name,
    email: data.email,
    services: data.services,
    desired_company: data.desired_company,
    desired_role: data.desired_role,
    job_listing_url: data.job_listing_url,
    payment: `$${data.payment}`,
    resume: data.resume,
    profile_image: userDoc.data().profile_image,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    status: "matching", //3 states - matching, matched, accept
    insider: null,
    uid: userId,
  };

  const requestRef = await admin
    .firestore()
    .collection("request")
    .add(requestDoc);

  const requestIds =
    userDoc.exists && userDoc.data().request_id
      ? userDoc.data().request_id
      : [];

  await userRef.update({
    request_id: [...requestIds, requestRef.id],
  });

  // Return a success message
  return { message: "Request submitted successfully." };
});

// Function to add an email to the "mail" collection
exports.addEmailToMailCollection = functions.https.onCall(async (data, context) => {
  // Check if the user is an admin
  if (!context.auth) {
    throw new functions.https.HttpsError(
      "permission-denied",
      "You must be an admin to perform this operation."
    );
  }

  try {
    // Add the email to the "mail" collection
    await admin.firestore().collection("mail").add(data);

    return { message: "Email added successfully." };
  } catch (error) {
    console.error("Error adding email:", error);
    throw new functions.https.HttpsError(
      "internal",
      "An internal error occurred while adding the email."
    );
  }
});