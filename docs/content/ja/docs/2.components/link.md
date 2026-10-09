---
description: NuxtLinkのラッパーに追加の小道具があります。
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

## 使用法

Linkコンポーネントは[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)を[`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) propを使用したラッパーです。いくつかの追加の小道具を提供します

- `inactive-class`プロパティはリンクがアクティブなときにクラスを設定します。
- `exact`は、リンクがアクティブで、ルートが現在のルートとまったく同じ場合に`active-class`でstyleするためのプロパティです。
- `exact-query`と`exact-hash`は、リンクがアクティブで、クエリまたはハッシュが現在のクエリまたはハッシュとまったく同じである場合、`active-class`でスタイルを維持します。
  - x`exact-query="partial"`を使用して、リンクがアクティブで、クエリが現在のクエリと部分的に一致する場合、`active-class`でスタイルを設定します。

この背景にある動機は、Nuxt 2/Vue 2でNuxtLinkと同じAPIを提供することです。Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link)ガイドのVue Router [migrationで詳しく読むことができます。

::note
[`Breadcrumb`](/docs/components/breadcrumb)、[`Button`](/docs/components/button)、[`ContextMenu`](/docs/components/context-menu)、[`DropdownMenu`](/docs/components/dropdown-menu)、[`NavigationMenu`/docs/components/navigation-menu)コンポーネントで使用される。
::

### Tag

`Link`コンポーネントは、`to`プロパティが指定されているときに`<a>`タグをレンダリングします。そうでないときは`<button>`タグをレンダリングします。`as`プロパティを使用してフォールバックタグを変更できます。

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
`to`プロパティを変更することで、レンダリングされたHTMLを調べることができます。
::

### Style

デフォルトでは、リンクにはデフォルトのアクティブスタイルと非アクティブスタイルがあります。[ #theme](#theme)セクションを確認してください。

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
`to`プロパティを変更してアクティブ状態と非アクティブ状態を確認してください。
::

`raw`プロパティを使用してこの動作をオーバーライドし、`class`、`active-class`、`inactive-class`を使用して独自のスタイルを提供できます。

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

リンク
::

::callout{icon="i-simple-icons-visualstudiocode"}
VSCode用に[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)拡張を使用しており、`active-class`と`inactive-class`プロパティの自動補完を取得したい場合は、`.vscode/settings.json`に以下の設定を追加できます：

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### Locale badge{label="4.7+" class="align-text-top"}

Linkコンポーネントはインストール時に自動的に[`@nuxtjs/i18n`xph14xhttps://i18n.nuxtjs.org/)に統合されます。内部リンクは手動でラップする必要なく`$localePath`ヘルパーを使用して自動的にローカライズされます。

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
必要に応じて`localePath()`または`localeRoute()`を手動で使用できます。
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Nuxt UIの国際化について詳しくはこちら。
::

## API

### Props

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<a>` HTML属性もサポートします。
::

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
