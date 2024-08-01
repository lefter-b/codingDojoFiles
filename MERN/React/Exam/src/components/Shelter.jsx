import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shelter = () => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [pet, setPet] = useState("");
    const [petError, setPetError] = useState("");
    const [type, setType] = useState("");
    const [typeError, setTypeError] = useState("");

    const handleTitle = (e) => {
        const value = e.target.value;
        setTitle(value);
        if (value.length < 1) {
            setTitleError("Title is required!");
        } else if (value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            setTitleError("");
        }
    };

    const handlePet = (e) => {
        const value = e.target.value;
        setPet(value);
        if (value.length < 3) {
            setPetError("Pet name must be 3 characters or longer!");
        } else {
            setPetError("");
        }
    };

    const handleType = (e) => {
        const value = e.target.value;
        setType(value);
        if (value.length < 3) {
            setTypeError("Type must be 3 characters or longer!");
        } else {
            setTypeError("");
        }
    };

    // Function to handle form submission (you might want to process the data or send it somewhere)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && pet && type && !titleError && !petError && !typeError) {
            // Handle the form submission or data processing here
            console.log("Form Submitted:", { title, pet, type });
            // Reset form fields if necessary
            setTitle("");
            setPet("");
            setType("");
        }
    };

    return (
        <>
            <div className="nav1">
                <h1>Pet Shelter</h1>
                <Link to="/" className="add1">Back home</Link>
            </div>
            <h2 className="pets">Know a pet needing a home?</h2>
            <main className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <input type="text" onChange={handleTitle} value={title} />
                        {titleError && <p style={{ color: "red" }}>{titleError}</p>}
                    </div>
                    <div>
                        <label>Pet: </label>
                        <input type="text" onChange={handlePet} value={pet} />
                        {petError && <p style={{ color: "red" }}>{petError}</p>}
                    </div>
                    <div>
                        <label>Type: </label>
                        <input type="text" onChange={handleType} value={type} />
                        {typeError && <p style={{ color: "red" }}>{typeError}</p>}
                    </div>
                    <div>
                    <Link to="/">
                        <button type="submit">
                            Add Pet
                            <span> 
                                <img src="/upload.jpg" alt="Upload" width={40} className="img" />
                            </span>
                        </button>
                    </Link>
                    </div>
                </form>
                <div className="skills">
                    <h2>Skills (optional):</h2>
                    <div>
                        <label>Skill 1:</label>
                        <input type="text" name="skill1" />
                    </div>
                    <div>
                        <label>Skill 2:</label>
                        <input type="text" name="skill2" />
                    </div>
                    <div>
                        <label>Skill 3:</label>
                        <input type="text" name="skill3" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Shelter;
