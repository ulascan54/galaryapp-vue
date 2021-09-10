import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL1r0MPwTagHRDHT2cJOL9mv_f-qik_Qc",
  authDomain: "galaryapp-vue.firebaseapp.com",
  projectId: "galaryapp-vue",
  storageBucket: "galaryapp-vue.appspot.com",
  messagingSenderId: "1049149879922",
  appId: "1:1049149879922:web:d82e4f6e425f7eba2ef4eb",
};

firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firebaseDb = firebase.firestore();

const date = firebase.firestore.FieldValue.serverTimestamp;

export {firebaseStorage,firebaseDb,date}
