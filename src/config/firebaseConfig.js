import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDktbegC8EqB_8PtcxINZiqV_39XrMby20",
    authDomain: "petrolgram-67fcf.firebaseapp.com",
    projectId: "petrolgram-67fcf",
    storageBucket: "petrolgram-67fcf.appspot.com",
    messagingSenderId: "965393247037",
    appId: "1:965393247037:web:b125a84a2fd05db565f354"
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database