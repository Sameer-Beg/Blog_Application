import React from 'react'
import { Link } from 'react-router-dom'
const BlogCart = ({id, title, image, category, author_name, author_image, date}) => {
  return (
    <div className='border-1 border-gray-300 shadow-md p-3 rounded-md'>
        <Link to={`/blogs/${id}`}>
        <img src={image} alt={title} className="w-full items-center justify-center mx-auto cursor-pointer transform duration-300 hover:scale-105" />
    
        </Link>
        <p className='text-[#4B6BFB] font-semibold my-3'>{category}</p>
      <h1 className="text-xl font-bold">{title}</h1>
      <div className='flex gap-3 items-center my-3'>
        <img src={author_image} alt="" className="w-8 h-8 rounded-full" />
        <p className='text-lg font-bold text-gray-600'>{author_name}</p>
        <p className='text-lg font-bold text-gray-600'>{date}</p>
      </div>
    </div>
  )
}

export default BlogCart
