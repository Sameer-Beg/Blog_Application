import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);

  const blog = blogData.find((b) => b._id === id);

  if (!blog) {
    return <p className="text-center mt-20 text-lg font-semibold">Loading...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Blog Image */}
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={`https://blog-backend-448e.onrender.com/images/${blog.image}`}
          alt={blog.title}
          className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category */}
      <p className="mt-6 text-sm uppercase tracking-wide text-blue-600 font-semibold">
        {blog.category}
      </p>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-2 leading-tight">
        {blog.title}
      </h1>

      {/* Author Section */}
      <div className="flex items-center gap-4 mt-6 border-b pb-6">
        <img
          src={`https://blog-backend-448e.onrender.com/images/${blog.author.image}`}
          alt={blog.author.name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <p className="font-semibold text-gray-800">
            {blog.author.name}
          </p>
          <p>{new Date(blog.createdAt).toLocaleDateString("en-us",{
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-gray-700 text-lg leading-relaxed">
        {blog.description}
      </div>

    </div>
  );
};

export default SingleBlog;