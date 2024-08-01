import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => {
        setPokemons(res.data.results);
        setLoading(false); 
      })
      .catch(err => {
        console.error(err);
        setError(err); 
        setLoading(false);
      });
  }, []);  

  if (loading) return <div>Loading...</div>;  
  if (error) return <div>Error loading data</div>;  

  return (
    <div className="app-container">
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon, index) =>
          <li key={index}>{pokemon.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;

