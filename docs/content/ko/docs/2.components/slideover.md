---
description: 화면의 어느 쪽에서나 슬라이드 인하는 대화 상자입니다.
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: 대화 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## Usage

Slideover의 기본 슬롯에 [Button](/docs/components/button) 또는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 Slideover가 열릴 때 표시되는 내용을 추가합니다.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

또한 `#header`{lang="ts-type"}, `#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 Slideover 콘텐츠를 사용자 정의할 수 있습니다.

### Title 파일

`title` prop을 사용하여 Slideover의 헤더 제목을 설정합니다.

::component-code
---
prettier: true
props:
  title: 'Slideover with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 설명

`description` prop을 사용하여 Slideover 헤더에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Close 닫기

`close` Prop을 사용하여 Slideover 헤더에 표시되는 닫기 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Slideover with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
`#content` 슬롯이 헤더의 일부로 사용되는 경우에는 닫기 버튼이 표시되지 않습니다.
::

### 닫기 아이콘

`close-icon` 소품을 사용하여 닫기 단추 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
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

### Side 사이드

`side` 소품을 사용하여 Slideover가 에서 슬라이드로 들어갈 화면의 측면을 설정합니다. 기본값은 `right`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'left'
  title: 'Slideover with side'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full min-h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### Inset: badge{label="4.3+" class="align-text-top"} 파일

`inset` Prop을 사용하여 가장자리에서 Slideover를 삽입합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  side: 'right'
  inset: true
  title: 'Slideover with inset'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="min-w-96 min-h-96 size-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### Transition 변환

`transition` 소품을 사용하여 Slideover의 애니메이션 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Slideover without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Overlay 파일

`overlay` 소품을 사용하여 Slideover에 오버레이가 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Slideover without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modal 모델

Slideover가 외부 내용과의 상호 작용을 차단할지 여부를 제어하려면 `modal` 소품을 사용합니다. 기본값은 `true`입니다.

::note
`modal`를 `false`로 설정하면 오버레이가 자동으로 비활성화되고 외부 내용은 대화형이 됩니다.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Slideover interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 사용 안 함

`dismissible` Prop을 사용하여 Slideover의 바깥쪽을 클릭하거나 Esc 키를 누를 때 Slideover가 허용되지 않는지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 종료하려고 할 때 내보내집니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Slideover의 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Slideover non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Unmount: badge{label="4.10+" class="align-text-top"} 마운트 해제: badge{label="4.10+" class="align-text-top"}

`unmount-on-hide` Prop을 사용하여 Slideover가 닫힐 때 콘텐츠가 마운트 해제되지 않도록 합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Slideover'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
DOM을 검사하여 Slideover가 닫혀 있는 동안에도 렌더링되는 내용을 볼 수 있습니다.You can inspect the DOM to see the Slideover's content being rendered even while it is closed.
::

::tip
`portal` Prop이 `false`로 설정되어 있으면 내용도 서버에 렌더링됩니다. SSR 중에 페이지 로드 시 플래시 없이 열린 Slideover를 렌더링하거나 SEO에 해당 콘텐츠를 노출하는 데 유용합니다.
::

## examples 예제

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 오픈 상태를 제어할 수 있습니다.

::component-example
---
name: 'slideover-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 Slideover를 토글할 수 있습니다.
::

::tip
이렇게 하면 트리거를 Slideover 밖으로 이동하거나 완전히 제거할 수 있습니다.This lets you move the trigger outside of the Slideover or remove it entirely.
::

### Programmatic 사용법

[`useOverlay`](/docs/composables/use-overlay) 컴포지션을 사용하여 프로그래밍 방식으로 Slideover를 열 수 있습니다.

::warning
앱을 [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) 구성 요소를 사용하는 [`App`](/docs/components/app) 구성 요소로 래핑해야 합니다.
::

먼저, 프로그래밍 방식으로 열 슬라이드오버 컴포넌트를 생성합니다.

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
슬라이드오버가 닫히거나 해제되면 `close` 이벤트를 실행합니다. `close` 이벤트를 통해 데이터를 내보낼 수 있으며 해당 데이터는 `open()`의 확인된 값이 됩니다. promise가 해결하려면 이벤트를 내보내야 합니다.
::

그런 다음 앱에서 사용하십시오.Use it in your app:

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
`emit('close')`를 내보내면 슬라이드오버 컴포넌트 내에서 슬라이드오버를 닫을 수 있습니다.
::

### Nested 슬라이드오버

슬라이드오버를 서로 내부에 중첩할 수 있습니다.

::component-example
---
name: 'slideover-nested-example'
---
::

### With 바닥글 슬롯

`#footer` 슬롯을 사용하여 Slideover 본문 뒤에 내용을 추가합니다.

::component-example
---
name: 'slideover-footer-slot-example'
---
::

## API 파일

### Props 코드

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme (## 테마)

:component-theme

## 변경 로그

:component-changelog
