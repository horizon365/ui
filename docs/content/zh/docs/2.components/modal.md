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

## 使用情况

使用[Button](/docs/components/button)或Modal默认插槽中的任何其他组件。

然后，使用`#content`插槽添加Modal打开时显示的内容。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主要内容：|

<Placeholder class="h-48 m-4" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="h-48 m-4"}
::

您也可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自订Modal的内容。

### 标题

使用`title`道具设置Modal标题。

::component-code
---
更漂亮：真的
道具：
  title：'带标题的模态'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  正文部分：|

<Placeholder class="h-48" />的电话
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

说明：

使用`description`属性来设定Modal信头的描述。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具类：
  title：'带说明的模态'
  描述：“痛苦的人是痛苦的，奉献的人是快乐的。”
插槽：
  默认值：|

    025号

  主体：|

    026号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

### 关闭

使用`close`属性来自定义或隐藏Modal标题中显示的关闭按钮（值为`false`）。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
忽略：
  标题
  关闭. color
  关闭.变量
道具：
  title：'带关闭按钮的Modal'
  结束语：
    颜色：原色
    变体：轮廓
    类别：'四舍五入-完整'
插槽：
  默认值：|

    039号

  主体：|

<Placeholder class="h-48" />的
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

::tip
如果使用`#content`插槽，则不会显示关闭按钮，因为它是标题的一部分。
::

### 关闭图标

使用`close-icon`属性来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  title：'带关闭按钮的Modal'
  关闭图标：'i-透明箭头-右'
插槽：
  默认值：|

    052号

  主体：|

    053号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.close`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.close`键下的`vite.config.ts`中全局自定义此图标。
:::
::

过渡段

使用`transition`道具来控制模式是否为动画。预设值为`true`。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  转场：假
  title：“无过渡的模态”
插槽：
  默认值：|

    064号

  主体：|

<Placeholder class="h-48" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

复盖

使用`overlay`属性控制模式是否有覆盖。默认为`true`。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  覆盖：假
  title：'无覆盖的模态'
插槽：
  默认值：|

    072号

  主体：|

    073号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

模式

使用`modal`属性控制模式是否阻止与外部内容的交互。默认值为`true`。

::note
当`modal`设定为`false`时，覆迭会自动停用，且外部内容会变成互动式。
::

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  模式：假
  标题：“模态互动”
插槽：
  默认值：|

    082号

  主体：|

    083号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

可忽略的

使用`dismissible`属性来控制在模式外部单击或按Esc键时是否禁用模式。默认值为`true`。

::note
当使用者尝试关闭它时，将会发出`close:prevent`事件。
::

::tip
您可以将`modal: false`与`dismissible: false`结合使用，使Modal的背景在不关闭的情况下具有交互性。
::

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  可忽略：假
  模式：true
  标题：“模态不可删除”
插槽：
  默认值：|

    第093章

  主体：|

    第094章
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

可滚动：徽标

使用`scrollable`道具使Modal的内容可在覆盖中滚动。

::warning
由于滚动时需要覆盖，因此`modal: false`不兼容，`overlay: false`仅删除背景。
::

::component-code
---
更漂亮：真的
忽略：
- 标题
道具：
  可滚动：true
  覆盖：真
  title：'模式可滚动'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />型

  主体：|

<Placeholder class="h-full" />型
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-screen"}
::

::caution
存在一个[已知问题](https://reka-ui.com/docs/components/dialog#scrollable-overlay)，在某些操作系统上，单击滚动条可能会无意中关闭对话框。
::

### 全屏幕

使用`fullscreen`道具使Modal全屏显示。

::component-code
---
更漂亮：真的
忽略：
- 标题
- 全屏
道具：
  全屏幕：true
  title：'模式全屏'
插槽：
  默认值：|

    115华氏度

  主体：|

<Placeholder class="h-full" />级
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

卸载：徽标{label="4.10+" class="align-text-top"}

使用`unmount-on-hide`道具可防止Modal的内容在关闭时被卸载。默认为`true`。

::component-code
---
更漂亮：真的
忽略：
- 标题
道具：
  隐藏时卸载：假
  标题："模态"
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />小时

  主体：|

<Placeholder class="h-48" />华氏度
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-48"}
::

::note
您可以检查DOM以查看Modal的内容是否正在呈现，即使在它关闭时也是如此。
::

::tip
当`portal`属性设定为`false`时，内容也会呈现在服务器上。这对于在SSR期间呈现开启的Modal而不需Flash on page load，或公开其内容以进行SEO，都很有用。
::

示例：

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'模式-打开-示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换模式。
::

::tip
这允许您将触发器移到Modal之外或将其完全移除。
::

### 编程用法

您可以使用[`useOverlay`](/docs/composables/use-overlay)可组合物件，以程序设计方式开启Modal。

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)组件。
::

首先，创建一个将以编程方式打开的模态组件：

::component-example
---
更漂亮：真的
名称：'模式示例'
预览：假
---
::

::note
当在此处关闭或解除胁迫回应时，我们会发出`close`事件。您可以透过`close`事件发出任何数据，而该数据会成为`open()`的解析值。必须发出事件，承诺才会解析。
::

然后，在您的应用程序中使用它：

::component-example
---
名称：'模式-编程-示例'
---
::

::tip
您可以发出`emit('close')`，关闭胁迫回应元件中的胁迫回应。
::

嵌套模态

您可以在彼此内部嵌套模态。

::component-example
---
名称：'模式嵌套示例'
---
::

### 使用页脚插槽

使用`#footer`插槽在Modal正文后添加内容。

::component-example
---
名称：'模式页脚插槽示例'
---
::

### 使用命令调色板

您可以在Modal的内容中使用[CommandPalette](/docs/components/command-palette)组件。

::component-example
---
收阖：true
名称：'模式命令调色板示例'
---
::

::note
此示例使用`useLazyFetch`和`immediate: false`，以便仅在Modal打开时提取数据。
::

## 活性成分

### 道具

：组件-支柱

插槽数

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
