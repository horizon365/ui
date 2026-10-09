---
description: コンテンツの表示を切り替える折りたたみ可能な要素。
category: element
keywords:
  - disclosure
  - expand
links:
  - label: 折りたたみ式
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## 使用法

Collapsibleのデフォルトスロットにある[Button](/docs/components/button)またはその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Collapsibleが開いたときに表示されるコンテンツを追加します。

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### アンマウント

`unmount-on-hide`プロパティを使用して、Collapsibleが折りたたまれたときにコンテンツがアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
DOMを検査して、レンダリングされているコンテンツを確認できます。
::

### 無効

`disabled`プロパティを使用してCollapsibleを無効にします。

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="オープン" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## 例

###  Controlオープンステート

オープン状態は`default-open`プロパティまたは`v-model:open`ディレクティブを使用して制御できます。

::component-example
---
name: 'collapsible-open-example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押して折りたたみを切り替えることができます。
::

::tip
これにより、トリガーをCollapsibleの外側に移動したり、完全に削除したりできます。
::

### 回転アイコン付き

以下は、折りたたみ式の開いた状態を示すボタン内の回転アイコンの例です。

::component-example
---
name: 'collapsible-icon-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

## テーマ

:component-theme

## Changelog

:component-changelog
