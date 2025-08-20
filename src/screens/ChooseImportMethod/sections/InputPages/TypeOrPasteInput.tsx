import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface TypeOrPasteInputProps {
  onTextChange?: (hasText: boolean) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const TypeOrPasteInput = ({ 
  onTextChange, 
  onGenerateLesson, 
  hasText = false, 
  isLoading = false, 
  loadingType = null 
}: TypeOrPasteInputProps): JSX.Element => {
  const [textContent, setTextContent] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextContent(value);
    onTextChange?.(value.trim().length > 0);
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasText}
          isGeneratingLesson={false}
        />
        
        <div className="w-full">
          <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4 text-left">
            Type or paste any text
          </h3>
          <textarea
            placeholder="Input text ..."
            className="w-full min-h-[200px] p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            autoFocus
            value={textContent}
            onChange={handleTextChange}
          />
          
          {hasText && (
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
                  'Review & Save'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};