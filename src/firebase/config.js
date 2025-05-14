import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOMR0owNroBrXnl1vEJ1kWOGJOllYbsvE",
  authDomain: "todo-list-bfe58.firebaseapp.com",
  projectId: "todo-list-bfe58",
  storageBucket: "todo-list-bfe58.firebasestorage.app",
  messagingSenderId: "291052999266",
  appId: "1:291052999266:web:ed851e65e684870c95f73b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
