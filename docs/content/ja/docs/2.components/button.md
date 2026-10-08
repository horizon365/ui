---
description: リンクとして機能したり、アクションをトリガーしたりできるボタン要素。
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## 使用法

デフォルトスロットを使用してボタンのラベルを設定します。

::component-code
---
スロット
  デフォルトボタン
---
::

### ラベル

`label`プロパティを使用して、ボタンのラベルを設定します。

::component-code
---
小道具
  ラベルボタン
---
::

### カラー

`color`プロパティを使用してボタンの色を変更します。

::component-code
---
小道具
  色ニュートラル
スロット
  デフォルトボタン
---
::

### バリアント

`variant`プロパティを使用して、Buttonのバリアントを変更します。

::component-code
---
小道具
  色ニュートラル
  variantアウトライン
スロット
  デフォルトボタン
---
::

### サイズ

`size`プロパティを使用してボタンのサイズを変更します。

::component-code
---
小道具
  サイズXL
スロット
  デフォルトボタン
---
::

### アイコン

`icon` propを使用して、[ Icon ](/docs/components/icon)をButton内に表示します。

::component-code
---
小道具
  アイコンi—lucideロケット
  サイズMD
  色プライマリ
  バリアント固体
スロット
  デフォルトボタン
---
::

アイコンの位置を設定するには`leading`と`trailing` propsを使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon` propsを使用します。

::component-code
---
小道具
  trailingIcon i—lucide—arrow—right
  サイズMD
スロット
  デフォルト ボタン
---
::

`label`は オプション で 、 アイコン のみ の ボタン として 使用 でき ます 。

::component-code
---
小道具
  アイコン i-lucide-search
  サイズ MD
  色 プライマリ
  バリアント 固体
---
::

### アバター

`avatar`prop を 使用 し て 、 ボタン 内 に[Avatar](/docs/components/avatar)を 表示 し ます 。

::component-code
---
きれい 真
無視
  - avatar.loading
小道具
  アバター
    https//github.com/nuxt.png
    読み込み 怠惰
  サイズ MD
  色 ニュートラル
  variant アウトライン
スロット
  デフォルト|

    ボタン
---
::

`label`は オプション です ので 、 アバター 専用 の ボタン として 使用 でき ます 。

::component-code
---
きれい 真
無視
  - avatar . ローディング
小道具
  アバター
    https//github.com/nuxt.png
    読み込み 怠惰
  サイズ MD
  色 ニュートラル
  variant アウトライン
---
::

### リンク

[Link](/docs/components/link#props)コンポーネント から 、`to`、`target`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
無視
  - ターゲット
小道具
  次 へhttps://github.com/nuxt/ui
  ターゲット_blank
スロット
  デフォルトボタン
---
::

Buttonがリンクの場合、または`active` propを使用する場合、`active-color`および`active-variant` propを使用してアクティブ状態をカスタマイズできます。

::component-code
---
きれい真
無視
  - カラー
  - バリアント
アイテム
  activeColor
    - プライマリ
    - セカンダリ
    - 成功
    -  info
    -  warning
    - エラー
    - ニュートラル
  activeVariant
    - ソリッド
    - アウトライン
    - ソフト
    - 微妙
    - ゴースト
    -  link
小道具
  アクティブtrue
  色ニュートラル
  variantアウトライン
  activeColorプライマリ
  activeVariant固体
スロット
  デフォルト|

    ボタン
---

ボタン
::

`active-class`および`inactive-class` propsを使用して、アクティブ状態をカスタマイズすることもできます。

::component-code
---
小道具
  アクティブtrue
  activeClass 'font—bold'
  inactiveClass 'font—light'
スロット
  デフォルトボタン
---

ボタン
::

::tip
これらのスタイルは、`app.config.ts`ファイルの`ui.button.variants.active`キーでグローバルに設定できます。

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### ローディング

`loading`プロパティを使用して、読み込み中のアイコンを表示し、ボタンを無効にします。

::component-code
---
小道具
  読み込み真
  トレーリングfalse
スロット
  デフォルトボタン
---
ボタン
::

`loading-auto` promiseが保留中の間、ロードアイコンを自動的に表示するには、`loading-auto` promiseを使用します。

component—example {name="button-loading-auto-example"}

これは[ Form ](/docs/components/form)コンポーネントでも動作します。

component—example {name="button-loading-auto-form-example"}

###  Loadingアイコン

読み込みアイコンをカスタマイズするには、`loading-icon`プロパティを使用します。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
小道具
  読み込み真
  loadingIcon 'i—lucide—loader'
スロット
  デフォルトボタン
---
ボタン
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.loading`キーの`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.loading`キーの`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してボタンを無効にします。

::component-code
---
小道具
  無効true
スロット
  デフォルトボタン
---

ボタン
::

## 例

### `class` prop

`class`プロパティを使用して、Buttonの基本スタイルを上書きします。

::component-code
---
小道具
  クラス'font—bold rounded—full'
スロット
  デフォルトボタン
---
::

### `ui` prop

`ui`プロパティを使用して、Buttonのスロットスタイルをオーバーライドします。

::component-code
---
きれい真
無視
  -  ui
  - カラー
  - バリアント
  - アイコン
小道具
  アイコンi—lucideロケット
  色ニュートラル
  variantアウトライン
  UI
    leadingIcon 'テキストプライマリ'
スロット
  デフォルト|

    ボタン
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<button>` HTML属性もサポートします。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button`コンポーネントは、`Link`コンポーネントを拡張しています。ソースコードはGitHubで確認してください。
::

### スロット

コンポーネントスロット

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
