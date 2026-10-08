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

[ Button ](/docs/components/button)またはCollapsibleのデフォルトスロットにあるその他のコンポーネントを使用します。

次に、`#content`スロットを使用して、Collapsibleが開いたときに表示されるコンテンツを追加します。

::component-code
---
きれい真
無視
  - クラス
小道具
  クラス'フレックスコルギャップ—2 w—48'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  内容：|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#コンテンツ
placeholder {class="h-48"}
::

### アンマウント

`unmount-on-hide`プロパティを使用して、Collapsibleが折りたたまれたときにコンテンツがアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
きれい真
無視
  - クラス
小道具
  unmountOnHide false
  クラス'フレックスコルギャップ—2 w—48'
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  内容：|

    <Placeholder class="h-48" />
---

uボタン{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#コンテンツ
placeholder {class="h-48"}
::

::note
DOMを検査して、レンダリングされているコンテンツを確認できます。
::

### 無効

`disabled`プロパティを使用して、Collapsibleを無効にします。

::component-code
---
きれい真
無視
  - クラス
小道具
  クラス'フレックスコルギャップ—2 w—48'
  無効true
スロット
  デフォルト|

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  内容：|

    <Placeholder class="h-48" />
---

u—button {label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#コンテンツ
placeholder {class="h-48"}
::

## 例

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
名前'collapsible—open—example'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してCollapsibleを切り替えることができます。
::

::tip
これにより、トリガーをCollapsibleの外側に移動したり、完全に削除したりできます。
::

### 回転アイコン付き

以下は、折りたたみ式の開いた状態を示すボタン内の回転アイコンの例です。

::component-example
---
名前'collapsible—icon—example'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

###  Emits

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
