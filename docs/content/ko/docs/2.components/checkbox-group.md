---
title: CheckboxGroup 체크박스 그룹
description: 목록에서 여러 옵션을 선택하는 확인란 세트입니다.
category: form
keywords:
  - multi select
  - checklist
links:
  - label: CheckboxGroup 체크박스 그룹
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox#group-root
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CheckboxGroup.vue
---


##  사용

`v-model` 지시문을 사용하여 CheckboxGroup의 값을 제어하거나 `default-value`prop을 사용하여 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  - items 항목
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  ModelValue:
    -  시스템
  항목:
    -  시스템
    -  '빛'
    -  다크
---
::

###  프로젝트

`items`prop을 문자열 또는 숫자의 배열로 사용합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue:
    -  시스템
  프로젝트:
    -  시스템
    -  '빛'
    -  @ '어둠'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

-  @ `label?: string` @ @ {lang="ts-type"}
-  @ `description?: string` @ @ {lang="ts-type"} @
-  @ [ @ `value?: string` @ {lang="ts-type"} @ ]( @ #value-key ) @
- `disabled?: boolean`{lang="ts-type"}
-  @ [ @ `icon?: string` @ {lang="ts-type"} @ ]( @ #indicator ) @
-  @ `class?: any` @ {lang="ts-type"} @
-  @ `ui?: { item?: ClassNameValue, container?: ClassNameValue, base?: ClassNameValue, 'indicator'?: ClassNameValue, icon?: ClassNameValue, wrapper?: ClassNameValue, label?: ClassNameValue, description?: ClassNameValue }` @ {lang="ts-type"}

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  items
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  CheckboxGroupItem []
소품 :
  ModelValue:
    -  시스템
  항목:
    - label: '시스템'
      description: '장치 설정과 일치합니다.'
      값: '시스템'
    - label: '빛'
      설명: "항상 빛 테마를 사용합니다."
      값: "Light"
    - label: '어둠'
      설명: "항상 어두운 테마를 사용합니다."
      값: 'Dark'
---
::

::caution
객체를 사용할 때 `v-model` 지시문 또는 `default-value`prop에서 객체의 `value` 속성을 참조해야 합니다.
::

###  값 키

`value-key`prop.Defaults를 사용하여 값을 설정하는 데 사용되는 속성을 변경할 수 있습니다.You can change the property that is used to set the value by using the `value-key`prop.Defaults to `value`.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  valueKey
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  CheckboxGroupItem []
소품 :
  modelValue:
    -  '빛'
  valueKey : 'id'
  프로젝트:
    - label: '시스템'
      description: '장치 설정과 일치합니다.'
      ID: '시스템'
    - label: '빛'
      설명: "항상 빛 테마를 사용합니다."
      사진: "Light"
    - label: '어둠'
      설명: "항상 어두운 테마를 사용합니다."
      사진: "dark"
---
::

###  전설

`legend`prop 을 사용하여 CheckboxGroup의 범례를 설정합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
소품 :
  사진: "Theme"
  defaultValue :
    -  시스템
  프로젝트:
    -  시스템
    -  '빛'
    -  '어둠'
---
::

###  색상

`color`prop을 사용하여 CheckboxGroup의 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
항목:
  색상 :
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
소품 :
  색상: 중립
  defaultValue :
    -  시스템
  항목:
    -  시스템
    -  '빛'
    -  어둠의
---
::

###  변형

`variant`prop을 사용하여 CheckboxGroup의 변형을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
externalTypes:
  -  CheckboxGroupItem []
항목:
  색상 :
    -  기본
    -  secondary
    -  성공
    -  info
    -  경고
    -  오류
    -  neutral
  변형 :
    -  목록
    -  카드
    -  테이블
소품 :
  색상 : primary
  variant: '카드'
  defaultValue :
    - system 시스템
  프로젝트:
    - label: '시스템'
      값: '시스템'
      description: '장치 설정과 일치합니다.'
    - label: '빛'
      값: "Light"
      설명: "항상 빛 테마를 사용합니다."
    - label: '다크'
      값: 'Dark'
      설명: "항상 어두운 테마를 사용합니다."
---
::

###  크기

`size`prop을 사용하여 CheckboxGroup의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
프로젝트:
  변형:
    -  list
    -  카드
    -  테이블
소품 :
  크기: "xl"
  variant: '리스트'
  defaultValue :
    -  시스템
  항목:
    -  시스템
    -  '빛'
    -  '다크'
---
::

###  방향

`orientation`prop을 사용하여 CheckboxGroup.기본값은 `vertical`로 변경합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
프로젝트:
  변형:
    -  list
    -  카드
    -  테이블
소품 :
  방향: Horizontal
  variant: '리스트'
  defaultValue :
    -  시스템
  항목:
    -  시스템
    -  '빛'
    -  '어둠'
---
::

###  지표

위치를 변경하거나 표시기를 숨기려면 `indicator`prop을 사용합니다. 기본값은 `start`입니다.

::note
항목의 `icon`는 표시기가 보이는 동안 확인 표시를 대체하고 `hidden`일 때는 레이블 위에 표시됩니다.
::

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
externalTypes:
  -  CheckboxGroupItem []
프로젝트:
  표시자:
    -  시작
    -  끝
    -  숨김
  변형 :
    -  목록
    -  카드
    -  테이블
소품 :
  사진: "hidden"
  방향: 수평
  variant: '테이블'
  defaultValue :
    -  시스템
  프로젝트:
    - label: '시스템'
      아이콘 : i-lucide-monitor
      값: '시스템'
      클래스: 'W-20'
    - label: '빛'
      아이콘: i-lucide-sun
      클래스: 'W-20'
      값: 'Light'
    - label: '다크'
      아이콘 : i-lucide-moon
      클래스: 'W-20'
      값: "Dark"
---
::

###  비활성 화

`disabled`prop을 사용하여 CheckboxGroup을 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  - defaultValue - defaultValue
  -  items
외부:
  -  items
소품 :
  사용 안 함:true
  defaultValue :
    -  시스템
  항목:
    -  시스템
    -  '빛'
    -  '어둠'
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

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
