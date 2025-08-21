import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";
import { ExtensionGuide } from "../../../../components/ExtensionGuide/ExtensionGuide";

interface NetflixInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const NetflixInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: NetflixInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  // Removed unused state variables - now handled by ExtensionGuide component

  // Extension detection is now handled by ExtensionGuide component

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onTextChange?.(value.trim().length > 0);
  };

  const handleInstallExtension = () => {
    // Open extension store - this would be the actual Chrome/Firefox store link
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  const handleGoToNetflix = () => {
    window.open('https://netflix.com', '_blank');
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

      <div className="w-full bg-white rounded-2xl p-8 border border-gray-100">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(../image-1.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black text-left">Import from Netflix</h1>
            <p className="text-[#6b7280] text-base">
              Make the most of binge watching – turn movies & TV shows into learning opportunities.
            </p>
          </div>
        </div>

      </div>

      {/* Extension Guide */}
      <ExtensionGuide 
        platform="netflix"
        onInstallExtension={handleInstallExtension}
        onGoToPlatform={handleGoToNetflix}
        onExploreLingQ={() => {}}
      />
    </section>
  );
};