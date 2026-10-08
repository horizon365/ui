---
description: 一个抽屉，顺利地滑进和滑出屏幕。
category: overlay
keywords:
  - bottom sheet
  - action sheet
  - mobile sheet
links:
  - label: 抽屉
    icon: i-custom-reka-ui
    to: https://github.com/unovue/vaul-vue
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Drawer.vue
---

## 使用情况

在抽屉的默认插槽中使用[Button](/docs/components/button)或任何其他组件。

然后，使用`#content`插槽添加抽屉打开时显示的内容。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />的

  主要内容：|

<Placeholder class="h-48 m-4" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-48 m-4"}
::

您也可以使用`#header`{lang="ts-type"}、`#body`{lang="ts-type"}和`#footer`{lang="ts-type"}插槽来自订[抽屉]的内容。

### 标题

使用`title`道具设置抽屉标题。

::component-code
---
更漂亮：真的
道具：
  title：'带标题的抽屉'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />的

  主体：|

<Placeholder class="h-48" />的电话
---

：U形按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

正文数
：占位符{class="h-48"}
::

说明：

使用`description`属性设置抽屉标题的说明。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  title：'带说明的抽屉'
  描述：“痛苦的人是痛苦的，奉献的人是快乐的。”
插槽：
  默认值：|

    025号

  主体：|

    026号
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

正文数
：占位符{class="h-48"}
::

### 关闭：标志{label="4.10+" class="align-text-top"}

使用`close`道具在抽屉中显示关闭按钮。默认为`false`。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
忽略：
  标题：
  关闭. color
  关闭.变量
道具：
  title：'带关闭按钮的抽屉'
  结束语：
    颜色：原色
    变体：轮廓
    类别：'四舍五入-完整'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />的

  主体：|

    041号
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

正文数
：占位符{class="h-48"}
::

### 关闭图标：徽标{label="4.10+" class="align-text-top"}

使用`close-icon`属性来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具类：
  title：'带关闭按钮的抽屉'
  关闭：true
  关闭图标：'i-透明箭头-右'
插槽：
  默认值：|

    053号

  正文部分：|

    054号
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

正文数
：占位符{class="h-48"}
::

方向

使用`direction`道具来控制抽屉的方向。预设为`bottom`。

::component-code
---
更漂亮：真的
道具：
  方向：'右'
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />的

  主要内容：|

<Placeholder class="min-w-96 min-h-96 size-full m-4" />，你好
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="min-w-96 min-h-96 size-full m-4"}
::

插入式

使用`inset`道具从边缘插入抽屉。

::component-code
---
更漂亮：真的
道具：
  方向：'右'
  插图：true
插槽：
  默认值：|

    066号

  主要内容：|

    067号
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="min-w-96 min-h-96 size-full m-4"}
::

手柄

使用`handle`属性来控制抽屉是否有手柄。默认为`true`。

::component-code
---
更漂亮：真的
道具：
  句柄：false
插槽：
  默认值：|

    073号

  主要内容：|

    第074章
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-48 m-4"}
::

### 仅句柄

使用`handle-only`道具只允许通过手柄拖动抽屉。

::component-code
---
更漂亮：真的
道具：
  仅句柄：true
插槽：
  默认值：|

    第079章

  主要内容：|

<Placeholder class="h-48 m-4" />的
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-48 m-4"}
::

复盖图

使用`overlay`属性来控制抽屉是否有覆迭。预设值为`true`。

::component-code
---
更漂亮：真的
道具：
  覆盖：假
插槽：
  默认值：|

    086号

  主要内容：|

    第087章
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-48 m-4"}
::

### 模式

使用`modal`属性控制抽屉是否阻止与外部内容的交互。默认为`true`。

::note
当`modal`设定为`false`时，覆迭会自动停用，且外部内容会变成互动式。
::

::component-code
---
更漂亮：真的
道具：
  模式：假
插槽：
  默认值：|

    095号

  主要内容：|

    第096章
---

：U型按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-48 m-4"}
::

可忽略的

使用`dismissible`属性来控制在抽屉外部单击或按Esc键时是否禁用抽屉。默认值为`true`。

::note
当用户尝试关闭它时，将发出`close:prevent`事件。
::

::tip
您可以将`modal: false`与`dismissible: false`结合使用，使抽屉的背景在不关闭的情况下具有交互性。
::

::component-example
---
更漂亮：真的
名称：'绘图员-可忽略-示例'
---
::

### 缩放背景

当抽屉打开时，使用`should-scale-background`道具缩放背景，创建视觉深度效果。您可以将`set-background-color-on-scale`道具设置为`false`以防止更改背景颜色。

::component-code
---
更漂亮：真的
道具：
  shouldScaleBackground：真的，我的天
  按比例设置背景颜色：真
插槽：
  默认值：|

<UButton label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up" />

  主要内容：|

    110华氏度
---

：U形按钮{label="Open" color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-up"}

#内容
：占位符{class="h-screen m-4"}
::

::warning
请确保将`data-vaul-drawer-wrapper`指令添加到应用的父元素以使其正常工作。

```vue [app.vue]
<template>
  <UApp>
    <div class="bg-default" data-vaul-drawer-wrapper>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  app: {
    rootAttrs: {
      'data-vaul-drawer-wrapper': '',
      'class': 'bg-default'
    }
  }
})
```

::

示例

### 控制打开状态

您可以使用`default-open`属性或`v-model:open`指示词来控制开启状态。

::component-example
---
更漂亮：真的
名称："绘图器打开示例"
---
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="O"}来切换抽屉。
::

::tip
这可让您将触发器移出抽屉或将其完全移除。
::

响应抽屉

例如，您可以在桌面上呈现[Modal](/docs/components/modal)组件，并在移动设备上呈现Drawer。

::component-example
---
更漂亮：真的
名称：'绘图器回应范例'
---
::

### 嵌套抽屉

您可以使用`nested`道具将抽屉嵌套在一起。

::component-example
---
更漂亮：真的
名称：'抽屉嵌套示例'
---
::

### 使用页脚插槽

使用`#footer`插槽在抽屉正文后添加内容。

::component-example
---
更漂亮：真的
收阖：true
名称：'绘图页尾插槽范例'
---
::

### 使用命令选项板

您可以在[绘图员]的内容中使用[CommandPalette](/docs/components/command-palette)元件。

::component-example
---
收阖：true
名称：'绘图器命令调色板示例'
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在抽屉打开时提取数据。
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

发射率

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
