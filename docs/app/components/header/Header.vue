<script setup lang="ts">
const route = useRoute()
const { desktopLinks } = useHeader()
const { open } = useChat()
const { track } = useAnalytics()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

// The module route caches nuxt.com's stats for an hour, shared with /team
// under one key so the payload only rides once.
const { data: module } = await useFetch('/api/module.json', { key: 'module', pick: ['stats'] })
const { format } = Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })
const starsLabel = computed(() => {
  const stars = module.value?.stats?.stars
  return stars ? format(stars).toLowerCase() : undefined
})

function toggleChat() {
  if (!open.value) {
    track('AI Chat Opened', { source: 'header' })
  }
  open.value = !open.value
}

// Items for the language dropdown: each entry routes to the switchLocalePath
// URL for that locale, which preserves the current route's slug under the new
// locale prefix (e.g. /docs/components/button ↔ /zh/docs/components/button).
interface LocaleOption { code: 'en' | 'zh' | 'ja' | 'ko' | 'fr' | 'de' | 'nl' | 'es', name: string }

const languageItems = computed(() => {
  const list = locales.value as LocaleOption[]
  return list.map(l => ({
    label: l.name,
    icon: l.code === locale.value ? 'i-lucide-check' : undefined,
    to: switchLocalePath(l.code)
  }))
})

const currentLocaleName = computed(() => {
  const list = locales.value as LocaleOption[]
  return list.find(l => l.code === locale.value)?.name || locale.value
})
</script>

<!-- eslint-disable vue/no-template-shadow -->
<template>
  <UHeader
    :ui="{
      container: [route.path.startsWith('/blog/') ? 'max-w-none' : ''],
      right: 'gap-0.5'
    }"
    class="flex flex-col"
  >
    <template #left>
      <HeaderLogo />

      <VersionMenu v-if="route.path.startsWith('/docs/')" />
    </template>

    <UNavigationMenu :items="desktopLinks" variant="link" content-orientation="vertical" />

    <template #right>
      <!-- below `lg` the GitHub button is gone and Ask AI moves up beside search -->
      <UTooltip text="Search" :kbds="['meta', 'K']" class="max-lg:order-first" ignore-non-keyboard-focus>
        <UContentSearchButton />
      </UTooltip>

      <!-- lazy for the theme engine it pulls: Vue keeps the server's button
             and hydrates it when the chunk lands. Not on idle, which would
             defer every mount, and the mobile menu mounts this cluster again -->
      <LazyThemeStudioPresetPicker />

      <!-- Language switcher: `prefix_except_default` keeps `en` at `/...`
           and routes other locales to `/{code}/...` while preserving the
           current route's slug via `useSwitchLocalePath`. -->
      <UDropdownMenu
        :items="languageItems"
        :ui="{ content: 'min-w-40' }"
      >
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-lucide-languages"
          :aria-label="`Language: ${currentLocaleName}`"
        />
      </UDropdownMenu>

      <UTooltip text="Open on GitHub" class="hidden lg:flex" ignore-non-keyboard-focus>
        <UButton
          color="neutral"
          variant="ghost"
          :label="starsLabel"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="Open on GitHub"
        />
      </UTooltip>

      <USeparator orientation="vertical" class="hidden lg:flex h-auto self-stretch py-1.5 mx-1.5 lg:me-3" />

      <!-- ghost among the ghost controls it sits with below `lg`, framed on its
           own beyond the separator above it; no tooltip where there is no hover -->
      <UButton
        color="neutral"
        variant="ghost"
        aria-label="Ask AI"
        class="lg:hidden -order-1"
        @click="toggleChat"
      >
        <template #leading>
          <NuxiIcon class="size-5 shrink-0" />
        </template>
      </UButton>

      <UTooltip text="Ask AI" :kbds="['meta', 'I']" class="hidden lg:flex" ignore-non-keyboard-focus>
        <UButton
          color="neutral"
          variant="outline"
          label="Ask AI"
          aria-label="Ask AI"
          @click="toggleChat"
        >
          <template #leading>
            <NuxiIcon class="size-5 shrink-0" />
          </template>
        </UButton>
      </UTooltip>
    </template>

    <template #toggle="{ open, toggle, ui }">
      <HeaderToggleButton
        :open="open"
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      />
    </template>

    <template #body>
      <HeaderBody />
    </template>

    <template v-if="route.path.startsWith('/docs/')" #bottom>
      <HeaderBottom />
    </template>
  </UHeader>
</template>
