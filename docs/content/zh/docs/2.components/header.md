---
description: '为您的网站导航提供响应式标题。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Header.vue
---

## 使用情况

Header组件会呈现`<header>`元素。

::tip{to="/docs/getting-started/theme/css-variables#header"}
它的高度是透过`--ui-header-height`CSS变数定义。
::

使用`left`、`default`和`right`插槽来自定义标题，使用`body`或`content`插槽来自定义标题菜单。

::component-example
---
收阖：true
更漂亮：真的
名称：'标题-示例'
类：“！px-0！pt-0”
overflowHidden：真的
道具：
  类别：'w-完整'
---
::

::note
在这个范例中，我们使用[NavigationMenu](/docs/components/navigation-menu)组件来呈现中央的标题链接。
::

### 标题

使用`title`属性来变更页首的标题。预设为`Nuxt UI`。

::component-code
---
隐藏：
  第15课
道具：
  标题：'Nuxt UI'
  类别：'w-完整'
类：“！px-0！pt-0”
---
::

您也可以使用`title`插槽来添加您自己的徽标。

::tip{to="#props"}
您仍应添加`title`道具来替换链接的默认`aria-label`。
::

::component-code
---
更漂亮：真的
overflowHidden：真的
隐藏：
  班级
道具：
  类别：'w-完整'
插槽：
  标题：|

<Logo class="h-6 w-auto" />的
类：“！px-0！pt-0”
---

#标题
：徽标{class="h-6 w-auto"}
::

至

使用`to`道具更改标题链接。默认为`/`。

::component-code
---
隐藏：
  班级
类：“！px-0！pt-0”
道具：
  到：'/docs'
  类别：'w-完整'
---
::

您也可以使用`left`插槽完全覆盖链接。

::component-code
---
更漂亮：真的
overflowHidden：真的
隐藏：
  班级
类：“！px-0！pt-0”
道具：
  类别：'w-完整'
插槽：
  左：|

    028号
      029号
    030秒
---

#左
::nuxt-link{to="/docs"}
：徽标{class="h-6 w-auto"}
::
::

模式

使用`mode`属性更改标题菜单的模式。默认为`modal`。

请使用`body`插槽来填满功能表主体（在标题下方），或使用`content`插槽来填满整个功能表。

::tip{to="#props"}
您可以使用`menu`道具自定义标题菜单，它将根据您选择的模式进行调整。
::

::component-example
---
收阖：true
iframe：
  高度：300 px;
iframeMobile：真的
overflowHidden：真的
名称：'标题菜单示例'
可选项：
  名称：'模式'
    标签：'模式'
    默认值：'drawer'
    项目名称：
      模式
      滑动鼠标
      抽屉
道具：
  类别：'w-完整'
---
::

开关

使用`toggle`道具自定义移动的上显示的切换按钮。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-example
---
收阖：true
iframe：
  高度：300px;
iframeMobile：真的
overflowHidden：真的
名称：'标题-切换-示例'
道具：
  类别：'w-完整'
---
::

切换侧边

使用`toggle-side`道具来变更切换按钮的侧边。预设值为`right`。

::component-example
---
收阖：true
iframe：
  高度：300px;
iframeMobile：真的
overflowHidden：真的
名称：'标题-切换-侧-示例'
道具：
  类别：'w-完整'
---
::

示例

使用动画切换

使用`#toggle`插槽，使用[Motion Vue](https://motion.dev/docs/vue/motion-component)将默认切换按钮替换为自定动画汉堡图标。

::component-example
---
收阖：true
iframe：
  高度：300px;
iframeMobile：真的
overflowHidden：真的
名称：'标题-切换-动画-示例'
道具：
  类别：'w-完整'
---
::

在`app.vue`范围内

在`app.vue`或布局中使用页眉组件：

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

## 活性成分

### 道具

：组件-支柱

### 插槽

：组件插槽

### 发射

：组件发射

主题

：组件主题

## Changelog

：组件更改日志
