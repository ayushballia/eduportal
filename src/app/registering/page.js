import React from "react";
import Image from "next/image";
import UserBlueIcon from "@/app/images/registering/form/User.svg";
import UserCircleIcon from "@/app/images/registering/form/UserCircle.svg";
import GlobeIcon from "@/app/images/registering/form/GlobeSimple.svg";
import AtIcon from "@/app/images/registering/form/At.svg";
import BlankCalenderIcon from "@/app/images/registering/form/CalendarBlank.svg";
import RegistrationBenefits from "@/app/components/registering/RegistrationBenifits";
import FormInput from "@/app/components/registering/FormInput";
import CustomSelect from "@/app/components/CustomSelect.jsx";
import OtherBenefits from "@/app/components/registering/OtherBenefits";

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 m-auto flex gap-4">
        <RegistrationBenefits />

        <div className="w-3/4">
          <div className="px-2 my-4">
            <ul className="flex items-center justify-evenly gap-2">
              <li className="flex gap-2 text-[14px] font-bold text-[#0A65CC]">
                <Image
                  src={UserBlueIcon}
                  width={24}
                  height={24}
                  alt="user icon"
                />
                Organization detail
              </li>
              <li className="flex gap-2 text-[18px] text-[#ADB2BA] font-normal">
                <Image
                  src={UserCircleIcon}
                  width={24}
                  height={24}
                  alt="user circle icon"
                />
                Candidate Requirements
              </li>
              <li className="flex gap-2 text-[18px] text-[#ADB2BA] font-normal">
                <Image
                  src={GlobeIcon}
                  width={24}
                  height={24}
                  alt="globe icon"
                />
                Interview Process
              </li>
              <li className="flex gap-2 text-[18px] text-[#ADB2BA] font-normal">
                <Image src={AtIcon} width={24} height={24} alt="at icon" />
                Job Preview
              </li>
            </ul>
          </div>

          <form className="px-4">
            <div className="grid grid-cols-2 gap-6">
              <CustomSelect
                label={"Organization Type"}
                placeholder={"Job keyword, tags etc.."}
              />

              <CustomSelect
                label={"Organization Name"}
                placeholder={"Job keyword, tags etc..."}
              />

              <CustomSelect
                label={"Job Category"}
                placeholder={"Job keyword, tags etc..."}
              />
              
              <FormInput
                label="Job Category"
                type="select"
                options={["Select...", "Category 1", "Category 2"]}
              />
              <FormInput
                label="Role"
                type="select"
                options={["Select...", "Role 1", "Role 2"]}
              />
              <FormInput
                label="Shift Timing"
                type="select"
                options={["Select...", "Timing 1", "Timing 2"]}
              />
              <FormInput
                label="Job Type"
                type="select"
                options={["Select...", "Full-time", "Part-time"]}
              />
              <FormInput
                label="Work Mode"
                type="select"
                options={["Select...", "Remote", "On-site"]}
              />
              <div className="grid grid-cols-2 gap-3">
                <FormInput
                  label="Work City"
                  type="select"
                  options={["Select...", "City 1", "City 2"]}
                />
                <FormInput
                  label="Work State"
                  type="select"
                  options={["Select...", "State 1", "State 2"]}
                />
              </div>
              <FormInput label="Job Title" />
              <FormInput label="Organization Website" />
              <FormInput
                label="Salary"
                type="select"
                options={["Select...", "Salary 1", "Salary 2"]}
              />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[14px] font-semibold text-[#18191C]">
                    Min Salary: (per month)
                  </label>
                  <select className="mt-1 block w-full rounded-[15px] border-[#E4E5E8] p-[17px] text-[14px] text-[#767F8C] font-normal">
                    <option>Select...</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-[#18191C]">
                    Max salary:(per month)
                  </label>
                  <select className="mt-1 block w-full rounded-[15px] border-[#E4E5E8] p-[17px] text-[14px] text-[#767F8C] font-normal">
                    <option>Select...</option>
                  </select>
                </div>
              </div>
            </div>
            <p className="text-[18px] text-[#18191C] font-semibold my-4">
              Other Benefits
            </p>
            <OtherBenefits />
            <p className="text-[16px] font-bold my-6">
              Is there any joining fee required from the candidate?
            </p>
            <div className="w-2/4">
              <label className="block text-[18px] font-semibold text-[#18191C]">
                Year of Establishment
              </label>
              <div className="relative">
                <Image
                  src={BlankCalenderIcon}
                  width={22}
                  height={22}
                  alt="blank calender"
                  className="absolute right-3 top-5"
                />
              </div>
              <input
                type="text"
                className="mt-1 block w-full rounded-[15px] border-[#E4E5E8] p-[17px] text-[14px] text-[#767F8C] font-normal"
              />
            </div>
            <button className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] my-4">
              Save & Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
