---
description: '为您的网站导航提供响应式标题。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## 用法

Header组件呈现`<header>`元素。

::tip{to="/docs/getting-started/theme/css-variables#header"}
它的高度是透过`--ui-header-height` CSS变数定义。
::

使用`left`、`default`和`right`插槽自定义标题，使用`body`或`content`插槽自定义标题菜单。

::component-example
---
collapse: true
prettier: true
name: 'header-example'
class: '!px-0 !pt-0'
overflowHidden: true
props:
  class: 'w-full'
---
::

::note
在本例中，我们使用[NavigationMenu](/docs/components/navigation-menu)组件在中间呈现标题链接。
::

### 标题

使用`title`属性更改标题。默认为`Nuxt UI`。

::component-code
---
hide:
  - class
props:
  title: 'Nuxt UI'
  class: 'w-full'
class: '!px-0 !pt-0'
---
::

您也可以使用`title`插槽添加自己的徽标。

::tip{to="#props"}
您仍然应该添加`title`属性来替换链接的默认`aria-label`。
::

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
props:
  class: 'w-full'
slots:
  title: |

    <Logo class="h-6 w-auto" />
class: '!px-0 !pt-0'
---

#title
:logo{class="h-6 w-auto"}
::

至

使用`to`道具更改标题链接。默认为`/`。

::component-code
---
hide:
  - class
class: '!px-0 !pt-0'
props:
  to: '/docs'
  class: 'w-full'
---
::

您也可以使用`left`插槽来完全覆盖链接。

::component-code
---
prettier: true
overflowHidden: true
hide:
  - class
class: '!px-0 !pt-0'
props:
  class: 'w-full'
slots:
  left: |

    <NuxtLink to="/docs">
      <Logo class="h-6 w-auto" />
    </NuxtLink>
---

#left
::nuxt-link{to="/docs"}
:logo{class="h-6 w-auto"}
::
::

模式

使用`mode`属性更改标题菜单的模式。默认为`modal`。

使用`body`插槽填充菜单主体（在标题下），或使用`content`插槽填充整个菜单。

::tip{to="#props"}
您可以使用`menu`道具自定义标题的菜单，它将根据您选择的模式进行调整。
::

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-menu-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'drawer'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

### 切换

使用`toggle`道具自定义移动的上显示的切换按钮。

您可以从[Button](/docs/components/button)组件传递任何属性，以自订该组件。

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-example'
props:
  class: 'w-full'
---
::

### 切换侧边

使用`toggle-side`道具更改切换按钮的边。默认为`right`。

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-side-example'
props:
  class: 'w-full'
---
::

## 示例

### 带动画切换

使用[Motion Vue](https://motion.dev/docs/vue/motion-component)，使用`#toggle`插槽将默认切换按钮替换为自定动画汉堡图标。

::component-example
---
collapse: true
iframe:
  height: 300px;
iframeMobile: true
overflowHidden: true
name: 'header-toggle-animated-example'
props:
  class: 'w-full'
---
::

### 在`app.vue`内

在`app.vue`或布局中使用Header组件：

```vue [app.vue]{28-51}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Docs',
  to: '/docs/getting-started',
  active: route.path.startsWith('/docs/getting-started')
}, {
  label: 'Components',
  to: '/docs/components',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Figma',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}])
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />

        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

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

### 发射

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
