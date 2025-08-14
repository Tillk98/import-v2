import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

interface LessonImportHeaderProps {
  hasText?: boolean;
  hasFile?: boolean;
  onEditDetails?: () => void;
  onGenerateLesson?: () => void;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
  onBack?: () => void;
  currentStep?: 1 | 2 | 3;
}

export const LessonImportHeader = ({ 
  hasText = false, 
  hasFile = false, 
  onEditDetails, 
  onGenerateLesson,
  isLoading = false,
  loadingType = null,
  onBack,
  currentStep = 1
}: LessonImportHeaderProps): JSX.Element => {
  const steps = [
    {
      number: 1,
      title: "Source",
    },
    {
      number: 2,
      title: "Import", 
    },
    {
      number: 3,
      title: "Edit",
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
      return "h-1 bg-green-500 flex-1 mx-4";
    } else {
      return "h-1 bg-gray-300 flex-1 mx-4";
    }
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-8 py-4">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>
        
        {/* Progress Indicator - made longer with connector lines */}
        <div className="max-w-[800px] mx-auto px-4">
          <div className="flex items-start w-full">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className={getStepCircleClasses(1)}>
                {1 < currentStep ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs">1</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <h3 className={`text-sm ${getStepTitleClasses(1)}`}>
                  Source
                </h3>
              </div>
            </div>
            
            {/* Line 1 */}
            <div className="flex-1 flex items-center justify-center px-4" style={{paddingTop: '14px'}}>
              <div className={`w-full h-0.5 ${currentStep > 1 ? 'bg-green-500' : 'bg-gray-300'}`} style={{minWidth: '60px', minHeight: '2px'}}></div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className={getStepCircleClasses(2)}>
                {2 < currentStep ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs">2</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <h3 className={`text-sm ${getStepTitleClasses(2)}`}>
                  Import
                </h3>
              </div>
            </div>
            
            {/* Line 2 */}
            <div className="flex-1 flex items-center justify-center px-4" style={{paddingTop: '14px'}}>
              <div className={`w-full h-0.5 ${currentStep > 2 ? 'bg-green-500' : 'bg-gray-300'}`} style={{minWidth: '60px', minHeight: '2px'}}></div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className={getStepCircleClasses(3)}>
                {3 < currentStep ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs">3</span>
                )}
              </div>
              <div className="mt-2 text-center">
                <h3 className={`text-sm ${getStepTitleClasses(3)}`}>
                  Edit
                </h3>
              </div>
            </div>
          </div>
        </div>

        {currentStep === 3 ? (
          <Button
            onClick={onGenerateLesson}
            className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0"
          >
            Generate Lesson
          </Button>
        ) : (
          <div className="w-[72px]"></div> /* Spacer to balance the back button */
        )}
      </div>
    </div>
  );
};