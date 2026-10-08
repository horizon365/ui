---
title: コンテキストメニュー
description: 要素を右クリックしたときのアクションを表示するメニュー。
category: overlay
keywords:
  - right click menu
links:
  - label: コンテキストメニュー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

## 使用法

ContextMenuのデフォルトスロットで好きなものを使用し、右クリックしてメニューを表示します。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  ContextMenuItem [][]
小道具
  アイテム
    - —ラベル外観
        子供：
          -  labelシステム
            アイコンi—lucideモニター
          -  labelライト
            アイコンi—lucide太陽
          -  labelダーク
            アイコンi—lucide月
    - —ラベルShow Sidebar
        kbds
          -  meta
          お問い合わせ_- 
      -  labelツールバーを表示
        kbds
          - シフト
          - メタ
          -  d
      -  label折りたたみピン留めタブ
        無効true
    - —labelページを更新
      -  label：Cookieの消去とリフレッシュ
      -  labelキャッシュの消去とリフレッシュ
      -  typeセパレーター
      -  label開発者
        子供：
          - —ラベルソースを表示
              kbds
                - メタ
                - シフト
                -  u
            -  label開発ツール
              kbds
                - オプション
                - メタ
                -  i
            -  label：要素を検査する
              kbds
                - オプション
                - メタ
                -  c
          - —ラベルJavaScriptコンソール
              kbds
                - オプション
                - メタ
                日本語
スロット
  デフォルト|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右クリックはこちら
    </div>
---

dv {class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右クリック]
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  ContextMenuItem [][]
小道具
  アイテム
    - —ラベル外観
        子供：
          -  labelシステム
            アイコンi—lucideモニター
          -  labelライト
            アイコンi—lucide太陽
          -  labelダーク
            アイコンi—lucide月
    - —ラベルサイドバーを表示
        kbds
          - メタ
          -  s
      -  labelツールバーを表示
        kbds
          - シフト
          - メタ
          -  d
      -  label折りたたみピン留めタブ
        無効true
    - —labelページを更新
      -  label：Cookieの消去とリフレッシュ
      -  label：キャッシュの消去とリフレッシュ
      - タイプセパレーター
      -  label開発者
        子供：
          - —ラベルソースを表示
              kbds
                - メタ
                - シフト
                -  u
            -  label開発ツール
              kbds
                - オプション
                - メタ
                -  i
            -  label：要素の検査
              kbds
                - オプション
                - メタ
                -  c
          - —ラベルJavaScriptコンソール
              kbds
                - オプション
                - メタ
                -  j
  UI
    内容'w—48'
スロット
  デフォルト|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右クリックはこちら
    </div>
---

dv {class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右クリック]
::

::note
`items`プロパティに配列の配列を渡して、項目の分離グループを作成することもできます。
::

::tip
各アイテムは、`items`プロパティと同じプロパティを持つオブジェクトの`children`配列を取り、ネストされたメニューを作成し、`open`、`defaultOpen`、および`content`プロパティを使用して制御できます。
::

### サイズ

ContextMenuのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  ContextMenuItem []
小道具
  サイズXL
  アイテム
    -  labelシステム
      アイコンi—lucideモニター
    -  labelライト
      アイコンi—lucide太陽
    -  labelダーク
      アイコンi—lucide月
  UI
    内容'w—48'
スロット
  デフォルト|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右クリックはこちら
    </div>
---

dv {class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右クリック]
::

###  Modal

ContextMenuが外部コンテンツとのインタラクションをブロックするかどうかを制御するには、`modal`プロパティを使用します。デフォルトは`true`です。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  ContextMenuItem []
小道具
  モーダルfalse
  アイテム
    -  labelシステム
      アイコンi—lucideモニター
    -  labelライト
      アイコンi—lucide太陽
    -  labelダーク
      アイコンi—lucide月
  UI
    内容'w—48'
スロット
  デフォルト|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右クリックはこちら
    </div>
---

dv {class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[右クリック]
::


### 無効

ContextMenuを無効にするには、`disabled`プロパティを使用します。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  ContextMenuItem []
小道具
  無効true
  アイテム
    -  labelシステム
      アイコンi—lucideモニター
    -  labelライト
      アイコンi—lucide太陽
    -  labelダーク
      アイコンi—lucide月
  UI
    内容'w—48'
スロット
  デフォルト|

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      右クリックはこちら
    </div>
---

dv {class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[ここを右クリック]
::

## 例

### チェックボックス項目付き

`type`プロパティを`checkbox`とともに使用し、`checked`/`onUpdateChecked`プロパティを使用して項目のチェック状態を制御できます。

::component-example
---
崩壊真
名前'context—menu—checkbox—items—example'
---
::

::note
アイテムの`checked`状態に対する反応性を確保するために、`items`配列を`computed`の中でラップすることをお勧めします。
::

### カラーアイテム付き

`color`プロパティを使用して、特定のアイテムを色でハイライトすることができます。

::component-example
---
崩壊真
名前'context—menu—color—items—example'
---
::

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
崩壊真
名前'context—menu—custom—slot—example'
---
::

::tip{to="#slots"}
また、`#item`、`#item-leading`、`#item-label`、および`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
::

### 抽出ショートカット

[ extractShortcuts ](/docs/composables/extract-shortcuts)ユーティリティを使用して、メニュー項目から`kbds`プロパティでショートカットを自動的に定義します。ショートカットを再帰的に抽出し、[ defineShortcuts ](/docs/composables/define-shortcuts)と互換性のあるオブジェクトを返します。

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
この例では、kbd {value="meta"} kbd {value="S" class="ms-px"} kbd {value="shift"} kbd {value="meta" class="ms-px"} kbd {value="D" class="ms-px"} kbd {value="option"} kbd {value="meta" class="ms-px"} kbd {value="U" class="ms-px"} kbd {value="option"} kbd {value="meta" class="ms-px"} kbd {value="I" class="ms-px"} kbd {value="option"} kbd {value="meta" class="ms-px"} kbd {value="C" class="ms-px"} and kbd {value="option"} kbd {value="meta" class="ms-px"} kbd {value="J" class="ms-px"}は、対応するアイテムの`select`関数をトリガーします。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
