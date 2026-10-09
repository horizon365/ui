---
description: 从屏幕的任何一侧滑入的对话框。
category: overlay
keywords:
  - sheet
  - side panel
  - off-canvas
links:
  - label: 对话
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/dialog
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Slideover.vue
---

## 用法

在幻灯片的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加Slideover打开时显示的内容。

::component-code
---
prettier: true
slots:
  default: |

    <UButton label="Open" color="neutral" variant="subtle" />

  content: |

    <Placeholder class="h-full m-4" />
---

:u-button{label="开放" color="neutral" variant="subtle"}

#content
:placeholder{class="h-full m-4"}
::

您还可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自定义幻灯片的内容。

### 标题

使用`title`属性设置幻灯片标题。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 说明

使用`description`属性设置幻灯片标题的描述。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 关闭

使用`close`属性自定义或隐藏幻灯片标题中显示的关闭按钮（使用`false`值）。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
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
  title: 'Slideover with close button'
  closeIcon: 'i-lucide-arrow-right'
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

### Side

使用`side`道具设置幻灯片将从. `right`滑入的屏幕一侧。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full min-h-48"}
::

### 插入：badge{label="4.3+" class="align-text-top"}

使用`inset`道具从边缘插入幻灯片。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="min-w-96 min-h-96 size-full"}
::

### 转换

使用`transition`道具来控制幻灯片是否被动画化。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 叠加

使用`overlay`道具来控制幻灯片是否有覆盖。将其转换为`true`。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### Modal

使用`modal`属性来控制幻灯片是否阻止与外部内容的交互。

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
  title: 'Slideover interactive'
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

### 可忽略

使用`dismissible`属性来控制当在幻灯片外部单击或按escape. `true`时是否允许幻灯片。

::note
当用户试图关闭它时，将发出`close:prevent`事件。
::

::tip
您可以将联合收割机`modal: false`与`dismissible: false`结合使用，使幻灯片的背景具有交互性，而无需关闭它。
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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

### 卸载：badge{label="4.10+" class="align-text-top"}

使用`unmount-on-hide`属性来防止幻灯片的内容在关闭时被卸载。

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

:u-button{label="开放" color="neutral" variant="subtle"}

#body
:placeholder{class="h-full"}
::

::note
您可以检查DOM以查看Slideover的内容，即使它是关闭的。
::

::tip
当`portal`属性设置为`false`时，内容也会在服务器上呈现。这对于在SSR期间呈现打开的Slideover而不会在页面加载时出现闪烁或暴露其内容以进行SEO非常有用。
::

## 示例

### 控制打开状态

您可以使用`default-open` prop或`v-model:open`指令控制打开状态。

::component-example
---
name: 'slideover-open-example'
---
::

::note
在本例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按：kbd{value="O"}切换幻灯片。
::

::tip
这使您可以将触发器移动到Slideover之外或将其完全移除。
::

### 编程使用

您可以使用[`useOverlay`](/docs/composables/use-overlay)组合工具以编程方式打开幻灯片。

::warning
请确保使用[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)组件的[`App`](/docs/components/app)组件包装您的应用。
::

首先，创建一个将以编程方式打开的幻灯片组件：

::component-example
---
prettier: true
name: 'slideover-example'
preview: false
---
::

::note
当slideover在这里被关闭或解除时，我们将发出一个`close`事件。您可以通过`close`事件发出任何数据，该数据将成为`open()`的解析值。必须发出该事件才能解析promise。
::

然后，在您的应用程序中使用它：

::component-example
---
name: 'slideover-programmatic-example'
---
::

::tip
您可以通过发出`emit('close')`关闭slideover组件中的slideover。
::

### 嵌套幻灯片

可以将幻灯片嵌套在彼此内部。

::component-example
---
name: 'slideover-nested-example'
---
::

### 带页脚插槽

使用`#footer`插槽在幻灯片主体之后添加内容。

::component-example
---
name: 'slideover-footer-slot-example'
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
