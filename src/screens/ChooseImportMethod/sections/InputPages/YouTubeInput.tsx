import React, { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";
import { ExtensionGuide } from "../../../../components/ExtensionGuide/ExtensionGuide";

interface YouTubeInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const YouTubeInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: YouTubeInputProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  // Removed unused state variables - now handled by ExtensionGuide component
  const inputRef = useRef<HTMLInputElement>(null);

  // Extension detection is now handled by ExtensionGuide component

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const trimmedValue = value.trim();
    
    // Check if URL is valid when there's content
    const isInvalid = trimmedValue.length > 0 && !isValidUrl(trimmedValue);
    setHasError(isInvalid);
    
    // Only report as having text if there's no error
    onTextChange?.(trimmedValue.length > 0 && !isInvalid);
  };

  const handleInstallExtension = () => {
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  const handleGoToYouTube = () => {
    window.open('https://youtube.com', '_blank');
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      {/* Progress Indicator */}
      <div className="w-full bg-[#F1F3F4] pt-4">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText && !hasError} 
          isGeneratingLesson={false}
        />
      </div>

      <div className="w-full bg-white rounded-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(../image-3.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black text-left">Import from Youtube</h1>
            <p className="text-[#6b7280] text-base">
              Turn videos from creators fluent in your target language into engaging lessons.
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full">
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
              Invalid URL
            </p>
          )}
          
          {/* Generate Lesson Button - appears right under input, but only if no error */}
          {hasText && !hasError && (
            <div className="mt-4">
              <Button
                onClick={onGenerateLesson}
                disabled={isLoading && loadingType === 'generate'}
                className="w-full bg-[#42a564] hover:bg-[#369555] text-white px-8 py-3 rounded-lg font-medium disabled:opacity-50"
              >
                {isLoading && loadingType === 'generate' ? "Loading..." : "Review & Import"}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Extension Guide */}
      <ExtensionGuide 
        platform="youtube"
        onInstallExtension={handleInstallExtension}
        onGoToPlatform={handleGoToYouTube}
        onExploreLingQ={() => {}}
      />
    </section>
  );
};