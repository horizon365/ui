---
title: 编辑建议菜单
description: 在编辑器中键入/字符时显示格式设置和操作建议的命令菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## 用法

EditorSuggestionMenu组件在编辑器中键入触发器字符时显示格式和操作建议菜单，并在选择项目时执行相应的[handler](/docs/components/editor#handlers)。

::note
它使用构建在TipTap的[Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion)实用程序之上的`useEditorMenu`组合工具来过滤输入项，并支持键盘导航（箭头键，回车选择，转义关闭）。
::

::caution
它必须在[Editor](/docs/components/editor)组件的默认插槽中使用，才能访问编辑器实例。
::

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-example'
class: 'p-8'
---
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- [`kind?: "textAlign" | "heading" | "link" | "image" | "blockquote" | "bulletList" | "orderedList" | "taskList" | "codeBlock" | "horizontalRule" | "paragraph" | "clearFormatting" | "duplicate" | "delete" | "moveUp" | "moveDown" | "suggestion" | "mention" | "emoji"`{lang="ts-type"}](/docs/components/editor#handlers)
- `label?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `type?: "label" | "separator"`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-suggestion-menu-items-example'
class: 'p-8'
---
::

::note
您还可以将数组的数组传递给`items`属性，以创建分隔的项目组。
::

::tip
使用`type: 'label'`作为节标题，使用`type: 'separator'`作为可视分隔符，将命令组织到逻辑组中，以获得更好的可重复性。
::

### Char

使用`char`属性将触发器字符. `/`{lang="ts-type"}更改为。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

### 建议：badge{label="4.7+" class="align-text-top"}

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      char=":"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### 选项

使用`options` prop自定义定位行为，使用[浮动UI选项](https://floating-ui.com/docs/computeposition#options)。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </UEditor>
</template>
```

## API

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
