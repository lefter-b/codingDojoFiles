import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {setPirates(res.data.results);
            })
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete ('http://localhost:8000/api/pirates/${id}')
            .then(res =>{
                setPirates(pirates.filter(pirate => pirate._id !==id))
            })
            .catch(err => console.log(err))
    }
    return (
       <div>
            <Link to= {'/new/pirate'}>Add pirate</Link>
            {
                pirates.map((pirate,i)=> {
                    return <div key={i}>
                        <img src={pirate.image} alt='' />
                        <h2>{pirate.name}</h2>
                        <Link to={'/pirate/:id${pirate._id}'}>View Pirate</Link>
                        <button onClick={()=>handleDelete(pirate._id)}>Walk the Plank</button>
                    </div>
                })   
            }
       </div>
    )
}

export default Home;


