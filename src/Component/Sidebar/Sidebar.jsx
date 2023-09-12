import React from 'react';
import icons from '../../Utill/data';
import { FaCircle } from 'react-icons/fa';

const style = [...new Set(icons.map(icon=>icon.style))]
    const featured = [...new Set(icons.map(icon=>icon.featured))]
const categories = [...new Set(icons.map(icon=>icon.subCategory))]


const Sidebar = () => {
  return (
    <div className='pr-24'>
      <div className='mb-5'>
       <h1 className='mb-3 font-bold text-gray-500'>STYLE</h1>
       <ul>
        {
          style.map((s,i)=>(
            <li className='mb-3 text-gray-500 hover:border rounded px-2 border-gray-400' key={i}><FaCircle size={4} className='inline'></FaCircle> {s}</li>
          ))
        }
       </ul>
      </div>
      <div className='mb-5'>
       <h1 className='mb-3 font-bold text-gray-500'>FEATURED</h1>
       <ul>
        {
          featured.map((s,i)=>(
            <li className='mb-3 text-gray-500 hover:border rounded px-2 border-gray-400' key={i}><FaCircle size={4} className='inline'></FaCircle> {s}</li>
          ))
        }
       </ul>
      </div>
      <div className='mb-5'>
        <h1 className='mb-3 font-bold text-gray-500'>CATEGORIES</h1>
        <ul>
        {
          categories.map((s,i)=>(
            <li className='mb-3 text-gray-500 hover:border rounded px-2 border-gray-400' key={i}><FaCircle size={4} className='inline'></FaCircle> {s}</li>
          ))
        }
       </ul>
      </div>
    </div>
  );
};

export default Sidebar;