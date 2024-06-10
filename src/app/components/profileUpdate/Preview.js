"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import TeachingIcon from "@/app/images/profileUpdate/teaching-PQcw9eHGUz.svg";
import NonTeachingIcon from "@/app/images/profileUpdate/Group 459 1.svg";
import DownIcon from "@/app/images/profileUpdate/fi_chevron-down.svg";
import RupeesIcon from "@/app/images/profileUpdate/currency_rupee_circle.svg";
import { useState } from "react";
import CustomSelect from "../CustomSelect";
import FormSection from "../FormSection";
import OptionButtons from "../OptionButtons";
import OtherBenefits from "../registering/OtherBenefits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionButtonsWithIcons from "./OptionButtonsWithIcons";
import EditIcon from "../../images/profileUpdate/edit.svg"

const Preview = () => {
  const router = useRouter();

  const handleEdit = (path) => {
    router.push(path);
  };

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add logic for form submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="border-b pb-2 mb-4 flex justify-between items-center">
        <h2 className="text-[24px] font-bold text-[#0A65CC]">Job Details</h2>
        <button
          type="button"
          onClick={() => handleEdit("/profile-update/jobDetail")}
          className="flex items-center gap-2 bg-[#0A65CC] text-white text-[16px] font-bold px-[17px] py-[13px] rounded-[10px] "
        >
          Edit
          <Image src={EditIcon} width={11} height={11} alt="Edit icon"/>
        </button>
      </div>
      <FormSection title={"Role"}>
        <div className="flex justify-between">
          <span>Teaching</span>
        </div>
      </FormSection>
      <FormSection title={"Subject"}>
        <div className="flex justify-between">
          <span>Chemistry</span>
        </div>
      </FormSection>
      <FormSection title={"Job Type"}>
        <div className="flex justify-between">
          <span>Full-Time</span>
        </div>
      </FormSection>
      <FormSection title={"Shift Timing"}>
        <div className="flex justify-between">
          <span>Day Shift</span>
        </div>
      </FormSection>
      <FormSection title={"Work Mode"}>
        <div className="flex justify-between">
          <span>On Site</span>
        </div>
      </FormSection>
      <FormSection title={"Work Location"}>
        <div className="flex justify-between">
          <span>Chennai, TamilNadu</span>
        </div>
      </FormSection>
      <FormSection title={"Job Title"}>
        <div className="flex justify-between">
          <span>Assistant Professor</span>
        </div>
      </FormSection>
      <FormSection title={"Salary"}>
        <div className="flex justify-between">
          <span>₹40,000-50,000/Month</span>
        </div>
      </FormSection>
      <FormSection title={"Other Benefits"}>
        <div className="flex justify-between">
          <span>Health Benefit</span>
        </div>
      </FormSection>
      <FormSection title={"Deadline"}>
        <div className="flex justify-between">
          <span>25th July, 2024</span>
        </div>
      </FormSection>

      <div className="border-b pb-2 mb-4 mt-6 flex justify-between items-center">
        <h2 className="text-lg font-bold">Job Description</h2>
        <button
          type="button"
          onClick={() => handleEdit("/profile-update/jobDescription")}
          className="text-blue-500 underline"
        >
          Edit
        </button>
      </div>
      <FormSection title={"Job Description"}>
        <div className="flex justify-between">
          <span>Your job description here...</span>
        </div>
      </FormSection>

      <div className="border-b pb-2 mb-4 mt-6 flex justify-between items-center">
        <h2 className="text-lg font-bold">Interview Process</h2>
        <button
          type="button"
          onClick={() => handleEdit("/profile-update/interviewProcess")}
          className="text-blue-500 underline"
        >
          Edit
        </button>
      </div>
      <FormSection title={"Interview Process"}>
        <div className="flex justify-between">
          <span>Your interview process here...</span>
        </div>
      </FormSection>

      <div className="mt-4 flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Back
          
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Preview;
