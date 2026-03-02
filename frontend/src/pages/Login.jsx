import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
        <div className='w-full bg-pink-300 py-12 mx-auto flex items-center justify-center'>

      <div className='w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow'>
        <h1 className='text-lg font-bold text-center text-gray-700'>
          Login into your account!
        </h1>
        <form action="" className='flex flex-col gap-5 mt-5 w-full'>
          <input type="email" placeholder='Your email 'className='w-full p-2 border-gray-300 border rounded outline-none'  required />
          <input type="password" placeholder='Your password ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <button className='bg-orange-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300'>SignIn</button>
        </form>
        <p className='text-center mt-4'>Don't have an account? <Link to={"/register"} className='text-orange-600 cursor-pointer'>Register hare</Link></p>
      </div>
    </div>
  )
}

export default Login
