import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBPNxHoVzsrq-lx891d-dxB74bT355p9Pc",
  authDomain: "pugalvini-portfolio.firebaseapp.com",
  databaseURL: "https://pugalvini-portfolio-default-rtdb.firebaseio.com",
  projectId: "pugalvini-portfolio",
  storageBucket: "pugalvini-portfolio.firebasestorage.app",
  messagingSenderId: "797549357844",
  appId: "1:797549357844:web:b42e57d99caa31149fb001"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
