import * as firebase from "firebase";
import expenses from "../test/fixtures/expenses";

const firebaseConfig = {
  apiKey: "AIzaSyAkZHFuV9qZvyfqNWR5rFfkf-WPnDH6CmQ",
  authDomain: "expense-7bf6b.firebaseapp.com",
  databaseURL: "https://expense-7bf6b-default-rtdb.firebaseio.com",
  projectId: "expense-7bf6b",
  storageBucket: "expense-7bf6b.appspot.com",
  messagingSenderId: "1090810973003",
  appId: "1:1090810973003:web:51b518af75d2b5cb45f6ce",
  measurementId: "G-L7FZFBSGJN",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
