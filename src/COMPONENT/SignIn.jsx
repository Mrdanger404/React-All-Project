import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {auth} from './Database'
import { signInWithEmailAndPassword } from "firebase/auth";



const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigatDashboard = useNavigate();

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitChange = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigatDashboard(`/UpdateDetails/${user.uid}`)
            alert("Logged in successful")
        })
        .catch((error)=>{
            if(error.code) {
                alert("User is not exist")
                navigate("/SignUp")
            }
        })
    }


  return (
    <>
        <div>
            <form onSubmit={handleSubmitChange}>
                <input type="email" onChange={handleEmailChange} value={email} placeholder="Enter email"></input>
                <input type="password" onChange={handlePasswordChange} value={password} placeholder="Enter Password"></input>
                <button type="submit" >Login</button>
            </form>
            <button onClick={()=>{navigate("/SignUp")}} >SignUp</button>
        </div>
    </>
  )
}

export default SignIn