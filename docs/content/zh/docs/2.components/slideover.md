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

## 使用情况

使用[Button](/docs/components/button)或Slideover的预设插槽中的任何其他元件。

然后，使用`#content`插槽添加Slideover打开时显示的内容。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主要内容：|

<Placeholder class="h-full m-4" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="h-full m-4"}
::

您也可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自订[投影片]的内容。

### 标题

使用`title`道具设置Slideover标题。

::component-code
---
更漂亮：真的
道具：
  title：'带标题的滑动条'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主体：|

<Placeholder class="h-full" />的电话
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

说明：

使用`description`属性设置Slideover标头的说明。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  title：'带说明的滑动条'
  描述：“痛苦的人是痛苦的，奉献的人是快乐的。”
插槽：
  默认值：|

    025号

  主体：|

    026号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

### 关闭

使用`close`属性自定义或隐藏Slideover标题中显示的关闭按钮（值为`false`）。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
忽略：
  标题：
  关闭. color
  关闭.变量
道具：
  title：'带关闭按钮的滑动条'
  结束语：
    颜色：原色
    变体：轮廓
    类别：'四舍五入-完整'
插槽：
  默认值：|

    039号

  主体：|

<Placeholder class="h-full" />的
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文编号
：占位符{class="h-full"}
::

::note
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
  title：'带关闭按钮的滑动条'
  关闭图标：'i-透明箭头-右'
插槽：
  默认值：|

    052号

  主体：|

    053号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
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

### 侧面

使用`side`道具来设定屏幕的哪一边，Slideover将从哪一边滑入。预设值为`right`。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  侧边：'左'
  title：'侧边滑过'
插槽：
  默认值：|

    064号

  主体：|

<Placeholder class="h-full min-h-48" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full min-h-48"}
::

插入：徽章

使用`inset`道具从边缘插入幻灯片。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  侧边：“右”
  插图：true
  title：'带插图的滑动条'
插槽：
  默认值：|

    072号

  主体：|

    073号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="min-w-96 min-h-96 size-full"}
::

过渡

使用`transition`道具来控制是否为Slideover设置动画效果。默认设置为`true`。

::component-code
---
更漂亮：真的
忽略：
  标题
道具：
  转场：假
  title：'不带过渡的滑过式鼠标'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主体：|

<Placeholder class="h-full" />，你好
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

复盖

使用`overlay`属性来控制Slideover是否有重叠。预设值为`true`。

::component-code
---
更漂亮：真的
忽略：
  标题
道具：
  覆盖：假
  title：'无覆盖的滑过'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />，你好

  主体：|

    第1089章
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

模式

使用`modal`属性控制Slideover是否阻止与外部内容的交互。默认值为`true`。

::note
当`modal`设定为`false`时，覆迭会自动停用，且外部内容会变成互动式。
::

::component-code
---
更漂亮：真的
忽略：
  标题
道具：
  模式：假
  标题：“幻灯片交互式”
插槽：
  默认值：|

    098号

  主体：|

    第099章
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

### 可忽略

使用`dismissible`属性来控制在按一下Slideover之外或按下Esc时，是否要关闭Slideover。预设值为`true`。

::note
当用户尝试关闭它时，将发出`close:prevent`事件。
::

::tip
您可以将`modal: false`与`dismissible: false`结合使用，使Slideover的背景在不关闭的情况下具有互动性。
::

::component-code
---
更漂亮：真的
忽略：
  标题
道具：
  可忽略：假
  模式：true
  标题：“不可忽略的滑动”
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />

  主体：|

    110华氏度
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

### 卸载：徽标{label="4.10+" class="align-text-top"}

使用`unmount-on-hide`道具可防止关闭幻灯片时卸载幻灯片的内容。默认为`true`。

::component-code
---
更漂亮：真的
忽略：
- 标题
道具：
  隐藏时卸载：假
  标题：'滑过'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />级

  主体：|

<Placeholder class="h-full" />
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

正文数
：占位符{class="h-full"}
::

::note
您可以检查DOM，以查看Slideover的内容是否正在呈现，即使它已关闭。
::

::tip
当`portal`属性设定为`false`时，内容也会呈现在服务器上。这对于在SSR期间呈现开启的Slideover（页面载入时不使用Flash），或为SEO公开其内容非常有用。
::

示例

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'滑过-打开-示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换幻灯片悬停。
::

::tip
这可让您将触发器移到Slideover之外或将其完全移除。
::

### 程序设计的用法

您可以使用[`useOverlay`](/docs/composables/use-overlay)可组合对象以编程方式打开幻灯片。

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用[`OverlayProvider`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/OverlayProvider.vue)组件。
::

首先，创建一个将通过编程方式打开得滑过式组件：

::component-example
---
更漂亮：真的
名称：'滑过示例'
预览：假
---
::

::note
在此处关闭或取消滑动时，我们将发出`close`事件。您可以通过`close`事件发出任何数据，该数据将成为`open()`的解析值。必须发出该事件，承诺才能解析。
::

然后，在您的应用程序中使用它：

::component-example
---
名称：'滑过程序设计范例'
---
::

::tip
可以通过发出`emit('close')`来关闭幻灯片组件中得幻灯片.
::

嵌套的幻灯片

您可以将滑过幻灯片嵌套在彼此之间。

::component-example
---
名称：'幻灯片嵌套示例'
---
::

### 使用页脚插槽

使用`#footer`槽在Slideover正文后添加内容。

::component-example
---
名称：'幻灯片-页脚-插槽-示例'
---
::

美国石油学会

158道具

：组件-支柱

插槽数

：组件插槽

### 排放量

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
