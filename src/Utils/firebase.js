import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZgmyOcP9UF_S79P3EqESnSGBXkSYT1QE",
  authDomain: "artisans-75fd0.firebaseapp.com",
  projectId: "artisans-75fd0",
  storageBucket: "artisans-75fd0.appspot.com",
  messagingSenderId: "222411781452",
  appId: "1:222411781452:web:be36caef633ca9a4e64be9",
  measurementId: "G-7Z5Q8MVP94"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;

