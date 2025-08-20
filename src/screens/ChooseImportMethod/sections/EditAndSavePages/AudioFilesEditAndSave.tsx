import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface AudioFilesEditAndSaveProps {
  onGenerateLesson?: () => void;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
}

export const AudioFilesEditAndSave = ({ 
  onGenerateLesson, 
  isLoading = false, 
  loadingType = null 
}: AudioFilesEditAndSaveProps): JSX.Element => {
  const [language, setLanguage] = useState('French');
  const [course, setCourse] = useState('Quick Imports');
  const [level, setLevel] = useState('');
  const [title, setTitle] = useState('14-Juillet : les images du défilé militaire');
  const [description, setDescription] = useState('audio-example.mp3');
  const [tags, setTags] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [description]);

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
                    src="/flag-france-1790-1794.png" 
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
          <div className="mb-8">
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