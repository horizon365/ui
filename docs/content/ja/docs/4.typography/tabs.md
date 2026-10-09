---
title: ProseTabs
description: 'インタラクティブなタブインターフェイスで関連コンテンツを整理する。'
category: components
navigation.title: Tabs
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## 使用法

`tabs`および`tabs-item`コンポーネントを使用して、[Tabs](/docs/components/tabs)をコンテンツに表示します。

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="コード" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="プレビュー" icon="i-lucide-eye"}

::callout
前にはウラムコとカルパが登場した。
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
前にはウラムコとカルパが登場した。
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
````

::

## API

### Props

:component-props{prose}

### スロット

:component-slots{prose}

## Theme

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## Changelog

:component-changelog{prefix="prose"}
