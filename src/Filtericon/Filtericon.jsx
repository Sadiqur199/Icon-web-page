// Filtericon.js (Continued)
import React, { useState } from 'react';
import icons from '../Utill/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Filtericon = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const categoryOptions = ['all', 'brand', 'free', 'classic', 'sharp'];

  const filteredIcons = categoryFilter === 'all' ? icons : icons.filter((icon) => icon.category === categoryFilter);

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

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <label htmlFor="category" className="mr-2">
              Category:
            </label>
            <select
              id="category"
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={categoryFilter}
              className="px-2 py-1 border rounded"
            >
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
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

      {/* Display Filtered and Sorted Icons */}
      <div className="grid grid-cols-4 gap-4">
        {sortedIcons.map((icon, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-white"
          >
            <FontAwesomeIcon icon={icon.icon} size="6x" className="mb-2" />
            <p className="mt-2">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtericon;
