---
description: 一组由可拖动手柄分隔的可调整大小的面板。
category: layout
links:
  - label: 分离器
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## 使用情况

使用拆分器组件可以显示由可拖动手柄分隔的可调整大小面板的列表。

::component-example
---
收阖：true
名称：'拆分器示例'
---
::

::note
Splitter填充其容器的高度，因此请确保父元素定义了一个容器。
::

项目

使用`items`属性作为具有下列属性的对象数组：

005号机
006年7月8日
009年10月11日
我的天啊!
我的天啊!
我的天啊!
021、022、023、
我的天啊!
我的天啊!
我的天啊!
我的天啊!

使用`slot`键填充面板的内容，使用`class`键设置面板的样式。没有`slot`键的项将返回到`panel-{index}`槽中。默认情况下，大小是百分比，请在项上设置`sizeUnit: 'px'`作为像素值。

::caution
在服务器上呈现时，设置`id`属性并将`defaultSize`指定给所有项或不指定任何项。否则，将自动生成ID，服务器与客户端可能不同意，这会破坏水合布局。没有`defaultSize`的项将在服务器上回退到相等的份额，因此，混合这两种使面板跳一次水化。像素大小是在客户端上测量的，总是会有一点偏移。
::

::component-code
---
收阖：true
类别："h-96"
更漂亮：真的
忽略：
  项目
  我是
外部：
  项目数
外部类型：
  - SplitterItem []拆分器项
道具：
  id：'拆分器项目'
  项目名称：
    插槽："边栏"
      最小大小：15
      最大大小：40
      默认大小：25
      class：'bg-高边框/50边框边框-默认圆角-xl项目-居中对齐-文本居中-静音字体-中等'
    插槽："主"
      默认大小：75
      class：'bg-高边框/50边框边框-默认圆角-xl项目-居中对齐-文本居中-静音字体-中等'
插槽：
  提要字段：提要字段
  main：主菜单
---

#边栏
边栏

#主要
主要
::

方向图

使用`orientation`道具更改拆分器的方向。默认为`horizontal`。

::component-code
---
收阖：true
类别：“h-96”
更漂亮：真的
忽略：
  项目数
  我是
外部：
  项目数
外部类型：
  - SplitterItem[]拆分器项
道具：
  id：'拆分器方向'
  方向：'垂直'
  项目名称：
    插槽：“第一个”
      class：'bg-高边框/50边框边框-默认圆角-xl项目-居中对齐-文本居中-静音字体-中等'
    插槽：“秒”
      class：'bg-高边框/50边框边框-默认圆角-xl项目-居中对齐-文本居中-静音字体-中等'
插槽：
  first：第一个
  第二：第二
---

#第一个
第一

秒数
二
::

示例

### 使用可折叠面板

在项目上设定`collapsible: true`，让它折迭时超过它的`minSize`，并使用`collapsedSize`让面板的一部分在折迭时保持可见。面板插槽会公开`collapsed`、`collapse`和`expand`，让您可以程式化方式控制它，而`collapse`，`expand`和`resize`事件随面板索引一起触发。

::component-example
---
收阖：true
名称：'拆分器-可折叠-示例'
---
::

### 使用嵌套拆分器

在面板内嵌套`Splitter`以构建二维的IDE样式布局。

::component-example
---
收阖：true
名称：'分割器巢状范例'
---
::

### 使用自定义句柄

默认情况下，句柄是不可见的。使用`ui`道具可对其重新设置样式，例如，将其设置为齐平布局的可见分隔线，并使用`resize-handle`插槽将其内部内容呈现为手柄。

::component-example
---
收阖：true
名称：'拆分器自定义句柄示例'
---
::

### 具有持久性

提供`auto-save-id`以将布局保存到`localStorage`并在重新加载时恢复。

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
