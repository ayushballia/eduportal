import React from 'react';

const JobDescription = ({ formData, handleChange, handleNextStep, handlePreviousStep }) => {
  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block mb-1">Minimum Experience (years)</label>
          <input
            type="number"
            name="minExperience"
            value={formData.minExperience}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">Maximum Experience (years)</label>
          <input
            type="number"
            name="maxExperience"
            value={formData.maxExperience}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">English Level</label>
        <input
          type="text"
          name="englishLevel"
          value={formData.englishLevel}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Vacancies</label>
        <input
          type="number"
          name="vacancies"
          value={formData.vacancies}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePreviousStep}
          className="px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          Previous
        </button>
        <button
          onClick={handleNextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default JobDescription;
