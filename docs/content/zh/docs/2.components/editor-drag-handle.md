---
title: 编辑器DragHandle
description: 用于在编辑器中重新排序和选择块的可拖动句柄。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

## 用法

EditorDragHandle组件提供拖放功能，用于使用`@tiptap/extension-drag-handle-vue-3`包重新排序编辑器块。

::caution
它必须在[Editor](/docs/components/editor)组件的默认插槽中使用才能访问编辑器实例。
::

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`，`variant`，`size`等。

::component-example
---
collapse: true
elevated: true
name: 'editor-drag-handle-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
在TipTap文档中了解有关拖动控制柄扩展的更多信息。
::

### Icon

使用`icon`道具自定义拖动手柄图标。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.drag`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`vite.config.ts`中的`ui.icons.drag`键下全局自定义这个图标。
:::
::

### 选项

使用`options`属性自定义定位行为，使用[浮动UI选项](https://floating-ui.com/docs/computeposition#options)。

::note
系统会自动计算偏移量，以将小图块的控点置中，并将较高图块的控点与顶部对齐。
::

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </UEditor>
</template>
```

## 示例

### 带菜单

使用默认插槽添加[DropdownMenu](/docs/components/dropdown-menu)，其中包含块级操作，如复制、删除、上下移动或将块转换为不同类型。

监听`@node-change`事件以跟踪当前悬停的节点及其位置，然后在菜单打开时使用`editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}锁定手柄位置。

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-dropdown-menu-example'
class: 'p-8'
---
::

::note
本例使用`@nuxt/ui/utils/editor`中的`mapEditorItems`实用程序自动将处理程序类型（如`duplicate`、`delete`、`moveUp`等）映射到相应的编辑器命令，并进行适当的状态管理。
::

### 带建议菜单

使用默认插槽在拖动手柄旁边添加[Button](/docs/components/button)，以打开[EditorSuggestionMenu](/docs/components/editor-suggestion-menu)。

调用`onClick` slot函数获取当前节点位置，然后使用`handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}在该位置插入新块。

::component-example
---
elevated: true
collapse: true
name: 'editor-drag-handle-suggestion-menu-example'
class: '!p-0'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

## Theme

:component-theme

## Changelog

:component-changelog
