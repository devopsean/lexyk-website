"use client";

import React, { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeNames, getLocaleFromPath, getLocalizedPath, defaultLocale, type Locale } from '@/lib/translations';

const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  pt: '🇵🇹',
  it: '🇮🇹',
  de: '🇩🇪',
  ja: '🇯🇵',
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = getLocaleFromPath(pathname);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);
    
    // Get the current path without locale
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    // If first segment is a locale, remove it
    let cleanPath: string;
    if (locales.includes(firstSegment as Locale)) {
      const remainingSegments = pathSegments.slice(1);
      cleanPath = remainingSegments.length > 0 ? '/' + remainingSegments.join('/') : '/';
    } else {
      cleanPath = pathname || '/';
    }
    
    // Build new path with locale
    const newPath = newLocale === defaultLocale 
      ? cleanPath 
      : `/${newLocale}${cleanPath === '/' ? '' : cleanPath}`;
    
    router.push(newPath);
  };

  // Show all available locales
  const activeLocales = locales;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors rounded-lg hover:bg-white/10"
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-lg">{localeFlags[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
          {activeLocales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors flex items-center justify-between ${
                currentLocale === locale ? 'bg-gray-50 font-semibold text-black' : 'text-gray-700'
              }`}
              role="menuitem"
            >
              <span className="flex items-center gap-2">
                <span>{localeFlags[locale]}</span>
                <span>{localeNames[locale]}</span>
              </span>
              {currentLocale === locale && (
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

