import React from "react";
import { ProgressIndicator } from "../../../../components/ProgressIndicator/ProgressIndicator";

interface ScanInputProps {
  onBack?: () => void;
}

export const ScanInput = ({ onBack }: ScanInputProps): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center gap-8 w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <ProgressIndicator 
          currentStep={2} 
          hasContent={false}
          isGeneratingLesson={false}
        />
        
        <div className="w-full">
          {/* Full-width responsive image */}
          <div className="w-full">
            <img 
              src="/Scan Page Image.png" 
              alt="Download the LingQ mobile app - Use scan on our app to point, shoot & transform text around you into lesson content"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};