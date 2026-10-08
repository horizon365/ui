---
title: defineLocale 정의로캘
description: '앱에 대한 사용자 지정 로케일을 만드는 유틸리티입니다.A utility to create a custom locale for your app.'
---

##  사용

자동으로 가져온 `defineLocale` 유틸리티를 사용하여 사용자 고유의 번역을 사용하여 사용자 지정 로케일을 만듭니다.

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'My custom locale',
  code: 'en',
  dir: 'ltr',
  messages: {
    // implement pairs
  }
})
</script>

<template>
  <UApp :locale="locale">
    <NuxtPage />
  </UApp>
</template>
```

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/i18n/nuxt"}
인터내셔널리제이션에 대한 자세한 내용은 **i18n integration** 문서를 참조하십시오.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/i18n/vue"}
인터내셔널리제이션에 대한 자세한 내용은 **i18n integration** 문서를 참조하십시오.
:::
::

##  API

`defineLocale<M>(options: DefineLocaleOptions<M>): Locale<M>`{lang="ts-type"}

제공된 옵션을 사용하여 새 로케일 객체를 만듭니다.

####  파라미터

::field-group

  ::field{name="options" type="DefineLocaleOptions<M>" required}
  다음 속성을 가진 로케일 구성 객체:

    ::collapsible

      ::field-group

        ::field{name="name" type="string" required}
        로케일의 표시 이름(예: `'English'`, `'Français'`)입니다.
        ::

        ::field{name="code" type="string" required}
        로케일의 ISO 코드(예: `'en'`, `'fr'`, `'de-AT'`).
        ::

        ::field{name="dir" type="'ltr' | 'rtl'"}
        로케일에 대한 텍스트 방향입니다. 기본값은 `'ltr'`입니다.
        ::

        ::field{name="messages" type="M" required}
        변환 메시지 객체입니다. 형식 안전을 위해 `Messages` 형식의 `@nuxt/ui`를 사용합니다.
        ::
      ::
    ::
  ::
::

**반환: **A`Locale<M>` 개체는 [App](/docs/components/app) 구성 요소의 `locale`prop에 전달할 수 있습니다.

##  예

다음은 사용자 지정 로케일을 만드는 전체 예제입니다.

```vue
<script setup lang="ts">
import type { Messages } from '@nuxt/ui'

const locale = defineLocale<Messages>({
  name: 'Español',
  code: 'es',
  dir: 'ltr',
  messages: {
    alert: {
      close: 'Cerrar'
    },
    modal: {
      close: 'Cerrar'
    },
    commandPalette: {
      back: 'Atrás',
      close: 'Cerrar',
      noData: 'Sin datos',
      noMatch: 'Sin resultados',
      placeholder: 'Escribe un comando o busca…'
    }
    // ... other component messages
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
메시지 개체를 구조화하는 방법에 대한 참조를 위해 [기본 제공 로케일](https://github.com/nuxt/ui/tree/v4/src/runtime/locale)를 확인할 수 있습니다.
::
