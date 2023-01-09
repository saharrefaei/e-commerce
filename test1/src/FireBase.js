import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAs_qgBooow5LlFBjoJbhIWcBtbzPaRndE",
    authDomain: "e-commerce-f40aa.firebaseapp.com",
    projectId: "e-commerce-f40aa",
    storageBucket: "e-commerce-f40aa.appspot.com",
    messagingSenderId: "21053194783",
    appId: "1:21053194783:web:c30e2af1d1a44da0da8b2a",
    measurementId: "G-V0847YW63J"
  };

  const FireBaseApp = firebase.initializeApp(firebaseConfig);
const TimeStamp = firebase.firestore.FieldValue.serverTimestamp();


export {TimeStamp};
export default FireBaseApp.firestore();