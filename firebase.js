// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIs_wr1kFNFMX156TSLy8h8JqMpskwGDg",
  authDomain: "sorryiloveyou.firebaseapp.com",
  projectId: "sorryiloveyou",
  storageBucket: "sorryiloveyou.appspot.com",
  messagingSenderId: "1034466506886",
  appId: "1:1034466506886:web:75fab4606a91cd9fe6b907",
  measurementId: "G-TNZ4XJE5N3"
};

// Initialize Firebase
let analytics;
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };