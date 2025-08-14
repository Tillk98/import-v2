import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface LessonPreviewProps {
  onGenerateLesson?: () => void;
}

export const LessonPreview = ({ onGenerateLesson }: LessonPreviewProps): JSX.Element => {
  const [title, setTitle] = useState("14-Juillet : les images du défilé militaire");
  const [description, setDescription] = useState("France celebrated Bastille Day 2025 with its traditional military parade on the Champs-Élysées featuring 7,000 participants including troops and armored vehicles.");
  const [originalUrl, setOriginalUrl] = useState("https://www.lemonde.fr/politique/video/2025/07/14/14-juillet-les-images-du-defile-militaire_6621165_823448.h...");

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 w-full max-w-[1400px] mx-auto">
      {/* Left side - Lesson Preview Card */}
      <div className="flex-shrink-0">
        <Card className="w-[368px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="relative">
            {/* Video thumbnail with overlay */}
            <div className="relative h-[207px] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
                alt="Military parade"
                className="w-full h-full object-cover"
              />
              
              {/* Blue edit icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>

              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>27 New Words</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>11 LingQs</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span>310 Known Words</span>
                </div>
              </div>

              {/* "Le moment de vérité" overlay */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-2 py-1 rounded text-white text-xs">
                Le moment de vérité
              </div>
            </div>

            {/* Card content */}
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 text-lg mb-3 line-clamp-2">
                14-Juillet : les images du dé...
              </h3>
              
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">65% new words</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                <span>Le Monde</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>09:33</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 space-y-6">
        {/* Title */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full p-4 border border-gray-300 rounded-lg text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Original URL */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Original URL
          </label>
          <input
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Course
          </label>
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-3 text-blue-500 border-blue-500 hover:bg-blue-50 rounded-full"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add / Create Course
          </Button>
        </div>

        {/* Add Files */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Add Files
          </label>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 flex flex-col items-center gap-3 px-6 py-8 text-gray-600 border-gray-300 hover:bg-gray-50 rounded-lg border-dashed"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 12.964a3 3 0 01-4.072 0l-3-3a3 3 0 014.072-4.072L15 8.364m0 0L18.364 5a3 3 0 014.072 4.072l-3.536 3.536m-9.192 9.192L5.636 17.636a3 3 0 010-4.272L9.364 9.636a3 3 0 014.272 0l3.536 3.536" />
              </svg>
              <span className="font-medium">Audio</span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex flex-col items-center gap-3 px-6 py-8 text-gray-600 border-gray-300 hover:bg-gray-50 rounded-lg border-dashed"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Video</span>
            </Button>
          </div>
        </div>

        {/* Sharing */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Sharing
          </label>
          <Button
            variant="outline"
            className="flex items-center justify-between w-fit px-4 py-3 text-gray-900 border-gray-300 hover:bg-gray-50 rounded-lg min-w-[200px]"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-medium">Private Lesson</span>
            </div>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};