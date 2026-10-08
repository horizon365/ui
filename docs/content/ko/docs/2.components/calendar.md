---
description: 단일 날짜, 여러 날짜 또는 날짜 범위를 선택하기 위한 달력 구성 요소.
category: element
keywords:
  - date picker
  - datepicker
  - schedule
links:
  - label: 달력 (Calendar)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/calendar
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Calendar.vue
---

##  사용

`v-model` 지시문을 사용하여 선택한 날짜를 제어합니다.

::component-code
---
캐스트 :
  ModelValue: DateValue 데이터값
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  모델 가치 [2022, 2, 3]
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
캐스트 :
  defaultValue : DateValue 값
무시하기:
  - defaultValue - defaultValue
외부:
  - defaultValue - defaultValue
소품 :
  defaultValue : [2022, 2, 6]
---
::

::framework-only
#nuxt 코드
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 형식을 지정합니다. 날짜 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::

#vue #vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 사용하여 로케일 인식 서식을 지정합니다. 날짜 형식은 App 구성 요소의 `locale`prop에 의해 결정됩니다.
:::
::

###  유형: badge {label="4.9+" class="align-text-top"}

`type`prop을 사용하여 달력에서 선택하는 항목을 변경합니다. 기본값은 `date`입니다.

`date`를 사용하는 경우 머리글을 클릭하여 일별 보기에서 월 다음 연도 보기로 전환하여 빠른 탐색을 수행한 다음 드릴다운하여 날짜 선택

::component-code
---
캐스트 :
  ModelValue: DateValue 데이터값
무시하기:
  -  type
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  유형: 월
  모델 값 [2022, 2, 1]
---
::

`type="year"`를 사용하여 독립 실행형 연도 선택기를 렌더링합니다.

::component-code
---
캐스트 :
  ModelValue: DateValue 데이터값
무시하기:
  -  type
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  유형: 연도
  [2022년 1월 1일]
---
::

###  다중

`multiple`prop을 사용하여 여러 개의 선택을 허용합니다.

::component-code
---
상품명 : True
캐스트 :
  modelValue: DateValue []
무시하기:
  -  multiple
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  다중: True
  [2012년 12월 22일] [2012년 12월 22일] [2012년 12월 22일] [2012년 12월 12일 12시 12분 12분 12시 12분 12시 12분 12시 12분 12분 12시 12분 12분 12시 12분 12분 12시 12분 12분 ]
---
::

###  범위

`range`prop을 사용하여 날짜 범위를 선택하십시오.

::component-code
---
상품명 : True
캐스트 :
  modelValue: DateRange (날짜 범위)
무시하기:
  -  range
  -  modelValue. start
  -  modelValue. end
외부:
  - modelValue - modelValue 이미지
소품 :
  범위: true
  ModelValue:
    [2022, 2, 3]
    [2022, 2, 20]
---
::

`range`prop은 `type="month"` 및 `type="year"`와 함께 작동하므로 개월 또는 년 범위를 선택할 수 있습니다.

::component-code
---
상품명 : True
캐스트 :
  modelValue: DateRange (날짜 범위)
무시하기:
  -  type
  -  range
  -  modelValue. start
  -  modelValue. end
외부:
  - modelValue - modelValue 이미지
소품 :
  유형: 월
  범위: true
  modelValue:
    [2022, 2, 1]
    [2022, 6, 1]
---
::

### 개월 수

`numberOfMonths`prop을 사용하여 달력의 월 수를 변경합니다.

::component-code
---
소품 :
  numberOfMonths: 3 개월
---
::

### 월 관리

`month-controls`prop을 사용하여 월 컨트롤을 표시합니다. 기본값은 `true`입니다.

::component-code
---
소품 :
  monthControls: false
---
::

`prev-month` 및 `next-month`props를 사용하여 월 버튼을 재정의합니다.

::component-code
---
상품명 : True
무시하기:
  -  prevMonth. color
  - prevMonth.variant - prevMonth.variant
  -  nextMonth. color
  -  nextMonth. variant
소품 :
  prevMonth:
    색상: 기본
    변형: 소프트
  nextmonth :
    색상: 기본
    변형: 소프트
---
::

###  년 관리

`year-controls`prop 을 사용하여 연도 컨트롤을 표시합니다. 기본값은 `true`입니다.

::component-code
---
소품 :
  yearControls : 거짓
---
::

`prev-year` 및 `next-year`props를 사용하여 연도 단추를 재정의합니다.

::component-code
---
상품명 : True
무시하기:
  -  prevYear. color
  -  prevYear. variant
  -  nextYear. color
  -  nextYear. variant
소품 :
  prevYear:
    색상: 기본
    변형: 소프트
  nextYear :
    색상: 기본
    변형: 소프트
---
::

###  컨트롤 보기: badge{label="4.9+" class="align-text-top"}

`view-control`prop을 사용하여 머리글을 일, 월 및 연도 보기 사이로 전환하는 단추로 만듭니다. 기본값은 `true`입니다.

::component-code
---
항목:
  viewControl:
    -  true
    -  false
소품 :
  viewControl: false
---
::

`view-control`prop을 객체로 설정하여 머리글 버튼을 덮어씁니다.

::component-code
---
상품명 : True
무시하기:
  -  viewControl. color
  -  viewControl. variant
소품 :
  viewControl:
    색상: 기본
    변형: 소프트
---
::

### 고정 주

`fixed-weeks`prop을 사용하여 일정을 고정된 주로 표시합니다.

::component-code
---
소품 :
  fixedweeks : 거짓
---
::

###  주 번호: badge{label="4.4+" class="align-text-top"}

`week-numbers`prop을 사용하여 달력에 주 번호를 표시합니다.

::component-code
---
소품 :
  주번호: true
  fixedweeks: true : 진실
---
::

###  색상

`color`prop을 사용하여 달력의 색상을 변경합니다.

::component-code
---
캐스트 :
  defaultValue:DateRange : 날짜 범위
숨기기 (Hide):
  -  range
  - defaultValue - defaultValue
  -  defaultValue. start
  -  defaultValue. end
소품 :
  색상: 중립
  범위: true
  defaultValue :
    [2022, 2, 3]
    [2022, 2, 20]
---
::

###  변형

`variant`prop 을 사용하여 달력의 변형을 변경합니다.

::component-code
---
캐스트 :
  defaultValue:DateRange : 날짜 범위
숨기기 (Hide):
  -  range
  - defaultValue - defaultValue
  -  defaultValue. start
  -  defaultValue. end
소품 :
  변형: 미묘함
  범위: true
  defaultValue :
    [2022, 2, 3]
    [2022, 2, 20]
---
::

###  크기

`size`prop을 사용하여 달력의 크기를 변경합니다.

::component-code
---
소품 :
  크기: xl
---
::

###  비활성 화

`disabled`prop을 사용하여 일정을 비활성화합니다.

::component-code
---
소품 :
  사용 안 함:true
---
::

##  예제

### 칩 이벤트 포함

[Chip](/docs/components/chip) 구성 요소를 사용하여 특정 날짜에 이벤트를 추가합니다.

::component-example
---
이름: calendar-events-example
---
::

###  비활성화 날짜

`is-date-disabled`prop을 함수와 함께 사용하여 특정 날짜를 비활성화로 표시합니다. `type="month"` 또는 `type="year"` 을 사용할 때는 `is-month-disabled` 또는 `is-year-disabled`prop을 대신 사용하십시오.

::component-example
---
이름: calendar-disabled-dates-example
---
::

###  사용할 수 없는 날짜

특정 날짜를 사용할 수 없음으로 표시하려면 `is-date-unavailable`prop을 함수와 함께 사용하십시오. `type="month"` 또는 `type="year"` 를 사용할 때는 `is-month-unavailable` 또는 `is-year-unavailable`prop을 사용하십시오.

::component-example
---
이름: calendar-unavailable-dates-example
---
::

###  최소/최대 날짜

`min-value` 및 `max-value`props를 사용하여 날짜를 제한합니다.

::component-example
---
name: calendar-min-max-dates-example (calendar-min-max-dates-example) 이름: calendar-min-max-dates-example
---
::

###  다른 달력 시스템

`@internationalized/date`의 다른 캘린더를 사용하여 다른 캘린더 시스템을 구현할 수 있습니다.

::component-example
---
이름: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
사용 가능한 모든 일정은 `@internationalized/date`docs에서 확인할 수 있습니다.
::

###  외부 컨트롤

`v-model`에 전달된 날짜를 조작하여 외부 제어를 사용하여 일정을 제어할 수 있습니다.

::component-example
---
name: 'calendar-external-controls-example' 입니다.
---
::

### 오늘의 날짜

`@internationalized/date`의 `getLocalTimeZone` 함수를 사용하여 값을 현재 날짜로 설정합니다.

::component-example
---
이름 : calendar-today-example
---
::

###  날짜 선택기로

[Button](/docs/components/button) 및 [Popher](/docs/components/popover) 구성 요소를 사용하여 날짜 선택기를 만듭니다.

::component-example
---
이름: calendar-date-picker-example
---
::

###  날짜 범위 선택기로

[Button](/docs/components/button) 및 [Popher](/docs/components/popover) 구성 요소를 사용하여 사전 설정된 범위를 가진 날짜 범위 선택기를 만듭니다.

::component-example
---
이름: 'calendar-date-range-picker-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
