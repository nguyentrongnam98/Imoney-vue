import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCVf6t2ShyYrvXeR0uO0RVMJdZryr9LzxM",
    authDomain: "vuejs-ae536.firebaseapp.com",
    projectId: "vuejs-ae536",
    storageBucket: "vuejs-ae536.appspot.com",
    messagingSenderId: "807056537263",
    appId: "1:807056537263:web:be12a605487325038b065a",
    measurementId: "G-LG7V3NRK2F"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { db,app,auth,storage, };


