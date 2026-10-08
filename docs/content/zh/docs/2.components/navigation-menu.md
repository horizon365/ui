---
title: 导航菜单
description: 可以水平或垂直显示的链接列表。
category: navigation
keywords:
  - navbar
  - menubar
  - sidebar navigation
links:
  - label: 导航菜单
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/navigation-menu
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/NavigationMenu.vue
---

## 使用情况

使用NavigationMenu组件可以水平或垂直显示链接列表。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
- 个项目
外部：
- 个项目
外部类型：
  - 导航菜单项[]
道具：
  项目名称：
    - 标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 标签：简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：'图标'
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
        - 标签：“颜色”
          图标：“i-lucide-色板-书本”
          description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
        - 标签：“主题”
          图标：“i-lucide-cog”
          说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
    - 标签：可合成材料
      图标：i-lucide数据库
      至：/docs/可组合
      孩子们：
        - 标签：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的捷径。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
        - 标签：链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - 标签：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        - 标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
        标签：弹出窗口
          图标：i-lucide文件文本
          description：显示一个浮动在触发器元素周围的非模式对话框。
          到：/docs/组件/弹出窗口
        标签：进度
          图标：i-lucide文件文本
          说明：显示一个水平条以指示任务进度。
          到：/docs/组件/进度
    @@标签：GitHub
      图标：i-simple-图标-github
      徽章：6 k
      发送至：https://github.com/nuxt/ui
      目标：空白（_B）
    - 标签：帮助
      图标：i-lucide-圆圈帮助
      已禁用：true
  类别：'w-完全对齐-置中'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
@@小标题：小标题：小标题
我的天啊，我的天啊
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！我的天啊
我的天啊！
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
收阖：true
忽略：
  104个项目
  105级
外部：
  106个项目
外部类型：
  - Navigation（导航）菜单项[]
道具：
  项目名称：
- 标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：“图标”
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
        - 标签：“颜色”
          图标：“i-lucide-色板-书本”
          description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
        - 标签：“主题”
          图标：“i-lucide-cog”
          说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
    - 标签：可合成材料
      图标：i-lucide数据库
      至：/docs/可组合
      孩子们：
        - label：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的捷径。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包机
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
- 标签：链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - 标签：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        @@标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
        标签：弹出窗口
          图标：i-lucide文件文本
          description：显示一个浮动在触发器元素周围的非模式对话框。
          到：/docs/组件/弹出窗口
        @标签：进度
          图标：i-lucide文件文本
          说明：显示一个水平条以指示任务进度。
          到：/docs/组件/进度
    @标签：GitHub
      图标：i-simple-图标-github
      徽章：6 k
      发送至：https://github.com/nuxt/ui
      目标：空白（_B）
    - 标签：帮助
      图标：i-lucide-圆圈帮助
      已禁用：true
  类别：'w-完全对齐-置中'
---
::

::note
您也可以将数组的数组传递给`items`属性，以显示项目群组。
::

::tip
每个项目都可以使用具有下列属性的`children`物件数组来建立子功能表：

131号，132号
134号公路
135小时136小时
137号，138号
- 小时`class?: any`小时

::

方向

使用`orientation`属性更改导航菜单的方向。

::note
当方向为`vertical`时，一个[Accordion](/docs/components/accordion)组件用于显示每个组。您可以使用`open`和`defaultOpen`属性来控制每个项的打开状态，并使用[`collapsible`](/docs/components/accordion#collapsible来更改其行为)和[`type`](/docs/components/accordion#multiple)道具。
::

::note
当方向为`vertical`且菜单不是`collapsed`时，子项将递归呈现为项，因此`ui.link`为其设置样式。`ui.childLink`仅适用于以`horizontal`方向显示的`content`，以及`collapsed`显示时的[popover](#with-popover-in-items)。
::

::component-code
---
收阖：true
忽略：
  171个项目
  172级
外部：
  173个项目
外部类型：
  - 导航菜单项[][]
道具：
  方向：'垂直'
  项目名称：
    - -标签：链接
        类型：'label'
      @标签：指南
        图标：i-lucide-书本-打开
        孩子们：
- 简介
            描述：Nuxt的完全样式化和可定制的组件。
            图标：i-lucide-house
          @@标签：安装
            说明：了解如何在应用程序中安装和配置Nuxt UI。
            图标：i-lucide云下载
          - 标签：“图标”
            图标：“我-透明-微笑”
            description：'您无事可做，@nuxt/icon将自动处理。'
          - 标签：“颜色”
            图标：“i-lucide-色板-书本”
            description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
          - 标签：“主题”
            图标：“i-lucide-cog”
            说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
      - 标签：可合成材料
        图标：i-lucide数据库
        孩子们：
          - label：定义快捷方式
            图标：i-lucide文件文本
            描述：定义应用程序的捷径。
            到：/docs/可组合/定义快捷方式
          - 标签：使用覆盖
            图标：i-lucide文件文本
            描述：在你的应用程序中显示一个模式/滑动窗口。
            到：/docs/可合成/使用覆盖
          - 标签：使用烤面包
            图标：i-lucide文件文本
            描述：在应用程序中显示吐司。
            到：/docs/可合成/use-toast
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        类型：'触发器'
        活动：true
        默认打开：true
        孩子们：
          @@标签：链接
            图标：i-lucide文件文本
            使用NuxtLink的超能力。
            到：/docs/组件/链接
          - 标签：莫代尔
            图标：i-lucide文件文本
            描述：在应用程序中显示一个模式。
            到：/docs/组件/模态
          - label：导航菜单
            图标：i-lucide文件文本
            description：显示链接列表。
            到：/docs/组件/导航菜单
          @@标签：分页
            图标：i-lucide文件文本
            description：显示页面列表。
            到：/docs/组件/分页
          标签：弹出窗口
            图标：i-lucide文件文本
            description：显示一个浮动在触发器元素周围的非模式对话框。
            到：/docs/组件/弹出窗口
          @标签：进度
            图标：i-lucide文件文本
            说明：显示一个水平条以指示任务进度。
            到：/docs/组件/进度
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
- 标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
  类：'数据-[方向=垂直]：w-48'
---
::

::note
当方向为`horizontal`时，组将被隔开;当方向为`vertical`时，组将被分隔。
::

已折叠

在`vertical`方向中，使用`collapsed`道具折叠NavigationMenu，例如，这在侧栏中非常有用。

::note
您可以使用[`tooltip`](#with-tooltip-in-items)和[`popover`](#with-popover-in-items)道具来显示有关折叠项目的更多信息。
::

::component-code
---
收阖：true
忽略：
  212个项目
  定位
  214班
外部：
  215个项目
外部类型：
  - 导航菜单项[][]
项目名称：
  工具提示：
    真的
    错误的
  弹出窗口：
    真的
    错误的
道具：
  折叠：true
  工具提示：假
  弹出窗口：false
  方向：'垂直'
  项目名称：
    - -标签：链接
        类型：'label'
- 标签：指南
        图标：i-lucide-书本-打开
        孩子们：
- 简介
            描述：Nuxt的完全样式化和可定制的组件。
            图标：i-lucide-house
- 标签：安装
            说明：了解如何在应用程序中安装和配置Nuxt UI。
            图标：i-lucide-云下载
          - 标签：“图标”
            图标：“我-透明-微笑”
            description：'您无事可做，@nuxt/icon将自动处理。'
          - 标签：“颜色”
            图标：“i-lucide-色板-书本”
            description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
          标签：“主题”
            图标：“i-lucide-cog”
            说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
      - 标签：可合成材料
        图标：i-lucide数据库
        孩子们：
          - label：定义快捷方式
            图标：i-lucide文件文本
            描述：定义应用程序的快捷方式。
            到：/docs/可组合/定义快捷方式
          - 标签：使用覆盖
            图标：i-lucide文件文本
            描述：在你的应用程序中显示一个模式/滑动窗口。
            到：/docs/可合成/使用覆盖
          - 标签：使用烤面包机
            图标：i-lucide文件文本
            描述：在应用程序中显示吐司。
            到：/docs/可合成/use-toast
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
        孩子们：
          @@标签：链接
            图标：i-lucide文件文本
            使用NuxtLink的超能力。
            到：/docs/组件/链接
          - 标签：莫代尔
            图标：i-lucide文件文本
            描述：在应用程序中显示一个模式。
            到：/docs/组件/模态
          - label：导航菜单
            图标：i-lucide文件文本
            description：显示链接列表。
            到：/docs/组件/导航菜单
          @@标签：分页
            图标：i-lucide文件文本
            description：显示页面列表。
            到：/docs/组件/分页
          标签：弹出窗口
            图标：i-lucide文件文本
            description：显示一个浮动在触发器元素周围的非模式对话框。
            到：/docs/组件/弹出窗口
          - 标签：进度
            图标：i-lucide文件文本
            说明：显示一个水平条以指示任务进度。
            到：/docs/组件/进度
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
- 标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
---
::

醒目提示

使用`highlight`道具来显示现用项目的反白边框。

使用`highlight-color`属性更改边框的颜色。默认为`color`属性。

::component-code
---
收阖：true
更漂亮：真的
忽略：
  247个项目
  班级
外部：
  249个项目
外部类型：
  - 导航菜单项[][]
道具：
  高亮显示：真
  highlightColor：“主要”
  方向：'水平'
  项目名称：
    - -标签：指南
        图标：i-lucide-书本-打开
        孩子们：
- 简介
            描述：Nuxt的完全样式化和可定制的组件。
            图标：i-lucide-house
          @@标签：安装
            说明：了解如何在应用程序中安装和配置Nuxt UI。
            图标：i-lucide云下载
          - 标签：“图标”
            图标：“我-透明-微笑”
            description：'您无事可做，@nuxt/icon将自动处理。'
          @@标签：“颜色”
            图标：“i-lucide-色板-书本”
            description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
          @@标签：“主题”
            图标：“i-lucide-cog”
            说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
      - label：可合成材料
        图标：i-lucide数据库
        孩子们：
          - label：定义快捷方式
            图标：i-lucide文件文本
            描述：定义应用程序的快捷方式。
            到：/docs/可组合/定义快捷方式
          - 标签：使用覆盖
            图标：i-lucide文件文本
            描述：在你的应用程序中显示一个模式/滑动窗口。
            到：/docs/可合成/使用覆盖
          - 标签：使用烤面包
            图标：i-lucide文件文本
            描述：在应用程序中显示吐司。
            到：/docs/可合成/use-toast
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
        默认打开：true
        孩子们：
          @@标签：链接
            图标：i-lucide文件文本
            使用NuxtLink的超能力。
            到：/docs/组件/链接
          - 标签：莫代尔
            图标：i-lucide文件文本
            描述：在应用程序中显示一个模式。
            到：/docs/组件/模态
          - label：导航菜单
            图标：i-lucide文件文本
            description：显示链接列表。
            到：/docs/组件/导航菜单
          分页
            图标：i-lucide文件文本
            description：显示页面列表。
            到：/docs/组件/分页
          @@标签：弹出
            图标：i-lucide文件文本
            description：显示一个浮动在触发器元素周围的非模式对话框。
            到：/docs/组件/弹出窗口
          @标签：进度
            图标：i-lucide文件文本
            说明：显示一个水平条以指示任务进度。
            到：/docs/组件/进度
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
- 标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
  类：'数据-[方向=水平]：边框-B边框-默认数据-[方向=水平]：w-完整数据-[方向=垂直]：w-48'
---
::

::note
在这个范例中，`border-b`类别会套用至以`horizontal`方向显示框缐，但预设情况下不会这样做，让您有一个全新的平台来使用。
::

::caution
在`vertical`方向中，`highlight`道具仅突出显示活动子项的边框。
::

颜色

使用`color`道具更改导航菜单的颜色。

::component-code
---
收阖：true
忽略：
  278个项目
  班级
外部：
  280个项目
外部类型：
  - 导航菜单项[][]
道具：
  颜色：中性
  项目名称：
    - -标签：指南
        图标：i-lucide-书本-打开
        到：/docs/开始使用
      - 标签：可合成材料
        图标：i-lucide数据库
        至：/docs/可组合
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6k
        发送至：www.example.com
        目标：空白（_B）
  类别：'w-完整'
---
::

### 变体

使用`variant`属性更改导航菜单的变体。

::component-code
---
收阖：true
忽略：
  288个项目
  班级
外部：
  290个项目
外部类型：
  - 导航菜单项[][]
道具：
  颜色：中性
  变体：链接
  突出显示：假
  项目名称：
    - -标签：指南
        图标：i-lucide-书本-打开
        到：/docs/开始使用
      - 标签：可合成材料
        图标：i-lucide数据库
        至：/docs/可组合
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
  类别：'w-完整'
---
::

::note
`highlight`道具会变更`pill`变体作用中项目样式。请尝试一下，看看有何不同。
::

### 结尾图标

使用`trailing-icon`属性可自定义每个项的尾部[Icon](/docs/components/icon)。默认值为`i-lucide-chevron-down`。仅当项具有子项时，才会显示此图标。

::tip
您也可以使用item物件中的`trailingIcon`属性来设定特定项目的图标。
::

::component-code
---
收阖：true
忽略：
- 个项目
  班级
外部：
- 个项目
外部类型：
  - 导航菜单项[]
道具：
  尾部图标：'i-lucide-箭头向下'
  项目名称：
- 标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：“图标”
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
        - 标签：“颜色”
          图标：“i-lucide-色板-书本”
          description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
        - 标签：“主题”
          图标：“i-lucide-cog”
          说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
    - 标签：可合成材料
      图标：i-lucide数据库
      至：/docs/可组合
      孩子们：
        - label：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的捷径。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包机
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
        链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - label：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        - 标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
        标签：弹出窗口
          图标：i-lucide文件文本
          description：显示一个浮动在触发器元素周围的非模式对话框。
          到：/docs/组件/弹出窗口
        - 标签：进度
          图标：i-lucide文件文本
          说明：显示一个水平条以指示任务进度。
          到：/docs/组件/进度
  类别：'w-完全对齐-置中'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.chevronDown`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.chevronDown`键下的`vite.config.ts`中全局自定义此图标。
:::
::

箭头

当项目有子项时，使用`arrow`属性在NavigationMenu内容上显示箭头。

::component-code
---
收阖：true
忽略：
- 个项目
  箭头
  班级
外部：
- 个项目
外部类型：
  - 导航菜单项[]
道具：
  箭头：true
  项目名称：
- 标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：“图标”
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
        @@标签：“颜色”
          图标：“i-lucide-色板-书本”
          description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
        标签：“主题”
          图标：“i-lucide-cog”
          说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
    - 标签：可合成材料
      图标：i-lucide数据库
      到：/docs/可组合
      孩子们：
        - label：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的快捷方式。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包机
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
        @@标签：链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - label：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        @@标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
        标签：弹出窗口
          图标：i-lucide文件文本
          description：显示一个浮动在触发器元素周围的非模式对话框。
          到：/docs/组件/弹出窗口
        @标签：进度
          图标：i-lucide文件文本
          说明：显示一个水平条以指示任务进度。
          到：/docs/组件/进度
  类别：'w-完全对齐-置中'
---
::

::note
箭头将被设置为跟随活动项目。
::

内容导向

使用`content-orientation`道具更改内容的方向。

::warning
此道具仅在`orientation`为`horizontal`时有效。
::

::component-code
---
收阖：true
忽略：
- 个项目
  箭头
  班级
外部：
- 个项目
外部类型：
  - 导航菜单项[]
道具：
  箭头：true
  内容方向：'垂直'
  项目名称：
- 标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：“图标”
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
    - 标签：可合成材料
      图标：i-lucide数据库
      至：/docs/可组合
      孩子们：
        - label：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的快捷方式。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
        @@标签：链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - label：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        @@标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
  类别：'w-完全对齐-置中'
---
::

### 卸载

使用`unmount-on-hide`属性来控制内容卸载行为。预设为`true`。

::component-code
---
收阖：true
忽略：
- 个项目
  箭头
  班级
外部：
  387个项目
外部类型：
  - 导航菜单项[]
道具：
  隐藏时卸载：假
  项目名称：
    @标签：指南
      图标：i-lucide-书本-打开
      到：/docs/开始使用
      孩子们：
- 简介
          描述：Nuxt的完全样式化和可定制的组件。
          图标：i-lucide-house
- 标签：安装
          说明：了解如何在应用程序中安装和配置Nuxt UI。
          图标：i-lucide云下载
        - 标签：“图标”
          图标：“我-透明-微笑”
          description：'您无事可做，@nuxt/icon将自动处理。'
        @@标签：“颜色”
          图标：“i-lucide-色板-书本”
          description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
        @@标签：“主题”
          图标：“i-lucide-cog”
          说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
    - 标签：可合成材料
      图标：i-lucide数据库
      至：/docs/可组合
      孩子们：
        - label：定义快捷方式
          图标：i-lucide文件文本
          描述：定义应用程序的捷径。
          到：/docs/可组合/定义快捷方式
        - 标签：使用覆盖
          图标：i-lucide文件文本
          描述：在你的应用程序中显示一个模式/滑动窗口。
          到：/docs/可合成/使用覆盖
        - 标签：使用烤面包机
          图标：i-lucide文件文本
          描述：在应用程序中显示吐司。
          到：/docs/可合成/use-toast
    @@标签：组件
      图标：i-lucide-box（液晶盒）
      到：/docs/组件
      活动：true
      孩子们：
- 标签：链接
          图标：i-lucide文件文本
          使用NuxtLink的超能力。
          到：/docs/组件/链接
        - 标签：莫代尔
          图标：i-lucide文件文本
          描述：在应用程序中显示一个模式。
          到：/docs/组件/模态
        - label：导航菜单
          图标：i-lucide文件文本
          description：显示链接列表。
          到：/docs/组件/导航菜单
        @@标签：分页
          图标：i-lucide文件文本
          description：显示页面列表。
          到：/docs/组件/分页
        标签：弹出窗口
          图标：i-lucide文件文本
          description：显示一个浮动在触发器元素周围的非模式对话框。
          到：/docs/组件/弹出窗口
        - 标签：进度
          图标：i-lucide文件文本
          说明：显示一个水平条以指示任务进度。
          到：/docs/组件/进度
  类别：'w-完全对齐-置中'
---
::

::note
您可以检查DOM以查看呈现的每个项的内容。
::

示例

### 控制活动项目

您可以使用`default-value`属性或`v-model`指示词搭配项目的`value`来控制使用中的项目。如果未提供`value`，则最上层项目的预设值为`item-${index}`，巢状项目的预设值为`item-${level}-${index}`。

::component-example
---
收阖：true
名称：'导航菜单-模型-值-示例'
---
::

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项目的密钥。
::

::note
在此示例中，利用[`defineShortcuts`](/docs/composables/define-shortcuts)，您可以通过按下：kbd{value="1"}、：kbd{value="2"}或：kbd{value="3"}来切换活动项目。
::

### 在项目中包含工具提示

当方向为`vertical`且菜单为`collapsed`时，您可以将`tooltip`属性设置为`true`，以便在带有标签的项周围显示[Tooltip](/docs/components/tooltip)，但您也可以在每个项上使用`tooltip`属性来覆盖默认的工具提示。在`horizontal`方向，您可以在每个项目上使用`tooltip`属性，以在项目周围显示[Tooltip](/docs/components/tooltip)。

::note
无论全局`tooltip`属性如何，项目上的`tooltip`属性将始终显示工具提示。
::

您可以从[Tooltip](/docs/components/tooltip)组件全局传递任何属性，也可以在每个项上传递。

::component-code
---
收阖：true
忽略：
  449个项目
- 级
外部：
  451个项目
外部类型：
  - 导航菜单项[][]
项目名称：
  工具提示：
    真的
    错误的
道具：
  工具提示：true
  折叠：true
  方向：'垂直'
  项目名称：
    - -标签：链接
        类型：'label'
- 标签：指南
        图标：i-lucide-书本-打开
        孩子们：
- 简介
            描述：Nuxt的完全样式化和可定制的组件。
            图标：i-lucide-house
          @@标签：安装
            说明：了解如何在应用程序中安装和配置Nuxt UI。
            图标：i-lucide-云下载
          - 标签：“图标”
            图标：“我-透明-微笑”
            description：'您无事可做，@nuxt/icon将自动处理。'
          - 标签：“颜色”
            图标：“i-lucide-色板-书本”
            description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
          @@标签：“主题”
            图标：“i-lucide-cog”
            说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
      - 标签：可合成材料
        图标：i-lucide数据库
        孩子们：
          - label：定义快捷方式
            图标：i-lucide文件文本
            描述：定义应用程序的捷径。
            到：/docs/可组合/定义快捷方式
          - 标签：使用覆盖
            图标：i-lucide文件文本
            描述：在你的应用程序中显示一个模式/滑动窗口。
            到：/docs/可合成/使用覆盖
          - 标签：使用烤面包
            图标：i-lucide文件文本
            描述：在应用程序中显示吐司。
            到：/docs/可合成/use-toast
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
        孩子们：
          @@标签：链接
            图标：i-lucide文件文本
            使用NuxtLink的超能力。
            到：/docs/组件/链接
          - 标签：莫代尔
            图标：i-lucide文件文本
            描述：在应用程序中显示一个模式。
            到：/docs/组件/模态
          - 标签：导航菜单
            图标：i-lucide文件文本
            description：显示链接列表。
            到：/docs/组件/导航菜单
          分页
            图标：i-lucide文件文本
            description：显示页面列表。
            到：/docs/组件/分页
          标签：弹出窗口
            图标：i-lucide文件文本
            description：显示一个浮动在触发器元素周围的非模式对话框。
            到：/docs/组件/弹出窗口
          @标签：进度
            图标：i-lucide文件文本
            说明：显示一个水平条以指示任务进度。
            到：/docs/组件/进度
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
        工具提示：
          text：'在GitHub上打开'
          千字节数：
            6000英尺
      @@标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
---
::

### 在项目中使用弹出窗口

当方向是`vertical`且功能表是`collapsed`时，您可以将`popover`属性设定为`true`，以在项目及其子系周围显示[Popover](/docs/components/popover)，但您也可以在每个项目上使用`popover`属性来覆写预设的蹦现视窗。

::note
无论全局`popover`属性如何，项目上的`popover`属性将始终显示一个弹出窗口。
::

您可以从[Popover](/docs/components/popover)组件全局传递任何属性，也可以在每个项目上传递。

::component-code
---
收阖：true
忽略：
  494个项目
  方向性
  班级
外部：
  497个项目
外部类型：
  - 导航菜单项[][]
项目名称：
  弹出窗口：
    真的
    500个错误
道具：
  弹出窗口：true
  折叠：true
  方向：'垂直'
  项目名称：
    - -标签：链接
        类型：'label'
- 标签：指南
        图标：i-lucide-书本-打开
        孩子们：
- 简介
            描述：Nuxt的完全样式化和可定制的组件。
            图标：i-lucide-house
- 标签：安装
            说明：了解如何在应用程序中安装和配置Nuxt UI。
            图标：i-lucide云下载
          - 标签：“图标”
            图标：“我-透明-微笑”
            description：'您无事可做，@nuxt/icon将自动处理。'
          - 标签：“颜色”
            图标：“i-lucide-色板-书本”
            description：'从您的Tailwind CSS主题中选择一个主色和一个中性色。'
          - 标签：“主题”
            图标：“i-lucide-cog”
            说明：'您可以使用`class` / `ui`道具或在app. config. ts中自订元件。'
      - 标签：可合成材料
        图标：i-lucide数据库
        弹出窗口：
          模式：“单击”
        孩子们：
          - label：定义快捷方式
            图标：i-lucide文件文本
            描述：定义应用程序的捷径。
            到：/docs/可组合/定义快捷方式
          - 标签：使用覆盖
            图标：i-lucide文件文本
            描述：在你的应用程序中显示一个模式/滑动窗口。
            到：/docs/可合成/使用覆盖
          - 标签：使用烤面包机
            图标：i-lucide文件文本
            描述：在应用程序中显示吐司。
            到：/docs/可合成/use-toast
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
        孩子们：
- 标签：链接
            图标：i-lucide文件文本
            使用NuxtLink的超能力。
            到：/docs/组件/链接
          - 标签：莫代尔
            图标：i-lucide文件文本
            描述：在应用程序中显示一个模式。
            到：/docs/组件/模态
          - 标签：导航菜单
            图标：i-lucide文件文本
            description：显示链接列表。
            到：/docs/组件/导航菜单
- 标签：分页
            图标：i-lucide文件文本
            description：显示页面列表。
            到：/docs/组件/分页
          标签：弹出窗口
            图标：i-lucide文件文本
            description：显示一个浮动在触发器元素周围的非模式对话框。
            到：/docs/组件/弹出窗口
- 标签：进度
            图标：i-lucide文件文本
            说明：显示一个水平条以指示任务进度。
            至：/docs/组件/进度
    - -标签：GitHub
        图标：i-simple-图标-github
        徽章：6 k
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
        工具提示：
          text：'在GitHub上打开'
          千字节数：
            6000英尺/小时
- 标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
---
::

::tip{to="#with-content-slot"}
您可以使用`#content`插槽自定义`vertical`方向的弹出窗口内容。
::

带芯片的物品：徽章

使用`chip`属性在项目图标的周围显示[Chip](/docs/components/chip)，您可以传递它的任何道具。

::component-code
---
收阖：true
忽略：
- 个项目
  班级
外部：
- 个项目
外部类型：
  - 导航菜单项[][]
道具：
  折叠：true
  方向：'垂直'
  项目名称：
    - -标签：指南
        图标：i-lucide-书本-打开
        切屑：
          颜色：错误
      - 标签：可合成材料
        图标：i-lucide数据库
        芯片：
          颜色：信息
          文本：3
      @@标签：组件
        图标：i-lucide-box（液晶盒）
        到：/docs/组件
        活动：true
        芯片：真
    - -标签：GitHub
        图标：i-simple-图标-github
        发送至：https://github.com/nuxt/ui
        目标：空白（_B）
- 标签：帮助
        图标：i-lucide-圆圈帮助
        已禁用：true
---
::

### 使用底部选项卡栏

使用`ui`道具将NavigationMenu转换为带有图标和小标签的移动风格底部选项卡栏，类似于YouTube或Instagram。

::component-example
---
收阖：true
名称：'导航菜单底部选项卡栏示例'
---
::

### 使用折叠的标签

使用`ui`道具在折叠时在每个图标下方显示标签。

::component-example
---
收阖：true
名称：'导航菜单折叠标签示例'
---
::

::tip
您也可以使用[`compoundVariants`](/docs/getting-started/theme/components#compound-variants)，透过`app.config.ts`在全域范围内执行此作业：

```ts [app/app.config.ts]
export default defineAppConfig({
  ui: {
    navigationMenu: {
      compoundVariants: [{
        orientation: 'vertical',
        collapsed: true,
        class: {
          link: 'flex-col',
          linkLabel: 'block text-[10px]/3 text-center'
        }
      }]
    }
  }
})
```

::

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

572号公路
573、574、575、576、577、577、578、579、579
我的天啊！
579号，580号，581号
584号公路

::component-example
---
收阖：true
名称：'导航菜单自定义插槽示例'
---
::

::tip{to="#slots"}
您也可以使用`#item`、`#item-leading`、`#item-label`、`#item-trailing`和`#item-content`插槽来自定所有项目。
::

### 带有尾随插槽

使用`#item-trailing`槽或`slot`属性（`#{{ item.slot }}-trailing`）添加悬停时显示的[DropdownMenu](/docs/components/dropdown-menu)，类似于“概念”或“线性”。

::component-example
---
收阖：true
名称：'导航菜单尾部插槽示例'
---
::

### 使用内容插槽

使用`#item-content`插槽或`slot`属性（`#{{ item.slot }}-content`）来自定义特定项目的内容。

::component-example
---
收阖：true
名称：'导航菜单内容插槽示例'
---
::

::note
在本例中，我们在`viewport`上添加`sm:w-(--reka-navigation-menu-viewport-width)`类以具有动态宽度。这需要在内容的第一个子级上设置宽度。
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
