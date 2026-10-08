---
description: 一个可折叠元素，用于切换其内容的可见性。
category: element
keywords:
  - disclosure
  - expand
links:
  - label: Collapsible
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---
## 用法

在 Collapsible 的默认插槽中使用 [Button](/docs/components/button) 或其他任意组件。

然后，使用 `#content` 插槽添加 Collapsible 打开时显示的内容。

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

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### 卸载

使用 `unmount-on-hide` prop 可以防止 Collapsible 收起时卸载内容。默认为 `true`。

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

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
你可以检查 DOM 以查看正在渲染的内容。
::

### 禁用

使用 `disabled` prop 禁用 Collapsible。

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

:u-button{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## 示例

### 控制打开状态

你可以通过 `default-open` prop 或 `v-model:open` 指令来控制打开状态。

::component-example
---
name: 'collapsible-open-example'
---
::

::note
在此示例中，利用 [`defineShortcuts`](/docs/composables/define-shortcuts)，你可以通过按下 :kbd{value="O"} 来切换 Collapsible。
::

::tip
这让你能够将触发器移动到 Collapsible 外部，或完全移除它。
::

### 带旋转图标

这是一个在 Button 中使用旋转图标以指示 Collapsible 打开状态的示例。

::component-example
---
name: 'collapsible-icon-example'
---
::

## API

### 属性

:component-props

### 插槽

:component-slots

### 事件

:component-emits