import { useState } from 'react'

import './App.css'
import List from './components/list';
import Form from './components/form';


function App() {
  const [list,setList] =useState([{value:"Get Python black belt",done:false}]);

  return (
    <div className="app-container">
      <h1>To do list</h1>
      <Form list={list} setList = {setList}/>
      <List list ={list} setList = {setList}/>
    </div>
  );
}
export default App;
