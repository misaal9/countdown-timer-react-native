import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDPJTZPVCySmGnTNtdqm19OEBahoJJQNjI",
  authDomain: "countdown-timer-a5b7b.firebaseapp.com",
  databaseURL: "https://countdown-timer-a5b7b.firebaseio.com",
  projectId: "countdown-timer-a5b7b",
  storageBucket: "countdown-timer-a5b7b.appspot.com",
  messagingSenderId: "723037097819"
}

const Database = firebase
  .initializeApp(config)
  .database()
  .ref()

export default Database