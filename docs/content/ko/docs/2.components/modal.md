---
description: 메시지를 표시하거나 사용자 입력을 요청하는 데 사용할 수 있는 대화상자 창입니다.
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: 대화 상자
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## Usage

Modal의 기본 슬롯에 [Button](/docs/components/buttonxph04x 또는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 모달이 열려 있을 때 표시된 내용을 추가합니다.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

또한 `#header`{lang="ts-type"}, `#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 Modal 콘텐츠를 사용자 정의할 수 있습니다.

### Title 파일

`title` prop 을 사용하여 Modal 헤더의 제목을 설정합니다.

::component-code
---
prettier: true
props:
  title: 'Modal with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 설명

`description` prop을 사용하여 Modal 헤더에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Modal with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 닫기

`close` Prop을 사용하여 Modal 헤더에 표시되는 닫기 버튼(`false` 값)을 사용자 정의하거나 숨깁니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Modal with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
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
  title: 'Modal with close button'
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
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

### Transition

`transition` 소품을 사용하여 모달의 애니메이션 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  transition: false
  title: 'Modal without transition'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Overlay

`overlay` 소품을 사용하여 모달에 오버레이가 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  overlay: false
  title: 'Modal without overlay'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modal 모델

`modal` 소품을 사용하여 Modal이 외부 내용과의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`modal`가 `false`로 설정되면 오버레이가 자동으로 비활성화되고 외부 내용이 대화형으로 전환됩니다.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  modal: false
  title: 'Modal interactive'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 사용할 수 없음

`dismissible` 소품을 사용하여 모달 바깥쪽을 클릭하거나 escape 키를 누를 때 모달이 허용되지 않도록 제어합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 닫으려고 할 때 내보내집니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Modal의 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  dismissible: false
  modal: true
  title: 'Modal non-dismissible'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Scrollable: badge{label="4.2+" class="align-text-top"} 스크롤 가능

`scrollable` Prop을 사용하여 Modal의 내용을 오버레이 내에서 스크롤할 수 있도록 합니다.

::warning
스크롤을 위해 오버레이가 필요하기 때문에 `modal: false`는 호환되지 않으며 `overlay: false`는 배경만 제거합니다.
::

::component-code
---
prettier: true
ignore:
  - title
props:
  scrollable: true
  overlay: true
  title: 'Modal scrollable'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-full" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
[known issue](https://reka-ui.com/docs/components/dialog#scrollable-overlay) scrollbar를 클릭하면 일부 운영 체제에서 대화 상자가 의도하지 않게 종료 될 수 있습니다.
::

### Fullscreen 화면

`fullscreen` prop을 사용하여 Modal 전체 화면을 만듭니다.

::component-code
---
prettier: true
ignore:
  - title
  - fullscreen
props:
  fullscreen: true
  title: 'Modal fullscreen'
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

### Unmount: badge{label="4.10+" class="align-text-top"} 마운트 해제

`unmount-on-hide` 소품을 사용하여 모달이 닫혀 있을 때 마운트 해제되지 않도록 합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  unmountOnHide: false
  title: 'Modal'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
DOM을 검사하여 Modal이 닫혀 있는 동안에도 렌더링되는 내용을 볼 수 있습니다.
::

::tip
`portal` Prop이 `false`로 설정되면 내용도 서버에서 렌더링됩니다. SSR 중에 페이지 로드 시 플래시 없이 열린 모드를 렌더링하거나 SEO에 해당 콘텐츠를 노출하는 데 유용합니다.
::

## examples 예제

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 오픈 상태를 제어할 수 있습니다.

::component-example
---
name: 'modal-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 :kbd{value="O"}를 눌러 모달을 전환할 수 있습니다.
::

::tip
이렇게 하면 트리거를 모달 외부로 이동하거나 완전히 제거할 수 있습니다.
::

### Programmatic 사용법

[`useOverlay`](/docs/composables/use-overlay) 컴포지블을 사용하여 모드를 프로그래밍 방식으로 열 수 있습니다.

::warning
앱을 [`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue) 구성 요소를 사용하는 [`App`](](/docs/components/app) 구성 요소로 래핑해야 합니다.
::

먼저 프로그래밍 방식으로 열 모달 컴포넌트를 만듭니다.

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
모달이 닫히거나 해제되면 `close` 이벤트가 발생합니다. `close` 이벤트를 통해 데이터를 내보낼 수 있으며 해당 데이터는 `open()`의 확인된 값이 됩니다. promise가 해결하려면 이벤트를 내보내야 합니다.
::

그런 다음 앱에서 사용하십시오.Use it in your app:

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
`emit('close')`를 방출하여 모달 구성 요소 내에서 모달을 닫을 수 있습니다.
::

### nested modals 예제

당신은 서로 안에 modals를 중첩 할 수 있습니다.

::component-example
---
name: 'modal-nested-example'
---
::

### 바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 Modal 본체 뒤에 내용을 추가합니다.

::component-example
---
name: 'modal-footer-slot-example'
---
::

xPH323xWith 명령 팔레트

Modal 콘텐츠 내에서 [CommandPalette](/docs/components/command-palette) 구성 요소를 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
이 예에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Modal이 열릴 때만 데이터를 가져옵니다.
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
