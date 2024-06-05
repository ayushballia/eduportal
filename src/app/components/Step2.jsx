"use client"
import { useRouter } from 'next/navigation';
import CustomSelect from "./CustomSelect";
import { UserIcon, AcademicCapIcon, Bars3BottomLeftIcon } from "@heroicons/react/16/solid";


const Step2 = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/step3');
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
          className="font-semibold flex gap-4 "
        >
          <UserIcon className="size-6 " />
          Work Experience
        </button>
        <button
          type="button"
          className="step flex gap-4 text-[#0A65CC] border-b border-[#0A65CC]"
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
      <CustomSelect label={"Highest Qualification"} placeholder={"Select your highest qualification"} />
      <CustomSelect label={"School Name"} placeholder={"Select your school name"} />
      <CustomSelect label={"Board"} placeholder={"Select your board"} />
      <CustomSelect label={"Medium"} placeholder={"Select your language"} />
      <CustomSelect label={"Passing Year"} placeholder={"Select your year of passing"} />
        <button type="button" onClick={handleNext} className="mt-4 bg-blue-500 text-white px-4 py-2">
          Next
        </button>
      </form>
    </div>
  );
};

export default Step2;
