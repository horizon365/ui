---
title: 内容导航
description: '用于组织页面链接的手风琴样式导航组件。'
category: content
framework: nuxt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentNavigation.vue
---

::warning{to="/docs/getting-started/integrations/content"}
此组件仅在安装了`@nuxt/content`模块时可用。
::

## 用法

将`navigation`属性与获取应用程序导航时获得的`navigation`{lang="ts-type"}值配合使用。

::component-example
---
名称：'内容导航示例'
类别：'h-96溢出-y-自动'
overflowHidden：真的
道具：
  类别：'w-完整'
---
::

类型：

将`type`属性设定为`single`，一次只允许开启一个项目。预设值为`multiple`。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
外部：
  导航功能
外部类型：
  - ContentNavigationLink[]内容导航链接
项目名称：
  字体：
  - '单个'
  - '多个'
隐藏：
  班级
  导航功能
道具：
  类别：'w-完整'
  类型：'single'
  导航：
    - title：“指南”
      图标：“i-lucide-书本-打开”
      路径：'#开始使用'
      孩子们：
        - title：“简介”
          路径：'#introduction'
          活动：true
        - title：“安装”
          路径：'#installation'
    - title：“可合成内容”
      图标：“i-lucide-数据库”
      路径：'#composables'
      孩子们：
        - title：'定义快捷方式'
          路径：'#定义捷径'
        - title：'使用模式'
          路径：'#usemodal'
---
::

彩色的

使用`color`道具更改导航链接的颜色。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
外部：
  导航功能
外部类型：
  - ContentNavigationLink[]内容导航链接
隐藏：
  班级
  导航功能
道具：
  类别：'w-完整'
  颜色：“中性”
  导航：
    - title：“指南”
      图标：“i-lucide-书本-打开”
      路径：'#开始使用'
      孩子们：
      标题：“简介”
        路径：'#简介'
        活动：true
      标题：“安装”
        路径：'#installation'
    - title：“可合成内容”
      图标：“i-lucide-数据库”
      路径：'#composables'
      孩子们：
      - title：'定义快捷方式'
        路径：'#定义捷径'
      - title：'使用模态'
        路径：'#usemodal'
---
::

### 变体

使用`variant`道具更改导航链接的变体。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
外部：
  导航功能
外部类型：
  - ContentNavigationLink[]内容导航链接
隐藏：
  班级
  导航功能
项目名称：
  变体：
  - '链接'
  '药丸'
道具：
  类别：'w-完整'
  变体：'link'
  导航：
    @@标题：“指南”
      图标：“i-lucide-书本-打开”
      路径：'#开始使用'
      孩子们：
      标题：“简介”
        路径：'#introduction'
        活动：true
      标题：“安装”
        路径：'#installation'
    - title：“可合成内容”
      图标：“i-lucide-数据库”
      路径：'#composables'
      孩子们：
      - title：'定义快捷方式'
        路径：'#定义捷径'
      - title：“使用模态”
        路径：'#usemodal'
---
::

醒目提示

使用`highlight`道具显示活动链接的高亮边框。

使用`highlight-color`属性更改边框的颜色。默认为`color`属性。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
外部：
  导航功能
外部类型：
  - ContentNavigationLink[]内容导航链接
隐藏：
  班级
  导航功能
道具：
  类别：'w-完整'
  高亮显示：真
  highlightColor：“主要”
  颜色：'主要'
  变体：“pill”
  导航：
    - title：“指南”
      图标：“i-lucide-书本-打开”
      路径：'#开始使用'
      孩子们：
      标题：“简介”
        路径：'#introduction'
        活动：true
      标题：“安装”
        路径：'#installation'
    - title：“可合成内容”
      图标：“i-lucide-数据库”
      路径：'#composables'
      孩子们：
      - title：'定义快捷方式'
        路径：'#定义捷径'
      - title：'使用模态'
        路径：'#usemodal'
---
::

### 结尾图标

使用`trailing-icon`属性可自定义具有子项的项的尾部[Icon](/docs/components/icon)。默认值为`i-lucide-chevron-down`。

::component-code{prefix="content"}
---
更漂亮：真的
收阖：true
外部：
  导航功能
外部类型：
  - ContentNavigationLink[]内容导航链接
隐藏：
  班级
  导航功能
道具：
  类别：'w-完整'
  尾部图标：'i-透明箭头向上'
  导航：
    @@标题：“指南”
      图标：“i-lucide-书本-打开”
      路径：'#开始使用'
      孩子们：
      标题：“简介”
        路径：'#introduction'
        活动：true
      标题：“安装”
        路径：'#installation'
    - title：“可合成内容”
      图标：“i-lucide-数据库”
      路径：'#composables'
      孩子们：
      - title：'定义快捷方式'
        路径：'#定义捷径'
      “使用模式”
        路径：'#usemodal'
---
::

::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.chevronDown`键下的`app.config.ts`中全局自定义此图标。
::

示例

### 在布局中

在布局中使用[PageAside](/docs/components/page-aside)组件内的ContentNavigation组件可以显示页面导航：

```vue [layouts/docs.vue]{11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside>
        <UContentNavigation :navigation="navigation" highlight />
      </UPageAside>
    </template>

    <slot />
  </UPage>
</template>
```

### 在标题中

使用[Header](/docs/components/header)组件的`content`插槽内的ContentNavigation组件，可在移动的上显示页面导航：

```vue [components/Header.vue]{9-11}
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader>
    <template #body>
      <UContentNavigation :navigation="navigation" highlight />
    </template>
  </UHeader>
</template>
```

## 活性成分

### 道具

：组件-支柱

### 插槽

：组件插槽

### 排放

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志{prefix="content"}
