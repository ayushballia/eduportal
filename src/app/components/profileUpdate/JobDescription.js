"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const JobDescription = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredGender: '',
    ageFrom: '',
    ageTo: '',
    languages: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/profile-update/jobSpecification');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Form fields go here */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Next</button>
    </form>
  );
};

export default JobDescription;
