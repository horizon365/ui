---
description: '여러 가지 시각적 변형이 있는 축소 가능한 사이드바.'
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## Usage

사이드바 구성 요소는 페이지 내용을 푸시하는 독립형 고정 사이드바입니다. 데스크탑에서는 인라인으로 렌더링하고 축소할 수 있습니다. 모바일에서는 [Modal](/docs/components/modalxph04x, [Slideoverxph06x/docs/components/slideoverxph08x 또는 [Drawer](](]( 구성 요소를 엽니다.

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**: 이 구성 요소는 어디서나 드롭할 수 있는 간단한 독립형 사이드바입니다(채팅 패널, 설정, 탐색). 드래그 투 크기, 상태 지속성 및 [DashboardGroup](/docs/components/dashboard-group)와의 통합이 필요한 경우 [DashboardSidebar](를 대신 사용하십시오.
::

`header`, `default` 및 `footer` 슬롯을 사용하여 사이드바 내용을 사용자 정의합니다.`v-model:open` 지시어는 뷰포트를 인식합니다: 데스크톱에서는 확장/축소 상태를 제어하고 모바일에서는 메뉴를 제어합니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant

`variant` 소품을 사용하여 사이드바의 비주얼 스타일을 변경합니다. 기본값은 `sidebar`입니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### 축소 가능

`collapsible` 소품을 사용하여 사이드바의 축소 동작을 변경합니다. 기본값은 `offcanvas`입니다.

- `offcanvas`: 사이드바가 완전히 보이지 않습니다.
- `icon`: 사이드바가 아이콘만 너비로 축소됩니다.
- `none`: 사이드바가 접을 수 없습니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
슬롯 소품에서 `state`에 액세스하여 사이드바가 축소될 때 내용을 사용자 정의할 수 있습니다.
::

### 사이드

`side` 소품을 사용하여 사이드바의 측면을 변경합니다. 기본값은 `left`입니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Title 파일

`title` prop을 사용하여 사이드바 헤더의 제목을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### 설명

`description` prop을 사용하여 사이드바 헤더에 대한 설명을 설정합니다.

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Rail 드라이버

`rail` 소품을 사용하여 사이드바에 얇은 대화식 가장자리를 표시하여 클릭 시 축소된 상태를 토글합니다. 레일은 `collapsible`가 `none`가 아닌 경우에만 렌더링됩니다.

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### close 닫기

`close` 소품을 사용하여 사이드바 헤더에 닫기 단추를 표시합니다. 닫기 단추는 `collapsible`가 `none`가 아닌 경우에만 렌더링됩니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Close 아이콘

`close-icon` 소품을 사용하여 닫기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.close` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.close` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Mode 모드

`mode` 소품을 사용하여 모바일에서 사이드바 메뉴의 모드를 변경합니다. 기본값은 `slideover`입니다.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
당신은 사이드바의 메뉴를 사용자 정의하기 위해 `menu` 소품을 사용할 수 있습니다, 그것은 당신이 선택한 모드에 따라 적응합니다.
::

## examples 예제

### Control 오픈 상태

`open` prop 또는 `v-model:open` 지시어를 사용하여 열린 상태를 제어 할 수 있습니다.데스크톱에서는 확장 / 축소 상태를 제어하고 모바일에서는 시트 메뉴를 열거나 닫습니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 사이드바의 열기 상태를 토글할 수 있습니다:kbd{value="O"}.
::

### Persist 열기 상태

VueUse의 [`useLocalStorage`](https://vueuse.org/core/useLocalStorage/) 또는 ](https://nuxt.com/docs/4.x/api/composables/use-cookie) 대신 [)를 사용하여 페이지 재로드 시 사이드바 상태를 유지합니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
이전 예제와 유일한 차이점은 `ref(true)`를 `useLocalStorage('sidebar-open', true)`로 대체하는 것입니다.
::

### 사용자 지정 너비

사이드바 너비는 `--sidebar-width` CSS 변수(기본값은 `16rem`)로 제어됩니다. 축소된 아이콘 너비는 `--sidebar-width-icon`(기본값은 `4rem`)로 제어됩니다.

CSS에서 전역적으로 또는 `style` 속성을 사용하여 인스턴스별로 재정의합니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### with 헤더

사이드바를 [Header](/docs/components/header) 아래에 배치하려면 `ui` prop을 사용하여 `gap` 및 `container`를 사용자 정의합니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
`--ui-header-height` 변수는 기본적으로 `4rem`로 설정되어 있으며 헤더에서 사용됩니다. navbar에서 다른 높이를 사용하는 경우 조정합니다.
::

### With AI 채팅 사용

오른쪽의 사이드바를 사용하여 [ChatMessages](xph32x) 및 [ChatPrompt](xph36x)와 함께 AI 채팅 패널을 만듭니다.

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API 파일

### Props (### Props)

:component-props

### 슬롯

:component-slots

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
