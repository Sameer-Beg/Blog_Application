import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import { toast } from 'react-toastify';
const Signup = () => {

  const [formData , setFormData] = useState({
    name : "",
    email : "",
    password : "",
    image : null
  })

  const navigate = useNavigate();

  const [loading , setLoading] = useState(false)

  const onchnagehandler = (e)=>{
    // console.log(e.target.value)
    setFormData({...formData , [e.target.name]:e.target.value})

  }

  const filehandler = (e)=>{
    setFormData({...formData , image:e.target.files[0]})
  }

  const submithandler = async (e)=>{
    e.preventDefault();
    try{
      const data = new FormData();
      data.append("name" , formData.name)
      data.append("email" , formData.email)
      data.append("password" , formData.password)
      data.append("image" , formData.image)
      setLoading(true)

      const res = await axios.post("http://localhost:8000/users/register" , data ,{
        headers : {
          "Content-Type" : "multipart/form-data"
        }
      }
    )
    if(res.data.success){
      toast.success(res.data.message)
      navigate("/login")
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
          Create your account!
        </h1>
        <form onSubmit={submithandler}  className='flex flex-col gap-5 mt-5 w-full'>
          <input onChange={onchnagehandler} name='name' value={formData.name} type="text" placeholder='Your name ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <input onChange={onchnagehandler}  name='email' value={formData.email} type="email" placeholder='Your email 'className='w-full p-2 border-gray-300 border rounded outline-none'  required />
          <input onChange={onchnagehandler}  name='password' value={formData.password} type="password" placeholder='Your password ' className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <input onChange={filehandler}  accept='image/*' type="file"  className='w-full p-2 border-gray-300 border rounded outline-none' required />
          <button type='submit' className='bg-orange-500 text-white px-8 py-2 rounded-full cursor-pointer hover:bg-orange-600 duration-300'>{loading ? "Loading..." : "Signup"}</button>
        </form>
        <p className='text-center mt-4'>Already have an account? <Link to={"/login"} className='text-orange-600 cursor-pointer'>Login hare</Link></p>
      </div>
    </div>
  )
}

export default Signup
