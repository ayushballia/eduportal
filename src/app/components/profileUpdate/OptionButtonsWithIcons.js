import Image from "next/image";
import React, { useEffect, useState } from "react";

const OptionButtonsWithIcon = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption, onSelect]); // Ensure this runs when selectedOption changes

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="flex space-x-6">
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          className={`flex gap-6 px-[27px] py-[14px] border border-[#E4E5E8] rounded-[15px] text-[20px] items-center justify-center min-w-[153px] ${
            selectedOption.label === option.label ? "bg-[#0A65CC] font-semibold text-white" : "bg-white text-black font-normal"
          }`}
          onClick={() => handleSelect(option)}
        >
          <span>{option.label}</span>
          {option.icon && (
            <Image src={option.icon} width={35} height={35} alt={`${option.label} icon`} />
          )}
        </button>
      ))}
    </div>
  );
};

export default OptionButtonsWithIcon;
