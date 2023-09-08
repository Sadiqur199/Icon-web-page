import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../Utill/data';
import Sidebar from './Sidebar/Sidebar';

const IconFilter = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [displayMode, setDisplayMode] = useState('roomy'); 

  const categoryOptions = ['all', 'brand', 'free', 'classic', 'sharp'];

  const subcategories = {
    classic: ['C'], 
    brand: ['F', 'T', 'I', 'G', 'R', 'L'],
    sharp: ['C', 'H', 'A', 'T', 'D'], 
    free: ['U', 'A', 'P', 'B', 'D', 'C', 'E'],
  };

  const filteredIcons =
    categoryFilter === 'all'
      ? icons
      : icons.filter((icon) => icon.category === categoryFilter);

  const filteredIconsBySubcategory =
    subcategoryFilter === 'all'
      ? filteredIcons
      : filteredIcons.filter((icon) => icon.subCategory === subcategoryFilter);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    setSubcategoryFilter('all'); // Reset subcategory filter when category changes
  };

  const handleSubcategoryChange = (subcategory) => {
    setSubcategoryFilter(subcategory);
  };

  const sortedIcons = [...filteredIconsBySubcategory].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const iconDisplayModes = {
    cheatsheet: 'grid grid-cols-4 gap-4',
    compact: 'flex flex-col',
    roomy: 'grid grid-cols-5 gap-4', 
  };

  return (
    <div className="container mx-auto p-4">
      {/* <div className="mb-4">
        <h1 className="text-[#202020] font-semibold">
          FontAwesome Icons ({displayMode.charAt(0).toUpperCase() + displayMode.slice(1)})
        </h1>
      </div> */}

      {/* Filtering Options */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <label htmlFor="category" className="mr-2">
              Category:
            </label>
            {categoryOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleCategoryChange(option)}
                className={`px-2 py-1 border rounded ${
                  categoryFilter === option ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>

          {categoryFilter !== 'all' && (
            <div className="flex items-center">
              <label htmlFor="subcategory" className="mr-2">
                Subcategory:
              </label>
              {subcategories[categoryFilter].map((subcategory) => (
                <button
                  key={subcategory}
                  onClick={() => handleSubcategoryChange(subcategory)}
                  className={`px-2 py-1 border rounded ${
                    subcategoryFilter === subcategory ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {subcategory}
                </button>
              ))}
            </div>
          )}

          <div className="mb-4">
            <div className="flex items-center space-x-4">
              {Object.keys(iconDisplayModes).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setDisplayMode(mode)}
                  className={`px-4 py-2 border rounded ${
                    displayMode === mode ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="sort" className="mr-2">
              Sort:
            </label>
            <select
              id="sort"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
              className="px-2 py-1 border rounded"
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex bg-[#F0F1F3] py-10 w-full">
        <Sidebar
          categoryOptions={categoryOptions}
          selectedCategory={categoryFilter}
          onCategoryChange={handleCategoryChange}
          subcategories={subcategories[categoryFilter]}
          selectedSubcategory={subcategoryFilter}
          onSubcategoryChange={handleSubcategoryChange}
        />

        <div className={`w-3/4 ${iconDisplayModes[displayMode]}`}>
          {sortedIcons.map((icon, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white ml-5"
            >
              <FontAwesomeIcon icon={icon.icon} size="2x" className="mb-2" />
              <p className="mt-2">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IconFilter;
