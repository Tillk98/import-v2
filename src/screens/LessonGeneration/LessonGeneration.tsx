import React from "react";
import { NavigationSection } from "../ChooseImportMethod/sections/NavigationSection/NavigationSection";
import { Button } from "../../components/ui/button";
import { ChevronLeft } from "lucide-react";

interface LessonGenerationProps {
  onBack?: () => void;
  onGenerateLesson?: () => void;
}

const LessonGenerationHeader = ({ onBack, onGenerateLesson }: { onBack?: () => void; onGenerateLesson?: () => void }): JSX.Element => {
  return (
    <div className="w-full border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="flex items-center justify-between px-8 py-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>
        
        <Button
          onClick={onGenerateLesson}
          className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0"
        >
          Generate Lesson
        </Button>
      </div>
    </div>
  );
};

export const LessonGeneration = ({ onBack, onGenerateLesson }: LessonGenerationProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen">
      <NavigationSection />
      <LessonGenerationHeader onBack={onBack} onGenerateLesson={onGenerateLesson} />
      {/* Blank content area */}
      <div className="flex-1 w-full"></div>
    </div>
  );
};