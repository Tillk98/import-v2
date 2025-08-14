import React, { useState, useEffect } from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "./sections/LessonImportHeader/LessonImportHeader";
import { ProgressIndicator } from "../../components/ProgressIndicator/ProgressIndicator";
import { LessonGeneration } from "../LessonGeneration/LessonGeneration";
import { TypeOrPasteInput } from "./sections/InputPages/TypeOrPasteInput";
import { WebLinksInput } from "./sections/InputPages/WebLinksInput";
import { AudioFilesInput } from "./sections/InputPages/AudioFilesInput";
import { DocumentsInput } from "./sections/InputPages/DocumentsInput";

const LoadingScreen = (): JSX.Element => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === '...') {
          return '';
        }
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full max-w-md">
      <div className="text-2xl font-medium text-gray-800 text-center">
        Cooking up your lesson{dots}
      </div>
      
      {/* Animated Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div className="h-full bg-[#42a564] rounded-full animate-pulse-slide"></div>
      </div>
      
      {/* Skeleton Loading Blocks */}
      <div className="w-full space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/5"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
  );
};

export const ChooseImportMethod = (): JSX.Element => {
  const [hasText, setHasText] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState<'edit' | 'generate' | null>(null);
  const [showLessonGeneration, setShowLessonGeneration] = useState(false);
  const [selectedImportMethod, setSelectedImportMethod] = useState<string | null>(null);

  const handleEditDetails = () => {
    setIsLoading(true);
    setLoadingType('edit');
    
    // Simulate loading for 5 seconds
    setTimeout(() => {
      setIsLoading(false);
      setLoadingType(null);
      setShowLessonGeneration(true);
    }, 5000);
  };

  const handleGenerateLesson = () => {
    setIsLoading(true);
    setLoadingType('generate');
    
    // Simulate loading for 5 seconds
    setTimeout(() => {
      setIsLoading(false);
      setLoadingType(null);
      // Reset file state after generating lesson so button disappears
      setHasFile(false);
      setHasText(false);
    }, 5000);
  };

  const handleBackToMain = () => {
    setShowLessonGeneration(false);
    setHasText(false);
    setHasFile(false);
  };

  const handleBackToImportMethods = () => {
    setSelectedImportMethod(null);
    setHasText(false);
    setHasFile(false);
  };

  const handleImportMethodSelected = (methodId: string) => {
    setSelectedImportMethod(methodId);
  };

  if (showLessonGeneration) {
    return <LessonGeneration onBack={handleBackToMain} onGenerateLesson={handleGenerateLesson} />;
  }

  // Show input page if an import method is selected
  if (selectedImportMethod) {
    const renderInputPage = () => {
      switch (selectedImportMethod) {
        case 'type-or-paste':
          return (
            <TypeOrPasteInput
              onTextChange={setHasText}
              onEditDetails={handleEditDetails}
              hasText={hasText}
              isLoading={isLoading}
              loadingType={loadingType}
            />
          );
        case 'web-links':
          return (
            <WebLinksInput
              onTextChange={setHasText}
              onEditDetails={handleEditDetails}
              hasText={hasText}
              isLoading={isLoading}
              loadingType={loadingType}
            />
          );
        case 'audio-files':
          return (
            <AudioFilesInput
              onFileUpload={setHasFile}
              onGenerateLesson={handleGenerateLesson}
              hasFile={hasFile}
              isLoading={isLoading}
              loadingType={loadingType}
            />
          );
        case 'documents':
          return (
            <DocumentsInput
              onFileUpload={setHasFile}
              onGenerateLesson={handleGenerateLesson}
              hasFile={hasFile}
              isLoading={isLoading}
              loadingType={loadingType}
            />
          );
        default:
          return null;
      }
    };

    return (
      <div className="flex flex-col items-center relative bg-white min-h-screen">
        <div className="w-full sticky top-0 z-10 bg-white">
          <NavigationSection />
          <LessonImportHeader 
            onBack={handleBackToImportMethods}
            currentStep={2}
          />
        </div>
        <ProgressIndicator currentStep={2} hasFileUploaded={hasFile} />
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center w-full">
            <LoadingScreen />
          </div>
        ) : (
          renderInputPage()
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen">
      <div className="w-full sticky top-0 z-10 bg-white">
        <NavigationSection />
        <LessonImportHeader 
          currentStep={1}
        />
      </div>
      <ProgressIndicator currentStep={1} />
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center w-full">
          <LoadingScreen />
        </div>
      ) : (
        <ContentSection 
          onImportMethodSelected={handleImportMethodSelected}
        />
      )}
    </div>
  );
};
