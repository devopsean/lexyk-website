import { Metadata } from 'next';
import { getTranslations, type Locale } from './translations';

const baseUrl = 'https://www.lexykapp.com';

export function generateMetadataForLocale(locale: Locale): Metadata {
  const translations = getTranslations(locale);
  const metadata = translations.metadata;

  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const url = `${baseUrl}${localePrefix}`;

  return {
    metadataBase: new URL(baseUrl),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.split(', '),
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/`,
        'es': `${baseUrl}/es/`,
        'fr': `${baseUrl}/fr/`,
        'x-default': `${baseUrl}/`,
      },
    },
    openGraph: {
      type: 'website',
      locale: getOpenGraphLocale(locale),
      url: url,
      siteName: 'Lexykapp',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/Logo.svg',
          width: 1200,
          height: 630,
          alt: 'Lexykapp - Vocabulary Learning App',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/Logo.svg'],
      creator: '@lexykapp',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

function getOpenGraphLocale(locale: Locale): string {
  const localeMap: Record<Locale, string> = {
    'en': 'en_US',
    'es': 'es_ES',
    'fr': 'fr_FR',
    'pt': 'pt_PT',
    'it': 'it_IT',
  };
  return localeMap[locale] || 'en_US';
}

export function generateHrefLangTags(currentPath: string) {
  const locales: Locale[] = ['en', 'es', 'fr'];
  
  const tags: Array<{ rel: 'alternate'; hreflang: Locale | 'x-default'; href: string }> = locales.map(locale => {
    const path = locale === 'en' ? currentPath : `/${locale}${currentPath}`;
    return {
      rel: 'alternate' as const,
      hreflang: locale,
      href: `${baseUrl}${path}`,
    };
  });

  // Add x-default separately with proper typing
  tags.push({
    rel: 'alternate' as const,
    hreflang: 'x-default' as const,
    href: `${baseUrl}${currentPath}`,
  });

  return tags;
}

