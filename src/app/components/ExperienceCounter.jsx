import React from "react";

const ExperienceCounter = ({ type, value, onChange }) => (
  <div className="flex items-center border border-gray-300 rounded-md">
    <button
      className="px-3 py-2 text-gray-600"
      onClick={(e) => {
        e.preventDefault();
        onChange(type, -1);
      }}
    >
      -
    </button>
    <input
      type="text"
      value={`${value} ${type.charAt(0).toUpperCase() + type.slice(1)}${
        value !== 1 ? "s" : ""
      }`}
      readOnly
      className="w-44 text-center border-l border-r border-gray-300 focus:outline-none"
    />
    <button
      className="px-3 py-2 text-gray-600"
      onClick={(e) => {
        e.preventDefault();
        onChange(type, 1);
      }}
    >
      +
    </button>
  </div>
);

export default ExperienceCounter;