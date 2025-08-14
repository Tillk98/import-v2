import React from "react";

interface ProgressIndicatorProps {
  currentStep: 1 | 2 | 3; // 1 = Source, 2 = Import, 3 = Edit
}

export const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps): JSX.Element => {
  const steps = [
    {
      number: 1,
      title: "Source",
      description: "Choose your content source",
    },
    {
      number: 2,
      title: "Import", 
      description: "Add your content",
    },
    {
      number: 3,
      title: "Edit",
      description: "Customize your lesson",
    },
  ];

  const getStepCircleClasses = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      // Completed step - green with checkmark
      return "w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center";
    } else if (stepNumber === currentStep) {
      // Current step - blue with number
      return "w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-medium";
    } else {
      // Future step - grey with number
      return "w-7 h-7 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-medium";
    }
  };

  const getStepTitleClasses = (stepNumber: number) => {
    if (stepNumber === currentStep) {
      return "text-blue-500";
    } else if (stepNumber < currentStep) {
      return "text-gray-500";
    } else {
      return "text-gray-500";
    }
  };

  const getConnectorClasses = (stepNumber: number) => {
    if (stepNumber < currentStep) {
      return "h-0.5 bg-green-500 flex-1 mx-3";
    } else {
      return "h-0.5 bg-gray-300 flex-1 mx-3";
    }
  };

  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-[600px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className={getStepCircleClasses(step.number)}>
                  {step.number < currentStep ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs">{step.number}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <h3 className={`text-sm ${getStepTitleClasses(step.number)}`}>
                    {step.title}
                  </h3>
                </div>
              </div>
              
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className={getConnectorClasses(step.number + 1)} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};