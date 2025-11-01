"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { getLocaleFromPath, getTranslations, locales, type Locale } from '@/lib/translations';

export default function StructuredData() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname) as Locale;
  const translations = getTranslations(locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lexykapp",
    "url": "https://www.lexykapp.com",
    "logo": "https://www.lexykapp.com/Logo.svg",
    "description": translations.metadata.description,
    "sameAs": [
      "https://www.tiktok.com/@lexykapp",
      "https://www.linkedin.com/company/lexyk-app"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@lexykapp.com",
      "contactType": "Customer Support"
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lexykapp",
    "url": "https://www.lexykapp.com",
    "applicationCategory": "EducationalApplication",
    "description": translations.metadata.description,
    "operatingSystem": "iOS, Android",
    "inLanguage": locales,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "100"
    },
    "author": {
      "@type": "Organization",
      "name": "Lexykapp"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Lexykapp",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "iOS, Android",
    "description": translations.metadata.description,
    "inLanguage": locales,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      translations.sections.features.item1.title,
      translations.sections.features.item2.title,
      translations.sections.features.item3.title,
      "Multi-language support (French, Spanish, English)",
      "Progress tracking",
      "Custom vocabulary lists"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lexykapp.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.lexykapp.com/privacy"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Terms of Service",
        "item": "https://www.lexykapp.com/terms"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

