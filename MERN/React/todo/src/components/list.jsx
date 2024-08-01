
import React from 'react';

function List({ list, setList }) {
  const toggleDone = (index) => {
    const newList = list.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setList(newList);
  };

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <ul className="list">
      {list.map((item, index) => (
        <li key={index} className={item.done ? 'done' : ''}>
          <span style={{textDecoration: item.done ?"line-through": "None"}}>{item.value}</span>
          <input onClick={()=>handleCheck(idx)} type="checkbox" name="" id="" />
          <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
