"use client";
import { useRouter } from "next/navigation";
import CustomSelect from "./CustomSelect";
import {
  UserIcon,
  AcademicCapIcon,
  Bars3BottomLeftIcon,
} from "@heroicons/react/16/solid";
import OptionButtons from "./OptionButtons";
import FormSection from "./FormSection";
import { useState } from "react";
import OptionButtonsWithIcon from "./OptionButtonsWithIcon";

const Step3 = () => {
  const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
  const [workMode, setWorkMode] = useState("on-site");
  const [roleType, setRoleType] = useState(null);

  const router = useRouter();

  const handleNext = () => {
    alert("form submit")
  };

  return (
    <div className="p-[70px] bg-white rounded-[15px]">
      <h2 className="text-[26px] font-bold mb-6">
        Highlight your <span className="text-[#0A65CC]"> Job Preferences</span> {" "}
        for the best fit
      </h2>
      <div className="steps mb-4 flex justify-between mb-8 w-[574px]">
        <button type="button" className="flex text-[#23232380] gap-4 ">
          <UserIcon className="size-6 " />
          Work Experience
        </button>
        <button type="button" className="step text-[#23232380] flex gap-4">
          <AcademicCapIcon className="size-6 " />
          Qualification
        </button>
        <button
          type="button"
          className="step font-semibold flex gap-4 text-[#0A65CC] border-b border-[#0A65CC]"
        >
          <Bars3BottomLeftIcon className="size-6 " />
          Preference
        </button>
      </div>
      <form>
        <FormSection title="Job Preference">
          <OptionButtons
            options={["Teaching", "Non-teaching"]}
            onSelect={setCurrentlyEmployed}
          />
        </FormSection>
        <CustomSelect
          label={"Preferred type of organization"}
          placeholder={"Select your school name"}
        />

        <div className="grid grid-cols-2 gap-6 max-w-[482px] mb-1">
          <div>
            <CustomSelect label={"Preferred Location"} placeholder={"City"} />
          </div>
          <div>
            <CustomSelect label={""} placeholder={"State"} />
          </div>
        </div>

        <CustomSelect
          label={"Availability to Join"}
          placeholder={"Select your Availability to Join"}
        />
        <CustomSelect
          label={"Preferred Employment Type"}
          placeholder={"Select your Employment type"}
        />

        <FormSection title="Preferred Mode of Work">
          <OptionButtons
            options={["On-site", "Remote", "Hybrid"]}
            onSelect={setCurrentlyEmployed}
          />
        </FormSection>

        <FormSection title="Expected Salary">
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

        {/* <FormSection title="Type of Role">
          <OptionButtonsWithIcon
            options={["Male", "Female", "Prefer not to say"]}
            onSelect={setRoleType}
          />
        </FormSection> */}

        {/* <FormSection title="About me">
          <textarea name="about" id="about" cols="30" rows="10"></textarea>
        </FormSection> */}

        <CustomSelect
          label={"Skills"}
          placeholder={"Select your Employment type"}
        />

        <button
          type="button"
          onClick={handleNext}
          className="mt-4 text-[16px] font-bold bg-[#0A65CC] text-white px-[23px] py-[16px] rounded-[20px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step3;
