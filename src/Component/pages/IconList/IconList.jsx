// IconList.js
import React from 'react';
import IconFilter from '../../IconFilter';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const IconList = () => {
  return (
    <div>
      <Navbar />
      <IconFilter />
      <Outlet></Outlet>
    </div>
  );
};

export default IconList;
