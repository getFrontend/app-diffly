'use client';

import Image from "next/image";
import { AiFillMoon } from "react-icons/ai";
import { PiSunLight } from "react-icons/pi";

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({ isDarkMode, onToggleDarkMode }: HeaderProps) {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 border-b border-color">
      <div className="flex flex-row items-center gap-2 max-sm:gap-0">
        <Image src="/logo-diffly-96.png" alt="Logo" width={32} height={32} />
        <h1 className="text-xl font-semibold text-foreground">
          Diffly{' '}
          <span className="max-sm:hidden"> - your simple Comparison Tool</span>
        </h1>
      </div>
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