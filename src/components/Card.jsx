import React from "react";

const Card = ({ title, iconURL }) => {
  return (
    <div className="glassmorphism relative grid place-items-center py-3 box-border w-full h-full cursor-pointer">
      <p className="m-0 text-sm">{title}</p>
      <img className="w-8 m-2" src={iconURL} />
      <input
        id="lights-toggle-button"
        type="checkbox"
        className="absolute w-full h-full opacity-0"
      />
      <label
        for="lights-toggle-button"
        className="flex items-center bg-gray-400 h-6 w-12 rounded-full"
      >
        <div className="toggle-dot bg-white m-1 h-5 w-5 rounded-full"></div>
      </label>
    </div>
  );
};

export default Card;
