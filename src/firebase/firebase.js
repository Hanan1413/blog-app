// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB7WWvY65wbvxdp1UPiWAmrTKdOpPpTHg",
  authDomain: "articles-5afcf.firebaseapp.com",
  projectId: "articles-5afcf",
  storageBucket: "articles-5afcf.appspot.com",
  messagingSenderId: "47592075980",
  appId: "1:47592075980:web:e5ab02fbe7ac6b7e798869"
};




//  web app's Firebase configuration
const articleFirebaseConfig = {
  apiKey: "AIzaSyDmKfdKMLWHLGhqghWuSvqMUg8lmBbtGt4",
  authDomain: "blog-authentication-99f3c.firebaseapp.com",
  projectId: "blog-authentication-99f3c",
  storageBucket: "blog-authentication-99f3c.appspot.com",
  messagingSenderId: "605023152383",
  appId: "1:605023152383:web:8d485a162537b06ea784ca",
};

//  web app's Firebase configuration for authentication
const authFirebaseConfig = {
  apiKey: "AIzaSyDmKfdKMLWHLGhqghWuSvqMUg8lmBbtGt4",
  authDomain: "blog-authentication-99f3c.firebaseapp.com",
  projectId: "blog-authentication-99f3c",
  storageBucket: "blog-authentication-99f3c.appspot.com",
  messagingSenderId: "605023152383",
  appId: "1:605023152383:web:8d485a162537b06ea784ca",
};

// Initialize Firebase for articles
// const articleApp = initializeApp(articleFirebaseConfig);


// Initialize Firebase article
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Initialize Firebase for authentication
const authApp = initializeApp(authFirebaseConfig, "auth");
export const auth = getAuth(authApp);

