import { Link, useNavigate } from "react-router-dom"
import '../CSS/AUTHENTICATION/Login.css'
import { auth } from "../../ADMIN/Data"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpNavigate = useNavigate();
  const homeNavigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert(`${email} is successfully logged in`)
      homeNavigate("/")
    })
    .catch((erro) => {
      if (erro.code) {
        alert(`${email} is not registered`)
        signUpNavigate("/signup")
      }
    })
  }
  return (
    <>
      <div className="login-container">
        <div className="login-card-container">
        <div className="login-card">
          <h1>Login</h1>
          <div className="login">
              <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button>Login</button>
              </form>
          </div>
        </div>
        <div className="login-page-button">
          <Link to="/signup" className="link login-page">SignUp</Link>
          <Link to="/" className="link login-page">Home</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login