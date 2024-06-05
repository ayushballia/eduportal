"use client"
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1 && !formData.name) {
      newErrors.name = 'Name is required';
    }
    if (step === 2 && (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))) {
      newErrors.email = 'Valid email is required';
    }
    if (step === 3 && !formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, currentStep, nextStep, validateStep, errors }}>
      {children}
    </FormContext.Provider>
  );
};
