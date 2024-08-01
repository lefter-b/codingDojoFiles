import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const NewPirate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [nrofTreasure, setNrofTreasure] = useState(1);
    const [crewPosition, setCrewPosition] = useState('Captain');
    const [petLeg, setPetLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState('');

    const createPirate = (e) => {
        e.preventDefault();

        
        if (name.length < 2 || image.length < 2 || catchPhrase.length < 2 || crewPosition.length < 2) {
            setErrors('Please include all the required information!');
        } else {
            const newPirate = {
                name: name,
                image: image,
                catchPhrase: catchPhrase,  
                nrofTreasure: Number(nrofTreasure),  
                crewPosition: crewPosition,
                petLeg: petLeg,
                eyePatch: eyePatch,
                hookHand: hookHand
            };

            axios.post('http://localhost:8000/api/pirates', newPirate)
                .then(res => navigate('/pirates'))  
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <form onSubmit={createPirate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='image'>Image:</label>
                    <input id='image' type='text' value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='nrofTreasure'>Number of Treasure: </label>
                    <input id='nrofTreasure' type='number' value={nrofTreasure} onChange={(e) => setNrofTreasure(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='catchPhrase'>Catch Phrase</label>
                    <input id='catchPhrase' type='text' value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='crewPosition'>Crew Position: </label>
                    <select id='crewPosition' value={crewPosition} onChange={(e) => setCrewPosition(e.target.value)}>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='petLeg'>Pet Leg</label>
                    <input id='petLeg' type='checkbox' checked={petLeg} onChange={(e) => setPetLeg(e.target.checked)} />
                </div>
                <div>
                    <label htmlFor='eyePatch'>Eye Patch</label>
                    <input id='eyePatch' type='checkbox' checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />
                </div>
                <div>
                    <label htmlFor='hookHand'>Hook Hand</label>
                    <input id='hookHand' type='checkbox' checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />
                </div>
                {errors && <p style={{ color: 'red' }}>{errors}</p>}
                <button>Add Pirate</button>
            </form>
        </div>
    );
};

export default NewPirate;

