import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

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
  const [extensionInstalled, setExtensionInstalled] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // Track which step is active

  // Check if LingQ extension is installed
  useEffect(() => {
    // Simple detection - check if extension adds any specific elements or APIs
    // This is a mock implementation - real detection would check for extension-specific APIs
    const checkExtension = () => {
      // Mock: randomly determine if extension is installed for demo purposes
      // In real implementation, this would check for extension-specific APIs or DOM elements
      const hasExtension = Math.random() > 0.5; // 50% chance for demo
      setExtensionInstalled(hasExtension);
    };

    checkExtension();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onTextChange?.(value.trim().length > 0);
  };

  const handleInstallExtension = () => {
    // Open extension store - this would be the actual Chrome/Firefox store link
    window.open('https://chrome.google.com/webstore', '_blank');
    // Advance to step 2 and mark extension as installed
    setExtensionInstalled(true);
    setCurrentStep(2);
  };

  const handleGoToNetflix = () => {
    window.open('https://netflix.com', '_blank');
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText} 
          isGeneratingLesson={false}
        />
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

        {/* Video Carousel Section */}
        <div className="w-full mb-8">
          <h2 className="text-xl font-semibold text-black mb-4 text-left">Import these videos</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {/* Video Tile 1 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">12 New Words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">8 LingQs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-white text-xs font-medium">156 Known Words</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-white font-bold text-sm">La Casa de Papel</div>
                  <div className="text-white text-xs">Madrid, España</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-sm mb-2">Money Heist: Season 1</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>45% new words</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-600">Spanish</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span className="text-xs text-gray-600">42:15</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tile 2 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-blue-800 to-blue-900">
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">18 New Words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">14 LingQs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-white text-xs font-medium">203 Known Words</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-white font-bold text-sm">Dark</div>
                  <div className="text-white text-xs">Winden, Deutschland</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-sm mb-2">Dark: The Beginning</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>52% new words</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-600">German</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span className="text-xs text-gray-600">38:42</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tile 3 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-red-800 to-red-900">
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">22 New Words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">16 LingQs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-white text-xs font-medium">189 Known Words</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-white font-bold text-sm">Élite</div>
                  <div className="text-white text-xs">Madrid, España</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-sm mb-2">Élite: Class of 2024</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>58% new words</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-600">Spanish</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span className="text-xs text-gray-600">51:28</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Tile 4 */}
            <div className="flex-shrink-0 w-64 bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-purple-800 to-purple-900">
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">15 New Words</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-white text-xs font-medium">11 LingQs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-white text-xs font-medium">267 Known Words</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-white font-bold text-sm">Lupin</div>
                  <div className="text-white text-xs">Paris, France</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-sm mb-2">Lupin: Gentleman Thief</h3>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>38% new words</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-600">French</span>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span className="text-xs text-gray-600">44:17</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Extension Import Guide - White Box */}
      <div className="w-full bg-white rounded-lg shadow-md p-8">
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
                  Add our browser extension to import content directly from Netflix with one click.
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
              <h3 className={`text-xl font-semibold ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>Start learning on Netflix</h3>
            </div>
            <p className={`mb-4 ${currentStep >= 2 ? 'text-gray-600' : 'text-gray-400'}`}>
              Browse Netflix, find content in your target language, and click the LingQ extension to create interactive lessons instantly.
            </p>
            
            {currentStep >= 2 && (
              <>
                <button
                  onClick={handleGoToNetflix}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-medium transition-colors mb-4"
                >
                  Go to Netflix
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
                        New to the LingQ extension? Find out how to use it to import content from every platform we support.
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
    </section>
  );
};