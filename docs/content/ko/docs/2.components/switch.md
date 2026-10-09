---
description: 두 상태 사이를 전환하는 컨트롤입니다.
category: form
keywords:
  - toggle
  - toggle switch
links:
  - label: 스위치 (Switch)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/switch
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Switch.vue
---

## Usage

`v-model` 지시어를 사용하여 스위치의 확인된 상태를 제어합니다.

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

### Label 태그

`label` prop을 사용하여 Switch의 레이블을 설정합니다.

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

`description` prop 를 사용하여 Switch 에 대한 설명을 설정합니다.

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

`checked-icon` 및 `unchecked-icon` props를 사용하여 스위치 아이콘을 선택하거나 선택하지 않을 때 설정합니다.

::component-code
---
prettier: true
ignore:
  - label
  - defaultValue
props:
  uncheckedIcon: 'i-lucide-x'
  checkedIcon: 'i-lucide-check'
  defaultValue: true
  label: Check me
---
::

### Loading 중

`loading` prop를 사용하여 스위치에 로드 아이콘을 표시합니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  defaultValue: true
  label: Check me
---
::

### loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
  defaultValue: true
  label: Check me
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Color 이미지

`color` Prop을 사용하여 스위치의 색상을 변경합니다.

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

### Size

`size` prop을 사용하여 스위치의 크기를 변경합니다.

::component-code
---
ignore:
  - label
  - defaultValue
props:
  size: xl
  defaultValue: true
  label: Check me
---
::

### Disabled 사용 안 함

`disabled` prop을 사용하여 스위치를 비활성화합니다.

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

### Props (### Props)

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
