---
title: 编辑部
description: 用于编辑器操作的可自定义工具栏，可以显示为固定、气泡或浮动菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## 使用情况

EditorToolbar组件会显示格式化按钮的工具列，这些按钮会自动将其作用中状态与编辑器内容同步。它使用`@tiptap/vue-3/menus`套件支援三种版面配置模式：
- `fixed`{lang="ts-type"}（始终可见）
- `bubble`{lang="ts-type"}（出现在文本选择时）
- `floating`{lang="ts-type"}（出现在空行上）

::caution
它必须在[Editor](/docs/components/editor)组件的默认槽中使用，才能访问编辑器实例。
::

::component-example
---
升高：true
收阖：true
名称：'编辑器工具栏示例'
类别：'p-8'
---
::

::callout{icon="i-custom-tiptap"}
气泡和浮动布局使用TipTap的“气泡菜单”和“浮动菜单”扩展名。
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊，我的天啊
我的天啊！
我的天啊！
我的天啊！
我的天啊！
@@小标题：小标题：小标题
我的天啊！
我的天啊！
我的天啊！

您可以从[按钮](/docs/components/button#props)元件传递任何属性，例如`color`、`variant`、`size`等。

::component-example
---
升高：true
收阖：true
名称：'编辑器-工具栏-项目-示例'
类别：'p-8'
---
::

::note
您也可以将数组的数组传递给`items`属性，以建立个别的项目群组。
::

::tip
每个项目都可以使用与`items`属性相同的`items`对象数组来创建[DropdownMenu](/docs/components/dropdown-menu)。
::

版面配置

使用`layout`属性来变更工具列的显示方式。预设值为`fixed`{lang="ts-type"}。

::component-example
---
升高：true
收阖：true
名称：'编辑器工具栏布局示例'
类别：'p-8'
可选项：
- 名称：布局
    标签：布局
    默认：气泡
    项目名称：
- 固定
- 气泡
- 浮动
---
::

### 选项

当使用`bubble`{lang="ts-type"}或`floating`{lang="ts-type"}版面配置时，请使用`options`属性，以使用[浮动使用者界面选项来自订定位行为](https://floating-ui.com/docs/computeposition#options)。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :options="{
        placement: 'top',
        offset: 8,
        flip: { padding: 8 },
        shift: { padding: 8 }
      }"
    />
  </UEditor>
</template>
```

### 应该显示

当使用`bubble`{lang="ts-type"}或`floating`{lang="ts-type"}布局时，请使用`should-show`属性来控制工具栏何时出现。此函数接收有关编辑器状态的上下文并返回布尔值。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorToolbar
      :editor="editor"
      :items="items"
      layout="bubble"
      :should-show="({ view, state }) => {
        const { selection } = state
        const { from, to } = selection
        const text = state.doc.textBetween(from, to)
        return view.hasFocus() && !selection.empty && text.length > 10
      }"
    />
  </UEditor>
</template>
```

示例

### 使用图像工具栏

使用`should-show`属性来建立仅针对特定节点类型显示的内容特定工具列。此范例显示一个`bubble`工具列，其中包含仅在选取影像时才会显示的下载和删除动作。

::component-example
---
升高：true
收阖：true
名称：'编辑器工具栏图像示例'
类别：'p-8'
---
::

使用弹出链接功能

此示例演示如何使用工具栏项上的`slot`属性和[Popover](/docs/components/popover)组件来创建自定义链接弹出窗口。

1. 创建一个Vue组件，该组件使用链接编辑功能包装[Popover](/docs/components/popover)：

::component-example
---
预览：假
收阖：true
名称：'编辑器链接弹出窗口'
---
::

2. 在工具栏中使用带有命名插槽的自定义组件：

::component-example
---
升高：true
收阖：true
名称：'编辑器工具栏自定义插槽示例'
类别：'p-8'
---
::

美国石油学会

### 道具

：组件-支柱

插槽数

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
