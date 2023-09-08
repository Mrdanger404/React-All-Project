import { useState } from "react"

function FORM() {



    const [user, setUser] = useState({name: '', email:'', password:''})
    const {name, email, password} = user


    const handleNameChange = (e) => {
        setUser({name: e.target.value, email, password})
    }
    const handleEmailChange = (e) => {
        setUser({name, email: e.target.value, password})
    }
    const handlePasswordChange = (e) => {
        setUser({name, email, password: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(user)
    }
    return ( 
        <>
            <h1>Registration</h1>
            
            <form action="" onSubmit={handleSubmit}>
                
                <label htmlFor="name">Name </label>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange} />
                <br /> <br />

                <label htmlFor="email">Email </label>
                <input type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange} />
                <br /><br />

                <label htmlFor="password">Password </label>
                <input type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePasswordChange} />
                <br /><br />

                <button type="sublit">submit</button>

            </form>
        </>
     );
}

export default FORM;

