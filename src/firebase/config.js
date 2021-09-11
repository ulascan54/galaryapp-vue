import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
 //yourconfig
};

firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firebaseDb = firebase.firestore();

const date = firebase.firestore.FieldValue.serverTimestamp;

export {firebaseStorage,firebaseDb,date}
