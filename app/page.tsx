'use client';

import React from 'react';
import Header from '@/components/Header';
import DiffResult from '@/components/DiffResult';
import TextInputWithCounter from '@/components/TextInputWithCounter';
import ActionButtons from '@/components/ActionButtons';
import Footer from '@/components/Footer';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useTextComparison } from '@/hooks/useTextComparison';

export default function HomePage() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const {
    textA,
    textB,
    diffs,
    setTextA,
    setTextB,
    compareTexts,
    clearAll,
    exportToHTML
  } = useTextComparison();

  return (
    <div className="min-h-screen flex flex-col bg-surface transition-colors duration-300">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInputWithCounter
            id="textA"
            label="Text A"
            value={textA}
            onChange={setTextA}
            placeholder="Enter text A here..."
          />
          <TextInputWithCounter
            id="textB"
            label="Text B"
            value={textB}
            onChange={setTextB}
            placeholder="Enter text B here..."
          />
        </div>

        <ActionButtons
          onCompare={compareTexts}
          onClear={clearAll}
          onExport={exportToHTML}
          isCompareDisabled={!textA && !textB}
          isClearDisabled={!textA && !textB && !diffs}
          isExportDisabled={!diffs || diffs.length === 0}
        />

        {diffs !== null && <DiffResult diffs={diffs} />}
      </main>

      <Footer />
    </div>
  );
}