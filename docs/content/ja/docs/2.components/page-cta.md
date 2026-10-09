---
title: ページCTA
description: 'ページに表示するCTAセクション。'
category: page
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## 使用法

PageCTAコンポーネントは、デフォルトスロットにイラストを使用してページ内のアクション喚起を柔軟に表示する方法を提供します。

::code-preview

::u-page-c-t-a
---
title: 'Trusted and supported by our amazing community'
description: 'Preview the latest Tailwind CSS and get started with Nuxt UI.'
orientation: horizontal
links:
  - label: 'Get started'
    color: 'neutral'
  - label: 'Learn more'
    color: 'neutral'
    variant: 'subtle'
    trailingIcon: 'i-lucide-arrow-right'
---

:img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

[PageSection](/docs/components/page-section)コンポーネント内またはページ内で直接使用します。

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
`px-0`および`rounded-none`クラスを使用して、モバイルでCTAをページの端に埋めるようにします。
::

### Title

`title`プロパティを使用して、CTAのタイトルを設定します。

::component-code{slug="page-CTA"}
---
props:
  title: 'Trusted and supported by our amazing community'
---
::

### Description

`description`プロパティを使用して、CTAの説明を設定します。

::component-code{slug="page-CTA"}
---
prettier: true
ignore:
  - title
props:
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
---
::

### Links

`links`プロパティを使用して、[Button](/docs/components/button)のリストを説明の下に表示します。

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

### Variant

`variant`プロパティを使用してCTAのスタイルを変更します。

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  variant: soft
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
---
::

::tip
`solid`バリアントを使用して色を反転させる場合、`light`または`dark`クラスを`links`スロットに適用できます。
::

### Orientation

`orientation`プロパティを使用して、デフォルトスロットの向きを変更します。デフォルトは`vertical`です。

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

### Reverse

`reverse`プロパティを使用して、デフォルトスロットの向きを逆にします。

::component-code{slug="page-CTA"}
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
  title: 'Trusted and supported by our amazing community'
  description: "We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
  orientation: horizontal
  reverse: true
  links:
    - label: 'Get started'
      color: 'neutral'
    - label: 'Learn more'
      color: 'neutral'
      variant: 'subtle'
      trailingIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

:img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props

:component-props{slug="page-CTA"}

### スロット

:component-slots{slug="page-CTA"}

## Theme

:component-theme{slug="page-CTA"}

## Changelog

:component-changelog
