import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-1b645.firebaseapp.com",
  projectId: "reactchat-1b645",
  storageBucket: "reactchat-1b645.appspot.com",
  messagingSenderId: "457065393042",
  appId: "1:457065393042:web:4657d9dbb1c996083aef4b"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);