---
description: トリガー要素の周りに浮かぶ非モーダルダイアログ。
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: ホバーカード
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: ポップオーバー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## 使用法

ポップオーバーのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、ポップオーバーが開いたときに表示されるコンテンツを追加します。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Mode

ポップオーバーのモードを変更するには、`mode`プロパティを使用します。デフォルトは`click`です。

::tip
`hover`モードでは、ユーザーがタッチデバイスのトリガーをタップしてポップオーバーを切り替えられるように`enable-touch`プロパティを設定するか、タップするトリガーに`click`モードを使用します。
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
`hover`モードを使用する場合、[`Popover`](https://reka-ui.com/docs/components/popover)の代わりにReka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card)コンポーネントが使用されます。
::

### Delay

`hover`モードを使用する場合、`open-delay`と`close-delay`プロップを使用して、ポップオーバーを開くか閉じる前のディレイを制御できます。

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### コンテンツ

`content`プロパティを使用して、`align`や`side`など、Popoverコンテンツのレンダリング方法を制御します。

::component-code
---
prettier: true
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  content:
    align: center
    side: bottom
    sideOffset: 8
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Arrow

`arrow`プロパティを使用して、ポップオーバーに矢印を表示します。

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal

`modal`プロパティを使用して、Popoverが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`false`です。

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

###  Dismissible

`dismissible`プロパティを使用して、ポップオーバーの外側をクリックするか、escapeを押したときにポップオーバーを拒否するかどうかを制御します。デフォルトは`true`です。

::note
`close:prevent`イベントは、ユーザーがクローズしようとすると発行されます。
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## 例

###  Controlオープンステート

オープン状態を制御するには、`default-open`プロパティまたは`v-model:open`ディレクティブを使用します。

::component-example
---
name: 'popover-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してポップオーバーを切り替えることができます。
::

### Withコマンドパレット

Popoverのコンテンツ内で[ CommandPalette](/docs/components/command-palette)コンポーネントを使用できます。

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### 次のカーソルで

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)プロパティを使用して、要素にカーソルを合わせるとポップオーバーができます。

::component-example
---
name: 'popover-cursor-example'
---
::

### アンカースロット付

`#anchor`スロットを使用して、ポップオーバーをカスタム要素に対して配置できます。

::warning
このスロットは`mode`が`click`の場合にのみ動作します。
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

::note
なぜなら、Reka UIは[`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props)に対してこれを公開し、[`HoverCard`](https://reka-ui.com/docs/components/hover-card)に対しては公開しないからです。
::

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
