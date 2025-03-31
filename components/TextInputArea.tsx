import React from 'react';

interface TextInputAreaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function TextInputArea({ 
  id, 
  label, 
  value, 
  onChange, 
  placeholder 
}: TextInputAreaProps) {
  return (
    <div className="space-y-2 p-4 border-1 border-gray-200 rounded-lg shadow-lg">
      <label htmlFor={id} className="block text-xl text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={9}
        className="w-full p-3 border border-color rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-foreground dark:text-gray-100 resize-y min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
      />
    </div>
  );
}