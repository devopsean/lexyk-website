"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getLocaleFromPath } from '@/lib/translations';

export default function HtmlLang() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}

