---
description: 선택된 상태와 선택되지 않은 상태 사이를 전환하는 입력 요소입니다.
category: form
keywords:
  - tickbox
  - check
  - boolean
links:
  - label: 체크박스
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/checkbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Checkbox.vue
---

## Usage

`v-model` 지시어를 사용하여 체크 박스의 선택된 상태를 제어합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: true
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기 값을 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: true
---
::

### indeterminate 불확정

`v-model` 지시어 또는 `default-value` prop의 `indeterminate` 값을 사용하여 Checkbox를 [indeterminate state](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes)로 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
---
::

### 미정 아이콘

`indeterminate-icon` 소품을 사용하여 불확정 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-minus`입니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: 'indeterminate'
  indeterminateIcon: 'i-lucide-plus'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.minus` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.minus` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Label 태그

`label` prop을 사용하여 체크 상자의 레이블을 설정합니다.

::component-code
---
props:
  label: Check me
---
::

`required` 소품을 사용할 때 레이블 옆에 별표가 추가됩니다.

::component-code
---
ignore:
  - label
props:
  required: true
  label: Check me
---
::

### Description

`description` prop을 사용하여 Checkbox에 대한 설명을 설정합니다.

::component-code
---
ignore:
  - label
props:
  label: Check me
  description: 'This is a checkbox.'
---
::

### Icon

`icon` prop을 사용하여 체크 박스 아이콘을 설정합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.check` 키 아래의 `app.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.check` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Color 색상

`color` Prop을 사용하여 체크 상자의 색상을 변경합니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: neutral
  defaultValue: true
  label: Check me
---
::

### Variant

`variant` Prop을 사용하여 Checkbox의 변형을 변경합니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  color: 'primary'
  variant: 'card'
  defaultValue: true
  label: Check me
---
::

### Size

`size` Prop을 사용하여 Checkbox의 크기를 변경합니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  variant: list
  defaultValue: true
  label: Check me
---
::

### 표시기

`indicator` 소품을 사용하여 위치를 변경하거나 표시기를 숨깁니다. 기본값은 `start`입니다.

::note
`indicator`가 `hidden`인 경우 아이콘이 대신 레이블 위에 표시됩니다.
::

::component-code
---
prettier: true
ignore:
  - label
  - icon
  - defaultValue
props:
  indicator: 'hidden'
  variant: 'card'
  icon: 'i-lucide-heart'
  defaultValue: true
  label: Check me
---
::

### 비활성 화 됨

`disabled` prop을 사용하여 Checkbox를 비활성화합니다.

::component-code
---
ignore:
  - label
props:
  disabled: true
  label: Check me
---
::

## API 파일

### Props 코드

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<button>` HTML 속성을 지원합니다.
::

### 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
