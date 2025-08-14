import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "./sections/LessonImportHeader/LessonImportHeader";

export const ChooseImportMethod = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-white">
      <NavigationSection />
      <LessonImportHeader />
      <ContentSection />
    </div>
  );
};
