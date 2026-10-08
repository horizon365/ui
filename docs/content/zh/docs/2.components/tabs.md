---
description: 一组选项卡面板，一次显示一个。
category: navigation
keywords:
  - tabbed
  - panels
  - sections
links:
  - label: 选项卡
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tabs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tabs.vue
---

## 使用情况

使用“选项卡”组件可以在选项卡中显示项目列表.

::component-example
---
收阖：true
更漂亮：真的
名称：'选项卡示例'
道具：
  类别：'w-完整'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

005号机
006年7月8日
009年10月11日
我的天啊！
我的天啊！
我的天啊！
021、022、023、
我的天啊！
我的天啊！
我的天啊！

::component-code
---
忽略：
  项目
  班级
外部：
  项目名称
外部类型：
  - 选项卡项目[]
道具：
  项目名称：
    @@标签：账号
      图标：“i-lucide-用户”
      content：'这是帐户内容。'
- 标签：密码
      图标：“i-lucide锁”
      content：'这是密码内容。'
  类别：'w-完整'
---
::

内容

将`content`属性设置为`false`以呈现不带任何面板的触发器。默认设置为`true`。

::component-code
---
忽略：
  内容
  个项目
  班级
外部：
- 个项目
外部类型：
  - 选项卡项目[]
道具：
  内容：错误
  项目名称：
    @@标签：账号
      图标："i-lucide-用户"
      content：'这是帐户内容。'
- 标签：密码
      图标："i-lucide锁"
      content：'这是密码内容。'
  类别：'w-完整'
---
::

### 卸载

使用`unmount-on-hide`道具可防止在折叠选项卡时卸载内容。默认为`true`。

::component-code
---
忽略：
  内容
  项目数
  班级
外部：
- 个项目
外部类型：
  - 选项卡项目[]
道具：
  隐藏时卸载：假
  项目名称：
    @标签：账号
      图标："i-lucide-用户"
      content：'这是帐户内容。'
- 标签：密码
      图标："i-lucide锁"
      content：'这是密码内容。'
  类别：'w-完整'
---
::

::note
您可以检查DOM以查看呈现的每个项的内容。
::

颜色

使用`color`道具更改选项卡的颜色。

::component-code
---
忽略：
  内容
  项目数
  班级
外部的：
  项目数
外部类型：
  - 选项卡项目[]
道具：
  颜色：中性
  内容：错误
  项目名称：
    @标签：账号
- 标签：密码
  类别：'w-完整'
---
::

### 变体

使用`variant`道具更改选项卡的变体。

::component-code
---
忽略：
  内容
  项目数
  班级
外部的：
  项目数
外部类型：
  - 选项卡项目[]
道具：
  颜色：中性
  变体：链接
  内容：错误
  项目名称：
    @@标签：账号
- 标签：密码
  类别：'w-完整'
---
::

尺寸

使用`size`道具更改制表符的大小。

::component-code
---
忽略：
  内容
  项目数
  班级
外部：
  项目数
外部类型：
  - 选项卡项目[]
道具：
  尺寸：md
  变体：丸剂
  内容：错误
  项目名称：
    @标签：账号
- 标签：密码
  类别：'w-完整'
---
::

方向

使用`orientation`道具更改制表符的方向。默认为`horizontal`。

::component-code
---
忽略：
  内容
  项目数
  班级
外部：
  项目数
外部类型：
  - 选项卡项目[]
道具：
  方向：垂直
  变体：丸剂
  内容：错误
  项目名称：
    @标签：账号
- 标签：密码
  类别：'w-完整'
---
::

示例：

### 控制活动项目

您可以使用`default-value`属性或`v-model`指示词搭配项目的`value`来控制使用中的项目。如果未提供`value`，则会预设为索引**做为字串**。

：组件示例{name="tabs-model-value-example"}

::tip
当提供`v-model`或`default-value`时，使用`value-key`属性更改用于匹配项目的密钥。
::

### 使用路线查询

您可以使用URL查询参数来控制作用中的项目，并将`route.query.tab`当做项目的`value`。

：组件示例{name="tabs-route-query-example"}

### 使用内容插槽

使用`#content`插槽自定义每个项目的内容。

：组件示例{name="tabs-content-slot-example"}

### 使用底部选项卡栏

使用`ui`道具将选项卡转换为带有图标和小标签的移动风格底部选项卡栏，类似于YouTube或Instagram。

::component-example
---
收阖：true
名称：'标签-底部-标签-栏-示例'
---
::

### 使用自定义插槽

使用`slot`属性可自定义特定项目。

您将可以访问以下插槽：

124小时125小时126小时

::component-example
---
收阖：true
名称：'标签-自定义-插槽-示例'
---
::

## 活性成分

### 道具

：组件-支柱

插槽数

：组件插槽

### 排放量

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 134号公路|133小时135小时|

主题

：组件主题

## 变更日志

：组件更改日志
