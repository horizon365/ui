---
description: 向用户提供信息或反馈的简洁消息。
category: overlay
keywords:
  - notification
  - snackbar
  - flash message
links:
  - label: 吐司
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/toast
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toast.vue
---

## 使用情况

使用[useToast](/docs/composables/use-toast)可组合项在应用程序中显示吐司。

::component-example
---
收阖：true
更漂亮：真的
名称：'toast-example'
---
::

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用我们的[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)组件，该组件使用[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider) Reka UI中的组件。
::

::tip{to="/docs/components/app#props"}
您可以检查`App`元件`toaster`属性，以了解如何全域设定快显通知程式。
::

### 标题

将`title`字段传递给`toast.add`方法以显示标题。

::component-example
---
可选项：
  姓名：'标题'
    标签：'title'
    默认值：“啊哦！出错了。”
名称：'toast-title-example'（祝酒词标题示例）
---
::

说明：

将`description`字段传递给`toast.add`方法以显示说明。

::component-example
---
可选项：
  姓名：'标题'
    标签：'title'
    默认值：“啊哦！出错了。”
  - 名称：'说明'
    标签：'描述'
    默认值：“您的请求有问题。”
名称：'toast-description-example'
---
::

### 图标

将`icon`字段传递给`toast.add`方法，以显示[图标](/docs/components/icon)。

::component-example
---
可选项：
  名称：'图标'
    标签：'icon'
    默认值：“i-lucide-wifi”
名称：'toast-icon-example'（祝酒词图标示例）
---
::

阿凡达

将`avatar`字段传递给`toast.add`方法，以显示[Avatar](/docs/components/avatar)。

::component-example
---
可选项：
  - 名称：'头像.src'
    别名：'化身'
    标签：'虚拟化身.src'
    默认值：
      来源：'https：//github.com/benjamincanac.png'
名称：'toast-avatar-example'
---
::

### Color

将`color`字段传递给`toast.add`方法以更改吐司的颜色。

::component-example
---
可选项：
  - name：'颜色'
    标签：'颜色'
    默认值：中性
    项目名称：
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
名称：'toast-color-example'
---
::

### Close

传递`close`字段以自定义或隐藏关闭[Button](/docs/components/button)（带`false`值）。

::component-example
---
名称：'toast-close-example'
---
::

### Close Icon

传递`closeIcon`字段以自定义关闭按钮[Icon](/docs/components/icon)。将其设置为`i-lucide-x`。

::component-example
---
可选项：
  - name：'closeIcon'
    标签：'closeIcon'
    默认值：'i-lucide-arrow-right'
名称：'toast-close-icon-example'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.close`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.close`键下全局自定义此图标。
:::
::

### Actions

传递一个`actions`字段，将一些[Button](/docs/components/button)操作添加到吐司。

::component-example
---
可选项：
  - name：'说明'
    标签：'描述'
    默认值：'您的请求有问题。'
名称：'toast-actions-example'
---
::

### Duration

将一个`duration`字段传递给`toast.add`方法，以更改吐司保持可见的时间（以毫秒为单位）。将其更改为`5000`。

::tip
将`duration`字段设置为`0`以保持吐司打开，直到手动关闭为止。
::

::component-example
---
可选项：
  - 名称：'持续时间'
    标签：'持续时间'
    默认值：0
    项目名称：
      091号
      1000英尺
      3000英尺
      5000英尺
名称：'祝酒词持续时间示例'
---
::

进度

传递`progress`字段以自订或隐藏[Progress](/docs/components/progress)长条图（具有`false`值）。

::tip
默认情况下，进度条会继承吐司颜色，但您可以使用`progress.color`字段覆盖它。
::

::component-example
---
名称：'toast-progress-example'
---
::

方向图

将`orientation`字段传递给`toast.add`方法以更改吐司的方向。

::component-example
---
可选项：
  - 名称：'方向'
    标签：'方向'
    默认值：“水平”
    项目名称：
      水平方向
      垂直方向
名称：'toast-orientation-example'
---
::

示例

::note{to="/docs/components/app"}
Nuxt UI提供了一个**App**组件，用于包装您的应用程序以提供全局配置。
::

### 更改全局位置

变更[App](/docs/components/app#props)元件上的`toaster.position`属性，以变更快显通知的位置。

```vue [app.vue]
<script setup lang="ts">
const toaster = { position: 'bottom-right' }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
更漂亮：真的
名称：'toast-example'
---

选项数
：烤面包机位置示例
::


### 更改全局持续时间

变更[App](/docs/components/app#props)元件上的`toaster.duration`属性，以变更快显通知的持续时间。

```vue [app.vue]
<script setup lang="ts">
const toaster = { duration: 5000 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
更漂亮：真的
名称：'toast-example'
---

选项数
：烤面包机-持续时间-示例
::


### 变更全域最大值：徽章{label="4.1+" class="align-text-top"}

变更[App](/docs/components/app#props)元件上的`toaster.max`属性，以变更一次显示的快显通知的最大数目。

```vue [app.vue]
<script setup lang="ts">
const toaster = { max: 3 }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::component-example
---
更漂亮：真的
名称：'toast-example'
---

选项数
：烤面包机-最大-示例
::


堆叠的祝酒辞

在[App](/docs/components/app#props)组件上将`toaster.expand`属性设置为`false`以显示堆叠的祝酒词（受[Sonner](https://sonner.emilkowal.ski/)的启发）。

```vue [app.vue]
<script setup lang="ts">
const toaster = { expand: true }
</script>

<template>
  <UApp :toaster="toaster">
    <NuxtPage />
  </UApp>
</template>
```

::tip
您可以将鼠标悬停在Toast上以将其展开。这也会暂停Toast的计时器。
::

::component-example
---
更漂亮：真的
名称：'toast-example'
---

选项数
：烤面包机-展开-示例
::


### 已删除重复项的Toast：徽标{label="4.5+" class="align-text-top"}

当使用已存在的`id`调用`toast.add`时，现有的吐司将跳动，而不是创建副本。

::component-example
---
收阖：true
名称：'toast-duplicate-example'
---
::

### 使用回调

传递一个`onUpdateOpen`字段，以便在吐司关闭（过期或用户解除）时执行回调。

::component-example
---
收阖：true
名称：'toast-callback-example'
---
::

### 使用HTML内容

在`title`或`description`字段中使用[`h()`呈现函数](https://vuejs.org/api/render-function.html#h)来呈现具有自定义样式的HTML元素或Vue组件。

::component-example
---
收阖：true
名称：'toast-html-example'
---
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

### 排放

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 207号公路|208号|

主题

：组件主题

## 变更日志

：组件更改日志
