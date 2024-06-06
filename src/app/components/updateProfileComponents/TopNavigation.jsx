
const TopNavigation = ({ currentStep }) => {
  const steps = [
    { step: 1, label: 'Job Details', icon: '👤' },
    { step: 2, label: 'Job Description', icon: '📝' },
    { step: 3, label: 'Interview Process', icon: '🌐' },
    { step: 4, label: 'Preview', icon: '🔍' },
  ];

  return (
    <div className="flex justify-around p-4 bg-white shadow-md">
      {steps.map((item) => (
        <div
          key={item.step}
          className={`flex items-center space-x-2 ${
            currentStep === item.step ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TopNavigation;
