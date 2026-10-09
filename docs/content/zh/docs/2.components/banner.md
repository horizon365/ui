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

## 用法

### 标题

使用`title`道具在Banner上显示标题。

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### Icon

使用`icon`道具在Banner上显示图标。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Color

使用`color`道具更改Banner的颜色。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### 关闭

使用`close`属性显示[Button](/docs/components/button)，以将Banner. banner关闭为`false`。

::tip
当单击关闭按钮时，将发出`close`事件。
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
关闭时，`banner-${id}`将存储在本地存储中，以防止再次显示。：br对于上面的示例，`banner-example`将存储在本地存储中。
::

::caution
要在页面重新加载时保持解除状态，必须指定`id`属性。如果没有显式的`id`，横幅将仅在当前会话中隐藏，并在页面重新加载时重新显示。
::

### 关闭图标

使用`close-icon`道具自定义关闭按钮[Icon](/docs/components/icon).`i-lucide-x`。

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

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
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.close`键下的`app.config.ts`中全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.close`键下全局自定义这个图标。
:::
::

### Actions

使用`actions`属性向Banner添加一些[Button](/docs/components/button)操作。

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
操作按钮默认为`color="neutral"`和`size="xs"`。您可以通过将这些值直接传递给每个操作按钮来自定义这些值。
::

### Link

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)组件传递任何属性，如`to`、`target`、`rel`等。

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
`NuxtLink`组件将继承您传递给`User`组件的所有其他属性。
::

## 示例

### 内部`app.vue`

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

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
