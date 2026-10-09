---
description: '空の状態を表示するコンポーネント。'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## 使用法

表示するコンテンツがない場合、[空]コンポーネントを使用してプレースホルダー状態を表示します。

::code-preview

:::u-empty
---
icon: i-lucide-file
title: No projects found
description: It looks like you haven't added any projects. Create one to get started.
actions:
  - icon: i-lucide-plus
    label: Create new
  - icon: i-lucide-refresh-cw
    label: Refresh
    color: neutral
    variant: subtle
---
:::

::

### Title

`title`プロパティを使用して、空の状態のタイトルを設定します。

::component-code
---
props:
  title: No projects found
---
::

### Description

`description`プロパティを使用して、空の状態の説明を設定します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Icon

`icon`プロパティを使用して、空の状態のアイコンを設定します。

::component-code
---
prettier: true
ignore:
  - title
  - description
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### アバター

`avatar`プロパティを使用して、空の状態のアバターを設定します。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  avatar.src: 'https://github.com/nuxt.png'
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
---
::

### Loading badge{label="4.10+" class="align-text-top"}

`loading`プロパティを使用して、アイコンの代わりにロードアイコンを表示します。レイアウトは同じままなので、レイアウトシフトなしにロード状態と空状態を切り替えることができます。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
props:
  icon: i-lucide-file
  loading: true
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

### Loading Icon badge{label="4.10+" class="align-text-top"}

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - loading
props:
  icon: i-lucide-file
  loading: true
  loadingIcon: 'i-lucide-loader'
  title: Loading projects
  description: Please wait while we fetch your projects.
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### Actions

`actions`プロパティを使用して、[Button](/docs/components/button)アクションを空の状態に追加します。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  icon: i-lucide-file
  title: No projects found
  description: It looks like you haven't added any projects. Create one to get started.
  actions:
    - icon: i-lucide-plus
      label: Create new
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### Variant

`variant`プロパティを使用して、空の状態のバリアントを変更します。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  variant: naked
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

### サイズ

`size`プロパティを使用して空の状態のサイズを変更します。

::component-code
---
prettier: true
ignore:
  - icon
  - title
  - description
  - actions
props:
  size: xl
  icon: i-lucide-bell
  title: No notifications
  description: You're all caught up. New notifications will appear here.
  actions:
    - icon: i-lucide-refresh-cw
      label: Refresh
      color: neutral
      variant: subtle
---
::

## 例

### スロット付き

利用可能なスロットを使用して、より複雑な空状態を作成します。

::component-example
---
collapse: true
name: 'empty-slots-example'
---
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
