---
description: 可用于显示消息或请求用户输入的对话框窗口。
category: overlay
keywords:
  - dialog
  - popup
  - confirm
  - alert dialog
links:
  - label: 对话
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Modal.vue
---

## 用法

在Modal的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加Modal打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-48 m-4" />
---

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="h-48 m-4"}
::

您还可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自定义Modal的内容。

### 标题

使用`title` prop设置Modal头的标题。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 说明

使用`description`属性设置Modal头的描述。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 关闭

使用`close` prop来自定义或隐藏显示在Modal标题中的关闭按钮（使用`false`值）。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::tip
如果使用`#content`插槽，则关闭按钮不会显示，因为它是标题的一部分。
::

### 关闭图标

使用`close-icon`道具自定义关闭按钮[Icon](/docs/components/icon).exe到`i-lucide-x`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.close`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### 转换

使用`transition`道具来控制模态是否被动画化。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 叠加

使用`overlay`属性来控制Modal是否有覆盖。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### Modal

使用`modal`属性来控制Modal是否阻止与外部内容的交互。

::note
当`modal`设置为`false`时，覆盖将自动禁用，外部内容将变为交互式。
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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 可忽略

使用`dismissible`属性来控制当在Modal外部单击或按escape. `true`时，Modal是否被拒绝。

::note
当用户试图关闭它时，将发出`close:prevent`事件。
::

::tip
您可以将联合收割机`modal: false`与`dismissible: false`结合使用，使Modal的背景具有交互性，而无需关闭它。
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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

### 可滚动：badge{label="4.2+" class="align-text-top"}

使用`scrollable`属性使Modal的内容在覆盖层中可滚动。

::warning
由于滚动需要覆盖，`modal: false`不兼容，`overlay: false`只删除背景。
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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-screen"}
::

::caution
在某些操作系统上，单击滚动条可能会无意中关闭对话框，这是一个已知的问题e](https://reka-ui.com/docs/components/dialog#scrollable-overlay)。
::

### 全屏

使用`fullscreen`道具使模态全屏。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 卸载：badge{label="4.10+" class="align-text-top"}

使用`unmount-on-hide`属性来防止Modal的内容在关闭时被卸载。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-48"}
::

::note
您可以检查DOM以查看正在呈现的Modal内容，即使它是关闭的。
::

::tip
当`portal` prop设置为`false`时，内容也会在服务器上呈现。这对于在SSR期间呈现开放的Modal而不会在页面加载时出现闪烁或暴露其内容以进行SEO非常有用。
::

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'modal-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}来切换模式。
::

::tip
这允许您将触发器移到Modal之外或将其完全移除。
::

### 编程使用

您可以使用[`useOverlay`](/docs/composables/use-overlay)组合程序以编程方式打开Modal。

::warning
请确保使用[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)组件的[`App`](/docs/components/app)组件包装您的应用。
::

首先，创建一个将以编程方式打开的模态组件：

::component-example
---
prettier: true
name: 'modal-example'
preview: false
---
::

::note
我们在这里当模态被关闭或解除时发出一个`close`事件。您可以通过`close`事件发出任何数据，该数据将成为`open()`的解析值。必须发出该事件才能解析promise。
::

然后在你的app中使用它：

::component-example
---
name: 'modal-programmatic-example'
---
::

::tip
您可以通过发出`emit('close')`来关闭模态组件中的模态。
::

### 嵌套模态

您可以在彼此内部嵌套模态。

::component-example
---
name: 'modal-nested-example'
---
::

### 带页脚插槽

使用`#footer`插槽在Modal的主体之后添加内容。

::component-example
---
name: 'modal-footer-slot-example'
---
::

### 使用命令调色板

您可以在Modal的内容中使用[CommandPalette](/docs/components/command-palette)组件。

::component-example
---
collapse: true
name: 'modal-command-palette-example'
---
::

::note
这个例子使用`useLazyFetch`和`immediate: false`来只在Modal打开时获取数据。
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
