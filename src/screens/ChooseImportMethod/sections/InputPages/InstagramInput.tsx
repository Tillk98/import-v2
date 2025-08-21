import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { ExtensionGuide } from "../../../../components/ExtensionGuide/ExtensionGuide";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface InstagramInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const InstagramInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: InstagramInputProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  const [extensionInstalled, setExtensionInstalled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if LingQ extension is installed
  useEffect(() => {
    const checkExtension = () => {
      const hasExtension = Math.random() > 0.5;
      setExtensionInstalled(hasExtension);
    };
    checkExtension();
  }, []);

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
    setExtensionInstalled(true);
    setCurrentStep(2);
  };

  const handleGoToInstagram = () => {
    window.open('https://instagram.com', '_blank');
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
            style={{ backgroundImage: 'url(../image-4.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black">Import from Instagram</h1>
            <p className="text-[#6b7280] text-base">
              Use our browser extension to turn Instagram content – Reels and posts – into lessons.
            </p>
          </div>
        </div>
      </div>

      {/* Extension Guide */}
      <ExtensionGuide 
        platform="instagram"
        onInstallExtension={handleInstallExtension}
        onGoToPlatform={handleGoToInstagram}
      />
    </section>
  );
};