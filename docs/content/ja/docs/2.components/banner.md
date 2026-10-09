---
description: 'ウェブサイトの上部にバナーを表示して、重要な情報をユーザーに知らせます。'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## 使用法

### Title

`title`プロパティを使用してバナーにタイトルを表示します。

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### Icon

`icon`プロパティを使用してバナーにアイコンを表示します。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Color

`color`プロパティを使用してバナーの色を変更します。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### 閉じる

`close`プロパティを使用して[Button](/docs/components/button)を表示し、バナーを閉じます。デフォルトは`false`です。

::tip
closeボタンをクリックすると`close`イベントが発生します。
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
`banner-${id}`を閉じると、`banner-${id}`は再び表示されないようにローカルストレージに格納されます。br上の例では、`banner-example`はローカルストレージに格納されます。
::

::caution
ページリロード中にsided状態を保持するには、`id`プロパティを指定する必要があります。明示的な`id`がないと、バナーは現在のセッションでのみ非表示になり、ページリロード時に再び表示されます。
::

### アイコンを閉じる

`close-icon`プロパティを使用して、閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### Actions

`actions`プロパティを使用して、[Button](/docs/components/button)アクションをバナーに追加します。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
アクションボタンのデフォルト値は`color="neutral"`と`size="xs"`です。これらの値を各アクションボタンに直接渡すことでカスタマイズできます。
::

### Link

`to`、`target`、`rel`など、[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから任意のプロパティを渡すことができます。

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
`NuxtLink`コンポーネントは、`User`コンポーネントに渡す他のすべての属性を継承します。
::

## 例

### x`app.vue`内

`app.vue`またはレイアウトでバナーコンポーネントを使用します。

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
