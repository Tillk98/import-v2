import React, { useState, useEffect } from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "./sections/LessonImportHeader/LessonImportHeader";
import { LessonGeneration } from "../LessonGeneration/LessonGeneration";

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

  if (showLessonGeneration) {
    return <LessonGeneration onBack={handleBackToMain} onGenerateLesson={handleGenerateLesson} />;
  }

  return (
    <div className="flex flex-col items-center relative bg-white min-h-screen">
      <div className="w-full sticky top-0 z-10 bg-white">
        <NavigationSection />
        <LessonImportHeader 
          hasText={hasText} 
          hasFile={hasFile} 
          onEditDetails={handleEditDetails}
          onGenerateLesson={handleGenerateLesson}
          isLoading={isLoading}
          loadingType={loadingType}
        />
      </div>
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center w-full">
          <LoadingScreen />
        </div>
      ) : (
        <ContentSection onTextChange={setHasText} onFileUpload={setHasFile} />
      )}
    </div>
  );
};
