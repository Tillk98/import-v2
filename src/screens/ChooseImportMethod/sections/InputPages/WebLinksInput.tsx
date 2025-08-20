import React, { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface WebLinksInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const WebLinksInput = ({ 
  onTextChange, 
  onGenerateLesson, 
  hasText = false, 
  isLoading = false, 
  loadingType = null 
}: WebLinksInputProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmedValue = value.trim();
    
    // Check if URL is valid when there's content
    const isInvalid = trimmedValue.length > 0 && !isValidUrl(trimmedValue);
    setHasError(isInvalid);
    
    // Only report as having text if there's no error
    onTextChange?.(trimmedValue.length > 0 && !isInvalid);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText && !hasError}
          isGeneratingLesson={false}
        />
        
        <div className="w-full">
          <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4 text-left">
            Link to Your Content
          </h3>
          <input
            ref={inputRef}
            type="url"
            placeholder="Enter a URL ..."
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 ${
              hasError 
                ? 'border-[#DD2525] focus:ring-[#DD2525] focus:border-[#DD2525]' 
                : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'
            }`}
            autoFocus
            onChange={handleUrlChange}
          />
          
          {/* Error Message */}
          {hasError && (
            <p className="text-[#DD2525] text-sm mt-2 text-left">
              Invalid URL
            </p>
          )}
          
          {/* Which links can I use? section */}
          <div className="flex items-start gap-3 mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-blue-600 font-medium text-sm mb-1">Which links can I use?</h4>
              <p className="text-gray-600 text-sm">
                Grab links to songs and podcasts on Spotify, YouTube videos in your target language, or article & blog content. Check out our <a href="#" className="text-blue-500 underline font-medium">how to guide</a> on linking content for more information.
              </p>
            </div>
          </div>
          
          {hasText && !hasError && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={onGenerateLesson}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0 disabled:opacity-75"
              >
                {isLoading && loadingType === 'generate' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  'Generate Lesson'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};