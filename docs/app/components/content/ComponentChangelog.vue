<script setup lang="ts">
interface Release {
  tag: string
  date: string
  url: string
}

// The static export has no server, so this renders the build-time snapshot of
// /api/github/releases.json instead of per-component commit history.
defineProps<{
  prefix?: string
}>()

const { data: releases } = useLazyFetch<Release[]>('/api/github/releases.json', {
  server: false,
  getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
})

const recentReleases = computed(() =>
  (releases.value ?? [])
    .filter(r => r.date)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)
)
</script>

<template>
  <div v-if="!recentReleases.length">
    No recent changes
  </div>

  <ul v-else class="flex flex-col gap-1.5">
    <li v-for="release of recentReleases" :key="release.tag" class="flex items-center justify-between gap-4">
      <ULink :to="release.url" target="_blank" class="text-sm">
        <UBadge variant="subtle" :label="release.tag" />
      </ULink>

      <time :datetime="release.date" class="text-xs text-dimmed font-normal">
        {{ useTimeAgo(new Date(release.date)) }}
      </time>
    </li>
  </ul>
</template>
