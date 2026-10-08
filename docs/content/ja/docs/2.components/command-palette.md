---
title: コマンドパレット
description: 効率的なファジィマッチングのためのFuse.jsによる全文検索機能を備えたコマンドパレット。
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

## 使用法

CommandPaletteの値を制御するには`v-model`ディレクティブを使用し、状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - グループ
  -  modelValue
  - クラス
外部
  - グループ
  -  modelValue
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  modelValue {}
  オートフォーカスfalse
  グループ
    -  id 'users'
      label 'ユーザー'
      アイテム
        -  label 'ベンジャミン·カナック'
          接尾辞「ベンジャマカナック」
          アバター
            https//github.com/benjamincanac.png
            読み込み怠惰
        -  label 'Hugo Richard'
          サフィックス'HugoRCD'
          アバター
            https//github.com/HugoRCD.png
            読み込み怠惰
        -  label 'セバスチャン·ショパン'
          サフィックス'atinux'
          アバター
            https//github.com/atinux.png
            読み込み怠惰
        -  label 'Romain Hamel'
          サフィックス'romhml'
          アバター
            https//github.com/romhml.png
            読み込み怠惰
        -  label 'Sandro Circi'
          サフィックス'sandros94'
          アバター
            https//github.com/sandros94.png
            読み込み怠惰
        -  label 'Jakub Mich á lek'
          サフィックス：「J—Michalek」
          アバター
            https//github.com/J—Michalek.png
            読み込み怠惰
        -  label 'Alex'
          サフィックス：「ハイワックス」
          アバター
            https//github.com/hywax.png
            読み込み怠惰
        -  label 'マキシム·パウバート'
          サフィックス'maximepvrt'
          アバター
            src 'https//github.com/maximepvrt.png'
            読み込み怠惰
  クラス'flex 1 h—80'
---
::

::tip{to="#control-selected-items"}
`@update:model-value`イベントを使用して、選択した項目をリッスンすることもできます。
::

### グループ

CommandPaletteコンポーネントは、ユーザーが入力した関連性によって一致するコマンドをグループ化し、ランク付けします。効率的なコマンド検出のために、動的で即座に検索結果を提供します。`groups`プロパティを持つオブジェクトの配列として使用します。

- `id: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `items?: CommandPaletteItem[]`{lang="ts-type"}
- [`ignoreFilter?: boolean`{lang="ts-type"}](#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
- `highlightedIcon?: string`{lang="ts-type"}

::caution
各グループに`id`を指定する必要があります。
::

各グループには、コマンドを定義するオブジェクトの`items`配列が含まれます。各アイテムは以下のプロパティを持つことができます。

- `prefix?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `suffix?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `chip?: ChipProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `placeholder?: string`{lang="ts-type"}
- `children?: CommandPaletteItem[]`{lang="ts-type"}
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - グループ
  -  modelValue
  - クラス
外部
  - グループ
  -  modelValue
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  modelValue {}
  オートフォーカスfalse
  グループ
    -  id 'users'
      label 'ユーザー'
      アイテム
        -  label 'Benjamin Canac'
          接尾辞「ベンジャマカナック」
          アバター
            https//github.com/benjamincanac.png
            読み込み怠惰
        -  label 'Hugo Richard'
          サフィックス'HugoRCD'
          アバター
            https//github.com/HugoRCD.png
            読み込み怠惰
        -  label 'セバスチャン·ショパン'
          サフィックス'atinux'
          アバター
            https//github.com/atinux.png
            読み込み怠惰
        -  label 'Romain Hamel'
          サフィックス'romhml'
          アバター
            https//github.com/romhml.png
            読み込み怠惰
        -  label 'Sandro Circi'
          サフィックス'sandros94'
          アバター
            https//github.com/sandros94.png
            読み込み怠惰
        -  label 'Jakub Mich á lek'
          サフィックス：「J—Michalek」
          アバター
            https//github.com/J—Michalek.png
            読み込み怠惰
        -  label 'Alex'
          サフィックス：「ハイワックス」
          アバター
            https//github.com/hywax.png
            読み込み怠惰
        -  label 'マキシム·パウベール'
          サフィックス'maximepvrt'
          アバター
            src 'https//github.com/maximepvrt.png'
            読み込み怠惰
  クラス'flex—1'
---
::

::tip{to="#with-children-in-items"}
各項目は、以下のプロパティを持つオブジェクトの`children`配列を取り、サブメニューを作成できます。
::

### 複数

`multiple`プロパティを使用して複数選択を許可します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - グループ
  -  modelValue
  - 複数
  - クラス
外部
  - グループ
  -  modelValue
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  複数true
  オートフォーカスfalse
  modelValue []
  グループ
    -  id 'users'
      label 'ユーザー'
      アイテム
        -  label 'Benjamin Canac'
          接尾辞「ベンジャマカナック」
          アバター
            https//github.com/benjamincanac.png
            読み込み怠惰
        -  label 'Hugo Richard'
          サフィックス'HugoRCD'
          アバター
            https//github.com/HugoRCD.png
            読み込み怠惰
        -  label 'セバスチャン·ショパン'
          サフィックス'atinux'
          アバター
            https//github.com/atinux.png
            読み込み怠惰
        -  label 'Romain Hamel'
          サフィックス'romhml'
          アバター
            https//github.com/romhml.png
            読み込み怠惰
        -  label 'Sandro Circi'
          サフィックス'sandros94'
          アバター
            https//github.com/sandros94.png
            読み込み怠惰
        -  label 'Jakub Mich á lek'
          サフィックス：「J—Michalek」
          アバター
            https//github.com/J—Michalek.png
            読み込み怠惰
        -  label 'Alex'
          サフィックス：「ハイワックス」
          アバター
            https//github.com/hywax.png
            読み込み怠惰
        -  label 'Maxime Pauvert
          サフィックス'maximepvrt'
          アバター
            src 'https//github.com/maximepvrt.png'
            読み込み怠惰
  クラス'flex—1'
---
::

::caution
`default-value` propまたは`v-model`ディレクティブに配列を渡してください。
::

### プレースホルダー

プレースホルダーテキストを変更するには、`placeholder`プロパティを使用します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  プレースホルダー 'アプリを検索...'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label '地図'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

### サイズbadge {label="4.4+" class="align-text-top"}

`size`プロパティを使用して、CommandPaletteのサイズを変更します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  サイズ'xl'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

### アイコン

`icon`プロパティを使用して、入力[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-search`です。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  アイコン'i—lucide—box'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label '地図'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.search`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.search`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 選択したアイコン

`selected-icon`プロパティを使用して、選択したアイテム[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-check`です。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - グループ
  -  modelValue
  - 複数
  - クラス
外部
  - グループ
  -  modelValue
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  複数true
  オートフォーカスfalse
  modelValue
    -  label 'ベンジャミンカナック'
      接尾辞「ベンジャマカナック」
      アバター
        https//github.com/benjamincanac.png
        読み込み怠惰
  selectedIcon 'i—lucide—circle—check'
  グループ
    -  id 'users'
      label 'ユーザー'
      アイテム
        -  label 'ベンジャミンカナック'
          接尾辞「ベンジャマカナック」
          アバター
            https//github.com/benjamincanac.png
            読み込み怠惰
        -  label 'Hugo Richard'
          サフィックス'HugoRCD'
          アバター
            https//github.com/HugoRCD.png
            読み込み怠惰
        -  label 'セバスチャン·ショパン'
          サフィックス'atinux'
          アバター
            https//github.com/atinux.png
            読み込み怠惰
        -  label 'Romain Hamel'
          サフィックス'romhml'
          アバター
            https//github.com/romhml.png
            読み込み怠惰
        -  label 'Sandro Circi'
          サフィックス'sandros94'
          アバター
            https//github.com/sandros94.png
            読み込み怠惰
        -  label 'Jakub Mich á lek'
          サフィックス：「J—Michalek」
          アバター
            https//github.com/J—Michalek.png
            読み込み怠惰
        -  label 'Alex'
          サフィックス：「ハイワックス」
          アバター
            https//github.com/hywax.png
            読み込み怠惰
        -  label 'マキシム·パウベール'
          サフィックス'maximepvrt'
          アバター
            src 'https//github.com/maximepvrt.png'
            読み込み怠惰
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.check`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.check`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### トレーリングアイコン

アイテムに子がある場合、`trailing-icon`プロパティを使用して、末尾の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-right`です。

::component-code
---
崩壊真
きれい真
隠す
  - オートフォーカス
無視
  - グループ
  - クラス
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  trailingIcon 'i—lucide—arrow—right'
  グループ
    -  id 'actions'
      アイテム
        -  label 'シェア'
          アイコン'i—lucide—share'
          子供：
            -  label 'Email'
              アイコン'i—lucide—mail'
            -  label 'コピー'
              アイコン'i—lucideコピー'
            -  label 'Link'
              アイコン'i—lucide—link'
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronRight`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronRight`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### ローディング

`loading`プロパティを使用して、CommandPaletteにロードアイコンを表示します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  読み込み真
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  読み込み真
  loadingIcon 'i—lucide—loader'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 閉じる

`close`プロパティを使用して、[ Button ](/docs/components/button)を表示してCommandPaletteを閉じます。

::tip
閉じるボタンをクリックすると`update:open`イベントが発生します。
::

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
  - 閉じる
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  閉じるtrue
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
崩壊真
きれい真
隠す
  - オートフォーカス
無視
  -  close.color
  -  close.variant
  - グループ
  - クラス
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  閉じる
    色プライマリ
    variantアウトライン
    クラス：'rounded—full'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

### 閉じるアイコン

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
  - 閉じる
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  閉じるtrue
  closeIcon 'i—lucide—arrow—right'
  グループ
    -  id 'apps'
      アイテム
        -  label 'カレンダー'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.close`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.close`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### バック

`back`プロパティを使用して、サブメニューに移動するときに表示される戻るボタン`false`値をカスタマイズまたは非表示にします。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
崩壊真
きれい真
隠す
  - オートフォーカス
無視
  -  back.color
  - グループ
  - クラス
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  バック
    色プライマリ
  グループ
    -  id 'actions'
      アイテム
        -  label 'シェア'
          アイコン'i—lucide—share'
          子供：
            -  label 'Email'
              アイコン'i—lucide—mail'
            -  label 'コピー'
              アイコン'i—lucideコピー'
            -  label 'Link'
              アイコン'i—lucide—link'
  クラス'flex—1'
---
::

### バックアイコン

`back-icon`プロパティを使用して、バックボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-arrow-left`です。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - クラス
  - グループ
  - バック
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  戻る真
  backIcon 'i—lucide'
  グループ
    -  id 'actions'
      アイテム
        -  label 'シェア'
          アイコン'i—lucide—share'
          子供：
            -  label 'Email'
              アイコン'i—lucide—mail'
            -  label 'コピー'
              アイコン'i—lucideコピー'
            -  label 'Link'
              アイコン'i—lucide—link'
  クラス'flex—1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.arrowLeft`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.arrowLeft`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 無効

CommandPaletteを無効にするには、`disabled`プロパティを使用します。

::component-code
---
崩壊真
隠す
  - オートフォーカス
無視
  - グループ
  - クラス
外部
  - グループ
externalTypes
  -  CommandPaletteGroup []
クラス'！p—0'
小道具
  オートフォーカスfalse
  無効true
  グループ
    -  id 'apps'
      アイテム
        -  label 'Calendar'
          アイコン'i—lucide—calendar'
        -  label 'Music'
          アイコン'i—lucide—music'
        -  label 'Maps'
          アイコン'i—lucide—map'
  クラス'flex—1'
---
::

## 例

### 制御選択項目

選択した項目を制御するには、`default-value` propまたは`v-model`ディレクティブを使用するか、各項目の`onSelect`フィールドを使用するか、`@update:model-value`イベントを使用します。

::component-example
---
崩壊真
名前'command—palett—select—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::tip
オブジェクト自身の代わりに値として使用する項目のフィールドを選択するには、`value-key`プロパティを使用します。参照の代わりにフィールドでオブジェクトを比較するには、`by`プロパティを使用します。
::

###  Control検索語

`v-model:search-term`ディレクティブを使用して、検索語を制御します。

::component-example
---
崩壊真
名前'command—palet—search—term—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::note
この例では、`@update:model-value`イベントを使用して、項目が選択されたときに検索語をリセットします。
::

### アイテムに子供がいる場合

項目の`children`プロパティを使用して階層メニューを作成できます。項目に子がある場合、自動的にシェブロンアイコンが表示され、サブメニューへのナビゲーションが有効になります。

::component-example
---
崩壊真
きれい真
名前'command—pallet—items—childling—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::note
サブメニューに移動する場合：
- 検索語がリセットされました
- 入力に戻るボタンが表示されます
-  kbd {value="backspace"}キーを押すと前のグループに戻ることができます。
::

### フェッチされたアイテム

APIから項目を取得し、CommandPaletteで使用できます。

::component-example
---
崩壊真
名前'command—pallet—fetch—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、初期レンダリングをブロックすることなくクライアント上でデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。
::

### 無視フィルタ付き

グループの`ignoreFilter`フィールドを`true`に設定すると、内部検索を無効にして独自の検索ロジックを使用できます。

::component-example
---
崩壊真
名前'コマンドパレット—ignore—filter—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。読み込み状態は`pending`と`idle`の両方のステータスをチェックして、フェッチの前と中に読み込みインジケータを表示します。
::

### ポストフィルター付き項目

グループの`postFilter`フィールドを使用して、検索が行われた後に項目をフィルタリングできます。

::component-example
---
崩壊真
名前'command—pallet—post—filter—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::note
入力を開始して、より高いレベルの項目が表示される。
::

### カスタムヒューズ検索

`fuse` propを使用して、[ useFuse ](https://vueuse.org/integrations/useFuse)のオプションをオーバーライドできます。

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
`fuseOptions`は[ Fuse.js ](https://www.fusejs.io/)のオプションで、`resultLimit`は返す結果の最大数、`matchAllWhenSearchEmpty`は検索語が空の場合にすべての項目にマッチするブール値です。
::

たとえば、`{ fuseOptions: { includeMatches: true } }`{lang="ts-type"}を設定して、項目内の検索語をハイライトすることができます。

::component-example
---
崩壊真
名前'command—pallet—fuse—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

### 仮想化の場合：badge {label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、ブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして大きなリストの仮想化を有効にします。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
有効にすると、Reka UIの制限により、すべてのグループが1つのリストにフラット化されます。
::

::component-example
---
崩壊真
名前'command—pallet—virtualize—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

### ポップオーバー内

CommandPaletteコンポーネントは、[ Popover ](/docs/components/popover)のコンテンツ内で使用できます。

::component-example
---
崩壊真
名前'popover—command—palette—example'
小道具
  オートフォーカスfalse
---
::

### モード内

CommandPaletteコンポーネントは、[ Modal ](/docs/components/modal)のコンテンツ内で使用できます。

::component-example
---
崩壊真
名前'modal—command—palette—example'
小道具
  オートフォーカスfalse
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、Modalが開いたときにのみデータを取得します。
::

### 引き出し内

CommandPaletteコンポーネントは、[ Drawer ](/docs/components/drawer)のコンテンツ内で使用できます。

::component-example
---
崩壊真
名前'drawer—command—palette—example'
小道具
  オートフォーカスfalse
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、Drawerが開いたときにのみデータを取得します。
::

### オープン状態を聞く

`close` propを使用すると、ボタンがクリックされたときに`update:open`イベントをリッスンできます。

::component-example
---
崩壊真
名前'command—pallet—open—example'
小道具
  オートフォーカスfalse
---
::

::note
これは、たとえば[`Modal`](/docs/components/modal)の中でCommandPaletteを使用する場合に便利です。
::

### フッタースロット付き

`#footer`スロットを使用して、キーボードショートカットのヘルプや追加アクションなど、CommandPaletteの下部にカスタムコンテンツを追加します。

::component-example
---
崩壊真
名前'command—pallet—footer—slot—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

### カスタムスロット付き

`slot`プロパティを使用して、特定の項目またはグループをカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

- `#{{ group.slot }}`{lang="ts-type"}
- `#{{ group.slot }}-leading`{lang="ts-type"}
- `#{{ group.slot }}-label`{lang="ts-type"}
- `#{{ group.slot }}-trailing`{lang="ts-type"}

::component-example
---
崩壊真
名前'command—pallet—custom—slot—example'
クラス'！p—0'
小道具
  オートフォーカスfalse
---
::

::tip{to="#slots"}
また、`#item`、`#item-leading`、`#item-label`、および`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
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
