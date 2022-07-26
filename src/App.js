
import React from 'react'
import SignIn from "./pages/Signin";
import {BrowserRouter , Route, Routes } from "react-router-dom"
import Weather from './main';
import WelcomePage from './pages/WelcomePage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={<WelcomePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

