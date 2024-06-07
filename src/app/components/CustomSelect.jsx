"use client";

import React, { useState } from "react";

import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CustomSelect = ({ label, placeholder }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const allOptions = ["ItemOne", "ItemTwo", "ItemThree", "ItemFour"];

  const addItems = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems((prev) => [...prev, item]);
    }
    setShowOptions(false); // Hide options after selection
    setInputValue(""); // Reset input value
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowOptions(true);
  };

  const filteredOptions = allOptions.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (

      <div className="mb-8">
        <div>
          {/* Label  */}
          <div>
            <p className="text-[18px] font-semibold text-[#232323]">
              {label ? label : "\u00A0".repeat(5)}
            </p>
          </div>
        </div>
        <div className="border-[1px] rounded-[15px] border-gray-300  pt-2 pb-3 relative my-4">
          <div className="flex gap-2  px-4">
            {/* Selected Items */}
            {selectedItems.map((item, i) => (
              <div
                className="flex border-[1px] rounded-[15px] border-gray-300 px-3 py-[6px] w-max cursor-pointer text-xs md:text-sm font-semibold text-white bg-blue-500"
                key={i}
              >
                {item}{" "}
                <span
                  onClick={() =>
                    setSelectedItems((prev) => prev.filter((a) => a !== item))
                  }
                  className="pl-4 text-gray-400 hover:scale-105 hover:text-gray-600 transition-all"
                >
                  <FontAwesomeIcon color="#fff" icon={faXmark} />
                </span>
              </div>
            ))}
            {/* Input field for new items */}
            <div
              onClick={() => setShowOptions((prev) => !prev)}
              className="flex justify-center relative w-full"
            >
              <input
                className="border-none outline-none flex-grow placeholder:text-[10px] placeholder:text-[#9199A3] w-full"
                value={inputValue}
                placeholder={placeholder}
                onChange={handleInputChange}
                autoFocus={showOptions}
              />
              <div>
                <span className="">
                  <FontAwesomeIcon
                    color="#232323"
                    width={10}
                    height={5}
                    icon={faChevronDown}
                  />
                </span>
              </div>
            </div>
          </div>
          {/* Options */}
          {showOptions && filteredOptions.length > 0 && (
            <div className="mt-2 ">
              {filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => addItems(option)}
                  className="cursor-pointer p-2 hover:bg-gray-200 px-4 text-[18px] "
                >
                  {option}{" "}
                </div>
              ))}
            </div>
          )}
        </div>
</div>

  );
};

export default CustomSelect;