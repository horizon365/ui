---
description: 画面の任意の側面からスライドするダイアログ。
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: ダイアログ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## 使用法

スライドオーバーのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、スライドオーバーが開いたときに表示されるコンテンツを追加します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

`#header`{lang="ts-type"}、`#body`{lang="ts-type"}、`#footer`{lang="ts-type"}スロットを使用して、スライドオーバーのコンテンツをカスタマイズすることもできます。

### Title

`title`プロパティを使用して、Slideoverのヘッダーのタイトルを設定します。

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Description

`description`プロパティを使用して、Slideoverのヘッダーの説明を設定します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 閉じる

`close`プロパティを使用して、スライドオーバーのヘッダーに表示される閉じるボタン（`false`値）をカスタマイズまたは非表示にします。

[Button](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
`#content`スロットがヘッダの一部であるため、閉じるボタンは表示されません。
::

### アイコンを閉じる

`close-icon`プロパティを使用して、閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
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

### Side

`side`プロパティを使用して、スライドオーバーをスライドさせる画面の側面を設定します。デフォルトは`right`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Inset badge{label="4.3+" class="align-text-top"}

`inset`プロパティを使用して、スライドオーバーをエッジから挿入します。

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transition

`transition`プロパティを使用して、スライドオーバーがアニメーション化されるかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### オーバーレイ

`overlay`プロパティを使用して、スライドオーバーにオーバーレイがあるかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modal

`modal`プロパティを使用して、Slideoverが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::note
`modal`が`false`に設定されると、オーバーレイは自動的に無効になり、外部コンテンツはインタラクティブになります。
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Slideover interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

###  Dismissible

`dismissible`プロパティを使用して、スライドオーバーの外側をクリックするか、escapeを押したときにスライドオーバーを無効にするかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがクローズしようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせて、スライドオーバーの背景を閉じずにインタラクティブにすることができます。
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### アンマウントbadge{label="4.10+" class="align-text-top"}

`unmount-on-hide`プロパティを使用して、Slideoverのコンテンツが閉じたときにアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
DOMを検査して、Slideoverが閉じている間でもスライドオーバーのコンテンツがレンダリングされていることを確認できます。
::

::tip
`portal`プロパティが`false`に設定されている場合、コンテンツはサーバー上でもレンダリングされます。これはSSR中に開いているスライドオーバーをページ読み込み時にフラッシュなしでレンダリングしたり、SEOのためにコンテンツを公開したりするのに便利です。
::

## 例

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'slideover-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してスライドオーバーを切り替えることができます。
::

::tip
これにより、トリガーをスライドオーバーの外側に移動したり、完全に削除したりできます。
::

### プログラムの使用法

[`useOverlay`](/docs/composables/use-overlay)コンポーザブルを使用して、プログラムでスライドオーバーを開くことができます。

::warning
[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)コンポーネントを使用する[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。
::

まず、プログラムで開くスライドオーバーコンポーネントを作成します。

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
スライドオーバーがクローズまたは却下されたときに`close`イベントを発行しています。`close`イベントを通じて任意のデータを発行することができ、そのデータは`open()`の解決済み値になります。Promiseを解決するにはイベントを発行する必要があります。
::

次に、アプリで使用します。

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
`emit('close')`を出力することで、slideoverコンポーネント内でslideoverを閉じることができます。
::

### ネストされたスライドオーバー

お互いにスライドオーバーをネストできます。

::component-example
---
name: 'slideover-nested-example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、スライドオーバーの本体の後にコンテンツを追加します。

::component-example
---
name: 'slideover-footer-slot-example'
---
::

##  API

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
