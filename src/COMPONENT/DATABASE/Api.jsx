import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAeTda44HaWgL7MzR_IPRzDdQKw3LesxG8",
  authDomain: "tajbir-46478.firebaseapp.com",
  databaseURL: "https://tajbir-46478-default-rtdb.firebaseio.com",
  projectId: "tajbir-46478",
  storageBucket: "tajbir-46478.appspot.com",
  messagingSenderId: "86903927170",
  appId: "1:86903927170:web:07df67fb64b5fbb859df9b",
  measurementId: "G-16MFQXP920"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)
const storage = getStorage(app)

export {auth,database,storage}