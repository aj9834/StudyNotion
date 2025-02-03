import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className='w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg py-4'>
      <div className='flex justify-between items-center w-11/12 max-w-[1160px] mx-auto'>
        {/* Logo */}
        <Link to="/"> 
          <img src={logo} alt="Logo" width={160} height={32} loading="lazy" className='transition-transform duration-300 hover:scale-110'/>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className='text-white flex gap-x-8 text-lg font-semibold'>
            <li>
              <Link to="/" className='hover:text-yellow-300 transition duration-300'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='hover:text-yellow-300 transition duration-300'>About</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:text-yellow-300 transition duration-300'>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className='flex items-center gap-x-4'>
          { !isLoggedIn && (
            <Link to="/login">
              <button className='bg-yellow-400 text-gray-900 py-2 px-5 rounded-full font-semibold transition duration-300 hover:bg-yellow-300'>
                Log in
              </button>
            </Link>
          )}
          { !isLoggedIn && (
            <Link to="/signup">
              <button className='bg-teal-500 text-white py-2 px-5 rounded-full font-semibold transition duration-300 hover:bg-teal-400'>
                Sign up
              </button>
            </Link>
          )}
          { isLoggedIn && (
            <Link to="/">
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className='bg-red-500 text-white py-2 px-5 rounded-full font-semibold transition duration-300 hover:bg-red-400'>
                Log Out
              </button>
            </Link>
          )}
          { isLoggedIn && (
            <Link to="/dashboard">
              <button className='bg-green-500 text-white py-2 px-5 rounded-full font-semibold transition duration-300 hover:bg-green-400'>
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
