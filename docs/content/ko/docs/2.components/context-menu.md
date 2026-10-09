---
title: ContextMenu (컨텍스트메뉴)
description: 요소를 마우스 오른쪽 버튼으로 클릭할 때 동작을 표시하는 메뉴입니다.
category: overlay
keywords:
  - right click menu
links:
  - label: ContextMenu (컨텍스트메뉴)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/context-menu
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ContextMenu.vue
---

## Usage

ContextMenu의 기본 슬롯에서 원하는 것을 사용하고 마우스 오른쪽 버튼을 클릭하여 메뉴를 표시합니다.

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Items 이미지

`items` prop을 다음과 같은 속성을 가진 오브젝트 배열로 사용합니다.

- `label?: string`{lang="ts-type"} (- `label?: string`{lang="ts-type"})
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"} (- `avatar?: AvatarProps`{lang="ts-type"})
- `kbds?: string[] | KbdProps[]`{lang="ts-type"} (- `kbds?: string[] | KbdProps[]`{lang="ts-type"})
- [`type?: "link" | "label" | "separator" | "checkbox"`{lang="ts-type"}](#with-checkbox-items)
- [`color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}](#with-color-items)
- [`checked?: boolean`{lang="ts-type"}](#with-checkbox-items)
- `disabled?: boolean`{lang="ts-type"} (- `disabled?: boolean`{lang="ts-type"})
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `onSelect?: (e: Event) => void`{lang="ts-type"} - {lang="ts-type"}
- [`onUpdateChecked?: (checked: boolean) => void`{lang="ts-type"}](xph 17 x)
- `children?: ContextMenuItem[] | ContextMenuItem[][]`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, label?: ClassNameValue, separator?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLabel?: ClassNameValue, itemLabelExternalIcon?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue, itemTrailingKbds?: ClassNameValue, itemTrailingKbdsSize?: ClassNameValue }`{lang="ts-type"}

[Link](/docs/components/link#props) 구성 요소에서 `to`, `target` 등의 모든 속성을 전달할 수 있습니다.

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
  - ContextMenuItem[][]
props:
  items:
    - - label: Appearance
        children:
          - label: System
            icon: i-lucide-monitor
          - label: Light
            icon: i-lucide-sun
          - label: Dark
            icon: i-lucide-moon
    - - label: Show Sidebar
        kbds:
          - meta
          - s
      - label: Show Toolbar
        kbds:
          - shift
          - meta
          - d
      - label: Collapse Pinned Tabs
        disabled: true
    - - label: Refresh the Page
      - label: Clear Cookies and Refresh
      - label: Clear Cache and Refresh
      - type: separator
      - label: Developer
        children:
          - - label: View Source
              kbds:
                - meta
                - shift
                - u
            - label: Developer Tools
              kbds:
                - option
                - meta
                - i
            - label: Inspect Elements
              kbds:
                - option
                - meta
                - c
          - - label: JavaScript Console
              kbds:
                - option
                - meta
                - j
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

::note
배열 배열을 `items` prop에 전달하여 개별 항목 그룹을 만들 수도 있습니다.
::

::tip
각 항목은 `items` prop과 동일한 속성을 가진 객체의 `children` 배열을 취하여 `open`, `defaultOpen` 및 `content` 속성을 사용하여 제어 할 수있는 중첩 메뉴를 만들 수 있습니다.
::

### Size

`size` prop을 사용하여 ContextMenu의 크기를 변경합니다.

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
  - ContextMenuItem[]
props:
  size: xl
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

### Modal 모델

`modal` Prop을 사용하여 ContextMenu가 외부 내용과의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

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
  - ContextMenuItem[]
props:
  modal: false
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::


### 비활성 화 됨

`disabled` prop 를 사용하여 ContextMenu 를 비활성화합니다.

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
  - ContextMenuItem[]
props:
  disabled: true
  items:
    - label: System
      icon: i-lucide-monitor
    - label: Light
      icon: i-lucide-sun
    - label: Dark
      icon: i-lucide-moon
  ui:
    content: 'w-48'
slots:
  default: |

    <div class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72">
      Right click here
    </div>
---

:div{class="flex items-center justify-center rounded-md border border-dashed border-accented text-sm aspect-video w-72"}[Right click here]
::

## examples 예제

### 체크박스 항목 포함

`type` 속성을 `checkbox`와 함께 사용하고 `checked`/`onUpdateChecked` 속성을 사용하여 항목의 체크 상태를 제어할 수 있습니다.

::component-example
---
collapse: true
name: 'context-menu-checkbox-items-example'
---
::

::note
항목의 `checked` 상태에 대 한 반응성을 보장 하려면 `computed` 내에서 `items` 배열을 래핑 하는 것이 좋습니다.
::

### With 색상 항목

`color` 속성을 사용하여 특정 항목을 색상으로 강조 표시할 수 있습니다.

::component-example
---
collapse: true
name: 'context-menu-color-items-example'
---
::

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
collapse: true
name: 'context-menu-custom-slot-example'
---
::

::tip{to="#slots"}
또한 `#item`, `#item-leading`, `#item-label` 및 `#item-trailing` 슬롯을 사용하여 모든 항목을 사용자 정의할 수 있습니다.
::

### 추출 바로 가기

[extractShortcut](/docs/composables/extract-shortcuts) 유틸리티를 사용하여 `kbds` 등록 정보를 사용하여 메뉴 항목에서 바로 가기를 자동으로 정의합니다. 이 유틸리티는 재귀적으로 바로 가기를 추출하고 [defineShortcut](/docs/composables/define-shortcuts)와 호환되는 객체를 반환합니다.

```vue
<script setup lang="ts">
const items = [
  [{
    label: 'Show Sidebar',
    kbds: ['meta', 'S'],
    onSelect() {
      console.log('Show Sidebar clicked')
    }
  }, {
    label: 'Show Toolbar',
    kbds: ['shift', 'meta', 'D'],
    onSelect() {
      console.log('Show Toolbar clicked')
    }
  }, {
    label: 'Collapse Pinned Tabs',
    disabled: true
  }], [{
    label: 'Refresh the Page'
  }, {
    label: 'Clear Cookies and Refresh'
  }, {
    label: 'Clear Cache and Refresh'
  }, {
    type: 'separator' as const
  }, {
    label: 'Developer',
    children: [[{
      label: 'View Source',
      kbds: ['option', 'meta', 'U'],
      onSelect() {
        console.log('View Source clicked')
      }
    }, {
      label: 'Developer Tools',
      kbds: ['option', 'meta', 'I'],
      onSelect() {
        console.log('Developer Tools clicked')
      }
    }], [{
      label: 'Inspect Elements',
      kbds: ['option', 'meta', 'C'],
      onSelect() {
        console.log('Inspect Elements clicked')
      }
    }], [{
      label: 'JavaScript Console',
      kbds: ['option', 'meta', 'J'],
      onSelect() {
        console.log('JavaScript Console clicked')
      }
    }]]
  }]
]

defineShortcuts(extractShortcuts(items))
</script>
```

::note
이 예제에서는 :kbd{value="meta"}:kbd{value="S" class="ms-px"}, :kbd{value="shift"}:kbd{value="meta" class="ms-px"}:kbd{value="D" class="ms-px"}, :kbd{value="option"}:kbd{value="meta" class="ms-px"}:kbd{value="U" class="ms-px"}, :kbd{value="option"}:kbd{value="option"}:kbdxph42x:kbd{value="meta" class="ms-px"}:kbd{value="U" class="ms-px"}:kbd{value="U" class="ms-px"}:kbd{value="option"}, :kbd{value="option"}:kbdxph42x:kbdxph42x:kbdxph4x:kbdxph4x:kbdxph4x:kbd{value="option"}:kbdxph4x:kbdxph4x:kbdxph4x:
::

## API 사용

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits 사용자

:component-emits

## 테마

:component-theme

## 변경 로그

:component-changelog
