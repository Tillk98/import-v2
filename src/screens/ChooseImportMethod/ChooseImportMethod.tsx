import React, { useState } from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "./sections/LessonImportHeader/LessonImportHeader";

export const ChooseImportMethod = (): JSX.Element => {
  const [hasText, setHasText] = useState(false);
  const [hasFile, setHasFile] = useState(false);

  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen">
      <NavigationSection />
      <LessonImportHeader hasText={hasText} hasFile={hasFile} />
      <ContentSection onTextChange={setHasText} onFileUpload={setHasFile} />
    </div>
  );
};
