<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const props = defineProps<{
  category: string
}>()

const { locale } = useI18n()

const { data: components } = await useAsyncData(
  `components-${props.category}-${locale.value}`,
  () => {
    const collection = `docs_${locale.value}` as keyof Collections
    return queryCollection(collection)
      .where('path', 'LIKE', '/docs/components/%')
      .where('extension', '=', 'md')
      .where('category', '=', props.category)
      .where('index', 'IS NULL')
      .select('path', 'title', 'description')
      .all()
  },
  { watch: [locale] }
)
</script>

<template>
  <UPageGrid class="gap-5">
    <UPageCard
      v-for="(component, index) in components"
      :key="component.path"
      :title="component.title"
      :description="component.description"
      :to="component.path"
      :ui="{
        root: 'overflow-hidden group ring-muted',
        header: 'mb-0',
        container: 'p-0 lg:p-0',
        body: 'p-4',
        title: 'text-[15px] font-medium',
        description: 'line-clamp-2 mt-0.5'
      }"
    >
      <template #header>
        <div class="rounded-md rounded-b-none border border-muted overflow-hidden aspect-video -m-px bg-muted">
          <UColorModeImage
            :light="`${component.path.replace('/docs/components/', '/components/light/')}.png`"
            :dark="`${component.path.replace('/docs/components/', '/components/dark/')}.png`"
            class="group-hover:scale-105 transition-transform size-full"
            :loading="index >= 4 ? 'lazy' : 'eager'"
            width="640"
            height="360"
            :alt="`${component.title} preview`"
          />
        </div>
      </template>
    </UPageCard>
  </UPageGrid>
</template>
