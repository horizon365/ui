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

## 使用情况

使用[Button](/docs/components/button)或[工具提示]的预设位置中的任何其他元件。

::component-code
---
更漂亮：真的
忽略：
  - 文本
道具：
  text：'在GitHub上打开'
插槽：
  默认值为：|

<UButton label="Open" color="neutral" variant="subtle" />的
---

：U形按钮{label="Open" color="neutral" variant="subtle"}
::

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用来自Reka UI的[`TooltipProvider`](https://reka-ui.com/docs/components/tooltip#provider)组件。
::

::tip{to="/docs/components/app#props"}
您可以检查`App`元件`tooltip`属性，以了解如何全域设定工具提示。
::

文字

使用`text`道具设置工具提示的内容。

::component-code
---
更漂亮：真的
道具：
  text：'在GitHub上打开'
插槽：
  默认值：|

    022号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

### 千桶

使用`kbds`属性在工具提示中呈现[Kbd](/docs/components/kbd)组件。

::component-code
---
更漂亮：真的
忽略：
  - 文本
- 千桶
道具：
  text：'在GitHub上打开'
  千字节数：
    - 元数据
    第33章G
插槽：
  默认值：|

    034号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

::tip
您可以使用特殊键，如`meta`（在macOS上显示为`⌘`）和`Ctrl`（在其他平台上显示为`Ctrl`）。
::

延迟时间

使用`delay-duration`属性来变更工具提示出现之前的延迟。例如，您可以将其设定为`0`，让工具提示立即出现。

::component-code
---
更漂亮：真的
忽略：
  - 文本
道具：
  延迟持续时间：0
  text：'在GitHub上打开'
插槽：
  默认值：|

    043号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

::tip
您可以透过[`App`](/docs/components/app)元件中的`tooltip.delayDuration`选项，全域设定此设定。
::

内容

使用`content`属性来控制工具提示内容的呈现方式，例如`align`或`side`。

::tip
这可以通过[`App`](/docs/components/app)组件中的`tooltip.content`选项进行全局配置。
::

::component-code
---
更漂亮：真的
忽略：
  - 文本
项目名称：
  content.align:
    开始
    中心位置
    结束！
  content.side:
    对了
    左侧
    顶部
    底部
道具：
  主要内容：
    对齐：置中
    侧面：底部
    侧面偏移：8
  text：'在GitHub上打开'
插槽：
  默认值：|

    069号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

箭头

使用`arrow`道具在工具提示上显示箭头。

::component-code
---
更漂亮：真的
忽略：
  - 文本
  箭头
道具：
  箭头：true
  text：'在GitHub上打开'
插槽：
  默认值：|

    075号
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

### 已禁用

使用`disabled`道具禁用工具提示。

::component-code
---
更漂亮：真的
忽略：
  - 文本
道具：
  已禁用：true
  text：'在GitHub上打开'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle"}
::

示例

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
名称：'工具提示-打开-示例'
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换工具提示。
::

### 使用跟随光标

您可以使用[`reference`](https://reka-ui.com/docs/components/tooltip#trigger)属性，使“工具提示”在游标停留在元素上时跟随游标：

::component-example
---
名称：'工具提示-光标-示例'
---
::

美国石油学会

道具

：组件-支柱

### 插槽

：组件插槽

### 排放

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
