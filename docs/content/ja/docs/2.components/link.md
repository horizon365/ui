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

Linkコンポーネントは[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)[`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) propを使用したラッパーです。いくつかの追加の小道具を提供します。

- `inactive-class` propは、リンクが非アクティブなときにクラスを設定し、`active-class`はアクティブなときに使用されます。
- `exact`は、リンクがアクティブで、ルートが現在のルートとまったく同じ場合、`active-class`でスタイルを設定します。
- `exact-query`と`exact-hash`は、リンクがアクティブで、クエリまたはハッシュが現在のクエリまたはハッシュとまったく同じ場合に`active-class`でスタイルを設定します。
  - を使用して、リンクがアクティブで、クエリが現在のクエリに部分的に一致する場合に`active-class`でスタイルを設定します。

この背景にある動機は、Nuxt 2/Vue 2でNuxtLinkと同じAPIを提供することです。Vue 2 ](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) guideのVue Router [ migrationを参照してください。

::note
[`Breadcrumb`](/docs/components/breadcrumb)[`Button`](/docs/components/button)[`ContextMenu`](/docs/components/context-menu)[`DropdownMenu`](/docs/components/dropdown-menu)および[`NavigationMenu`](/docs/components/navigation-menu)コンポーネント。
::

### タグ

`Link`コンポーネントは、`to` propが提供されている場合に`<a>`タグをレンダリングします。`<button>`タグをレンダリングします。`as` propを使用してフォールバックタグを変更できます。

::component-code
---
小道具
  ''
  として'ボタン'
スロット
  デフォルトリンク
---
::

::note
`to` propを変更することで、レンダリングされたHTMLを検査できます。
::

### スタイル

デフォルトでは、リンクにはデフォルトのアクティブスタイルと非アクティブスタイルがあります。[#them ](#theme)セクションを確認してください。

::component-code
---
小道具
  to：/docs/components/link
スロット
  デフォルトリンク
---
::

::note
`to` propを変更して、アクティブ状態と非アクティブ状態を確認してみてください。
::

`raw`プロパティを使用してこの動作をオーバーライドし、`class`、`active-class`、`inactive-class`を使用して独自のスタイルを指定できます。

::component-code
---
無視
  -  raw
小道具
  raw true
  to：/docs/components/link
  activeClass 'font—bold'
  inactiveClass 'text—muted'
スロット
  デフォルトリンク
---

リンク
::

::callout{icon="i-simple-icons-visualstudiocode"}
[ Tailwind CSS IntelliSense ](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)`active-class`および`inactive-class` propsの自動補完を取得したい場合は、`.vscode/settings.json`に以下の設定を追加できます。

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

###  Locale badge {label="4.7+" class="align-text-top"}

Linkコンポーネントは、インストール時に自動的に[`@nuxtjs/i18n`](https://i18n.nuxtjs.org/)と統合されます。内部リンクは、手動でラップする必要なく、`$localePath`ヘルパーを使用して自動的にローカライズされます。

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
必要に応じて、`localePath()`または`localeRoute()`を手動で使用できます。
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Nuxt UIの国際化について詳しくはこちら。
::

##  API

###  Props

::component-props
---
無視
  - カスタム
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<a>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
