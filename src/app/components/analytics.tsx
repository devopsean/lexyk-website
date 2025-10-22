"use client";

import Script from 'next/script';

export default function Analytics() {
  const GA_MEASUREMENT_ID = 'G-6H738ENBQM';

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
          });
        `}
      </Script>
    </>
  );
}

// Custom event tracking functions
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
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

