---
description: 行と列でデータを表示する応答性のあるテーブル要素。
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: TanStackテーブル
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## 使用 法

Table コンポーネント は[TanStack Table v8](https://tanstack.com/table/v8)の 上 に 構築 さ れ て おり 、[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)を 構成 する こと で 、 柔軟 で 完全 に タイプセーフ な API を 提供 し ます 。

データ を 行 と 列 として レンダリング し 、 ソート 、 フィルタリング 、 ページネーション 、 行 選択 、 展開 、 グループ 化 、 ピン 留め 、 仮想 化 を サポート する ため 、 シンプル な データテーブル から フル 機能 の データ グリッド まで 、 あらゆる もの を 構築 でき ます 。

::component-example
---
ソース ： false
name ' table-example '
クラス ' ! p-0 '
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="ソースコードを見る"}
この 例 は`Table`コンポーネント の 最も 一般 的 な 使用 例 を 示し て い ます 。 ソース コード は GitHub で 確認 し て ください 。
::

### データ

`data`prop を オブジェクト の 配列 として 使用 し ます 。 カラム は オブジェクト の キー に 基づい て 生成 さ れ ます 。

::component-code
---
きれい 真
崩壊 真
クラス ' ! p-0 '
無視
  - データ
  - クラス
外部
  - データ
小道具
  データ
    - id ' 4600 '
      投稿 日時 ： ' 2024 - 03 - 11T15 30 00 '
      ステータス ' 有料 '
      E メール ： ' ジェームズ · アンダーソン@example.com'
      金額 594
    - id ' 4599 '
      日付 ： ' 2024 - 03 - 11T10 10 00 '
      ステータス ' 失敗 '
      メール ： ' mia.white@example.com'
      金額 276
    - id ' 4598 '
      投稿 日時 ' 2024 - 03 - 11T08 50 00 '
      ステータス ' 返金 '
      メール アドレス ： ' william.brown@example.com'
      金額 315
    - id ' 4597 '
      日 付 ' 2024 - 03 - 10T19 45 00 '
      ステータス ' 有料 '
      E メール ： ' emma.davis@example.com'
      金額 529
    - id ' 4596 '
      日 付 ' 2024 - 03 - 10T15 55 00 '
      ステータス ' 有料 '
      E メール ： ' ethan.harris@example.com'
      金額 639
  クラス ' flex-1 '
---
::

### カラム

`columns`prop を[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)オブジェクト の 配列 として 使用 し ます 。

- `accessorKey`[ カラム の 値 を 抽出 する とき に 使用 する 行 オブジェクト の キー ]{class="text-muted"}
`header`[ カラム に 表示 する ヘッダ 。 文字 列 が 渡さ れ た 場合 、 カラム ID の デフォルト として 使用 でき ます 。 関数 が 渡さ れ た 場合 、 ヘッダ に props オブジェクト が 渡さ れ 、 レンダリング さ れ た ヘッダ 値 を 返す 必要 が あり ます （ 正確 な 型 は 使用 する アダプター によって 異なり ます ） 。 ]{class="text-muted"}
- [`footer`](#with-column-footer)[ 列 に 表示 する フッター 。 ヘッダー と 全く 同じ です が 、 テーブル の 下 に 表示 さ れ ます 。 ]{class="text-muted"}
`cell`[ 列 の 各行 を 表示 する セル 。 関数 が 渡さ れる と 、 セル の props オブジェクト が 渡さ れ 、 レンダリング さ れ た セル の 値 を 返し ます （ 正確 な 型 は 使用 する アダプター によって 異なり ます ） 。 ]{class="text-muted"}
- `meta`[ 列 の 追加 プロ パティ ]{class="text-muted"}
  - `class`
    - `td`[`td`要素 に 適用 する クラス ]{class="text-muted"}
    - `th`[`th`要素 に 適用 する クラス ]{class="text-muted"}
  - `style`
    - `td`[`td`要素 に 適用 する スタイル ]{class="text-muted"}
    - `th`[`th`要素 に 適用 する スタイル ]{class="text-muted"}
  - [`colspan`](#with-column-span)
    - `td`[`td`要素 に 適用 する colspan 属 性 ]{class="text-muted"}
  - [`rowspan`](#with-column-span)
    - `td`[`td`要素 に 適用 する rowspan 属 性 ]{class="text-muted"}

コンポーネント や その他 の HTML 要素 を レンダリング する に は 、[`h`function](https://vuejs.org/api/render-function.html#h)`header`と`cell`props 内 で Vue を 使用 する 必要 が あり ます 。 これ は スロット を 使用 する 他 の コンポーネント と は 異なり ます が 、 より 柔軟性 が あり ます 。

::tip{to="#with-slots" aria-label="スロット付きテーブル列"}
スロット を 使用 し て 、 テーブル の ヘッダー と データセル を カスタマイズ する こと も でき ます 。
::

::component-example
---
きれい 真
崩壊 真
クラス ' ! p-0 '
name ' table-columns-example '
ハイライト
  - @53
  - @108
---
::

::note
`h`で コンポーネント を レンダリング する 場合 、`resolveComponent`関数 を 使用 する か 、`#components`から インポート する こと が でき ます 。
::

### Meta

`meta`prop を オブジェクト として 使用 し ます[TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)。

- `class`
  - `tr`[`tr`要素 に 適用 する クラス ]{class="text-muted"}
- `style`
  - `tr`[`tr`要素 に 適用 する スタイル ]{class="text-muted"}

::component-example
---
きれい 真
崩壊 真
name ' table-meta-example '
クラス ' ! p-0 '
ハイライト
  - @128
  - @140
---
::

### ローディング

読み込み 状態 を 表示 する に は`loading`prop 、 色 を 変更 する に は`loading-color`prop 、 アニメーション を 変更 する に は`loading-animation`prop を 使用 し ます 。

::component-code
---
きれい 真
崩壊 真
クラス ' ! p-0 '
無視
  - データ
  - クラス
外部
  - データ
小道具
  読み込み 真
  loadingColor primary
  ローディング アニメーション カルーセル
  データ
    - id ' 4600 '
      投稿 日時 ： ' 2024 - 03 - 11T15 30 00 '
      ステータス ' 有料 '
      E メール ： ' ジェームズ · アンダーソン@example.com'
      金額 594
    - id ' 4599 '
      日付 ： ' 2024 - 03 - 11T10 10 00 '
      ステータス ' 失敗 '
      メール ： ' mia.white@example.com'
      金額 276
    - id ' 4598 '
      投稿 日時 ' 2024 - 03 - 11T08 50 00 '
      ステータス ' 返金 '
      メール アドレス ： ' william.brown@example.com'
      金額 315
    - id ' 4597 '
      日 付 ' 2024 - 03 - 10T19 45 00 '
      ステータス ' 有料 '
      E メール ： ' emma.davis@example.com'
      金額 529
    - id ' 4596 '
      日 付 ' 2024 - 03 - 10T15 55 00 '
      ステータス ' 有料 '
      E メール ： ' ethan.harris@example.com'
      金額 639
  クラス ' flex-1 '
---
::

::tip
ユーザー が 縮小 し た 動き を 好む 場合 、 ロード アニメーション は 自動的 に 無効 に なり 、 バー は 代わり に 全幅 の パルス として 表示 さ れ ます 。
::

### スティッキー

`sticky`プロ パティ を 使用 し て 、 ヘッダー また は フッター を スティッキー に し ます 。

::component-code
---
きれい 真
崩壊 真
クラス ' ! p-0 '
無視
  - データ
  - クラス
外部
  - データ
アイテム
  スティッキー ：
    - true
    - false
小道具
  スティッキー true
  データ
    - id ' 4600 '
      投稿 日時 ： ' 2024 - 03 - 11T15 30 00 '
      ステータス ' 有料 '
      E メール ： ' ジェームズ · アンダーソン@example.com'
      金額 594
    - id ' 4599 '
      日付 ： ' 2024 - 03 - 11T10 10 00 '
      ステータス ' 失敗 '
      メール ： ' mia.white@example.com'
      金額 276
    - id ' 4598 '
      投稿 日時 ' 2024 - 03 - 11T08 50 00 '
      ステータス ' 返金 '
      メール アドレス ： ' william.brown@example.com'
      金額 315
    - id ' 4597 '
      日 付 ' 2024 - 03 - 10T19 45 00 '
      ステータス ' 有料 '
      E メール ： ' emma.davis@example.com'
      金額 529
    - id ' 4596 '
      日 付 ' 2024 - 03 - 10T15 55 00 '
      ステータス ' 有料 '
      E メール ： ' ethan.harris@example.com'
      金額 639
    - id ' 4595 '
      日 付 ' 2024 - 03 - 10T15 55 00 '
      ステータス ' 有料 '
      E メール ： ' ethan.harris@example.com'
      金額 639
    - id ' 4594 '
      日 付 ' 2024 - 03 - 10T15 55 00 '
      ステータス ' 有料 '
      E メール ： ' ethan.harris@example.com'
      金額 639
  クラス ' flex-1 max-h- [ 312px ] '
---
::

## 例

### 行 アクション 付き

[DropdownMenu](/docs/components/dropdown-menu)コンポーネント を レンダリング する 新しい 列 を 追加 し て 、 行 アクション を レンダリング でき ます 。

::component-example
---
きれい 真
崩壊 真
名前 ' table-row-actions-example '
ハイライト
  - @115
  - @141
クラス ' ! p-0 '
---
::

### 拡張 可能 な 行

[Button](/docs/components/button)コンポーネント を`cell`の 内部 に レンダリング する 新しい 列 を 追加 し て 、 TanStack テーブル[Expanding API](https://tanstack.com/table/v8/docs/api/features/expanding)を 使用 し て 行 の 展開 可能 な 状態 を 切り替える こと が でき ます 。

::caution
行 を パラメータ として 受け取る 展開 さ れ た コンテンツ を レンダリング する に は 、`#expanded`スロット を 定義 する 必要 が あり ます 。
::

::component-example
---
きれい 真
崩壊 真
名前 ' table-row-expandable-example '
ハイライト
  - @55
  - @72
クラス ' ! p-0 '
---
::

::tip
`expanded`プロパティを使用して、行の展開可能な状態を制御できます（`v-model`でバインドできます）。
::

::note
このアクションを`actions``DropdownMenu`](/docs/components/dropdown-menu)コンポーネントに追加することもできます。
::

### グループ化された行

TanStack Table [ Grouping API ](https://tanstack.com/table/v8/docs/api/features/grouping)を使用して、セルに追加されたボタンを使用して、指定した列値に基づいて行をグループ化し、副行の表示/非表示を切り替えることができます。

#### 重要な部品

*  propにグループ化したい列IDの配列を追加します。
* `grouping-options` propを追加します。`getGroupedRowModel`を含める必要があります。`@tanstack/vue-table`からインポートするか、独自に実装することができます。
* `row.toggleExpanded()`メソッドを使用して行を展開します。`#expanded`スロットも切り替えます。
* 列定義で`aggregateFn`を使用して、行の集計方法を定義します。
* `agregatedCell`レンダラーは、`cell`レンダラーがない場合にのみ動作します。

::component-example
---
きれい真
崩壊真
name 'table—group—rows—example'
ハイライト
  -  157
  -  160
クラス'！p—0'
---
::

### 行ピン留め付き：badge {label="4.6+" class="align-text-top"}

[ Button ](/docs/components/button)コンポーネントを`cell`内にレンダリングする列を追加して、TanStackテーブル[ Rowピン留めAPI ](https://tanstack.com/table/v8/docs/api/features/row-pinning)を使用して行のピン留め状態を切り替えることができます。ピン留めされた行は、ソートやフィルタリングに関係なく、テーブルの上部または下部に残ります。

::component-example
---
きれい真
崩壊真
名前'table—row—pinning—example'
overflowHidden true
ハイライト
  -  91
  -  107
  -  160
  -  165
  -  168
クラス'！p—0'
---
::

::tip
`row-pinning`プロパティを使用して、行のピン留め状態を制御できます`v-model`でバインドできます。
::

### 行選択付き

[ Checkbox ](/docs/components/checkbox)コンポーネント内に、`header`および`cell`内に表示する新しい列を追加して、[ Row Selection API ](https://tanstack.com/table/v8/docs/api/features/row-selection)を使用して行を選択できます。

::component-example
---
きれい真
崩壊真
名前'table—row—selection—example'
ハイライト
  -  55
  -  72
クラス'！p—0'
---
::

::tip
`row-selection`プロパティを使用して、行の選択状態を制御できます`v-model`でバインドできます。
::

###  With行選択イベント

`@select`リスナーを追加して、チェックボックス列の有無にかかわらず行をクリックできるようにすることができます。

::note
ハンドラ関数は、それぞれ第1引数として`Event`と`TableRow`インスタンスを受け取ります。
::

::component-example
---
きれい真
崩壊真
名前'table—row—select—event—example'
ハイライト
  -  124
  -  131
クラス'！p—0'
---
::

::tip
これを使用して、ページに移動したり、モーダルを開いたり、行を手動で選択したりできます。
::

###  With行コンテキストメニューイベント

`@contextmenu`リスナーを追加して行を右クリック可能にし、テーブルを[ ContextMenu ](/docs/components/context-menu)コンポーネントでラップして行アクションなどを表示できます。

::note
ハンドラ関数は、それぞれ第1引数として`Event`と`TableRow`インスタンスを受け取ります。
::

::component-example
---
きれい真
崩壊真
名前'table—row—context—menu—event—example'
ハイライト
  -  133
  -  173
クラス'！p—0'
---
::

###  With行ホバーイベント

`@hover`リスナーを追加して行をホバブルにしたり、[ Popover ](/docs/components/popover)または[ Tooltip ](/docs/components/tooltip)コンポーネントを使用して行の詳細を表示できます。

::note
ハンドラ関数は、それぞれ第1引数として`Event`と`TableRow`インスタンスを受け取ります。
::

::component-example
---
きれい真
崩壊真
名前'table—row—hover—event—example'
ハイライト
  -  129
  -  152
クラス'！p—0'
---
::

::note
この例は、カーソルを後続するPopover [に似ています。例](/docs/components/popover#with-following-cursor)[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用して、カーソルを1行から別の行に移動したときにPopoverがあまりにも速く開いたり閉じたりするのを防ぎます。
::

### カラムフッター付き

`footer`プロパティを列定義に追加して、列のフッターをレンダリングできます。

::component-example
---
きれい真
崩壊真
name 'table—column—footer—example'
ハイライト
  -  100
  - の@@ 112
クラス'！p—0'
---
::

### カラムスパン付き

`meta`列の`colspan`および`rowspan`プロパティを使用してセルをマージできます。これらのプロパティは、静的な値またはセルを受け取ってspan値を返す関数を受け入れます。

::note
`rowspan`を使用する場合、前の行のスパンに「吸収」されたセルを視覚的に隠す必要があります。`class`メタを使用して、それらのセルの`'hidden'`を返す関数を使用します。
::

::component-example
---
きれい真
崩壊真
名前'table—column—span—example'
クラス'！p—0'
---
::

### カラムソート付き

`header`列を更新して、`header`内の[ Button ](/docs/components/button)コンポーネントをレンダリングし、TanStack Table [ Sorting API ](https://tanstack.com/table/v8/docs/api/features/sorting)を使用してソート状態を切り替えることができます。

これらの列にも`enableSorting: true`を設定します。これにより`aria-sort`が`<th>`に置かれ、スクリーンリーダーは列の現在のソート状態（`none`、`ascending`、`descending`）を読み取ることができます。`Button`は、それを変更するコントロールのままです。

::component-example
---
きれい真
崩壊真
名前'table—column—sorting—example'
ハイライト
  -  90
  -  106
クラス'！p—0'
---
::

::tip
`sorting`プロパティを使用して、列のソート状態を制御できます（`v-model`でバインドできます）。
::

再利用可能なコンポーネントを作成して、列ヘッダーをソート可能にすることもできます。

::component-example
---
きれい真
崩壊真
名前'table—column—sorting—reusable'
ハイライト
  -  115
  -  166
クラス'！p—0'
---
::

::note
この例では、関数を使用して列ヘッダーを定義していますが、実際のコンポーネントを作成することもできます。
::

### カラムピン留め付き

`header`を更新して、`header`内の[ Button ](/docs/components/button)コンポーネントをレンダリングし、TanStack Table [ Columnピン留めAPI ](https://tanstack.com/table/v8/docs/api/features/column-pinning)を使用してピン留め状態を切り替えることができます。

::note
ピン留めされた列はテーブルの左右に貼り付けられます。カラムピン留めを使用する場合、特に複数のピン留めされた列で適切な列幅の処理を確実にするために、列に`size`値を明示的に定義する必要があります。
::

::component-example
---
きれい真
崩壊真
overflowHidden true
名前'table—column—pinning—example'
ハイライト
  -  108
  -  126
クラス'！p—0オーバーフロークリップ'
---
::

::tip
`column-pinning`プロパティを使用して、列のピン留め状態を制御できます`v-model`でバインドできます。
::

### カラム可視化

[ DropdownMenu ](/docs/components/dropdown-menu)コンポーネントを使用して、TanStackテーブル[ Column Visibility API ](https://tanstack.com/table/v8/docs/api/features/column-visibility)を使用して列の表示を切り替えることができます。

::component-example
---
きれい真
崩壊真
名前'table—column—visibility—example'
ハイライト
  -  121
  -  146
クラス'！p—0'
---
::

::tip
`column-visibility`プロパティを使用して、列の表示状態を制御できます（`v-model`でバインドできます）。
::

### カラムフィルタ付き

[ Input ](/docs/components/input)コンポーネントを使用して、TanStackテーブル[ Column Filtering API ](https://tanstack.com/table/v8/docs/api/features/column-filtering)を使用して列ごとに行をフィルタリングできます。

::component-example
---
きれい真
崩壊真
名前'table—column—filters—example'
ハイライト
  -  123
  -  128
クラス'！p—0'
---
::

::tip
`column-filters`プロパティを使用して、列のフィルター状態を制御できます（`v-model`でバインドできます）。
::

### グローバルフィルタ付き

[ Input ](/docs/components/input))[グローバルフィルタリングAPI ](https://tanstack.com/table/v8/docs/api/features/global-filtering)を使用して行をフィルタリングできます。

::component-example
---
きれい真
崩壊真
name 'table—global—filter—example'
クラス'！p—0'
ハイライト
  -  116
---
::

::tip
`global-filter`プロパティを使用して、グローバルフィルターの状態を制御できます`v-model`でバインドできます。
::

### ページネーション付き

[ Pagination ](/docs/components/pagination)コンポーネントを使用して、[ Pagination API ](https://tanstack.com/table/v8/docs/api/features/pagination)を使用してページネーション状態を制御できます。

[ Pagination Guide ](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)で説明しているように、さまざまなページネーションのアプローチがあります。この例ではクライアント側のページネーションを使用しているため、`getPaginationRowModel()`{lang="ts-type"}関数を手動で渡す必要があります。

::component-example
---
きれい真
崩壊真
name 'table—pagination—example'
クラス'！p—0'
ハイライト
  -  204
  - の@@ 209
---
::

::tip
`pagination`プロパティを使用してページネーション状態を制御できます`v-model`でバインドできます。
::

### 取得したデータ

APIからデータをフェッチしてテーブルで使用できます。

::component-example
---
きれい真
崩壊真
name 'table—fetch—example'
ハイライト
  -  15
  -  26
クラス'！p—0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、初期レンダリングをブロックすることなくクライアント上でデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックして、フェッチの前後に読み込みインジケータを表示します。
::

### 無限スクロール付き

サーバーサイドのページネーションを使用する場合は、[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll)を使用して、ユーザーがスクロールするたびにさらにデータを読み込むことができます。

::component-example
---
きれい真
崩壊真
ハイライト
  -  72
  -  83
overflowHidden true
名前'table—infinity—scroll—example'
クラス'！p—0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上でデータを取得します。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。ユーザーがスクロールすると、追加のページが読み込まれます。
::

### ドラッグアンドドロップで

[`useSortable`](https://vueuse.org/integrations/useSortable/)[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)から構成することができます。この統合は[ Sortable.js ](https://sortablejs.github.io/Sortable/)シームレスなドラッグアンドドロップ体験を提供します

::note
テーブルrefはtbody要素を公開しないので、`:ui` propを使って一意のクラスを追加し、`useSortable`例`:ui="{ tbody: 'my-table-tbody' }"`でターゲットを設定します。
::

::component-example
---
きれい真
崩壊真
ハイライト
  -  81
  -  83
name 'table—drag—and—drop—example'
クラス'！p—0'
---
::

### 仮想化の場合：badge {label="4.1+" class="align-text-top"}

`virtualize` propを使用して、大規模なデータセットの仮想化をbooleanまたは`{ estimateSize: 65, overscan: 12 }`のようなオプションを持つオブジェクトとして有効にします。また、他の[ TanStack仮想オプション](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)を渡して、仮想化の動作をカスタマイズすることもできます。`sticky` propは`virtualize`と組み合わせて動作します。大きなデータセットをスクロールしながらヘッダーやフッターを見えるようにします

::warning
仮想化が有効な場合、行ピン留めはサポートされない。
::

::component-example
---
きれい真
崩壊真
overflowHidden true
name 'table—virtualize—example'
クラス'！p—0'
---
::

::note
仮想化が正しく機能するためには、テーブル上に高さ制約が必要です例`class="h-[400px]"`。
::

### 外部スクロール要素付き：badge {label="4.10+" class="align-text-top"}

`virtualize` propに`getScrollElement`関数を渡して、テーブル自身のルートではなく、祖先のスクロールコンテナに対して仮想化します。`scrollMargin`をスクロール要素の開始からテーブルのオフセット例えば、その上のコンテンツの高さに設定すると、ヘッダーとテーブル本体は1つのスクロールバーを共有します。

::component-example
---
きれい真
崩壊真
overflowHidden true
名前'table—external—scroll—example'
クラス'！p—0'
---
::

::note
このモードでは、テーブルルートの`overflow`は`visible`であり、外部コンテナは両方の軸でスクロールを所有しているので、広いテーブルを水平方向にスクロールできるようにするために`overflow-y-auto`だけではなく、`overflow-auto`を指定します。`sticky`ヘッダーはそのコンテナにアンカーされます。
::

### ツリーデータ付き

`get-sub-rows`プロパティを使用して、テーブル内の階層ツリーデータを表示できます。
たとえば、データオブジェクトに`children`配列がある場合、`:get-sub-rows="row => row.children"`を設定して行を展開できるようにします。

::component-example
---
きれい真
崩壊真
ハイライト
  -  175
名前'table—tree—data—example'
クラス'！p—0'
---
::

### スロット付き

スロットを使用して、テーブルのヘッダーとデータセルをカスタマイズできます。

`#<column>-header`スロットを使用して、列のヘッダーをカスタマイズします。スロットスコープの`column`、`header`、および`table`プロパティにアクセスできます。

列のセルをカスタマイズするには、`#<column>-cell`スロットを使用します。スロットスコープの`cell`、`column`、`getValue`、`renderValue`、`row`、および`table`プロパティにアクセスできます。

::component-example
---
きれい真
崩壊真
name 'table—slots—example'
クラス'！p—0'
---
::

##  API

###  Props

component—props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
このコンポーネントは、すべてのネイティブ`<table>` HTML属性もサポートします。
::

### スロット

コンポーネントスロット

### エクスポーズ

型付きコンポーネントインスタンスには、[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用してアクセスできます。

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

これにより、以下にアクセスできます：

| 名前|タイプ|
| ---- | ---- |
| `tableRef`{lang="ts-type"}| `Ref<HTMLTableElement \| null>`{lang="ts-type"}|
| `tableApi`{lang="ts-type"}| [`Table`{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api)|

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
