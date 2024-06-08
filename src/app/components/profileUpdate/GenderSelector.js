import React, { useState } from 'react';
import Image from "next/image"
import MaleIcon from "../../images/profileUpdate/Group 9 Copy 3.svg"

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState('Male');

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const getButtonClass = (gender) => {
    return selectedGender === gender 
      ? 'bg-blue-500 text-white' 
      : 'bg-white text-gray-700 hover:bg-gray-100';
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 font-semibold">Preferred Gender</span>
      <button
        className={`px-4 py-2 rounded-full flex items-center ${getButtonClass('Male')}`}
        onClick={() => handleGenderSelect('Male')}
      >
        <Image src={MaleIcon} alt="Male" className="w-6 h-6 mr-2" />
        Male
      </button>
      <button
        className={`px-4 py-2 rounded-full flex items-center ${getButtonClass('Female')}`}
        onClick={() => handleGenderSelect('Female')}
      >
        <Image src={MaleIcon} alt="Female" className="w-6 h-6 mr-2" />
        Female
      </button>
      <button
        className={`px-4 py-2 rounded-full flex items-center ${getButtonClass('Any')}`}
        onClick={() => handleGenderSelect('Any')}
      >
        Any
      </button>
    </div>
  );
};

export default GenderSelector;
