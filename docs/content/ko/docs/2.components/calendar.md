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

## Usage

`v-model` 지시어를 사용하여 선택한 날짜를 제어합니다.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: [2022, 2, 3]
---
::

상태를 제어할 필요가 없을 때 `default-value` Prop을 사용하여 초기 값을 설정합니다.

::component-code
---
cast:
  defaultValue: DateValue
ignore:
  - defaultValue
external:
  - defaultValue
props:
  defaultValue: [2022, 2, 6]
---
::

::framework-only
#nuxt
:::note{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 로케일 인식 서식에 사용합니다. 날짜 형식은 App 구성 요소의 `locale` 소품에 의해 결정됩니다.
:::

#vue
:::note{to="/docs/getting-started/integrations/i18n/vue#locale"}
이 구성 요소는 `@internationalized/date` 패키지를 로케일 인식 서식에 사용합니다. 날짜 형식은 App 구성 요소의 `locale` 소품에 의해 결정됩니다.
:::
::

### Type : badge{label="4.9+" class="align-text-top"}

`type` prop을 사용하여 달력에서 선택하는 항목을 변경합니다. 기본값은 `date`입니다.

`date`를 사용하는 경우 머리글을 클릭하여 날짜 보기에서 월 다음 연도 보기로 전환한 다음 드릴다운하여 날짜를 선택합니다.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: month
  modelValue: [2022, 2, 1]
---
::

`type="year"`를 사용하여 독립 실행형 연도 선택기를 렌더링합니다.

::component-code
---
cast:
  modelValue: DateValue
ignore:
  - type
  - modelValue
external:
  - modelValue
props:
  type: year
  modelValue: [2022, 1, 1]
---
::

### 다중

`multiple` Prop을 사용하여 여러 개의 선택을 허용합니다.

::component-code
---
prettier: true
cast:
  modelValue: DateValue[]
ignore:
  - multiple
  - modelValue
external:
  - modelValue
props:
  multiple: true
  modelValue: [[2022, 2, 4], [2022, 2, 6], [2022, 2, 8]]
---
::

### 범위

`range` prop을 사용하여 날짜 범위를 선택합니다.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  range: true
  modelValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

`range` prop은 `type="month"` 및 `type="year"`와 함께 작동하므로 개월 또는 년 범위를 선택할 수 있습니다.

::component-code
---
prettier: true
cast:
  modelValue: DateRange
ignore:
  - type
  - range
  - modelValue.start
  - modelValue.end
external:
  - modelValue
props:
  type: month
  range: true
  modelValue:
    start: [2022, 2, 1]
    end: [2022, 6, 1]
---
::

### 개월 수

`numberOfMonths` prop을 사용하여 달력의 월 수를 변경합니다.

::component-code
---
props:
  numberOfMonths: 3
---
::

### Month 제어

`month-controls` prop을 사용하여 월 컨트롤을 표시합니다. 기본값은 `true`입니다.

::component-code
---
props:
  monthControls: false
---
::

`prev-month` 및 `next-month` props를 사용하여 월 버튼을 재정의합니다.

::component-code
---
prettier: true
ignore:
  - prevMonth.color
  - prevMonth.variant
  - nextMonth.color
  - nextMonth.variant
props:
  prevMonth:
    color: primary
    variant: soft
  nextMonth:
    color: primary
    variant: soft
---
::

### Year 컨트롤

`year-controls` Prop을 사용하여 연도 컨트롤을 표시합니다. 기본값은 `true`입니다.

::component-code
---
props:
  yearControls: false
---
::

`prev-year` 및 `next-year` props를 사용하여 연도 단추를 재정의합니다.

::component-code
---
prettier: true
ignore:
  - prevYear.color
  - prevYear.variant
  - nextYear.color
  - nextYear.variant
props:
  prevYear:
    color: primary
    variant: soft
  nextYear:
    color: primary
    variant: soft
---
::

### View 컨트롤:badge{label="4.9+" class="align-text-top"}

`view-control` Prop을 사용하여 제목을 일, 월 및 연도 보기 간에 전환하는 단추로 만듭니다. 기본값은 `true`입니다.

::component-code
---
items:
  viewControl:
    - true
    - false
props:
  viewControl: false
---
::

`view-control` Prop을 오브젝트로 설정하여 제목 버튼을 덮어씁니다.

::component-code
---
prettier: true
ignore:
  - viewControl.color
  - viewControl.variant
props:
  viewControl:
    color: primary
    variant: soft
---
::

### 고정된 주

`fixed-weeks` prop을 사용하여 일정을 고정된 주로 표시합니다.

::component-code
---
props:
  fixedWeeks: false
---
::

### Week 번호 : badge{label="4.4+" class="align-text-top"}

`week-numbers` prop을 사용하여 달력에 주 번호를 표시합니다.

::component-code
---
props:
  weekNumbers: true
  fixedWeeks: true
---
::

### Color 색상

`color` prop을 사용하여 달력의 색상을 변경합니다.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  color: neutral
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Variant 파일

`variant` prop을 사용하여 달력의 변형을 변경합니다.

::component-code
---
cast:
  defaultValue: DateRange
hide:
  - range
  - defaultValue
  - defaultValue.start
  - defaultValue.end
props:
  variant: subtle
  range: true
  defaultValue:
    start: [2022, 2, 3]
    end: [2022, 2, 20]
---
::

### Size 크기

`size` prop을 사용하여 달력 크기를 변경합니다.

::component-code
---
props:
  size: xl
---
::

### Disabled 사용 불가

`disabled` prop을 사용하여 달력을 비활성화합니다.

::component-code
---
props:
  disabled: true
---
::

## examples 예제

### With Chip 이벤트 포함

[Chip](/docs/components/chip) 구성 요소를 사용하여 특정 날짜에 이벤트를 추가합니다.

::component-example
---
name: 'calendar-events-example'
---
::

### 비활성 날짜 포함

함수와 함께 `is-date-disabled` Prop을 사용하여 특정 날짜를 비활성화 상태로 표시합니다. `type="month"` 또는 `type="year"`를 사용할 때는 `is-month-disabled` 또는 `is-year-disabled` Prop을 대신 사용합니다.

::component-example
---
name: 'calendar-disabled-dates-example'
---
::

###  사용할 수 없는 날짜

함수와 함께 `is-date-unavailable` Prop을 사용하여 특정 날짜를 사용할 수 없음으로 표시합니다. `type="month"` 또는 `type="year"`를 사용할 때는 `is-month-unavailable` 또는 `is-year-unavailable` Prop을 대신 사용합니다.

::component-example
---
name: 'calendar-unavailable-dates-example'
---
::

### min/max 날짜 포함

`min-value` 및 `max-value` props를 사용하여 날짜를 제한합니다.

::component-example
---
name: 'calendar-min-max-dates-example'
---
::

### 다른 달력 시스템 사용

`@internationalized/date`의 다른 캘린더를 사용하여 다른 캘린더 시스템을 구현할 수 있습니다.

::component-example
---
name: 'calendar-other-system-example'
---
::

::note{to="https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations"}
`@internationalized/date` 문서에서 사용 가능한 모든 캘린더를 확인할 수 있습니다.
::

### 외부 컨트롤 포함

`v-model`에서 전달된 날짜를 조작하여 외부 컨트롤을 사용하여 달력을 제어할 수 있습니다.

::component-example
---
name: 'calendar-external-controls-example'
---
::

### 오늘 날짜

`@internationalized/date`에서 `today` 함수를 `getLocalTimeZone`와 함께 사용하여 값을 현재 날짜로 설정합니다.

::component-example
---
name: 'calendar-today-example'
---
::

### as 날짜 선택기

[Button](/docs/components/button) 및 [Popover](/docs/components/popover) 구성 요소를 사용하여 날짜 선택기를 만듭니다.

::component-example
---
name: 'calendar-date-picker-example'
---
::

### 날짜 범위 선택기Name

[Button](/docs/components/button) 및 [Popover](/docs/components/popover) 구성 요소를 사용하여 사전 설정된 범위를 가진 날짜 범위 선택기를 만듭니다.

::component-example
---
name: 'calendar-date-range-picker-example'
---
::

## API 파일

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits 파일

:component-emits

## 테마

:component-theme

## 변경 로그

:component-changelog
