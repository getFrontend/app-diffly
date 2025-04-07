import React from 'react';

interface TextInputWithCounterProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
}

export default function TextInputWithCounter({ 
  id, 
  label, 
  value, 
  onChange, 
  placeholder = '',
  maxLength
}: TextInputWithCounterProps) {
  const characterCount = value.length;
  
  return (
    <div className="space-y-2 p-4 border-1 border-gray-200 rounded-lg shadow-lg">
      <label htmlFor={id} className="block text-xl text-foreground">
        {label}
      </label>
      <div className="relative">
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={9}
          className="w-full p-3 border border-color rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-foreground dark:text-gray-100 resize-y min-h-[150px] md:min-h-[200px] lg:min-h-[250px]"
          aria-describedby={`${id}-character-count`}
        />
        <div 
          id={`${id}-character-count`}
          className="absolute bottom-2 right-6 text-xs text-gray-600 bg-white dark:bg-gray-800 px-2 py-1 rounded-md opacity-90"
        >
          {characterCount} {characterCount === 1 ? 'character' : 'characters'}
          {maxLength && ` / ${maxLength}`}
        </div>
      </div>
    </div>
  );
}