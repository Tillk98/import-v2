import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface WebLinksEditAndSaveProps {
  onGenerateLesson?: () => void;
  isLoading?: boolean;
  loadingType?: 'edit' | 'generate' | null;
  webUrl?: string;
}

export const WebLinksEditAndSave = ({ 
  onGenerateLesson, 
  isLoading = false, 
  loadingType = null,
  webUrl = ''
}: WebLinksEditAndSaveProps): JSX.Element => {
  const [title, setTitle] = useState('Easy French');
  const [course, setCourse] = useState('Default');
  const [tags, setTags] = useState('');
  const [level, setLevel] = useState('No Knowledge');

  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={3} 
          hasContent={true}
          isGeneratingLesson={false}
        />
        
        <div className="w-full">
          
          {/* Title Section */}
          <div className="mb-6">
            <div className="p-4 border border-gray-300 rounded-lg bg-white">
              <span className="text-gray-700 text-sm block mb-2">Title</span>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-black placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Course Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-900 font-medium">{course}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Tags Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-900 font-medium">{tags || 'Add Tags'}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Level Dropdown */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
              <span className="text-gray-900 font-medium">{level}</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
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
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </>
              ) : (
                'Review & Import'
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};