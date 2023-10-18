import { Link } from "react-router-dom"
import '../CSS/AUTHENTICATION/Login.css'

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-card-container">
        <div className="login-card">
          <h1>Login</h1>
          <div className="login">
              <form>
                <input type="email" placeholder="Enter your email" />
                <input type="password" placeholder="Enter your password" />
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