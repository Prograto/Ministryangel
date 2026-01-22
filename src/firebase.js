import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQPUetURrrr0VL5OhUsUqJ12D5ZFoKvfE",
  authDomain: "ministryangel-2da99.firebaseapp.com",
  projectId: "ministryangel-2da99",
  storageBucket: "ministryangel-2da99.firebasestorage.app",
  messagingSenderId: "813857331875",
  appId: "1:813857331875:web:d362f5d8b4653205203d16",
  measurementId: "G-185WNFJB94",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
