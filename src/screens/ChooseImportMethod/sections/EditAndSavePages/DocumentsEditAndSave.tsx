import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface DocumentsEditAndSaveProps {
  onGenerateLesson?: () => void;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const DocumentsEditAndSave = ({ 
  onGenerateLesson, 
  isLoading = false, 
  loadingType = null 
}: DocumentsEditAndSaveProps): JSX.Element => {
  const [language, setLanguage] = useState('French');
  const [course, setCourse] = useState('Quick Imports');
  const [level, setLevel] = useState('');
  const [title, setTitle] = useState('14-Juillet : les images du défilé militaire');
  const [description, setDescription] = useState('document-example.pdf');
  const [tags, setTags] = useState('');
  const [uploadedAudioFile, setUploadedAudioFile] = useState<{name: string, type: 'audio', size: string, time: string} | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [description]);

  const handleAudioFileSelect = () => {
    const fileName = 'audio-example.mp3';
    const fileSize = '15.2 MB';
    const uploadTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setUploadedAudioFile({ name: fileName, type: 'audio', size: fileSize, time: uploadTime });
  };

  const handleDeleteAudioFile = () => {
    setUploadedAudioFile(null);
  };

  const handleReplaceAudioFile = () => {
    handleAudioFileSelect();
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={3} 
          hasContent={true}
          isGeneratingLesson={false}
        />
        
        <div className="w-full">
          
          {/* Title and Description Section */}
          <div className="mb-6">
            <div className="p-4 border border-gray-300 rounded-lg bg-white">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-black placeholder-gray-500 border-none outline-none bg-transparent mb-4"
              />
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              <textarea
                ref={textareaRef}
                placeholder="Description ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full text-black placeholder-gray-500 border-none outline-none bg-transparent resize-none overflow-hidden"
                style={{ height: 'auto', minHeight: '1.5rem' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
            </div>
          </div>

          {/* Language Dropdown */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700">Language</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <img 
                    src="/Flag_of_France_(1790–1794).svg.png" 
                    alt="French Flag" 
                    className="w-4 h-3 rounded-sm" 
                  />
                </div>
                <span className="text-gray-900 font-medium">{language} <span className="text-sm text-gray-500">(detected)</span></span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Course Dropdown */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-700">Course</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium">{course}</span>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Add Audio Section */}
          <div className="mb-8">
            <h4 className="text-lg font-medium text-black mb-2">
              Add Audio <span className="text-sm font-normal text-gray-500">(optional)</span>
            </h4>
            <p className="text-sm text-gray-600 mb-4" style={{marginTop: '8px'}}>Upload audio to sync with your text</p>
            
            {uploadedAudioFile ? (
              <div className="border-2 border-dashed border-green-300 rounded-lg p-6 bg-green-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{uploadedAudioFile.name}</p>
                      <p className="text-sm text-gray-500">{uploadedAudioFile.size} • Uploaded at {uploadedAudioFile.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={handleReplaceAudioFile}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                      title="Replace file"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleDeleteAudioFile}
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
            ) : (
              <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50">
                <div className="flex flex-col items-center gap-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-gray-600">
                    Drag and drop your file here or <button onClick={handleAudioFileSelect} className="text-blue-500 underline">Select a File</button>
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Audio files must be less than 200MB in size</p>
                    <p>Supported formats: .mp3, .m4a, .wav</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Lesson Button */}
          <div className="flex justify-center">
            <Button
              onClick={onGenerateLesson}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-2 bg-[#42a564] hover:bg-[#369554] text-white border-0 disabled:opacity-75"
            >
              {isLoading && loadingType === 'generate' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 818-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                'Save Lesson'
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};