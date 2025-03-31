'use client';

import { AiFillMoon } from "react-icons/ai";
import { PiSunLight } from "react-icons/pi";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 border-b border-color">
      <h1 className="text-xl font-semibold text-foreground">
        Diffly - your simple Comparison Tool
      </h1>
      <button
        onClick={onToggleDarkMode}
        className="p-2 rounded-full text-muted hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? (
          <PiSunLight className="h-6 w-6" />
        ) : (
          <AiFillMoon className="h-6 w-6" />
        )}
      </button>
    </header>
  );
}