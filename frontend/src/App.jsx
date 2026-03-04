import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SingleBlog from './pages/SingleBlog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
 import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/blogs/:id' element={<SingleBlog/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
