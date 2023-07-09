import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export const uploadFileToStorage = (file, userData) => {
  const env = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
  const now = new Date();
  const { uid } = userData;

  const filePath = `gs://${env}/resume/${uid}/${now.getTime()}-${file.name}`;
  const storageRef = ref(storage, filePath);

  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on("state_changed", {
      next: (snapshot) => {
        // Handle progress updates here (loading bar, etc.)
      },
      error: (error) => {
        reject(error);
      },
      complete: async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadUrl);
      },
    });
  });
};
