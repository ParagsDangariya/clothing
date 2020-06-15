import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB51DTfWF8XKdTIREfIZ-IDrLlZZ1mbu1c",
  authDomain: "clothing-website-b4f17.firebaseapp.com",
  databaseURL: "https://clothing-website-b4f17.firebaseio.com",
  projectId: "clothing-website-b4f17",
  storageBucket: "clothing-website-b4f17.appspot.com",
  messagingSenderId: "821345898824",
  appId: "1:821345898824:web:c1bda0e0b511c44ddc637d",
  measurementId: "G-EK2754RETH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
