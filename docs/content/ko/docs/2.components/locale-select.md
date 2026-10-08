---
title: 지역 선택
description: '로케일 간에 전환하려면 선택합니다.Select to switch between locales.'
category: i18n
links:
  - label: 선택 메뉴
    to: /docs/components/select-menu
    icon: i-simple-icons-nuxtdotjs
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/locale/LocaleSelect.vue
---

##  사용

LocaleSelect 구성 요소는 [SelectMenu](/docs/components/select-menu) 구성 요소를 확장하므로 `color`, `variant`, `size` 등의 속성을 전달할 수 있습니다.

::framework-only
#nuxt #nuxt
::note{to="/docs/getting-started/integrations/i18n/nuxt"}
이 구성 요소는 **i18n** 시스템과 함께 사용하기 위한 것입니다. 자세한 내용은 가이드를 참조하십시오.
::

#vue #vue
::note{to="/docs/getting-started/integrations/i18n/vue"}
이 구성 요소는 **i18n** 시스템과 함께 사용되도록 설계되었습니다. 자세한 내용은 가이드를 참조하십시오.
::

::

::warning
플래그는 유니코드 문자를 사용하여 표시됩니다. 이렇게 하면 다른 표시가 발생할 수 있습니다. 예를 들어, Windows의 Microsoft Edge는 OS 글꼴과 함께 제공되는 플래그 아이콘이 없으므로 ISO 3166-1 알파-2 코드를 대신 표시합니다.
::

###  로켈 레스

`locales`prop을 `@nuxt/ui/locale`의 로케일 배열과 함께 사용하십시오.

::component-example
---
이름: 'locale-select-example'
---
::

응용 프로그램에서 필요한 로케일만 전달할 수 있습니다.You can pass only the locales you need in your application:

```vue
<script setup lang="ts">
import { en, es, fr } from '@nuxt/ui/locale'

const locale = ref('en')
</script>

<template>
  <ULocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### 동적 로케일

::framework-only
#nuxt 코드
::div
Nuxt i18n과 함께 사용할 수 있습니다.

```vue
<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

#vue #vue
::div
Vue i18n을 사용할 수 있습니다.

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <ULocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

::

::

##  API

### Props 이미지

:컴포넌트 - 소품

##  Changelog

: component-changelog{prefix="locale"}
