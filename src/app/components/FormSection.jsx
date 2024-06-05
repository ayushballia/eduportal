import React from "react";

const FormSection = ({ title, children }) => (
  <div className="mb-8 max-w-[482px]">
    <label className="text-[20px] leading-[20px] font-bold text-[#232323]">{title}</label>
    <div className="flex space-x-6 my-4 w-full">{children}</div>
    
  </div>
);

export default FormSection;