---
description: 숫자 값 또는 상태를 나타내는 표시기.
category: element
keywords:
  - notification dot
  - status dot
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Chip.vue
---

## Usage

LED를 표시하려면 칩으로 구성요소를 감싸십시오.

::component-code
---
prettier: true
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Color

`color` Prop을 사용하여 칩의 색상을 변경합니다.

::component-code
---
prettier: true
props:
  color: neutral
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Size 크기

`size` prop를 사용하여 칩의 크기를 변경합니다.

::component-code
---
prettier: true
props:
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Text 텍스트

`text` prop을 사용하여 Chip의 텍스트를 설정합니다.

::component-code
---
prettier: true
props:
  text: 5
  size: 3xl
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### 위치 위치

`position` prop을 사용하여 칩의 위치를 변경합니다.

::component-code
---
prettier: true
props:
  position: 'bottom-left'
slots:
  default: |

    <UButton icon="i-lucide-mail" color="neutral" variant="subtle" />
---
:u-button{icon="i-lucide-mail" color="neutral" variant="subtle"}
::

### Inset (### Inset)

`inset` 소품을 사용하여 구성요소 내부에 Chip을 표시합니다. 이 기능은 둥근 구성요소를 처리할 때 유용합니다.

::component-code
---
prettier: true
props:
  inset: true
slots:
  default: |

    <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
---
:u-avatar{src="https://github.com/benjamincanac.png" loading="lazy"}
::

### 독립 형

`standalone` Prop을 `inset` Prop과 함께 사용하여 Chip을 인라인으로 표시합니다.

::component-code
---
props:
  standalone: true
  inset: true
---
::

::note
이 방법은 [`CommandPalette`](/docs/components/command-palette), [](/docs/components/input-menu), [](/docs/components/select) 또는 [`SelectMenu``SelectMenu`)에서 사용됩니다.
::

## 예

### Control 표시

`show` prop을 사용하여 칩의 가시성을 제어할 수 있습니다.

:component-example{name="chip-show-example"}

::note
이 예제에서 Chip은 상태별로 색상을 가지며 상태가 `offline`가 아닌 경우에 표시됩니다.
::

## API

### Props 코드 코드

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme (## Theme)

:component-theme

## 변경 로그

:component-changelog
