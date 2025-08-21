import React, { useState } from "react";
import { ChooseImportMethod } from "../ChooseImportMethod/ChooseImportMethod";
import { NavigationSection } from "../ChooseImportMethod/sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "../ChooseImportMethod/sections/LessonImportHeader/LessonImportHeader";
import { ProgressIndicator } from "../../components/ProgressIndicator/ProgressIndicator";

export const LandingPage = (): JSX.Element => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleGetStarted = (method: string) => {
    setSelectedMethod(method);
  };

  const handleBackToLanding = () => {
    setSelectedMethod(null);
  };

  if (selectedMethod) {
    return <ChooseImportMethod initialMethod={selectedMethod} onBack={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-[#F1F3F4]">
      {/* Headers */}
      <div className="w-full sticky top-0 z-10 bg-white">
        <NavigationSection />
        <LessonImportHeader currentStep={1} />
      </div>

      {/* Progress Indicator */}
      <div className="w-full bg-[#F1F3F4] pt-4">
        <ProgressIndicator currentStep={1} hasContent={false} isGeneratingLesson={false} />
      </div>

      {/* Main Heading */}
      <div className="text-center py-8 bg-[#F1F3F4]">
        <h1 className="text-[32px] font-semibold text-center leading-[40px] text-black mb-4">
          Real progress starts with <span className="text-[#3b82f6]">real content.</span>
        </h1>
        <p className="text-lg text-gray-600">
          Create your own lessons from stuff you love.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">

        {/* Content Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="p-0.5 rounded-2xl" style={{background: 'linear-gradient(90deg, #2E75CD, #42A564)'}}>
            <div className="bg-white rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
              
              {/* Do it Yourself */}
              <div className="flex-1 space-y-6 lg:px-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do it Yourself</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Build a lesson with just a link, file, or copy & pasted text.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleGetStarted('type-or-paste')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M5 8.75V5H25V8.75M11.25 25H18.75M15 5V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Type or Paste</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('web-links')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M12.4998 16.249C13.0366 16.9666 13.7215 17.5605 14.508 17.9902C15.2945 18.4199 16.1642 18.6754 17.0581 18.7394C17.9521 18.8034 18.8493 18.6744 19.689 18.3612C20.5287 18.048 21.2912 17.5578 21.9248 16.924L25.6748 13.174C26.8133 11.9952 27.4433 10.4165 27.429 8.77772C27.4148 7.13899 26.7575 5.57141 25.5987 4.41261C24.4399 3.25381 22.8723 2.59651 21.2336 2.58227C19.5948 2.56803 18.0161 3.19799 16.8373 4.33648L14.6873 6.47398M17.4998 13.749C16.9629 13.0313 16.2781 12.4375 15.4916 12.0078C14.7051 11.5781 13.8354 11.3226 12.9414 11.2586C12.0475 11.1946 11.1503 11.3235 10.3106 11.6368C9.47088 11.95 8.70837 12.4402 8.07476 13.074L4.32476 16.824C3.18627 18.0028 2.55631 19.5815 2.57055 21.2203C2.58479 22.859 3.24209 24.4266 4.4009 25.5854C5.5597 26.7442 7.12727 27.4015 8.766 27.4157C10.4047 27.43 11.9835 26.8 13.1623 25.6615L15.2998 23.524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Web Links</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('audio-files')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M20 11.2485C20.8114 12.3304 21.25 13.6462 21.25 14.9985C21.25 16.3508 20.8114 17.6667 20 18.7485M24.205 22.9535C25.2497 21.9089 26.0784 20.6687 26.6437 19.3037C27.2091 17.9388 27.5001 16.4759 27.5001 14.9985C27.5001 13.5211 27.2091 12.0582 26.6437 10.6933C26.0784 9.32838 25.2497 8.08818 24.205 7.04352M13.75 5.87607C13.7497 5.70196 13.6979 5.53183 13.6011 5.38714C13.5042 5.24245 13.3667 5.1297 13.2058 5.0631C13.0449 4.99651 12.868 4.97906 12.6972 5.01296C12.5264 5.04686 12.3695 5.13058 12.2462 5.25357L8.01625 9.48232C7.85301 9.64654 7.65879 9.77673 7.44487 9.86535C7.23094 9.95397 7.00155 9.99925 6.77 9.99857H3.75C3.41848 9.99857 3.10054 10.1303 2.86612 10.3647C2.6317 10.5991 2.5 10.917 2.5 11.2486V18.7486C2.5 19.0801 2.6317 19.398 2.86612 19.6325C3.10054 19.8669 3.41848 19.9986 3.75 19.9986H6.77C7.00155 19.9979 7.23094 20.0432 7.44487 20.1318C7.65879 20.2204 7.85301 20.3506 8.01625 20.5148L12.245 24.7448C12.3682 24.8683 12.5254 24.9524 12.6965 24.9865C12.8676 25.0207 13.045 25.0032 13.2062 24.9364C13.3673 24.8696 13.5051 24.7565 13.6019 24.6113C13.6987 24.4662 13.7502 24.2955 13.75 24.1211V5.87607Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Audio</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('documents')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M17.5 2.5V7.5C17.5 8.16304 17.7634 8.79893 18.2322 9.26777C18.7011 9.73661 19.337 10 20 10H25M12.5 11.25H10M20 16.25H10M20 21.25H10M18.75 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V8.75L18.75 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-medium">Files & E-books</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('scan')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M3 3H9V5H5V9H3V3Z" fill="currentColor"/>
                      <path d="M21 3H27V9H25V5H21V3Z" fill="currentColor"/>
                      <path d="M3 21V27H9V25H5V21H3Z" fill="currentColor"/>
                      <path d="M25 21V25H21V27H27V21H25Z" fill="currentColor"/>
                      <rect x="8" y="11" width="14" height="2" rx="1" fill="currentColor"/>
                      <rect x="10" y="15" width="10" height="2" rx="1" fill="currentColor"/>
                      <rect x="8" y="19" width="14" height="2" rx="1" fill="currentColor"/>
                    </svg>
                    <span className="font-medium">Scan</span>
                  </button>
                </div>
              </div>

              {/* First Separator - Vertical on desktop, Horizontal on mobile */}
              <div className="flex-shrink-0">
                <div className="hidden lg:block w-px bg-gray-200 h-full mx-8"></div>
                <div className="lg:hidden h-px bg-gray-200 w-full"></div>
              </div>

              {/* Streaming Platforms */}
              <div className="flex-1 space-y-6 lg:px-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Streaming Platforms</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Choose a platform below to turn your favorite song, podcast, video or TV series into a lesson.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleGetStarted('spotify')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image.png)' }}
                    />
                    <span className="font-medium">Spotify</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('netflix')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image-1.png)' }}
                    />
                    <span className="font-medium">Netflix</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('prime-video')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image-2.png)' }}
                    />
                    <span className="font-medium">Prime Video</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('youtube')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image-3.png)' }}
                    />
                    <span className="font-medium">YouTube</span>
                  </button>
                </div>
              </div>

              {/* Second Separator - Vertical on desktop, Horizontal on mobile */}
              <div className="flex-shrink-0">
                <div className="hidden lg:block w-px bg-gray-200 h-full mx-8"></div>
                <div className="lg:hidden h-px bg-gray-200 w-full"></div>
              </div>

              {/* Socials */}
              <div className="flex-1 space-y-6 lg:px-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Socials</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Create lessons from Reels and Tik Toks to get more out of scrolling.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={() => handleGetStarted('instagram')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image-4.png)' }}
                    />
                    <span className="font-medium">Instagram</span>
                  </button>
                  
                  <button 
                    onClick={() => handleGetStarted('tiktok')}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left hover:bg-[#E9F7FC] hover:border-[#2E75CD] transition-colors flex items-center"
                  >
                    <div 
                      className="w-8 h-8 mr-3 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: 'url(../image-5.png)' }}
                    />
                    <span className="font-medium">Tik Tok</span>
                  </button>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};