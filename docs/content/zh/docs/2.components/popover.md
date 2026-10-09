---
description: 围绕触发器元素浮动的非模态对话框。
category: overlay
keywords:
  - hover card
  - flyout
links:
  - label: HoverCard
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/hover-card
  - label: 弹出框
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/popover
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Popover.vue
---

## 用法

在弹出框的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加Popover打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="size-48 m-4 inline-flex" />
---

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Mode

使用`mode`属性将Popover.exe的模式更改为`click`。

::tip
在`hover`模式下，设置`enable-touch`道具，让用户通过点击触摸设备上的触发器来切换Popover，或者将`click`模式用于需要点击的触发器。
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

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

::note
当使用`hover`模式时，Reka UI [`HoverCard`](https://reka-ui.com/docs/components/hover-card)组件被使用，而不是[`Popover`](https://reka-ui.com/docs/components/popover)。
::

### 延迟

当使用`hover`模式时，您可以使用`open-delay`和`close-delay`道具来控制Popover打开或关闭之前的延迟。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 内容

使用`content`属性控制Popover内容的呈现方式，例如`align`或`side`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Arrow

使用`arrow`道具在弹出框上显示箭头。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### Modal

使用`modal`属性来控制弹出框是否阻止与外部内容的交互。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="size-48 m-4 inline-flex"}
::

### 可忽略

使用`dismissible`属性来控制在弹出框外部单击或按下escape. `true`时是否禁用弹出框。

::note
当用户试图关闭它时，将发出`close:prevent`事件。
::

::component-example
---
name: 'popover-dismissible-example'
---
::

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'popover-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换弹出框。
::

### 带命令调色板

您可以在Popover的内容中使用[CommandPalette](/docs/components/command-palette)组件。

::component-example
---
collapse: true
name: 'popover-command-palette-example'
---
::

### 使用以下光标

您可以使用[`reference`](https://reka-ui.com/docs/components/tooltip#trigger) prop使Popover在悬停在元素上时跟随光标：

::component-example
---
name: 'popover-cursor-example'
---
::

### 带锚槽

您可以使用`#anchor`插槽将Popover放置在自定义元素上。

::warning
此插槽仅在`mode`为`click`时有效。
::

::component-example
---
collapse: true
name: 'popover-anchor-slot-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

::note
`close`功能仅在`mode`设置为`click`时可用，因为Reka UI为[`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props)而不是[`HoverCard`](https://reka-ui.com/docs/components/hover-card)公开了此功能。
::

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
