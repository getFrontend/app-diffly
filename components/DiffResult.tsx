import React from 'react';
import { Diff } from 'diff-match-patch';

interface DiffResultProps {
  diffs: Diff[];
}

// Define constants for diff operations for better readability
const DIFF_DELETE = -1;
const DIFF_INSERT = 1;
const DIFF_EQUAL = 0;

export default function DiffResult({ diffs }: DiffResultProps) {
  if (!diffs || diffs.length === 0) {
    return null; // Don't render anything if there are no diffs
  }

  const getDiffClass = (op: number): string => {
    switch (op) {
      case DIFF_INSERT:
        return 'diff-insert animate-fade-in';
      case DIFF_DELETE:
        return 'diff-delete animate-fade-in';
      case DIFF_EQUAL:
      default:
        return 'text-foreground';
    }
  };

  // Helper to render whitespace characters visibly for clarity
  const renderWhitespace = (text: string): React.ReactNode => {
      // Replace spaces with visible characters (optional, but can be helpful)
      // text = text.replace(/ /g, '·');
      // Replace newlines with <br> or a visible symbol + <br>
      return text.split('\n').map((line, index, arr) => (
        <React.Fragment key={index}>
          {line}
          {index < arr.length - 1 && <br />}
        </React.Fragment>
      ));
  };

  return (
    <div className="mt-6 p-4 border border-color rounded-md bg-surface shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-foreground">
        Comparison Result
      </h3>
      <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed font-mono">
        {diffs.map(([op, text], index) => (
          <span key={index} className={`${getDiffClass(op)} transition-colors duration-300`}>
             {renderWhitespace(text)}
          </span>
        ))}
      </pre>
    </div>
  );
}