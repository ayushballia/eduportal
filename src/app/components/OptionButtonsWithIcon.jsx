import Image from "next/image";
import React, { useEffect, useState } from "react";
import teachingIcon from "../images/teachingIcon.svg";
import nonTeachingIcon from "../images/teachingIcon.svg";

const OptionButtonsWithIcon = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    onSelect(selectedOption)
    
  }, [])

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const getIconForOption = (option) => {
    switch (option) {
      case "Teaching":
        return teachingIcon;
      case "Non-Teaching":
        return nonTeachingIcon;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-6">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`flex gap-4 px-[27px] border border-gray-300 rounded-[15px] text-[20px] items-center ${
            selectedOption === option ? "bg-blue-500 font-semibold text-white" : "bg-white text-black"
          }`}
          onClick={() => handleSelect(option)}
        >
          <span>{option}</span>
          <Image src={getIconForOption(option)} width={63} height={63} alt={`${option} icon`} />
        </button>
      ))}
    </div>
  );
};

export default OptionButtonsWithIcon;