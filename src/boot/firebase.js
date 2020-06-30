import * as firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/auth";
import "firebase/firestore";

let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseDb = firebaseApp.firestore();
let firebaseAuth = firebaseApp.auth();

export { firebaseDb, firebaseAuth };
