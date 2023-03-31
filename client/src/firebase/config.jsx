// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7sMWh0TayMCVHvkuTDp0U_Igp2NH2r4o",
  authDomain: "note-app-tgtan.firebaseapp.com",
  projectId: "note-app-tgtan",
  storageBucket: "note-app-tgtan.appspot.com",
  messagingSenderId: "696074781795",
  appId: "1:696074781795:web:76ef33b984c7a053a92456",
  measurementId: "G-3LRN20E5M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);