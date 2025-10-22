import React from 'react';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lexykapp",
    "url": "https://www.lexykapp.com",
    "logo": "https://www.lexykapp.com/Logo.svg",
    "description": "Boost your vocabulary with Lexykapp! Learn French, Spanish, and English words through personalized flashcards.",
    "sameAs": [
      "https://www.tiktok.com/@lexykapp"
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
    "description": "Vocabulary learning app for French, Spanish, and English. Learn words through personalized flashcards, set goals, and track your progress.",
    "operatingSystem": "iOS, Android",
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
    "description": "Master French, Spanish, and English vocabulary with personalized flashcards. Track your progress and achieve your language learning goals.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Curated vocabulary lists",
      "Goal setting and tracking",
      "Personalized flashcards",
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

