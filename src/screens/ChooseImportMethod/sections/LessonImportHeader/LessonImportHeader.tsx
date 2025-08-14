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
}

export const LessonImportHeader = ({ 
  hasText = false, 
  hasFile = false, 
  onEditDetails, 
  onGenerateLesson,
  isLoading = false,
  loadingType = null
}: LessonImportHeaderProps): JSX.Element => {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
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
            onClick={onEditDetails}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0 disabled:opacity-75"
          >
            {isLoading && loadingType === 'edit' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              'Continue to Edit Details'
            )}
          </Button>
        )}
        
        {hasFile && (
          <Button
            onClick={onGenerateLesson}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0 disabled:opacity-75"
          >
            {isLoading && loadingType === 'generate' ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </>
            ) : (
              'Generate Lesson'
            )}
          </Button>
        )}
      </div>
    </div>
  );
};