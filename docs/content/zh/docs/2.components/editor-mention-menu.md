---
title: EditorMentionMenu
description: 在编辑器中键入触发字符时显示用户建议的提及菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## 使用情况

在编辑器中键入触发器字符（默认为`@`）时，EditorMentionMenu组件会显示一个用户建议菜单，并使用`@tiptap/extension-mention`包插入选定的提及。在呈现插入的提及时，触发器字符还用作前缀。

::note
它使用建立在TipTap的[Sugestion](https://tiptap.dev/docs/editor/api/utilities/suggestion)公用程式之上的`useEditorMenu`composable，在您输入时筛选项目，并支援键盘浏览（方向键、Enter选取、Esc关闭）。
::

::caution
它必须在[Editor](/docs/components/editor)组件的默认槽中使用，才能访问编辑器实例。
::

::component-example
---
升高：true
收阖：true
名称：'编辑器-提及-菜单-示例'
类别：'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
在TipTap文档中了解有关“提及”扩展的更多信息。
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
020、021、022、
我的天啊！
我的天啊！

::component-example
---
升高：true
收阖：true
名称：'编辑器-提及-菜单-项目-示例'
类别：'p-8'
---
::

::note
您也可以将数组的数组传递给`items`属性，以建立个别的项目群组。
::

### 字符

使用`char`属性更改触发器字符。默认值为`@`{lang="ts-type"}。在呈现插入的提及时，触发器字符也用作前缀（例如，`#channel`而不是`@channel`）。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
您可以在同一个编辑器上使用多个`EditorMentionMenu`组件，并使用不同的`char`和`plugin-key`属性来支持不同的提及类型。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

建议：使用徽章

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发器字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### 选项

使用`options`属性，使用[浮动UI选项来自订定位行为](https://floating-ui.com/docs/computeposition#options)。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu
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

示例

### 使用忽略筛选器：徽标{label="4.4+" class="align-text-top"}

您可以将`ignore-filter`属性设置为`true`以禁用内部搜索并使用您自己的搜索逻辑。使用`v-model:search-term`访问当前搜索词并从API获取项目。

::component-example
---
升高：true
收阖：true
名称：'编辑器-提及-菜单-忽略-过滤器-示例'
类别：'p-8'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/)来消除API调用的抖动。
::

## 活性成分

### 道具

：组件-支柱

## Theme

：组件主题

## Changelog

：组件更改日志
