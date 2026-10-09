---
title: ColorPicker (ColorPicker)
description: 색상을 선택하는 구성요소입니다.
category: form
keywords:
  - colour picker
  - swatch
  - hex
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ColorPicker.vue
---

## Usage

`v-model` 지시문을 사용하여 ColorPicker 값을 제어합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  modelValue: '#00C16A'
---
::

상태를 제어할 필요가 없을 때 `default-value` prop을 사용하여 초기 값을 설정합니다.

::component-code
---
ignore:
  - defaultValue
props:
  defaultValue: '#00BCD4'
---
::

### RGB 포맷

`format` prop 를 사용하여 ColorPicker 의 `rgb` 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: rgb
  modelValue: 'rgb(0, 193, 106)'
---
::

### HSL 포맷

`format` prop 를 사용하여 ColorPicker 의 `hsl` 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: hsl
  modelValue: 'hsl(153, 100%, 37.8%)'
---
::

### CMYK 형식

`format` prop 를 사용하여 ColorPicker 의 `cmyk` 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: cmyk
  modelValue: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab 형식

`format` prop 를 사용하여 ColorPicker 의 `lab` 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
  - format
external:
  - modelValue
props:
  format: lab
  modelValue: 'lab(68.88% -60.41% 32.55%)'
---
::

### Throttle 키

`throttle` Prop을 사용하여 ColorPicker의 스로틀 값을 설정합니다.

::component-code
---
ignore:
  - modelValue
external:
  - modelValue
props:
  throttle: 100
  modelValue: '#00C16A'
---
::

### Size 크기

`size` Prop 을 사용하여 ColorPicker 의 크기를 설정합니다.

::component-code
---
props:
  size: xl
---
::

### 비활성 화

`disabled` Prop을 사용하여 ColorPicker를 비활성화합니다.

::component-code
---
props:
  disabled: true
---
::

## 예

### As 색상 선택

[Button](/docs/components/button) 및 [Popover](/docs/components/popover) 구성 요소를 사용하여 색상 선택기를 만듭니다.

::component-example
---
name: 'color-picker-chooser-example'
---
::

## API 파일

### Props 코드

:component-props

### Emits 소개

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
