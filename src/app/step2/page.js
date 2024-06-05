"use client"
import Step2 from '../components/Step2';
import Sidebar from '../components/Sidebar';

const Step2Page = () => {
  return (
    <div className="flex bg-gray-100 gap-4">
      <Sidebar />
      <div className="flex-1">
        <Step2 />
      </div>
    </div>
  );
};

export default Step2Page;
