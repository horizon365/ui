---
title: PageHero
description: 'あなたのページのレスポンシブヒーロー。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageHero.vue
---

## 使用法

PageHeroコンポーネントはコンテンツを[Container](/docs/components/container)にラップし、背景色、画像、パターンを簡単に追加できるように全幅の柔軟性を維持します。デフォルトスロットにイラストを含むコンテンツを柔軟に表示する方法を提供します。

::code-preview

:::u-page-hero
---
title: 'Ultimate Vue UI library'
description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---

::::u-page-card{variant="subtle" class="rounded-lg"}

![Appスクリーンショット](/blocks/image4.png){width="960" height="540" class="rounded-sm shadow-2xl ring ring-default"}

::::

:::

::

### Title

`title`プロパティを使用してヒーローのタイトルを設定します。

::component-code
---
props:
  title: 'Ultimate Vue UI library'
---
::

### Description

`description`プロパティを使用してヒーローの説明を設定します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
---
::

### ヘッドライン

`headline`プロパティを使用してヒーローの見出しを設定します。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
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
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
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
  - links
externalTypes:
  - ButtonProps[]
ignore:
  - title
  - description
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![Appスクリーンショット](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
::

### Reverse

`reverse`プロパティを使用して、デフォルトスロットの向きを逆にします。

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
  - headline
  - links
props:
  title: 'Ultimate Vue UI library'
  description: 'A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications.'
  headline: 'New release'
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      to: '/docs/getting-started'
      icon: 'i-lucide-square-play'
    - label: 'Learn more'
      to: '/docs/getting-started/theme/design-system'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-default" />
---

![Appスクリーンショット](/blocks/image4.png){class="rounded-lg shadow-2xl ring ring-default"}
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
