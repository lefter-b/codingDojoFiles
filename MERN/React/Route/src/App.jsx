import { useState } from 'react'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Helloblue from './components/Helloblue';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>} />  
          <Route path='/4' element={<Number/>} />
          <Route path='/Hello' element={<Hello/>} />
          <Route path='/Hello/blue/red' element={<Helloblue/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
