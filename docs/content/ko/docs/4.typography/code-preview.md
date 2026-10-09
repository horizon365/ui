---
title: ProseCodePreview (프로세코드프리뷰)
description: '코드 예제를 미리 보기 및 소스와 함께 표시하여 문서를 보다 명확하게 표시합니다.'
category: components
navigation.title: CodePreview
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## Usage

`code-preview` 구성 요소를 사용하여 `code` 슬롯을 사용하여 소스 코드와 함께 라이브 미리 보기를 표시합니다.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="미리보기"}

::code-preview{class="[&>div]:*:my-0"}
`inline code` 이미지

#code

```mdc
`inline code`
```

::

#code

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

::

## API

### Props 코드

:component-props{prose}

### Slots

:component-slots{prose}

## Theme (## 테마)

:component-theme{prose}

## 변경 로그

:component-changelog{prefix="prose"}
