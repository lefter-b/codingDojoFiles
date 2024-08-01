import React, { useState } from 'react';

function Form({ list, setList }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setList([...list, { value: inputValue, done: false }]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
