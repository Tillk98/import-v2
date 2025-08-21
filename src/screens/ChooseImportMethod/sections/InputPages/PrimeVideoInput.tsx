import React, { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ExtensionGuide } from "../../../../components/ExtensionGuide/ExtensionGuide";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface PrimeVideoInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const PrimeVideoInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: PrimeVideoInputProps): JSX.Element => {
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

  const handleGoToPrimeVideo = () => {
    window.open('https://primevideo.com', '_blank');
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      {/* Progress Indicator */}
      <div className="w-full bg-[#F1F3F4] pt-4">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText}
          isGeneratingLesson={false}
        />
      </div>

      {/* Header and Input Section - White Box */}
      <div className="w-full bg-white rounded-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(../image-2.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black">Import from Prime Video</h1>
            <p className="text-[#6b7280] text-base">
              Make the most of binge watching – turn movies & TV shows into learning opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Extension Guide */}
      <ExtensionGuide 
        platform="prime-video"
        onInstallExtension={handleInstallExtension}
        onGoToPlatform={handleGoToPrimeVideo}
        onExploreLingQ={() => {}}
      />
    </section>
  );
};