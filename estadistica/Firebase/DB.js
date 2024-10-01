import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBX0AZBxRyki84_PMzprdJvXLJgYB8miDo",
  authDomain: "estadisticas-de2ea.firebaseapp.com",
  projectId: "estadisticas-de2ea",
  storageBucket: "estadisticas-de2ea.appspot.com",
  messagingSenderId: "687357537053",
  appId: "1:687357537053:web:e49c318613a68185224ff4",
  measurementId: "G-BS9324CHZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;