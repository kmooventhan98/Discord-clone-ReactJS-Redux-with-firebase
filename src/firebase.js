import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNlsWyg6Leg64N-YFi-1-gYH3T9rR0nUc",
    authDomain: "discord-44b7b.firebaseapp.com",
    projectId: "discord-44b7b",
    storageBucket: "discord-44b7b.appspot.com",
    messagingSenderId: "507997625712",
    appId: "1:507997625712:web:6751881529b96f2c1403b5",
    measurementId: "G-4KJZCWFTXM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  
  export { auth, provider };
  export default db;