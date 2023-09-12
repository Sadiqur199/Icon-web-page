import React, { useState } from "react";
import { FaBolt, FaIcons } from "react-icons/fa";
import { BsFlag } from "react-icons/bs";
import icons from "../../Utill/data";

const Category = ({ onSelectCategory, onSelectStyle }) => {
  const featured = [...new Set(icons.map((icon) => icon.featured))];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Regular");

  const handleCategorySelect = (category, style) => {
    onSelectCategory(category);
    onSelectStyle(style);
    setSelectedCategory(category);
    setSelectedStyle(style);
  };

  return (
    <div className="mx-10 my-10 flex justify-between">
      <div className="flex">
        <div
          className={`mr-8 ${
            selectedCategory === "classic" ? "text-blue-500" : ""
          }`}
          onClick={() => handleCategorySelect("classic", "Regular")}
        >
          <FaIcons size={30}></FaIcons>
          <h1>Classic</h1>
        </div>
        <div
          className={`mr-8 ${
            selectedCategory === "sharp" ? "text-blue-500" : ""
          }`}
          onClick={() => handleCategorySelect("sharp", "Solid")}
        >
          <FaIcons size={30}></FaIcons>
          <h1>Sharp</h1>
        </div>
        <div
          className={`mr-8 ${
            selectedCategory === "brand" ? "text-blue-500" : ""
          }`}
          onClick={() => handleCategorySelect("brand", "Light")}
        >
          <BsFlag size={30}></BsFlag>
          <h1>Brands</h1>
        </div>
        <div
          className={`${
            selectedCategory === "free" ? "text-blue-500" : ""
          }`}
          onClick={() => handleCategorySelect("free", "Thin")}
        >
          <FaBolt size={30}></FaBolt>
          <h1>Free</h1>
        </div>
      </div>

      <div className="">
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            onChange={(e) => {
              onSelectStyle(e.target.value);
              setSelectedStyle(e.target.value);
            }}
            value={selectedStyle}
          >
            <option value="">Featured</option>
            <option value="Regular">Regular</option>
            <option value="Solid">Solid</option>
            <option value="Light">Light</option>
            <option value="Thin">Thin</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Category;
