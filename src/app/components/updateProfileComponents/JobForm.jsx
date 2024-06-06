"use client";

import { useState } from "react";
import Step1 from "./JobDetails";
import Step2 from "./JobDescription";
import Step3 from "./JobSpecification";
import Step4 from "./Preference";
import TopNavigation from "./TopNavigation";

const JobForm = () => {
  const [formData, setFormData] = useState({
    qualification: "",
    course: "",
    freshersOnly: false,
    minExperience: "",
    maxExperience: "",
    englishLevel: "",
    vacancies: "",
    gender: "",
    minAge: "",
    maxAge: "",
    languages: [],
    skills: [],
    assets: [],
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted")
  };

  return (
    <div className="flex flex-col items-center">
      <TopNavigation currentStep={currentStep} />
      <div className="flex w-full mt-4">
        <Sidebar currentStep={currentStep} />
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white shadow-md rounded w-full"
        >
          <h2 className="text-xl font-bold mb-6">Job Description</h2>
          {currentStep === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              handleNextStep={handleNextStep}
            />
          )}
          {currentStep === 2 && (
            <Step2
              formData={formData}
              handleChange={handleChange}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 3 && (
            <Step3
              formData={formData}
              handleChange={handleChange}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {currentStep === 4 && (
            <Step4
              formData={formData}
              handleChange={handleChange}
              handlePreviousStep={handlePreviousStep}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </div>
  );
};

const Sidebar = ({ currentStep }) => {
  return (
    <div className="w-1/4 p-4 bg-gray-200 h-screen">
      <div className="mb-4">
        <div
          className={`p-4 rounded ${
            currentStep === 1 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Job Details
        </div>
      </div>
      <div className="mb-4">
        <div
          className={`p-4 rounded ${
            currentStep === 2 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Job Description
        </div>
      </div>
      <div className="mb-4">
        <div
          className={`p-4 rounded ${
            currentStep === 3 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Interview Process
        </div>
      </div>
      <div className="mb-4">
        <div
          className={`p-4 rounded ${
            currentStep === 4 ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          Preview
        </div>
      </div>
    </div>
  );
};

export default JobForm;
