// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfFV8uPMR4_Qd3-_XD-Ab5CwAqox2lNAw",
  authDomain: "ciudad-15-minutos.firebaseapp.com",
  projectId: "ciudad-15-minutos",
  storageBucket: "ciudad-15-minutos.appspot.com",
  messagingSenderId: "357233186162",
  appId: "1:357233186162:web:c4da033af5199d3aca39eb",
  measurementId: "G-XEX52BMMJ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);