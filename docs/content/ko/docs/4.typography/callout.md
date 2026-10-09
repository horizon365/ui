---
title: ProseCallout 구문 콜아웃
description: '눈에 띄는 색상의 상자와 아이콘으로 중요한 정보를 강조합니다.'
category: components
navigation.title: Callout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Callout.vue
---

## Usage

`callout` 구성 요소의 기본 슬롯에서 Markdown을 사용하여 콘텐츠에 눈길을 끄는 컨텍스트를 추가합니다.

::component-code{slug="callout" prose}
---
props:
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with full **markdown** support.
---
::

### Icon

`icon` prop을 사용하여 내용 옆에 아이콘을 표시합니다.

::component-code{slug="callout" prose}
---
props:
  icon: i-lucide-square-play
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with an icon.
---
::

### Color 이미지

`color` 소품을 사용하여 콜아웃의 색상을 변경합니다.

::component-code{slug="callout" prose}
---
ignore:
  - icon
props:
  icon: i-lucide-info
  color: info
  class: 'w-full my-0'
hide:
  - class
slots:
  default: This is a `callout` with a custom color.
---
::

### 링크

[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) 구성 요소의 모든 속성을 전달하여 콜아웃을 링크로 만들 수 있습니다.

::component-code{slug="callout" prose}
---
hide:
  - class
ignore:
  - icon
  - target
props:
  icon: i-lucide-square-play
  to: '/docs/getting-started/installation/nuxt'
  color: neutral
  class: 'w-full my-0'
slots:
  default: Learn how to install `@nuxt/ui` in your project.
---
::

## 바로가기

미리 정의된 아이콘과 색상이 포함된 `note`, `tip`, `warning` 및 `caution` 바로 가기를 사용할 수도 있습니다.

::code-preview

:::div{class="flex flex-col gap-4 w-full"}

::note{class="w-full my-0"}
여기 추가 정보가 있습니다.
::

::tip{class="w-full my-0"}
여기 도움이 되는 제안이 있습니다.
::

::warning{class="w-full my-0"}
예상치 못한 결과가 발생할 수 있으므로 이 작업을 수행하는 데 주의하십시오.
::

::caution{class="w-full my-0"}
이 작업은 실행 취소할 수 없습니다.
::

:::

#code

```mdc
::note
Here's some additional information.
::

::tip
Here's a helpful suggestion.
::

::warning
Be careful with this action as it might have unexpected results.
::

::caution
This action cannot be undone.
::
```

::

## API

### Props (### Props)

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 테마

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
