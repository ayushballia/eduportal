"use client"
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

const Step1 = () => {
  return (
    <div className="flex">
      <Sidebar currentStep={1} />
      <div className="flex-1 p-4">
        <h1>Step 1</h1>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" className="border p-2" />
          </div>
          <div className="mt-4">
            <Link href="/step2">
              <button type="button" className="bg-blue-500 text-white p-2">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step1;
