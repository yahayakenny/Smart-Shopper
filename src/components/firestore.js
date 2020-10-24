import 'firebase/firestore';
import firebase from '@firebase/app';


var firebaseConfig = {
    apiKey: "AIzaSyBrFeL9ZhYtwkGWXjnTFSswSOjZqFKr4z4",
    authDomain: "chatty-8673b.firebaseapp.com",
    databaseURL: "https://chatty-8673b.firebaseio.com",
    projectId: "chatty-8673b",
    storageBucket: "chatty-8673b.appspot.com",
    messagingSenderId: "254466898326",
    appId: "1:254466898326:web:2fb9eb0cb9aa2908a7c5b7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  export {db, firebase};

