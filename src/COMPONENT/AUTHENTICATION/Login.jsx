import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import { auth } from "../DATABASE/Config";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


const Login = () => {
  const homeNavigate = useNavigate();
  const signUpNavigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser){
        homeNavigate(`/${authUser?.uid}`)
      }
      
    })

    return () => unsubscribe()
  },[homeNavigate])
  const login = (e) => {

    e.preventDefault()
    
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert(`${email} is logged in successful`)
    })
    .catch((error) => {
      console.log(error.code)
      if(error.code == "auth/user-disabled"){
        toast.error('Your account is disabled')
      }
      if(error.code == "auth/invalid-login-credentials"){
        toast.error('Your account is not registered')
      }
    })
  }
  return (
    <>
    <ToastContainer />
    <div className="h-screen flex items-center justify-center">
      <div className="p-5  w-[300px] flex flex-col items-center justify-center rounded-3xl shadow-2xl">
        <form onSubmit={login} className="flex flex-col w-[250px] ">
          <input type="email" required placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="my-2 p-3 rounded-3xl border border-black "/>
          <input type="password" required placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="my-2 p-3 rounded-3xl border border-black" />
          <button type="submit" className="my-2 bg-black text-white h-10 rounded-3xl transition hover:bg-green-600 hover:shadow-2xl duration-500">Login</button>
        </form>
        <button className="my-2 bg-black text-white h-10 rounded-3xl transition hover:bg-green-600 hover:shadow-2xl duration-500 w-full" onClick={() => signUpNavigate('/signup')}>SingUp</button>
        <NavLink to={'/contact'} className='text-center text-blue-700 hover:text-red-800 font-semibold'>If you forgot password contact admin with email</NavLink>
      </div>
    </div>
    </>
  )
}

export default Login