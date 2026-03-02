import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='w-full bg-pink-300 py-12 mx-auto flex items-center justify-center'>

      <div className='w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow'>
        <h1 className='text-lg font-bold text-center text-gray-700'>
          Create your account!
        </h1>
        <form action="" className='flex flex-col gap-5 mt-5 w-full'>
          <input type="text" placeholder='Your name ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <input type="email" placeholder='Your email 'className='w-full p-2 border-gray-300 border rounded outline-none'  required />
          <input type="password" placeholder='Your password ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <input type="file"  className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <button className='bg-orange-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300'>Signup</button>
        </form>
        <p className='text-center mt-4'>Already have an account? <Link to={"/login"} className='text-orange-600 cursor-pointer'>Login hare</Link></p>
      </div>
    </div>
  )
}

export default Signup
