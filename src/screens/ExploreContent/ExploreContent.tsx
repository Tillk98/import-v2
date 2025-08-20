import React, { useState } from "react";
import { NavigationSection } from "../ChooseImportMethod/sections/NavigationSection/NavigationSection";
import { LessonImportHeader } from "../ChooseImportMethod/sections/LessonImportHeader/LessonImportHeader";

interface ContentItem {
  id: string;
  title: string;
  thumbnail: string;
  provider: string;
  rating: number;
  difficulty: string;
  duration: string;
  likes: number;
  description?: string;
}

interface ExploreContentProps {
  onBack?: () => void;
}

const mockContent: ContentItem[] = [
  {
    id: "1",
    title: 'Learn French in 2022 🇫🇷 AT#8 "Faites la connaissance de mon ami Oliver" (en/fr/ru sub)',
    thumbnail: "/placeholder-thumbnail-1.jpg",
    provider: "YouTube",
    rating: 4.3,
    difficulty: "Beginner 1",
    duration: "03:00",
    likes: 8
  },
  {
    id: "2", 
    title: "Préposition À devant les Personnes",
    thumbnail: "/placeholder-thumbnail-2.jpg",
    provider: "Français avec Pierre",
    rating: 4.4,
    difficulty: "Beginner 2",
    duration: "06:34",
    likes: 1
  },
  {
    id: "3",
    title: "(#20) French the natural way - Story #20: Où sont les lunettes ? - YouTube",
    thumbnail: "/placeholder-thumbnail-3.jpg", 
    provider: "YouTube",
    rating: 3.7,
    difficulty: "Beginner 2",
    duration: "05:59",
    likes: 30
  },
  {
    id: "4",
    title: "Pronom EN en Français",
    thumbnail: "/placeholder-thumbnail-4.jpg",
    provider: "Français avec Pierre", 
    rating: 4.3,
    difficulty: "Beginner 2",
    duration: "06:17",
    likes: 0
  },
  {
    id: "5",
    title: "(#35) French the natural way - Story #34: Les longs cheveux - YouTube",
    thumbnail: "/placeholder-thumbnail-5.jpg",
    provider: "YouTube",
    rating: 3.8,
    difficulty: "Beginner 2", 
    duration: "12:28",
    likes: 27
  }
];

export const ExploreContent = ({ onBack }: ExploreContentProps): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Relevance");
  const [contentType, setContentType] = useState("Lessons");
  const [provider, setProvider] = useState("YouTube");
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Beginner 1"]);
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>(["Internal"]);
  const [selectedLengths, setSelectedLengths] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [selectedAccents, setSelectedAccents] = useState<string[]>(["France"]);

  const handleImport = (contentId: string) => {
    console.log("Importing content:", contentId);
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const toggleContentType = (type: string) => {
    setSelectedContentTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const toggleLength = (length: string) => {
    setSelectedLengths(prev =>
      prev.includes(length)
        ? prev.filter(l => l !== length)
        : [...prev, length]
    );
  };

  const toggleAccent = (accent: string) => {
    setSelectedAccents(prev =>
      prev.includes(accent)
        ? prev.filter(a => a !== accent)
        : [...prev, accent]
    );
  };

  return (
    <div className="flex flex-col relative bg-[#F1F3F4] min-h-screen">
      {/* Headers */}
      <div className="w-full sticky top-0 z-10 bg-white">
        <NavigationSection />
        <LessonImportHeader onBack={onBack} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Content Area */}
        <div className="flex-1 p-6">
          {/* Search Section */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900 mb-4">Search Results</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Library"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21L15 15M17 10A7 7 0 1 1 3 10A7 7 0 0 1 17 10Z" />
              </svg>
            </div>
          </div>

          {/* Content List */}
          <div className="space-y-4">
            {mockContent.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-32 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                      {item.id}
                    </div>
                  </div>

                  {/* Content Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    {/* Provider */}
                    {item.provider !== "YouTube" && (
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                        </svg>
                        <span className="text-sm text-gray-600">{item.provider}</span>
                        <button className="text-xs text-blue-600 hover:text-blue-800 ml-auto">
                          More from this source →
                        </button>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">A</span>
                        </div>
                        <span>{item.rating} ({Math.round(item.rating * 25)}%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-4 h-4 text-yellow-500">★</span>
                        <span>{item.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12L8 10L12 6L8 2L10 0L16 6L10 12Z" />
                        </svg>
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5C2 10.5 6.43686 18 12 18C17.5631 18 22 10.5 22 10.5C22 10.5 17.5631 3 12 3C6.43686 3 2 10.5 2 10.5Z" />
                        </svg>
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => handleImport(item.id)}
                      className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      Import
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2L15 7L10 12L5 7L10 2Z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6L15 11L10 16L5 11L10 6Z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 10C6 11.1046 5.10457 12 4 12C2.89543 12 2 11.1046 2 10C2 8.89543 2.89543 8 4 8C5.10457 8 6 8.89543 6 10ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10ZM16 12C17.1046 12 18 11.1046 18 10C18 8.89543 17.1046 8 16 8C14.8954 8 14 8.89543 14 10C14 11.1046 14.8954 12 16 12Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Filters */}
        <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
          {/* Sort By */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Relevance</option>
              <option>Newest</option>
              <option>Most Popular</option>
              <option>Rating</option>
            </select>
          </div>

          {/* Lessons / Courses */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">Lessons / Courses</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Lessons</option>
              <option>Courses</option>
              <option>Both</option>
            </select>
          </div>

          {/* Shared By / Provider Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">Shared By / Provider search</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>YouTube</option>
              <option>Spotify</option>
              <option>Netflix</option>
              <option>All Providers</option>
            </select>
          </div>

          {/* Level */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-3">Level</label>
            <div className="flex flex-wrap gap-2">
              {["Beginner 1", "Beginner 2", "Intermediate 1", "Intermediate 2", "Advanced 1", "Advanced 2"].map((level) => (
                <button
                  key={level}
                  onClick={() => toggleLevel(level)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedLevels.includes(level)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Content Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-3">Content Type</label>
            <div className="flex flex-wrap gap-2">
              {["Internal", "My Imports", "External"].map((type) => (
                <button
                  key={type}
                  onClick={() => toggleContentType(type)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedContentTypes.includes(type)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Lesson Length */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-3">Lesson Length</label>
            <div className="flex flex-wrap gap-2">
              {["Short", "Medium", "Long"].map((length) => (
                <button
                  key={length}
                  onClick={() => toggleLength(length)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedLengths.includes(length)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {length}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-2">Tags</label>
            <input
              type="text"
              placeholder="Enter Tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Accent */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-900 mb-3">Accent</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {["France", "Canada", "Belgium"].map((accent) => (
                <button
                  key={accent}
                  onClick={() => toggleAccent(accent)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedAccents.includes(accent)
                      ? "bg-gray-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {accent}
                </button>
              ))}
            </div>
            <button className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-300">
              Pending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};