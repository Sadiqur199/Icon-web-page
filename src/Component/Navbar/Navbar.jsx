import React from 'react';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { Link} from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="bg-[#FFFFFF] py-4 text-gray-500">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-4">
            <i className="fas fa-icons text-3xl"></i>
          </Link>
          <Link to="/" className="text-gray-500 font-bold text-xl">
            <FaFontAwesomeFlag color='#183153'></FaFontAwesomeFlag>
          </Link>
        </div>
        <div className="md:flex justify-center flex-1  block">
          <Link to="/" className="text-gray-500 md:ml-0 ml-2  mr-10">
            Home
          </Link>
          <Link to="/" className="text-gray-500  mr-10">
            Icons
          </Link>
          <a href="/" className="text-gray-500  mr-10">
            Docs
          </a>
          <a href="/" className="text-gray-500  mr-10">
            Plans
          </a>
          <a href="#support" className="text-gray-500  mr-3">
            Support
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
