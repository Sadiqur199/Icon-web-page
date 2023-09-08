import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../Utill/data';
import Sidebar from './Sidebar/Sidebar';


const IconFilter = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [displayMode, setDisplayMode] = useState('roomy'); // Default display mode

  const categoryOptions = ['all', 'brand', 'free', 'classic', 'sharp'];

  const filteredIcons =
    categoryFilter === 'all'
      ? icons
      : icons.filter((icon) => icon.category === categoryFilter);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const sortedIcons = [...filteredIcons].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const iconDisplayModes = {
    cheatsheet: 'grid grid-cols-4 gap-4', // Customize as needed
    compact: 'flex flex-col', // Customize as needed
    roomy: 'grid grid-cols-5 gap-4', // Customize as needed
  };


  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">FontAwesome Icons ({displayMode.charAt(0).toUpperCase() + displayMode.slice(1)})</h1>
      </div>

      {/* Top Section with Filtering Options */}
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

      <div className="flex  bg-[#F0F1F3] py-10 w-full">
        <Sidebar
          categoryOptions={categoryOptions}
          selectedCategory={categoryFilter}
          onCategoryChange={handleCategoryChange}
        />

        <div className={`w-3/4 ${iconDisplayModes[displayMode]}`}>
          {sortedIcons.map((icon, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white"
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