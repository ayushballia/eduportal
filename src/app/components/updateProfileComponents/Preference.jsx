import React from 'react';

const Preference = ({ formData, handleChange, handlePreviousStep, handleSubmit }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">Preferred Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={(e) => handleChange({ ...formData, skills: e.target.value.split(',') })}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Preferred Assets</label>
        <input
          type="text"
          name="assets"
          value={formData.assets}
          onChange={(e) => handleChange({ ...formData, assets: e.target.value.split(',') })}
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
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Preference;
