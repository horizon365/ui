---
description: ウェブサイトをナビゲートするためのリンクの階層。
category: navigation
keywords:
  - breadcrumbs
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## 使用法

ブレッドクラムコンポーネントを使用して、サイトの階層に現在のページの場所を表示します。

::component-code
---
collapse: true
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::note
`to`プロパティが定義されていない場合、リンクの代わりに`span`がレンダリングされます。
::

### Separatorアイコン

`separator-icon`プロパティを使用して、[Icon](/docs/components/icon)を各項目間でカスタマイズします。デフォルトは`i-lucide-chevron-right`です。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  separatorIcon: 'i-lucide-arrow-right'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronRight`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronRight`キーでグローバルにカスタマイズできます。
:::
::

### Color badge{label="4.8+" class="align-text-top"}

`color`プロパティを使用して、アクティブなブレッドクラムの色を変更します。

::component-code
---
ignore:
  - items
external:
  - items
externalTypes:
  - BreadcrumbItem[]
props:
  color: 'secondary'
  items:
    - label: 'Docs'
      icon: 'i-lucide-book-open'
      to: '/docs'
    - label: 'Components'
      icon: 'i-lucide-box'
      to: '/docs/components'
    - label: 'Breadcrumb'
      icon: 'i-lucide-link'
      to: '/docs/components/breadcrumb'
---
::

## 例

### セパレータースロット付き

`#separator`スロットを使用して、各アイテム間の区切り文字をカスタマイズします。

:component-example{name="breadcrumb-separator-slot-example"}

### カスタムスロット付き

`slot`プロパティを使用して、特定の項目をカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

:component-example{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
`#item`、`#item-leading`、`#item-label`、`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
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
