import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface WebLinksInputProps {
  onTextChange?: (hasText: boolean) => void;
  onEditDetails?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const WebLinksInput = ({ 
  onTextChange, 
  onEditDetails, 
  hasText = false, 
  isLoading = false, 
  loadingType = null 
}: WebLinksInputProps): JSX.Element => {
  const [urlContent, setUrlContent] = useState('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrlContent(value);
    onTextChange?.(value.trim().length > 0);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8 w-full">
      <div className="w-full max-w-[1200px]">
        <div className="w-full">
          <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4 text-center">
            Add a URL
          </h3>
          <input
            type="url"
            placeholder="Paste URL ..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
            autoFocus
            value={urlContent}
            onChange={handleUrlChange}
          />
          <p className="text-gray-600 text-sm mt-2 text-center">
            Don't have a URL ready? Here are <a href="#" className="text-blue-500 underline">some sites we recommend</a> you explore for content.
          </p>
          
          {hasText && (
            <div className="flex justify-center mt-6">
              <Button
                onClick={onEditDetails}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0 disabled:opacity-75"
              >
                {isLoading && loadingType === 'edit' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  'Continue to Edit Details'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};