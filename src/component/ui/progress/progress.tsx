import React from "react";

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className = "" }) => {
  return (
    <div className={`w-full h-4 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-green-400 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
