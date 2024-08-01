import { useState } from 'react'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Newpirate from './components/Newpirate';
import Pirate from './components/Pirate';
import Login from './components/Login';
import './App.css'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/pirate' element={<Home/>}/>
          <Route path='/new/pirate' element={<Newpirate/>} />
          <Route path='/pirate/:id' element={<Pirate/>} />
          <Route path='/pirate/:id/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

