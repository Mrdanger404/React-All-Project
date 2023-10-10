import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBHJw5IHGTP_AeISEMpu7e28fenLLcnR8M",
    authDomain: "collage-c779f.firebaseapp.com",
    databaseURL: "https://collage-c779f-default-rtdb.firebaseio.com",
    projectId: "collage-c779f",
    storageBucket: "collage-c779f.appspot.com",
    messagingSenderId: "197490407903",
    appId: "1:197490407903:web:f2f05d6a62c2103a9cac6a",
    measurementId: "G-51B138GC2H"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export {auth,database}