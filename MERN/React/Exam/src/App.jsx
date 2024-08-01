import { useState } from 'react'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import Pet from './components/Pet';
import Shelter from './components/Shelter';
import Garfield from './components/Garfield';
import EGarfield from './components/EGarfield';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Pet />} />
          <Route path="/s" element={<Shelter />} />
          <Route path="/g" element={<Garfield />} />
          <Route path="/Eg" element={<EGarfield/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
