import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import {Routes,Route} from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login';

import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'

function App() {
    return (
    <div>
    <Header />
       <Routes>
          <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/emphome" element={<EmpHome></EmpHome>}></Route>
      <Route path="/hrhome" element={<HrHome></HrHome>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
<Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
<Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>

       </Routes>
    <Footer/>
    </div>
  )
}

export default App