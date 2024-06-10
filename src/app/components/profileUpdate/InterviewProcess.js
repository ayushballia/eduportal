"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const InterviewProcess = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredSkills: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile-update/preview");
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label
        for="interview-process"
        className="font-semibold text-[20px] text-[#232323]"
      >
        Choose Interview Process <br />
        <span className="font-normal text-[20px] text-[#232323] -mt-2">
          Select candidate interviewing method
        </span>
        <br />
        <div className="relative my-4">
          <select
            value=""
            className="block appearance-none w-full bg-white border border-[#E4E5E8] hover:border-gray-600 p-[17px] pr-[18px] text-[14px] text-[#767F8C] font-normal rounded-[15px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option
              className="text-[14px] font-normal text-[#767F8C]"
              value=""
              disabled
            >
              Select...
            </option>

            <option>Online</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </label>

      <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>
      <button
        type="submit"
        className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] my-6"
      >
        Save & Next
      </button>
    </form>
  );
};

export default InterviewProcess;
