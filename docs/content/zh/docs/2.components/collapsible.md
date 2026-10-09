---
description: 一个可折叠的元素，用于切换其内容的可见性。
category: element
keywords:
  - disclosure
  - expand
links:
  - label: 可折叠
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/collapsible
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Collapsible.vue
---

## 用法

在Collapsible的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加Collapsible打开时显示的内容。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

### 卸载

使用`unmount-on-hide`属性来防止在Collapsible被折叠时内容被卸载。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

::note
您可以检查DOM以查看正在呈现的内容。
::

### 禁用

使用`disabled`道具禁用可折叠。

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

:u-button{label="开放" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-down" block}

#content
:placeholder{class="h-48"}
::

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'collapsible-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换Collapsible。
::

::tip
这使您可以将触发器移动到Collapsible外部或将其完全移除。
::

### 带旋转图标

下面是一个按钮中的旋转图标的示例，该图标指示可折叠的打开状态。

::component-example
---
name: 'collapsible-icon-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
