---
description: NuxtLink 주변에 추가 소품이 있는 래퍼입니다.
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

## Usage

Link 구성 요소는 [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop을 사용하여 [`<NuxtLink>`xph04xhttps://nuxt.com/docs/api/components/nuxt-linkxph06x 주위의 래퍼로, 다음과 같은 몇 가지 추가 props를 제공합니다.

- `inactive-class` prop은 링크가 비활성 상태일 때 클래스를 설정하고, 활성 상태일 때 `active-class`를 사용합니다.
- `exact` prop은 링크가 활성화되어 있고 경로가 현재 경로와 정확히 동일할 때 `active-class`로 스타일을 지정합니다.
- `exact-query` 및 `exact-hash`는 링크가 활성화되어 있고 쿼리 또는 해시가 현재 쿼리 또는 해시와 정확히 같을 때 `active-class`로 스타일을 지정하는 소품입니다.
  - x`exact-query="partial"`를 사용하여 링크가 활성화되어 있고 쿼리가 현재 쿼리와 부분적으로 일치하는 경우 `active-class`를 사용하여 스타일을 지정합니다.

이에 대한 인센티브는 Nuxt 2/Vue 2에서 NuxtLink와 동일한 API를 제공하는 것입니다. Vue Router [migration from Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) 가이드에서 자세히 읽을 수 있습니다.

::note
이것은 [`Breadcrumb`](/docs/components/breadcrumb), [`Button`](/docs/components/button), [`ContextMenu`](/docs/components/context-menu, [`DropdownMenu`) 및 [`DropdownMenu``DropdownMenu`xph04044x 구성 요소에 사용됩니다.
::

### Tag 파일

`Link` 구성 요소는 `to` 소품이 제공될 때 `<a>` 태그를 렌더링하고, 그렇지 않으면 `<button>` 태그를 렌더링합니다. `as` 소품을 사용하여 폴백 태그를 변경할 수 있습니다.

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
`to` prop을 변경하여 렌더링된 HTML을 검사할 수 있습니다.
::

### Style 스타일

기본적으로 링크에는 기본 활성 및 비활성 스타일이 있습니다. [#theme](#theme) 섹션을 체크 아웃합니다.

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
`to` Prop을 변경하여 활성 상태와 비활성 상태를 확인해 봅니다.
::

`raw` prop을 사용하여 이 동작을 무시하고 `class`, `active-class` 및 `inactive-class`를 사용하여 자신만의 스타일을 제공할 수 있습니다.

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

링크 (Link)
::

::callout{icon="i-simple-icons-visualstudiocode"}
VSCode에 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 확장을 사용하고 `active-class` 및 `inactive-class` props에 대한 자동 완성을 원하는 경우 `.vscode/settings.json`에 다음 설정을 추가할 수 있습니다.

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### 로케일: badge{label="4.7+" class="align-text-top"}

링크 구성 요소는 설치 시 [`@nuxtjs/i18n`](xph15x)와 자동으로 통합됩니다. 내부 링크는 수동 래핑 없이 `$localePath` 도우미를 사용하여 자동으로 지역화됩니다.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
필요한 경우 수동으로 `localePath()` 또는 `localeRoute()`를 사용할 수 있습니다.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Nuxt UI의 국제화에 대해 자세히 알아보세요.
::

## API 파일

### Props (### Props)

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<a>` HTML 속성도 지원합니다.
::

### Slots

:component-slots

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
