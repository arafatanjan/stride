import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCx1qsXO6ttRkBOopEq0CRZ2vtirg_rpRc",
  authDomain: "stride-00.firebaseapp.com",
  projectId: "stride-00",
  storageBucket: "stride-00.appspot.com",
  messagingSenderId: "122714717986",
  appId: "1:122714717986:web:05304da0cb07e661346f7b",
  measurementId: "G-06F8HZDMXM"
  };

console.log("Firebase Config:", firebaseConfig); 
export const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_apiKey,
//     authDomain: import.meta.env.VITE_authDomain,
//     projectId: import.meta.env.VITE_projectId,
//     storageBucket: import.meta.env.VITE_storageBucket,
//     messagingSenderId: import.meta.env.VITE_messagingSenderId,
//     appId: import.meta.env.VITE_appId,
//     measurementId: import.meta.env.VITE_measurementId,
//   };