---
description: 행 및 열에 데이터를 표시하는 반응형 테이블 요소입니다.
category: data
keywords:
  - data table
  - datagrid
  - data grid
links:
  - label: TANStack 테이블
    avatar:
      src: https://github.com/tanstack.png
      loading: lazy
    to: https://tanstack.com/table/v8
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Table.vue
---

## 사용

테이블   구성   요소 는  [TanStack   테이블   v 8](https://tanstack.com/table/v8)  위 에   구축 되 었 으며  [useVueTable](https://tanstack.com/table/v8/docs/framework/vue/vue-table#usevuetable)composable 로   구동 되 어   유연 하 고   완전 한   유형   안전 한   API 를   제공 합니다 .

데이터 를   행과   열 로   렌더링 하 고   정렬 ,   필터링 ,   페이지   매김 ,   행   선택 ,   확장 ,   그룹 화 ,   고정   및   가상 화 를   지원 하 므로   간단 한   데이터   테이블 에서   완벽 한   기능 을   갖춘   데이터   그리드 에   이르 기 까지   모든   것 을   구축 할   수   있 습니다 . It   renders   your   data   as   rows   and   columns   and   supports   sorting ,   filtering ,   pagination ,   row   selection ,   expansion ,   grouping ,   pinning   and   virtualization ,   so   you   can   build   everything   from   a   simple   data   table   to   a   fully   featured   data   grid .

::component-example
---
출처   :   false
이름 :   " table - example "
클래스 :   "! p - 0 "
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/tree/v4/docs/app/components/content/examples/table/TableExample.vue" aria-label="소스 코드 보기"}
이   예제 에서 는  `Table`  구성   요소 의   가장   일반 적 인   사용   사례 를   보여 줍니다 .   GitHub 에서   소스   코드 를   확인 하 십시오 .
::

### 데이터

`data`prop 을   객체 의   배열 로   사용 하 면   열 은   객체 의   키 를   기반 으로   생성 됩니다 .

::component-code
---
상품명   :   True
축소 :   true
클래스 :   "! p - 0 "
무시 하 기 :
  - 데이터
  - 클래스
외부 :
  - 데이터
소품   :
  데이터   :
    - id :   ' 4600 '
      날짜   :   ' 2024 - 03 - 11 T 15 : 30 : 00 '
      사진 :   " paid "
      이메일 :   ' james . anderson@example.com'
      금액 :   594
    - id :   ' 4599 '
      날짜   :   ' 2024 - 03 - 11 T 10 : 10 : 00 '
      상태 :   ' 실패 '
      이메일   :   ' mia . white@example.com'
      수량 :   276
    - id :   ' 4598 '
      날짜   :   ' 2024 - 03 - 11 T 08 : 50 : 00 '
      사진 :   " Refunded "
      이메일 :   ' william . brown@example.com'
      금액 :   315
    - id :   ' 4597 '
      날짜   :   ' 2024 - 03 - 10 T 19 : 45 : 00 '
      사진 :   " Paid "
      이메일 :   ' emma . davis@example.com'
      금액   :   529
    - id :   ' 4596 '
      날짜   :   ' 2024 - 03 - 10 T 15 : 55 : 00 '
      사진 :   " paid "
      이메일 :   ' ethan . harris@example.com'
      금액   :   639
  클래스 :   flex - 1
---
::

### 열

`columns`prop 을  [ColumnDeff](https://tanstack.com/table/v8/docs/api/core/column-def)객체 의   배열 로   사용 하 여   다음 과   같 은   속성 을   갖 습니다 .

- `accessorKey``accessorKey`  [ 열   값 을   추출 할   때   사용 할   행   객체 의   키 ]  {class="text-muted"}
- `header`  [ 열 에   표시 할   헤더 입니다 .   문자열 이   전달 되 면   열   ID 의   기본 값 으로   사용 됩니다 .   함수 가   전달 되 면   헤더 에   대한   props   객체 가   전달 되 며   렌더링 된   헤더   값 을   반환 해야   합니다 (정확 한   유형 은   사용   중인   어댑터 에   따라   다름) . ]  {class="text-muted"}
- [`footer`](#with-column-footer)  :   [ 열 에   표시 할   바닥글 .   머리글 과   동일 하 지만   테이블   아래 에   표시 됩니다 . ]  {class="text-muted"}
- `cell` [열의 각 행을 표시하는 셀입니다. 함수가 전달되면 해당 셀에 대한 props 객체를 전달하고 렌더링된 셀 값을 반환해야 합니다(정확한 유형은 사용 중인 어댑터에 따라 다름).] {class="text-muted"}
- `meta``meta` [컬럼의 추가 속성.] {class="text-muted"}
  - `class` :
    - `td` [`td` 요소에 적용할 클래스] {class="text-muted"}
    - `th` : [`th` 요소에 적용할 클래스.] {class="text-muted"}
  - `style` :
    - `td` [`td` 요소에 적용할 스타일] {class="text-muted"}
    - `th` : [`th` 요소에 적용할 스타일] {class="text-muted"}
  - [`colspan`](#with-column-span) :
    - `td` [`td` 요소에 적용할 colspan 속성] {class="text-muted"}
  - [ `rowspan` @ ]( @ #with-column-span ):
    - `td` [`td` 요소에 적용할 rowspan 속성] {class="text-muted"}

컴포넌트나 다른 HTML 요소를 렌더링하려면 Vue[`h`function](https://vuejs.org/api/render-function.html#h) 내부에 ) 를 사용해야 합니다. 이는 슬롯을 사용하지만 보다 유연성을 제공하는 다른 컴포넌트와는 다릅니다.

::tip{to="#with-slots" aria-label="슬롯이 있는 테이블 열"}
슬롯을 사용하여 테이블의 머리글 및 데이터 셀을 사용자화할 수도 있습니다.
::

::component-example
---
상품명 : True
축소: true
클래스: "!p-0"
이름: 'table-columns-example'
강조 표시:
  -  53
  -  108
---
::

::note
`h`로 구성요소를 렌더링할 때 `resolveComponent` 함수를 사용하거나 `#components`에서 가져올 수 있습니다.
::

###  Meta

`meta`prop을 객체([TableMeta](https://tanstack.com/table/v8/docs/api/core/table#meta))로 사용하여 다음과 같은 속성을 전달합니다.

- `class` :
  - `tr` [`tr` 요소에 적용할 클래스] {class="text-muted"}
- `style` :
  - `tr` [`tr` 요소에 적용할 스타일] {class="text-muted"}

::component-example
---
상품명 : True
축소: true
이름 : 'table-meta-example'
클래스 : "!p-0"
강조 표시:
  -  @128
  - @140 @ @ 140
---
::

###  로딩 중

`loading`prop을 사용하여 로딩 상태를 표시하고, `loading-color`prop을 사용하여 색상을 변경하고, `loading-animation`prop을 사용하여 애니메이션을 변경합니다.

::component-code
---
상품명 : True
축소: true
클래스 : "!p-0"
무시하기:
  -  데이터
  -  클래스
외부:
  -  데이터
소품 :
  로드: true
  loadingColor: 기본
  로드애니메이션: carousel
  데이터:
    - id :   ' 4600 '
      날짜   :   ' 2024 - 03 - 11 T 15 : 30 : 00 '
      사진 :   " paid "
      이메일 :   ' James . anderson@example.com'
      금액   :   594
    - id :   ' 4599 '
      날짜   :   ' 2024 - 03 - 11 T 10 : 10 : 00 '
      상태 :   " 실패 "
      이메일   :   ' mia . white@example.com'
      수량 :   276
    - id :   ' 4598 '
      날짜   :   ' 2024 - 03 - 11 T 08 : 50 : 00 '
      사진 :   " Refunded "
      이메일 :   ' william . brown@example.com'
      금액   :   315
    - id :   ' 4597 '
      날짜   :   ' 2024 - 03 - 10 T 19 : 45 : 00 '
      사진 :   " paid "
      이메일 :   ' emma . davis@example.com'
      금액   :   529
    - id :   ' 4596 '
      날짜   :   ' 2024 - 03 - 10 T 15 : 55 : 00 '
      사진 :   " Paid "
      이메일 :   ' ethan . harris@example.com'
      금액   :   639
  클래스 :   flex - 1
---
::

::tip
사용 자 가   감소 된   모션 을   선호 하 면   로드   애니메이션 이   자동 으로   비 활성 화 되 고   막대 는   전체   폭   펄스 로   표시 됩니다 .
::

### Sticky   키

`sticky`prop 을   사용 하 여   머리글 이나   바닥글 을   고정 적 으로   만듭니다 .

::component-code
---
상품명   :   True
축소 :   true
클래스   :   "! p - 0 "
무시 하 기 :
  - 데이터
  - 클래스
외부 :
  - 데이터
프로젝트 :
  sticky :
    - true
    - 거짓
소품   :
  끈 적   :   true
  데이터   :
    - id :   ' 4600 '
      날짜   :   ' 2024 - 03 - 11 T 15 : 30 : 00 '
      사진 :   " paid "
      이메일 :   ' James . anderson@example.com'
      금액 :   594
    - id :   ' 4599 '
      날짜   :   ' 2024 - 03 - 11 T 10 : 10 : 00 '
      상태 :   " 실패 "
      이메일 :   ' mia . white@example.com'
      수량 :   276
    - id :   ' 4598 '
      날짜   :   ' 2024 - 03 - 11 T 08 : 50 : 00 '
      사진 :   " Refunded "
      이메일 :   ' william . brown@example.com'
      금액 :   315
    - id :   ' 4597 '
      날짜   :   ' 2024 - 03 - 10 T 19 : 45 : 00 '
      사진 :   " Paid "
      이메일 :   ' emma . davis@example.com'
      금액   :   529
    - id :   ' 4596 '
      날짜   :   ' 2024 - 03 - 10 T 15 : 55 : 00 '
      사진 :   " paid "
      이메일 :   ' ethan . harris@example.com'
      금액   :   639
    - id :   ' 4595 '
      날짜   :   ' 2024 - 03 - 10 T 15 : 55 : 00 '
      사진 :   " Paid "
      이메일 :   ' ethan . harris@example.com'
      금액   :   639
    - id :   ' 4594 '
      날짜   :   ' 2024 - 03 - 10 T 15 : 55 : 00 '
      사진 :   " Paid "
      이메일 :   ' ethan . harris@example.com'
      금액   :   639
  클래스 :   ' flex - 1   max - h   -[ 312 px ] '
---
::

## 예제

### 행   동작   포함

[DropdownMenu](/docs/components/dropdown-menu)  구성   요소 를  `cell`  내 에   렌더링 하 는   새   열 을   추가 하 여   행   작업 을   렌더링 할   수   있 습니다 .

::component-example
---
상품명   :   True
축소 :   true
이름 :   ' table - row - actions - example '
강조   표시 :
  -  @115
  - @141  @ @  141
클래스 :   "! p - 0 "
---
::

###   확장   가능 한   행   포함

`cell`  내 에  [button](/docs/components/button)  구성 요소 를   렌더링 하 는   새   열 을   추가 하 여   TanStack   Table[Expanding   APIs](https://tanstack.com/table/v8/docs/api/features/expanding )  로   행의   확장   가능 한   상태 를   전환 할   수   있 습니다 .

::caution
행 을   매개   변수 로   수신 하 는   확장 된   콘텐츠 를   렌더링 하 려면  `#expanded`slot 을   정의 해야   합니다 .
::

::component-example
---
상품명   :   True
축소 :   true
이름 :   ' table - row - expandable - example '
하이라이트 :
  - @55
  - @72
클래스   :   "! p - 0 "
---
::

::tip
`expanded`prop을 사용하여 행의 확장 가능한 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있습니다).
::

::note
또한 [`DropdownMenu`](/docs/components/dropdown-menu) 구성 요소에 이 작업을 추가할 수 있습니다.
::

###  그룹 행

지정된 열 값을 기준으로 행을 그룹화하고 TanStack Table[Grouping APIs](https://tanstack.com/table/v8/docs/api/features/grouping)를 사용하여 셀에 추가된 일부 버튼을 통해 하위 행을 표시/숨길 수 있습니다.

#### 중요한 부품

* Add `grouping`prop with an array of column id you want to group by. * prop `grouping`prop 을 추가합니다.
* Add`grouping-options`prop. `getGroupedRowModel`를 포함해야 합니다. `@tanstack/vue-table`에서 가져오거나 직접 구현할 수 있습니다.
*  행 셀에서 `row.toggleExpanded()` 메소드를 통해 행을 확장합니다. 또한 `#expanded` 슬롯을 전환합니다.
*  @ `aggregateFn` on 열 정의를 사용하여 행을 합산하는 방법을 정의합니다.
* `agregatedCell`렌더러의 열 정의는 `cell`renderer가 없는 경우에만 작동합니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-grouped-rows-example'
강조 표시:
  -  157
  -  @160
클래스: "!p-0"
---
::

###  행 핀으로: badge{label="4.6+" class="align-text-top"}

[Button](/docs/components/button) 구성 요소를 `cell` 내에 렌더링하는 열을 추가하여 TanStack Table[Row PAPIs](https://tanstack.com/table/v8/docs/api/features/row-pinning)을 사용하여 행의 고정 상태를 전환할 수 있습니다. ](https://tanstack.com/table/v8/docs/api/features/row-pinning)필터 또는 맨 아래 행에 관계없이 고정 상태를 유지합니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-row-pinning-example'
overflowHidden: true
하이라이트:
  -  91
  -  107
  -  160
  -  165
  - @168 @ @ 168
클래스 : "!p-0"
---
::

::tip
`row-pinning`prop을 사용하여 행의 고정 상태를 제어할 수 있습니다 (`v-model`로 바인딩할 수 있음).
::

###  행 선택

`header` 및 `cell` 구성 요소 내부에 [Checkbox@@ Checkbox]( /docs/components/checkbox @ ) 를 렌더링하는 새 열을 추가하여 TanStack Table[Row Selection APIs]( @PH2224@ @ 을 사용하여 행을 선택할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-row-selection-example'
강조 표시:
  -  55
  -  72
클래스: "!p-0"
---
::

::tip
`row-selection`prop을 사용하여 행의 선택 상태를 제어할 수 있습니다 (`v-model`로 바인딩할 수 있음).
::

### 행 선택 이벤트 포함

`@select`리스너를 추가하여 확인란 열을 사용하거나 사용하지 않고 행을 클릭할 수 있도록 할 수 있습니다.

::note
처리기 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째와 두 번째 인수로 수신합니다.
::

::component-example
---
상품명 : True
축소: true
이름: 'table-row-select-event-example'
강조 표시:
  - @124
  -  131
클래스 : "!p-0"
---
::

::tip
이를 사용하여 페이지로 이동하거나, 모달을 열거나, 행을 수동으로 선택할 수 있습니다.
::

### 행 컨텍스트 메뉴 이벤트 포함

`@contextmenu`리스너를 추가하여 행을 바로 클릭할 수 있도록 하고 테이블을 [ContextMenu](/docs/components/context-menu) 구성 요소로 래핑하여 행 동작을 표시할 수 있습니다.

::note
처리기 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째와 두 번째 인수로 수신합니다.
::

::component-example
---
상품명 : True
축소: true
이름: 'table-row-context-menu-event-example'
하이라이트:
  - @133
  - @173
클래스 : "!p-0"
---
::

###  행 오버 이벤트 발생

`@hover`리스너를 추가하여 행을 저장할 수 있도록 하고 [Popher](/docs/components/popover)또는 [Tooltip](/docs/components/tooltip) 구성 요소를 사용하여 행 세부 정보를 표시할 수 있습니다.

::note
처리기 함수는 `Event` 및 `TableRow` 인스턴스를 첫 번째와 두 번째 인수로 수신합니다.
::

::component-example
---
상품명 : True
축소: true
이름: 'table-row-hover-event-example'
강조 표시:
  -  @129
  - @152 @ @ 152
클래스 : "!p-0"
---
::

::note
이 예제는 Popover[ 커서 예제 ](/docs/components/popover#with-following-cursor)와 유사하며 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced) 을 사용하여 커서가 너무 빨리 열리고 다른 행으로 이동하는 것을 방지합니다.
::

###  열 바닥글 포함

`footer` 속성을 열 정의에 추가하여 열의 바닥글을 렌더링할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-column-footer-example'
하이라이트:
  - @100 @ @ 100
  -  @112
클래스: "!p-0"
---
::

###  열 범위

`meta` 열의 `colspan` 및 `rowspan` 등록 정보를 사용하여 셀을 병합할 수 있습니다. 이러한 등록 정보는 정적 값이나 셀을 수신하고 범위 값을 반환하는 함수를 허용합니다.

::note
`rowspan`를 사용하는 경우 이전 행의 범위에 의해 "흡수된" 셀은 시각적으로 숨겨집니다. `class`meta를 사용하여 해당 셀에 대해 `'hidden'`를 반환하는 함수를 사용합니다.
::

::component-example
---
상품명 : True
축소: true
이름: 'table-column-span-example'
클래스: "!p-0"
---
::

###  열 정렬

`header` 열을 업데이트하여 [Button](/docs/components/button) 구성요소를 렌더링하여 TanStack Table[APIs](https://tanstack.com/table/v8/docs/api/features/sorting Sorting 상태를 전환할 수 있습니다.

이러한 열에도 `enableSorting: true`를 설정합니다. 이 경우 `<th>`에 `aria-sort`를 넣어 화면 판독기가 열의 현재 정렬 상태를 읽을 수 있습니다: `none`, `ascending` 또는 `descending` . `Button` 은 변경된 컨트롤을 유지합니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-column-sorting-example'
하이라이트:
  -  90
  -  106
클래스 : "!p-0"
---
::

::tip
`sorting`prop을 사용하여 열의 정렬 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있음).
::

재사용 가능한 구성요소를 작성하여 열 머리글을 정렬 가능하게 만들 수도 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-column-sorting-reusable-example'
하이라이트:
  -  115
  -  166
클래스 : "!p-0"
---
::

::note
이 예제에서는 함수를 사용하여 열 머리글을 정의하지만 실제 구성 요소를 만들 수도 있습니다.In this example, we use a function to define the column header but you can also create an actual component.
::

###  기둥 핀 사용

열 `header`을 업데이트하여 [Button](/docs/components/button) 구성요소를 렌더링하여 TanStack Table[Column Pinning AP](https://tanstack.com/table/v8/docs/api/features/column-pinning)를 사용하여 핀 상태를 전환할 수 있습니다.

::note
고정된 열은 테이블의 왼쪽 또는 오른쪽에서 고정됩니다. 열 고정을 사용할 때는 열에 대해 명시적인 `size` 값을 정의하여 특히 여러 개의 고정된 열이 있는 경우에는 열 너비가 적절하게 처리되도록 합니다.
::

::component-example
---
상품명 : True
축소: true
overflowHidden: true
이름: 'table-column-pinning-example'
강조 표시:
  -  @108 @ @ 108
  - @126 @ @ @ 126
클래스: "!p-0 오버플로우-클립"
---
::

::tip
`column-pinning`prop을 사용하여 기둥의 고정 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있음).
::

###  열 가시성 포함

[DropdownMenu](/docs/components/dropdown-menu) 구성 요소를 사용하여 TanStack Table[Column Visibility APIs](https://tanstack.com/table/v8/docs/api/features/column-visibility) 을 사용하여 열의 가시성을 전환할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-column-visibility-example'
강조 표시:
  -  121 @ @ @ 121
  - @146 @ @ 146 @ @ @ 330
클래스: "!p-0"
---
::

::tip
`column-visibility`prop을 사용하여 열의 가시성 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있음).
::

###  열 필터 포함

[Input](/docs/components/input) 구성 요소를 사용하여 TanStack Table[Column Filtering APIs](https://tanstack.com/table/v8/docs/api/features/column-filtering)를 사용하여 열별로 행을 필터링할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-column-filters-example'
하이라이트:
  -  123
  - @128
클래스: "!p-0"
---
::

::tip
`column-filters`prop을 사용하여 열의 필터 상태를 제어할 수 있습니다 (`v-model`로 바인딩할 수 있음).
::

###  글로벌 필터 포함

[Input](/docs/components/input) 구성 요소를 사용하여 TanStack Table[Global Filtering APIs](https://tanstack.com/table/v8/docs/api/features/global-filtering) 를 사용하여 행을 필터링할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-global-filter-example'
클래스: "!p-0"
강조 표시:
  -  @116
---
::

::tip
`global-filter`prop을 사용하여 전역 필터 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있음).
::

###  페이지 매김 사용

[Pagination](/docs/components/pagination) 구성 요소를 사용하여 [Pagination APIs](https://tanstack.com/table/v8/docs/api/features/pagination)를 사용하여 페이지 매김 상태를 제어할 수 있습니다.

[Pagination Guide](https://tanstack.com/table/v8/docs/guide/pagination#pagination-guide)에 설명된 대로 다른 페이지 매김 접근 방식이 있습니다. 이 예제에서는 클라이언트측 페이지 매김을 사용하므로 `getPaginationRowModel()`{lang="ts-type"}function을 수동으로 전달해야 합니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-pagination-example'
클래스: "!p-0"
하이라이트:
  - @204
  - @209 @ @ 209
---
::

::tip
`pagination`prop을 사용하여 페이징 상태를 제어할 수 있습니다(`v-model`로 바인딩할 수 있음).
::

###  가져온 데이터와 함께

API에서 데이터를 가져와서 테이블에서 사용할 수 있습니다.You can fetch data from an API and use them in the Table.

::component-example
---
상품명 : True
축소: true
이름: "table-fetch-example"
하이라이트:
  - @15
  - @26 @ @ 26 @ @ @ 26
클래스 : "!p-0"
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태에서는 `pending` 및 `idle`status를 모두 확인하여 가져오기 전과 프로세스 중에 로드 표시기를 표시합니다.
::

### 무한 스크롤 사용

서버측 페이지 매김을 사용하는 경우 [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/#useinfinitescroll)컴포지블을 사용하여 사용자가 스크롤할 때 더 많은 데이터를 로드할 수 있습니다.

::component-example
---
상품명 : True
축소: true
강조 표시:
  -  72
  -  83
overflowHidden: true
이름: 'table-infinite-scroll-example'
클래스: "!p-0"
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태에서는 `pending` 및 `idle` status를 모두 확인하여 가져오기 전과 프로세스 중에 로드 표시기를 표시합니다. 추가 페이지는 사용자가 스크롤할 때 로드됩니다.
::

###  드래그 앤 드롭 사용

테이블에서 드래그 앤 드롭 기능을 활성화하려면 [`useSortable`](https://vueuse.org/integrations/useSortable/)composable from [`@vueuse/integrations`](](https://vueuse.org/integrations/README.html)을 사용하여 테이블에서 드래그 앤 드롭할 수 있습니다. 원활한 드래그 앤 드롭 환경을 제공합니다.

::note
테이블 참조는 tbody 요소를 노출하지 않으므로 `:ui`prop을 통해 고유 클래스를 추가하여 `useSortable` (예: `:ui="{ tbody: 'my-table-tbody' }"`)로 타겟팅합니다.
::

::component-example
---
상품명 : True
축소: true
하이라이트:
  - @81
  -  83
이름: 'table-drag-and-drop-example'
클래스 : "!p-0"
---
::

### 가상화 사용: badge{label="4.1+" class="align-text-top"}

`virtualize`prop을 사용하여 대규모 데이터 세트에 대해 부울 또는 `{ estimateSize: 65, overscan: 12 }`와 같은 옵션을 가진 객체로 가상화를 활성화합니다. 다른 [TanStack Virtual options](https://tanstack.com/virtual/latest/docs/api/virtualizer#optional-options)를 전달하여 가상화 동작을 사용자 정의할 수 있습니다. `sticky`prop은 `virtualize`과 함께 작동합니다. 큰 데이터 세트를 스크롤하는 동안 머리글 또는 바닥글을 계속 표시합니다.

::warning
가상화를 사용하도록 설정하면 행 고정이 지원되지 않습니다.Row pinning is not supported when virtualization is enabled.
::

::component-example
---
상품명 : True
축소: true
overflowHidden: true
이름 : 'table-virtualize-example'
클래스 : "!p-0"
---
::

::note
가상화가 제대로 작동하려면 테이블에 높이 제약이 필요합니다(예: `class="h-[400px]"`).
::

### 외부 스크롤 요소와 함께: badge{label="4.10+" class="align-text-top"}

`virtualize`prop에서 `getScrollElement` 함수를 전달하여 테이블 자체의 루트가 아닌 조상 스크롤 컨테이너에 대해 가상화합니다. `scrollMargin`을 스크롤 요소의 시작에서 테이블의 오프셋(예: 위의 컨텐츠 높이)으로 설정하면 머리글과 테이블 본문이 단일 스크롤 막대를 공유합니다.

::component-example
---
상품명 : True
축소: true
overflowHidden: true
name: 'table-external-scroll-example' 테이블-외부-스크롤-예제
클래스: "!p-0"
---
::

::note
이 모드에서 테이블 루트의 `overflow`는 `visible`이고 외부 컨테이너는 양 축에서 스크롤을 소유하므로 넓은 테이블을 수평으로 스크롤할 수 있도록 `overflow-y-auto`가 아닌 `overflow-auto`를 제공합니다. 그런 다음 `sticky` 헤더는 해당 컨테이너에 앵커됩니다.
::

###  트리 데이터 포함

`get-sub-rows`prop을 사용하여 테이블에 계층적(트리) 데이터를 표시할 수 있습니다.
예를 들어 데이터 개체에 `children`array가 있는 경우 `:get-sub-rows="row => row.children"`을 설정하여 확장 가능한 행을 사용합니다.

::component-example
---
상품명 : True
축소: true
하이라이트:
  - @175 @ @ 175
이름: 'table-tree-data-example'
클래스 : "!p-0"
---
::

###  슬롯 포함

슬롯을 사용하여 테이블의 머리글과 데이터 셀을 사용자화할 수 있습니다.

`#<column>-header` 슬롯을 사용하여 열 머리글을 사용자 정의합니다. 슬롯 범위에서 `column`, `header` 및 `table` 속성에 액세스할 수 있습니다.

`#<column>-cell` 슬롯을 사용하여 열의 셀을 사용자 정의합니다. 슬롯 범위에서 `cell`, `column`, `getValue`, `renderValue`, `row` 및 `table` 속성에 액세스할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'table-slots-example'
클래스: "!p-0"
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<table>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성요소 인스턴스에 액세스할 수 있습니다.

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
| `tableRef`{lang="ts-type"}| `Ref<HTMLTableElement \| null>` @ {lang="ts-type"} @|
| `tableApi` @ {lang="ts-type"}| [`Table` {lang="ts-type"} @ ]( @ https://tanstack.com/table/v8/docs/api/core/table#table-api @ ) @|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
