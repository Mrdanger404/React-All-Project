import { useState } from "react"
import {auth, database} from './Database'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {ref, set} from 'firebase/database'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        set(ref(database, `Admins/${user.uid}`), {
          AdminName: name,
          AdminEmail: email,
          AdminPass: password
        })
        alert("SignUp success")
    })
    .catch((error) => {
      if (error.code) {
        alert("Email is already registered")
      }
      if (error.message) {
        console.log(error.message)
      }
    })
    setName("")
    setEmail("")
    setPassword("")
  }

  const navigate = useNavigate()
  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> setName(e.target.value)} value={name} placeholder="Enter name" />
        <input type="email" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="Enter email" />
        <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter password" />
        <button >SignUp</button>
      </form>
      <button onClick={()=>{navigate("/")}}>Login</button>
    </>
  )
}

export default SignUp