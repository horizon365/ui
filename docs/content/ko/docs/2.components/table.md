---
description: 행 및 열에 데이터를 표시하는 반응형 테이블 요소입니다.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: TanStack 테이블
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## Usage

Table 구성 요소는 [TanStack Table v8](xph03x) 위에 구축되었으며 [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable) 컴포지블 기능으로 구동되어 유연하고 완전한 유형 안전 API를 제공합니다.

데이터를 행과 열로 렌더링하고 정렬, 필터링, 페이지 매김, 행 선택, 확장, 그룹화, 고정 및 가상화를 지원하므로 간단한 데이터 테이블에서 완벽한 기능을 갖춘 데이터 그리드에 이르기까지 모든 것을 구축할 수 있습니다.It renders your data as rows and columns and supports sorting, filtering, pagination, row selection, expansion, grouping, pinning and virtualization, so you can build everything from a simple data table to a fully featured data grid.

::component-example
---
source: false
name: 'table-example'
class: '!p-0'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="소스 코드 보기"}
이 예제에서는 `Table` 구성 요소의 가장 일반적인 사용 사례를 보여 줍니다.GitHub에서 소스 코드를 확인하십시오.
::

### Data 데이터

`data` Prop을 오브젝트의 배열로 사용하면 오브젝트의 키를 기반으로 열이 생성됩니다.

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

### 열

`columns` prop을 [ColumnDef](https://tanstack.com/table/v8/docs/api/core/column-def) 객체의 배열로 사용하여 다음과 같은 속성을 가집니다.

- `accessorKey`: [열의 값을 추출할 때 사용할 행 객체의 키입니다.] {class="text-muted"}
- `header` :[열에 대해 표시할 머리글입니다. 문자열이 전달되면 열 ID의 기본값으로 사용할 수 있습니다. 함수가 전달되면 머리글에 대한 props 객체가 전달되고 렌더링된 머리글 값을 반환해야 합니다(정확한 유형은 사용 중인 어댑터에 따라 다름).]{class="text-muted"}
- [`footer`](#with-column-footer): [열에 대해 표시할 바닥글입니다. 머리글과 동일하게 작동하지만 테이블 아래에 표시됩니다.] {class="text-muted"}
- `cell` :[열에 대한 각 행을 표시하는 셀입니다. 함수가 전달되면 해당 셀에 대한 props 객체가 전달되고 렌더링된 셀 값을 반환합니다(정확한 유형은 사용 중인 어댑터에 따라 다름).] {class="text-muted"}
- `meta`: [열에 대한 추가 속성.] {class="text-muted"}
  - `class` :
    - `td`: [`td` 요소에 적용할 클래스입니다.] {class="text-muted"}
    - `th`: [`th` 요소에 적용할 클래스.] {class="text-muted"}
  - `style` :
    - `td`: [`td` 요소에 적용할 스타일입니다.] {class="text-muted"}
    - `th`: [`th` 요소에 적용할 스타일입니다.] {class="text-muted"}
  - [`colspan`](#with-column-span):
    - `td`: [`td` 요소에 적용할 colspan 속성.] {class="text-muted"}
  - [`rowspan`](#with-column-span):
    - `td`: [`td` 요소에 적용할 rowspan 속성] {class="text-muted"}

컴포넌트나 다른 HTML 요소를 렌더링하려면 `header` 및 `cell` props 안에 Vue [`h` function](https://vuejs.org/api/render-function.html#h)를 사용해야 합니다. 이는 슬롯을 사용하지만 더 많은 유연성을 제공하는 다른 구성 요소와는 다릅니다.

::tip{to="#with-slots" aria-label="슬롯이 있는 테이블 열"}
또한 슬롯을 사용하여 테이블의 머리글 및 데이터 셀을 사용자화할 수 있습니다.
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
`h`를 사용하여 구성요소를 렌더링할 때 `resolveComponent` 함수를 사용하거나 `#components`에서 가져올 수 있습니다.
::

### 메타

`meta` prop을 객체([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta))로 사용하여 다음과 같은 속성을 전달합니다.

- `class` :
  - `tr`: [`tr` 요소에 적용할 클래스.] {class="text-muted"}
- `style` :
  - `tr`: [`tr` 요소에 적용할 스타일.] {class="text-muted"}

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

### loading 파일

`loading` prop을 사용하여 로딩 상태를 표시하고, `loading-color` prop을 사용하여 색상을 변경하고, `loading-animation` prop을 사용하여 애니메이션을 변경합니다.

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
사용자가 감소된 모션을 선호하면 로드 애니메이션이 자동으로 비활성화되며 막대는 전체 폭 펄스로 표시됩니다.
::

### 스티커

`sticky` prop을 사용하여 머리글이나 바닥글을 끈적하게 만듭니다.

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

## 예제

### With 행 동작

`cell` 내부에 [DropdownMenu](/docs/components/dropdown-menu) 구성 요소를 렌더링하는 새 열을 추가하여 행 작업을 렌더링할 수 있습니다.

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

### 확장 가능한 행 사용

`cell` 내부에 [Button](/docs/components/button) 구성 요소를 렌더링하는 새 열을 추가하여 TanStack Table [Expanding APIs](https://tanstack.com/table/v8/docs/api/features/expanding)를 사용하여 행의 확장 가능한 상태를 전환할 수 있습니다.

::caution
행을 매개 변수로 받을 확장된 콘텐츠를 렌더링하려면 `#expanded` 슬롯을 정의해야 합니다.
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
`expanded` prop을 사용하여 행의 확장 가능한 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

::note
또한 `actions` 열 안에 있는 [`DropdownMenu`](/docs/components/dropdown-menu) 구성 요소에 이 작업을 추가할 수 있습니다.
::

### 그룹 행 포함

지정된 열 값에 따라 행을 그룹화하고 TanStack Table [Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping)를 사용하여 셀에 추가된 일부 버튼을 통해 하위 행을 표시하거나 숨길 수 있습니다.

#### 중요한 부분

* 그룹화하려는 열 ID 배열을 가진 `grouping` prop을 추가합니다.
* x`grouping-options` prop를 추가합니다. `getGroupedRowModel`를 포함해야하며, `@tanstack/vue-table`에서 가져오거나 직접 구현할 수 있습니다.
* x`row.toggleExpanded()` 메소드를 사용하여 행을 확장합니다. `#expanded` 슬롯을 토글할 수도 있습니다.
* x* 열 정의에 `aggregateFn`를 사용하여 행을 집계하는 방법을 정의합니다.Use `aggregateFn` on column definition to define how to aggregate the rows.
열 정의의 * `agregatedCell` 렌더러는 `cell` 렌더러가 없는 경우에만 사용할 수 있습니다.

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

### 행 핀 포함: badge{label="4.6+" class="align-text-top"}

`cell` 내에 [Button](/docs/components/button) 구성 요소를 렌더링하는 열을 추가하여 TanStack Table [Row 핀 APIs](https://tanstack.com/table/v8/docs/api/features/row-pinning)를 사용하여 행의 고정 상태를 전환할 수 있습니다. 핀 행은 정렬 또는 필터링에 관계없이 테이블의 맨 위 또는 맨 아래에 유지됩니다.

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
`row-pinning` Prop을 사용하여 행의 고정 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

###  행 선택

`header` 및 `cell` 내에서 [Checkbox](/docs/components/checkbox) 구성 요소를 렌더링하는 새 열을 추가하여 TanStack Table [Row Selection APIs](https://tanstack.com/table/v8/docs/api/features/row-selection)를 사용하여 행을 선택할 수 있습니다.

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
`row-selection` prop을 사용하여 행의 선택 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

###  행 선택 이벤트 포함

`@select` 리스너를 추가하여 확인란 열을 사용하거나 사용하지 않고 행을 클릭할 수 있도록 할 수 있습니다.

::note
핸들러 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째 및 두 번째 인수로 수신합니다.
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
이를 사용하여 페이지로 이동하거나, 모달을 열거나, 행을 수동으로 선택할 수도 있습니다.
::

### With 행 컨텍스트 메뉴 이벤트 포함

`@contextmenu` 리스너를 추가하여 행을 마우스 오른쪽 버튼으로 클릭할 수 있도록 하고 테이블을 [ContextMenu](/docs/components/context-menu) 구성 요소로 래핑하여 행 작업을 표시할 수 있습니다.

::note
처리기 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째 및 두 번째 인수로 수신합니다.
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

### 행 호버 이벤트 포함

`@hover` 리스너를 추가하여 행을 저장할 수 있도록 하고 [Popover](/docs/components/popover) 또는 [Tooltip](/docs/components/tooltip) 구성 요소를 사용하여 행 세부 정보를 표시할 수 있습니다.

::note
핸들러 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째 및 두 번째 인수로 수신합니다.
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
이 예제는 커서 예제 ple](/docs/components/popover#with-following-cursor)가 있는 Popover [와 유사하며 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebouncedxph48x를 사용하여 커서를 한 행에서 다른 행으로 이동할 때 Popover가 너무 빨리 열리고 닫히지 않도록 방지합니다.
::

### With 열 바닥글

열 정의에 `footer` 속성을 추가하여 열에 대한 바닥글을 렌더링할 수 있습니다.

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

### 열 범위

`meta` 열에 있는 `colspan` 및 `rowspan` 등록 정보를 사용하여 셀을 병합할 수 있습니다. 이러한 등록 정보는 정적 값이나 셀을 수신하고 범위 값을 반환하는 함수를 사용합니다.

::note
`rowspan`를 사용하는 경우 이전 행의 범위에 의해 "흡수"된 셀은 시각적으로 숨겨져야 합니다. `'hidden'`를 반환하는 함수와 함께 `class` 메타를 사용합니다.
::

::component-example
---
prettier: true
collapse: true
name: 'table-column-span-example'
class: '!p-0'
---
::

### 열 정렬 포함

열 `header`를 업데이트하여 [Button](/docs/components/button) 구성 요소를 `header` 내에 렌더링하여 TanStack Table [Sorting APIs](https://tanstack.com/table/v8/docs/api/features/sorting)를 사용하여 정렬 상태를 전환할 수 있습니다.

이러한 열에도 `enableSorting: true`를 설정합니다. `aria-sort`가 `<th>`에 배치되어 화면 판독기가 열의 현재 정렬 상태(`none`, `ascending` 또는 `descending`)를 읽을 수 있습니다. `Button`는 변경된 컨트롤을 유지합니다.

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
`sorting` prop을 사용하여 열의 정렬 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

재사용 가능한 구성요소를 작성하여 열 머리글을 정렬 가능하게 만들 수도 있습니다.

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
이 예제에서는 함수를 사용하여 열 머리글을 정의하지만 실제 구성 요소를 만들 수도 있습니다.In this example, we use a function to define the column header but you can also create an actual component.
::

### 기둥 핀 포함

열 `header`를 업데이트하여 `header` 내부의 [Button](/docs/components/button) 구성 요소를 렌더링하여 TanStack 테이블 [Column Pinning APIs](https://tanstack.com/table/v8/docs/api/features/column-pinning)를 사용하여 고정 상태를 전환할 수 있습니다.

::note
고정된 열은 테이블의 왼쪽 또는 오른쪽에서 고정됩니다. 열 고정을 사용할 때는 열에 대해 명시적 `size` 값을 정의하여 특히 여러 개의 고정된 열이 있는 경우 열 너비가 적절하게 처리되도록 해야 합니다.
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
`column-pinning` Prop을 사용하여 기둥의 고정 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

### 열 가시성 사용

[DropdownMenu](/docs/components/dropdown-menu) 구성 요소를 사용하여 TanStack Table [Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility)를 사용하여 열 가시성을 전환할 수 있습니다.

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
`column-visibility` Prop을 사용하여 열의 가시성 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

### With 열 필터

[Input](/docs/components/input) 구성 요소를 사용하여 TanStack Table [Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering)를 사용하여 열당 행을 필터링할 수 있습니다.

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
`column-filters` prop를 사용하여 열의 필터 상태를 제어할 수 있습니다 (`v-model`로 바인딩 가능).
::

### 전역 필터 포함

[Input](/docs/components/input) 구성 요소를 사용하여 TanStack Table [Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering)를 사용하여 행을 필터링할 수 있습니다.

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
`global-filter` prop을 사용하여 전역 필터 상태를 제어 할 수 있습니다 (`v-model`로 바인딩 할 수 있습니다).
::

### 페이지 지정

[Pagination](/docs/components/pagination) 구성 요소를 사용하여 [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination)를 사용하여 페이지 매김 상태를 제어할 수 있습니다.

[Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)에 설명된 대로 다른 페이지 매김 방법이 있습니다. 이 예제에서는 클라이언트 측 페이지 매김을 사용하므로 `getPaginationRowModel()`{lang="ts-type"} 함수를 수동으로 전달해야 합니다.

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
`pagination` prop을 사용하여 페이지 매김 상태를 제어 할 수 있습니다 (`v-model`로 바인딩 할 수 있음).
::

### 가져오기 데이터 포함

API에서 데이터를 가져와서 테이블에서 사용할 수 있습니다.You can fetch data from an API and use them in the Table.

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
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태는 `pending` 및 `idle` 상태를 모두 확인하여 가져오기 전과 프로세스 중에 로드 표시기를 표시합니다.
::

### 무한 스크롤 포함

서버측 페이지 나누기를 사용하는 경우 [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll) 컴포지블을 사용하여 사용자가 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

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
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태는 `pending` 및 `idle` 상태를 모두 확인하여 인출 전과 도중에 로드 표시기를 표시합니다. 사용자가 스크롤할 때 추가 페이지가 로드됩니다.
::

###  드래그 앤 드롭 사용

[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)의 [`useSortable`https://vueuse.org/integrations/useSortable/xph60x 컴포지션을 사용하여 테이블에서 드래그 앤 드롭 기능을 사용할 수 있습니다. 이 통합은 [Sortable.js](https://sortablejs.github.io/Sortable/xph6668x를 래핑하여 원활한 드래그 및 드롭 환경을 제공합니다

::note
테이블 참조는 tbody 요소를 노출하지 않으므로 `:ui` prop을 통해 고유 클래스를 추가하여 `useSortable` (예: `:ui="{ tbody: 'my-table-tbody' }"`)로 대상을 지정합니다.
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

### 가상화 사용: badge{label="4.1+" class="align-text-top"}

`virtualize` Prop을 사용하여 큰 데이터 세트를 부울 또는 `{ estimateSize: 65, overscan: 12 }`와 같은 옵션이 있는 객체로 가상화할 수 있습니다. 또한 다른 [TanStack Virtual Options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)를 전달하여 가상화 동작을 사용자 정의할 수 있습니다. `sticky` Prop은 `virtualize`와 함께 작동하여 큰 데이터 세트를 스크롤하면서 머리글이나 바닥글을 볼 수 있도록 합니다.

::warning
가상화를 사용하도록 설정하면 행 고정이 지원되지 않습니다.Row pinning is not supported when virtualization is enabled.
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
가상화가 제대로 작동하려면 테이블에 높이 제약이 필요합니다(예: `class="h-[400px]"`).
::

### 외부 스크롤 요소가 있는 경우: badge{label="4.10+" class="align-text-top"}

`virtualize` Prop에서 `getScrollElement` 함수를 전달하여 테이블 자체의 루트가 아닌 조상 스크롤 컨테이너에 대해 가상화합니다. `scrollMargin`를 스크롤 요소의 시작에서 테이블의 오프셋(예: 위의 내용 높이)으로 설정하면 머리글과 테이블 본문이 단일 스크롤 막대를 공유합니다.

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
이 모드에서는 테이블 루트의 `overflow`가 `visible`이고 외부 컨테이너는 두 축에서 스크롤을 소유하므로 넓은 테이블을 가로로 스크롤할 수 있도록 `overflow-auto`(`overflow-y-auto`가 아니라)를 제공합니다. 그런 다음 `sticky` 헤더가 해당 컨테이너에 앵커됩니다.
::

### 트리 데이터 포함

`get-sub-rows` prop을 사용하여 테이블에 계층적 (트리) 데이터를 표시할 수 있습니다.
예를 들어, 데이터 개체에 `children` 배열이 있는 경우 `:get-sub-rows="row => row.children"`를 설정하여 확장 가능한 행을 사용할 수 있습니다.

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

### With 슬롯

슬롯을 사용하여 테이블의 머리글 및 데이터 셀을 사용자화할 수 있습니다.

`#<column>-header` 슬롯을 사용하여 열 머리글을 사용자 정의합니다. 슬롯 범위에서 `column`, `header` 및 `table` 속성에 액세스할 수 있습니다.

`#<column>-cell` 슬롯을 사용하여 열 셀을 사용자 정의합니다. 슬롯 범위에서 `cell`, `column`, `getValue`, `renderValue`, `row` 및 `table` 등록 정보에 액세스할 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'table-slots-example'
class: '!p-0'
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<table>` HTML 속성을 지원합니다.
::

### Slots 슬롯

:component-slots

### Exposure 이미지

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형이 지정된 구성 요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const table = useTemplateRef('table')
</script>

<template>
  <UTable ref="table" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `tableRef`{lang="ts-type"}| `Ref<HTMLTableElement \| null>`{lang="ts-type"} (`Ref<HTMLTableElement \| null>`{lang="ts-type"})|
| `tableApi`{lang="ts-type"}| [`Table`{lang="ts-type"}](https://tanstack.com/table/v8/docs/api/core/table#table-api)|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
