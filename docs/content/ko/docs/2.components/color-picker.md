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

##  사용

`v-model` 지시문을 사용하여 ColorPicker 값을 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  모델 값: '#00C16A'
---
::

상태를 제어할 필요가 없을 때는 `default-value`prop을 사용하여 초기값을 설정합니다.

::component-code
---
무시하기:
  - defaultValue - defaultValue
소품 :
  defaultValue: "#00BCD4"
---
::

### RGB 포맷

`format`prop을 사용하여 ColorPicker의 `rgb` 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  형식
외부:
  - modelValue - modelValue
소품 :
  형식: RGB
  modelValue: 'rgb(0,193,106)'
---
::

### HSL 형식

`format`prop을 사용하여 ColorPicker의 `hsl` 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  형식
외부:
  - modelValue - modelValue 이미지
소품 :
  형식: hsl
  modelValue: 'hsl(153,100%,37.8%)'
---
::

### CMYK 포맷

`format`prop을 사용하여 ColorPicker의 `cmyk` 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  형식
외부:
  - modelValue - modelValue 이미지
소품 :
  형식: cmyk
  모델 값: 'cmyk(100%, 0%, 45.08%, 24.31%)'
---
::

### CIELab 포맷

`format`prop을 사용하여 ColorPicker의 `lab` 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  형식
외부:
  - modelValue - modelValue 이미지
소품 :
  형식: 랩
  modelValue: 'lab (68.88% -60.41% 32.55%)'
---
::

### Throttle (스피드)

`throttle`prop 을 사용하여 ColorPicker 의 스로틀 값을 설정합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
외부:
  - modelValue - modelValue 이미지
소품 :
  스로틀 : 100
  모델 값: '#00C16A'
---
::

###  크기

`size`prop 을 사용하여 ColorPicker 의 크기를 설정합니다.

::component-code
---
소품 :
  크기: xl
---
::

###  비활성 화

`disabled`prop 을 사용하여 ColorPicker 를 비활성화합니다.

::component-code
---
소품 :
  사용 안 함:true
---
::

##  예

###  색상 선택

[Button](/docs/components/button) 및 [Popher](/docs/components/popover) 구성요소를 사용하여 색상 선택기를 만듭니다.

::component-example
---
이름: 'color-picker-chooser-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  Emits

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
