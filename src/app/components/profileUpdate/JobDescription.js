"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MyEditor from "./MyEditor";
import Dropdown from "@/app/components/profileUpdate/DropDown";
import CustomSelect from "../CustomSelect";
import OptionButtons from "../OptionButtons";
import GenderSelector from "./GenderSelector"

const qualifications = [
  { value: "highschool", label: "High School" },
  { value: "bachelors", label: "Bachelors" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "PhD" },
];

const courses = [
  { value: "highschool", label: "High School" },
  { value: "bachelors", label: "Bachelors" },
  { value: "masters", label: "Masters" },
  { value: "phd", label: "PhD" },
];
// const roleOptions = ["Age", "gender", "Reginal language", "Assets"];

const JobDescription = () => {


  // const [selectedOption, setSelectedOption] = useState(roleOptions[0]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredGender: "",
    ageFrom: "",
    ageTo: "",
    languages: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile-update/jobSpecification");
  };


  // const handleSelect = (option) => {
  //   setSelectedOption(option);
  //   console.log("Selected Option:", option);
  // };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Form fields go here */}
      <MyEditor />

      <div className="grid grid-cols-2 gap-8">
        <Dropdown label="Minimum Qualification" options={qualifications} />

        <Dropdown label="Course" options={courses} />
      </div>

      <div className="flex items-center w-2/4 my-6">
        <label for="fresher" className="text-[16px] font-bold mr-6">
          Are you hiring freshers only?
        </label>
        <input type="checkbox" class="rounded" />
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-7">
        <label
          for="minEx"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          {" "}
          Minimum Experience (in years)
          <input
            type="text"
            name="minEx"
            id="minEx"
            placeholder="Min"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          />
        </label>

        <label
          for="maxEx"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          {" "}
          Maximum Experience (in years)
          <input
            type="text"
            name="maxEx"
            id="maxEx"
            placeholder="Max"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          />
        </label>

        <CustomSelect label={"English Level"} placeholder={"select"} />
        <label
          for="vacancies"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          {" "}
          Vacancies
          <input
            type="text"
            name="vacancies"
            id="vacancies"
            placeholder="Vacancies"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          />
        </label>
      </div>

      <p className="text-[18px] font-bold">Additional Requirements</p>
      <p className="text-[18px] font-normal">
        Fill these details so that we can sort the best candidate for you
      </p>

      {/* <OptionButtons options={roleOptions}
          onSelect={handleSelect}/> */}

      {/* <div className="flex justify-between my-8">
        <button className="px-[38px] py-[22px] text-[16px] font-bold bg-[#2677D2] rounded-[20px] text-white">
          Age
        </button>
        <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">
          Gender
        </button>
        <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">
          Regional Language
        </button>
        <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">
          Assets{" "}
        </button>
      </div> */}

      <GenderSelector/>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Next
      </button>
    </form>
  );
};

export default JobDescription;
