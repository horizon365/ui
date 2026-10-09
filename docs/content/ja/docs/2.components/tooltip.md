---
description: 要素にマウスオーバーすると情報が表示されるポップアップ。
category: overlay
keywords:
  - hint
links:
  - label: ツールチップ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## 使用法

ツールチップのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

::warning
Reka UIの[`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider)コンポーネントを使用する[`App`](/docs/components/app)コンポーネントでアプリをラップしてください。
::

::tip{to="/docs/components/app#props"}
Tooltipをグローバルに設定する方法は、`App`コンポーネント`tooltip`プロパティを確認できます。
::

### Text

`text`プロパティを使用して、Tooltipの内容を設定します。

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

### Kbds

`kbds`プロパティを使用して、[Kbd](/docs/components/kbd)コンポーネントをTooltipでレンダリングします。

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

::tip
macOSでは`⌘`、その他のプラットフォームでは`Ctrl`と表示される`meta`のような特別なキーを使用できます。
::

### Delay

`delay-duration`プロパティを使用して、Tooltipが表示される前の遅延を変更します。例えば、`0`に設定することで、ツールチップを即座に表示させることができます。

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

::tip
これは[`App`](/docs/components/app)コンポーネントの`tooltip.delayDuration`オプションでグローバルに設定できます。
::

### コンテンツ

`content`プロパティを使用して、`align`や`side`など、Tooltipコンテンツのレンダリング方法を制御します。

::tip
これは、[`App`](/docs/components/app)コンポーネントの`tooltip.content`オプションでグローバルに設定できます。
::

::component-code
---
prettier: true
ignore:
  - text
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
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

### Arrow

`arrow`プロパティを使用して、ツールチップに矢印を表示します。

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

### 無効

ツールチップを無効にするには、`disabled`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="オープン" color="neutral" variant="subtle"}
::

## 例

### Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'tooltip-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してツールチップを切り替えることができます。
::

### 次のカーソルで

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)プロパティを使用して、要素にカーソルを合わせるとツールチップをカーソルに追従させることができます。

::component-example
---
name: 'tooltip-cursor-example'
---
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
