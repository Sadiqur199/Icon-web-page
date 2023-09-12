import React, { useState } from "react";
import icons from "../../Utill/data";
import { FaCircle } from "react-icons/fa";
import Category from "../Category/Category";

const styles = [...new Set(icons.map((icon) => icon.style))];
const featured = [...new Set(icons.map((icon) => icon.featured))];
const categories = [...new Set(icons.map((icon) => icon.subCategory))];

const Sidebar = ({ onSelectStyle, onSelectFeatured, onSelectCategory }) => {
  const subCategoryCount = {};
  const subStyleCount = {};
  const subFeaturedCount = {};
  const [selectedFilters, setSelectedFilters] = useState({
    styles: [],
    featured: [],
    categories: [],
  });

  icons.forEach((icon) => {
    const subCategory = icon.subCategory;
    if (subCategory in subCategoryCount) {
      subCategoryCount[subCategory]++;
    } else {
      subCategoryCount[subCategory] = 1;
    }
  });

  icons.forEach((icon) => {
    const featured = icon.featured;
    if (featured in subFeaturedCount) {
      subFeaturedCount[featured]++;
    } else {
      subFeaturedCount[featured] = 1;
    }
  });

  icons.forEach((icon) => {
    const style = icon.style;
    if (style in subStyleCount) {
      subStyleCount[style]++;
    } else {
      subStyleCount[style] = 1;
    }
  });

  const handleStyleSelect = (style) => {
    const updatedStyles = toggleFilter(selectedFilters.styles, style);
    setSelectedFilters({ ...selectedFilters, styles: updatedStyles });

    let selectedCategory = "";
    if (updatedStyles.includes("Regular")) {
      selectedCategory = "classic";
    } else if (updatedStyles.includes("Solid")) {
      selectedCategory = "sharp";
    } else if (updatedStyles.includes("Thin")) {
      selectedCategory = "free";
    } else if (updatedStyles.includes("Light")) {
      selectedCategory = "brand";
    }
    onSelectStyle(selectedCategory);
  };

  const handleFeaturedSelect = (featured) => {
    const updatedFeatured = toggleFilter(selectedFilters.featured, featured);
    setSelectedFilters({ ...selectedFilters, featured: updatedFeatured });
    onSelectFeatured(updatedFeatured);
  };

  const handleCategorySelect = (category) => {
    const updatedCategories = toggleFilter(
      selectedFilters.categories,
      category
    );
    setSelectedFilters({ ...selectedFilters, categories: updatedCategories });
    onSelectCategory(updatedCategories);
  };

  const sortedStyles = [
    "Solid",
    "Regular",
    ...styles.filter((style) => style !== "Solid" && style !== "Regular"),
  ];

  return (
    <div className="w-1/5">
      <div className="mb-5">
        <h1 className="mb-3 font-bold text-gray-500">STYLE</h1>
        <ul>
          {sortedStyles.map((style, i) => (
            <li
              className={`mb-3 text-gray-500 hover:border rounded px-5 border-gray-400 ${
                selectedFilters.styles.includes(style) ? "text-blue-500" : ""
              }`}
              key={i}
              onClick={() => handleStyleSelect(style)}
            >
              <FaCircle size={4} className="inline" /> {style} {" "} (
              {subStyleCount[style]})
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h1 className="mb-3 font-bold text-gray-500">FEATURED</h1>
        <ul>
          {featured.map((feature, i) => (
            <li
              className={`mb-3 text-gray-500 hover:border rounded px-5 border-gray-400 ${
                selectedFilters.featured.includes(feature) ? "text-blue-500" : ""
              }`}
              key={i}
              onClick={() => handleFeaturedSelect(feature)}
            >
              <FaCircle  size={4} className="inline" /> {feature} {" "} (
              {subFeaturedCount[feature]})
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5">
        <h1 className="mb-3 font-bold text-gray-500">CATEGORIES</h1>
        <ul>
          {categories.map((category, i) => (
            <li
              className={`mb-3 text-gray-500 hover:border rounded px-5 border-gray-400 ${
                selectedFilters.categories.includes(category)
                  ? "text-blue-500"
                  : ""
              }`}
              key={i}
              // onClick={() => handleCategorySelect()}
            >
              <FaCircle size={4} className="inline" /> {category} {" "} (
              {subCategoryCount[category]})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

function toggleFilter(filterArray, value) {
  if (filterArray.includes(value)) {
    return filterArray.filter((item) => item !== value);
  } else {
    return [...filterArray, value];
  }
}
