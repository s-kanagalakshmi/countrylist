import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Countries from './Countries'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Favorite from './Favorite'
function App() {
  const [country, setcountry] = useState(["America", "Italy", "United Kingdom", "Singapore", "Japan"])
  const [favorite, setfavorite] = useState([])
  const navigate = useNavigate()
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/countries" element={<Countries country={country} setcountry={setcountry} favorite={favorite} setfavorite={setfavorite}/>}  />
        <Route path="/favorite" element={<Favorite country={country} setcountry={setcountry} favorite={favorite} setfavorite={setfavorite} />} ></Route>
      </Routes>

    </section>
  );
}

export default App;

