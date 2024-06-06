import Image from "next/image";
import UserBlueIcon from "@/app/images/registering/form/User.svg";
import UserCircleIcon from "@/app/images/registering/form/UserCircle.svg";
import GlobeIcon from "@/app/images/registering/form/GlobeSimple.svg";
import AtIcon from "@/app/images/registering/form/At.svg";
import MyEditor from "@/app/components/jobDescription/MyEditor";
import CustomSelect from "@/app/components/CustomSelect";

const page = () => {
  return (
    <div className="bg-gray-100">
      <div className="px-[20px] my-4 bg-white w-11/12 m-auto rounded-[20px] max-w-[888px]">
        <ul className="flex items-center justify-evenly gap-2 my-4">
          <li className="flex gap-2 text-[14px] font-bold text-[#0A65CC] capitalize">
            <Image src={UserBlueIcon} width={24} height={24} alt="user icon" />
            Job detail
          </li>
          <li className="flex gap-2 text-[14px] font-bold text-[#0A65CC] capitalize">
            <Image
              src={UserCircleIcon}
              width={24}
              height={24}
              alt="user circle icon"
            />
            Job description
          </li>
          <li className="flex gap-2 text-[18px] text-[#ADB2BA] font-normal">
            <Image src={GlobeIcon} width={24} height={24} alt="globe icon" />
            Interview Process
          </li>
          <li className="flex gap-2 text-[18px] text-[#ADB2BA] font-normal">
            <Image src={AtIcon} width={24} height={24} alt="at icon" />
            Job Preview
          </li>
        </ul>
        <form>
          <div className="my-4">
            <label className="text-[18px] font-semibold">Job description</label>
            <MyEditor />
          </div>

          <div className="2/4">
            <CustomSelect
              label={"Minimum Qualification"}
              placeholder={"Job keyword, tags etc.."}
            />
          </div>

          <div className="flex items-center w-2/4 mb-6">
            <label for="fresher" className="text-[16px] font-bold mr-6">
              Are you hiring freshers only?
            </label>
            <input type="checkbox" class="rounded" />
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
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
          <p className="text-[18px] font-normal">Fill these details so that we can sort the best candidate for you</p>

          <div className="flex justify-between my-8">
            <button className="px-[38px] py-[22px] text-[16px] font-bold bg-[#2677D2] rounded-[20px] text-white">Age</button>
            <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">Gender</button>
            <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">Regional Language</button>
            <button className="px-[38px] py-[22px] text-[16px] font-bold  rounded-[20px] ">Assets </button>
          </div>
          <div className="flex justify-between my-8">
            <button className="px-[18px] py-[8px] text-[20px] font-normal bg-[#2677D2] rounded-[10px] text-white">Gender</button>
            <button className="px-[18px] py-[8px] text-[20px] font-normal bg-[#2677D2] rounded-[10px] text-white">Gender</button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
