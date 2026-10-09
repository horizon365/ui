---
description: 요소 위에 마우스를 놓을 때 정보를 나타내는 팝업입니다.
category: overlay
keywords:
  - hint
links:
  - label: 도구 설명
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## Usage

도구 설명의 기본 슬롯에 있는 [Button](xph03x) 또는 다른 구성 요소를 사용합니다.

::component-code
---
prettier: true
ignore:
  - text
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

::warning
Reka UI의 [`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider) 구성 요소를 사용하는 [`App`](/docs/components/app) 구성 요소로 앱을 감싸야 합니다.
::

::tip{to="/docs/components/app#props"}
`App` 구성 요소 `tooltip` prop을 확인하여 툴팁을 전역적으로 구성하는 방법을 확인할 수 있습니다.
::

### Text 파일

`text` 소품을 사용하여 툴팁의 내용을 설정합니다.

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

### Kbds

`kbds` Prop을 사용하여 도구 설명에서 [Kbd](/docs/components/kbd) 구성 요소를 렌더링합니다.

::component-code
---
prettier: true
ignore:
  - text
  - kbds
props:
  text: 'Open on GitHub'
  kbds:
    - meta
    - G
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

::tip
macOS에서는 `⌘`로 표시되는 `meta`와 같은 특수 키를 사용할 수 있으며 다른 플랫폼에서는 `Ctrl`로 표시됩니다.
::

### 지연

`delay-duration` 소품을 사용하여 도구 설명이 나타나기 전의 지연 시간을 변경합니다. 예를 들어, `0`로 설정하면 즉시 나타나도록 할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - text
props:
  delayDuration: 0
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

::tip
이 기능은 [`App`](/docs/components/app) 구성 요소의 `tooltip.delayDuration` 옵션을 통해 전역적으로 구성할 수 있습니다.
::

### Content 파일

`content` prop을 사용하여 도구 설명 내용이 어떻게 렌더링되는지 제어합니다(예: `align` 또는 `side`).

::tip
이 기능은 [`App`](/docs/components/app) 구성 요소의 `tooltip.content` 옵션을 통해 전역적으로 구성할 수 있습니다.
::

::component-code
---
prettier: true
ignore:
  - text
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
  content:
    align: center
    side: bottom
    sideOffset: 8
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

### Arrow 화살표

`arrow` 소품을 사용하여 툴팁에 화살표를 표시합니다.

::component-code
---
prettier: true
ignore:
  - text
  - arrow
props:
  arrow: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

### 비활성 화

`disabled` prop을 사용하여 도구 설명을 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - text
props:
  disabled: true
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}
::

## 예제

### Control 열기 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 오픈 상태를 제어할 수 있습니다.

::component-example
---
name: 'tooltip-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 툴팁을 토글할 수 있습니다.
::

### 다음 커서

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger) 소품을 사용하여 요소 위에 마우스를 놓을 때 도구 설명이 커서를 따라 이동하도록 할 수 있습니다.

::component-example
---
name: 'tooltip-cursor-example'
---
::

## API

### Props (### Props)

:component-props

### Slots 슬롯

:component-slots

### Emits

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
