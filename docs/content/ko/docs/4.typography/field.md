---
title: 프로세필드 (ProseField)
description: 'API 매개변수, props 및 구성 옵션을 명확하게 문서화합니다.'
category: components
navigation.title: Field
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Field.vue
---

##  사용

내용에 표시할 필드, 소품 또는 매개 변수.

::code-preview
::field{name="name" type="string" required class="w-full"}
`description`는 prop로 설정하거나 기본 슬롯에 전체 **markdown**support를 설정할 수 있습니다.
::

# 코드

```mdc
::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::
```

::

##  API

###  Props

: component-props {prose}

###  슬롯

: component-slots {prose}

##  테마

:component-theme {prose}

##  Changelog

: component-changelog {prefix="prose"}
