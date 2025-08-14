import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

interface LessonImportHeaderProps {
  hasText?: boolean;
  hasFile?: boolean;
}

export const LessonImportHeader = ({ hasText = false, hasFile = false }: LessonImportHeaderProps): JSX.Element => {
  return (
    <div className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between px-8 py-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>
        
        {hasText && (
          <Button
            className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0"
          >
            Continue to Edit Details
          </Button>
        )}
        
        {hasFile && (
          <Button
            className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0"
          >
            Generate Lesson
          </Button>
        )}
      </div>
    </div>
  );
};