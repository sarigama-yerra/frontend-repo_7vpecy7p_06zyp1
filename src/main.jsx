import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import Forums from './components/Forums'
import Deals from './components/Deals'
import Products from './components/Products'
import Requests from './components/Requests'
import Profile from './components/Profile'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route path="/" element={<Home />} />
          <Route path="/foros" element={<Forums />} />
          <Route path="/ofertas" element={<Deals />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/peticiones" element={<Requests />} />
          <Route path="/perfil" element={<Profile />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
