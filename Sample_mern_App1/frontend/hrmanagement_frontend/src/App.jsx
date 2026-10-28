import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Services from './pages/Services';
import AdminLogin from './pages/AdminLogin';
import AdminHome from './pages/AdminHome';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import HrHome from './pages/HrHome';
import EmpHome from './pages/EmpHome';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/AdminLogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/AdminHome" element={<AdminHome></AdminHome>}></Route>
        <Route path="/EmpHome" element={<EmpHome></EmpHome>}></Route>
        <Route path="/HrHome" element={<HrHome></HrHome>}></Route>




      </Routes>
      <Footer />
    </div>
  );
}

export default App;
