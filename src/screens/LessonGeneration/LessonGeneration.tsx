import React from "react";
import { NavigationSection } from "../ChooseImportMethod/sections/NavigationSection/NavigationSection";
import { LessonPreview } from "../../components/LessonPreview/LessonPreview";
import { LessonImportHeader } from "../ChooseImportMethod/sections/LessonImportHeader/LessonImportHeader";
import { ProgressIndicator } from "../../components/ProgressIndicator/ProgressIndicator";

interface LessonGenerationProps {
  onBack?: () => void;
  onGenerateLesson?: () => void;
}


export const LessonGeneration = ({ onBack, onGenerateLesson }: LessonGenerationProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen">
      <div className="w-full sticky top-0 z-10 bg-white">
        <NavigationSection />
        <LessonImportHeader onBack={onBack} currentStep={3} onGenerateLesson={onGenerateLesson} />
      </div>
      <ProgressIndicator currentStep={3} />
      <div className="flex-1 w-full">
        <LessonPreview onGenerateLesson={onGenerateLesson} />
      </div>
    </div>
  );
};