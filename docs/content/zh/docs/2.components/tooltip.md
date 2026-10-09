---
description: 当鼠标悬停在元素上时显示信息的弹出窗口。
category: overlay
keywords:
  - hint
links:
  - label: 工具提示
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tooltip
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tooltip.vue
---

## 用法

在工具提示的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

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

:u-button{label="开放" color="neutral" variant="subtle"}
::

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用Reka UI中的[`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider)组件。
::

::tip{to="/docs/components/app#props"}
您可以查看`App`组件`tooltip` prop，了解如何全局配置工具提示。
::

### Text

使用`text`属性设置工具提示的内容。

::component-code
---
prettier: true
props:
  text: 'Open on GitHub'
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />
---

:u-button{label="开放" color="neutral" variant="subtle"}
::

### Kbds

使用`kbds`道具渲染工具提示中的[Kbd](/docs/components/kbd)组件。

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

:u-button{label="开放" color="neutral" variant="subtle"}
::

::tip
您可以使用特殊键，如`meta`，在macOS上显示为`⌘`，在其他平台上显示为`Ctrl`。
::

### 延迟

使用`delay-duration`属性更改工具提示出现前的延迟。例如，您可以通过将其设置为`0`来使其立即出现。

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

:u-button{label="开放" color="neutral" variant="subtle"}
::

::tip
这可以通过[`App`](/docs/components/app)组件中的`tooltip.delayDuration`选项进行全局配置。
::

### 内容

使用`content`属性控制工具提示内容的呈现方式，例如`align`或`side`。

::tip
这可以通过[`App`](/docs/components/app)组件中的`tooltip.content`选项进行全局配置。
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

:u-button{label="开放" color="neutral" variant="subtle"}
::

### 箭头

使用`arrow`道具在工具提示上显示一个箭头。

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

:u-button{label="开放" color="neutral" variant="subtle"}
::

### 禁用

使用`disabled`属性禁用工具提示。

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

:u-button{label="开放" color="neutral" variant="subtle"}
::

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'tooltip-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换工具提示。
::

### 使用以下光标

您可以使用[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)属性使工具提示在悬停在元素上时跟随光标：

::component-example
---
name: 'tooltip-cursor-example'
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
