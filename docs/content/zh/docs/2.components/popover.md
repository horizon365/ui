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

## 使用情况

使用[Button](/docs/components/button)或Popover默认插槽中的任何其他组件。

然后，使用`#content`插槽添加弹出窗口打开时显示的内容。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主要内容：|

<Placeholder class="size-48 m-4 inline-flex" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

模式

使用`mode`道具更改弹出窗口的模式。默认为`click`。

::tip
在`hover`模式下，设定`enable-touch`道具，让使用者在触控装置上按一下触发器来切换“蹦现”，或使用`click`模式来设定要按一下的触发器。
::

::component-code
---
更漂亮：真的
项目名称：
  工作模式：
- 点击
    悬停
道具：
  模式：'悬停'
  enableTouch：真
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主要内容：|

<Placeholder class="size-48 m-4 inline-flex" />的电话
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

::note
当使用`hover`模式时，将使用Reka UI[`HoverCard`](https://reka-ui.com/docs/components/hover-card)组件，而不是[`Popover`](https://reka-ui.com/docs/components/popover)。
::

延迟时间

当使用`hover`模式时，您可以使用`open-delay`和`close-delay`道具来控制打开或关闭弹出窗口之前的延迟。

::component-code
---
更漂亮：真的
忽略：
  模式
道具：
  模式：'悬停'
  打开延迟：500
  关闭延迟：300
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />，你好

  主要内容：|

    039号
---

：U形按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

内容

使用`content`属性控制Popover内容的呈现方式，例如`align`或`side`。

::component-code
---
更漂亮：真的
项目名称：
  content.align:
    开始
    中心位置
    结束
  content.side:
    对了
    左侧
- 顶部
    底部
道具：
  主要内容：
    对齐：置中
    侧面：底部
    侧面偏移：8
插槽：
  默认值：|

    053号

  主要内容：|

    054号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

箭头

使用`arrow`道具在弹出窗口上显示箭头。

::component-code
---
更漂亮：真的
忽略：
  箭头
道具：
  箭头：true
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的

  主要内容：|

<Placeholder class="size-48 m-4 inline-flex" />，你好
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

模式

使用`modal`属性控制弹出窗口是否阻止与外部内容的交互。默认为`false`。

::component-code
---
更漂亮：真的
忽略：
  标题
道具：
  模式：true
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />，你好

  主要内容：|

    069号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}

#内容
：占位符{class="size-48 m-4 inline-flex"}
::

可忽略的

使用`dismissible`道具来控制在单击弹出窗口外部或按Esc键时是否禁用弹出窗口。默认值为`true`。

::note
当用户尝试关闭它时，将发出`close:prevent`事件。
::

::component-example
---
名称：'popope-dissible-example'（可删除的popope-dissible-示例）
---
::

示例

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'popover-open-example'（弹出窗口打开示例）
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换“弹出窗口”。
::

### 使用命令调色板

您可以在弹出窗口的内容中使用[CommandPalette](/docs/components/command-palette)组件。

::component-example
---
收阖：true
名称：'popover-command-palette-example'（弹出命令调色板示例）
---
::

### 使用下列游标

您可以使用[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)属性，使“蹦现式视窗”在游标停留在元素上时跟随游标：

::component-example
---
名称：'popope-cursor-example'（弹出游标示例）
---
::

带锚槽

您可以使用`#anchor`插槽将Popover放置在自定义元素上。

::warning
此插槽仅在`mode`为`click`时有效。
::

::component-example
---
收阖：true
名称：'popover-anchor-slot-示例'
---
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

::note
`close`函数仅在`mode`设置为`click`时可用，因为Reka用户界面为[`Popover`](https://reka-ui.com/docs/components/popover#close-using-slot-props)公开此函数，但不为[`HoverCard`](https://reka-ui.com/docs/components/hover-card)公开此函数。
::

发射率

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
