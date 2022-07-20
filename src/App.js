
import React from 'react'
import SignIn from "./pages/Signin";
import {BrowserRouter , Route, Routes } from "react-router-dom"
import Weather from './main';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/' element={<SignIn/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

