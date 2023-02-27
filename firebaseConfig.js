import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCvEdkZgwI6e3bIZTL6cI3il5Yz3e9oGpw",
  authDomain: "reactnative-14449.firebaseapp.com",
  databaseURL: "https://reactnative-14449-default-rtdb.firebaseio.com",
  projectId: "reactnative-14449",
  storageBucket: "reactnative-14449.appspot.com",
  messagingSenderId: "291181241099",
  appId: "1:291181241099:web:24bb0f9b52dd1aea52380e",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


