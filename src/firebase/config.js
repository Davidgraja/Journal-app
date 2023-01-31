// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// dev/production:
// const firebaseConfig = {
//     apiKey: "AIzaSyDqwgixeUKZNXD1JDK6cNGfatVRnuwumCY",
//     authDomain: "react-curso-dbdbe.firebaseapp.com",
//     projectId: "react-curso-dbdbe",
//     storageBucket: "react-curso-dbdbe.appspot.com",
//     messagingSenderId: "582650673959",
//     appId: "1:582650673959:web:85a99fc4b1a6fef1c68702"
// };


// Testing:

const firebaseConfig = {
    apiKey: "AIzaSyCpi9pviketBbMj4qskvlElezh-MpFO6kg",
    authDomain: "database-testing-892c8.firebaseapp.com",
    projectId: "database-testing-892c8",
    storageBucket: "database-testing-892c8.appspot.com",
    messagingSenderId: "798812816796",
    appId: "1:798812816796:web:83cdf6cce658c47b5f7459"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

// config  Authentication
export const FirebaseAuth = getAuth(FirebaseApp);

// config of firestore (Data  base )
export const FirebaseDB   =  getFirestore(FirebaseApp);