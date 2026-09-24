<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()

const contentPath = computed(() => {
  const path = route.path.replace(/\/$/, '')
  if (locale.value === 'en') return path
  return path.replace(`/${locale.value}`, '') || '/'
})

const { data: page } = await useAsyncData(
  `toc-${locale.value}-${contentPath.value}`,
  async () => {
    const collection = `docs_${locale.value}` as keyof Collections
    let content = await queryCollection(collection).path(contentPath.value).first()
    if (!content && locale.value !== 'en') {
      content = await queryCollection('docs_en').path(contentPath.value).first()
    }
    return content
  },
  { watch: [locale] }
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <UContentToc :links="page?.body?.toc?.links" />
</template>
