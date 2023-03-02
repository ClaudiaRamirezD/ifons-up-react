// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8hmd50ehFuAw7_cuAg9apllwI37uUX7Q",
  authDomain: "ecommerce-ifonesup.firebaseapp.com",
  projectId: "ecommerce-ifonesup",
  storageBucket: "ecommerce-ifonesup.appspot.com",
  messagingSenderId: "136425973909",
  appId: "1:136425973909:web:07fe010ca070d2e7f1d39c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}
