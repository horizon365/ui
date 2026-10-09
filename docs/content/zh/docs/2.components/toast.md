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

## 用法

使用[useToast](/docs/composables/use-toast)可组合文件在应用程序中显示吐司。

::component-example
---
collapse: true
prettier: true
name: 'toast-example'
---
::

::warning
请确保使用[`App`](/docs/components/app)组件包装您的应用程序，该组件使用我们的[`Toaster`](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue)组件，该组件使用Reka UI中的[`ToastProvider`](https://reka-ui.com/docs/components/toast#provider)组件。
::

::tip{to="/docs/components/app#props"}
您可以查看`App`组件`toaster` prop以了解如何全局配置Toaster。
::

### 标题

将`title`字段传递给`toast.add`方法以显示标题。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
name: 'toast-title-example'
---
::

### 说明

将`description`字段传递给`toast.add`方法以显示说明。

::component-example
---
options:
  - name: 'title'
    label: 'title'
    default: 'Uh oh! Something went wrong.'
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-description-example'
---
::

### Icon

将`icon`字段传递给`toast.add`方法以显示[Icon](/docs/components/icon)。

::component-example
---
options:
  - name: 'icon'
    label: 'icon'
    default: 'i-lucide-wifi'
name: 'toast-icon-example'
---
::

### Avatar

将`avatar`字段传递给`toast.add`方法以显示[Avatar](/docs/components/avatar)。

::component-example
---
options:
  - name: 'avatar.src'
    alias: 'avatar'
    label: 'avatar.src'
    default:
      src: 'https://github.com/benjamincanac.png'
name: 'toast-avatar-example'
---
::

### Color

将`color`字段传递给`toast.add`方法以更改吐司的颜色。

::component-example
---
options:
  - name: 'color'
    label: 'color'
    default: neutral
    items:
      - primary
      - secondary
      - success
      - info
      - warning
      - error
      - neutral
name: 'toast-color-example'
---
::

### 关闭

传递`close`字段以自定义或隐藏关闭[Button](/docs/components/button)（具有`false`值）。

::component-example
---
name: 'toast-close-example'
---
::

### 关闭图标

传递一个`closeIcon`字段，将关闭按钮[Icon](/docs/components/icon).`i-lucide-x`自定义为`i-lucide-x`。

::component-example
---
options:
  - name: 'closeIcon'
    label: 'closeIcon'
    default: 'i-lucide-arrow-right'
name: 'toast-close-icon-example'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`下的`ui.icons.close`键全局自定义这个图标。
:::
::

### Actions

传递一个`actions`字段，向吐司添加一些[Button](/docs/components/button)操作。

::component-example
---
options:
  - name: 'description'
    label: 'description'
    default: 'There was a problem with your request.'
name: 'toast-actions-example'
---
::

### 持续时间

将`duration`字段传递给`toast.add`方法，以更改吐司保持可见的时间（以毫秒为单位）。

::tip
将`duration`字段设置为`0`，以保持吐司打开，直到手动关闭为止。
::

::component-example
---
options:
  - name: 'duration'
    label: 'duration'
    default: 0
    items:
      - 0
      - 1000
      - 3000
      - 5000
name: 'toast-duration-example'
---
::

### 进展

传递一个`progress`字段以自定义或隐藏[Progress](/docs/components/progress)条（具有`false`值）。

::tip
默认情况下，进度条继承吐司颜色，但您可以使用`progress.color`字段覆盖它。
::

::component-example
---
name: 'toast-progress-example'
---
::

### 定向

将`orientation`字段传递给`toast.add`方法以更改吐司的方向。

::component-example
---
options:
  - name: 'orientation'
    label: 'orientation'
    default: 'horizontal'
    items:
      - horizontal
      - vertical
name: 'toast-orientation-example'
---
::

## 示例

::note{to="/docs/components/app"}
Nuxt UI提供了一个**App**组件，可以包装您的应用以提供全局配置。
::

### 更改全局位置

更改[App](/docs/components/app#props)组件上的`toaster.position`道具以更改吐司的位置。

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
prettier: true
name: 'toast-example'
---

#options
:toaster-position-example
::


### 更改全局持续时间

更改[App](/docs/components/app#props)组件上的`toaster.duration`道具以更改祝酒的持续时间。

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
prettier: true
name: 'toast-example'
---

#options
:toaster-duration-example
::


### 更改全局最大值：badge{label="4.1+" class="align-text-top"}

更改[App](/docs/components/app#props)组件上的`toaster.max`道具，以更改一次显示的最大烤面包数。

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
prettier: true
name: 'toast-example'
---

#options
:toaster-max-example
::


### 堆叠吐司

在[App](/docs/components/app#props)组件上将`toaster.expand`属性设置为`false`，以显示堆叠的toast（灵感来自[Sonner](https://sonner.emilkowal.ski/)）。

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
您可以将鼠标悬停在祝酒词上来展开祝酒词。这也将暂停祝酒词的计时器。
::

::component-example
---
prettier: true
name: 'toast-example'
---

#options
:toaster-expand-example
::


### 重复数据消除的toasts：badgexp 275x

当使用已经存在的`id`调用`toast.add`时，现有的吐司将脉动而不是创建副本。

::component-example
---
collapse: true
name: 'toast-duplicate-example'
---
::

### 带回调

传递一个`onUpdateOpen`字段，以便在吐司关闭时（由于过期或用户解除）执行回调。

::component-example
---
collapse: true
name: 'toast-callback-example'
---
::

### 带有HTML内容

在`title`或`description`字段中使用[`h()`渲染函数](https://vuejs.org/api/render-function.html#h)，以自定义样式渲染HTML元素或Vue组件。

::component-example
---
collapse: true
name: 'toast-html-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### Expose

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `height`{lang="ts-type"}| `Ref<number>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
