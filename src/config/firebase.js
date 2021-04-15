import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr-2WNo8wzRQ27-G8u8oWjXqvRT-W2jlw",
  authDomain: "crud-application-af855.firebaseapp.com",
  databaseURL: "https://crud-application-af855-default-rtdb.firebaseio.com",
  projectId: "crud-application-af855",
  storageBucket: "crud-application-af855.appspot.com",
  messagingSenderId: "906288717197",
  appId: "1:906288717197:web:783bec2954fe0916cc31c4",
  measurementId: "G-ED7LRK09PE"
};

firebase.initializeApp(firebaseConfig);

export default firebase;