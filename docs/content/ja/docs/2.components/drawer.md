---
description: 画面の内外をスムーズにスライドさせる引き出し。
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: ドロワー
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## 使用法

Drawerのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Drawerが開いたときに表示されるコンテンツを追加します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

`#header`{lang="ts-type"}、`#body`{lang="ts-type"}、`#footer`{lang="ts-type"}スロットを使用してDrawerのコンテンツをカスタマイズすることもできます。

### Title

`title`プロパティを使用して、Drawerのヘッダーのタイトルを設定します。

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Description

`description`プロパティを使用して、Drawerのヘッダーの説明を設定します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 閉じるbadge{label="4.10+" class="align-text-top"}

`close`プロパティを使用して、Drawerに閉じるボタンを表示します。デフォルトは`false`です。

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### アイコンを閉じるbadge{label="4.10+" class="align-text-top"}

`close-icon`プロパティを使用して、閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 方向

Drawerの方向を制御するには、`direction`プロパティを使用します。デフォルトは`bottom`です。

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset

`inset`プロパティを使用して、Drawerをエッジから挿入します。

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### ハンドル

Drawerにハンドルがあるかどうかを制御するには、`handle`プロパティを使用します。デフォルトは`true`です。

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Handle Only

`handle-only`プロパティを使用して、Drawerをハンドルでのみドラッグできるようにします。

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### オーバーレイ

`overlay`プロパティを使用して、Drawerにオーバーレイがあるかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal

`modal`プロパティを使用して、Drawerが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::note
`modal`を`false`に設定すると、オーバーレイは自動的に無効になり、外部コンテンツはインタラクティブになります。
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

###  Dismissible

`dismissible`プロパティを使用して、Drawerの外側をクリックするかescapeを押したときにDrawerがdismissibleかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがクローズしようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせると、Drawerの背景を閉じずにインタラクティブにすることができます。
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale背景

`should-scale-background`プロパティを使用して、Drawerが開いているときに背景を拡大し、視覚的な奥行き効果を作成します。`set-background-color-on-scale`プロパティを`false`に設定すると、背景色の変更を防ぐことができます。

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
これを動作させるには、アプリケーションの親要素に`data-vaul-drawer-wrapper`ディレクティブを追加してください。

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## 例

###  Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してDrawerを切り替えることができます。
::

::tip
これにより、トリガーを引き出しの外側に移動したり、完全に削除したりできます。
::

### Responsiveドロワー

例えば、[Modal](/docs/components/modal)コンポーネントをデスクトップで、Drawerをモバイルでレンダリングできます。

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### 入れ子の引き出し

`nested`プロパティを使用して、ドロワー同士をネストできます。

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、Drawer本体の後にコンテンツを追加します。

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### Withコマンドパレット

Drawerのコンテンツ内で[ CommandPalette](/docs/components/command-palette)コンポーネントを使用できます。

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
この例では`useLazyFetch`と`immediate: false`を使用して、Drawerが開いたときにのみデータをフェッチします。
::

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
