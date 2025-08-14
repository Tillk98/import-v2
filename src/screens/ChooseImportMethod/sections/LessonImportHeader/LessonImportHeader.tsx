import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

interface LessonImportHeaderProps {
  onBack?: () => void;
  onGenerateLesson?: () => void;
  currentStep?: 1 | 2 | 3;
}

export const LessonImportHeader = ({ 
  onBack,
  onGenerateLesson,
  currentStep = 1
}: LessonImportHeaderProps): JSX.Element => {

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