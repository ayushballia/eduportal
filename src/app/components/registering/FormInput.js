import React from 'react';

const FormInput = ({ label, type = 'text', placeholder = '', options = [] }) => (
  <div>
    <label className="block text-[18px] font-semibold text-[#18191C]">
      {label}
    </label>
    {type === 'select' ? (
      <select className="mt-1 block w-full rounded-[15px] border-[#E4E5E8] p-[17px] text-[14px] text-[#767F8C] font-normal">
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-[15px] border-[#E4E5E8] p-[17px] text-[14px] text-[#767F8C] font-normal"
      />
    )}
  </div>
);

export default FormInput;
