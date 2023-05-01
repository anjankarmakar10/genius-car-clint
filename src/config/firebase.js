import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0CX415C87nbA4St-Pj1UtLSiSbT32eF8",
  authDomain: "genius-car-ff85b.firebaseapp.com",
  projectId: "genius-car-ff85b",
  storageBucket: "genius-car-ff85b.appspot.com",
  messagingSenderId: "452453851053",
  appId: "1:452453851053:web:0b6e7dc64866b32233cb24",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
export const githubAuthProvider = new GithubAuthProvider();
