---
title: 指挥官
description: 一个命令面板，带有由Fuse.js提供的全文搜索，用于高效的模糊匹配。
category: navigation
keywords:
  - command menu
  - cmdk
  - spotlight
  - global search
links:
  - label: Fuse.js
    icon: i-custom-fuse-js
    to: https://fusejs.io/
    target: _blank
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/CommandPalette.vue
---

## 使用情况

使用`v-model`指示词来控制CommandPalette的值，或使用`default-value`属性来设定初始值（如果不需要控制其状态）。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
- 组
  - 模型值
  班级
外部：
- 群组
  - 模型值
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  型号值：{}
  自动对焦：假
  群组：
    - id：“用户”
      标签：“用户”
      项目名称：
        - 标签：“本杰明·卡纳克”
          后缀：'benjamincanac'
          头像：
            来源：'https：//github.com/benjamincanac.png'
            载入：惰性
        @标签：“雨果理查德”
          后缀：“HugoRCD”
          头像：
            来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
            加载：惰性
        - 标签：“塞巴斯蒂安·肖邦”
          后缀：'atinux'
          头像：
            第一个字符串
            加载：惰性
        - 标签：“罗曼·哈默尔”
          后缀：“romhml”
          头像：
            src：'https：//github.com/romhml.png'
            加载：惰性
        - label：'Sandro Circi'
          后缀：'sandros 94'
          头像：
            src：'https：//github.com/sandros94.png'
            加载：惰性
        - label：'Jakub Michálek'
          后缀：'J-Michalek'
          头像：
            src：'https：//github.com/J-Michalek.png'
            加载：惰性
        - label：'Alex'
          后缀：'hywax'
          头像：
            src：'https：//github.com/hywax.png'
            加载：惰性
        - label：'Maxime Pauvert'
          后缀：'maximepvrt'
          头像：
            src：'https：//github.com/maximepvrt.png'
            加载：惰性
  class：'flex-1 h-80'
---
::

::tip{to="#control-selected-items"}
您还可以使用`@update:model-value`事件来侦听所选项目。
::

### Group

CommandCommand组件根据用户类型的相关性对匹配命令进行分组和分级。它提供动态、即时的搜索结果，以实现高效的命令发现。将`groups`prop用作具有以下属性的对象数组：

我的天啊！
- `label?: string`{lang="ts-type"}
我的天啊！
- `items?: CommandPaletteItem[]`{lang="ts-type"}
我的天啊，我的天啊
- [`postFilter?: (searchTerm: string, items: T[]) => T[]`{lang="ts-type"}](#with-post-filtered-items)
- `highlightedIcon?: string`{lang="ts-type"}

::caution
您必须为每个组提供一个`id`，否则该组将被忽略。
::

每个组包含一个定义命令的对象的`items`数组。每个项可以具有以下属性：

- `prefix?: string`{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `suffix?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
我的天啊!
我的天啊!
我的天啊!
我的天啊!
我的天啊!
我的天啊，我的天啊!
我的天啊!
我的天啊!
我的天啊!
- `class?: any`{lang="ts-type"}{lang="ts-type"}
105号公路

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
- 组
- 模型值
  115班
外部的：
- 组
- 模型值
外部类型：
  - 命令调色板组[]
类："! p-0"
道具：
  型号值：{}
  自动对焦：假
  群组：
    - id："用户"
      标签："用户"
      项目名称：
        @标签："本杰明·卡纳克"
          后缀：'benjamincanac'
          头像：
            来源：'https：//github.com/benjamincanac.png'
            加载：惰性
        @标签："雨果·理查德"
          后缀："HugoRCD"
          头像：
            来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
            加载：惰性
        - 标签：“塞巴斯蒂安·肖邦”
          后缀：'atinux'
          头像：
            第一个字符串
            加载：惰性
        @标签：“罗曼·哈默尔”
          后缀：“romhml”
          头像：
            第一个字符串
            加载：惰性
        - 标签：“山德鲁马戏团”
          后缀：“sandros 94”
          头像：
            第一个问题：
            加载：惰性
        @标签：“雅各布·米夏莱克”
          后缀：'J-Michalek'
          头像：
            用户名：'//
            加载：惰性
        @标签：“亚历克斯”
          后缀：'hywax'
          头像：
            用户名：'http：//github.com/hywax.png'
            加载：惰性
        - 标签：“马克西姆·穷人”
          后缀：“maximepvrt”
          头像：
            第一个字符串：
            加载：惰性
  类别：'flex-1'
---
::

::tip{to="#with-children-in-items"}
每个项目都可以使用具有下列属性的`children`物件数组来建立子功能表：
::

多个

使用`multiple`道具可进行多个选择。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
- 组
- 模型值
  多个
  班级
外部：
- 组
- 模型值
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  多个：真
  自动对焦：假
  型号值：[]
  群组：
    - id：“用户”
      标签：“用户”
      项目名称：
        @标签：“本杰明·卡纳克”
          后缀：'benjamincanac'
          头像：
            来源：'https：//github.com/benjamincanac.png'
            加载：惰性
        @标签：“雨果·理查德”
          后缀：“HugoRCD”
          头像：
            来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
            加载：惰性
        @标签：“塞巴斯蒂安·肖邦”
          后缀：'atinux'
          头像：
            第一个字符串
            加载：惰性
        @标签：“罗曼·哈默尔”
          后缀：“romhml”
          头像：
            第一个字符串
            加载：惰性
        - 标签：“山德鲁马戏团”
          后缀：“sandros 94”
          头像：
            第一个问题：
            加载：惰性
        @标签：“雅各布·米夏莱克”
          后缀：'J-Michalek'
          头像：
            用户名：'//
            加载：惰性
        @标签：“亚历克斯”
          后缀：'hywax'
          头像：
            用户名：'http：//github.com/hywax.png'
            加载：惰性
        - 标签：“马克西姆·穷光蛋”
          后缀：“maximepvrt”
          头像：
            第一个字符串：
            加载：惰性
  类别：'flex-1'
---
::

::caution
请确定将数组传递给`default-value`属性或`v-model`指示词。
::

### 预留位置

使用`placeholder`道具更改占位符文本。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  班级
  155个组
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  占位符：'搜索应用程序...'
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        标签：“音乐”
          图标：“i-lucide-音乐”
        - 标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

尺寸：徽章

使用`size`属性更改CommandPalette的大小。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  班级
- 组
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  尺寸：'xl'
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        标签：“音乐”
          图标：“i-lucide-音乐”
        @@标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

图标

使用`icon`属性来自订输入[图标](/docs/components/icon)。预设值为`i-lucide-search`。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  182级
- 组
外部的：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  图标：“i-lucide盒”
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        @标签：“音乐”
          图标：“i-lucide-音乐”
        - 标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.search`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.search`键下全局自定此图标。
:::
::

### 选定的图标

使用`selected-icon`属性来自订选取的项目[Icon](/docs/components/icon)。预设值为`i-lucide-check`。

::component-code
---
收阖：true
隐藏：
- 自动对焦
忽略：
- 组
- 型号值
  多个
- 类
外部：
- 组
- 型号值
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  多个：真
  自动对焦：假
  型号值：
    - 标签：“本杰明·卡纳克”
      后缀：'benjamincanac'
      头像：
        来源：'https：//github.com/benjamincanac.png'
        加载：惰性
  选定图标：“i-lucide-圆圈-检查”
  群组：
    - id：“用户”
      标签：“用户”
      项目名称：
        @标签：“本杰明·卡纳克”
          后缀：'benjamincanac'
          头像：
            来源：'https：//github.com/benjamincanac.png'
            加载：惰性
        @标签：“雨果·理查德”
          后缀：“HugoRCD”
          头像：
            来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
            加载：惰性
        @标签：“塞巴斯蒂安·肖邦”
          后缀：'atinux'
          头像：
            第一个字符串
            加载：惰性
        @标签：“罗曼·哈默尔”
          后缀：“romhml”
          头像：
            第一个字符串
            加载：惰性
        - 标签：“山德鲁马戏团”
          后缀：“sandros 94”
          头像：
            第一个问题：
            加载：惰性
        @标签：“雅各布·米夏莱克”
          后缀：'J-Michalek'
          头像：
            用户名：'//
            加载：惰性
        @标签：“亚历克斯”
          后缀：'hywax'
          头像：
            用户名：'http：//github.com/hywax.png'
            加载：惰性
        - 标签：“马克西姆·穷光蛋”
          后缀：“maximepvrt”
          头像：
            第一个字符串：
            载入：惰性
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.check`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.check`键下的`vite.config.ts`中全局自定此图标。
:::
::

### 结尾图标

当项目有子系时，请使用`trailing-icon`属性来自订尾端[Icon](/docs/components/icon)。预设值为`i-lucide-chevron-right`。

::component-code
---
收阖：true
更漂亮：真的
隐藏：
  自动对焦
忽略：
- 组
  232班
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  尾部图标：'i-透明箭头-右'
  群组：
    - id：“操作”
      项目名称：
        - 标签：“共享”
          图标：“i-lucide-共享”
          孩子们：
            - 标签：“电子邮件”
              图标：“i-lucide邮件”
            - 标签：“复制”
              图标：“i-lucide-副本”
            - 标签：“链接”
              图标：“i-lucide链接”
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.chevronRight`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.chevronRight`键下的`vite.config.ts`中全局自定义此图标。
:::
::

正在载入

使用`loading`道具在CommandPalette上显示加载图标。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  班级
  248个群组
外部：
  249个群组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  载入：true
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        @标签：“音乐”
          图标：“i-lucide-音乐”
        @@标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

### 载入图标

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  班级
- 组
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具类：
  自动对焦：假
  载入：true
  加载图标：“i-lucide加载程序”
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        @标签：“音乐”
          图标：“i-lucide-音乐”
        @@标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.loading`键下全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.loading`键下全局自定义此图标。
:::
::

### 关闭

使用`close`属性来显示[按钮](/docs/components/button来关闭CommandPalette。

::tip
单击关闭按钮时将发出`update:open`事件。
::

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  班级
- 组
  关闭
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具类：
  自动对焦：假
  关闭：true
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        @标签：“音乐”
          图标：“i-lucide-音乐”
        @@标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
收阖：true
更漂亮：真的
隐藏：
  自动对焦
忽略：
  关闭. color
  关闭.变量
  295个群组
  班级
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  结束语：
    颜色：原色
    变体：轮廓
    类别：'四舍五入-完整'
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        - 标签：“音乐”
          图标：“i-lucide-音乐”
        - 标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

### 关闭图标

使用`close-icon`属性来自订关闭按钮[Icon](/docs/components/icon)。预设值为`i-lucide-x`。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
- 类
- 组
  关闭
外部的：
  组数
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  关闭：true
  关闭图标：'i-透明箭头-右'
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        - 标签：“音乐”
          图标：“i-lucide-音乐”
        - 标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.close`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.close`键下全局自定此图标。
:::
::

### 返回

使用`back`属性可自定义或隐藏导航到子菜单时显示的后退按钮（带有`false`值）。

您可以从[Button](/docs/components/button)组件传递任何属性来自订它。

::component-code
---
收阖：true
更漂亮：真的
隐藏：
  自动对焦
忽略：
  背景颜色
  组
  班级
外部：
  组数
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  背面：
    颜色：原色
  群组：
    - id：“操作”
      项目名称：
        - 标签：“共享”
          图标：“i-lucide-共享”
          孩子们：
            - 标签：“电子邮件”
              图标：“i-lucide邮件”
            - 标签：“复制”
              图标：“i-lucide-副本”
            - 标签：“链接”
              图标：“i-lucide链接”
  类别：'flex-1'
---
::

### 后退图标

使用`back-icon`属性自定义后退按钮[Icon](/docs/components/icon)。默认值为`i-lucide-arrow-left`。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
- 类
- 组
- 返回
外部：
- 组
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  返回：true
  backIcon：“i-lucide-house”（智能家居）
  群组：
    - id：'动作'
      项目名称：
        - 标签：“共享”
          图标：“i-lucide-共享”
          孩子们：
            - 标签：“电子邮件”
              图标：“i-lucide邮件”
            - 标签：“复制”
              图标：“i-lucide-副本”
            - 标签：“链接”
              图标：“i-lucide链接”
  类别：'flex-1'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.arrowLeft`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.arrowLeft`键下全局自定此图标。
:::
::

### 已停用

使用`disabled`属性来停用CommandPalette。

::component-code
---
收阖：true
隐藏：
  自动对焦
忽略：
  组数
  班级
外部的：
  组数
外部类型：
  - 命令调色板组[]
类：“！p-0”
道具：
  自动对焦：假
  已禁用：true
  群组：
    - id：“应用程序”
      项目名称：
        - 标签：“日历”
          图标：“i-lucide日历”
        标签：“音乐”
          图标：“i-lucide-音乐”
        @@标签：“地图”
          图标：“i-lucide-图”
  类别：'flex-1'
---
::

示例

### Control（控制）选定的项目

您可以使用`default-value`属性或`v-model`指示词、使用每个项目上的`onSelect`字段或使用`@update:model-value`事件，来控制选取的项目。

::component-example
---
收阖：true
名称：'命令调色板选择示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

::tip
使用`value-key`属性可选择要用作值的项目字段，而不是对象本身。使用`by`属性可按字段而不是按引用比较对象。
::

### 控制搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
收阖：true
名称：'命令调色板搜索术语示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

::note
本示例使用`@update:model-value`事件在选定项目时重置搜索词。
::

### 在项中包含子项

您可以使用项目中的`children`属性来建立阶层式功能表。当项目有子系时，它会自动显示V形图标，并启用子功能表的巡览。

::component-example
---
收阖：true
更漂亮：真的
名称：'命令-调色板-项目-子项-示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

::note
导航到子菜单时：
- 搜索词已重置
- 返回按钮出现在输入中
- 您可以通过按：kbd{value="backspace"}键返回到上一组
::

### 使用提取的项目

您可以从API撷取项目，并在CommandPalette中使用它们。

::component-example
---
收阖：true
名称：'命令调色板提取示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

::note
此示例使用`useLazyFetch`和`server: false`在客户端上提取数据，而不阻止初始呈现。加载状态检查`pending`和`idle`的状态，以在提取之前和提取过程中显示加载指示器。
::

### 使用忽略筛选器

您可以将组上的`ignoreFilter`字段设置为`true`，以禁用内部搜索并使用您自己的搜索逻辑。

::component-example
---
收阖：true
名称：'命令调色板忽略过滤器示例'
类：“！p-0”
道具类：
  自动对焦：假
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来消除API调用的抖动。加载状态将检查`pending`和`idle`的状态，以便在提取之前和提取过程中显示加载指示器。
::

### 使用筛选后的项目

您可以使用群组上的`postFilter`字段，在搜寻完成后筛选项目。

::component-example
---
收阖：true
名称：'命令调色板后置过滤器示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

::note
开始键入以查看显示的更高级别的项目。
::

### 使用自定义融合搜索

您可以使用`fuse`属性来覆写[useFuse](https://vueuse.org/integrations/useFuse)的选项，其预设值为：

```ts
{
  fuseOptions: {
    ignoreLocation: true,
    threshold: 0.1,
    keys: ['label', 'description', 'suffix']
  },
  resultLimit: 12,
  matchAllWhenSearchEmpty: true
}
```

::tip
`fuseOptions`是[Fuse.js](https://www.fusejs.io/)的选项，`resultLimit`是要返回的最大结果数，`matchAllWhenSearchEmpty`是一个布尔值，用于在搜索项为空时匹配所有项目。
::

例如，您可以设定`{ fuseOptions: { includeMatches: true } }`{lang="ts-type"}来反白项目中的搜寻字词。

::component-example
---
收阖：true
名称：'命令调色板熔丝示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

### 借助虚拟化：徽标{label="4.1+" class="align-text-top"}

使用`virtualize`属性为大型列表启用虚拟化，将其作为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::warning{to="https://github.com/unovue/reka-ui/issues/1885" target="_blank"}
启用后，由于Reka UI的限制，所有组将被展平为单个列表。
::

::component-example
---
收阖：true
名称：'命令调色板虚拟化示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

在弹出窗口中

您可以在[Popover](/docs/components/popover)的内容中使用CommandPalette组件。

::component-example
---
收阖：true
名称：'popover-command-palette-example'（弹出命令调色板示例）
道具类：
  自动对焦：假
---
::

### 在模态中

您可以在[Modal](/docs/components/modal)的内容中使用CommandPalette组件。

::component-example
---
收阖：true
名称：'模式命令调色板示例'
道具：
  自动对焦：假
---
::

::note
此示例使用`useLazyFetch`和`immediate: false`，以便仅在Modal打开时提取数据。
::

在抽屉中

您可以在[Drawer](/docs/components/drawer)的内容中使用CommandPalette组件。

::component-example
---
收阖：true
名称：'绘图器命令调色板示例'
道具：
  自动对焦：假
---
::

::note
此示例将`useLazyFetch`与`immediate: false`一起使用，以便仅在抽屉打开时提取数据。
::

### 接听开启状态

使用`close`属性时，您可以在按一下按钮时接听`update:open`事件。

::component-example
---
收阖：true
名称：'命令调色板打开示例'
道具：
  自动对焦：假
---
::

::note
例如，在[`Modal`](/docs/components/modal)中使用CommandPalette时，这可能会很有用。
::

### 使用页脚插槽

使用`#footer`插槽在CommandPalette底部添加自定内容，如键盘快捷键帮助或附加操作。

::component-example
---
收阖：true
名称：'命令调色板页脚插槽示例'
类：“！p-0”
道具：
  自动对焦：假
---
::

### 使用自定义插槽

使用`slot`属性来自订特定的项目或群组。

您将可以访问以下插槽：

472号公路
475号公路
我的天啊！
479，480，481，480，481，480，480，481，480，481，480，480，481，480，481，480，480，481，480，480，481，480，481，480，480，48

484号线
485号，486号，487号
488小时489小时490小时
493号公路

::component-example
---
收阖：true
名称：'命令调色板自定义插槽示例'
类：“！p-0”
道具类：
  自动对焦：假
---
::

::tip{to="#slots"}
您也可以使用`#item`、`#item-leading`、`#item-label`和`#item-trailing`插槽来自定所有项目。
::

活性成分

道具

：组件-支柱

### 插槽

：组件插槽

### 排放

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
