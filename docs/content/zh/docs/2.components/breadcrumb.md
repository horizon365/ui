---
description: 浏览网站的链接层次结构。
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

## 使用情况

使用Breadcrumb组件可显示当前页面在站点层次结构中的位置。

::component-code
---
收阖：true
忽略：
- 个项目
外部：
- 个项目
外部类型：
  - 面包屑项目[]
道具：
  项目名称：
    - 标签：“文档”
      图标：“i-lucide-书本-打开”
      到：'/docs'
    - 标签：“组件”
      图标：“i-lucide盒”
      到：'/docs/元件'
    - 标签：“面包屑”
      图标：“i-lucide链接”
      到：“/docs/组件/面包屑”
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

009年10月11日
我的天啊！
我的天啊！
@@小标题：小标题
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)组件传递任何属性，例如`to`、`target`等。

::component-code
---
忽略：
  项目
外部：
  项目名称
外部类型：
  - 面包屑项目[]
道具：
  项目名称：
    - 标签：“文档”
      图标：“i-lucide-书本-打开”
      到：'/docs'
    - label：'组件'
      图标：“i-lucide盒”
      到：“/docs/组件”
    - label：'面包屑'
      图标：“i-lucide链接”
      到：'/docs/components/breadcrumb'
---
::

::note
当未定义`to`属性时，呈现的是`span`而不是链接。
::

### Separator图标

使用`separator-icon`道具自定义[Icon](/docs/components/icon)之间的每个项目. push到`i-lucide-chevron-right`。

::component-code
---
忽略：
  - items
外部：
  - items
外部类型：
  - BreadcrumbItem[]
道具类：
  separatorIcon：'i-lucide-arrow-right'
  项目名称：
    - label：''
      图标：“i-lucide-书本-打开”
      到：'/docs'
    - label：'组件'
      图标：“i-lucide盒”
      到：'/docs/元件'
    - label：'面包屑'
      图标：“i-lucide链接”
      到：'/docs/components/breadcrumb'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.chevronRight`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.chevronRight`键下全局自定义此图标。
:::
::

### Color：badge{label="4.8+" class="align-text-top"}

使用`color`道具更改活动面包屑的颜色。

::component-code
---
忽略：
  - items
外部：
  - items
外部类型：
  - BreadcrumbItem[]
道具：
  color：'secondary'
  项目名称：
    - label：''
      图标：“i-lucide-书本-打开”
      到：'/docs'
    - label：'组件'
      图标：“i-lucide盒”
      到：“/docs/组件”
    - label：'面包屑'
      图标：“i-lucide链接”
      到：'/docs/components/breadcrumb'
---
::

## Examples

### With separator slot

使用`#separator`插槽自定义每个项目之间的分隔符。

：组件示例{name="breadcrumb-separator-slot-example"}

### With custom slot

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

：组件示例{name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
您还可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽自定义所有项目。
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
