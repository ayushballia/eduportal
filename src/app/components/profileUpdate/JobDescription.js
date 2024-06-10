"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MyEditor from "./MyEditor";
import Dropdown from "./Dropdown";
import CustomSelect from "../CustomSelect";
import FormSection from "../FormSection";
import OptionButtonsWithIcons from "./OptionButtonsWithIcons";
import MaleIcon from "../../images/profileUpdate/Group 14 Copy 2.svg";
import FemaleIcon from "../../images/profileUpdate/Group 9 Copy 3.svg";
import OtherBenefits from "./OtherBenefits";

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
  const [roleType, setRoleType] = useState(null);

  const gender = [
    { label: "Male", icon: MaleIcon },
    { label: "Female", icon: FemaleIcon },
    { label: "Any" },
  ];
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredGender: "",
    ageFrom: "",
    ageTo: "",
    languages: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile-update/interviewProcess");
  };

  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const handleBack = () => {
    router.back();
  };

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

      <FormSection title={"Preferred Gender"}>
        <OptionButtonsWithIcons options={gender} onSelect={handleSelect} />
      </FormSection>

      <FormSection title="Age (in years)">
        <div className="flex items-center gap-4 w-full">
          <input
            type="text"
            name="min-age"
            id="min-age"
            placeholder="Min age"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          />
          <p className="bg-[#0A65CC] text-[16px] text-white font-bold  rounded-[8px] px-[18px] py-[16px]">
            To
          </p>
          <input
            type="text"
            name="max-age"
            id="max-age"
            placeholder="Max age"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          />
        </div>
      </FormSection>

      <FormSection title={"Languages"}>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Enter preferred languages"
          className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
        />
      </FormSection>

      <p className="text-[18px] text-[#232323] font-normal opacity-75 my-4">
        Suggestions
      </p>
      <OtherBenefits />

      <FormSection title={"Preferred Skills"}>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Enter preferred languages"
          className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
        />
      </FormSection>

      <p className="text-[18px] text-[#232323] font-normal opacity-75 my-4">
        Suggestions
      </p>
      <OtherBenefits />


      <FormSection title={"Preferred Assets"}>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Enter preferred Assets"
          className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
        />
      </FormSection>


      <p className="text-[18px] text-[#232323] font-normal opacity-75 my-4">
        Suggestions
      </p>
      <OtherBenefits />


      <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
        </button>

      <button
        type="submit"
        className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] mt-6"
      >
        Save & Next
      </button>
    </form>
  );
};

export default JobDescription;
