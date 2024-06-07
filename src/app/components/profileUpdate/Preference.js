"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Preference = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    preferredAssets: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {/* Form fields go here */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default Preference;
