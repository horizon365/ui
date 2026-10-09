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

`v-model`ディレクティブを使用してCommandPaletteの値を制御し、状態を制御する必要がない場合は`default-value`プロパティを使用して初期値を設定します。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
`@update:model-value`イベントを使用して、選択したアイテムをリッスンすることもできます。
::

### Groups

CommandPaletteコンポーネントは、ユーザーのタイプと関連性によって一致するコマンドをグループ化し、ランク付けします。効率的なコマンド検出のために、動的で即座に検索結果を提供します。`groups`プロパティを持つオブジェクトの配列として使用します。

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

各グループには、コマンドを定義するオブジェクトの`items`配列が含まれています。各アイテムには以下のプロパティがあります。

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

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::tip{to="#with-children-in-items"}
各アイテムは、以下のプロパティを持つオブジェクトの`children`配列を取り、サブメニューを作成できます：
::

### 複数

`multiple`プロパティを使用して複数選択できます。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::caution
`default-value`プロパティまたは`v-model`ディレクティブに配列を渡してください。
::

### Placeholder

`placeholder`プロパティを使用してプレースホルダーテキストを変更します。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### サイズbadge{label="4.4+" class="align-text-top"}

`size`プロパティを使用してCommandPaletteのサイズを変更します。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  size: 'xl'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icon

`icon`プロパティを使用して入力[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-search`です。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.search`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.search`キーでグローバルにカスタマイズできます。
:::
::

### 選択したアイコン

`selected-icon`プロパティを使用して、選択したアイテム[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-check`です。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue:
    - label: 'Benjamin Canac'
      suffix: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
        loading: lazy
  selectedIcon: 'i-lucide-circle-check'
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.check`キーでグローバルにカスタマイズできます。
:::
::

### Trailingアイコン

`trailing-icon`プロパティを使用して、項目が子を持つ場合、末尾の[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-right`です。

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  trailingIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.chevronRight`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.chevronRight`キーでグローバルにカスタマイズできます。
:::
::

### Loading

`loading`プロパティを使用して、CommandPaletteに読み込み中のアイコンを表示します。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

###  Loading Icon

`loading-icon`プロパティを使用してロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### 閉じる

`close`プロパティを使用して[Button](/docs/components/button)を表示し、CommandPaletteを閉じます。

::tip
closeボタンをクリックすると`update:open`イベントが発生します。
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### アイコンを閉じる

`close-icon`プロパティを使用して、閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
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

### 戻る

`back`プロパティを使用して、サブメニューに移動するときに表示される戻るボタン（`false`値）をカスタマイズまたは非表示にします。

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - back.color
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back:
    color: primary
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

### バックアイコン

`back-icon`プロパティを使用して、戻るボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-arrow-left`です。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - back
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back: true
  backIcon: 'i-lucide-house'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.arrowLeft`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.arrowLeft`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してCommandPaletteを無効にします。

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

## 例

### Control選択項目

選択されたアイテムを制御するには、`default-value`プロパティまたは`v-model`ディレクティブを使用するか、各アイテムの`onSelect`フィールドを使用するか、`@update:model-value`イベントを使用します。

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip
オブジェクト自体の代わりに値として使用する項目のフィールドを選択するには、`value-key`プロパティを使用します。参照の代わりにフィールドでオブジェクトを比較するには、`by`プロパティを使用します。
::

### Control検索語

検索語を制御するには`v-model:search-term`ディレクティブを使用します。

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
この例では、`@update:model-value`イベントを使用して、項目が選択されたときに検索語をリセットします。
::

### アイテム内の子を含む

項目の`children`プロパティを使用して階層メニューを作成できます。項目に子がある場合、自動的にシェブロンアイコンが表示され、サブメニューへのナビゲーションが有効になります。

::component-example
---
collapse: true
prettier: true
name: 'command-palette-items-children-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
サブメニューに移動する場合：
- 検索語がリセットされます
入力に- A戻るボタンが表示されます
- ：kbd{value="backspace"}キーを押すと前のグループに戻ることができます。
::

### フェッチされたアイテム

APIから項目を取得し、CommandPaletteで使用できます。

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上のデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。
::

### 無視フィルタ付き

グループの`ignoreFilter`フィールドを`true`に設定すると、内部検索を無効にして独自の検索ロジックを使用できます。

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
この例では、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用してAPI呼び出しをデバウンスします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。
::

### ポストフィルタ付き項目

グループの`postFilter`項目を使用して、検索後に項目をフィルタリングできます。

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
入力を開始して、より高いレベルの項目が表示される。
::

### カスタムヒューズ検索付き

`fuse`プロパティを使用して、[useFuse](https://vueuse.org/integrations/useFuse)のオプションをオーバーライドできます。

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
`fuseOptions`は[Fuse.js](https://www.fusejs.io/)のオプションで、`resultLimit`は返す結果の最大数、`matchAllWhenSearchEmpty`は検索語が空の場合にすべての項目にマッチするブール値です。
::

例えば、`{ fuseOptions: { includeMatches: true } }`{lang="ts-type"}を設定すると、項目内の検索語をハイライトできます。

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 仮想化badge{label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、大きなリストをブール値または`{ estimateSize: 32, overscan: 12 }`のようなオプションを持つオブジェクトとして仮想化できます。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
有効にすると、Reka UIの制限により、すべてのグループが1つのリストにフラット化されます。
::

::component-example
---
collapse: true
name: 'command-palette-virtualize-example'
class: '!p-0'
props:
  autofocus: false
---
::

### ポップオーバー内

CommandPaletteコンポーネントは、[Popover](/docs/components/popover)のコンテンツ内で使用できます。

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### モード内

CommandPaletteコンポーネントは、[Modal](/docs/components/modal)のコンテンツ内で使用できます。

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

::note
この例では、`useLazyFetch`と`immediate: false`を使用して、Modalが開いたときにのみデータをフェッチします。
::

### 引き出し内

CommandPaletteコンポーネントは、[Drawer](/docs/components/drawer)のコンテンツ内で使用できます。

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

::note
この例では`useLazyFetch`と`immediate: false`を使用して、Drawerが開いたときにのみデータをフェッチします。
::

### オープン状態を聞く

`close`プロパティを使用すると、ボタンがクリックされたときに`update:open`イベントをリッスンできます。

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
これは、例えば[`Modal`](/docs/components/modal)内でCommandPaletteを使用する場合に便利です。
::

### フッタースロット付き

`#footer`スロットを使用して、キーボードショートカットのヘルプや追加アクションなど、CommandPaletteの下部にカスタムコンテンツを追加します。

::component-example
---
collapse: true
name: 'command-palette-footer-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

### カスタムスロット付き

`slot`プロパティを使用して、特定のアイテムまたはグループをカスタマイズします。

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
collapse: true
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
`#item`、`#item-leading`、`#item-label`、`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
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
