import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Contactus from './Components/Contactus'
import About from './Components/About'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/Shop" element={<Shop/>} />
      <Route path="/Contactus" element={<Contactus/>} />
    </Routes>
  </main>
)

export default Main