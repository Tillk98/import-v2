import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

const doItYourselfOptions = [
  {
    icon: "/icon-2.svg",
    title: "Type or Paste",
  },
  {
    icon: "/icon-3.svg",
    title: "URLs",
    subtitle: "Supports YouTube & Spotify",
  },
  {
    icon: "/icon.svg",
    title: "Audio Files",
  },
  {
    icon: "/icon-1.svg",
    title: "Documents",
  },
  {
    icon: "/scan-icon.svg",
    title: "Scan",
  },
];

const platformIcons = [
  {
    image: "..//image.png",
    title: "Spotify",
    id: "spotify",
    url: "https://spotify.com/"
  },
  {
    image: "..//image-1.png",
    title: "Netflix",
    id: "netflix",
    url: "https://www.netflix.com/"
  },
  {
    image: "..//image-2.png",
    title: "Prime Video",
    id: "prime-video",
    url: "https://www.amazon.com/gp/video/storefront"
  },
  {
    image: "..//image-3.png",
    title: "YouTube",
    id: "youtube",
    url: "https://www.youtube.com/"
  },
  {
    image: "..//image-4.png",
    title: "Instagram",
    id: "instagram",
    url: "https://www.instagram.com/"
  },
  {
    image: "..//image-5.png",
    title: "Tik Tok",
    id: "tiktok",
    url: "https://www.tiktok.com/"
  },
];

interface ContentSectionProps {
  onImportMethodSelected?: (methodId: string) => void;
  onExploreContent?: () => void;
  showProgressIndicator?: boolean;
  currentStep?: number;
  hasContent?: boolean;
  isGeneratingLesson?: boolean;
}

export const ContentSection = ({ 
  onImportMethodSelected,
  onExploreContent,
  showProgressIndicator = false,
  currentStep = 1,
  hasContent = false,
  isGeneratingLesson = false
}: ContentSectionProps): JSX.Element => {
  const [activeCards, setActiveCards] = useState<Set<string>>(new Set());
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1240);
  const [extensionInstalled, setExtensionInstalled] = useState(false);

  const toggleCard = (cardId: string) => {
    // Navigate to the appropriate input page
    if (cardId === 'diy-0') { // Type or Paste
      onImportMethodSelected?.('type-or-paste');
    } else if (cardId === 'diy-1') { // Web Links
      onImportMethodSelected?.('web-links');
    } else if (cardId === 'diy-2') { // Audio Files
      onImportMethodSelected?.('audio-files');
    } else if (cardId === 'diy-3') { // Documents
      onImportMethodSelected?.('documents');
    } else if (cardId === 'diy-4') { // Scan
      onImportMethodSelected?.('scan');
    } else if (cardId === 'spotify') {
      onImportMethodSelected?.('spotify');
    } else if (cardId === 'netflix') {
      onImportMethodSelected?.('netflix');
    } else if (cardId === 'prime-video') {
      onImportMethodSelected?.('prime-video');
    } else if (cardId === 'youtube') {
      onImportMethodSelected?.('youtube');
    } else if (cardId === 'instagram') {
      onImportMethodSelected?.('instagram');
    } else if (cardId === 'tiktok') {
      onImportMethodSelected?.('tiktok');
    }
  };

  const handleInstallExtension = () => {
    setExtensionInstalled(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 w-full px-8">
      {/* Header and DIY Cards combined */}
      <div className="flex flex-col items-center gap-8 w-full bg-white rounded-lg shadow-md px-8 py-8">
        {/* Progress Indicator - moved into white section */}
        {showProgressIndicator && (
          <ProgressIndicator 
            currentStep={currentStep} 
            hasContent={hasContent}
            isGeneratingLesson={isGeneratingLesson}
          />
        )}

        {/* DIY Cards - Horizontal layout */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {doItYourselfOptions.map((option, index) => {
            const cardId = `diy-${index}`;
            const hasSubtitle = option.subtitle;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition-all h-[60px] ${
                  hasSubtitle ? 'min-w-[200px]' : 'min-w-[140px]'
                }`}
                onClick={() => toggleCard(cardId)}
              >
                <img
                  className="w-6 h-6 flex-shrink-0"
                  alt={option.title}
                  src={option.icon}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">
                    {option.title}
                  </span>
                  {hasSubtitle && (
                    <span className="text-xs text-gray-500 mt-0.5">
                      {option.subtitle}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Import from Your Favorite Platforms section */}
      <div className="flex flex-col items-center gap-6 w-full bg-white rounded-lg shadow-md px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-black mb-2">
            Import with the LingQ Extension
          </h2>
          <p className="text-gray-600 text-base">
            Transform TV shows, YouTube videos, podcast episodes into interactive lessons with the LingQ browser extension.
          </p>
        </div>

        {/* Platform Icons */}
        <div className="relative w-full mb-8 overflow-hidden">
          <div className="ticker-container">
            <div className="ticker-track">
              {/* First set of icons */}
              <div className="ticker-item-group">
                {platformIcons.filter(platform => platform.id !== 'spotify').map((platform, index) => (
                  <div
                    key={`first-${index}`}
                    className="ticker-icon"
                    style={{ backgroundImage: `url(${platform.image})` }}
                    title={platform.title}
                  />
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="ticker-item-group">
                {platformIcons.filter(platform => platform.id !== 'spotify').map((platform, index) => (
                  <div
                    key={`second-${index}`}
                    className="ticker-icon"
                    style={{ backgroundImage: `url(${platform.image})` }}
                    title={platform.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="w-full max-w-2xl">
          {/* Step 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                <img src="/Vector.svg" alt="Extension icon" className="w-5 h-5" />
              </div>
              {/* Connecting line to Step 2 */}
              <div className="w-0.5 h-12 bg-gray-200 ml-5 mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="mb-1">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Step 1</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Get the LingQ Extension.</h3>
              {!extensionInstalled ? (
                <>
                  <p className="text-gray-600 text-sm mb-3">
                    Import content directly from your favorite platforms in 1-click.
                  </p>
                  <button
                    onClick={handleInstallExtension}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Install Extension
                  </button>
                </>
              ) : (
                <div className="flex items-center gap-2 text-green-600">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm font-medium">Extension detected & ready to go!</span>
                </div>
              )}
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                extensionInstalled ? 'bg-blue-500' : 'bg-gray-300'
              }`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-1">
                <span className={`text-xs uppercase tracking-wider ${extensionInstalled ? 'text-gray-500' : 'text-gray-400'}`}>Step 2</span>
              </div>
              <h3 className={`text-2xl font-semibold mb-2 ${extensionInstalled ? 'text-black' : 'text-gray-400'}`}>
                Explore Content & Import
              </h3>
              {extensionInstalled && (
                <p className="text-base mb-6 text-gray-600">
                  Browse external lessons right here on LingQ or choose a source below to go to the platform.
                </p>
              )}
              
              {/* Platform buttons - only shown when Step 2 is active */}
              {extensionInstalled && (
                <div className="space-y-4">
                  {/* Explore External Lessons button */}
                  <button 
                    onClick={onExploreContent}
                    className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl text-base font-medium transition-colors flex items-center justify-between"
                  >
                    <span>Explore External Lessons</span>
                    <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M6 12L10 8L6 4"/>
                    </svg>
                  </button>
                  
                  {/* Platform Icons Grid */}
                  <div className="w-full max-w-md" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', rowGap: '32px' }}>
                    {platformIcons.map((platform, index) => (
                      <a
                        key={platform.id}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-md hover:shadow-lg flex-shrink-0"
                        style={{ width: '48px', height: '48px' }}
                        title={platform.title}
                      >
                        <img
                          src={platform.image}
                          alt={platform.title}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};