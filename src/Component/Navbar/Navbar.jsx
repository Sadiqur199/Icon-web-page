import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <nav className="bg-[#FFFFFF] py-4 text-gray-500">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-4">
            <i className="fas fa-icons text-3xl"></i>
          </Link>
          <Link to="/" className="text-gray-500 font-bold text-xl">
            Icons
          </Link>
        </div>
        <div className="md:flex justify-center flex-1  block">
          <Link to="/" className="text-gray-500  mr-10">
            Home
          </Link>
          <Link to="/" className="text-gray-500  mr-10">
            Icons
          </Link>
          <a href="#docs" className="text-gray-500  mr-10">
            Docs
          </a>
          <a href="#plans" className="text-gray-500  mr-10">
            Plans
          </a>
          <a href="#support" className="text-gray-500  mr-3">
            Support
          </a>
        </div>
        <div className=" flex">
          {isLoggedIn ? (
            <Link onClick={handleLogout} to="/" className="text-gray-500  md:mr-5">
              Sign Out
            </Link>
          ) : (
            <Link to="/login" className="text-gray-500  md:mr-5">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
