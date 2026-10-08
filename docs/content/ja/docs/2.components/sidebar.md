---
description: '複数のビジュアルバリエーションを持つ折りたたみ式サイドバー。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## 使用法

サイドバーコンポーネントは、ページコンテンツをプッシュするスタンドアロンの固定サイドバーです。デスクトップでは、インラインでレンダリングし、折りたたむことができます。携帯電話では、[ Modal ](/docs/components/modal)を開きます。[ Slideover ](/docs/components/slideover)または[ Drawer ](/docs/components/drawer)コンポーネント。

::tip{to="/docs/components/dashboard-sidebar"}
**サイドバー vs DashboardSidebar **このコンポーネントは、どこにでもドロップできるシンプルなスタンドアロンサイドバーです。（チャットパネル、設定、ナビゲーション）。ドラッグしてサイズを変更したり、ステートを永続化したり、[ DashboardGroup ](/docs/components/dashboard-group)で統合したりする必要がある場合は、代わりに[ DashboardSidebar ](/docs/components/dashboard-sidebar)を使用してください。
::

サイドバーのコンテンツをカスタマイズするには、`header`、`default`、`footer`スロットを使用します。`v-model:open`ディレクティブはビューポートを意識しています。デスクトップでは展開/折りたたみ状態を制御し、モバイルではメニューを制御します。

::component-example
---
崩壊真
きれい真
name 'sidebar—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

### バリアント

サイドバーのビジュアルスタイルを変更するには、`variant`プロパティを使用します。デフォルトは`sidebar`です。

::component-example
---
崩壊真
きれい真
名前'sidebar—props'
overflowHidden true
オプション
  -  name 'variant'
    ラベル'variant'
    アイテム
      - サイドバー
      -  floating
      - インセット
    デフォルト'inset'
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

###  Collapsible

サイドバーの折りたたみ動作を変更するには、`collapsible`プロパティを使用します。デフォルトは`offcanvas`です。

- `offcanvas`サイドバーが完全に見えなくなります。
- `icon`サイドバーがアイコンのみの幅に縮小します。
- `none`サイドバーは折りたたみできません。

::component-example
---
崩壊真
きれい真
名前'sidebar—props'
overflowHidden true
オプション
  -  name '折りたたみ式'
    ラベル'折りたたみ式'
    アイテム
      -  offcanvas
      - アイコン
      -  none
    デフォルト'icon'
  -  name 'variant'
    ラベル'variant'
    アイテム
      - サイドバー
      - フローティング
      - インセット
    デフォルト'サイドバー'
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

::tip{to="#slots"}
スロットプロップ内の`state`にアクセスして、サイドバーが折りたたまれたときのコンテンツをカスタマイズできます。
::

### サイド

サイドバーの側面を変更するには、`side`プロパティを使用します。デフォルトは`left`です。

::component-example
---
崩壊真
きれい真
名前'sidebar—props'
overflowHidden true
オプション
  -  name 'side'
    ラベル'側面'
    アイテム
      - 左
      - 右
    デフォルト'右'
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

### タイトル

`title`プロパティを使用して、サイドバーヘッダーのタイトルを設定します。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
無視
  -  ui.container
小道具
  titleナビゲーション
  UI
    容器h完全な
スロット
  デフォルト|

    <Placeholder class="h-full" />
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---

placeholder {class="h-full"}
::

### 説明

`description`プロパティを使用して、サイドバーヘッダーの説明を設定します。

::component-code
---
きれい真
隠す
  - クラス
  -  ui
無視
  -  title
  -  ui.container
小道具
  titleナビゲーション
  説明ワークスペースをブラウズ
  UI
    容器h完全な
スロット
  デフォルト|

    <Placeholder class="h-full" />
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---

placeholder {class="h-full"}
::

### レール

`rail`プロパティを使用して、サイドバーに薄いインタラクティブエッジを表示し、クリック時に折りたたまれた状態を切り替えます。レールは`collapsible`が`none`でない場合にのみレンダリングされます。

::component-code
---
きれい真
無視
  -  title
  -  ui.container
隠す
  -  ui
  - クラス
小道具
  レール本当
  折りたたみ式アイコン
  titleナビゲーション
  ui。容器h完全な
スロット
  デフォルト|

    <Placeholder class="h-full" />
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---

placeholder {class="h-full"}
::

### 閉じる

サイドバーヘッダーに閉じるボタンを表示するには、`close`プロパティを使用します。閉じるボタンは、`collapsible`が`none`でない場合にのみレンダリングされます。

[ Button ](/docs/components/button)コンポーネントから任意のプロパティを渡してカスタマイズできます。

::component-code
---
きれい真
無視
  -  title
  - レール
  -  ui.container
隠す
  -  ui
  - クラス
小道具
  閉じるtrue
  レール本当
  折りたたみ式アイコン
  titleナビゲーション
  UI
    容器h完全な
アイテム
  閉じる
    -  true
    -  false
スロット
  デフォルト|

    <Placeholder class="h-full" />
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---

placeholder {class="h-full"}
::

### 閉じるアイコン

`close-icon`プロパティを使用して、閉じるボタン[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
きれい真
無視
  -  title
  - レール
  - サイド
  - 閉じる
  -  ui.container
隠す
  -  ui
  - クラス
小道具
  閉じるtrue
  closeIcon i—lucide—panel—right close
  レール本当
  折りたたみ式アイコン
  側面右
  titleナビゲーション
  UI
    容器h完全な
アイテム
  閉じる
    -  true
    -  false
スロット
  デフォルト|

    <Placeholder class="h-full" />
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---

placeholder {class="h-full"}
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

### モード

`mode`プロパティを使用して、モバイルでサイドバーメニューのモードを変更します。デフォルトは`slideover`です。

::component-example
---
崩壊真
iframe
  高さ500px；
iframeモバイルtrue
overflowHidden true
名前'sidebar—mode—example'
オプション
  -  name 'mode'
    ラベル'mode'
    デフォルト'slideover'
    アイテム
      - モーダル
      -  slideover
      - ドロワー
小道具
  クラス'w—full'
---
::

::tip{to="#props"}
`menu` propを使用してサイドバーのメニューをカスタマイズできます。選択したモードに応じて適応します。
::

## 例

###  Controlオープンステート

`open` propまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。デスクトップでは展開/折りたたみ状態を制御し、モバイルではシートメニューを開いたり閉じたりします。

::component-example
---
崩壊真
きれい真
名前'sidebar—open—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="O"}を押してサイドバーのオープン状態を切り替えることができます。
::

### 持続オープン状態

ページのリロード中でサイドバー状態を保持するには、`ref``useLocalStorage`](https://vueuse.org/core/useLocalStorage/)`ref`の代わりに[`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie)を使用します。

::component-example
---
崩壊真
きれい真
名前'sidebar—persist—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

::note
前の例との唯一の違いは、`ref(true)`を`useLocalStorage('sidebar-open', true)`に置き換えていることです。
::

### カスタム幅付き

サイドバーの幅はCSS変数`--sidebar-width`で制御されますデフォルトは`16rem`。折りたたまれたアイコンの幅は`--sidebar-width-icon`デフォルトは`4rem`で制御されます。

CSSまたはインスタンスごとに`style`属性を使用してグローバルに上書きします。

::component-example
---
崩壊真
きれい真
名前'sidebar—width—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

### ヘッダー付き

サイドバーを[ Header ](/docs/components/header)の下に配置するには、`ui` propを使用して`gap`と`container`をカスタマイズします。

::component-example
---
崩壊真
きれい真
名前'sidebar—header—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
::

::note
`--ui-header-height`変数のデフォルト値は`4rem`で、ヘッダーによって使用されます。ナビバーが異なる高さを使用している場合は、これを調整してください。
::

###  AIチャット付き

右側のサイドバーを[ ChatMessages ](/docs/components/chat-messages)と[ ChatPrompt ](/docs/components/chat-prompt)で指定して、AIチャットパネルを作成します。

::component-example
---
崩壊真
きれい真
名前'sidebar—chat—example'
overflowHidden true
クラス'！p—0！justify—start h—[500px] contain—[paint] transform—gpu'
---
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
