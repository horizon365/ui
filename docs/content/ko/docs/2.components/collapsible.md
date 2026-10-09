---
description: 내용의 가시성을 전환하기 위한 축소 가능한 요소.
category: element
keywords:
  - disclosure
  - expand
links:
  - label: 축소 가능
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## Usage

축소 가능의 기본 슬롯에 [Button](/docs/components/button) 또는 다른 구성 요소를 사용합니다.

그런 다음 `#content` 슬롯을 사용하여 축소 가능이 열려 있을 때 표시된 내용을 추가합니다.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### Unmount 마운트 해제

축소 가능이 축소될 때 내용이 마운트 해제되지 않도록 하려면 `unmount-on-hide` 소품을 사용합니다. 기본값은 `true`입니다.

::component-code
---
prettier: true
ignore:
  - class
props:
  unmountOnHide: false
  class: 'flex flex-col gap-2 w-48'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
DOM을 검사하여 렌더링되는 콘텐츠를 확인할 수 있습니다.
::

### 비활성 화

`disabled` Prop을 사용하여 Collapsible을 비활성화합니다.

::component-code
---
prettier: true
ignore:
  - class
props:
  class: 'flex flex-col gap-2 w-48'
  disabled: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block />

  content: |

    <Placeholder class="h-48" />
---

:u-button{label="열기 (Open)" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## 예제

### Control 오픈 상태

`default-open` prop 또는 `v-model:open` 지시문을 사용하여 개방 상태를 제어할 수 있습니다.

::component-example
---
name: 'collapsible-open-example'
---
::

::note
이 예제에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 :kbd{value="O"}를 눌러 축소 가능을 토글할 수 있습니다.
::

::tip
이렇게 하면 트리거를 축소 가능 외부로 이동하거나 완전히 제거할 수 있습니다.
::

### 회전 아이콘 포함

다음은 축소 가능의 열린 상태를 나타내는 버튼에 회전 아이콘이 있는 예입니다.

::component-example
---
name: 'collapsible-icon-example'
---
::

## API 사용

### Props (### Props)

:component-props

### 슬롯

:component-slots

### Emits 파일

:component-emits

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
