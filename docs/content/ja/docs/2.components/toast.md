---
description: ユーザーに情報やフィードバックを提供するための簡潔なメッセージ。
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: 乾杯
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## 使用法

[useToast](/docs/composables/use-toast)を構成して、アプリケーションにトーストを表示します。

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
[`App`](/docs/components/app)コンポーネントは、Reka UIの[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider)コンポーネントを使用する[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)コンポーネントを使用しています。
::

::tip{to="/docs/components/app#props"}
Toasterをグローバルに設定する方法は、`App`コンポーネント`toaster`プロパティを確認できます。
::

### Title

タイトルを表示するには、`title`フィールドを`toast.add`メソッドに渡します。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### Description

`toast.add`メソッドに`description`フィールドを渡して説明を表示します。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### Icon

`icon`フィールドを`toast.add`メソッドに渡し、[Icon](/docs/components/icon)を表示します。

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### アバター

[Avatar](/docs/components/avatar)を表示するには、`avatar`フィールドを`toast.add`メソッドに渡します。

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### Color

`color`フィールドを`toast.add`メソッドに渡して、Toastの色を変更します。

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### 閉じる

`close`フィールドを渡して、close [Button](/docs/components/button) `false`値をカスタマイズまたは非表示にします。

::component-example
---
name: 'toast-close-example'
---
::

### アイコンを閉じる

`closeIcon`フィールドを渡して閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### Actions

`actions`フィールドを渡して、[Button](/docs/components/button)アクションをトーストに追加します。

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### Duration

`duration`フィールドを`toast.add`メソッドに渡して、Toastが表示される時間（ミリ秒単位）を変更します。デフォルトは`5000`です。

::tip
`duration`フィールドを`0`に設定し、手動で閉じるまでトーストを開いたままにします。
::

::component-example
---
options:
  - name: 'duration'
    label: 'duration'
    default: 0
    items:
      - 0
      - 1000
      - 3000
      - 5000
name: 'toast-duration-example'
---
::

### Progress

`progress`フィールドを渡して、[Progress](/docs/components/progress)バー `false`値をカスタマイズまたは非表示にします。

::tip
プログレスバーはデフォルトでToastカラーを継承しますが、`progress.color`フィールドを使用してオーバーライドできます。
::

::component-example
---
name: 'toast-progress-example'
---
::

### Orientation

`orientation`フィールドを`toast.add`メソッドに渡して、Toastの向きを変更します。

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## 例

::note{to="/docs/components/app"}
Nuxt UIは、アプリケーションをラップしてグローバル設定を提供する**App**コンポーネントを提供します。
::

### グローバルポジションを変更

トーストの位置を変更するには、[App](/docs/components/app#props)コンポーネントの`toaster.position`プロパティを変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::


### グローバル期間の変更

トーストの長さを変更するには、[App](/docs/components/app#props)コンポーネントの`toaster.duration`プロパティを変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::


### Change global max badge{label="4.1+" class="align-text-top"}

一度に表示されるトーストの最大数を変更するには、[App](/docs/components/app#props)コンポーネントの`toaster.max`プロパティを変更します。

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-max-example
::


### 積み重ねたトースト

[App](/docs/components/app#props)コンポーネントの`toaster.expand`プロパティを`false`に設定して、スタックトーストを表示します（[Sonner](https://sonner.emilkowal.ski/)に触発されて）。

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
トーストの上にカーソルを合わせると展開できます。これによりトーストのタイマーが一時停止します。
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### 重複しないトーストbadge{label="4.5+" class="align-text-top"}

すでに存在する`id`で`toast.add`を呼び出すと、既存のトーストは重複を作成する代わりにパルス化されます。

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### Withコールバック

`onUpdateOpen`フィールドを渡して、トーストが閉じられたときにコールバックを実行します。

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

###  HTMLコンテンツ付き

カスタムスタイルでHTML要素またはVueコンポーネントをレンダリングするには、`title`または`description`フィールドの[`h()`レンダリング関数](https://vuejs.org/api/render-function.html#h)を使用します。

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `height`{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
