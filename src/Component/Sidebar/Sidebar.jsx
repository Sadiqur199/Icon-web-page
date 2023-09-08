import React from 'react';

const Sidebar = ({
  categoryOptions,
  selectedCategory,
  subcategories,
  selectedSubcategory,
  onCategoryChange,
  onSubcategoryChange,
}) => {
  return (
    <div className="w-1/4 p-4 ">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul>
        {categoryOptions.map((category) => (
          <li key={category}>
            <button
              onClick={() => onCategoryChange(category)}
              className={`block text-blue-500 ${
                selectedCategory === category ? 'font-bold' : ''
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {selectedCategory === 'all' && subcategories && subcategories.length > 0 && (
        <>
          <h2 className="text-lg font-semibold my-2">Subcategories</h2>
          <ul>
            {subcategories.map((subcategory) => (
              <li key={subcategory}>
                <button
                  onClick={() => onSubcategoryChange(subcategory)}
                  className={`block text-blue-500 ${
                    selectedSubcategory === subcategory ? 'font-bold' : ''
                  }`}
                >
                  {subcategory}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
