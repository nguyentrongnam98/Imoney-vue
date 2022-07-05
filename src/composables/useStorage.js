import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { storage } from "../config/firebase";
const metadata = {
  contentType: "image/jpeg" || "image/png",
};

const useStorage = (name) => {
  async function uploadFile(file, uId) {
    const fileRef = ref(storage, "images/" + file.name);
    try {
      const uploadTask = uploadBytesResumable(fileRef, file, metadata);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          // nếu mà bị permission denied thì paste đoạn code này vào tab Rules trong Storage trên web là oki
          //           rules_version = '2';
          // service firebase.storage {
          //   match /b/{bucket}/o {
          //     match /{allPaths=**} {
          //       allow write: if request.auth != null;
          //       allow read;
          //     }
          //   }
          // }

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (err) {}
  }
  return {
    uploadFile,
  };
};

export default useStorage;
