"use client";

import { usePathname } from 'next/navigation';
import { locales as allLocales, defaultLocale, type Locale } from '@/lib/translations';

export default function HrefLangTags() {
  const pathname = usePathname();
  const baseUrl = 'https://www.lexykapp.com';
  
  // Remove locale prefix if exists
  const pathSegments = pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0] as Locale;
  const pathWithoutLocale = allLocales.includes(firstSegment)
    ? '/' + pathSegments.slice(1).join('/')
    : pathname;
  
  const cleanPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale;

  return (
    <>
      {allLocales.map((locale) => {
        const path = locale === defaultLocale 
          ? cleanPath 
          : `/${locale}${cleanPath}`;
        return (
          <link
            key={locale}
            rel="alternate"
            hrefLang={locale}
            href={`${baseUrl}${path === '//' ? '/' : path}`}
          />
        );
      })}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${cleanPath === '//' ? '/' : cleanPath}`}
      />
    </>
  );
}

