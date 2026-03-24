 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc2ISHIX_g5RJqlZv8JVIDqvk0mDVeBCs",
  authDomain: "pickbazar-b75d0.firebaseapp.com",
  projectId: "pickbazar-b75d0",
  storageBucket: "pickbazar-b75d0.firebasestorage.app",
  messagingSenderId: "338759221915",
  appId: "1:338759221915:web:7ae9a9e1ed759f88dd3c3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export{auth};