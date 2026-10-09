---
title: CommandPalette 명령팔레트
description: 효율적인 퍼지 매칭을 위해 Fuse.js로 구동되는 전체 텍스트 검색이 포함된 명령 팔레트입니다.
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: 목록 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

## Usage

`v-model` 지시어를 사용하여 CommandPalette 값을 제어하거나 `default-value` prop 상태를 제어할 필요가 없을 때 초기값을 설정합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
`@update:model-value` 이벤트를 사용하여 선택한 항목을 청취할 수도 있습니다.
::

### Groups 그룹

CommandPalette 구성 요소는 사용자 입력에 따라 일치하는 명령을 그룹화하고 순위를 지정합니다. 효율적인 명령 검색을 위해 동적인 즉각적인 검색 결과를 제공합니다. `groups` prop을 객체 배열로 사용하여 다음 속성을 사용합니다.

- `id: string`{lang="ts-type"} / - {lang="ts-type"}
- `label?: string`{lang="ts-type"} (- `label?: string`{lang="ts-type"})
- `slot?: string`{lang="ts-type"} (- `slot?: string`{lang="ts-type"})
- `items?: CommandPaletteItem[]`{lang="ts-type"}의 발음을 - `items?: CommandPaletteItem[]`{lang="ts-type"}
- [`ignoreFilter?: boolean`{lang="ts-type"}](#with-ignore-filter)
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
- `highlightedIcon?: string`{lang="ts-type"}

::caution
각 그룹에 대해 `id`를 제공해야 합니다. 그렇지 않으면 그룹이 무시됩니다.
::

각 그룹에는 명령을 정의하는 `items` 객체 배열이 포함되어 있습니다. 각 항목에는 다음 등록 정보가 있을 수 있습니다.

- `prefix?: string`{lang="ts-type"} (- `prefix?: string`{lang="ts-type"})
- `label?: string`{lang="ts-type"}
- `suffix?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `chip?: ChipProps`{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"} (- `disabled?: boolean`{lang="ts-type"})
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `placeholder?: string`{lang="ts-type"}
- `children?: CommandPaletteItem[]`{lang="ts-type"} (- `children?: CommandPaletteItem[]`{lang="ts-type"})
- `onSelect?: (e: Event) => void`{lang="ts-type"} - {lang="ts-type"} (- `onSelect?: (e: Event) => void`{lang="ts-type"}) / - `onSelect?: (e: Event) => void`{lang="ts-type"}
- `class?: any`{lang="ts-type"} (- `class?: any`{lang="ts-type"}) / - `class?: any`{lang="ts-type"} / - `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"} (- `ui?: { item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelPrefix?: ClassNameValue, itemLabelBase?: ClassNameValue, itemLabelSuffix?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue, itemTrailingHighlightedIcon?: ClassNameValue, itemTrailingIcon?: ClassNameValue }`{lang="ts-type"})

[Link](/docs/components/link#props) 구성 요소에서 `to`, `target` 등의 속성을 전달할 수 있습니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  modelValue: {}
  autofocus: false
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::tip{to="#with-children-in-items"}
각 항목은 다음과 같은 속성을 가진 객체의 `children` 배열을 사용하여 하위 메뉴를 작성할 수 있습니다.
::

### Multiple 다중

`multiple` prop을 사용하여 여러 선택을 허용합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue: []
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::caution
배열을 `default-value` prop 또는 `v-model` 디렉티브로 전달해야 합니다.
::

### 자리 표시자

`placeholder` prop을 사용하여 자리 표시자 텍스트를 변경합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  placeholder: 'Search an app...'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Size : badge{label="4.4+" class="align-text-top"}

`size` prop을 사용하여 CommandPalette의 크기를 변경합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  size: 'xl'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Icon

`icon` 소품을 사용하여 입력 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-search`입니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  icon: 'i-lucide-box'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.search` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.search` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 선택한 아이콘

`selected-icon` 소품을 사용하여 선택한 항목 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - modelValue
  - multiple
  - class
external:
  - groups
  - modelValue
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  multiple: true
  autofocus: false
  modelValue:
    - label: 'Benjamin Canac'
      suffix: 'benjamincanac'
      avatar:
        src: 'https://github.com/benjamincanac.png'
        loading: lazy
  selectedIcon: 'i-lucide-circle-check'
  groups:
    - id: 'users'
      label: 'Users'
      items:
        - label: 'Benjamin Canac'
          suffix: 'benjamincanac'
          avatar:
            src: 'https://github.com/benjamincanac.png'
            loading: lazy
        - label: 'Hugo Richard'
          suffix: 'HugoRCD'
          avatar:
            src: 'https://github.com/HugoRCD.png'
            loading: lazy
        - label: 'Sébastien Chopin'
          suffix: 'atinux'
          avatar:
            src: 'https://github.com/atinux.png'
            loading: lazy
        - label: 'Romain Hamel'
          suffix: 'romhml'
          avatar:
            src: 'https://github.com/romhml.png'
            loading: lazy
        - label: 'Sandro Circi'
          suffix: 'sandros94'
          avatar:
            src: 'https://github.com/sandros94.png'
            loading: lazy
        - label: 'Jakub Michálek'
          suffix: 'J-Michalek'
          avatar:
            src: 'https://github.com/J-Michalek.png'
            loading: lazy
        - label: 'Alex'
          suffix: 'hywax'
          avatar:
            src: 'https://github.com/hywax.png'
            loading: lazy
        - label: 'Maxime Pauvert'
          suffix: 'maximepvrt'
          avatar:
            src: 'https://github.com/maximepvrt.png'
            loading: lazy
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.check` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.check` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 트레일 아이콘

항목에 자식이 있을 때 `trailing-icon` 소품을 사용하여 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-right`로 설정됩니다.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  trailingIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronRight` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronRight` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### loading 중

`loading` prop를 사용하여 CommandPalette에 로드 아이콘을 표시합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### loading 아이콘

`loading-icon` 소품을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  loading: true
  loadingIcon: 'i-lucide-loader'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.loading` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.loading` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Close (### 닫기)

`close` prop를 사용하여 [Button](/docs/components/button)를 표시하여 CommandPalette를 해제합니다.

::tip
닫기 버튼을 클릭하면 `update:open` 이벤트가 발생합니다.
::

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - close.color
  - close.variant
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

### Close 아이콘

`close-icon` 소품을 사용하여 닫기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - close
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  close: true
  closeIcon: 'i-lucide-arrow-right'
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 뒤로

`back` 소품을 사용하여 하위 메뉴로 이동할 때 표시되는 뒤로 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
collapse: true
prettier: true
hide:
  - autofocus
ignore:
  - back.color
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back:
    color: primary
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

### Back 아이콘

`back-icon` 소품을 사용하여 뒤로 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-arrow-left`입니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - class
  - groups
  - back
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  back: true
  backIcon: 'i-lucide-house'
  groups:
    - id: 'actions'
      items:
        - label: 'Share'
          icon: 'i-lucide-share'
          children:
            - label: 'Email'
              icon: 'i-lucide-mail'
            - label: 'Copy'
              icon: 'i-lucide-copy'
            - label: 'Link'
              icon: 'i-lucide-link'
  class: 'flex-1'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.arrowLeft` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.arrowLeft` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Disabled 사용 안 함

`disabled` prop를 사용하여 CommandPalette를 비활성화합니다.

::component-code
---
collapse: true
hide:
  - autofocus
ignore:
  - groups
  - class
external:
  - groups
externalTypes:
  - CommandPaletteGroup[]
class: '!p-0'
props:
  autofocus: false
  disabled: true
  groups:
    - id: 'apps'
      items:
        - label: 'Calendar'
          icon: 'i-lucide-calendar'
        - label: 'Music'
          icon: 'i-lucide-music'
        - label: 'Maps'
          icon: 'i-lucide-map'
  class: 'flex-1'
---
::

## examples 예제

### Control 선택된 항목

`default-value` prop 또는 `v-model` 지시문을 사용하거나, 각 항목에 `onSelect` 필드를 사용하거나, `@update:model-value` 이벤트를 사용하여 선택된 항목을 제어할 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-select-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip
`value-key` prop을 사용하여 객체 자체가 아닌 값으로 사용할 항목의 필드를 선택합니다. `by` prop을 사용하여 참조가 아닌 필드로 객체를 비교합니다.
::

### Control 검색 용어

`v-model:search-term` 지시문을 사용하여 검색 용어를 제어합니다.

::component-example
---
collapse: true
name: 'command-palette-search-term-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
이 예제에서는 `@update:model-value` 이벤트를 사용하여 항목을 선택할 때 검색 용어를 재설정합니다.
::

### 항목에 자식 포함

항목에서 `children` 등록 정보를 사용하여 계층 메뉴를 생성할 수 있습니다. 항목에 1차 하위 구성 요소가 있으면 자동으로 갈매기 모양 아이콘이 표시되고 하위 메뉴로 이동할 수 있습니다.

::component-example
---
collapse: true
prettier: true
name: 'command-palette-items-children-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
하위 메뉴로 이동하는 경우:
- 검색 용어가 재설정됨
- A 뒤로 버튼이 입력에 나타납니다.
-  :kbd{value="backspace"} 키를 눌러 이전 그룹으로 돌아갈 수 있습니다
::

### 가져온 항목 포함

API에서 항목을 가져와서 CommandPalette에서 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-fetch-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
이 예에서는 `useLazyFetch`와 `server: false`를 사용하여 초기 렌더링을 차단하지 않고 클라이언트에서 데이터를 검색합니다. 로드 상태에서는 `pending` 및 `idle` 상태를 모두 확인하여 가져오기 전과 도중에 로드 표시기를 표시합니다.
::

### Ignore 필터 사용

그룹에서 `ignoreFilter` 필드를 `true`로 설정하여 내부 검색을 비활성화하고 사용자 고유의 검색 논리를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-ignore-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 디버깅합니다. 로드 상태는 `pending` 및 `idle` 상태를 모두 확인하여 검색 전과 도중에 로드 표시기를 표시합니다.
::

### Post-filtered 항목 포함

검색이 수행된 후 그룹의 `postFilter` 필드를 사용하여 항목을 필터링할 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-post-filter-example'
class: '!p-0'
props:
  autofocus: false
---
::

::note
입력을 시작하여 상위 레벨의 항목이 표시되는지 확인합니다.
::

### 사용자 정의 퓨즈 검색 기능

`fuse` prop을 사용하여 [useFuse](https://vueuse.org/integrations/useFuse)의 옵션을 무시할 수 있으며, 기본값은 다음과 같습니다.

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
`fuseOptions`는 [Fuse.js](xph87x)의 옵션이며, `resultLimit`는 반환할 최대 결과 수이며, `matchAllWhenSearchEmpty`는 검색 용어가 비어 있을 때 모든 항목을 일치시키는 부울입니다.
::

예를 들어, `{ fuseOptions: { includeMatches: true } }`{lang="ts-type"}를 설정하여 항목에서 검색 용어를 강조 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-fuse-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 가상화 지원: badge{label="4.1+" class="align-text-top"}

`virtualize` prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이있는 개체로 가상화를 활성화합니다.

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
설정하면 Reka UI의 제한으로 인해 모든 그룹이 단일 리스트로 병합됩니다.
::

::component-example
---
collapse: true
name: 'command-palette-virtualize-example'
class: '!p-0'
props:
  autofocus: false
---
::

###  Popover 내부

[Popover](/docs/components/popover)의 콘텐츠에서 CommandPalette 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
props:
  autofocus: false
---
::

### within a modal 모드 내에서

[Modal](/docs/components/modal)의 콘텐츠 내에서 CommandPalette 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
props:
  autofocus: false
---
::

::note
이 예에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Modal이 열릴 때만 데이터를 가져옵니다.
::

### within a drawer 드라이버 안에서

[Drawer](/docs/components/drawer)의 콘텐츠 내에서 CommandPalette 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
props:
  autofocus: false
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Drawer가 열릴 때만 데이터를 가져옵니다.
::

### Listen 열린 상태

`close` Prop을 사용할 때 버튼을 클릭하면 `update:open` 이벤트를 들을 수 있습니다.

::component-example
---
collapse: true
name: 'command-palette-open-example'
props:
  autofocus: false
---
::

::note
이 기능은 예를 들어 [`Modal`](/docs/components/modal) 내부에서 CommandPalette를 사용할 때 유용합니다.
::

### 바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 CommandPalette의 맨 아래에 키보드 바로 가기 도움말 또는 추가 작업과 같은 사용자 정의 컨텐츠를 추가합니다.

::component-example
---
collapse: true
name: 'command-palette-footer-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

### 사용자 정의 슬롯 포함

`slot` 속성을 사용하여 특정 항목 또는 그룹을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

- `#{{ group.slot }}`{lang="ts-type"}
- `#{{ group.slot }}-leading`{lang="ts-type"}
- `#{{ group.slot }}-label`{lang="ts-type"} (- `#{{ group.slot }}-label`{lang="ts-type"})
- `#{{ group.slot }}-trailing`{lang="ts-type"} (- xph93xxph94x)

::component-example
---
collapse: true
name: 'command-palette-custom-slot-example'
class: '!p-0'
props:
  autofocus: false
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
