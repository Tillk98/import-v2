import React, { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface SpotifyInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const SpotifyInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: SpotifyInputProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateValue = (value: string) => {
    const trimmedValue = value.trim();
    
    // Check if URL is valid when there's content
    const isInvalidUrl = trimmedValue.length > 0 && !isValidUrl(trimmedValue);
    
    // Check if valid URL contains "show" (case insensitive) - this is also invalid for Spotify
    const isShowUrl = isValidUrl(trimmedValue) && trimmedValue.toLowerCase().includes("show");
    
    const hasAnyError = isInvalidUrl || isShowUrl;
    setHasError(hasAnyError);
    
    // Only report as having text if there's no error
    onTextChange?.(trimmedValue.length > 0 && !hasAnyError);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    validateValue(value);
  };

  const handleInstallExtension = () => {
    window.open('https://chrome.google.com/webstore', '_blank');
    setCurrentStep(2);
  };


  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText && !hasError}
          isGeneratingLesson={false}
        />
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(../image.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black">Import from Spotify</h1>
            <p className="text-[#6b7280] text-base">
              Try copying the link to your favorite song or podcast on Spotify{" "}
              <a href="#" className="text-[#2e75cd] underline">
                How do I do this?
              </a>
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full max-w-md">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter a URL ..."
            onChange={handleInputChange}
            className={`w-full h-14 px-4 border rounded-lg text-base placeholder-[#9ca3af] focus:outline-none focus:ring-2 ${
              hasError 
                ? 'border-[#DD2525] focus:ring-[#DD2525] focus:border-[#DD2525]' 
                : 'border-[#d1d6d9] focus:ring-[#2e75cd] focus:border-transparent'
            }`}
          />
          
          {/* Error Message */}
          {hasError && (
            <p className="text-[#DD2525] text-sm mt-2 text-left">
              Invalid URL: Please link only individual tracks and podcast episodes.
            </p>
          )}
          
          {/* Generate Lesson Button - appears when there's content and no error */}
          {hasText && !hasError && (
            <div className="mt-4">
              <Button
                onClick={onGenerateLesson}
                disabled={isLoading && loadingType === 'generate'}
                className="w-full bg-[#42a564] hover:bg-[#369555] text-white px-8 py-3 rounded-lg font-medium disabled:opacity-50"
              >
                {isLoading && loadingType === 'generate' ? "Loading..." : "Generate Lesson"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};