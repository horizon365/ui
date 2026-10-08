---
description: '在网站顶部显示横幅，告知用户重要信息。'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## 使用情况

标题：

使用`title`道具在横幅上显示标题。

::component-code
---
更漂亮：真的
类：“！p-0”
道具：
  title：“这是一条带有重要信息的横幅。”
---
::

### 图标

使用`icon`道具在横幅上显示图标。

::component-code
---
更漂亮：真的
类：“！p-0”
忽略：
  标题：
道具：
  图标：i-lucide信息
  title：'这是一个带有图标的横幅。'
---
::

彩色的

使用`color`道具更改横幅的颜色。

::component-code
---
更漂亮：真的
类：“！p-0”
忽略：
- 图标
  标题
道具：
  颜色：“中性”
  图标：i-lucide-信息
  title：'这是一个带有图标的横幅。'
---
::

### 关闭

使用`close`道具来显示[按钮](/docs/components/button)以关闭横幅。预设值为`false`。

::tip
按一下关闭按钮时，将会发出`close`事件。
::

::component-example
---
iframe：
  样式：'高度：48 px;'
overflowHidden：真的
名称：'banner-example'
---
#代码

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
关闭后，`banner-${id}`将存储在本地存储中，以防止再次显示。：br对于上面的示例，`banner-example`将存储在本地存储中。
::

::caution
若要在页面重新载入时保持已解除状态，您必须指定`id`属性。如果没有明确的`id`，则横幅只会在目前的工作阶段中隐藏，并会在页面重新载入时重新出现。
::

### 关闭图标

使用`close-icon`道具来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-example
---
iframe：
  样式：'高度：48 px;'
overflowHidden：真的
名称：'banner-example'
道具：
  title：'这是一个带有自定义关闭图标的可关闭横幅。'
  关闭图标：'i-透明-x-圆圈'
---
#代码

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

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

操作

使用`actions`道具将一些[按钮](/docs/components/button)动作添加到横幅中。

::component-code
---
更漂亮：真的
类：“！p-0”
忽略：
  标题：
  操作
- 变体
外部：
  操作
外部类型：
  - 按钮属性[]
道具：
  title：'这是一个包含操作的横幅。'
  动作：
    标签：操作1
      变体：轮廓
    标签：操作2
      拖尾图标：i-透明箭头-右
---
::

::note
动作按钮的预设值为`color="neutral"`和`size="xs"`。您可以将这些值直接传递给每个动作按钮，以自订这些值。
::

链接到

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)元件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
类：“！p-0”
overflowHidden：真的
忽略：
  标题：
  目标位置
道具：
  至：'https：//nuxtlabs.com/'
  目的：'_blank'
  标题：“NuxtLabs加入Vercel！”
  color：'primary'
---
::

::note
`NuxtLink`组件将继承您传递给`User`组件的所有其他属性。
::

## 示例

### `app.vue`内

在`app.vue`或布局中使用Banner组件：

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
