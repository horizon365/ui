---
title: SelectMenu 선택
description: 고급 검색 가능한 선택 요소입니다.
category: form
keywords:
  - combobox
  - multi select
  - filterable select
links:
  - label: 콤 보박스 (Combobox)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/combobox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/SelectMenu.vue
---

##  사용

`v-model` 지시문을 사용하여 SelectMenu의 값을 제어하거나 `default-value`prop을 사용하여 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'w-48'
---
::

::tip
검색 기능과 다중 선택을 제공하는 Reka UI의 [`Combobox`](https://reka-ui.com/docs/components/combobox) 구성 요소를 활용하기 위해 ](/docs/components/select) 를 통해 이 기능을 사용하십시오.
::

::note
이 구성 요소는 [`InputMenu`](/docs/components/input-menu)와 비슷하지만 메뉴 내부에서 검색하는 입력 대신 Select를 사용합니다.
::

###  프로젝트

`items`prop을 문자열, 숫자 또는 부울 배열로 사용합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

- `label?: string` {lang="ts-type"}
-  @ [ @ @ `type?: "label" | "separator" | "item"` @ {lang="ts-type"} @ ]( @ #with-items-type @ )
- [`icon?: string`{lang="ts-type"}](#with-icons-in-items)
-  @ [ @ @ `avatar?: AvatarProps` @ {lang="ts-type"} @ ]( @ #with-avatar-in-items @ ) @
- [`chip?: ChipProps``chip?: ChipProps`{lang="ts-type"}](#with-chip-in-items )
- `disabled?: boolean`{lang="ts-type"}
-  @ `onSelect?: (e: Event) => void` @ {lang="ts-type"}
-  @ `class?: any` @ {lang="ts-type"} @
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"}

::component-code
---
무시하기:
  -  modelValue. label
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectMenuItem []
소품 :
  ModelValue:
    사진: "todo"
  프로젝트:
    - label: 'Backlog'
    - label: 'Todo'
    - label: '진행 중'
    - label: '완료'
  클래스: 'W-48'
---
::

::caution
[`Select`](/docs/components/select) 구성요소와는 달리 SelectMenu는 전체 객체가 `v-model` 지시문 또는 `default-value`prop에 기본적으로 전달될 것으로 예상합니다.
::

배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 표시할 수도 있습니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Apple'
  프로젝트:
    -  - 애플
      -  바나나
      - Blueberry @ 블루베리
      - Grapes의 발음을 - [en]
      -  Pineapple
    -  - 오베르진
      -  브로콜리
      -  Carrot
      - Courgette -  코제트
      -  Leek
  클래스: 'W-48'
---
::

###  값 키

`value-key`prop.기본값을 `undefined`로 사용하여 전체 객체가 아닌 객체의 단일 속성을 바인딩하도록 선택할 수 있습니다.

::component-code
---
축소: true
무시하기:
  - modelValue - modelValue 이미지
  -  valueKey
  -  items
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectMenuItem []
소품 :
  modelValue: 'todo'
  valueKey : 'id'
  항목:
    - label: 'Backlog'
      ID: 'Backlog'
    - label: 'Todo'
      id: 'todo' 입니다.
    - label: '진행 중'
      id: 'in_progress' 입니다.
    - label: '완료'
      ID: '완료'
  클래스: 'W-48'
---
::

::tip
`by`prop을 사용하여 `model-value`가 개체일 때 참조 대신 필드로 개체를 비교합니다.
::

###  다중

`multiple`prop을 사용하여 여러 개의 선택을 허용하면 선택된 항목은 트리거에서 쉼표로 구분됩니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
  - multiple @ 다중
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  ModelValue:
    - Backlog @@ 백로그
    -  Todo
  다중: True
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::caution
배열을 `default-value`prop 또는 `v-model` 지시문으로 전달해야 합니다.
::

### 자리 표시자

`placeholder`prop을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  -  클래스
외부:
  -  items
소품 :
  자리 표시자: '상태 선택'
  프로젝트:
    - Backlog @@ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  검색 입력

`search-input`prop을 사용하여 검색 입력을 사용자 정의하거나 숨깁니다(`false` 값).

[Input](/docs/components/input) 구성 요소에서 임의의 속성을 전달하여 사용자 지정할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  -  modelValue. label
  -  modelValue. icon
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectMenuItem []
소품 :
  modelValue:
    사진: "Backlog"
    아이콘: 'i-lucide-circle-help'
  searchInput:
    자리 표시자: '필터...'
    아이콘: 'i-lucide-search'
  프로젝트:
    - label: 백로그
      아이콘: 'i-lucide-circle-help'
    - label: 토도
      아이콘: 'i-lucide-circle-plus'
    - label: 진행 중
      아이콘: 'i-lucide-circle-arrow-up'
    - label: 완료
      아이콘: 'i-lucide-circle-check'
  클래스: 'W-48'
---
::

::tip
`search-input`prop을 `false`로 설정하여 검색 입력을 숨길 수 있습니다.
::

::note
`:search-input="{ autofocus: false }"`를 사용하여 메뉴가 열릴 때 검색 입력이 집중되지 않도록 하고, 예를 들어, 터치 장치에서 가상 키보드를 열지 않도록 한다.
::

###  컨텐츠

`content`prop을 사용하여 SelectMenu 콘텐츠가 렌더링되는 방식을 제어합니다(예: `align` 또는 `side` 처럼).

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
프로젝트:
  content.align:
    -  start
    -  센터
    -  끝
  content.side:
    -  오른쪽
    -  왼쪽
    -  top
    -  아래
소품 :
  modelValue: 'Backlog'
  컨텐츠:
    정렬: 중심
    측면: 맨 아래
    사이드 오프셋: 8
  항목:
    - Backlog @@@@ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

### Arrow @ 화살표

`arrow`prop 을 사용하여 SelectMenu 에 화살표를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue
  -  class
  -  arrow
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  화살표: True
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  색상

SelectMenu에 초점을 맞출 때 `color`prop을 사용하여 링 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  색상: 중립
  강조 표시: True
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용됩니다. 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

### Variant (변형)

`variant`prop 을 사용하여 SelectMenu 의 변형을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue -  모델 가치
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  색상: 중립
  변형: 미묘함
  강조 표시:거짓
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  크기

`size`prop 을 사용하여 SelectMenu 의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  크기: xl
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  아이콘

`icon`prop을 사용하여 SelectMenu 내부에 [Icon](/docs/components/icon)을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  아이콘: 'i-lucide-search'
  크기: md
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

### 트레일 아이콘

`trailing-icon`prop을 사용하여 후행 [Icon](/docs/components/icon)로 사용자 지정합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  크기: MD
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 선택된 아이콘

항목을 선택할 때 `selected-icon`prop을 사용하여 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  크기: md
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 클리어: badge{label="4.4+" class="align-text-top"}

`clear`prop을 사용하여 값을 선택할 때 지우기 버튼을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  class
외부:
  -  items
  - modelValue - modelValue
항목:
  지우기:
    -  true
    -  false
소품 :
  modelValue: 'Backlog'
  지우기: True
  항목:
    - Backlog @@ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

### Clear Icon: badge{label="4.4+" class="align-text-top"}

`clear-icon`prop을 사용하여 지우기 버튼 [Icon](/docs/components/icon)를 사용자 지정합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  class
외부:
  -  items
  - modelValue - modelValue
프로젝트:
  정리:
    -  true
    -  거짓
소품 :
  modelValue: 'Backlog'
  지우기: True
  clearIcon : 'i-lucide-trash' 에러
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.close` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  Avatar

`avatar`prop을 사용하여 SelectMenu 내에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  프로젝트
  - modelValue - modelValue 이미지
  -  클래스
  - avatar.loading - avatar.loading
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Nuxt'
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  항목:
    -  Nuxt
    - NuxtHub @ NuxtHub -  NuxtHub @ NuxtHub
    - NuxtLabs @ NuxtLabs -  NuxtLabs @ NuxtLabs @ -  NuxtLabs @ NuxtLabs @ NuxtLabs의 지도
    - Nuxt 모듈
    - Nuxt 커뮤니티
  클래스: 'W-48'
---
::

###  로딩 중

`loading`prop을 사용하여 SelectMenu에 로드 아이콘을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  프로젝트
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  로드: true
  트레일링: false
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    -  진행 중
    -  완료
  클래스: 'W-48'
---
::

### Loading 아이콘

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  로드: true
  loadingIcon: 'i-lucide-loader'
  항목:
    - Backlog @@@ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  비활성 화

`disabled`prop 을 사용하여 SelectMenu 를 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - 자리 표시자
  -  class
외부:
  -  items
소품 :
  사용 안 함:true
  자리 표시자: '상태 선택'
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

##  예제

###  항목 유형

`type` 속성을 `separator`와 함께 사용하여 항목 사이의 구분 기호를 표시하거나 `label` 레이블을 표시할 수 있습니다.

::component-code
---
축소: true
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectMenuItem []
소품 :
  모델값: 'Apple'
  프로젝트:
    -  - 유형: 'label'
        사진: "Fruits"
      -  애플
      -  바나나
      - Blueberry @ 블루베리
      -  Grapes
      -  Pineapple
    -  - 유형: 'label'
        사진: "vegetables"
      - Aubergine - Aubergine
      -  브로콜리
      -  당근
      - Courgette -  코제트
      - Leek @ 레이
  클래스: 'W-48'
---
::

::note
`label`items를 그룹 머리글로 사용할 때 배열 배열을 전달하여 레이블이 그룹과 함께 필터링되도록 합니다.
::

###  항목에 아이콘 포함

`icon` 속성을 사용하여 [Icon](/docs/components/icon)를 항목 내부에 표시할 수 있습니다.

::component-example
---
축소: true
이름: 'select-menu-items-icon-example'
---
::

::tip
또한 `#leading`슬롯을 사용하여 선택한 아이콘을 표시할 수 있습니다.
::

###  프로젝트에 아바타가 있습니다.

`avatar` 속성을 사용하여 항목 내부에 [Avatar](/docs/components/avatar)를 표시할 수 있습니다.

::component-example
---
축소: true
name: 'select-menu-items-avatar-example' 선택 메뉴-항목-아바타-예
---
::

::tip
또한 `#leading`slot을 사용하여 선택한 아바타를 표시할 수 있습니다.
::

###  칩 항목

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 내부에 표시할 수 있습니다.

::component-example
---
축소: true
name: 'select-menu-items-chip-example' 선택메뉴-항목-칩-예제
---
::

::note
이 예제에서는 `#leading`슬롯을 사용하여 선택된 칩을 표시합니다.
::

###  오픈 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
이름 : 'select-menu-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 다음 키를 눌러 SelectMenu를 전환할 수 있습니다.
::

###  검색 용어 제어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
name: 'select-menu-search-term-example' 선택-메뉴-검색-용어-예
---
::

### 회전 아이콘 포함

다음은 SelectMenu의 열린 상태를 나타내는 회전 아이콘이 있는 예입니다.

::component-example
---
이름 : 'select-menu-icon-example'
---
::

###  프로젝트 만들기

`create-item`prop을 사용하여 사용자가 미리 정의된 옵션에 없는 사용자 정의 값을 추가할 수 있도록 합니다.

::component-example
---
축소: true
name: 'select-menu-create-item-example' 선택메뉴-create-item-example
---
::

::note
만들기 옵션은 기본적으로 일치하는 항목을 찾을 수 없는 경우를 표시합니다. 유사한 값이 있는 경우에도 표시하려면 `always`로 설정하십시오.
::

::tip{to="#emits"}
`@create` 이벤트를 사용하여 항목 생성을 처리합니다. 이벤트 및 항목을 인수로 받습니다.
::

### 가져온 항목과 함께

API에서 항목을 가져와서 SelectMenu에서 사용할 수 있습니다.

::component-example
---
축소: true
이름 : 'select-menu-fetch-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 방지합니다.
::

###  무시 필터 사용

`ignore-filter`prop을 `true`로 설정하여 내부 검색을 비활성화하고 사용자 고유의 검색 논리를 사용합니다.

::component-example
---
축소: true
이름 : 'select-menu-ignore-filter-example'
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 토론합니다. 검색은 `immediate: false`로 연기되므로 메뉴가 열릴 때까지 요청이 없습니다.
::

### 필터 필드 포함

필터링할 필드 배열과 함께 `filter-fields`prop을 사용합니다. 기본값은 `[labelKey]`입니다.

::component-example
---
축소: true
name: 'select-menu-filter-fields-example' 선택 메뉴-필터-필드-예제
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 방지합니다.
::

### 가상화 사용: badge{label="4.1+" class="align-text-top"}

`virtualize`prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이 있는 개체로 가상화를 활성화합니다.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
설정하면 Reka UI의 제한으로 인해 모든 그룹이 단일 리스트로 병합됩니다.
::

::component-example
---
상품명 : True
이름 : 'select-menu-virtualize-example'
---
::

### 무한 스크롤 : badge{label="4.4+" class="align-text-top"}

[`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)컴포지블을 사용하여 사용자가 스크롤할 때 더 많은 데이터를로드할 수 있습니다.

::component-example
---
상품명 : True
축소: true
강조 표시:
  - @41 @ 41
  - @51
overflowHidden: true
이름 : 'select-menu-infinite-scroll-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하므로 사용자가 스크롤할 때만 데이터가 로드됩니다.
::

###  전체 콘텐츠 너비

`ui.content` 슬롯에 `min-w-fit` 클래스를 추가하여 콘텐츠를 전체 너비로 확장할 수 있습니다.

::component-example
---
name: 'select-menu-content-width-example' 선택-메뉴-내용-너비-예제
축소: true
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    selectMenu: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

###  국가 선택기로

SelectMenu를 로드가 느린 국가 선택기로 사용할 수 있습니다. 국가는 메뉴를 처음 열었을 때만 가져옵니다.

::component-example
---
축소: true
이름: 'select-menu-counries-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴를 처음 열었을 때 국가만 로드합니다.
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `triggerRef`{lang="ts-type"}| `Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
