import React, { useState } from "react";
import FormSection from "./FormSection";
import ExperienceCounter from "./ExperienceCounter";

const TotalExperience = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  const changeValue = (type, delta) => {
    if (type === "years") {
      setYears((prev) => Math.max(0, prev + delta));
    } else if (type === "months") {
      setMonths((prev) => Math.max(0, prev + delta));
    }
  };

  return (
    <FormSection title="Total Experience">
      <ExperienceCounter type="years" value={years} onChange={changeValue} />
      <ExperienceCounter type="months" value={months} onChange={changeValue} />
    </FormSection>
  );
};

export default TotalExperience;