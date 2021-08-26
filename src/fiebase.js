// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCOXBcNlOQ0y7ZNMSVUF7Y80M7qSR3Mq60",
    authDomain: "linkedin-clone-b6414.firebaseapp.com",
    projectId: "linkedin-clone-b6414",
    storageBucket: "linkedin-clone-b6414.appspot.com",
    messagingSenderId: "705560548781",
    appId: "1:705560548781:web:db8498b6d46fca9b77fd24",
    measurementId: "G-7Z4J3F5PXL"
  };
  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebaseapp.auth();
  export {db,auth};