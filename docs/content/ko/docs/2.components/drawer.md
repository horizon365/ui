---
description: 화면 안팎으로 부드럽게 미끄러지는 서랍
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: 서랍 서랍
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## Usage

서랍의 기본 슬롯에 있는 [Button](xph03x) 또는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 Drawer가 열려 있을 때 표시된 내용을 추가합니다.

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

또한 `#header`{lang="ts-type"}, `#body`{lang="ts-type"} 및 `#footer`{lang="ts-type"} 슬롯을 사용하여 서랍의 내용을 사용자 정의할 수 있습니다.

### Title 파일

`title` prop을 사용하여 Drawer의 헤더 제목을 설정합니다.

::component-code
---
prettier: true
props:
  title: 'Drawer with title'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 설명

`description` prop을 사용하여 Drawer의 헤더에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with description'
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Close : badge{label="4.10+" class="align-text-top"}

`close` prop을 사용하여 Drawer에 닫기 버튼을 표시합니다. 기본값은 `false`입니다.

[Button](/docs/components/button) 구성 요소의 모든 속성을 전달하여 사용자 정의할 수 있습니다.

::component-code
---
prettier: true
ignore:
  - title
  - close.color
  - close.variant
props:
  title: 'Drawer with close button'
  close:
    color: primary
    variant: outline
    class: 'rounded-full'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### 닫기 아이콘: badge{label="4.10+" class="align-text-top"}

`close-icon` 소품을 사용하여 닫기 버튼 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-x`입니다.

::component-code
---
prettier: true
ignore:
  - title
props:
  title: 'Drawer with close button'
  close: true
  closeIcon: 'i-lucide-arrow-right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  body: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#body
:placeholder{class="h-48"}
::

### Direction

`direction` Prop을 사용하여 Drawer의 방향을 제어합니다. 기본값은 `bottom`입니다.

::component-code
---
prettier: true
props:
  direction: 'right'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### Inset 이미지

`inset` Prop을 사용하여 Drawer를 가장자리에서 삽입합니다.

::component-code
---
prettier: true
props:
  direction: 'right'
  inset: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="min-w-96 min-h-96 size-full m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="min-w-96 min-h-96 size-full m-4"}
::

### 핸들

`handle` 소품을 사용하여 Drawer에 핸들이 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
props:
  handle: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Handle 전용

`handle-only` Prop을 사용하여 Drawer가 핸들로만 드래그되도록 합니다.

::component-code
---
prettier: true
props:
  handleOnly: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 오버레이

`overlay` Prop을 사용하여 Drawer에 오버레이가 있는지 여부를 제어합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
props:
  overlay: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### Modal 모델

`modal` 소품을 사용하여 Drawer가 외부 내용과의 상호 작용을 차단할지 여부를 제어합니다. 기본값은 `true`입니다.

::note
`modal`가 `false`로 설정되면 오버레이가 자동으로 비활성화되고 외부 내용은 대화형이 됩니다.
::

::component-code
---
prettier: true
props:
  modal: false
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-48 m-4"}
::

### 허용되지 않는 파일

`dismissible` Prop을 사용하여 Drawer 바깥쪽을 클릭하거나 escape 키를 누를 때 Drawer가 표시되지 않도록 제어합니다. 기본값은 `true`입니다.

::note
`close:prevent` 이벤트는 사용자가 닫으려고 할 때 내보내집니다.
::

::tip
`modal: false`와 `dismissible: false`를 결합하여 Drawer의 배경을 닫지 않고도 대화형으로 만들 수 있습니다.
::

::component-example
---
prettier: true
name: 'drawer-dismissible-example'
---
::

### Scale 배경

Drawer가 열려 있을 때 `should-scale-background` 소품을 사용하여 배경의 크기를 조정하여 시각적 깊이를 만듭니다. `set-background-color-on-scale` 소품을 `false`로 설정하면 배경색이 변경되지 않습니다.

::component-code
---
prettier: true
props:
  shouldScaleBackground: true
  setBackgroundColorOnScale: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#content
:placeholder{class="h-screen m-4"}
::

::warning
앱의 부모 요소에 `data-vaul-drawer-wrapper` 지시문을 추가하여 이 작업을 수행해야 합니다.

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

## 예제

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 오픈 상태를 제어할 수 있습니다.

::component-example
---
prettier: true
name: 'drawer-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 kbd{value="O"}를 눌러 Drawer를 토글할 수 있습니다.
::

::tip
이렇게 하면 트리거를 Drawer 외부로 이동하거나 완전히 제거할 수 있습니다.
::

### 응답형 서랍

예를 들어 데스크톱에서는 [Modal](/docs/components/modal) 구성 요소를 렌더링하고 모바일에서는 Drawer를 렌더링할 수 있습니다.

::component-example
---
prettier: true
name: 'drawer-responsive-example'
---
::

### nested 서랍

`nested` prop을 사용하여 서로 서랍을 중첩 할 수 있습니다.

::component-example
---
prettier: true
name: 'drawer-nested-example'
---
::

### 바닥글 슬롯 포함

`#footer` 슬롯을 사용하여 Drawer의 본체 뒤에 내용을 추가합니다.

::component-example
---
prettier: true
collapse: true
name: 'drawer-footer-slot-example'
---
::

### With 명령 팔레트

[CommandPalette](/docs/components/command-palette) 구성 요소를 Drawer의 콘텐츠 내에서 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'drawer-command-palette-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 Drawer가 열릴 때만 데이터를 가져옵니다.
::

## API

### Props 코드

:component-props

### 슬롯

:component-slots

### Emits

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
