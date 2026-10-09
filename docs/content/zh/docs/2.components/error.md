---
description: '预构建的错误组件，支持NuxtError。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Error.vue
---

## 用法

Error组件呈现一个`<main>`元素，该元素与[Header](/docs/components/header)组件一起工作，以创建一个扩展到视口可用高度的全高布局。

::tip{to="/docs/getting-started/theme/css-variables#header"}
Error组件使用`--ui-header-height` CSS变量将其自身正确定位在`Header`下方。
::

### Error

使用`error`属性显示错误消息。

::framework-only
#nuxt
::note{to="https://nuxt.com/docs/guide/directory-structure/error" target="_blank"}
在大多数情况下，您将在`error.vue`文件中收到`error`属性。
::
::

::component-code
---
hide:
  - class
prettier: true
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### 图标：badge{label="4.8+" class="align-text-top"}

使用`icon`道具在状态代码上方显示图标。

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  icon: 'i-lucide-file-x'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

使用`#leading`插槽显示自定义元素，如徽标。

::component-code
---
hide:
  - class
prettier: true
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
slots:
  leading: |

    <img src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full">
---
#leading
:img{src="https://github.com/nuxt.png" alt="Logo" class="size-10 rounded-full"}
::

### Clear

使用`clear`属性自定义或隐藏清除按钮（使用`false`值）。

您可以从[Button](/docs/components/button)组件传递任何属性来对其进行自定义。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
  - clear.color
  - clear.size
  - clear.icon
  - clear.class
props:
  clear:
    color: neutral
    size: xl
    icon: i-lucide-arrow-left
    class: 'rounded-full'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

### 重定向

使用`redirect`属性在点击清除按钮时将用户重定向到另一个页面。

::component-code
---
prettier: true
hide:
  - class
ignore:
  - error.statusCode
  - error.statusMessage
  - error.message
props:
  redirect: '/docs/getting-started'
  error:
    statusCode: 404
    statusMessage: 'Page not found'
    message: 'The page you are looking for does not exist.'
  class: '!min-h-96'
---
::

## 示例

### 内部`error.vue`

在`error.vue`中使用Error组件：

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
您可以在[Nuxt文档](https://nuxt.com/docs/getting-started/error-handling#error-page)中阅读更多有关如何处理错误的信息，但在使用`nuxt generate`时，建议在`createError`调用中添加`fatal: true`，以确保显示错误页面：

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

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
