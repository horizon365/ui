---
description: 앱에 전역 구성, 토스트 및 툴팁을 제공하는 래퍼입니다.A wrapper to provide global configuration, toast and tooltips to your app.
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/App.vue
---

## Usage

이 구성 요소는 Reka UI [ConfigProvider](https://reka-ui.com/docs/utilities/config-provider)를 구현하여 모든 구성 요소에 글로벌 구성을 제공합니다.

- 모든 원시 요소가 전역 읽기 방향을 상속할 수 있도록 합니다.
- 본문 잠금을 설정할 때 스크롤 본문의 동작을 변경합니다.
- 레이아웃 이동을 방지하기 위해 훨씬 더 많은 컨트롤을합니다.

또한 [ToastProviderxph09xhttps://reka-ui.com/docs/components/toast#provider) 및 [TooltipProvider](https://reka-ui.com/docs/components/tooltip#provider)를 사용하여 글로벌 토스트 및 툴팁을 제공하고 프로그래밍 모드 및 슬라이드오버를 제공합니다.

`app.vue` 파일에서 App 구성 요소로 전체 응용 프로그램을 래핑합니다.Wrap your entire application with the App component in your `app.vue` file:

```vue [app.vue]
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt#locale"}
`locale` prop을 사용하여 앱의 로케일을 변경하는 방법을 알아봅니다. 또한 Calendar, InputDate 및 InputTime과 같은 구성 요소의 날짜/시간 형식도 제어합니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/i18n/vue#locale"}
`locale` prop을 사용하여 앱의 로케일을 변경하는 방법을 알아봅니다. 또한 Calendar, InputDate 및 InputTime과 같은 구성 요소의 날짜/시간 형식도 제어합니다.
:::
::

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Changelog 파일

:component-changelog
