import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:1090810973003:web:51b518af75d2b5cb45f6ce",
  measurementId: "G-L7FZFBSGJN",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
