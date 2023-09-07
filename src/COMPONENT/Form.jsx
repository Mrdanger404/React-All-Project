import { useState } from "react"

function FORM() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo)
        console.log(name,email,password)
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

