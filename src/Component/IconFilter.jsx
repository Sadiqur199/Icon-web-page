import React, { useState } from 'react';
import icons from '../Utill/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from './Sidebar/Sidebar';
import Category from './Category/Category';

const IconFilter = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [displayMode, setDisplayMode] = useState('roomy');
  const [styleFilter , setStyleFilter] = useState('all')

  const filteredIcons =
    categoryFilter === 'all'
      ? icons
      : icons.filter((icon) => icon.category === categoryFilter);

  const filteredIconsBySubcategory =
    subcategoryFilter === 'all'
      ? filteredIcons
      : filteredIcons.filter((icon) => icon.subCategory === subcategoryFilter);


  const sortedIcons = [...filteredIconsBySubcategory].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const iconDisplayModes = {
    roomy: 'grid grid-cols-2 md:grid-cols-4 gap-4',
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const handleStyleClick = (style) =>{
    setStyleFilter(style)
  }



  return (
    <div className="container mx-auto ">
     <Category  
     onSelectCategory={handleCategoryClick}
     onSelectStyle = {handleStyleClick}
     ></Category>

      <div className="flex flex-col md:flex-row bg-[#F0F1F3] py-10 px-5 w-full">
        <Sidebar
             onSelectCategory={handleCategoryClick}
             onSelectStyle = {handleStyleClick}
        />

        <div className={`w-full  ${iconDisplayModes[displayMode]}`}>
          {sortedIcons.map((icon, index) => (
            <div
              key={index}
              className=" text-center bg-white py-8  rounded-lg text-[#183153] transition-all duration-300 hover:bg-orange-400 hover:text-white mb-4 md:mb-0"
            >
              <FontAwesomeIcon icon={icon.icon} size="3x" className="mb-2" />
              <p className="mt-2">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconFilter;
