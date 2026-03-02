import React from 'react'
import {blogData} from "../assets/assets"
import BlogCart from './BlogCart'

const LatestBlogs = () => {
  return (
   <div>
      <h1 className="text-3xl my-3 text-gray-700 font-bold text-center sm:text-start">
        Latest Blogs
      </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4">
        {blogData
          .slice(-6)
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
  );
};

export default LatestBlogs
