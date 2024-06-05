"use client";

import CustomSelect from "./CustomSelect";
import React, { useState } from "react";
// import toast from "react-hot-toast";
// import Male from "@/assets/icons/male.png";
// import Female from "@/assets/icons/female.png";
// import Image from "next/image";
import { UserIcon } from "@heroicons/react/16/solid";

const FaCalender = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    color={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
  </svg>
);

const Preference = () => {
  const [activeTab, setActiveTab] = useState("teaching");
  const [workMode, setWorkMode] = useState("on-site");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("male");

  const handleInputChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }
    setDate(value.slice(0, 5)); // Limit to 5 characters
  };

  const handleBlur = () => {
    if (date.length !== 5 || date[2] !== "/") {
      setDate("");
      // toast.error("Please enter a valid date in MM/YY format");
    }
  };

  return (
    <section>
      <div>
        <div>
          {/* Job Preference */}
          <div>
            <div className="mb-3">
              <p className="text-[20px] text-[#232323] font-bold">
                Job Preference
              </p>
            </div>
            <div className="flex gap-4">
              <div
                className={`border-1 px-5 py-2 w-max rounded-xl ${
                  activeTab === "teaching"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[14px] font-semibold">Teaching</p>
              </div>
              <div
                className={`border-[1px] px-5 py-2 w-max rounded-xl ${
                  activeTab !== "teaching"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[14px] font-semibold">Non-Teaching</p>
              </div>
            </div>
          </div>
          {/* Items  */}
          <div className="mb-1">
            <CustomSelect
              label={"Preferred Type of Organization"}
              placeholder={"Select your Preferred Organization"}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 max-w-[482px] mb-1">
            <div>
              <CustomSelect label={"Preferred Location"} placeholder={"City"} />
            </div>
            <div>
              <CustomSelect label={""} placeholder={"State"} />
            </div>
          </div>
          <div className="mb-1">
            <CustomSelect
              label={"Availability to Join"}
              placeholder={"Select your Availability to Join"}
            />
          </div>
          <div className="mb-1">
            <CustomSelect
              label={"Preferred Employment Type"}
              placeholder={"Select your Availability to Join"}
            />
          </div>
          {/* Work Mode */}
          <div className="pt-7 pb-5">
            <div className="mb-3">
              <p className="text-[20px] text-[#232323] font-bold">Preferred Work Mode</p>
            </div>
            <div className="flex justify-between gap-4 max-w-[482px]">
              <div
                className={`border-1 px-5 py-2 w-full rounded-xl ${
                  workMode === "on-site"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[20px] font-semibold text-center">On Site</p>
              </div>
              <div
                className={`border-[1px] px-5 py-2  w-full rounded-xl ${
                  workMode === "remote"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[20px] font-semibold text-center">Remote</p>
              </div>
              <div
                className={`border-[1px] px-5 py-2 w-full rounded-xl ${
                  workMode === "hybrid"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[20px] font-semibold text-center">Hybrid</p>
              </div>
            </div>
          </div>
          {/* DOB */}
          <div className="mb-3 max-w-[482px]">
            <div className="py-2">
              <p className="text-[20px] font-bold text-[#232323]">DOB</p>
            </div>
            <div className="relative ">
              <input
                type="text"
                placeholder="MM/YY"
                onChange={handleInputChange}
                onBlur={handleBlur}
                maxLength="5"
                className="hover:outline-none text-[16px] px-4 py-[10px] border-[1px] border-gray-300 w-full max-w-[482px] rounded-[15px] placeholder:text-gray-300 placeholder:text-[12px]"
              />
              <div className="absolute right-8 top-1/2 -translate-y-1/2">
                <FaCalender width={22} height={22} color={"#232323"} />
              </div>
            </div>
          </div>
          {/* Gender */}
          <div className="pt-7 pb-5">
            <div className="mb-3">
              <p className="text-[20px] text-[#232323] font-bold">Gender</p>
            </div>
            <div className="flex justify-bwtween gap-2 max-w-[482px]">
              <div
                className={`border-1 px-5 py-1  w-max rounded-xl ${
                  gender === "male"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[16px] font-semibold text-center flex justify-center items-center gap-3">
                  Male{" "}
                  <span>
                    <UserIcon/>
                  </span>
                </p>
              </div>
              <div
                className={`border-[1px] px-5 py-1 w-max rounded-xl ${
                  gender === "female"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[16px] font-semibold text-center flex justify-center items-center gap-3">
                  Female{" "}
                  <span>
                    <UserIcon />
                  </span>
                </p>
              </div>
              <div
                className={`border-[1px] px-5 py-1 flex justify-center items-center  rounded-xl ${
                  workMode === "prefer-not-to-say"
                    ? "bg-[#0A65CC] text-white"
                    : "border-gray-300"
                }`}
              >
                <p className="text-[16px] w-full font-semibold  text-center">
                  Pre Not to Say
                </p>
              </div>
            </div>
          </div>
          {/* About Us */}
          <div className="mb-3 max-w-[482px]">
            <div className="py-2">
              <p className="text-[20px] font-bold text-[#232323]">About me</p>
            </div>
            <div className="relative ">
              <textarea
                type="text"
                className="hover:outline-none text-[16px] px-4 py-[10px] border-[1px] border-gray-300 w-full max-w-[482px] h-20 rounded-[15px] placeholder:text-gray-300 placeholder:text-[12px]"
              />
            </div>
          </div>
          {/* Skills  */}
          <div className="mb-1 w-full max-w-[482px]">
            <CustomSelect label={"Skills"} placeholder={"Select your Skills"} />
            <div className="py-4">
              <div className="pb-2">
                <p className="text-[#232323] text-[14px]">Suggestions:</p>
              </div>
              <ul className="flex gap-3 w-full flex-wrap">
                {["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"].map(
                  (skill, i) => {
                    return (
                      <li
                        className="text-[#4A4A4A] text-[12px] px-4 py-2 border-[#b4b4b4] border-[1px] rounded-2xl w-max font-medium"
                        key={i}
                      >
                        {skill} &nbsp; +
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
          {/* <div className="mt-4">
            <button className="bg-[#0A65CC] rounded-[20px] py-3 px-5 text-white text-[16px] font-bold">
              Start your journey 🚀
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Preference;