---
description: 一度に1つずつ表示されるタブパネルのセット。
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: タブズ
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## 使用法

タブコンポーネントを使用して、タブ内の項目のリストを表示します。

::component-example
---
collapse: true
prettier: true
name: 'tabs-example'
props:
  class: 'w-full'
---
::

### アイテム

`items`プロパティを次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string | number`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { trigger?: ClassNameValue, leadingIcon?: ClassNameValue, leadingAvatar?: ClassNameValue, leadingAvatarSize?: ClassNameValue, label?: ClassNameValue, trailingBadge?: ClassNameValue, trailingBadgeSize?: ClassNameValue, content?: ClassNameValue }`{lang="ts-type"}

::component-code
---
ignore:
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### コンテンツ

パネルなしでトリガーをレンダリングするには、`content`プロパティを`false`に設定します。デフォルトは`true`です。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  content: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

### アンマウント

`unmount-on-hide`プロパティを使用して、タブが折りたたまれたときにコンテンツがアンマウントされないようにします。デフォルトは`true`です。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  unmountOnHide: false
  items:
    - label: Account
      icon: 'i-lucide-user'
      content: 'This is the account content.'
    - label: Password
      icon: 'i-lucide-lock'
      content: 'This is the password content.'
  class: 'w-full'
---
::

::note
DOMを検査して、各項目のコンテンツがレンダリングされていることを確認できます。
::

### Color

`color`プロパティを使用してタブの色を変更します。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Variant

`variant`プロパティを使用してタブのバリアントを変更します。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  color: neutral
  variant: link
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### サイズ

`size`プロパティを使用してタブのサイズを変更します。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  size: md
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

### Orientation

`orientation`プロパティを使用してタブの向きを変更します。デフォルトは`horizontal`です。

::component-code
---
ignore:
  - content
  - items
  - class
external:
  - items
externalTypes:
  - TabsItem[]
props:
  orientation: vertical
  variant: pill
  content: false
  items:
    - label: Account
    - label: Password
  class: 'w-full'
---
::

## 例

###  Controlアクティブ項目

`default-value`プロパティを使用するか、`v-model`ディレクティブを使用してアイテムの`value`を指定してアクティブなアイテムを制御できます。`value`が指定されていない場合、デフォルトではインデックス**が文字列**として指定されます。

:component-example{name="tabs-model-value-example"}

::tip
`v-model`または`default-value`が指定されたときにアイテムにマッチするキーを変更するには、`value-key`プロパティを使用します。
::

### Withルートクエリ

項目の`value`として`route.query.tab`を使用して、URLクエリパラメータでアクティブな項目を制御できます。

:component-example{name="tabs-route-query-example"}

### コンテンツスロット付き

`#content`スロットを使用して、各アイテムのコンテンツをカスタマイズします。

:component-example{name="tabs-content-slot-example"}

### 下部タブバー付き

`ui`プロパティを使用して、タブをYouTubeやInstagramのように、アイコンと小さなラベル付きのモバイルスタイルの下部タブバーに変換します。

::component-example
---
collapse: true
name: 'tabs-bottom-tab-bar-example'
---
::

### カスタムスロット付き

`slot`プロパティを使用して、特定の項目をカスタマイズします。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}

::component-example
---
collapse: true
name: 'tabs-custom-slot-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

### Emits

:component-emits

### Expose

テンプレート参照を介してコンポーネントにアクセスする場合、以下を使用できます：

| 名前|タイプ|
| ---- | ---- |
| `triggersRef`{lang="ts-type"}| `Ref<ComponentPublicInstance[]>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
