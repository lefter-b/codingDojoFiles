import { useState } from "react";
import { Link } from "react-router-dom";
const Login = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted!");

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Welcome to Private Crew</h1>
                <h2>Register</h2>
                <div className="Firstname" style={{ marginBottom: '10px' }}>
                    <label htmlFor="FirstName">First Name</label >
                    <input type="text" name="firstName" id="firstName" value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                    {firstName.length > 0 && firstName.length < 2 && (
                        <p>First Name must be at least 2 characters</p>
                    )}
                </div>
                <div style={{ marginBottom: '10px' }} className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                    {lastName.length > 0 && lastName.length < 2 && (
                        <p>Last Name must be at least 2 characters</p>
                    )}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    {email.length > 0 && !/\S+@\S+\.\S+/.test(email) && (
                        <p >Email must be at least 2 characters</p>
                    )}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    {password.length > 0 && password.length < 8 && (
                        <p >Password must be at least 8 characters</p>
                    )}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    {confirmPass.length > 0 && confirmPass !== password && (
                        <p>Passwords must match.</p>
                    )}
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" value={confirmPass}
                        onChange={event => setConfirmPass(event.target.value)} />
                </div>
                <Link to="/pirate">
                    <button type="submit">
                        Register
                    </button>
                </Link>
            </form>
            <form onSubmit={handleSubmit}>
                <h3>Log in</h3>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    {email.length > 0 && !/\S+@\S+\.\S+/.test(email) && (
                        <p >Email must be at least 2 characters</p>
                    )}
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    {password.length > 0 && password.length < 8 && (
                        <p >Password must be at least 8 characters</p>
                    )}
                </div>
                <Link to="/pirate">
                    <button type="submit">
                        Log in
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
