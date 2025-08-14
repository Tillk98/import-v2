import React from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft } from "lucide-react";

export const LessonImportHeader = (): JSX.Element => {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="flex items-center px-8 py-4">
        <Button
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 border-gray-300 hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </Button>
      </div>
    </div>
  );
};