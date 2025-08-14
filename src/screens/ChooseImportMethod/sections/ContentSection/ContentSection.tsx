import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Button } from "../../../../components/ui/button";

const doItYourselfOptions = [
  {
    icon: "/icon-2.svg",
    title: "Type or Paste",
  },
  {
    icon: "/icon-3.svg",
    title: "Web Links",
  },
  {
    icon: "/icon.svg",
    title: "Audio Files",
  },
  {
    icon: "/icon-1.svg",
    title: "Documents",
  },
];

const streamingPlatforms = [
  {
    image: "..//image.png",
    title: "Spotify",
  },
  {
    image: "..//image-1.png",
    title: "Netflix",
  },
  {
    image: "..//image-2.png",
    title: "Prime Video",
  },
  {
    image: "..//image-3.png",
    title: "YouTube",
  },
];

const socialPlatforms = [
  {
    image: "..//image-4.png",
    title: "Instagram",
  },
  {
    image: "..//image-5.png",
    title: "Tik Tok",
  },
];

interface ContentSectionProps {
  onTextChange?: (hasText: boolean) => void;
  onFileUpload?: (hasFile: boolean) => void;
  onEditDetails?: () => void;
  onGenerateLesson?: () => void;
  hasText?: boolean;
  hasFile?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const ContentSection = ({ 
  onTextChange, 
  onFileUpload, 
  onEditDetails, 
  onGenerateLesson, 
  hasText = false, 
  hasFile = false, 
  isLoading = false, 
  loadingType = null 
}: ContentSectionProps): JSX.Element => {
  const [activeCards, setActiveCards] = useState<Set<string>>(new Set());
  const [showTypeOrPasteInput, setShowTypeOrPasteInput] = useState(false);
  const [showWebLinksInput, setShowWebLinksInput] = useState(false);
  const [showAudioFilesInput, setShowAudioFilesInput] = useState(false);
  const [showDocumentsInput, setShowDocumentsInput] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [urlContent, setUrlContent] = useState('');
  const [uploadedFile, setUploadedFile] = useState<{name: string, type: 'audio' | 'document', size: string, time: string} | null>(null);
  const textInputRef = useRef<HTMLDivElement>(null);

  const toggleCard = (cardId: string) => {
    setActiveCards(prev => {
      const newSet = new Set();
      if (!prev.has(cardId)) {
        newSet.add(cardId);
      }
      return newSet;
    });

    // Reset all input states first
    setShowTypeOrPasteInput(false);
    setShowWebLinksInput(false);
    setShowAudioFilesInput(false);
    setShowDocumentsInput(false);
    
    // Reset file upload state when switching tabs
    setUploadedFile(null);
    onFileUpload?.(false);
    
    // Reset text content when switching tabs
    setTextContent('');
    setUrlContent('');
    onTextChange?.(false);

    // Show the appropriate input based on selected card
    if (!activeCards.has(cardId)) {
      if (cardId === 'diy-0') { // Type or Paste
        setShowTypeOrPasteInput(true);
      } else if (cardId === 'diy-1') { // Web Links
        setShowWebLinksInput(true);
      } else if (cardId === 'diy-2') { // Audio Files
        setShowAudioFilesInput(true);
      } else if (cardId === 'diy-3') { // Documents
        setShowDocumentsInput(true);
      }
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextContent(value);
    onTextChange?.(value.trim().length > 0);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrlContent(value);
    onTextChange?.(value.trim().length > 0);
  };

  const handleFileSelect = (type: 'audio' | 'document') => {
    // Simulate file selection - in real app this would open file picker
    const fileName = type === 'audio' ? 'audio-example.mp3' : 'document-example.pdf';
    const fileSize = type === 'audio' ? '15.2 MB' : '2.8 MB';
    const uploadTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setUploadedFile({ name: fileName, type, size: fileSize, time: uploadTime });
    onFileUpload?.(true);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    onFileUpload?.(false);
  };

  const handleReplaceFile = (type: 'audio' | 'document') => {
    handleFileSelect(type); // Simulate selecting a new file
  };

  useEffect(() => {
    if ((showTypeOrPasteInput || showWebLinksInput || showAudioFilesInput || showDocumentsInput) && textInputRef.current) {
      setTimeout(() => {
        const element = textInputRef.current;
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          const windowHeight = window.innerHeight;
          const stickyHeaderHeight = 80;
          
          // Calculate to center the element in the viewport
          const viewportCenter = windowHeight / 2;
          const scrollTarget = elementTop - viewportCenter + (elementHeight / 2);
          
          window.scrollTo({
            top: Math.max(0, scrollTarget),
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [showTypeOrPasteInput, showWebLinksInput, showAudioFilesInput, showDocumentsInput]);

  return (
    <section className="flex flex-col items-center gap-10 p-8 w-full">
      <div className="flex flex-col max-w-[1200px] items-center gap-4 w-full">
        <h1 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[40px] text-center leading-[48px] text-black">
          Real progress starts with <span className="text-[#2e75cd]">real</span>{" "}
          <span className="text-[#2e75cd]">content.</span>
        </h1>

        <p className="font-text-2xl-regular font-[number:var(--text-2xl-regular-font-weight)] text-black text-[length:var(--text-2xl-regular-font-size)] text-center tracking-[var(--text-2xl-regular-letter-spacing)] leading-[var(--text-2xl-regular-line-height)] [font-style:var(--text-2xl-regular-font-style)]">
          Create your own lessons from stuff you love.
        </p>
      </div>

      <div className="flex items-start justify-center gap-4 p-8 w-full max-w-[1200px] mx-auto rounded-xl bg-[linear-gradient(0deg,rgba(140,141,142,0.13)_0%,rgba(241,243,244,0.25)_81%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(90deg,rgba(66,165,100,1)_0%,rgba(46,117,205,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative">
        <div className="flex flex-col items-center gap-10 px-4 py-8 flex-1 min-w-0 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Do it Yourself
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Build a lesson with just a link, file, or copy &amp; pasted text.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[24px_24px] w-full">
            {doItYourselfOptions.map((option, index) => {
              const cardId = `diy-${index}`;
              const isActive = activeCards.has(cardId);
              return (
                <Card
                  key={index}
                  className={`group w-[200px] h-16 border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#2e75cd] border-[#2e75cd]' 
                      : 'bg-white border-[#d1d6d9] hover:bg-[#c6e1ff] hover:border-[#c6e1ff]'
                  }`}
                  onClick={() => toggleCard(cardId)}
                >
                  <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                    <img
                      className={`w-[30px] h-[30px] transition-all ${
                        isActive 
                          ? 'brightness-0 invert' 
                          : ''
                      }`}
                      alt="Icon"
                      src={option.icon}
                      style={{
                        filter: isActive ? 'brightness(0) invert(1)' : undefined
                      }}
                    />
                    <span className={`font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)] transition-colors ${
                      isActive ? 'text-white' : 'text-black group-hover:text-black'
                    }`}>
                      {option.title}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex flex-col items-center gap-10 px-4 py-8 flex-[1.5] min-w-0 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Streaming Platforms
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Choose a platform below to turn your favorite song, podcast, video
              or TV series into a lesson.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 w-full max-w-[500px] mx-auto justify-items-center">
            {streamingPlatforms.map((platform, index) => {
              const cardId = `streaming-${index}`;
              const isActive = activeCards.has(cardId);
              return (
                <Card
                  key={index}
                  className={`group w-[200px] h-16 border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#2e75cd] border-[#2e75cd]' 
                      : 'bg-white border-[#d1d6d9] hover:bg-[#c6e1ff] hover:border-[#c6e1ff]'
                  }`}
                  onClick={() => toggleCard(cardId)}
                >
                  <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                    <div
                      className="w-10 h-10 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${platform.image})` }}
                    />
                    <span className={`font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)] transition-colors ${
                      isActive ? 'text-white' : 'text-black group-hover:text-black'
                    }`}>
                      {platform.title}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto" />

        <div className="flex flex-col items-center gap-10 px-4 py-8 flex-1 min-w-0 rounded-lg">
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] text-center tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)]">
              Socials
            </h2>

            <p className="font-text-m-regular font-[number:var(--text-m-regular-font-weight)] text-[#49525b] text-[length:var(--text-m-regular-font-size)] text-center tracking-[var(--text-m-regular-letter-spacing)] leading-[var(--text-m-regular-line-height)] [font-style:var(--text-m-regular-font-style)]">
              Create lessons from Reels and Tik Toks to get more out of
              scrolling.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[24px_24px] w-full">
            {socialPlatforms.map((platform, index) => {
              const cardId = `social-${index}`;
              const isActive = activeCards.has(cardId);
              return (
                <Card
                  key={index}
                  className={`group w-[200px] h-16 border cursor-pointer transition-all ${
                    isActive 
                      ? 'bg-[#2e75cd] border-[#2e75cd]' 
                      : 'bg-white border-[#d1d6d9] hover:bg-[#c6e1ff] hover:border-[#c6e1ff]'
                  }`}
                  onClick={() => toggleCard(cardId)}
                >
                  <CardContent className="flex items-center gap-2.5 px-4 py-3 h-full">
                    <div
                      className="w-10 h-10 rounded-lg bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${platform.image})` }}
                    />
                    <span className={`font-text-m-bold font-[number:var(--text-m-bold-font-weight)] text-[length:var(--text-m-bold-font-size)] tracking-[var(--text-m-bold-letter-spacing)] leading-[var(--text-m-bold-line-height)] [font-style:var(--text-m-bold-font-style)] transition-colors ${
                      isActive ? 'text-white' : 'text-black group-hover:text-black'
                    }`}>
                      {platform.title}
                    </span>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {showTypeOrPasteInput && (
        <div ref={textInputRef} className="w-full max-w-[1200px] mt-8">
          <div className="w-full">
            <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4">
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
      )}

      {showWebLinksInput && (
        <div ref={textInputRef} className="w-full max-w-[1200px] mt-8">
          <div className="w-full">
            <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4">
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
            <p className="text-gray-600 text-sm mt-2">
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
      )}

      {showAudioFilesInput && (
        <div ref={textInputRef} className="w-full max-w-[1200px] mt-8">
          <div className="w-full">
            <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4">
              Upload an Audio File
            </h3>
{uploadedFile?.type === 'audio' ? (
              <div className="w-full">
                <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                        <p className="text-sm text-gray-500">{uploadedFile.size} • Uploaded at {uploadedFile.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleReplaceFile('audio')}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                        title="Replace file"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <button 
                        onClick={handleDeleteFile}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100"
                        title="Delete file"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center bg-blue-50">
                <div className="flex flex-col items-center gap-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-600">
                    Drag and drop your file here or <button onClick={() => handleFileSelect('audio')} className="text-blue-500 underline">Select a File</button>
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Audio files must be less than 200MB in size</p>
                    <p>Supported formats: .mp3, .m4a, .wav</p>
                  </div>
                </div>
              </div>
            )}
            
            {hasFile && uploadedFile?.type === 'audio' && (
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
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
      )}

      {showDocumentsInput && (
        <div ref={textInputRef} className="w-full max-w-[1200px] mt-8">
          <div className="w-full">
            <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4">
              Upload a Text File
            </h3>
{uploadedFile?.type === 'document' ? (
              <div className="w-full">
                <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                        <p className="text-sm text-gray-500">{uploadedFile.size} • Uploaded at {uploadedFile.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleReplaceFile('document')}
                        className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                        title="Replace file"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                      <button 
                        onClick={handleDeleteFile}
                        className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-gray-100"
                        title="Delete file"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-12 text-center bg-blue-50">
                <div className="flex flex-col items-center gap-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-600">
                    Drag and drop your file here or <button onClick={() => handleFileSelect('document')} className="text-blue-500 underline">Select a File</button>
                  </p>
                  <p className="text-sm text-gray-500">
                    Supported Formats: .txt, .docx, .pdf, .epub, .mobi, .srt, .vtt, .ass, .xml, .ttml
                  </p>
                </div>
              </div>
            )}
            
            {hasFile && uploadedFile?.type === 'document' && (
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
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
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
      )}
      
      {/* Spacer div to provide bottom space for centering - only when input fields are shown */}
      {(showTypeOrPasteInput || showWebLinksInput || showAudioFilesInput || showDocumentsInput) && (
        <div className="h-[100px] w-full"></div>
      )}
    </section>
  );
};
