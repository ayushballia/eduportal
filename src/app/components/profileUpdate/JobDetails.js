"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TeachingIcon from "@/app/images/profileUpdate/teaching-PQcw9eHGUz.svg";
import NonTeachingIcon from "@/app/images/profileUpdate/Group 459 1.svg";
import DownIcon from "@/app/images/profileUpdate/fi_chevron-down.svg";
import RupeesIcon from "@/app/images/profileUpdate/currency_rupee_circle.svg";
import CustomSelect from "../CustomSelect";
import FormSection from "../FormSection";
import OptionButtons from "../OptionButtons";
import OtherBenefits from "../registering/OtherBenefits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JobDetail = () => {
  const roleOptions = ["full-time", "part-time", "contract", "visiting"];
  const shiftOptions = ["Day shift", "night shift", "evening shift"];
  const workOptions = ["on site", "remote", "hybrid"];

  const [selectedOption, setSelectedOption] = useState(roleOptions[0]);
  const [selectedOptionShift, setSelectedOptionShift] = useState(
    shiftOptions[0]
  );
  const [selectedOptionWork, setSelectedOptionWork] = useState(shiftOptions[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setSelectedOptionShift(option);
    setSelectedOptionWork(option);
    console.log("Selected Option:", option);
  };

  const router = useRouter();
  const [formData, setFormData] = useState({
    jobDescription: "",
    minimumQualification: "",
    course: "",
    isFresher: false,
    minExperience: "",
    maxExperience: "",
    englishLevel: "",
    vacancies: "",
  });

  const [deadline, setDeadline] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile-update/jobDescription");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label for="job-category" className="font-semibold text-[18px]">
        Job Category
      </label>
      <div className="flex gap-4 my-4">
        <button className="flex items-center gap-2 bg-[#0A65CC] text-white px-[23px]  text-[14px] font-semibold rounded-[15px]">
          Teaching
          <Image
            src={TeachingIcon}
            width={55}
            height={55}
            alt="teaching icon"
          />
        </button>
        <button className="flex items-center gap-2  px-[23px] text-[14px] border rounded-[15px]">
          Non Teaching
          <Image
            src={NonTeachingIcon}
            width={55}
            height={55}
            alt="teaching icon"
          />
        </button>
      </div>

      <CustomSelect label={"Role"} placeholder={"Select"} />

      <FormSection title={"Subject"}>
        <input
          type="text"
          placeholder="Enter your Subject"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
        />
      </FormSection>

      <FormSection title={"Job Type"}>
        <OptionButtons
          options={roleOptions}
          onSelect={handleSelect}
        ></OptionButtons>
      </FormSection>

      <FormSection title={"Shift timming"}>
        <OptionButtons
          options={shiftOptions}
          onSelect={handleSelect}
        ></OptionButtons>
      </FormSection>

      <FormSection title={"Work Mode"}>
        <OptionButtons
          options={workOptions}
          onSelect={handleSelect}
        ></OptionButtons>
      </FormSection>

      <FormSection title={"Work Location"}>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="relative flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="City"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
            />
          </div>
          <div className="relative flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="State"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
            />
          </div>
        </div>
      </FormSection>
      <FormSection title={"Job title"}>
        <input
          type="text"
          placeholder=""
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
        />
      </FormSection>

      <div className="grid grid-cols-2 gap-4">
        <FormSection title={"Salary"}>
          <div className="relative w-full flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="Select"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
            />
          </div>
        </FormSection>
        <div className="grid grid-cols-2 gap-4">
          <label
            for="minEx"
            className="flex flex-col gap-3 text-[13px] text-[#18191C] font-semibold"
          >
            {" "}
            Minimum Experience (in years)
            <div className="relative w-full flex items-center">
              <Image
                src={RupeesIcon}
                width={20}
                height={20}
                alt="rupees icon"
                className="absolute left-4 top-4"
              />
              <input
                type="text"
                name="maxEx"
                id="maxEx"
                placeholder=""
                className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
              />
            </div>
          </label>

          <label
            for="maxEx"
            className="flex flex-col gap-3 text-[13px] text-[#18191C] font-semibold"
          >
            {" "}
            Maximum Experience (in years)
            <div className="relative w-full flex items-center">
              <Image
                src={RupeesIcon}
                width={20}
                height={20}
                alt="rupees icon"
                className="absolute left-4 top-4"
              />
              <input
                type="text"
                name="maxEx"
                id="maxEx"
                placeholder=""
                className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
              />
            </div>
          </label>
        </div>
      </div>

      <p className="text-[18px] text-[#18191C] font-semibold my-4">
        Other Benefits
      </p>
      <OtherBenefits />

      <p className="text-[16px] font-bold my-6">
        Is there any joining fee required from the candidate?
      </p>

      <FormSection title={"Deadline"}>
        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          dateFormat="dd/MM/yyyy"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
          placeholderText="DD/MM/YYYY"
        />
      </FormSection>

      <button
        type="submit"
        className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
      >
        Save & Next
      </button>
    </form>
  );
};

export default JobDetail;
