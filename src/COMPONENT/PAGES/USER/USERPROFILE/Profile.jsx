import { onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { auth, database } from "../../../DATABASE/Config"
import {signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'



const Profile = ({uid}) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        picture: ''
    })

    const loginNavigate = useNavigate();

    useEffect(() => {
        const dbRef = ref(database, `userInfo/${uid}`);

        onValue(dbRef, (snapshot => {
            setUser({name: snapshot.val()?.name, email: snapshot.val()?.email, password: snapshot.val()?.password, phone: snapshot.val()?.phone, picture: snapshot.val()?.picture})
        }))
    },[uid])


    const signOutHandle = () => {
        signOut(auth).then(() => {
            loginNavigate('/')
        })
    }

  return (
    <>
    
    <div className="justify-between flex p-2 items-center w-full ">
        
        <div className="cursor-pointer group">
            <div className="flex items-center">
                <img src={user?.picture} alt="picture not found" className="h-14 p-2 rounded-full" />
                <p className="font-bold">{user?.name}</p>
            </div>
            <div className="hidden group-hover:block z-10 fixed">
                <img src={user?.picture} alt="picture not found" className="h-32" />
                <p className="font-bold">{user?.name}</p>
                <p>Email : {user?.email}</p>
                <p>Phone : {user?.phone}</p>
                <p>Password : {user?.password}</p>
            </div>
        </div>
        <button onClick={signOutHandle} className="shadow-2xl px-4 font-bold border border-black rounded-xl h-10 focus:bg-rose-800" >sign out</button>
    </div>
    </>
  )
}

export default Profile