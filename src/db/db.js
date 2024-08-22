import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBIlxdtdDQCurLwg5v90rpUMAkQvErOpxY",
  authDomain: "ecommerce-react-b6527.firebaseapp.com",
  projectId: "ecommerce-react-b6527",
  storageBucket: "ecommerce-react-b6527.appspot.com",
  messagingSenderId: "595810235630",
  appId: "1:595810235630:web:da403041f1e05989bfafff"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db