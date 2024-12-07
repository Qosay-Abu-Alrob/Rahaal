import React, { useState } from "react";
import travelDestinations from "../data/data.js";
import { Link } from "react-router-dom";

const TravelList = () => {
  const [filteredDestinations, setFilteredDestinations] =
    useState(travelDestinations);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredDestinations(travelDestinations);
    } else {
      const filtered = travelDestinations.filter(
        (destination) => destination.catagory.trim() === category
      );
      setFilteredDestinations(filtered);
    }
  };

  const categories = [
    { key: "All", label: "عرض الكل" },
    { key: "Asia", label: "آسيا" },
    { key: "Europe", label: "أوروبا" },
    { key: "America", label: "أمريكا" },
  ];

  return (
    <div className="container flex flex-col justify-center items-center py-10">
      <div className="flex justify-center items-center gap-16 mb-16">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => filterByCategory(category.key)}
            className={`px-4 py-2 rounded shadow ${
              selectedCategory === category.key
                ? "bg-green-600 text-white"
                : "bg-[#666666] text-white hover:bg-green-600"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 text-center   sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredDestinations.map((destination) => (
          <Link className="transition-transform transform hover:scale-105" to={destination.Ename}>
          <div
            key={destination.id}
            className="w-[300px] h-[380px] bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{destination.name}</h3>
              <p className="text-gray-600 mt-2">{destination.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                {destination.duration}
              </p>
              <p className="text-green-500 font-semibold mt-2">
                {destination.price}
              </p>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default TravelList;
