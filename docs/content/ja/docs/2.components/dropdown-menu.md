---
title: ドロップダウンメニュー
description: 要素をクリックしたときのアクションを表示するメニュー。
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: ドロップダウンメニュー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## 使用法

[ Button ](/docs/components/button)またはDropdownMenuのデフォルトスロットにあるその他のコンポーネントを使用します。

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
  -  DropdownMenuItem [][]
小道具
  アイテム
    - —ラベルベンジャミン
        アバター
          https//github.com/benjamincanac.png
          読み込み怠惰
        タイプラベル
    - —ラベルプロフィール
        アイコンi—lucide—user
      -  label請求
        アイコンi—lucideクレジットカード
      -  label設定
        アイコンi—lucide—cog
        kbds
          - ''
      -  labelキーボードショートカット
        アイコンi—lucideモニター
    - —ラベルチーム
        アイコンi—lucide—users
        フィルター
          プレースホルダー 'メンバーを検索...'
        子供：
          - —ラベルbenjamincanac
              アバター
                https//github.com/benjamincanac.png
                読み込み怠惰
            -  label HugoRCD
              アバター
                https//github.com/HugoRCD.png
                読み込み 怠惰
            - ラベル atinux
              アバター
                https//github.com/atinux.png
                読み込み 怠惰
            - label romhml
              アバター
                https//github.com/romhml.png
                読み込み 怠惰
            - label sandros94
              アバター
                https//github.com/sandros94.png
                読み込み 怠惰
            - label J-Michalek
              アバター
                https//github.com/J-Michalek.png
                読み込み 怠惰
            - label hywax
              アバター
                https//github.com/hywax.png
                読み込み 怠惰
      - label ユーザー を 招待
        アイコン i-lucide-user-plus
        子供 ：
          - - ラベル 電子 メール
              アイコン i-lucide-mail
            - label メッセージ
              アイコン i-lucide メッセージ スクエア
          - - ラベル もっと 見る
              アイコン i-lucide-circle-plus
              子供 ：
                - label Slack から インポート
                  アイコン i-simple-icons-slack
                  “ https//”slack.com'
                  ターゲット _blank
                - label Trello から インポート
                  アイコン i-simple-icons trello
                - label Asana から インポート
                  アイコン i-simple-icons asana
      - label 新 チーム
        アイコンi—lucide—plus
        kbds
          -  meta
          -  n
    - —ラベルGitHub
        アイコンi—simple—icons—github
        「https//github.com/nuxt/ui」
        ターゲット_blank
      -  labelサポート
        アイコンi—lucide—ライフブイ
        to '/docs/components/ドロップダウンメニュー'
      -  label API
        アイコンi—lucideクラウド
        無効true
    - —ラベルログアウト
        アイコンi—lucideログアウト
        色エラー
        kbds
          - シフト
          - メタ
          お問い合わせ：-  q
スロット
  デフォルト|

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

u—button {icon="i-lucide-menu" color="neutral" variant="outline"}
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
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"}
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"}
- `ignoreFilter?: boolean`{lang="ts-type"}
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
  -  DropdownMenuItem [][]
小道具
  アイテム
    - —ラベルベンジャミン
        アバター
          https//github.com/benjamincanac.png
          読み込み怠惰
        タイプラベル
    - —ラベルプロフィール
        アイコンi—lucide—user
      -  label請求
        アイコンi—lucideクレジットカード
      -  label設定
        アイコンi—lucide—cog
        kbds
          - ''
      -  labelキーボードショートカット
        アイコンi—lucideモニター
    - —ラベルチーム
        アイコンi—lucide—users
      -  labelユーザーを招待
        アイコンi—lucide—user—plus
        子供：
          - —ラベルメールアドレス
              アイコンi—lucide—mail
            -  labelメッセージ
              アイコンi—lucideメッセージスクエア
          - - ラベル もっと 見る
              アイコン i-lucide-circle-plus
              子供 ：
                - label Slack から インポート
                  アイコン i-simple-icons-slack
                  “ https//”slack.com'
                  ターゲット _blank
                - label Trello から インポート
                  アイコン i-simple-icons trello
                - label Asana から インポート
                  アイコン i-simple-icons asana
      - label 新 チーム
        アイコン i-lucide-plus
        kbds
          - メタ
          - n
    - - ラベル GitHub
        アイコン i-simple-icons-github
        “ https//github.com/nuxt/ui ”
        ターゲット _blank
      - label サポート
        アイコン i- lucide - ライフ ブイ
        to '/docs/components/ドロップダウン メニュー '
      - label API
        アイコン i-lucide クラウド
        無効 true
    - - ラベル ログアウト
        アイコン i-lucide ログアウト
        kbds
          - シフト
          - メタ
          - q
  UI
    内容 ' w-48 '
スロット
  デフォルト|

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
`items`プロ パティ に 配列 の 配列 を 渡し て 、 項目 の 分離 グループ を 作成 する こと も でき ます 。
::

::tip
各 アイテム は 、`items`プロ パティ と 同じ プロ パティ を 持つ オブジェクト の`children`配列 を 取り 、 ネスト さ れ た メニュー を 作成 し 、`open`、`defaultOpen`、 および`content`プロ パティ を 使用 し て 制御 でき ます 。
::

### コンテンツ

`content`プロパティを使用して、DropdownMenuコンテンツのレンダリング方法を制御します。たとえば、`align`や`side`などです。

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
  -  DropdownMenuItem []
アイテム
  content.align:
    -  start
    - センター
    -  end
  content.side:
    - 右
    - 左
    - トップ
    -  bottom
小道具
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
  内容：
    align開始
    側面底
    sideOffset 8
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

uボタン{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### フィルター badge {label="4.6+" class="align-text-top"}

`filter`プロパティを使用して、DropdownMenu内にフィルター入力を表示します。デフォルトは`false`です。

::note{to="#with-ignore-filter"}
`ignore-filter`プロパティを使用して内部検索を無効にし、独自の検索ロジックを使用します。
::

::note{to="#with-filter-fields"}
フィルター対象フィールドを指定するには、`filter-fields` propを使用します。デフォルトでは、`labelKey` propを使用します。
::

[ Input ](/docs/components/input)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  -  filter.icon
  -  content.align
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  DropdownMenuItem []
小道具
  フィルター
    アイコンi—lucide—search
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
    -  labelチーム
      アイコンi—lucide—users
    -  labelユーザーを招待
      アイコンi—lucide—user—plus
    -  label新チーム
      アイコンi—lucide—plus
  内容：
    align開始
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

uボタン{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
`children`が付いている項目の`filter`フィールドを使用して、特定のサブメニューでフィルターを有効にすることもできます。
::

### アロー

`arrow`プロパティを使用して、DropdownMenuに矢印を表示します。

::component-code
---
きれい真
崩壊真
無視
  -  arrow
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  DropdownMenuItem []
小道具
  矢印true
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

u—button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### サイズ

`size`プロパティを使用して、DropdownMenuのサイズを制御します。

::component-code
---
きれい真
崩壊真
無視
  - アイテム
  -  content.align
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  -  DropdownMenuItem []
小道具
  サイズXL
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
  内容：
    align開始
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

u—button {size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size` propはButtonにプロキシされません。自分で設定する必要があります。
::

::note
同じサイズを使用すると、DropdownMenuアイテムはボタンと完全に整列します。
::

###  Modal

`modal`プロパティを使用して、DropdownMenuが外部コンテンツとのインタラクションをブロックするかどうかを制御します。デフォルトは`true`です。

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
  -  DropdownMenuItem []
小道具
  モーダルfalse
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

uボタン{label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 無効

`disabled`プロパティを使用して、DropdownMenuを無効にします。

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
  -  DropdownMenuItem []
小道具
  無効true
  アイテム
    -  labelプロフィール
      アイコンi—lucide—user
    -  label請求
      アイコンi—lucideクレジットカード
    -  label設定
      アイコンi—lucide—cog
  UI
    内容'w—48'
スロット
  デフォルト|

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

u—button {label="Open" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## 例

### チェックボックス項目付き

`type`プロパティを`checkbox`とともに使用し、`checked`/`onUpdateChecked`プロパティを使用して項目のチェック状態を制御できます。

::component-example
---
崩壊真
名前'ドロップダウンメニューチェックボックス項目例'
---
::

::note
アイテムの`checked`状態に対する反応性を確保するために、`items`配列を`computed`の中でラップすることをお勧めします。
::

### カラーアイテム付き

`color`プロパティを使用して、特定の項目を色でハイライトできます。

::component-example
---
崩壊真
名前'ドロップダウンメニューカラーアイテム例'
---
::

### フィルター項目付き：バッジ{label="4.6+" class="align-text-top"}

`children`を含む項目の@@プロパティを使用して、サブメニュー内にフィルター入力を表示できます。

::component-example
---
崩壊真
名前'ドロップダウンメニューフィルターアイテムの例'
---
::

###  Controlオープンステート

`default-open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。

::component-example
---
崩壊真
名前'ドロップダウンメニューオープン例'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してDropdownMenuを切り替えることができます。
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
名前'ドロップダウンメニューカスタムスロットサンプル'
---
::

::tip{to="#slots"}
また、`#item`、`#item-leading`、`#item-label`、および`#item-trailing`スロットを使用して、すべての項目をカスタマイズすることもできます。
::

### アイテムのスイッチ付き

`slot`プロパティを`#{{ slot }}-trailing`スロットとともに使用して、アイテム内の[ Switch ](/docs/components/switch)をレンダリングできます。

::component-example
---
崩壊真
名前'ドロップダウンメニュー—スイッチアイテム—例'
---
::

### 無視フィルタ付き：badge {label="4.6+" class="align-text-top"}

`filter` propまたは`children`を含む項目の`filter`フィールドを使用する場合、`ignore-filter` propを`true`に設定して内部検索を無効にし、独自の検索ロジックを使用できます。

::component-example
---
崩壊真
名前'ドロップダウンメニュー—ignore—filter—example'
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。フェッチは`immediate: false`で延期されるため、メニューが開くまでリクエストは行われません。
::

### フィルターフィールド付き：badge {label="4.6+" class="align-text-top"}

`filter` propまたは`filter`フィールドを`children`を含む項目で使用する場合、`filter-fields` propにフィルターをかけるフィールドの配列を設定できます。デフォルトは`[labelKey]`です。

::component-example
---
崩壊真
名前'ドロップダウンメニューフィルターフィールドの例'
---
::

### トリガーコンテンツ幅付き

`ui.content`スロットに`w-(--reka-dropdown-menu-trigger-width)`クラスを追加することで、コンテンツをボタンの幅いっぱいに展開できます。

::component-example
---
崩壊真
名前'ドロップダウンメニューの内容幅の例'
---
::

::tip
また、`app.config.ts`でコンテンツの幅をグローバルに変更することもできます。

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### 抽出ショートカット

[ extractShortcuts ](/docs/composables/extract-shortcuts))ユーティリティを使用して、メニュー項目から自動的にショートカットを定義します。このユーティリティは、ショートカットを再帰的に抽出し、[ defineShortcuts ](/docs/composables/define-shortcuts)と互換性のあるオブジェクトを返します。

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
この例では、kbd {value="meta"} kbd {value="E" class="ms-px"} kbd {value="meta"} kbd {value="I" class="ms-px"} kbd {value="meta"} kbd {value="N" class="ms-px"}は、対応するアイテムの`select`関数をトリガーします。
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
