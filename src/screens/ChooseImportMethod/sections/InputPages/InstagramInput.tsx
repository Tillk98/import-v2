import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";

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
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto px-8 py-16 gap-12">
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


      {/* Extension Import Guide */}
      <div className="w-full max-w-2xl">
        {/* Step 1 - Install Extension */}
        <div className="flex items-start gap-6 mb-8">
          {/* Step Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-b from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" className="text-white">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.2132 0.0703125L15.2159 0.0704404C16.7865 0.144891 18.2683 0.82123 19.3535 1.95915C20.4435 3.10202 21.0442 4.86845 21.0442 6.74562C21.0442 8.72066 20.443 10.3897 19.3535 11.5321C18.2934 12.6437 16.8548 13.3149 15.3245 13.4147V23.1271L15.3245 23.1283C15.3223 23.2363 15.2988 23.3432 15.2553 23.4424C15.2118 23.5411 15.1492 23.631 15.071 23.7059C14.9928 23.781 14.9006 23.8397 14.7996 23.8789C14.6987 23.9182 14.5911 23.9373 14.4829 23.9348C14.3692 23.9326 14.2571 23.9066 14.1542 23.8582C14.052 23.81 13.9607 23.741 13.8868 23.6552L3.10698 12.1206C2.00291 11.0331 1.41375 9.87989 1.0965 8.33181C0.957031 7.65122 0.957031 6.93067 0.957031 6.22683C1.0965 4.58466 1.56183 3.13807 2.64314 1.99369C3.72445 0.84928 5.20219 0.161315 6.77401 0.0705024L6.77729 0.0703125H15.2132ZM14.9953 10.5941C15.8109 10.5386 16.5744 10.1729 17.1289 9.57188C17.6764 8.97837 17.9762 7.92761 17.9762 6.79362C17.9762 5.66338 17.6325 4.62132 17.0685 4.04255C16.4974 3.45666 15.7236 3.11189 14.9061 3.07914H6.99746C6.19475 3.16303 5.47947 3.45418 4.9241 4.05249C4.33413 4.68807 4.02295 5.64786 4.02295 6.82865C4.02295 8.00944 4.26628 9.17491 5.71755 10.6262L5.8075 10.7201L12.4679 17.8227V12.0974L12.4679 12.0968C12.4722 11.6996 12.6319 11.3199 12.9127 11.039C13.1936 10.7581 13.5733 10.5985 13.9705 10.5942L13.9711 10.5941H14.9953Z" fill="currentColor"/>
              </svg>
            </div>
            {/* Connecting line to next step */}
            <div className="w-0.5 h-12 bg-gray-200 ml-8 mt-4"></div>
          </div>

          {/* Step Content */}
          <div className="flex-1">
            <div className="mb-2">
              <span className="text-sm text-gray-500">Step 1</span>
              <h3 className="text-xl font-semibold text-black">Install the LingQ Extension</h3>
            </div>

            {currentStep > 1 ? (
              // Collapsed state - extension installed
              <div className="flex items-center gap-2 text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium">Extension detected and ready to use!</span>
              </div>
            ) : (
              // Expanded state - show installation content
              <>
                <p className="text-gray-600 mb-4">
                  Add our browser extension to import content directly from Instagram with one click.
                </p>
                <button
                  onClick={handleInstallExtension}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors mb-4"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Install Extension
                </button>

              </>
            )}
          </div>
        </div>

        {/* Step 2 - Start Learning */}
        <div className="flex items-start gap-6">
          {/* Step Icon */}
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              currentStep >= 2 
                ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                : 'bg-gray-200'
            }`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={currentStep >= 2 ? 'text-white' : 'text-gray-400'}>
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1">
            <div className="mb-2">
              <span className={`text-sm ${currentStep >= 2 ? 'text-gray-500' : 'text-gray-400'}`}>Step 2</span>
              <h3 className={`text-xl font-semibold ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>Start learning on Instagram</h3>
            </div>
            <p className={`mb-4 ${currentStep >= 2 ? 'text-gray-600' : 'text-gray-400'}`}>
              Browse Instagram, find content in your target language, and click the LingQ extension to create interactive lessons instantly.
            </p>
            
            {currentStep >= 2 && (
              <>
                <button
                  onClick={handleGoToInstagram}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors mb-4"
                >
                  Go to Instagram
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Getting Started Tip */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-600 text-sm">🚀</span>
                    <div>
                      <h4 className="font-medium text-yellow-800 text-sm mb-1">Getting Started</h4>
                      <p className="text-yellow-700 text-sm mb-2">
                        New to importing Instagram content? Watch our step-by-step video guide to see exactly how it works.
                      </p>
                      <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-yellow-200 transition-colors">
                        <span className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                          </svg>
                          Watch How-To Video
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};