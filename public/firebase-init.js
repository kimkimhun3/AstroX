// public/firebase-init.js

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCIs_wr1kFNFMX156TSLy8h8JqMpskwGDg",
  authDomain: "sorryiloveyou.firebaseapp.com",
  projectId: "sorryiloveyou",
  storageBucket: "sorryiloveyou.appspot.com",
  messagingSenderId: "1034466506886",
  appId: "1:1034466506886:web:75fab4606a91cd9fe6b907",
  measurementId: "G-TNZ4XJE5N3"
};

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
