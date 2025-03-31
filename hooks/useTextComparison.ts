import { useState } from 'react';
import { diff_match_patch, Diff } from 'diff-match-patch';

export function useTextComparison() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [diffs, setDiffs] = useState<Diff[] | null>(null);

  const compareTexts = () => {
    const dmp = new diff_match_patch();
    const calculatedDiffs = dmp.diff_main(textA, textB);
    dmp.diff_cleanupSemantic(calculatedDiffs); // Makes diffs more human-readable
    setDiffs(calculatedDiffs);
  };

  const clearAll = () => {
    setTextA('');
    setTextB('');
    setDiffs(null);
  };

  const exportToHTML = () => {
    if (!diffs) return;

    const getDiffStyle = (op: number): string => {
      switch (op) {
        case 1: return 'background-color: rgba(16, 185, 129, 0.2); color: #10b981;';
        case -1: return 'background-color: rgba(239, 68, 68, 0.2); color: #ef4444; text-decoration: line-through;'; 
        default: return 'color: #333;'; // Default text
      }
    };

    const diffHtml = diffs
      .map(([op, text]) => {
        // Basic HTML encoding
        const escapedText = text
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;')
          .replace(/\n/g, '<br>'); // Preserve line breaks

        return `<span style="${getDiffStyle(op)}">${escapedText}</span>`;
      })
      .join('');

    // Add dark mode support to the exported HTML
    // Update the HTML content to use light mode by default
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en" class="light">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Diffly Comparison Result</title>
        <style>
          :root {
            --background: #ffffff;
            --foreground: #171717;
            --surface: #f8f9fa;
            --success: #10b981;
            --danger: #ef4444;
          }
          
          @media (prefers-color-scheme: dark) {
            :root.dark {
              --background: #0f172a;
              --foreground: #f1f5f9;
              --surface: #1e293b;
              --success: #34d399;
              --danger: #f87171;
            }
          }
          
          body { 
            font-family: sans-serif; 
            line-height: 1.6; 
            padding: 20px; 
            background-color: var(--background);
            color: var(--foreground);
          }
          
          pre { 
            white-space: pre-wrap; 
            word-wrap: break-word; 
            font-family: monospace; 
            font-size: 14px; 
            border: 1px solid #ccc; 
            padding: 15px; 
            border-radius: 5px; 
            background-color: var(--surface);
          }
          
          .diff-insert {
            background-color: rgba(16, 185, 129, 0.2);
            color: var(--success);
          }
          
          .diff-delete {
            background-color: rgba(239, 68, 68, 0.2);
            color: var(--danger);
            text-decoration: line-through;
          }
        </style>
      </head>
      <body>
        <h1>Text Comparison Result</h1>
        <h2>Text A</h2>
        <pre>${textA.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <h2>Text B</h2>
        <pre>${textB.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
        <h2>Differences</h2>
        <pre>${diffHtml}</pre>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'diffly_comparison.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return {
    textA,
    textB,
    diffs,
    setTextA,
    setTextB,
    compareTexts,
    clearAll,
    exportToHTML
  };
}