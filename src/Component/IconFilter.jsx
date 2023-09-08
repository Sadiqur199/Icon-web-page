import React, { useState } from 'react';
import icons from '../Utill/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    cheatsheet: 'grid grid-cols-2 md:grid-cols-8 gap-4',
    compact: 'grid grid-cols-1 md:grid-cols-5 gap-4',
    roomy: 'grid grid-cols-2 md:grid-cols-4 gap-4',
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:flex md:items-center">
            <label htmlFor="category" className="mr-2 md:mr-4">
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
            {categoryFilter !== 'all' && (
              <div className="mt-4 ml-5 md:mt-0 md:flex md:items-center">
                <label htmlFor="subcategory" className="mr-2 md:mr-4">
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
          </div>

          <div className="mb-4 md:flex md:items-center">
            <div className="mb-4 mr-3 md:mb-0 md:flex md:items-center">
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
              <label htmlFor="sort" className="mr-2 md:mr-4">
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
      </div>

      {/* Icon display */}
      <div className="flex flex-col md:flex-row bg-[#F0F1F3] py-10 px-5 w-full">
        <Sidebar
          categoryOptions={categoryOptions}
          selectedCategory={categoryFilter}
          onCategoryChange={handleCategoryChange}
          subcategories={subcategories[categoryFilter]}
          selectedSubcategory={subcategoryFilter}
          onSubcategoryChange={handleSubcategoryChange}
        />

        <div className={`w-full  ${iconDisplayModes[displayMode]}`}>
          {sortedIcons.map((icon, index) => (
            <div
              key={index}
              className=" text-center bg-white p-10 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white mb-4 md:mb-0"
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
