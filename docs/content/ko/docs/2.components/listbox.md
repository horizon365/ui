---
description: 검색, 가상화 및 리치 항목 렌더링이 포함된 선택 가능한 항목 목록입니다.
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: 목록 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

##  사용

`v-model` 지시문을 사용하여 Listbox의 값을 제어하거나 `default-value`prop을 사용하여 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  modelValue. label
  -  modelValue. icon
  - modelValue.value 이미지
  - items 항목
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  ListboxItem []
소품 :
  modelValue:
    레이블: "France"
    아이콘: i-lucide-map-pin
    값 : 'FR'
  프로젝트:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: "ES"
    - label: '네덜란드'
      아이콘: i-lucide-map-pin
      값: "NL"
    - label: '폴란드'
      아이콘: i-lucide-map-pin
      값: "PL"
    - label: '벨기에'
      아이콘: i-lucide-map-pin
      값: "BE"
    - label: '포르투갈'
      아이콘: i-lucide-map-pin
      값: "PT"
    - label: '오스트리아'
      아이콘: i-lucide-map-pin
      값: "AT"
    - label: '스웨덴'
      아이콘: i-lucide-map-pin
      값: "SE"
  클래스 : 'w-full'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label?: string` @ {lang="ts-type"} @
-  @ [ @ @ `description?: string` @ {lang="ts-type"} @ ]( @ #with-description-in-items @ ) @
- [`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
-  [ @ @ `icon?: string` @ {lang="ts-type"} @ ]( @ #with-icon-in-items )
-  @ [ @ `avatar?: AvatarProps` @ {lang="ts-type"} @ ]( @ #with-avatar-in-items @ ) @
-  @ [ @ @ `chip?: ChipProps` @ {lang="ts-type"} @ ]( @ #with-chip-in-items @ ) @
- `disabled?: boolean`{lang="ts-type"}
-  @ `onSelect?: (e: Event) => void` @ @ {lang="ts-type"} @
-  @ `class?: any` @ @ {lang="ts-type"} @
- `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, ... }`{lang="ts-type"}

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  항목:
    - label: '프랑스'
      사진: "The Hexagon"
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      사진: "The Federal Republic"
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      사진: "The Boot"
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      사진: "The Bull Skin"
      아이콘: i-lucide-map-pin
      값: "ES"
  클래스 : 'w-full'
---
::

배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 표시할 수도 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  - ListboxItem[] [ ]
소품 :
  항목:
    -  - 레이블: 'France'
        아이콘: i-lucide-map-pin
        값 : 'FR'
      - label: '독일'
        아이콘: i-lucide-map-pin
        값: "DE"
      - label: '이탈리아'
        아이콘: i-lucide-map-pin
        가치: 'IT'
    -  - 레이블: 'Brazil'
        아이콘: i-lucide-map-pin
        값: "BR"
      - label: '아르헨티나'
        아이콘: i-lucide-map-pin
        값: 'AR'
  클래스: 'w-full'
---
::

###  다중

`multiple`prop을 사용하여 여러 항목을 선택할 수 있습니다. 활성화되면 `v-model` 은 배열이 됩니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
  - multiple @ 다중
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  다중: true
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: "ES"
  클래스: 'w-full'
---
::

###  가치 키

`value-key`prop.기본값은 `undefined`로 설정하여 전체 객체가 아닌 객체의 단일 속성을 바인딩하도록 선택할 수 있습니다.

::component-code
---
축소: true
무시하기:
  - modelValue - modelValue 이미지
  -  valueKey
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue
externalTypes:
  -  ListboxItem []
소품 :
  modelValue: 'FR'
  valueKey: 'value' 값
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: 'ES'
  클래스: 'w-full'
---
::

###  필터

`filter`prop을 사용하여 필터 입력을 표시하거나 [Input](/docs/components/input) 구성요소를 사용자 정의하기 위해 객체를 전달합니다. 기본값은 `false`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  필터 :
    자리 표시자: '필터...'
    아이콘: 'i-lucide-search'
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: "ES"
    - label: '네덜란드'
      아이콘: i-lucide-map-pin
      값: "NL"
    - label: '폴란드'
      아이콘: i-lucide-map-pin
      값: "PL"
  클래스: 'w-full'
---
::

### 선택한 아이콘

항목을 선택할 때 `selected-icon`prop을 사용하여 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
축소: true
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  valueKey
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  ListboxItem []
소품 :
  modelValue: 'FR'
  selectedIcon: 'i-lucide-flame'
  valueKey: 'value' 값
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: 'ES'
  클래스: 'w-full'
---
::

###  크기

`size`prop을 사용하여 목록 상자의 크기를 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  크기: xl
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: 'ES'
  클래스: 'w-full'
---
::

###  로딩 중

`loading`prop을 사용하여 로드 표시기를 표시합니다. `loading-icon`prop을 사용하여 아이콘을 사용자 정의합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  로드: true
  프로젝트:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
  클래스: 'w-full'
---
::

###  비활성 화

`disabled`prop을 사용하여 사용자가 Listbox와 상호 작용하지 않도록 합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  사용 안 함:true
  항목:
    - label: '프랑스'
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      아이콘: i-lucide-map-pin
      가치: 'IT'
    - label: '스페인'
      아이콘: i-lucide-map-pin
      값: "ES"
  클래스: 'w-full'
---
::

##  예제

###  항목 유형

`type` 속성을 `separator`와 함께 사용하여 항목 사이의 구분 기호를 표시하거나 `label` 레이블을 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  - ListboxItem[] [ ]
소품 :
  항목:
    -  - 유형: 'label'
        사진: "fruits"
      - label: 'Apple'
      - label: '바나나'
      - label: 'Blueberry'
      - label: '포도'
      - label: '파인애플'
    -  - 유형: 'label'
        사진: "vegetables"
      - label: 'Aubergine'
      - label: '브로콜리'
      - label: '당근'
      - label: 'Courgette'
      - label: 'Leek'
  클래스 : 'w-full'
---
::

::note
`label`items를 그룹 머리글로 사용할 때 배열 배열을 전달하여 레이블이 그룹과 함께 필터링되도록 합니다.
::

###  항목에 아이콘 포함

`icon` 속성을 사용하여 항목 내부에 [Icon](/docs/components/icon)를 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  프로젝트:
    - label: 'Backlog'
      아이콘: 'i-lucide-circle-help'
      값: '백로그'
    - label: 'Todo'
      아이콘: i-lucide-circle-plus
      value: 'todo' 값
    - label: '진행 중'
      아이콘: 'i-lucide-circle-arrow-up'
      값: "in_progress"
    - label: '완료'
      아이콘: 'i-lucide-circle-check'
      값: '완료'
  클래스: 'w-full'
---
::

###  프로젝트에 아바타가 있습니다.

`avatar` 속성을 사용하여 항목 내부에 [Avatar](/docs/components/avatar)를 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  프로젝트:
    - label: 'benjamincanac'
      아바타 (Avatar):
        src: 'https://github.com/benjamincanac.png'
    - label: 'HugoRCD'
      아바타 (Avatar):
        src: 'https://github.com/HugoRCD.png'
    - label: 'atinux'
      아바타 (Avatar):
        src: 'https://github.com/atinux.png'
    - label: 'romhml'
      아바타 (Avatar):
        src: 'https://github.com/romhml.png'
  클래스: 'w-full'
---
::

###  칩 항목

`chip` 속성을 사용하여 [Chip](/docs/components/chip)를 항목 내부에 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  항목:
    - label: '버그'
      칩:
        색상 : "error"
    - label: '기능'
      칩 :
        색상: "성공"
    - label: 'enhancement'
      칩:
        색상 : "info"
  클래스: 'w-full'
---
::

###  항목에 설명 포함

`description` 등록 정보를 사용하여 레이블 아래에 추가 텍스트를 표시할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  ListboxItem []
소품 :
  항목:
    - label: '프랑스'
      사진: "The Hexagon "
      아이콘: i-lucide-map-pin
      값 : 'FR'
    - label: '독일'
      사진: "The Federal Republic"
      아이콘: i-lucide-map-pin
      값: "DE"
    - label: '이탈리아'
      사진: "The Boot"
      아이콘: i-lucide-map-pin
      값: 'IT'
    - label: '스페인'
      사진: "The Bull Skin"
      아이콘: i-lucide-map-pin
      값: "ES"
  클래스 : 'w-full'
---
::

###  선택한 항목 제어

선택된 항목은 `default-value`prop 또는 `v-model` 지시문을 사용하여 제어할 수 있습니다.

::component-example
---
이름: 'listbox-model-value-example'
축소: true
---
::

###  검색 용어 제어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
이름: 'listbox-search-term-example'
---
::

###  무시 필터

`ignore-filter`prop을 `true`로 설정하여 내부 검색을 비활성화하고 사용자 고유의 검색 논리를 사용합니다.

::component-example
---
축소: true
이름: 'listbox-ignore-filter-example'
---
::

::note
이 예제에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 선언합니다.
::

### 필터 필드 포함

필터링할 필드 배열과 함께 `filter-fields`prop을 사용합니다. 기본값은 `[labelKey]`입니다.

::component-example
---
축소: true
이름: 'listbox-filter-fields-example'
---
::

### 가상화 사용

`virtualize`prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이 있는 개체로 가상화를 활성화합니다.

::component-example
---
이름: 'listbox-virtualize-example'
축소: true
---
::

###  이전 목록으로

두 개의 Listbox 구성 요소를 [Button](/docs/components/button) 컨트롤로 구성하여 전송 목록 패턴을 만들 수 있습니다.

::component-example
---
이름: 'list-box-transfer-list-example'
축소: true
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
