// This route will be pre-rendered as /api/navigation.json
import { queryCollectionNavigation } from '@nuxt/content/server'

export default defineEventHandler((event) => {
  // Server-side navigation is served from the English collection; per-locale
  // navigation is computed client-side via useNavigation + queryCollectionNavigation
  // (see app/app.vue). This keeps the prerendered endpoint single-source.
  return queryCollectionNavigation(event, 'docs_en', ['framework', 'category', 'description', 'to', 'target'])
})
