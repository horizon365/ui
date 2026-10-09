---
title: 编辑部
description: 用于编辑器操作的可自定义工具栏，可以显示为固定、气泡或浮动菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorToolbar.vue
---

## 用法

编辑器组件显示一个格式按钮工具栏，这些按钮自动将其活动状态与编辑器内容同步。它使用`@tiptap/vue-3/menus`包支持三种布局模式：
- `fixed`{lang="ts-type"}（始终可见）
- `bubble`{lang="ts-type"}（出现在文本选择上）
- `floating`{lang="ts-type"}（出现在空行上）

::caution
它必须在[Editor](/docs/components/editor)组件的默认插槽中使用才能访问编辑器实例。
::

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap"}
气泡和浮动布局使用TipTap的[BubbleMenu](https://tiptap.dev/docs/editor/extensions/functionality/bubble-menu)和[FloatingMenu](https://tiptap.dev/docs/editor/extensions/functionality/floatingmenu)扩展。
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `activeColor?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral"`{lang="ts-type"}
- `variant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `activeVariant?: "solid" | "outline" | "soft" | "ghost" | "link" | "subtle"`{lang="ts-type"}
- `size?: "xs" | "sm" | "md" | "lg" | "xl"`{lang="ts-type"}
- [`kind?: "mark" | "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "undo" | "redo" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `disabled?: boolean`{lang="ts-type"}
- `loading?: boolean`{lang="ts-type"}
- `active?: boolean`{lang="ts-type"}
- `tooltip?: TooltipProps`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-link-popover)
- `onClick?: (e: MouseEvent) => void`{lang="ts-type"}
083x-083x
- `class?: any`{lang="ts-type"}

您可以从[Button](/docs/components/button#props)组件传递任何属性，如`color`、`variant`、`size`等。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-items-example'
class: 'p-8'
---
::

::note
您还可以将数组的数组传递给`items`属性，以创建分隔的项组。
::

::tip
每个项目都可以采用一个`items`对象数组，该数组具有与`items`属性相同的属性，以创建一个[DropdownMenu](/docs/components/dropdown-menu)。
::

### Layout

使用`layout`属性更改工具栏的显示方式。将其更改为`fixed`{lang="ts-type"}。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-layout-example'
class: 'p-8'
options:
  - name: layout
    label: Layout
    default: bubble
    items:
      - fixed
      - bubble
      - floating
---
::

### 选项

使用`bubble`{lang="ts-type"}或`floating`{lang="ts-type"}布局时，请使用`options`属性使用[浮动UI选项](https://floating-ui.com/docs/computeposition#options)自定义定位行为。

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

### 应显示

当使用`bubble`{lang="ts-type"}或`floating`{lang="ts-type"}布局时，使用`should-show`属性来控制工具栏何时出现。此函数接收有关编辑器状态的上下文并返回布尔值。

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

## 示例

### 带图像工具栏

使用`should-show` prop创建仅针对特定节点类型显示的上下文特定的工具栏。此示例显示了一个`bubble`工具栏，其中包含仅在选定图像时显示的下载和删除操作。

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-image-example'
class: 'p-8'
---
::

### 带有链接弹出框

此示例演示如何使用工具栏项上的`slot`属性和[Pover](/docs/components/popover)组件创建自定义链接弹出框。

1. 创建一个Vue组件，包装一个具有链接编辑功能的[Pover](/docs/components/popover)：

::component-example
---
preview: false
collapse: true
name: 'editor-link-popover'
---
::

2. 使用工具栏中带有命名插槽的自定义组件：

::component-example
---
elevated: true
collapse: true
name: 'editor-toolbar-custom-slot-example'
class: 'p-8'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
