import React from 'react';

const JobSpecification = ({ formData, handleChange, handleNextStep, handlePreviousStep }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">Preferred Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block mb-1">Age (Min)</label>
          <input
            type="number"
            name="minAge"
            value={formData.minAge}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">Age (Max)</label>
          <input
            type="number"
            name="maxAge"
            value={formData.maxAge}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Languages</label>
        <input
          type="text"
          name="languages"
          value={formData.languages}
          onChange={(e) => setFormData({ ...formData, languages: e.target.value.split(',') })}
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

export default JobSpecification;
