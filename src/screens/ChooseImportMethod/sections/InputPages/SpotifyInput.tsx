import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";
import { ExtensionGuide } from "../../../../components/ExtensionGuide/ExtensionGuide";

interface SpotifyInputProps {
  onTextChange?: (hasText: boolean, lyricsTranscript?: string) => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const SpotifyInput = ({
  onTextChange,
  onGenerateLesson,
  hasText = false,
  isLoading = false,
  loadingType
}: SpotifyInputProps): JSX.Element => {
  const [hasError, setHasError] = useState(false);
  // Removed unused state variables - now handled by ExtensionGuide component
  const [isSpotifyUrl, setIsSpotifyUrl] = useState(false);
  const [lyricsTranscript, setLyricsTranscript] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateValue = (value: string) => {
    const trimmedValue = value.trim();
    
    // Check if URL is valid when there's content
    const isInvalidUrl = trimmedValue.length > 0 && !isValidUrl(trimmedValue);
    
    // Check if valid URL contains "show" (case insensitive) - this is also invalid for Spotify
    const isShowUrl = isValidUrl(trimmedValue) && trimmedValue.toLowerCase().includes("show");
    
    // Check if URL is a Spotify link
    const isSpotify = isValidUrl(trimmedValue) && trimmedValue.toLowerCase().includes("spotify.com");
    setIsSpotifyUrl(isSpotify);
    
    const hasAnyError = isInvalidUrl || isShowUrl;
    setHasError(hasAnyError);
    
    // Only report as having text if there's no error
    onTextChange?.(trimmedValue.length > 0 && !hasAnyError, lyricsTranscript);
  };

  const syncInputValue = () => {
    if (urlInputRef.current) {
      const value = urlInputRef.current.value;
      if (value !== urlValue) {
        setUrlValue(value);
        validateValue(value);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(syncInputValue, 100);
    return () => clearInterval(interval);
  }, [urlValue]);

  const handlePasteClick = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (urlInputRef.current) {
        urlInputRef.current.value = text;
        syncInputValue();
      }
    } catch (err) {
      console.error('Failed to read clipboard contents: ', err);
    }
  };


  const handleLyricsTranscriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setLyricsTranscript(value);
    
    // Re-trigger validation to pass updated lyrics/transcript to parent
    validateValue(urlValue);
  };

  const handleInstallExtension = () => {
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  const handleGoToSpotify = () => {
    window.open('https://spotify.com', '_blank');
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
            style={{ backgroundImage: 'url(../image.png)' }}
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-black">Import from Spotify</h1>
            <p className="text-[#6b7280] text-base">
              Try copying the link to your favorite song or podcast on Spotify{" "}
              <a href="#" className="text-[#2e75cd] underline">
                How do I do this?
              </a>
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="w-full">
          <div className="relative">
            <input
              ref={urlInputRef}
              type="text"
              placeholder="Enter a URL ..."
              onFocus={syncInputValue}
              onBlur={syncInputValue}
              onKeyUp={syncInputValue}
              className={`w-full h-14 px-4 border rounded-lg text-base placeholder-[#9ca3af] focus:outline-none focus:ring-2 ${
                hasError 
                  ? 'border-[#DD2525] focus:ring-[#DD2525] focus:border-[#DD2525]' 
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              }`}
            />
          </div>
          
          {/* Error Message */}
          {hasError && (
            <p className="text-[#DD2525] text-sm mt-2 text-left">
              Invalid URL: Please link only individual tracks and podcast episodes.
            </p>
          )}
          
          {/* Lyrics/Transcript Input Field - appears when Spotify URL is detected */}
          {isSpotifyUrl && !hasError && (
            <div className="mt-4">
              <textarea
                value={lyricsTranscript}
                onChange={handleLyricsTranscriptChange}
                placeholder="Enter lyrics or podcast transcript (optional)"
                className="w-full h-32 px-4 py-3 border border-[#d1d6d9] rounded-lg text-base placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2e75cd] focus:border-transparent resize-none"
              />
              <p className="text-[#6b7280] text-sm mt-2 text-left">
                Adding lyrics or transcript will help create a more accurate lesson.
              </p>
            </div>
          )}
          
          {/* Generate Lesson Button - appears when there's content and no error */}
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
        platform="spotify"
        onInstallExtension={handleInstallExtension}
        onGoToPlatform={handleGoToSpotify}
      />
    </section>
  );
};