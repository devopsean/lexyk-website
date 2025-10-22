"use client";

import { usePathname } from 'next/navigation';

export default function HrefLangTags() {
  const pathname = usePathname();
  const baseUrl = 'https://www.lexykapp.com';
  
  // Remove locale prefix if exists
  const pathWithoutLocale = pathname.replace(/^\/(en|es|fr|pt|it)(\/|$)/, '/');
  
  const locales = [
    { code: 'en', path: pathWithoutLocale },
    { code: 'es', path: `/es${pathWithoutLocale}` },
    { code: 'fr', path: `/fr${pathWithoutLocale}` },
  ];

  return (
    <>
      {locales.map(({ code, path }) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={`${baseUrl}${path === '//' ? '/' : path}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${pathWithoutLocale === '//' ? '/' : pathWithoutLocale}`}
      />
    </>
  );
}

