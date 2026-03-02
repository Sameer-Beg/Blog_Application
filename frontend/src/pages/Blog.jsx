import React, { useContext } from 'react'
import Hero from '../components/Hero'
import BlogCart from '../components/BlogCart'
import { blogData } from  '../assets/assets'
import { StoreContext } from '../context/StoreContext'
const Blog = () => {
  const {blogData} = useContext(StoreContext)
  
  return (
    <div>
      <Hero/>
      <h1 className='text-3xl text-center font-bold my-6'>All Blogs</h1>
      <p className='text-base sm:text-lg px-3 leading-6 max-w-2xl mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, aut reprehenderit soluta numquam culpa quas itaque tenetur quae ut ea.</p>
      <div className="grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData
          .slice()
          .reverse()
          .map((blog, index) => (
            <BlogCart
              key={index}
              id={blog._id}
              title={blog.title}
              image={blog.image}
              category={blog.category}
              author_name={blog.author.name}
              author_image={blog.author.image}
              date={blog.createdAt}
            />
          ))}
      </div>
    </div>
  )
}

export default Blog
