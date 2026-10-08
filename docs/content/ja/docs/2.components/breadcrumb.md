---
description: ウェブサイトをナビゲートするためのリンクの階層。
category: navigation
keywords:
  - breadcrumbs
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## 使用法

[ブレッドクラム]コンポーネントを使用して、サイトの階層に現在のページの場所を表示します。

::component-code
---
崩壊真
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  BreadcrumbItem []
小道具
  アイテム
    -  label 'Docs'
      アイコン'i—lucide—book—open'
      to '/docs'
    -  label 'コンポーネント'
      アイコン'i—lucide—box'
      to：'/docs/components'
    -  label 'ブレッドクラム'
      アイコン'i—lucide—link'
      '/docs/components/breadcrumb'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`{lang="ts-type"}

[ Link ](/docs/components/link#props)コンポーネントから、`to`、`target`などのプロパティを渡すことができます。

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  BreadcrumbItem []
小道具
  アイテム
    -  label 'Docs'
      アイコン'i—lucide—book—open'
      to '/docs'
    -  label 'コンポーネント'
      アイコン'i—lucide—box'
      to '/docs/components'
    -  label 'ブレッドクラム'
      アイコン'i—lucide—link'
      '/docs/components/breadcrumb'
---
::

::note
`to`プロパティが定義されていない場合、リンクの代わりに`span`がレンダリングされます。
::

### セパレータアイコン

`separator-icon`プロパティを使用して、各項目間の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-right`です。

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  - ブレッドクラムアイテム[]
小道具
  separatorIcon 'i—lucide—arrow—right'
  アイテム
    -  label 'Docs'
      アイコン'i—lucide—book—open'
      to '/docs'
    -  label 'Components'
      アイコン'i—lucide—box'
      to '/docs/components'
    -  label 'ブレッドクラム'
      アイコン'i—lucide—link'
      '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronRight`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronRight`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 色バッジ{label="4.8+" class="align-text-top"}

`color`プロパティを使用して、アクティブなブレッドクラムの色を変更します。

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  BreadcrumbItem []
小道具
  色'セカンダリ'
  アイテム
    -  label 'Docs'
      アイコン'i—lucide—book—open'
      to '/docs'
    -  label 'Components'
      アイコン'i—lucide—box'
      to '/docs/components'
    -  label 'ブレッドクラム'
      アイコン'i—lucide—link'
      '/docs/components/breadcrumb'
---
::

## 例

### セパレータースロット付き

`#separator`スロットを使用して、各項目間の区切り文字をカスタマイズします。

component—example {name="breadcrumb-separator-slot-example"}

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

component—example {name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
また、`#item`、`#item-leading`、`#item-label`、および`#item-trailing`スロットを使用して、すべてのアイテムをカスタマイズすることもできます。
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
