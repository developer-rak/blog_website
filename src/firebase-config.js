import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhE8SjuDuz7uMs0jk9Us9xK8sSTW08SuU",
  authDomain: "blogwebsite-e3809.firebaseapp.com",
  projectId: "blogwebsite-e3809",
  storageBucket: "blogwebsite-e3809.appspot.com",
  messagingSenderId: "934885401561",
  appId: "1:934885401561:web:94b8b0fc96152f2456afc8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();