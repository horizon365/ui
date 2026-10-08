---
title: ProseCollapable (프로스 축소 가능)
description: '부드러운 확장 및 축소 애니메이션을 사용하여 내용 가시성을 전환합니다.'
category: components
navigation.title: Collapsible
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

##  사용

`collapsible` 구성 요소로 콘텐츠를 래핑하여 콘텐츠에 [Collapsible](/docs/components/collapsible)를 표시합니다.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| 프로프 (Prop)    | 기본 값   | 유형 (Type)                     |
|---------|-----------|--------------------------|
| `name`|           | `string`{lang="ts-type"}|
| `size`| `md`| `string`{lang="ts-type"}|
| `color`| `neutral`| `string`{lang="ts-type"}|

::

# 코드

```mdc
::collapsible

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::
```

::

##  API

###  Props

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

: component-theme {prose}

##  Changelog

: component-changelog{prefix="prose"}
