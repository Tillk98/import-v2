import React from "react";

interface ProgressIndicatorProps {
  currentStep: 1 | 2 | 3; // 1 = Source, 2 = Import, 3 = Generate
  hasFileUploaded?: boolean; // Special state for when files are uploaded
  hasUrlInput?: boolean; // Special state for when URL is added (same behavior as file upload)
  hasContent?: boolean; // When user has added any content (text, file, url)
  isGeneratingLesson?: boolean; // When user has clicked Generate Lesson
}

export const ProgressIndicator = ({ 
  currentStep, 
  hasFileUploaded = false, 
  hasUrlInput = false, 
  hasContent = false,
  isGeneratingLesson = false 
}: ProgressIndicatorProps): JSX.Element => {
  const steps = [
    {
      number: 1,
      title: "Select Source",
      description: "Choose your content source",
    },
    {
      number: 2,
      title: "Add Content", 
      description: "Add your content",
    },
    {
      number: 3,
      title: "Generate Lesson",
      description: "Create your lesson",
    },
  ];

  const getStepCircleClasses = (stepNumber: number) => {
    // Step 2 (Add Content) becomes completed when user has added content
    if (stepNumber === 2 && hasContent && currentStep === 2) {
      return "w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center";
    }
    
    // Step 3 (Generate Lesson) becomes completed when user has clicked generate lesson
    if (stepNumber === 3 && isGeneratingLesson && currentStep === 2) {
      return "w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center";
    }
    
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
    // Step 2 becomes completed (gray) when content is added
    if (stepNumber === 2 && hasContent && currentStep === 2) {
      return "text-gray-500";
    }
    
    // Step 3 becomes completed (gray) when lesson is being generated
    if (stepNumber === 3 && isGeneratingLesson && currentStep === 2) {
      return "text-gray-500";
    }
    
    if (stepNumber === currentStep) {
      return "text-blue-500";
    } else if (stepNumber < currentStep) {
      return "text-gray-500";
    } else {
      return "text-gray-500";
    }
  };

  const getConnectorClasses = (stepNumber: number) => {
    // Make line green from step 2 to 3 when content is added
    if (stepNumber === 3 && hasContent && currentStep === 2) {
      return "h-0.5 bg-green-500 flex-1 mx-3";
    }
    
    // Show green line before current step (leading up to current step)
    if (stepNumber <= currentStep) {
      return "h-0.5 bg-green-500 flex-1 mx-3";
    } else {
      return "h-0.5 bg-gray-300 flex-1 mx-3";
    }
  };

  const isStepCompleted = (stepNumber: number) => {
    // Step 2 is completed when user has added content
    if (stepNumber === 2 && hasContent && currentStep === 2) {
      return true;
    }
    
    // Step 3 is completed when user has clicked generate lesson
    if (stepNumber === 3 && isGeneratingLesson && currentStep === 2) {
      return true;
    }
    
    return stepNumber < currentStep;
  };

  return (
    <div className="w-full py-4">
      <div className="max-w-[600px] mx-auto px-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className={getStepCircleClasses(step.number)}>
                  {isStepCompleted(step.number) ? (
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="text-xs">{step.number}</span>
                  )}
                </div>
                <div className="mt-2 text-center relative">
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