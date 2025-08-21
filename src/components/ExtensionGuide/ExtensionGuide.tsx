import React, { useState } from "react";
import { Button } from "../ui/button";

type Platform = 'instagram' | 'netflix' | 'prime-video' | 'tiktok' | 'youtube' | 'spotify';

interface ExtensionGuideProps {
  platform: Platform;
  onInstallExtension?: () => void;
  onGoToPlatform?: () => void;
  onExploreLingQ?: () => void;
}

export const ExtensionGuide = ({
  platform,
  onInstallExtension,
  onGoToPlatform,
  onExploreLingQ
}: ExtensionGuideProps): JSX.Element => {
  const [extensionInstalled, setExtensionInstalled] = useState(false);

  const handleInstallExtension = () => {
    setExtensionInstalled(true);
    onInstallExtension?.();
  };

  const platformConfig = {
    instagram: {
      name: 'Instagram',
      step2Text: 'Continue to browse on Instagram.',
      buttonText: 'Go to Instagram',
      url: 'https://instagram.com',
      iconImage: 'url(../image-4.png)',
      color: 'from-purple-500 to-pink-500'
    },
    netflix: {
      name: 'Netflix',
      step2Text: 'Explore suggested content right here on LingQ or browse on Netflix.',
      buttonText: 'Go to Netflix',
      url: 'https://netflix.com',
      iconImage: 'url(../image-1.png)',
      color: 'from-red-600 to-red-600',
      hasExploreLingQ: true
    },
    'prime-video': {
      name: 'Prime Video',
      step2Text: 'Explore suggested content right here on LingQ or browse on Prime Video.',
      buttonText: 'Go to Prime Video',
      url: 'https://primevideo.com',
      iconImage: 'url(../image-2.png)',
      color: 'from-blue-500 to-blue-500',
      hasExploreLingQ: true
    },
    tiktok: {
      name: 'Tik Tok',
      step2Text: 'Continue to browse on Tik Tok.',
      buttonText: 'Go to Tik Tok',
      url: 'https://tiktok.com',
      iconImage: 'url(../image-5.png)',
      color: 'from-black to-black'
    },
    youtube: {
      name: 'YouTube',
      step2Text: 'Explore suggested content right here on LingQ or browse on YouTube.',
      buttonText: 'Go to YouTube',
      url: 'https://youtube.com',
      iconImage: 'url(../image-3.png)',
      color: 'from-red-500 to-red-500',
      hasExploreLingQ: true
    },
    spotify: {
      name: 'Spotify',
      step2Text: 'Continue to browse on Spotify.',
      buttonText: 'Go to Spotify',
      url: 'https://spotify.com',
      iconImage: 'url(../image.png)',
      color: 'from-green-500 to-green-500'
    }
  };

  const config = platformConfig[platform];

  return (
    <div className="w-full bg-white rounded-2xl p-8 border border-gray-100">
      {/* Step 1 - Get Extension */}
      <div className="flex items-start gap-6 mb-8">
        {/* LingQ Icon */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-[#4A90E2] to-[#42A564] rounded-2xl flex items-center justify-center">
            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.7132 0.0703125L14.7159 0.0704404C16.2865 0.144891 17.7683 0.82123 18.8535 1.95915C19.9435 3.10202 20.5442 4.86845 20.5442 6.74562C20.5442 8.72066 19.943 10.3897 18.8535 11.5321C17.7934 12.6437 16.3548 13.3149 14.8245 13.4147V23.1271L14.8245 23.1283C14.8223 23.2363 14.7988 23.3432 14.7553 23.4424C14.7118 23.5411 14.6492 23.631 14.571 23.7059C14.4928 23.781 14.4006 23.8397 14.2996 23.8789C14.1987 23.9182 14.0911 23.9373 13.9829 23.9348C13.8692 23.9326 13.7571 23.9066 13.6542 23.8582C13.552 23.81 13.4607 23.741 13.3868 23.6552L2.60698 12.1206C1.50291 11.0331 0.913753 9.87989 0.596504 8.33181C0.457031 7.65122 0.457031 6.93067 0.457031 6.22683C0.596504 4.58466 1.06183 3.13807 2.14314 1.99369C3.22445 0.84928 4.70219 0.161315 6.27401 0.0705024L6.27729 0.0703125H14.7132ZM14.4953 10.5941C15.3109 10.5386 16.0744 10.1729 16.6289 9.57188C17.1764 8.97837 17.4762 7.92761 17.4762 6.79362C17.4762 5.66338 17.1325 4.62132 16.5685 4.04255C15.9974 3.45666 15.2236 3.11189 14.4061 3.07914H6.49746C5.69475 3.16303 4.97947 3.45418 4.4241 4.05249C3.83413 4.68807 3.52295 5.64786 3.52295 6.82865C3.52295 8.00944 3.76628 9.17491 5.21755 10.6262L5.3075 10.7201L11.9679 17.8227V12.0974L11.9679 12.0968C11.9722 11.6996 12.1319 11.3199 12.4127 11.039C12.6936 10.7581 13.0733 10.5985 13.4705 10.5942L13.4711 10.5941H14.4953Z" fill="white"/>
            </svg>
          </div>
          {!extensionInstalled && <div className="w-0.5 h-12 bg-gray-200 ml-8 mt-4"></div>}
        </div>

        {/* Step 1 Content */}
        <div className="flex-1">
          <div className="mb-2">
            <span className="text-sm text-gray-500">Step 1</span>
            <h3 className="text-xl font-semibold text-black">Get the LingQ Extension.</h3>
          </div>

          {extensionInstalled ? (
            // Extension detected state
            <div className="flex items-center gap-2 text-[#42A564]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-medium">Extension detected & ready to go!</span>
            </div>
          ) : (
            // Install extension state
            <>
              <p className="text-gray-600 mb-4">
                Import content directly from your favorite platforms in 1-click.
              </p>
              <Button
                onClick={handleInstallExtension}
                className="flex items-center gap-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-6 py-3 rounded-xl font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 15V19A2 2 0 0119 21H5A2 2 0 013 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Install Extension
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Step 2 - Explore Content & Import */}
      <div className="flex items-start gap-6">
        {/* Platform Icon */}
        <div className="flex-shrink-0">
          <div 
            className={`w-16 h-16 rounded-2xl bg-cover bg-center bg-no-repeat ${
              extensionInstalled ? '' : 'opacity-50'
            }`}
            style={{ backgroundImage: config.iconImage }}
          />
        </div>

        {/* Step 2 Content */}
        <div className="flex-1">
          <div className="mb-2">
            <span className={`text-sm ${extensionInstalled ? 'text-gray-500' : 'text-gray-400'}`}>Step 2</span>
            <h3 className={`text-xl font-semibold ${extensionInstalled ? 'text-black' : 'text-gray-400'}`}>Explore Content & Import</h3>
          </div>
          <p className={`mb-6 ${extensionInstalled ? 'text-gray-600' : 'text-gray-400'}`}>
            {config.step2Text}
          </p>
          
          {extensionInstalled && (
            <div className="flex flex-wrap gap-4">
              {/* Explore LingQ Button (for Netflix, Prime Video, YouTube) */}
              {config.hasExploreLingQ && (
                <Button
                  onClick={() => {
                    window.open('https://www.lingq.com/en/learn/fr/web/library/search?provider=5874', '_blank');
                    onExploreLingQ?.();
                  }}
                  className="flex items-center gap-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white px-6 py-3 rounded-lg font-medium text-sm flex-shrink-0"
                >
                  Explore Lessons on LingQ
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              )}
              
              {/* Go to Platform Button */}
              <Button
                onClick={() => {
                  window.open(config.url, '_blank');
                  onGoToPlatform?.();
                }}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium text-sm bg-white flex-shrink-0"
              >
                <div 
                  className="w-5 h-5 rounded bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: config.iconImage }}
                />
                {config.buttonText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};