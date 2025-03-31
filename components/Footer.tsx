import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto flex justify-between items-center p-4 text-xs text-muted">
       <p>
        © {currentYear} - Diffly App by Sergey
      </p>
      

      <Link 
          href="https://github.com/getFrontend" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-500"
          aria-label="GitHub Repository"
        >
          <BsGithub size={24} />
        </Link>
    </footer>
  );
}