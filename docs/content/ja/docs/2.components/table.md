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

## 使用法

Tableコンポーネントは[TanStack Table v 8](https://tanstack.com/table/v8)上に構築され、[useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)コンポーザブルによって供給され、柔軟で完全なタイプセーフAPIを提供します。

データを行と列としてレンダリングし、ソート、フィルタリング、ページネーション、行選択、展開、グループ化、ピン留め、仮想化をサポートするため、シンプルなデータテーブルからフル機能のデータグリッドまで、あらゆるものを構築できます。

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="ソースコードを見る"}
この例は`Table`コンポーネントの最も一般的なユースケースを示しています。ソースコードはGitHubで確認してください。
::

### Data

`data`プロパティをオブジェクトの配列として使用すると、オブジェクトのキーに基づいて列が生成されます。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

### Columns

`columns`プロパティを[ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def)オブジェクトの配列として使用します。

- `accessorKey` [列の値を抽出する際に使用する行オブジェクトのキー] {class="text-muted"}
- `header` [カラムに表示するヘッダ。文字列が渡された場合、カラムIDのデフォルトとして使用できます。関数が渡された場合、ヘッダにpropsオブジェクトが渡され、レンダリングされたヘッダ値を返します正確な型は使用するアダプタによって異なります。] {class="text-muted"}
- [`footer`](#with-column-footer) [列に表示するフッター。ヘッダーと同じように動作しますが、テーブルの下に表示されます。] {class="text-muted"}
- `cell` [列の各行を表示するセル。関数が渡された場合、そのセルのpropsオブジェクトが渡され、レンダリングされたセルの値を返します正確な型は使用するアダプターによって異なります。] {class="text-muted"}
- `meta` [カラムの追加プロパティ] {class="text-muted"}
  - `class`
    - `td` [`td`要素に適用するクラス] {class="text-muted"}
    - `th` [`th`要素に適用するクラス] {class="text-muted"}
  - `style`
    - `td` [`td`要素に適用するスタイル] {class="text-muted"}
    - `th` [`th`要素に適用するスタイル] {class="text-muted"}
  - [`colspan`](#with-column-span)
    - `td` [`td`要素に適用するcolspan属性] {class="text-muted"}
  - [`rowspan`](#with-column-span)
    - `td`：[`td`要素に適用するrowspan属性] {class="text-muted"}

コンポーネントや他のHTML要素をレンダリングするには、`header`と`cell`のprops内でVue [`h`関数](https://vuejs.org/api/render-function.html#h)を使用する必要があります。これはスロットを使用する他のコンポーネントとは異なりますが、より柔軟性があります。

::tip{to="#with-slots" aria-label="スロット付きテーブル列"}
スロットを使用して、テーブルのヘッダーとデータセルをカスタマイズすることもできます。
::

::component-example
---
prettier: true
collapse: true
class: '!p-0'
name: 'table-columns-example'
highlights:
  - 53
  - 108
---
::

::note
`h`でコンポーネントをレンダリングする場合、`resolveComponent`関数を使用するか、`#components`からインポートできます。
::

### Meta

`meta`プロパティをオブジェクトとして使用して（[TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta)）、次のようなプロパティを渡します。

- `class`
  - `tr`：[`tr`要素に適用するクラス] {class="text-muted"}
- `style`
  - `tr` [`tr`要素に適用するスタイル] {class="text-muted"}

::component-example
---
prettier: true
collapse: true
name: 'table-meta-example'
class: '!p-0'
highlights:
  - 128
  - 140
---
::

### Loading

`loading`プロパティを使用してロード状態を表示し、`loading-color`プロパティを使用して色を変更し、`loading-animation`プロパティを使用してアニメーションを変更します。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
props:
  loading: true
  loadingColor: primary
  loadingAnimation: carousel
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1'
---
::

::tip
ユーザーが縮小した動きを好む場合、ロードアニメーションは自動的に無効になり、バーは代わりに全幅のパルスとして表示されます。
::

### Sticky

`sticky`プロパティを使用してヘッダーやフッターをスティッキーにします。

::component-code
---
prettier: true
collapse: true
class: '!p-0'
ignore:
  - data
  - class
external:
  - data
items:
  sticky:
    - true
    - false
props:
  sticky: true
  data:
    - id: '4600'
      date: '2024-03-11T15:30:00'
      status: 'paid'
      email: 'james.anderson@example.com'
      amount: 594
    - id: '4599'
      date: '2024-03-11T10:10:00'
      status: 'failed'
      email: 'mia.white@example.com'
      amount: 276
    - id: '4598'
      date: '2024-03-11T08:50:00'
      status: 'refunded'
      email: 'william.brown@example.com'
      amount: 315
    - id: '4597'
      date: '2024-03-10T19:45:00'
      status: 'paid'
      email: 'emma.davis@example.com'
      amount: 529
    - id: '4596'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4595'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
    - id: '4594'
      date: '2024-03-10T15:55:00'
      status: 'paid'
      email: 'ethan.harris@example.com'
      amount: 639
  class: 'flex-1 max-h-[312px]'
---
::

## 例

###  With row actions

行アクションをレンダリングするために、`cell`内に[DropdownMenu](/docs/components/dropdown-menu)コンポーネントをレンダリングする新しい列を追加できます。

::component-example
---
prettier: true
collapse: true
name: 'table-row-actions-example'
highlights:
  - 115
  - 141
class: '!p-0'
---
::

### 拡張可能な行

TanStack Table [Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding)を使用して行の展開可能な状態を切り替えるには、`cell`内に[Button](/docs/components/button)コンポーネントをレンダリングする新しい列を追加できます。

::caution
行をパラメータとして受け取る展開されたコンテンツをレンダリングするために`#expanded`スロットを定義する必要があります。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-expandable-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
`expanded`プロパティを使用して行の展開可能な状態を制御できます（`v-model`でバインドできます）。
::

::note
このアクションは、`actions`列内の[`DropdownMenu`](/docs/components/dropdown-menu)コンポーネントに追加することもできます。
::

### グループ化された行

TanStack Table [GroupAPIs](https://tanstack.com/table/v8/docs/api/features/grouping)を使用してセルに追加されたボタンで、指定した列の値に基づいて行をグループ化し、サブ行の表示/非表示を切り替えることができます。

#### 重要な部品

*  `grouping`プロパティにグループ化したい列IDの配列を追加します。
*  `grouping-options` propを追加します。`getGroupedRowModel`が含まれている必要があります。`@tanstack/vue-table`からインポートするか、独自に実装することができます。
* x`row.toggleExpanded()`メソッドを使用して行を展開します。`#expanded`スロットも切り替えます。
* 行の集計方法を定義するには、列定義で`aggregateFn`を使用します。
カラム定義の* `agregatedCell`レンダラーは`cell`レンダラーがない場合にのみ動作します。

::component-example
---
prettier: true
collapse: true
name: 'table-grouped-rows-example'
highlights:
  - 157
  - 160
class: '!p-0'
---
::

### 行ピン留め付きbadge{label="4.6+" class="align-text-top"}

[Button](/docs/components/button)コンポーネントを`cell`内にレンダリングする列を追加して、TanStackテーブル[RowピンニングAPIs](https://tanstack.com/table/v8/docs/api/features/row-pinning)を使用して行のピン留め状態を切り替えることができます。ピン留めされた行は、ソートやフィルタリングに関係なく、テーブルの上部または下部に残ります。

::component-example
---
prettier: true
collapse: true
name: 'table-row-pinning-example'
overflowHidden: true
highlights:
  - 91
  - 107
  - 160
  - 165
  - 168
class: '!p-0'
---
::

::tip
`row-pinning`プロパティを使用して行のピン留め状態を制御できます（`v-model`でバインドできます）。
::

### 行選択

[Checkbox](/docs/components/checkbox)コンポーネントを`header`および`cell`内にレンダリングする新しい列を追加して、TanStack Table [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection)を使用して行を選択できます。

::component-example
---
prettier: true
collapse: true
name: 'table-row-selection-example'
highlights:
  - 55
  - 72
class: '!p-0'
---
::

::tip
`row-selection`プロパティを使用して行の選択状態を制御できます（`v-model`でバインドできます）。
::

### With行選択イベント

`@select`リスナーを追加して、チェックボックス列の有無にかかわらず行をクリック可能にできます。

::note
handler関数は、それぞれ第1引数と第2引数として`Event`インスタンスを受け取ります。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-select-event-example'
highlights:
  - 124
  - 131
class: '!p-0'
---
::

::tip
これを使用して、ページに移動したり、モーダルを開いたり、行を手動で選択したりできます。
::

### With行コンテキストメニューイベント

`@contextmenu`リスナーを追加して行を右クリックできるようにしたり、テーブルを[ Context Menu](/docs/components/context-menu)コンポーネントでラップして行アクションを表示したりできます。

::note
handler関数は、それぞれ第1引数と第2引数として`Event`インスタンスを受け取ります。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-context-menu-event-example'
highlights:
  - 133
  - 173
class: '!p-0'
---
::

### With行ホバーイベント

`@hover`リスナーを追加して行をホバブルにしたり、[Popover](/docs/components/popover)または[Tooltip](/docs/components/tooltip)コンポーネントを使用して行の詳細を表示したりできます。

::note
handler関数は、それぞれ第1引数と第2引数として`Event`インスタンスを受け取ります。
::

::component-example
---
prettier: true
collapse: true
name: 'table-row-hover-event-example'
highlights:
  - 129
  - 152
class: '!p-0'
---
::

::note
この例は、ポップオーバー [ with following cursor example](/docs/components/popover#with-following-cursor)に似ており、[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)を使用して、カーソルを行から行に移動する際にポップオーバーが速く開閉するのを防ぎます。
::

### コラムフッター付き

列定義に`footer`プロパティを追加して、列のフッターをレンダリングできます。

::component-example
---
prettier: true
collapse: true
name: 'table-column-footer-example'
highlights:
  - 100
  - 112
class: '!p-0'
---
::

### Withカラムスパン

`meta`列の`colspan`および`rowspan`プロパティを使用して、セルをマージできます。これらのプロパティは、静的な値、またはセルを受け取ってspan値を返す関数を受け入れます。

::note
`rowspan`を使用する場合、前の行のスパンによって「吸収」されたセルは視覚的に非表示にする必要があります。`class`メタで、それらのセルの`'hidden'`を返す関数を使用してください。
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### カラムソート付き

列`header`を更新して`header`内の[Button](/docs/components/button)コンポーネントをレンダリングし、TanStack Table [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting)を使用してソート状態を切り替えることができます。

これらの列にも`enableSorting: true`を設定します。これにより`aria-sort`が`<th>`に置かれ、スクリーンリーダーは列の現在のソート状態（`none`、`ascending`、`descending`）を読み取ることができます。`Button`はそれを変更するコントロールのままです。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-example'
highlights:
  - 90
  - 106
class: '!p-0'
---
::

::tip
`sorting`プロパティを使用して列のソート状態を制御できます（`v-model`にバインドできます）。
::

再利用可能なコンポーネントを作成して、列ヘッダーをソート可能にすることもできます。

::component-example
---
prettier: true
collapse: true
name: 'table-column-sorting-reusable-example'
highlights:
  - 115
  - 166
class: '!p-0'
---
::

::note
この例では、関数を使用して列ヘッダーを定義していますが、実際のコンポーネントを作成することもできます。
::

### コラムピン留め付

列`header`を更新して`header`内の[Button](/docs/components/button)コンポーネントをレンダリングし、TanStack Table [Columnピン留めAPIs](https://tanstack.com/table/v8/docs/api/features/column-pinning)を使用してピン留め状態を切り替えることができます。

::note
ピン留めされた列はテーブルの左側または右側に貼り付けられます。カラムピン留めを使用する場合、特に複数のピン留めされた列で適切な列の幅を扱うために、カラムに明示的に`size`値を定義する必要があります。
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-column-pinning-example'
highlights:
  - 108
  - 126
class: '!p-0 overflow-clip'
---
::

::tip
`column-pinning`プロパティを使用して列のピン留め状態を制御できます（`v-model`でバインドできます）。
::

### カラム可視化

[DropdownMenu](/docs/components/dropdown-menu)コンポーネントを使用して、TanStack Table [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility)を使用して列の表示を切り替えることができます。

::component-example
---
prettier: true
collapse: true
name: 'table-column-visibility-example'
highlights:
  - 121
  - 146
class: '!p-0'
---
::

::tip
`column-visibility`プロパティを使用して列の表示状態を制御できます（`v-model`でバインドできます）。
::

### カラムフィルタ付き

[Input](/docs/components/inputxph59xコンポーネントを使用して、TanStackテーブル[Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering)を使用して行を列ごとにフィルタリングできます。

::component-example
---
prettier: true
collapse: true
name: 'table-column-filters-example'
highlights:
  - 123
  - 128
class: '!p-0'
---
::

::tip
`column-filters`プロパティを使用して、列のフィルター状態を制御できます（`v-model`でバインドできます）。
::

### グローバルフィルタ付き

[Input](/docs/components/input)コンポーネントを使用して、TanStack Table [グローバルフィルタリングAPIs](https://tanstack.com/table/v8/docs/api/features/global-filtering)を使用して行をフィルタリングできます。

::component-example
---
prettier: true
collapse: true
name: 'table-global-filter-example'
class: '!p-0'
highlights:
  - 116
---
::

::tip
`global-filter`プロパティを使用してグローバルフィルタの状態を制御できます（`v-model`にバインドできます）。
::

### ページネーション付き

[Pagination](/docs/components/pagination)コンポーネントを使用して、[Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination)を使用してページネーション状態を制御できます。

[Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)で説明されているように、さまざまなページネーションアプローチがあります。この例ではクライアント側のページネーションを使用しているため、手動で`getPaginationRowModel()`{lang="ts-type"}関数を渡す必要があります。

::component-example
---
prettier: true
collapse: true
name: 'table-pagination-example'
class: '!p-0'
highlights:
  - 204
  - 209
---
::

::tip
`pagination`プロパティを使用してページネーション状態を制御できます（`v-model`にバインドできます）。
::

### 取得したデータ

APIからデータをフェッチしてテーブルで使用できます。

::component-example
---
prettier: true
collapse: true
name: 'table-fetch-example'
highlights:
  - 15
  - 26
class: '!p-0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上のデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。
::

### 無限スクロール

サーバーサイドのページネーションを使用する場合は、[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll)を使用して、ユーザーがスクロールするにつれてより多くのデータをロードできます。

::component-example
---
prettier: true
collapse: true
highlights:
  - 72
  - 83
overflowHidden: true
name: 'table-infinite-scroll-example'
class: '!p-0'
---
::

::note
この例では、`useLazyFetch`と`server: false`を使用して、最初のレンダリングをブロックすることなくクライアント上のデータをフェッチします。読み込み状態は`pending`と`idle`の両方のステータスをチェックし、フェッチの前後に読み込みインジケータを表示します。ユーザーがスクロールすると、追加のページが読み込まれます。
::

### ドラッグアンドドロップで

[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)から構成可能な[](https://vueuse.org/integrations/useSortable/)を使用して、テーブル上でドラッグ&ドロップ機能を有効にすることができます。この統合は[Sortable.jsxph6666xxph67x)をラップし、シームレスなドラッグ&ドロップ体験を提供します。

::note
テーブルrefはtbody要素を公開しないので、`:ui`プロパティを介して一意のクラスを追加し、`useSortable`（例：`:ui="{ tbody: 'my-table-tbody' }"`）をターゲットにします。
::

::component-example
---
prettier: true
collapse: true
highlights:
  - 81
  - 83
name: 'table-drag-and-drop-example'
class: '!p-0'
---
::

### 仮想化badge{label="4.1+" class="align-text-top"}

`virtualize`プロパティを使用して、booleanまたは`{ estimateSize: 65, overscan: 12 }`のようなオプションを持つオブジェクトとして大きなデータセットの仮想化を有効にします。仮想化の動作をカスタマイズするには、他の[TanStack Virtualオプション](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)を渡すこともできます。`sticky`プロパティは`virtualize`と組み合わせて動作し、大きなデータセットをスクロールしているときにヘッダーまたはフッターを表示できるようにします。

::warning
仮想化が有効な場合、行ピン留めはサポートされない。
::

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-virtualize-example'
class: '!p-0'
---
::

::note
仮想化を正しく動作させるには、テーブル上の高さ制約が必要です（例：`class="h-[400px]"`）。
::

### 外部スクロール要素付きbadge{label="4.10+" class="align-text-top"}

`virtualize`プロパティに`getScrollElement`関数を渡して、テーブル自身のルートではなく、祖先のスクロールコンテナに対して仮想化します。`scrollMargin`をスクロール要素の開始からテーブルのオフセット例えば、その上のコンテンツの高さに設定すると、ヘッダとテーブル本体は1つのスクロールバーを共有します。

::component-example
---
prettier: true
collapse: true
overflowHidden: true
name: 'table-external-scroll-example'
class: '!p-0'
---
::

::note
このモードでは、テーブルルートの`overflow`は`visible`であり、外部コンテナは両方の軸でスクロールを所有しています。そのため、広いテーブルを水平方向にスクロールできるように`overflow-auto`（`overflow-y-auto`だけでなく）を与えます。`sticky`ヘッダーはそのコンテナにアンカーされます。
::

### ツリーデータ付き

`get-sub-rows`プロパティを使用して、テーブルに階層（ツリー）データを表示できます。
たとえば、データオブジェクトに`children`配列がある場合、行を展開可能にするように`:get-sub-rows="row => row.children"`を設定します。

::component-example
---
prettier: true
collapse: true
highlights:
  - 175
name: 'table-tree-data-example'
class: '!p-0'
---
::

### スロット付き

スロットを使用して、テーブルのヘッダーとデータセルをカスタマイズできます。

`#<column>-header`スロットを使用して列のヘッダーをカスタマイズします。スロットスコープの`column`、`header`、`table`プロパティにアクセスできます。

`#<column>-cell`スロットを使用して、列のセルをカスタマイズします。スロットスコープの`cell`、`column`、`getValue`、`renderValue`、`row`、および`table`プロパティにアクセスできます。

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<table>` HTML属性もサポートします。
::

### スロット

:component-slots

### Expose

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)を使用して型付きコンポーネントインスタンスにアクセスできます。

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

## Theme

:component-theme

## Changelog

:component-changelog
