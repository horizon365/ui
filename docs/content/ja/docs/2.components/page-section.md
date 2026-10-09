---
title: ページセクション
description: 'あなたのページの応答セクション。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageSection.vue
---

## 使用法

PageSectionコンポーネントはコンテンツを[Container](/docs/components/container)にラップし、背景色、画像、パターンを簡単に追加できるように全幅の柔軟性を維持します。デフォルトスロットにイラストとともにコンテンツを表示する柔軟な方法を提供します。

::code-preview

::u-page-section
---
title: 'Beautiful Vue UI components'
description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
headline: 'Features'
features:
  - title: 'Icons'
    description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
    icon: 'i-lucide-smile'
    to: '/docs/getting-started/integrations/icons'
  - title: 'Fonts'
    description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
    icon: 'i-lucide-a-large-small'
    to: '/docs/getting-started/integrations/fonts'
  - title: 'Color Mode'
    description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
    icon: 'i-lucide-sun-moon'
    to: '/docs/getting-started/integrations/color-mode'
---
::

::

[PageHero](/docs/components/page-hero)コンポーネントの後に使用します。

```vue {4}
<template>
  <UPageHero />

  <UPageSection />
</template>
```

### タイトル

`title`プロパティを使用してセクションのタイトルを設定します。

::component-code
---
props:
  title: 'Beautiful Vue UI components'
---
::

### Description

セクションの説明を設定するには、`description`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
---
::

### ヘッドライン

`headline`プロパティを使用して、セクションの見出しを設定します。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  headline: 'Features'
---
::

### Icon

`icon`プロパティを使用してセクションのアイコンを設定します。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
---
::

### 特徴

`features`プロパティを使用して、説明の下に[PageFeature](/docs/components/page-feature)のリストを次のプロパティを持つオブジェクトの配列として表示します。

- `title?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `orientation?: 'horizontal' | 'vertical'`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-code
---
prettier: true
external:
  - features
externalTypes:
  - PageFeatureProps[]
ignore:
  - title
  - description
  - features
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
---
::

### Links

`links`プロパティを使用して、説明の下に[Button](/docs/components/button)のリストを表示します。

::component-code
---
prettier: true
external:
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
      color: 'neutral'
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Orientation

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse

`reverse`プロパティを使用して、デフォルトスロットの向きを逆にします。

::component-code
---
prettier: true
external:
  - features
  - links
externalTypes:
  - PageFeatureProps[]
  - ButtonProps[]
ignore:
  - title
  - description
  - icon
  - features
  - links
props:
  title: 'Beautiful Vue UI components'
  description: 'Nuxt UI provides a comprehensive suite of components and utilities to help you build beautiful and accessible web applications with Vue and Nuxt.'
  icon: 'i-lucide-rocket'
  orientation: horizontal
  reverse: true
  features:
    - title: 'Icons'
      description: 'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.'
      icon: 'i-lucide-smile'
      to: '/docs/getting-started/integrations/icons'
    - title: 'Fonts'
      description: 'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.'
      icon: 'i-lucide-a-large-small'
      to: '/docs/getting-started/integrations/fonts'
    - title: 'Color Mode'
      description: 'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.'
      icon: 'i-lucide-sun-moon'
      to: '/docs/getting-started/integrations/color-mode'
  links:
    - label: 'Explore components'
      to: '/docs/components/app'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/704/1294" width="352" height="647" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
