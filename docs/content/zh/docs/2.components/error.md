---
description: '预构建的错误组件，支持NuxtError。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## 使用情况

Error组件呈现`<main>`元素，该元素与[Header](/docs/components/header)组件一起使用，以创建扩展到视口的可用高度的全高布局。

::tip{to="/docs/getting-started/theme/css-variables#header"}
Error组件使用`--ui-header-height`CSS变量将其自身正确定位在`Header`下方。
::

错误

使用`error`属性显示错误消息。

::framework-only
#nuxt（无文本）
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
在大多数情况下，您会在`error.vue`文件中收到`error`道具。
::
::

::component-code
---
隐藏：
  班级
更漂亮：真的
道具：
  错误类型：
    状态代码：404
    页面未找到页面未找到
    404-页面不存在页面不存在.返回首页
  类：“！min-h-96”
---
::

### 图标：徽标{label="4.8+" class="align-text-top"}

使用`icon`道具在状态代码上方显示图标。

::component-code
---
隐藏：
  班级
更漂亮：真的
忽略：
  - 错误.状态代码
  - 错误.状态消息
  错误消息
道具：
  图标：“i-lucide-文件-x”
  错误类型：
    状态代码：404
    页面未找到页面未找到
    404-页面不存在页面不存在.返回首页
  类：“！min-h-96”
---
::

使用`#leading`插槽显示自定义元素，如徽标。

::component-code
---
隐藏：
  班级
更漂亮：真的
忽略：
  - 错误.状态代码
  - 错误.状态消息
  错误消息
道具：
  错误类型：
    状态代码：404
    页面未找到页面未找到
    404-页面不存在页面不存在.返回首页
  类："! min-h-96"
插槽：
  行距：|

    025号
---
#行距
：img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### 清除

使用`clear`属性自定义或隐藏清除按钮（值为`false`）。

您可以从[Button](/docs/components/button)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  - 错误.状态代码
  - 错误.状态消息
  错误消息
  透明色
  - 清除.大小
  清除.图标
  清除类
道具：
  清除：
    颜色：中性
    尺寸：xl
    图标：i-lucide-箭头-左
    类别：'四舍五入-完整'
  错误类型：
    状态代码：404
    页面未找到页面未找到
    404-页面不存在页面不存在.返回首页
  类："! min-h-96"
---
::

### 重定向

单击清除按钮时，使用`redirect`属性可将用户重定向到其他页面。默认为`/`。

::component-code
---
更漂亮：真的
隐藏：
  - class
忽略：
  - error.statusCode
  - error.statusMessage
  - error.message
道具：
  重定向：'/docs/getting-started'
  错误类型：
    状态代码：404
    页面未找到页面未找到
    404-页面不存在页面不存在.返回首页
  类：“！min-h-96”
---
::

## Examples

### `error.vue`内

使用`error.vue`中的错误组件：

```vue [error.vue]{13}
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <UApp>
    <UHeader />

    <UError :error="error" />

    <UFooter />
  </UApp>
</template>
```

::tip
您可能希望在`error.vue`文件中复制`app.vue`的代码，以具有相同的布局和功能，例如：<https://github.com/nuxt/ui/blob/v4/docs/app/error.vue>
::

::note
您可以在[Nuxt文档中阅读有关如何处理错误的详细信息](https://nuxt.com/docs/getting-started/error-handling#error-page)，但在使用`nuxt generate`时，建议在您的`createError`调用中添加`fatal: true`，以确保显示错误页面：

```vue [pages/\[...slug\\].vue]
<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>
```

::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
