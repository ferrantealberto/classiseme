// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0lbFFhTjr05ETGDRNSi8bQGDA2lOxdcg",
  authDomain: "progetto-seme.firebaseapp.com",
  databaseURL: "https://progetto-seme-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "progetto-seme",
  storageBucket: "progetto-seme.firebasestorage.app",
  messagingSenderId: "111990248618",
  appId: "1:111990248618:web:605c37a8cc7232ba76ecd3",
  measurementId: "G-15K5E9J7CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
