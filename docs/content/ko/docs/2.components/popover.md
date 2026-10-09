---
description: 트리거 요소 주위에 부동하는 비모달 대화상자입니다.
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: 호버카드 (HoverCard)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: 포포포버 (Popover)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## Usage

Popover의 기본 슬롯에 [Button](/docs/components/buttonxph04x 또는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 Popover가 열려 있을 때 표시되는 내용을 추가합니다.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Mode 모드

`mode` 소품을 사용하여 Popover의 모드를 변경합니다. 기본값은 `click`입니다.

::tip
`hover` 모드에서는 `enable-touch` prop을 설정하여 사용자가 터치 장치에서 트리거를 탭하여 Popover를 토글하거나 탭할 트리거에 `click` 모드를 사용하도록 합니다.
::

::component-code
---
prettier: true
items:
  mode:
    - click
    - hover
props:
  mode: 'hover'
  enableTouch: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
`hover` 모드를 사용하는 경우 [](https://reka-ui.com/docs/components/popover) 대신 Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card) 구성 요소를 사용합니다.
::

### Delay

`hover` 모드를 사용할 때는 `open-delay` 및 `close-delay` 소품을 사용하여 Popover가 열리거나 닫히기 전의 지연 시간을 제어할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - mode
props:
  mode: 'hover'
  openDelay: 500
  closeDelay: 300
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Content 파일

`content` prop을 사용하여 popover 내용이 렌더링되는 방식을 제어합니다(예를 들어 `align` 또는 `side`).

::component-code
---
prettier: true
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
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Arrow 화살표

`arrow` Prop을 사용하여 Popover에 화살표를 표시합니다.

::component-code
---
prettier: true
ignore:
  - arrow
props:
  arrow: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal 모델

`modal` 소품을 사용하여 Popover가 외부 내용과의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `false`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 사용할 수 없음

`dismissible` 소품을 사용하여 Popover 외부를 클릭하거나 Esc 키를 누를 때 Popover가 허용되지 않도록 제어합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 종료하려고 할 때 발생합니다.
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## examples 예제

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
name: 'popover-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 Popover를 토글할 수 있습니다:kbd{value="O"}.
::

### With 명령어 팔레트

Popover의 콘텐츠에 [CommandPalette](/docs/components/command-palette) 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

###  다음 커서

[`reference`](https://reka-ui.com/docs/components/tooltip#trigger) 소품을 사용하여 포인터를 요소 위에 놓을 때 포인터를 따라 이동하도록 할 수 있습니다.

::component-example
---
name: 'popover-cursor-example'
---
::

### 앵커 슬롯 포함

`#anchor` 슬롯을 사용하여 Popover를 사용자 정의 요소에 맞게 배치할 수 있습니다.

::warning
이 슬롯은 `mode`가 `click`일 때만 작동합니다.
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

::note
Reka UI에서는 [`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props)에 대해 노출되지만 [`HoverCard`](https://reka-ui.com/docs/components/hover-card)에 대해서는 노출되지 않기 때문에 `mode`가 `click`로 설정된 경우에만 `close` 함수를 사용할 수 있습니다.
::

### Emits 파일

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
