import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface AudioFilesInputProps {
  onFileUpload?: (hasFile: boolean) => void;
  onGenerateLesson?: () => void;
  hasFile?: boolean;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const AudioFilesInput = ({ 
  onFileUpload, 
  onGenerateLesson, 
  hasFile = false, 
  isLoading = false, 
  loadingType = null 
}: AudioFilesInputProps): JSX.Element => {
  const [uploadedFile, setUploadedFile] = useState<{name: string, type: 'audio', size: string, time: string} | null>(null);

  const handleFileSelect = () => {
    // Simulate file selection - in real app this would open file picker
    const fileName = 'audio-example.mp3';
    const fileSize = '15.2 MB';
    const uploadTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setUploadedFile({ name: fileName, type: 'audio', size: fileSize, time: uploadTime });
    onFileUpload?.(true);
  };

  const handleDeleteFile = () => {
    setUploadedFile(null);
    onFileUpload?.(false);
  };

  const handleReplaceFile = () => {
    handleFileSelect(); // Simulate selecting a new file
  };

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      {/* Progress Indicator */}
      <div className="w-full bg-[#F1F3F4] pt-4">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={hasFile}
          isGeneratingLesson={false}
        />
      </div>

      <div className="w-full bg-white rounded-2xl p-8 border border-gray-100">
        
        <div className="w-full">
          <h3 className="font-text-2xl-bold font-[number:var(--text-2xl-bold-font-weight)] text-black text-[length:var(--text-2xl-bold-font-size)] tracking-[var(--text-2xl-bold-letter-spacing)] leading-[var(--text-2xl-bold-line-height)] [font-style:var(--text-2xl-bold-font-style)] mb-4 text-left">
            Upload an Audio File
          </h3>
          
          {uploadedFile ? (
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
                      onClick={handleReplaceFile}
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
                  Drag and drop your file here or <button onClick={handleFileSelect} className="text-blue-500 underline">Select a File</button>
                </p>
                <div className="text-sm text-gray-500">
                  <p>Audio files must be less than 200MB in size</p>
                  <p>Supported formats: .mp3, .m4a, .wav</p>
                </div>
              </div>
            </div>
          )}
          
          {hasFile && uploadedFile && (
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
                  'Review & Import'
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};