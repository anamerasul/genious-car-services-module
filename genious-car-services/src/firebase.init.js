// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAk8pAX99rOTdDtFNhNxMo3FxIQAU7PBGA",
    authDomain: "genious-car-services-8a2b1.firebaseapp.com",
    projectId: "genious-car-services-8a2b1",
    storageBucket: "genious-car-services-8a2b1.appspot.com",
    messagingSenderId: "553564016956",
    appId: "1:553564016956:web:0c29ceb4b8c108b414ce39",
    measurementId: "G-3VH692D4WR"
};

// Initialize Firebase
const myapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(myapp);


const app = { myapp, analytics }
const auth = getAuth(app.myapp)

export default auth

