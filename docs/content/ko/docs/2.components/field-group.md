---
title: 필드 그룹(FieldGroup)
description: 여러 단추와 같은 요소를 함께 그룹화합니다.
category: element
keywords:
  - segmented control
  - toggle group
  - button group
  - input group
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FieldGroup.vue
---

## Usage

필드 그룹 내에서 여러 [Button](/docs/components/buttonxph04x를 래핑하여 그룹화합니다.

::component-code
---
prettier: true
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="버튼 (Button)"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### Size

`size` Prop을 사용하여 모든 버튼의 크기를 변경합니다.

::component-code
---
prettier: true
props:
  size: xl
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Button" />
    <UButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
---
:u-button{color="neutral" variant="subtle" label="단추"}
:u-button{color="neutral" variant="outline" icon="i-lucide-chevron-down"}
::

### 방향 지정

`orientation` 소품을 사용하여 버튼의 방향을 변경합니다. 기본값은 `horizontal`입니다.

::component-code
---
prettier: true
props:
  orientation: vertical
slots:
  default: |

    <UButton color="neutral" variant="subtle" label="Submit" />
    <UButton color="neutral" variant="outline" label="Cancel" />
---
:u-button{color="neutral" variant="subtle" label="제출 하기"}
:u-button{color="neutral" variant="outline" label="취소 (Cancel)"}
::

## 예제

### 입력 포함

[Input](/docs/components/input), [InputMenu](/docs/components/input-menu), [Select](/docs/components/select) [SelectMenu](/docs/components/select-menu 및 xxx 그룹 내에서 구성 요소를 사용할 수 있습니다.

::component-code
---
prettier: true
slots:
  default: |

    <UInput color="neutral" variant="outline" placeholder="Enter token" />

    <UButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
---
:u-input{color="neutral" variant="outline" placeholder="Enter token"}
:u-button{color="neutral" variant="subtle" icon="i-lucide-clipboard"}
::

### 툴팁 포함

필드 그룹 내에서 [Tooltip](/docs/components/tooltip)를 사용할 수 있습니다.

:component-example{name="field-group-tooltip-example"}

### With 드롭다운 메뉴

필드 그룹 내에서 [DropdownMenu](/docs/components/dropdown-menu)를 사용할 수 있습니다.

:component-example{name="field-group-dropdown-example"}

### With 배지

필드 그룹 내에서 [Badge](/docs/components/badge)를 사용할 수 있습니다.

:component-example{name="field-group-badge-example"}

## API

### Props (### Props)

:component-props

### Slots

:component-slots

## Theme 주제

:component-theme

## 변경 로그

:component-changelog
