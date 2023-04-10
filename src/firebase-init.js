import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCBlEkdpxpwa-zLyKPrcikOujCTsttT0K4",
  authDomain: "clone-7c093.firebaseapp.com",
  projectId: "clone-7c093",
  storageBucket: "clone-7c093.appspot.com",
  messagingSenderId: "363365425552",
  appId: "1:363365425552:web:ed88ba9567f8f6f93e9315"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }