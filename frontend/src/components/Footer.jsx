import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='flex flex-col py-12 md:flex-row items-center justify-between'>
        {/* first div  */}
      <div className='flex flex-col w-full items-center justify-center px-2 sm:w-1/3 gap-2'>
        <h1 className='text-xl font-bold text-gray-700'>About</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quia unde voluptatibus nulla magni. Nihil aspernatur ab facilis eius tempore quaerat totam placeat.</p>
        <h4 className='text-lg font-normal'>Email : samee@gmail.com</h4>
        <h4 className='text-lg font-normal'>Phone : 1234567890</h4>
      </div>
      {/* second dev  */}
      <div>
        <h1 className='text-xl font-bold text-gray-700 mb-5'>Quick Links</h1>
        <ul className='flex flex-col gap-2'>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/">Home</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/blogs">Blogs</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/about">About</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/contact">Contact</Link>
        </ul>
      </div>
      {/* third div  */}
         <div>
        <h1 className='text-xl font-bold text-gray-700 mb-5'>Categories</h1>
        <ul className='flex flex-col gap-2'>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/">Weather</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/blogs">LifeStyle</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/about">Technology</Link>
            <Link className='cursor-pointer hover:text-black text-gray-700' to="/contact">News</Link>
        </ul>
      </div>
    </div>
    <hr className="w-full h-[2px] bg-gray-700 border-0 my-4" />

<div className="w-full border-t border-gray-200 mt-10">
  <div className="max-w-7xl mx-auto px-4 py-6 
                  flex flex-col md:flex-row 
                  justify-between items-center 
                  gap-6">

    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <img src={assets.logo} alt="MetaBlog Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
      <p className="text-lg sm:text-xl font-medium">
        Meta <span className="font-bold">Blog</span>
      </p>
    </div>

    {/* Links Section */}
    <ul className="flex flex-col sm:flex-row 
                   items-center gap-3 sm:gap-6 
                   text-sm text-gray-600 
                   text-center">
      <li className="hover:text-orange-500 cursor-pointer transition">
        Privacy Policy
      </li>
      <li className="hover:text-orange-500 cursor-pointer transition">
        Terms & Conditions
      </li>
      <li className="text-gray-400">
        © 2026 sameTechi
      </li>
    </ul>

  </div>
</div>
    </>

  )
}

export default Footer
