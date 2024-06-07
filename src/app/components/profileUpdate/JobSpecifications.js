"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const JobSpecification = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredSkills: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/profile-update/preference');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Form fields go here */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Next</button>
    </form>
  );
};

export default JobSpecification;
