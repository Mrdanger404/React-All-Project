import '../CSS/AUTHENTICATION/SignUp.css'
const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-card-container">
          <form>
            <input type="text" placeholder="Enter name" />
            <input type="tel" placeholder="Enter phone" />
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <button>SignUp</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp