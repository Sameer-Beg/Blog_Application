import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { Menu, X } from "lucide-react"; // install if needed

const Navbar = () => {
  const { user, Logoutuser } = useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <p className="hidden sm:block text-xl">
              Meta <span className="font-bold">Blog</span>
            </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            <Link to="/blogs" className="hover:text-orange-500 transition">Blogs</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          </ul>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
                >
                  Dashboard
                </Link>
                <button
                  onClick={Logoutuser}
                  className="px-5 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">

          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Home</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Blogs</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-orange-500">Contact</Link>

          <hr />

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-2 rounded-full bg-black text-white"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  Logoutuser();
                  setIsOpen(false);
                }}
                className="w-full py-2 rounded-full bg-orange-500 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2 rounded-full bg-orange-500 text-white"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;