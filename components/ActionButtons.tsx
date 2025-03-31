import React from 'react';

interface ActionButtonsProps {
  onCompare: () => void;
  onClear: () => void;
  onExport: () => void;
  isCompareDisabled: boolean;
  isClearDisabled: boolean;
  isExportDisabled: boolean;
}

export default function ActionButtons({
  onCompare,
  onClear,
  onExport,
  isCompareDisabled,
  isClearDisabled,
  isExportDisabled
}: ActionButtonsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3 items-center">
      <button
        onClick={onCompare}
        disabled={isCompareDisabled}
        className="cursor-pointer px-5 py-2 btn-primary font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Compare Texts
      </button>
      <button
        onClick={onClear}
        disabled={isClearDisabled}
        className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Clear All
      </button>
      <button
        onClick={onExport}
        disabled={isExportDisabled}
        className="cursor-pointer px-4 py-2 bg-green-600 text-white font-medium rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Export to HTML
      </button>
    </div>
  );
}