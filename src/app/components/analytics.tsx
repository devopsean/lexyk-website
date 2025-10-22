"use client";

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getLocaleFromPath } from '@/lib/translations';

export default function Analytics() {
  const GA_MEASUREMENT_ID = 'G-6H738ENBQM';
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPath(pathname);
    if (typeof window !== 'undefined') {
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('config', GA_MEASUREMENT_ID, {
          page_path: pathname,
          page_language: locale,
        });
      }
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            page_language: '${getLocaleFromPath(pathname)}',
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking functions
export const trackEvent = (eventName: string, eventParams?: Record<string, string | number>) => {
  if (typeof window !== 'undefined') {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('event', eventName, eventParams);
    }
  }
};

export const trackStoreButtonClick = (storeName: 'App Store' | 'Google Play') => {
  trackEvent('store_button_click', {
    store_name: storeName,
    button_location: 'header',
  });
};

export const trackCTAClick = (ctaLocation: string) => {
  trackEvent('cta_click', {
    location: ctaLocation,
  });
};

export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_switch', {
    from_language: fromLang,
    to_language: toLang,
  });
};

