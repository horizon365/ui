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

##  사용

링크 구성 요소는 [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom)prop 주변의 래퍼입니다. 다음과 같은 몇 가지 추가 소품을 제공합니다.

- `inactive-class`prop은 링크가 비활성 상태일 때 클래스를 설정하고, 활성 상태일 때는 `active-class`를 사용합니다.
- `exact`prop은 링크가 활성화되어 있고 경로가 현재 경로와 정확히 동일한 경우 `active-class`로 스타일을 지정합니다.
- `exact-query` 및 `exact-hash`props는 링크가 활성화되어 있고 쿼리 또는 해시가 현재 쿼리 또는 해시와 정확히 동일한 경우 `active-class`로 스타일을 지정합니다.
  - use`exact-query="partial"` 링크가 활성화되어 있고 쿼리가 현재 쿼리와 부분적으로 일치하는 경우 `active-class` 스타일을 지정합니다.

이에 대한 인센티브는 Nuxt 2/Vue 2에서 NuxtLink와 동일한 API를 제공하는 것입니다. Vue Router [migration 에서 Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link)guide 를 통해 자세히 읽을 수 있습니다.

::note
[`Breadcrumb`](/docs/components/breadcrumb)[`Button`](/docs/components/button/docs/components/button/docs/components/button))[[](](]()[[[[[`Button`]([[[](](/docs/components/button/docs/components/button[`DropdownMenu`](/docs/components/dropdown-menu) [ `NavigationMenu`/docs/components/navigation-menu 구성 요소.
::

###  태그

`Link` 구성 요소는 `to`prop이 제공되면 `<a>` 태그를 렌더링하고, 그렇지 않으면 `<button>` 태그를 렌더링합니다. `as`prop을 사용하여 대체 태그를 변경할 수 있습니다.

::component-code
---
소품 :
  to : ''
  사진: "button"
슬롯 :
  기본 값: 링크
---
::

::note
`to`prop을 변경하여 렌더링된 HTML을 검사할 수 있습니다.
::

###  스타일

기본적으로 링크에는 기본 활성 및 비활성 스타일이 있습니다. [theme](#theme) 섹션을 확인하십시오.

::component-code
---
소품 :
  to:/docs/components/link 로
슬롯 :
  기본값: 링크
---
::

::note
`to`prop을 변경하여 활성 상태와 비활성 상태를 확인합니다.
::

`raw`prop을 사용하여 이 동작을 무시하고 `class`, `active-class` 및 `inactive-class`를 사용하여 고유한 스타일을 제공할 수 있습니다.

::component-code
---
무시하기:
  -  raw
소품 :
  raw: true
  to:/docs/components/link 로
  activeClass: 'font-bold'
  inactiveClass: 'text-muted' (텍스트 음소거)
슬롯 :
  기본 값: 링크
---

링크 (Link)
::

::callout{icon="i-simple-icons-visualstudiocode"}
VSCode에 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)extension을 사용하고 `active-class` 및 `inactive-class`props에 대한 자동완성을 원하는 경우 `.vscode/settings.json`에 다음 설정을 추가할 수 있습니다.

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### 로캘: badge{label="4.7+" class="align-text-top"}

Link 구성 요소는 [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) 와(와) 자동으로 통합됩니다. 내부 링크는 수동 래핑 없이 `$localePath`helper를 사용하여 자동으로 현지화됩니다.

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

##  API

###  Props

::component-props
---
무시하기:
  - 사용자 지정
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<a>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
