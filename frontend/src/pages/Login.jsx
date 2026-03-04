import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { StoreContext } from '../context/StoreContext';




const Login = () => {
  const [formData , setFormData] = useState({
    email:"",
    password:""
  });

  const {loginuser}  =  useContext(StoreContext)
  const token = localStorage.getItem("token")

  const onchangehandler = (e)=>{
    setFormData({...formData , [e.target.name]:e.target.value })

  }


  
  const navigate = useNavigate();

  const [loading , setLoading] = useState(false)

  const submithandler = async (e)=>{
    e.preventDefault();
    try{
      setLoading(true)
      const res=await axios.post("https://blog-backend-448e.onrender.com/users/login" , formData , {
        headers : {"Content-Type" : "application/json"
        }
      })
      if(res.data.success){
        const {user , token} = res.data
        loginuser(user , token)
        toast.success(res.data.message)
        navigate("/")
      }
    }catch(error){
      toast.error(error.message)
    }
    finally{
      setLoading(false)
    }
  }

  return (
        <div className='w-full bg-pink-300 py-12 mx-auto flex items-center justify-center'>

      <div className='w-full bg-white max-w-md p-5 mx-auto py-6 border-1 border-gray-200 shadow'>
        <h1 className='text-lg font-bold text-center text-gray-700'>
          Login into your account!
        </h1>
        <form onSubmit={submithandler} action="" className='flex flex-col gap-5 mt-5 w-full'>
          <input onChange={onchangehandler} name='email' value={formData.email} type="email" placeholder='Your email 'className='w-full p-2 border-gray-300 border rounded outline-none'  required />
          <input onChange={onchangehandler} name='password' value={formData.password} type="password" placeholder='Your password ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <button type='submit' className='bg-orange-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300'>{loading ? "Loading..." : "SignIn"}</button>
        </form>
        <p className='text-center mt-4'>Don't have an account? <Link to={"/register"} className='text-orange-600 cursor-pointer'>Register hare</Link></p>
      </div>
    </div>
  )
}

export default Login
