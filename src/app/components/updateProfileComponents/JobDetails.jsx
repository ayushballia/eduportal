import React from 'react';

const JobDetails = ({ formData, handleChange, handleNextStep }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block mb-1">Minimum Qualification</label>
        <input
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Are you hiring freshers only?</label>
        <input
          type="checkbox"
          name="freshersOnly"
          checked={formData.freshersOnly}
          onChange={handleChange}
          className="mr-2"
        />
      </div>
      <button
        onClick={handleNextStep}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Save & Next
      </button>
    </div>
  );
};

export default JobDetails;
