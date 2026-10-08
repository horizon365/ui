---
title: ナビゲーションメニュー
description: 水平または垂直に表示できるリンクのリスト。
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: ナビゲーションメニュー
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

## 使用法

NavigationMenuコンポーネントを使用して、リンクのリストを水平または垂直に表示します。

::component-code
---
崩壊真
隠す
  - クラス
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  NavigationMenuItem
小道具
  アイテム
    -  labelガイド
      アイコンi—lucide—book—open
      to：/docs/getting—started
      子供：
        -  labelはじめに
          説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
          アイコンi—lucide—house
        -  labelインストール
          説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
        -  label 'Colors'
          アイコン'i—lucide—swatch—book'
          説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
        -  label 'テーマ'
          アイコン'i—lucide—cog'
          説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  labelコンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to：/docs/components/link
        -  label Modal
          アイコンi—lucide—file—text
          説明：アプリケーション内にモーダルを表示します。
          to：/docs/components/modal
        -  label NavigationMenu
          アイコンi—lucide—file—text
          description：リンクのリストを表示します。
          to/docs/components/navigation—menu
        -  label Pagination
          アイコンi—lucide—file—text
          description：ページのリストを表示します。
          to/docs/components/pagination
        -  label Popover
          アイコンi—lucide—file—text
          description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
          to：/docs/components/popover
        -  label進捗状況
          アイコンi—lucide—file—text
          説明：タスクの進行を示す水平バーを表示します。
          to：/docs/components/progress
    -  label GitHub
      アイコンi—simple—icons—github
      バッジ6k
      次 へhttps://github.com/nuxt/ui
      ターゲット _blank
    - label ヘルプ
      アイコン i-lucide-circle-help
      無効 true
  クラス ' w-full justify-center '
---
::

### アイテム

`items`prop を 、 次 の プロ パティ を 持つ オブジェクト の 配列 として 使用 し ます 。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `badge?: string | number | BadgeProps`{lang="ts-type"}
- [`chip?: boolean | ChipProps`{lang="ts-type"}](#with-chip-in-items)
- [`tooltip?: TooltipProps`{lang="ts-type"}](#with-tooltip-in-items)
- [`popover?: PopoverProps`{lang="ts-type"}](#with-popover-in-items)
- `trailingIcon?: string`{lang="ts-type"}
- `type?: 'label' | 'trigger' | 'link'`{lang="ts-type"}
- `defaultOpen?: boolean`{lang="ts-type"}
- `open?: boolean`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- `children?: NavigationMenuChildItem[]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { linkLeadingAvatarSize?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingChipSize?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingBadgeSize?: ClassNameValue, linkTrailingBadge?: ClassNameValue, linkTrailingIcon?: ClassNameValue, label?: ClassNameValue, link?: ClassNameValue, content?: ClassNameValue, childList?: ClassNameValue, childLabel?: ClassNameValue, childItem?: ClassNameValue, childLink?: ClassNameValue, childLinkIcon?: ClassNameValue, childLinkWrapper?: ClassNameValue, childLinkLabel?: ClassNameValue, childLinkLabelExternalIcon?: ClassNameValue, childLinkDescription?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props)コンポーネント から 、`to`、`target`など の プロ パティ を 渡す こと が でき ます 。

::component-code
---
崩壊 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - NavigationMenuItem
小道具
  アイテム
    - label ガイド
      アイコン i-lucide-book-open
      to ：/docs/getting-started
      子供：
        -  labelはじめに
          説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
          アイコンi—lucide—house
        -  labelインストール
          説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
        -  label 'Colors'
          アイコン'i—lucide—swatch—book'
          説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
        -  label 'テーマ'
          アイコン'i—lucide—cog'
          説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  label：コンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to ：/docs/components/link
        - label Modal
          アイコン i-lucide-file-text
          説明 ： アプリケーション 内 に モーダル を 表示 し ます 。
          to ：/docs/components/modal
        - label NavigationMenu
          アイコン i-lucide-file-text
          description ： リンク の リスト を 表示 し ます 。
          to/docs/components/navigation-menu
        - label Pagination
          アイコン i-lucide-file-text
          description ： ページ の リスト を 表示 し ます 。
          to/docs/components/pagination
        - label Popover
          アイコン i-lucide-file-text
          description ： トリガー 要素 の 周り に 浮かぶ 非 モーダル ダイアログ を 表示 し ます 。
          to ：/docs/components/popover
        - label 進捗 状況
          アイコン i-lucide-file-text
          説明 ： タスク の 進行 を 示す 水平 バー を 表示 し ます 。
          to ：/docs/components/progress
    - label GitHub
      アイコン i-simple-icons-github
      バッジ 6k
      次 へhttps://github.com/nuxt/ui
      ターゲット _blank
    - label ヘルプ
      アイコン i-lucide-circle-help
      無効 true
  クラス ' w-full justify-center '
---
::

::note
`items`prop に 配列 の 配列 を 渡し て 、 アイテム の グループ を 表示 する こと も でき ます 。
::

::tip
各 アイテム は 、 以下 の プロ パティ を 持つ オブジェクト の`children`配列 を 取り 、 サブ メニュー を 作成 でき ます 。

- `label: string`
- `description?: string`
- `icon?: string`
- `onSelect?: (e: Event) => void`
- `class?: any`

::

### オリエンテーション

NavigationMenu の 向き を 変更 する に は 、`orientation`プロ パティ を 使用 し ます 。

::note
オリエンテーション が`vertical`の 場合 、[Accordion](/docs/components/accordion)コンポーネント が 各 グループ を 表示 する ため に 使用 さ れ ます 。`open`および`defaultOpen`プロ パティ を 使用 し て 各 アイテム の オープン 状態 を 制御 し 、[`collapsible`](/docs/components/accordion#collapsibleを 使用 し て 動作 を 変更 でき ます 。)と[`type`](/docs/components/accordion#multiple)props .
::

::note
オリエンテーションが`vertical`でメニューが`collapsed`でない場合、子は再帰的にアイテムとしてレンダリングされるので、`ui.link`はそれらをスタイル化します。`ui.childLink`は、`horizontal`のオリエンテーションに表示される`content`にのみ適用されます。[ popover ](#with-popover-in-items)に適用されます。
::

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーションメニュー [][]
小道具
  オリエンテーション'垂直'
  アイテム
    - —ラベルリンク
        タイプ'ラベル'
      -  labelガイド
        アイコンi—lucide—book—open
        子供：
          -  labelはじめに
            説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
            アイコンi—lucide—house
          -  labelインストール
            説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
            アイコンi—lucide—クラウド—ダウンロード
          -  label 'アイコン'
            アイコン'i—lucide—smile'
            説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
          -  label 'Colors'
            アイコン'i—lucide—swatch—book'
            説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
          -  label 'テーマ'
            アイコン'i—lucide—cog'
            説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
      -  label Composables
        アイコンi—lucideデータベース
        子供：
          -  label defineShortcuts
            アイコンi—lucide—file—text
            説明アプリケーションのショートカットを定義します。
            へ/docs/composables/define—shortcuts
          -  label useOverlay
            アイコンi—lucide—file—text
            説明：アプリケーション内でモーダル/スライドオーバーを表示します。
            to/docs/composables/use—overlay
          -  label useToast
            アイコンi—lucide—file—text
            説明：アプリケーション内にトーストを表示します。
            /docs/composables/use—toast
      -  labelコンポーネント
        アイコンi—lucide—box
        to：/docs/components
        タイプ'トリガー'
        アクティブtrue
        defaultOpen true
        子供：
          -  labelリンク
            アイコンi—lucide—file—text
            説明スーパーパワーでNuxtLinkを使用します。
            to：/docs/components/link
          -  label Modal
            アイコンi—lucide—file—text
            説明：アプリケーション内にモーダルを表示します。
            to：/docs/components/modal
          -  label NavigationMenu
            アイコンi—lucide—file—text
            description：リンクのリストを表示します。
            to/docs/components/navigation—menu
          -  label Pagination
            アイコンi—lucide—file—text
            description：ページのリストを表示します。
            to/docs/components/pagination
          -  label Popover
            アイコンi—lucide—file—text
            description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
            to：/docs/components/popover
          -  label進捗状況
            アイコンi—lucide—file—text
            説明：タスクの進行を示す水平バーを表示します。
            to：/docs/components/progress
    - —ラベルGitHub
        アイコンi—simple—icons—github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
  クラス ' data- [ orientation = vertical ] w-48 '
---
::

::note
オリエンテーション が`horizontal`の 場合 、 グループ は 間隔 を 空け 、 オリエンテーション が`vertical`の 場合 、 グループ は 区切ら れ ます 。
::

### 崩壊

`vertical`オリエンテーション で は 、`collapsed`プロ パティ を 使用 し て NavigationMenu を 折り たたみ ます 。 これ は サイドバー など で 便利 です 。

::note
[`tooltip`](#with-tooltip-in-items)[`popover`](#with-popover-in-items)props を 使用 し て 、 折り たたま れ た アイテム の 詳細 情報 を 表示 でき ます 。
::

::component-code
---
崩壊 真
無視
  - アイテム
  - オリエンテーション
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーション メニュー [ ] [ ]
アイテム
  ツール チップ
    - true
    - false
  ポップ オーバー
    - true
    - false
小道具
  崩壊 ： true
  ツール チップ false
  popover false
  オリエンテーション ' 垂直 '
  アイテム
    - - ラベル リンク
        タイプ ' ラベル '
      - label ガイド
        アイコン i-lucide-book-open
        子供 ：
          - label はじめ に
            説明 Nuxt の 完全 な スタイル と カスタマイズ 可能 な コンポーネント 。
            アイコンi—lucide—house
          -  labelインストール
            説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
            アイコンi—lucide—クラウド—ダウンロード
          -  label 'アイコン'
            アイコン'i—lucide—smile'
            説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
          -  label 'Colors'
            アイコン'i—lucide—swatch—book'
            説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
          -  label 'テーマ'
            アイコン'i—lucide—cog'
            説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
      -  label Composables
        アイコンi—lucideデータベース
        子供：
          -  label defineShortcuts
            アイコンi—lucide—file—text
            説明アプリケーションのショートカットを定義します。
            へ/docs/composables/define—shortcuts
          -  label useOverlay
            アイコンi—lucide—file—text
            説明：アプリケーション内でモーダル/スライドオーバーを表示します。
            to/docs/composables/use—overlay
          -  label useToast
            アイコンi—lucide—file—text
            説明：アプリケーション内にトーストを表示します。
            /docs/composables/use—toast
      -  labelコンポーネント
        アイコンi—lucide—box
        to：/docs/components
        アクティブtrue
        子供：
          -  labelリンク
            アイコンi—lucide—file—text
            説明スーパーパワーでNuxtLinkを使用します。
            to：/docs/components/link
          -  label Modal
            アイコンi—lucide—file—text
            説明：アプリケーション内にモーダルを表示します。
            to ：/docs/components/modal
          - label NavigationMenu
            アイコン i-lucide-file-text
            description ： リンク の リスト を 表示 し ます 。
            to/docs/components/navigation-menu
          - label Pagination
            アイコン i-lucide-file-text
            description ： ページ の リスト を 表示 し ます 。
            to/docs/components/pagination
          - label Popover
            アイコン i-lucide-file-text
            description ： トリガー 要素 の 周り に 浮かぶ 非 モーダル ダイアログ を 表示 し ます 。
            to ：/docs/components/popover
          - label 進捗 状況
            アイコン i-lucide-file-text
            説明 ： タスク の 進行 を 示す 水平 バー を 表示 し ます 。
            to ：/docs/components/progress
    - - ラベル GitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
---
::

### ハイライト

`highlight`プロ パティ を 使用 し て 、 アクティブ な 項目 の ハイライト さ れ た 境界 線 を 表示 し ます 。

境界 線 の 色 を 変更 する に は`highlight-color`prop を 使用 し ます 。 デフォルト は`color`prop です 。

::component-code
---
崩壊 真
きれい 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーション メニュー [ ] [ ]
小道具
  ハイライト 真
  highlightColor ' primary '
  オリエンテーション'水平'
  アイテム
    - —ラベルガイド
        アイコンi—lucide—book—open
        子供：
          -  labelはじめに
            説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
            アイコンi—lucide—house
          -  labelインストール
            説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
            アイコンi—lucide—クラウド—ダウンロード
          -  label 'アイコン'
            アイコン'i—lucide—smile'
            説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
          -  label 'Colors'
            アイコン'i—lucide—swatch—book'
            説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
          -  label 'テーマ'
            アイコン'i—lucide—cog'
            説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
      -  label Composables
        アイコンi—lucideデータベース
        子供：
          -  label defineShortcuts
            アイコンi—lucide—file—text
            説明アプリケーションのショートカットを定義します。
            へ/docs/composables/define—shortcuts
          -  label useOverlay
            アイコンi—lucide—file—text
            説明：アプリケーション内でモーダル/スライドオーバーを表示します。
            to/docs/composables/use—overlay
          -  label useToast
            アイコンi—lucide—file—text
            説明：アプリケーション内にトーストを表示します。
            /docs/composables/use—toast
      -  labelコンポーネント
        アイコンi—lucide—box
        to：/docs/components
        アクティブtrue
        defaultOpen true
        子供 ：
          - label リンク
            アイコン i-lucide-file-text
            説明 スーパー パワー で NuxtLink を 使用 し ます 。
            to ：/docs/components/link
          - label Modal
            アイコン i-lucide-file-text
            説明 ： アプリケーション 内 に モーダル を 表示 し ます 。
            to ：/docs/components/modal
          - label NavigationMenu
            アイコン i-lucide-file-text
            description ： リンク の リスト を 表示 し ます 。
            to/docs/components/navigation-menu
          - label Pagination
            アイコン i-lucide-file-text
            description ： ページ の リスト を 表示 し ます 。
            to/docs/components/pagination
          - label Popover
            アイコン i-lucide-file-text
            description ： トリガー 要素 の 周り に 浮かぶ 非 モーダル ダイアログ を 表示 し ます 。
            to ：/docs/components/popover
          - label 進捗 状況
            アイコン i-lucide-file-text
            説明 ： タスク の 進行 を 示す 水平 バー を 表示 し ます 。
            to ：/docs/components/progress
    - - ラベル GitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
  クラス ' data- [ 方向 = 水平 ] border-b border-default data- [ 方向 = 水平 ] w-full data- [ 方向 = 垂直 ] w-48 '
---
::

::note
この 例 で は 、`border-b`クラス を 適用 し て 、`horizontal`オリエンテーション の 境界 線 を 表示 し ます 。 これ は デフォルト で は 、 作業 を 白紙 に する ため に 行わ れ て い ませ ん 。
::

::caution
`vertical`オリエンテーション で は 、`highlight`プロ パティ は アクティブ な 子 の 境界 線 のみ を 強調 表示 し ます 。
::

### カラー

NavigationMenu の 色 を 変更 する に は 、`color`プロ パティ を 使用 し ます 。

::component-code
---
崩壊 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - NavigationMenuItem [ ]
小道具
  色 ニュートラル
  アイテム
    - - ラベル ガイド
        アイコン i-lucide-book-open
        to ：/docs/getting-started
      - label Composables
        アイコン i-lucide データベース
        to ：/docs/composables
      - label コンポーネント
        アイコン i-lucide-box
        to ：/docs/components
        アクティブ true
    - - ラベル GitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
  クラス ' w-full '
---
::

### バリアント

NavigationMenu の バリアント を 変更 する に は 、`variant`プロ パティ を 使用 し ます 。

::component-code
---
崩壊 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーション メニュー [ ] [ ]
小道具
  色 ニュートラル
  バリアント リンク
  ハイライト false
  アイテム
    - - ラベル ガイド
        アイコン i-lucide-book-open
        to ：/docs/getting-started
      - label Composables
        アイコン i-lucide データベース
        to ：/docs/composables
      - label コンポーネント
        アイコン i-lucide-box
        to ：/docs/components
        アクティブ true
    - - ラベル GitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
  クラス ' w-full '
---
::

::note
`highlight`prop は`pill`variant の アクティブ アイテム スタイル を 変更 し ます 。 違い を 確認 する ため に 試し て み て ください 。
::

### トレーリングアイコン

`trailing-icon`プロ パティ を 使用 し て 、 各 アイテム の 末尾 の[Icon](/docs/components/icon)を カスタマイズ し ます 。 デフォルト は`i-lucide-chevron-down`です 。 この アイコン は アイテム に 子 が ある 場合 に のみ 表示 さ れ ます 。

::tip
item オブジェクト の`trailingIcon`プロ パティ を 使用 し て 、 特定 の アイテム に アイコン を 設定 する こと も でき ます 。
::

::component-code
---
崩壊 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーション メニュー 項目 [ ]
小道具
  trailingIcon ' i-lucide-arrow-down '
  アイテム
    - label ガイド
      アイコン i-lucide-book-open
      to ：/docs/getting-started
      子供 ：
        - label はじめ に
          説明 Nuxt の 完全 な スタイル と カスタマイズ 可能 な コンポーネント 。
          アイコン i-lucide-house
        - label インストール
          説明 ： アプリケーション に Nuxt UI を インストール し て 設定 する 方法 を 学び ます 。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
        -  label 'Colors'
          アイコン'i—lucide—swatch—book'
          説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
        -  label 'テーマ'
          アイコン'i—lucide—cog'
          説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  labelコンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to：/docs/components/link
        -  label Modal
          アイコンi—lucide—file—text
          説明：アプリケーション内にモーダルを表示します。
          to：/docs/components/modal
        -  label NavigationMenu
          アイコンi—lucide—file—text
          description：リンクのリストを表示します。
          to/docs/components/navigation—menu
        -  label Pagination
          アイコンi—lucide—file—text
          description：ページのリストを表示します。
          to/docs/components/pagination
        -  label Popover
          アイコンi—lucide—file—text
          description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
          to：/docs/components/popover
        -  label進捗状況
          アイコンi—lucide—file—text
          説明：タスクの進行を示す水平バーを表示します。
          to：/docs/components/progress
  クラス'w—full justify—center'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

### アロー

項目に子がある場合、NavigationMenuコンテンツに矢印を表示するには、`arrow`プロパティを使用します。

::component-code
---
崩壊真
無視
  - アイテム
  -  arrow
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーションメニュー項目[]
小道具
  矢印true
  アイテム
    -  labelガイド
      アイコンi—lucide—book—open
      to：/docs/getting—started
      子供：
        -  labelはじめに
          説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
          アイコンi—lucide—house
        -  labelインストール
          説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
        -  label 'Colors'
          アイコン'i—lucide—swatch—book'
          説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
        -  label 'テーマ'
          アイコン'i—lucide—cog'
          説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  labelコンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to：/docs/components/link
        -  label Modal
          アイコンi—lucide—file—text
          説明：アプリケーション内にモーダルを表示します。
          to：/docs/components/modal
        -  label NavigationMenu
          アイコンi—lucide—file—text
          description：リンクのリストを表示します。
          to/docs/components/navigation—menu
        -  label Pagination
          アイコンi—lucide—file—text
          description：ページのリストを表示します。
          to/docs/components/pagination
        -  label Popover
          アイコンi—lucide—file—text
          description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
          to：/docs/components/popover
        -  label進捗状況
          アイコンi—lucide—file—text
          説明：タスクの進行を示す水平バーを表示します。
          to：/docs/components/progress
  クラス'w—full justify—center'
---
::

::note
矢印はアクティブなアイテムに沿ってアニメーション化されます。
::

### コンテンツオリエンテーション

`content-orientation`プロパティを使用して、コンテンツの向きを変更します。

::warning
このプロパティは`orientation`が`horizontal`の場合にのみ機能します。
::

::component-code
---
崩壊真
無視
  - アイテム
  -  arrow
  - クラス
外部
  - アイテム
externalTypes
  - ナビゲーションメニュー項目[]
小道具
  矢印true
  contentOrientation '垂直'
  アイテム
    -  labelガイド
      アイコンi—lucide—book—open
      to：/docs/getting—started
      子供：
        -  labelはじめに
          説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
          アイコンi—lucide—house
        -  labelインストール
          説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  labelコンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to：/docs/components/link
        -  label Modal
          アイコンi—lucide—file—text
          説明：アプリケーション内にモーダルを表示します。
          to：/docs/components/modal
        -  label NavigationMenu
          アイコンi—lucide—file—text
          description：リンクのリストを表示します。
          to/docs/components/navigation—menu
        -  label Pagination
          アイコンi—lucide—file—text
          description：ページのリストを表示します。
          to/docs/components/pagination
  クラス'w—full justify—center'
---
::

### アンマウント

`unmount-on-hide`プロパティを使用して、コンテンツのアンマウント動作を制御します。デフォルトは`true`です。

::component-code
---
崩壊真
無視
  - アイテム
  -  arrow
  - クラス
外部
  - アイテム
externalTypes
  -  NavigationMenuItem
小道具
  unmountOnHide false
  アイテム
    -  labelガイド
      アイコンi—lucide—book—open
      to：/docs/getting—started
      子供：
        -  labelはじめに
          説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
          アイコンi—lucide—house
        -  labelインストール
          説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
          アイコンi—lucide—クラウド—ダウンロード
        -  label 'アイコン'
          アイコン'i—lucide—smile'
          説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
        -  label 'Colors'
          アイコン'i—lucide—swatch—book'
          説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
        -  label 'テーマ'
          アイコン'i—lucide—cog'
          説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
    -  label Composables
      アイコンi—lucideデータベース
      to：/docs/composables
      子供：
        -  label defineShortcuts
          アイコンi—lucide—file—text
          説明アプリケーションのショートカットを定義します。
          へ/docs/composables/define—shortcuts
        -  label useOverlay
          アイコンi—lucide—file—text
          説明：アプリケーション内でモーダル/スライドオーバーを表示します。
          to/docs/composables/use—overlay
        -  label useToast
          アイコンi—lucide—file—text
          説明：アプリケーション内にトーストを表示します。
          /docs/composables/use—toast
    -  labelコンポーネント
      アイコンi—lucide—box
      to：/docs/components
      アクティブtrue
      子供：
        -  labelリンク
          アイコンi—lucide—file—text
          説明スーパーパワーでNuxtLinkを使用します。
          to：/docs/components/link
        -  label Modal
          アイコンi—lucide—file—text
          説明：アプリケーション内にモーダルを表示します。
          to：/docs/components/modal
        -  label NavigationMenu
          アイコンi—lucide—file—text
          description：リンクのリストを表示します。
          to/docs/components/navigation—menu
        -  label Pagination
          アイコンi—lucide—file—text
          description：ページのリストを表示します。
          to/docs/components/pagination
        -  label Popover
          アイコンi—lucide—file—text
          description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
          to：/docs/components/popover
        -  label進捗状況
          アイコンi—lucide—file—text
          説明：タスクの進行を示す水平バーを表示します。
          to：/docs/components/progress
  クラス'w—full justify—center'
---
::

::note
DOMを検査して、各項目のコンテンツがレンダリングされていることを確認できます。
::

## 例

###  Controlアクティブ項目

アクティブなアイテムを制御するには、`default-value` propまたは`v-model`ディレクティブを使用して、アイテムの`value`を指定します。`value`が指定されていない場合、最上位アイテムの場合は`item-${index}`、ネストされたアイテムの場合は`item-${level}-${index}`になります。

::component-example
---
崩壊真
名前'navigation—menu—model—value—example'
---
::

::tip
`value-key`プロパティを使用して、`v-model`または`default-value`が指定されたときにアイテムにマッチするキーを変更します。
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd {value="1"}、kbd {value="2"}、またはkbd {value="3"}を押してアクティブなアイテムを切り替えることができます。
::

### アイテム内のツールチップ付き

オリエンテーションが`vertical`でメニューが`collapsed`の場合、`tooltip` propを`true`に設定して、[ Tooltip ](/docs/components/tooltip)をラベル付きのアイテムの周りに表示できますが、各アイテムの`tooltip`プロパティを使用してデフォルトのツールチップを上書きすることもできます。`horizontal`向きを指定すると、各アイテムの`tooltip`プロパティを使用して、アイテムの周りに[ Tooltip ](/docs/components/tooltip)を表示できます。

::note
アイテムの`tooltip`プロパティは、グローバルな`tooltip` propに関係なく、常にツールチップを表示します。
::

[ Tooltip ](/docs/components/tooltip)コンポーネントからの任意のプロパティをグローバルに渡すことができます。

::component-code
---
崩壊真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  -  NavigationMenuItem [][]
アイテム
  ツールチップ
    -  true
    -  false
小道具
  ツールチップtrue
  崩壊：true
  オリエンテーション'垂直'
  アイテム
    - —ラベルリンク
        タイプ'ラベル'
      -  labelガイド
        アイコンi—lucide—book—open
        子供：
          -  labelはじめに
            説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
            アイコンi—lucide—house
          -  labelインストール
            説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
            アイコンi—lucide—クラウド—ダウンロード
          -  label 'アイコン'
            アイコン'i—lucide—smile'
            説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
          -  label 'Colors'
            アイコン'i—lucide—swatch—book'
            説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
          -  label 'テーマ'
            アイコン'i—lucide—cog'
            説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
      -  label Composables
        アイコンi—lucideデータベース
        子供：
          -  label defineShortcuts
            アイコンi—lucide—file—text
            説明アプリケーションのショートカットを定義します。
            へ/docs/composables/define—shortcuts
          -  label useOverlay
            アイコンi—lucide—file—text
            説明：アプリケーション内でモーダル/スライドオーバーを表示します。
            to/docs/composables/use—overlay
          -  label useToast
            アイコンi—lucide—file—text
            説明：アプリケーション内にトーストを表示します。
            /docs/composables/use—toast
      -  labelコンポーネント
        アイコンi—lucide—box
        to：/docs/components
        アクティブtrue
        子供：
          -  labelリンク
            アイコンi—lucide—file—text
            説明スーパーパワーでNuxtLinkを使用します。
            to：/docs/components/link
          -  label Modal
            アイコン i-lucide-file-text
            説明 ： アプリケーション 内 に モーダル を 表示 し ます 。
            to ：/docs/components/modal
          - label NavigationMenu
            アイコン i-lucide-file-text
            description ： リンク の リスト を 表示 し ます 。
            to/docs/components/navigation-menu
          - label Pagination
            アイコン i-lucide-file-text
            description ： ページ の リスト を 表示 し ます 。
            to/docs/components/pagination
          - label Popover
            アイコン i-lucide-file-text
            description ： トリガー 要素 の 周り に 浮かぶ 非 モーダル ダイアログ を 表示 し ます 。
            to ：/docs/components/popover
          - label 進捗 状況
            アイコン i-lucide-file-text
            説明 ： タスク の 進行 を 示す 水平 バー を 表示 し ます 。
            to ：/docs/components/progress
    - - ラベル GitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
        ツール チップ
          text ' GitHub で 開く '
          kbds
            - @6k
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
---
::

### アイテム の ポップ オーバー 付き

orientation が`vertical`で メニュー が`collapsed`の 場合 、`popover`prop を`true`に 設定 し て 、 子 を 含む アイテム の 周り に[Popover](/docs/components/popover)を 表示 でき ます が 、 各 アイテム の`popover`プロ パティ を 使用 し て デフォルト の ポップ オーバー を オーバー ライド する こと も でき ます 。

::note
アイテム の`popover`プロ パティ は 、 グローバル な`popover`prop に 関係 なく 、 常に ポップ オーバー を 表示 し ます 。
::

[Popover](/docs/components/popover)コンポーネント から の 任意 の プロ パティ を グローバル に 渡す こと が でき ます 。

::component-code
---
崩壊 真
無視
  - アイテム
  - オリエンテーション
  - クラス
外部
  - アイテム
externalTypes
  -  NavigationMenuItem [][]
アイテム
  ポップオーバー
    -  true
    -  false
小道具
  popover true
  崩壊：true
  オリエンテーション'垂直'
  アイテム
    - —ラベルリンク
        タイプ'ラベル'
      -  labelガイド
        アイコンi—lucide—book—open
        子供：
          -  labelはじめに
            説明Nuxtの完全なスタイルとカスタマイズ可能なコンポーネント。
            アイコンi—lucide—house
          -  labelインストール
            説明：アプリケーションにNuxt UIをインストールして設定する方法を学びます。
            アイコンi—lucide—クラウド—ダウンロード
          -  label 'アイコン'
            アイコン'i—lucide—smile'
            説明：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
          -  label 'Colors'
            アイコン'i—lucide—swatch—book'
            説明：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
          -  label 'テーマ'
            アイコン'i—lucide—cog'
            説明'`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
      -  label Composables
        アイコンi—lucideデータベース
        ポップオーバー
          モード'クリック'
        子供：
          -  label defineShortcuts
            アイコンi—lucide—file—text
            説明アプリケーションのショートカットを定義します。
            へ/docs/composables/define—shortcuts
          -  label useOverlay
            アイコンi—lucide—file—text
            説明：アプリケーション内でモーダル/スライドオーバーを表示します。
            to/docs/composables/use—overlay
          -  label useToast
            アイコンi—lucide—file—text
            説明：アプリケーション内にトーストを表示します。
            /docs/composables/use—toast
      -  labelコンポーネント
        アイコンi—lucide—box
        to：/docs/components
        アクティブtrue
        子供：
          -  labelリンク
            アイコンi—lucide—file—text
            説明スーパーパワーでNuxtLinkを使用します。
            to：/docs/components/link
          -  label Modal
            アイコンi—lucide—file—text
            説明：アプリケーション内にモーダルを表示します。
            to：/docs/components/modal
          -  label NavigationMenu
            アイコンi—lucide—file—text
            description：リンクのリストを表示します。
            to/docs/components/navigation—menu
          -  label Pagination
            アイコンi—lucide—file—text
            description：ページのリストを表示します。
            to/docs/components/pagination
          -  label Popover
            アイコンi—lucide—file—text
            description：トリガー要素の周りに浮かぶ非モーダルダイアログを表示します。
            to：/docs/components/popover
          -  label進捗状況
            アイコンi—lucide—file—text
            説明：タスクの進行を示す水平バーを表示します。
            to：/docs/components/progress
    - —ラベルGitHub
        アイコン i-simple-icons-github
        バッジ 6k
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
        ツール チップ
          text ' GitHub で 開く '
          kbds
            - @6k
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
---
::

::tip{to="#with-content-slot"}
`#content`スロット を 使用 し て 、`vertical`オリエンテーション で ポップ オーバー の 内容 を カスタマイズ でき ます 。
::

### 項目 の 破片 と badge{label="4.5+" class="align-text-top"}

`chip`プロ パティ を 使用 し て 、 アイテム の アイコン の 周り に[Chip](/docs/components/chip)を 表示 し ます 。

::component-code
---
崩壊 真
無視
  - アイテム
  - クラス
外部
  - アイテム
externalTypes
  - NavigationMenuItem [ ] [ ]
小道具
  崩壊 ： true
  オリエンテーション ' 垂直 '
  アイテム
    - - ラベル ガイド
        アイコン i-lucide-book-open
        チップ
          色 エラー
      - label Composables
        アイコン i-lucide データベース
        チップ
          色 info
          テキスト 3
      - label コンポーネント
        アイコン i-lucide-box
        to ：/docs/components
        アクティブ true
        チップ 本当
    - - ラベル GitHub
        アイコン i-simple-icons-github
        次 へhttps://github.com/nuxt/ui
        ターゲット _blank
      - label ヘルプ
        アイコン i-lucide-circle-help
        無効 true
---
::

### 下部 タブ バー 付き

`ui`プロ パティ を 使用 し て 、 NavigationMenu を 、 YouTube や Instagram の よう な アイコン と 小さな ラベル を 持つ モバイル スタイル の 下部 タブ バー に 変換 し ます 。

::component-example
---
崩壊 真
名前 ' navigation-menu-bottom-tab-bar '
---
::

### 折り たたみ ラベル 付き

`ui`prop を 使用 し て 、 折り たたま れ た とき に 各 アイコン の 下 に ラベル を 表示 し ます 。

::component-example
---
崩壊 真
名前 ' navigation-menu-collapsed-label-example '
---
::

::tip
[`compoundVariants`](/docs/getting-started/theme/components#compound-variants)を 使用 し て グローバル に これ を 行う こと も でき ます 。

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### カスタムスロット 付き

特定 の 項目 を カスタマイズ する に は 、`slot`プロ パティ を 使用 し ます 。

以下 の スロット に アクセス でき ます ：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}
- `#{{ item.slot }}-content`{lang="ts-type"}

::component-example
---
崩壊 真
名前 ' navigation-menu-custom-slot-example '
---
::

::tip{to="#slots"}
また 、`#item`、`#item-leading`、`#item-label`、`#item-trailing`、 および`#item-content`スロット を 使用 し て 、 すべて の 項目 を カスタマイズ する こと も でき ます 。
::

### トレーリング スロット 付き

`#item-trailing`スロット また は`slot`プロ パティ`#{{ item.slot }}-trailing`を 使用 し て 、 ホバー 時 に 表示 さ れる[DropdownMenu](/docs/components/dropdown-menu)を 追加 し ます 。

::component-example
---
崩壊 真
名前 ' navigation-menu-trailing-slot-example '
---
::

### コンテンツ スロット 付き

特定 の 項目 の 内容 を カスタマイズ する に は 、`#item-content`スロット また は`slot`プロ パティ`#{{ item.slot }}-content`を 使用 し ます 。

::component-example
---
崩壊 真
名前 ' navigation-menu-content-slot-example '
---
::

::note
この 例 で は 、`viewport`に`sm:w-(--reka-navigation-menu-viewport-width)`クラス を 追加 し て 動的 な 幅 を 持た せ て い ます 。 これ に は 、 コンテンツ の 最初 の 子 に 幅 を 設定 する 必要 が あり ます 。
::

## API

### Props

component-props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
