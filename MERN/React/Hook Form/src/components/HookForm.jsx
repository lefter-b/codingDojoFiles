import { useState } from "react";

const HookForm = (props) => {
    
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
                <div className="fname" style={{ marginBottom: '10px' }}>
                    <label htmlFor="FirstName" >First Name</label>
                    <input type="text" name="firstName" id="firstName" value={firstName}
                     onChange={event => setFirstName(event.target.value)}
                    />
                </div>
                <div >
                    <label htmlFor="lastName">Last Name</label>
                    <input  type="text" name="lastName" id="lastName" value={lastName}
                     onChange={event => setLastName(event.target.value)}
                    />
                </div>
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email}
                     onChange={event => setEmail(event.target.value)} 
                    />
                </div>
                <div >
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" value={password}
                     onChange={event => setPassword(event.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name="confirmPass" id="confirmPass" value={confirmPass}
                     onChange={event => setConfirmPass(event.target.value)}    
                    />
                </div>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPass}</p>
            </div>
        </div>
    );
};

export default HookForm;
 