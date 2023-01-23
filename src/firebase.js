// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV5junQG4d-cC-HH7aMLTlRB4ChtnXYtQ",
    authDomain: "react-auth-5da0a.firebaseapp.com",
    projectId: "react-auth-5da0a",
    storageBucket: "react-auth-5da0a.appspot.com",
    messagingSenderId: "698877556572",
    appId: "1:698877556572:web:fc9b4ecdcb09d54d393399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;