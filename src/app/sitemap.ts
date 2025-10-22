import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lexykapp.com'
  const currentDate = new Date()
  const locales = ['en', 'es', 'fr']

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
      
      sitemap.push({
        url,
        lastModified: currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: {
            en: `${baseUrl}${route.path || '/'}`,
            es: `${baseUrl}/es${route.path || '/'}`,
            fr: `${baseUrl}/fr${route.path || '/'}`,
          },
        },
      })
    })
  })

  return sitemap
}

