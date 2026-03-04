import React from "react";
import { Link } from "react-router-dom";

const BlogCart = ({
  id,
  title,
  image,
  category,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">

      {/* Image */}
      <Link to={`/blogs/${id}`}>
        <div className="overflow-hidden">
          <img
            src={`https://blog-backend-448e.onrender.com/images/${image}`}
            alt={title}
            className="w-full h-48 sm:h-56 md:h-60 object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">

        {/* Category */}
        <p className="text-blue-600 text-sm font-semibold mb-2">
          {category}
        </p>

        {/* Title */}
        <h1 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">
          {title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <img
            src={`https://blog-backend-448e.onrender.com/images/${author_image}`}
            alt={author_name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="font-medium">{author_name}</p>
          <span className="text-gray-400">•</span>
          <p>{new Date(date).toLocaleDateString("en-us",{
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</p>
        </div>

      </div>
    </div>
  );
};

export default BlogCart;