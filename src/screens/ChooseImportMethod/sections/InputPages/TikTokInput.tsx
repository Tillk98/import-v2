import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface TikTokInputProps {
  onTextChange?: (hasText: boolean) => void;
  onEditDetails?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const TikTokInput = ({
  onTextChange,
  onEditDetails,
  hasText = false,
  isLoading = false,
  loadingType
}: TikTokInputProps): JSX.Element => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onTextChange?.(value.trim().length > 0);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[800px] mx-auto px-8 py-16 gap-12">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(../image-5.png)' }}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-black">Import from Tik Tok</h1>
          <p className="text-[#6b7280] text-base">
            Use our browser extension to turn Tik Toks into lessons.{" "}
            <a href="#" className="text-[#2e75cd] underline">
              How do I do this?
            </a>
          </p>
        </div>
      </div>

      {/* Extension Promotion Section */}
      <div className="flex items-center gap-4 p-4 bg-[#F4FBFE] rounded-xl border border-transparent max-w-md w-full cursor-pointer transition-all duration-200 hover:border-[#2E75CD] hover:-translate-y-1 hover:shadow-lg" style={{ boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1)' }}>
        <div
          className="w-12 h-12 rounded-lg bg-cover bg-center bg-no-repeat flex-shrink-0"
          style={{ backgroundImage: 'url(/lingq-extension-icon.svg)' }}
        />
        <div className="flex-1">
          <h3 className="text-base font-medium text-black mb-1">
            Get the LingQ Extension.
          </h3>
          <p className="text-sm text-[#6b7280]">
            Import content directly from your favorite platforms in 1-click.
          </p>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
          <path d="M9 18l6-6-6-6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-[#6b7280] text-center max-w-md">
        The LingQ extension is required for this import method.
      </p>
    </div>
  );
};