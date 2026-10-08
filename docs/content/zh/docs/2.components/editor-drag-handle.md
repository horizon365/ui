---
title: 编辑器DragHandle
description: 用于在编辑器中重新排序和选择块的可拖动句柄。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorDragHandle.vue
---

## 使用情况

EditorDragHandle组件提供拖放功能，可使用`@tiptap/extension-drag-handle-vue-3`套件来重新排序编辑器区块。

::caution
它必须在[Editor](/docs/components/editor)组件的默认槽中使用，才能访问编辑器实例。
::

它扩展了[Button](/docs/components/button)组件，因此您可以传递任何属性，如`color`、`variant`、`size`等。

::component-example
---
收阖：true
升高：true
名称：'编辑器-拖动-句柄-示例'
类别：'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue" target="_blank"}
在TipTap文档中了解有关拖动手柄扩展的更多信息。
::

### 图标

使用`icon`道具来自订拖曳控点图标。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </UEditor>
</template>
```

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`的`ui.icons.drag`键下全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`的`ui.icons.drag`键下全局自定此图标。
:::
::

### 选项

使用`options`属性，使用[浮动UI选项来自订定位行为](https://floating-ui.com/docs/computeposition#options)。

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

示例

### 使用下拉菜单

使用默认槽添加一个[DropdownMenu](/docs/components/dropdown-menu)，它具有块级操作，如复制、删除、上移/下移或将块转换为不同的类型。

侦听`@node-change`事件以跟踪当前悬停的节点及其位置，然后在菜单打开时使用`editor.chain().setMeta('lockDragHandle', open).run()`{lang="ts-type"}锁定句柄位置。

::component-example
---
升高：true
收阖：true
名称：'编辑器-拖动-手柄-下拉菜单-示例'
类别：'p-8'
---
::

::note
此示例使用`@nuxt/ui/utils/editor`中的`mapEditorItems`实用工具，通过正确的状态管理自动将处理程序种类（如`duplicate`、`delete`、`moveUp`等）映射到其相应的编辑器命令。
::

### 使用建议菜单

使用默认插槽在拖动手柄旁边添加一个[按钮](/docs/components/button)，以打开[EditorSugestionMenu](/docs/components/editor-suggestion-menu)。

调用`onClick`插槽函数以获取当前节点位置，然后使用`handlers.suggestion?.execute(editor, { pos: node?.pos }).run()`{lang="ts-type"}在该位置插入新的块。

::component-example
---
升高：true
收阖：true
名称：'编辑器-拖动-手柄-建议-菜单-示例'
类："! p-0"
---
::

活性成分

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
