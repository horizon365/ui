---
description: 'ウェブサイトの上部にバナーを表示して、重要な情報をユーザーに知らせます。'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## 使用法

### タイトル

バナーにタイトルを表示するには、`title`プロパティを使用します。

::component-code
---
きれい真
クラス'！p—0'
小道具
  タイトル：「これは重要なメッセージを込めた旗です」
---
::

### アイコン

`icon`プロパティを使用して、バナーにアイコンを表示します。

::component-code
---
きれい真
クラス'！p—0'
無視
  -  title
小道具
  アイコンi—lucide—info
  タイトル：「これはアイコン付きのバナーです」
---
::

### カラー

`color`プロパティを使用してバナーの色を変更します。

::component-code
---
きれい真
クラス'！p—0'
無視
  - アイコン
  -  title
小道具
  色'ニュートラル'
  アイコンi—lucide—info
  タイトル：「これはアイコン付きのバナーです」
---
::

### 閉じる

`close`プロパティを使用して、[ Button ](/docs/components/button)を表示してバナーを削除します。デフォルトは`false`です。

::tip
閉じるボタンをクリックすると`close`イベントが発生します。
::

::component-example
---
iframe
  スタイル'高さ48px；'
overflowHidden true
name 'バナー例'
---
#コード

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
閉じると、`banner-${id}`はローカルストレージに保存され、再度表示されないようになります。br上記の例では、`banner-example`はローカルストレージに保存されます。
::

::caution
ページのリロード中でsigned状態を維持するには、`id` propを指定する必要があります。明示的な`id`がないと、バナーは現在のセッションでのみ非表示になり、ページのリロード時に再び表示されます。
::

### 閉じるアイコン

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-example
---
iframe
  スタイル'高さ48px；'
overflowHidden true
name 'バナー例'
小道具
  タイトル：'これはカスタム閉じるアイコンを持つ閉じることができるバナーです。
  closeIcon 'i—lucide—x—circle'
---
#コード

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

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

### アクション

`actions` propを使用して、[ Button ](/docs/components/button)アクションをバナーに追加します。

::component-code
---
きれい真
クラス'！p—0'
無視
  -  title
  - アクション
  - バリアント
外部
  - アクション
externalTypes
  -  ButtonProps []
小道具
  タイトル：「これは行動のある旗です」
  アクション
    -  labelアクション1
      variantアウトライン
    -  labelアクション2
      trailingIcon i—lucide—arrow—right
---
::

::note
アクションボタンのデフォルト値は`color="neutral"`と`size="xs"`です。これらの値を各アクションボタンに直接渡すことでカスタマイズできます。
::

### リンク

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)コンポーネントから、`to`、`target`、`rel`などのプロパティを渡すことができます。

::component-code
---
きれい真
クラス'！p—0'
overflowHidden true
無視
  -  title
  - ターゲット
小道具
  「https//nuxtlabs.com/」
  ターゲット'_blank'
  タイトル：'NuxtLabsがVercelに参加！'
  色'プライマリ'
---
::

::note
`NuxtLink`コンポーネントは、`User`コンポーネントに渡した他のすべての属性を継承します。
::

## 例

### 内`app.vue`

`app.vue`またはレイアウトでバナーコンポーネントを使用します。

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

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
