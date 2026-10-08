---
title: extendLocale 범위
description: '사용자 정의 번역을 사용하여 기존 로케일을 확장하는 유틸리티입니다.'
---

##  사용

자동으로 가져온 `extendLocale` 유틸리티를 사용하여 특정 등록 정보 또는 메시지를 재정의하여 기존 로케일을 사용자 정의합니다.

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: {
    commandPalette: {
      placeholder: 'Search a component...'
    }
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

이 기능은 다음을 수행할 때 유용합니다.This is useful when you want to:
-  언어의 지역별 변형을 만듭니다 (예: `en-AU` from `en`)
- 전체 로케일을 재정의하지 않고 특정 번역을 무시합니다.
-  애플리케이션에 맞게 구성요소 레이블 사용자 정의

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
인터내셔널리제이션에 대한 자세한 내용은 **i18n integration** 문서를 참조하십시오.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
인터내셔널리제이션에 대한 자세한 내용은 **i18n integration** 문서를 참조하십시오.
:::
::

##  API

`extendLocale<M>(locale: Locale<M>, options: Partial<DefineLocaleOptions<DeepPartial<M>>>): Locale<M>`{lang="ts-type"}

제공된 옵션을 사용하여 기존 로케일을 확장하여 메시지를 깊이 결합합니다.

####  매개변수

::field-group

  ::field{name="locale" type="Locale<M>" required}
  확장할 기본 로케일입니다. `@nuxt/ui/locale`에서 가져옵니다.
  ::

  ::field{name="options" type="Partial<DefineLocaleOptions<DeepPartial<M>>>" required}
  재정의할 속성:

    ::collapsible

      ::field-group

        ::field{name="name" type="string"}
        로케일의 표시 이름을 재지정합니다.
        ::

        ::field{name="code" type="string"}
        로케일의 ISO 코드를 재정의합니다(예: `'en-GB'`, `'fr-CA'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        로케일의 텍스트 방향을 재지정합니다.
        ::

        ::field{name="messages" type="DeepPartial<M>"}
        부분 메시지는 기본 로케일과 병합할 객체입니다. 무효화할 메시지만 지정합니다.
        ::
      ::
    ::
  ::
::

**반환: **병합된 속성이 있는 새 `Locale<M>`개체입니다.

##  예

다음은 호주 변형에 대한 영어 로케일을 확장하는 예입니다.

```vue
<script setup lang="ts">
import { en } from '@nuxt/ui/locale'

const locale = extendLocale(en, {
  name: 'English (Australia)',
  code: 'en-AU',
  messages: {
    colorMode: {
      dark: 'Dark',
      light: 'Light',
      system: 'System'
    },
    selectMenu: {
      search: 'Search…',
      noData: 'No results found',
      noMatch: 'No matching results'
    }
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

::note
`extendLocale` 유틸리티는 전체 병합을 사용하므로 덮어쓰려는 메시지만 지정하면 됩니다. 다른 모든 메시지는 기본 로케일에서 상속됩니다.
::
