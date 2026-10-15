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
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/AdminLogin" element={<AdminLogin></AdminLogin>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
