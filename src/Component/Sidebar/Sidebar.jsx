// Sidebar.js
import React from 'react';

const Sidebar = ({ categoryOptions, selectedCategory, onCategoryChange }) => {
  return (
    <div className="w-1/4 p-4">
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <ul className="space-y-2">
        {categoryOptions.map((option) => (
          <li
            key={option}
            onClick={() => onCategoryChange(option)}
            className={`cursor-pointer ${option === selectedCategory ? 'font-bold' : ''}`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
