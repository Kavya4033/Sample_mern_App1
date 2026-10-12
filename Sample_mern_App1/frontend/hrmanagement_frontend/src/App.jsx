import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<home></home>}></Route>
        <Route path="/about" element={<about></about>}></Route>
        <Route path="/contact" element={<contact></contact>}></Route>

      </Routes>
      <Footer />


    </div>

  )
}

export default App
