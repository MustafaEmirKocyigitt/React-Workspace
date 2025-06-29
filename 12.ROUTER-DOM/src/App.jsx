import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPages from './pages/NotFoundPages'
import Header from './components/Header'
import Employee from './pages/Employee'
import Company from './pages/Company'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} >
          <Route path='empoloyee' element={<Employee/>}/>
          <Route path='company' element={<Company/>} />
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/products-details/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPages />} />

      </Routes>
    </div>
  )
}

export default App
