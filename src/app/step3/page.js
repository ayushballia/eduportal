"use client"
import Step3 from '../components/Step3';
import Sidebar from '../components/Sidebar';

const Step3Page = () => {
  return (
    <div className="flex bg-gray-100 gap-4">
      <Sidebar />
      <div className="flex-1">
        <Step3 />
      </div>
    </div>
  );
};

export default Step3Page;
