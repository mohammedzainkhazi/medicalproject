// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBTzuiTUUDeauw4JqH3YXX5cznmI70lWrU",
    authDomain: "remote-patient-monitor.firebaseapp.com",
    projectId: "remote-patient-monitor",
    storageBucket: "remote-patient-monitor.appspot.com",
    messagingSenderId: "789543763522",
    appId: "1:789543763522:web:7ac4e13ad7294ac34f77db",
    measurementId: "G-EW8XRYPT47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

export const auth = getAuth();
export default app;