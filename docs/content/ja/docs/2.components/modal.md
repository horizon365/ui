---
description: メッセージを表示したり、ユーザ入力を要求したりするために使用できるダイアログウィンドウ。
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: ダイアログ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## 使用法

[Button](/docs/components/button)、またはモーダルのデフォルトスロットにある他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Modalが開いているときに表示されるコンテンツを追加します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

`#header`{lang="ts-type"}、`#body`{lang="ts-type"}、`#footer`{lang="ts-type"}スロットを使用してModalのコンテンツをカスタマイズすることもできます。

### Title

`title`プロパティを使用して、Modalのヘッダーのタイトルを設定します。

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Description

`description`プロパティを使用して、Modalのヘッダーの説明を設定します。

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 閉じる

`close`プロパティを使用して、Modalのヘッダーに表示される閉じるボタン（`false`値）をカスタマイズまたは非表示にします。

[Button](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
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
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
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

### Transition

`transition`プロパティを使用して、モーダルがアニメーション化されているかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### オーバーレイ

`overlay`プロパティを使用して、モーダルにオーバーレイがあるかどうかを制御します。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modal

`modal`プロパティを使用して、Modalが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

::note
`modal`を`false`に設定すると、オーバーレイは自動的に無効になり、外部コンテンツはインタラクティブになります。
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

###  Dismissible

`dismissible`プロパティを使用して、Modalの外側をクリックしたりescapeを押したりしたときにDismissibleかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがクローズしようとすると発行されます。
::

::tip
`modal: false`と`dismissible: false`を組み合わせると、Modalの背景を閉じずにインタラクティブにすることができます。
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### スクロール可能badge{label="4.2+" class="align-text-top"}

`scrollable`プロパティを使用して、モーダルのコンテンツをオーバーレイ内でスクロールできるようにします。

::warning
スクロールにオーバーレイが必要なため、`modal: false`は互換性がなく、`overlay: false`は背景を削除するだけです。
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
オペレーティングシステムによってはスクロールバーをクリックすると意図せずダイアログが閉じてしまう[known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay)があります。
::

### フルスクリーン

`fullscreen`プロパティを使用してModalをフルスクリーンにします。

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
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

`unmount-on-hide`プロパティを使用して、Modalのコンテンツがクローズされたときにアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
DOMを調べると、Modalのコンテンツが閉じている間でもレンダリングされていることがわかります。
::

::tip
`portal`プロパティが`false`に設定されている場合、コンテンツもサーバー上でレンダリングされます。これはSSR中に開いているModalをページ読み込み時にフラッシュなしでレンダリングしたり、SEOのためにコンテンツを公開したりするのに便利です。
::

## 例

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'modal-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してモーダルを切り替えることができます。
::

::tip
これにより、トリガーをモーダルの外側に移動したり、完全に削除したりできます。
::

### プログラムの使用法

[`useOverlay`](/docs/composables/use-overlay)コンポーザブルを使用して、プログラムでModalを開くことができます。

::warning
[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)コンポーネントを使用する[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。
::

まず、プログラムで開くモーダルコンポーネントを作成します。

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
モーダルがクローズまたは却下されたときに`close`イベントを発行しています。`close`イベントを通じて任意のデータを発行でき、そのデータが`open()`の解決された値になります。Promiseが解決されるためには、イベントを発行する必要があります。
::

次に、アプリで使用します。

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
`emit('close')`を出力することで、モーダルコンポーネント内でモーダルを閉じることができます。
::

### Nestedモーダル

お互いにモーダルをネストできます。

::component-example
---
name: 'modal-nested-example'
---
::

### フッタースロット付き

`#footer`スロットを使用して、Modal本体の後にコンテンツを追加します。

::component-example
---
name: 'modal-footer-slot-example'
---
::

### Withコマンドパレット

[CommandPalette](/docs/components/command-palette)コンポーネントをModalのコンテンツ内で使用できます。

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
この例では`useLazyFetch`と`immediate: false`を使用して、Modalが開いたときにのみデータをフェッチします。
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
