---
title: Prose탭
description: '관련 컨텐트를 대화식 탭 인터페이스로 구성합니다.'
category: components
navigation.title: Tabs
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Tabs.vue
---

## Usage

`tabs` 및 `tabs-item` 구성 요소를 사용하여 콘텐츠에 [Tabs](xph05xxph06x를 표시합니다.

::code-preview{class="[&>div]:*:my-0"}

:::tabs{class="w-full"}

:::tabs-item{label="코드 (Code)" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="미리보기" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehederit ullamco et culpa. ( 로렘 벨릿 voluptate ex reprehederit ullamco et culpa )
::

:::

:::

#code

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehederit ullamco et culpa. ( 로렘 벨릿 voluptate ex reprehederit ullamco et culpa ). )
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
````

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme 테마

::component-theme{prose}
---
extra:
  - tabsItem
---
::

## 변경 로그

:component-changelog{prefix="prose"}
