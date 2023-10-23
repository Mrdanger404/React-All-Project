import '../CSS/AUTHENTICATION/SignUp.css'

import { auth, database } from '../../ADMIN/Data'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginNavigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, `users/${user.uid}`),{
        userName: userName,
        userPhone: userPhone,
        userEmail: email,
        userPassword: password
      });
      alert(`Hello ${userName}, your signup is successful`);
      loginNavigate("/login")
    })
    .catch((Error) => {
      if (Error.code) {
        alert(`${email} is already registered`);
      }
      if (Error.message) {
        console.log(Error.message)
      }
    });
    setUserName("");
    setUserPhone("")
    setEmail("");
    setPassword("")
  }
  return (
    <>
      <div className="signup-container">
        <div className="signup-card-container">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter name" value={userName} onChange={(e)=> setUserName(e.target.value)} />
            <input type="tel" placeholder="Enter phone" value={userPhone} onChange={(e)=> setUserPhone(e.target.value)} />
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp