---
title: DropdownMenu (드롭 다운 메뉴)
description: 요소를 클릭할 때 동작을 표시하는 메뉴입니다.
category: overlay
keywords:
  - menu
  - context menu
  - actions
links:
  - label: DropdownMenu (드롭 다운 메뉴)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dropdown-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DropdownMenu.vue
---

## Usage

DropdownMenu의 기본 슬롯에 [Button](/docs/components/button) 또는 다른 구성 요소를 사용합니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
        filter:
          placeholder: 'Search members...'
        children:
          - - label: benjamincanac
              avatar:
                src: 'https://github.com/benjamincanac.png'
                loading: lazy
            - label: HugoRCD
              avatar:
                src: 'https://github.com/HugoRCD.png'
                loading: lazy
            - label: atinux
              avatar:
                src: 'https://github.com/atinux.png'
                loading: lazy
            - label: romhml
              avatar:
                src: 'https://github.com/romhml.png'
                loading: lazy
            - label: sandros94
              avatar:
                src: 'https://github.com/sandros94.png'
                loading: lazy
            - label: J-Michalek
              avatar:
                src: 'https://github.com/J-Michalek.png'
                loading: lazy
            - label: hywax
              avatar:
                src: 'https://github.com/hywax.png'
                loading: lazy
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        color: error
        kbds:
          - shift
          - meta
          - q
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Items 파일

`items` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"} - xph119{lang="ts-type"}
- `kbds?: string[] | KbdProps[]`{lang="ts-type"}
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"} (- `disabled?: boolean`{lang="ts-type"})
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](#with-checkbox-items)
- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"} (- `children?: DropdownMenuItem[] | DropdownMenuItem[][]`{lang="ts-type"})
- [`filter?: boolean | InputProps`{lang="ts-type"}](#with-filter-items)
- `filterFields?: string[]`{lang="ts-type"} (- `filterFields?: string[]`{lang="ts-type"})의 발음을 `filterFields?: string[]`{lang="ts-type"} [en]
- `ignoreFilter?: boolean`{lang="ts-type"} (- `ignoreFilter?: boolean`{lang="ts-type"})
- `class?: any`{lang="ts-type"} - {lang="ts-type"} (- `class?: any`{lang="ts-type"}) / `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소의 모든 속성을 `to`, `target` 등으로 전달할 수 있습니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[][]
props:
  items:
    - - label: Benjamin
        avatar:
          src: 'https://github.com/benjamincanac.png'
          loading: lazy
        type: label
    - - label: Profile
        icon: i-lucide-user
      - label: Billing
        icon: i-lucide-credit-card
      - label: Settings
        icon: i-lucide-cog
        kbds:
          - ','
      - label: Keyboard shortcuts
        icon: i-lucide-monitor
    - - label: Team
        icon: i-lucide-users
      - label: Invite users
        icon: i-lucide-user-plus
        children:
          - - label: Email
              icon: i-lucide-mail
            - label: Message
              icon: i-lucide-message-square
          - - label: More
              icon: i-lucide-circle-plus
              children:
                - label: Import from Slack
                  icon: i-simple-icons-slack
                  to: 'https://slack.com'
                  target: _blank
                - label: Import from Trello
                  icon: i-simple-icons-trello
                - label: Import from Asana
                  icon: i-simple-icons-asana
      - label: New team
        icon: i-lucide-plus
        kbds:
          - meta
          - n
    - - label: GitHub
        icon: i-simple-icons-github
        to: 'https://github.com/nuxt/ui'
        target: _blank
      - label: Support
        icon: i-lucide-life-buoy
        to: '/docs/components/dropdown-menu'
      - label: API
        icon: i-lucide-cloud
        disabled: true
    - - label: Logout
        icon: i-lucide-log-out
        kbds:
          - shift
          - meta
          - q
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{icon="i-lucide-menu" color="neutral" variant="outline"}
::

::note
배열 배열을 `items` prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
각 항목은 `items` prop과 동일한 속성을 가진 객체의 `children` 배열을 취하여 `open`, `defaultOpen` 및 `content` 속성을 사용하여 제어 할 수있는 중첩 메뉴를 만들 수 있습니다.
::

### Content

`content` prop을 사용하여 DropdownMenu 콘텐츠가 어떻게 렌더링되는지 제어합니다(예를 들어 `align` 또는 `side`).

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
items:
  content.align:
    - start
    - center
    - end
  content.side:
    - right
    - left
    - top
    - bottom
props:
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
    side: bottom
    sideOffset: 8
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### Filter : badge{label="4.6+" class="align-text-top"}

`filter` 소품을 사용하여 DropdownMenu 내부에 필터 입력을 표시합니다. 기본값은 `false`입니다.

::note{to="#with-ignore-filter"}
`ignore-filter` prop을 사용하여 내부 검색을 비활성화하고 자신만의 검색 논리를 사용합니다.
::

::note{to="#with-filter-fields"}
`filter-fields` prop을 사용하여 필터링할 필드를 지정합니다. 기본적으로 `labelKey` prop을 사용합니다.
::

[Input](/docs/components/input) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - filter.icon
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  filter:
    icon: i-lucide-search
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
    - label: Team
      icon: i-lucide-users
    - label: Invite users
      icon: i-lucide-user-plus
    - label: New team
      icon: i-lucide-plus
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::tip{to="#with-filter-items"}
`children`가 있는 항목에 `filter` 필드를 사용하여 특정 하위 메뉴에서 필터를 활성화할 수도 있습니다.
::

### Arrow 화살표

`arrow` Prop을 사용하여 DropdownMenu에 화살표를 표시합니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - arrow
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  arrow: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 크기

`size` prop를 사용하여 DropdownMenu의 크기를 제어합니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - content.align
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  size: xl
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  content:
    align: start
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton size="xl" label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{size="xl" label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

::warning
`size` prop은 Button에 프록시되지 않으므로 직접 설정해야합니다.
::

::note
같은 크기를 사용하는 경우 DropdownMenu 항목이 Button과 완벽하게 정렬됩니다.
::

### Modal 모델

DropdownMenu가 외부 내용과의 상호 작용을 차단하는지 여부를 제어하려면 `modal` 소품을 사용합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  modal: false
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

### 비활성 화

`disabled` prop를 사용하여 DropdownMenu를 비활성화합니다.

::component-code
---
prettier: true
collapse: true
ignore:
  - items
  - ui.content
external:
  - items
externalTypes:
  - DropdownMenuItem[]
props:
  disabled: true
  items:
    - label: Profile
      icon: i-lucide-user
    - label: Billing
      icon: i-lucide-credit-card
    - label: Settings
      icon: i-lucide-cog
  ui:
    content: 'w-48'
slots:
  default: |

    <UButton label="Open" icon="i-lucide-menu" color="neutral" variant="outline" />
---

:u-button{label="열기 (Open)" icon="i-lucide-menu" color="neutral" variant="outline"}
::

## 예제

### With 확인란 항목

`type` 속성을 `checkbox`와 함께 사용하고 `checked`/`onUpdateChecked` 속성을 사용하여 항목의 체크 상태를 제어할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-checkbox-items-example'
---
::

::note
항목의 `checked` 상태에 대한 반응성을 보장하려면 `computed` 내부에 `items` 배열을 래핑하는 것이 좋습니다.
::

### 색상 항목 포함

`color` 속성을 사용하여 특정 항목을 색상으로 강조 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-color-items-example'
---
::

### 필터 항목 포함: badge{label="4.6+" class="align-text-top"}

`children`가 있는 항목에 `filter` 속성을 사용하여 하위 메뉴 내에 필터 입력을 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-items-example'
---
::

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 개방 상태를 제어할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 DropdownMenu를 토글할 수 있습니다.
::

### 사용자 정의 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자화합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"} - {lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"} (- {lang="ts-type"})

::component-example
---
collapse: true
name: 'dropdown-menu-custom-slot-example'
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의 할 수 있습니다.
::

### 항목에 스위치가 있습니다.

`slot` 속성을 `#{{ slot }}-trailing` 슬롯과 함께 사용하여 [Switch](/docs/components/switch)를 항목 내부에 렌더링할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-switch-items-example'
---
::

### ignore 필터 사용: badge{label="4.6+" class="align-text-top"}

`filter` Prop 또는 `filter` 필드를 `children` 포함 항목에 사용할 때, `ignore-filter` Prop을 `true`로 설정하여 내부 검색을 비활성화하고 자신의 검색 논리를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-ignore-filter-example'
---
::

::note
이 예에서는 [`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)를 사용하여 API 호출을 토론합니다. 검색은 `immediate: false`를 사용하여 지연되므로 메뉴가 열릴 때까지 요청이 수행되지 않습니다.
::

### 필터 필드가 있는 경우: badge{label="4.6+" class="align-text-top"}

`children`가 있는 항목에 `filter` Prop 또는 `filter` 필드를 사용할 때 필터링할 필드 배열을 사용하여 `filter-fields` Prop을 설정할 수 있습니다. 기본값은 `[labelKey]`입니다.

::component-example
---
collapse: true
name: 'dropdown-menu-filter-fields-example'
---
::

### With 트리거 콘텐츠 너비

`ui.content` 슬롯에 `w-(--reka-dropdown-menu-trigger-width)` 클래스를 추가하여 내용을 해당 버튼의 전체 너비로 확장할 수 있습니다.

::component-example
---
collapse: true
name: 'dropdown-menu-content-width-example'
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    dropdownMenu: {
      slots: {
        content: 'w-(--reka-dropdown-menu-trigger-width)'
      }
    }
  }
})
```
::

### Extract 바로 가기

[extractShortcut](/docs/composables/extract-shortcuts) 유틸리티를 사용하여 `kbds` 등록 정보를 사용하여 메뉴 항목에서 바로 가기를 자동으로 정의합니다. 이 유틸리티는 재귀적으로 바로 가기를 추출하고 [defineShortcuts](/docs/composables/define-shortcuts)와 호환되는 객체를 반환합니다.

```vue
<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Invite users',
  icon: 'i-lucide-user-plus',
  children: [{
    label: 'Invite by email',
    icon: 'i-lucide-send-horizontal',
    kbds: ['meta', 'e'],
    onSelect() {
      console.log('Invite by email clicked')
    }
  }, {
    label: 'Invite by link',
    icon: 'i-lucide-link',
    kbds: ['meta', 'i'],
    onSelect() {
      console.log('Invite by link clicked')
    }
  }]
}, {
  label: 'New team',
  icon: 'i-lucide-plus',
  kbds: ['meta', 'n'],
  onSelect() {
    console.log('New team clicked')
  }
}]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
이 예제에서 :kbd{value="meta"}:kbd{value="E" class="ms-px"}, :kbd{value="meta"}:kbd{value="I" class="ms-px"} 및 :kbd{value="meta"}:kbd{value="N" class="ms-px"}는 해당 항목에 대한 `select` 함수를 트리거합니다.
::

## API

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
