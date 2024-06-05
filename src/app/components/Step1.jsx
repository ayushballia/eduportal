"use client";
import { useRouter } from "next/navigation";
import OptionButtons from "./OptionButtons";
import OptionButtonsWithIcon from "./OptionButtonsWithIcon";
import FormSection from "./FormSection";
import TotalExperience from "./TotalExperience";
import CustomSelect from "./CustomSelect";
import DateRangePicker from "./DateRangePicker";
import {
  ChevronDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Image from "next/image";
import { UserIcon, AcademicCapIcon, Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

const Step1 = () => {
  const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
  const [experienceType, setExperienceType] = useState(null);
  const [institutionName, setInstitutionName] = useState("");
  const [roleType, setRoleType] = useState(null);

  const router = useRouter();

  const handleNext = () => {
    router.push("/step2");
  };

  return (
    <div className="p-[70px] bg-white rounded-[15px]">
      <h2 className="text-[26px] font-bold mb-6">
        Impress the Employer with your{" "}
        <span className="text-[#0A65CC]"> Experience</span>
      </h2>
      <div className="steps mb-4 flex justify-between mb-8 w-[574px]">
        <button
          type="button"
          className="font-semibold flex gap-4 text-[#0A65CC] border-b border-[#0A65CC]"
        >
          <UserIcon className="size-6 " />
          Work Experience
        </button>
        <button
          type="button"
          className="step flex gap-4"
        >
          <AcademicCapIcon className="size-6 " />
          Qualification
        </button>
        <button
          type="button"
          className="step flex gap-4 "
        >
          <Bars3BottomLeftIcon className="size-6 " />
          Preference
        </button>
      </div>
      <form>
        <FormSection title="Currently Employed?">
          <OptionButtons
            options={["Yes", "No"]}
            onSelect={setCurrentlyEmployed}
          />
        </FormSection>
        <FormSection title="Type of Experience">
          <OptionButtons
            options={["Teaching", "Non-Teaching", "Both"]}
            onSelect={setExperienceType}
          />
        </FormSection>
        <TotalExperience />
        <FormSection title="Institution Name">
          <input
            className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
            type="text"
            name="instituteName"
            placeholder="Enter the institution name"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </FormSection>

        <CustomSelect
          label={"Type of Institution"}
          placeholder={"Select your institution type"}
        />

        <FormSection title="Type of Role">
          <OptionButtonsWithIcon
            options={["Teaching", "Non-Teaching"]}
            onSelect={setRoleType}
          />
        </FormSection>

        <CustomSelect
          label={"Department"}
          placeholder={"Select your department"}
        />

        <FormSection title="Designation">
          <input
            className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
            type="text"
            name="instituteName"
            placeholder="Enter the Subject"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </FormSection>

        <CustomSelect
          label={"Highest Qualification"}
          placeholder={"Select your highest qualification"}
        />

        <CustomSelect label={"Role"} placeholder={"Select the role"} />

        <FormSection title="Designation">
          <input
            className="p-[20px] text-[10px] text-[#9199A3] border border-[#E4E5E8] rounded-[15px] w-full"
            type="text"
            name="instituteName"
            placeholder="Enter Your Designation"
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </FormSection>

        <FormSection title="Duration">
          <DateRangePicker />
        </FormSection>

        <FormSection title="Mode of Work">
          <OptionButtons
            options={["OnSite", "Remote", "Hybrid"]}
            onSelect={setExperienceType}
          />
        </FormSection>

        <FormSection title="Current Location">
          <div className="relative text-[12px] flex items-center">
            <ChevronDownIcon className="absolute size-6 right-4" />
            <input
              type="text"
              name="city"
              id="city"
              placeholder="city"
              className="rounded-[15px] border border-[#E4E5E8] px-[22px] py-[20px]"
            />
          </div>
          <div className="relative text-[12px] flex items-center">
            <ChevronDownIcon className="absolute size-6 right-4" />
            <input
              type="text"
              name="state"
              id="state"
              placeholder="state"
              className="rounded-[15px] border border-[#E4E5E8] px-[22px] py-[20px]"
            />
          </div>
        </FormSection>
        <FormSection title="Current Annual Salary">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center p-[17px] border-r">
              <span className="text-[#1C1B1F] text-[17px]">₹</span>
            </span>
            <input
              type="text"
              placeholder="Rupees"
              className="w-full pl-12 pr-4 py-[20px] text-[#9199A3] text-[12px] border border-gray-300 rounded-[15px]"
            />
          </div>
        </FormSection>

        <CustomSelect
          label={"Employment Type"}
          placeholder={"Select your employment type"}
        />

        <CustomSelect
          label={"Notice Period"}
          placeholder={"Select your notice period"}
        />

        <button
          type="button"
          onClick={handleNext}
          className="mt-4 text-[16px] font-bold bg-[#0A65CC] text-white px-[23px] py-[16px] rounded-[20px]"
        >
          Save & Next 👉
        </button>
      </form>
    </div>
  );
};

export default Step1;
