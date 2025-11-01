import { MetadataRoute } from 'next'
import { locales } from '@/lib/translations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lexykapp.com'
  const currentDate = new Date()

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/data-deletion', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/delete-account', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Generate entries for each route and locale combination
  routes.forEach(route => {
    locales.forEach(locale => {
      const localePath = locale === 'en' ? route.path : `/${locale}${route.path}`
      const url = `${baseUrl}${localePath || '/'}`
      
      // Generate language alternates for all locales
      const languageAlternates: Record<string, string> = {}
      locales.forEach(loc => {
        const locPath = loc === 'en' ? route.path : `/${loc}${route.path}`
        languageAlternates[loc] = `${baseUrl}${locPath || '/'}`
      })
      
      sitemap.push({
        url,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: languageAlternates,
        },
      })
    })
  })

  return sitemap
}

