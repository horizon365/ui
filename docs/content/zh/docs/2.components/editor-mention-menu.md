---
title: EditorMentionMenu
description: 在编辑器中键入触发字符时显示用户建议的提及菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorMentionMenu.vue
---

## 用法

EditorMentionMenu组件在编辑器中键入触发字符（默认为`@`）时显示用户建议菜单，并使用`@tiptap/extension-mention`包插入选定的提及。在呈现插入的提及时，触发字符也用作前缀。

::note
它使用构建在TipTap的[Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion)实用程序之上的`useEditorMenu`组合工具来过滤输入项，并支持键盘导航（箭头键，回车选择，转义关闭）。
::

::caution
它必须在[Editor](/docs/components/editor)组件的默认插槽中使用才能访问编辑器实例。
::

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-example'
class: 'p-8'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/mention" target="_blank"}
在TipTap文档中了解有关“提及”扩展的更多信息。
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `label: string`{lang="ts-type"}
- `avatar?: AvatarProps`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `description?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-items-example'
class: 'p-8'
---
::

::note
您还可以将数组的数组传递给`items`属性，以创建分隔的项组。
::

### Char

使用`char` prop将触发字符. `@`{lang="ts-type"}更改为`@`{lang="ts-type"}。在渲染插入的提及时，触发字符也用作前缀（例如，`#channel`而不是`@channel`）。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </UEditor>
</template>
```

::note
您可以在同一个编辑器上使用多个`EditorMentionMenu`组件，并使用不同的`char`和`plugin-key`道具来支持不同的提及类型。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
    <UEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
  </UEditor>
</template>
```
::

### 建议：badge{label="4.7+" class="align-text-top"}

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

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

使用`options` prop自定义定位行为，使用[浮动UI选项](https://floating-ui.com/docs/computeposition#options)。

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

## 示例

### 带忽略过滤器：badge{label="4.4+" class="align-text-top"}

您可以将`ignore-filter`属性设置为`true`以禁用内部搜索并使用自己的搜索逻辑。使用`v-model:search-term`访问当前搜索项并从API获取项目。

::component-example
---
elevated: true
collapse: true
name: 'editor-mention-menu-ignore-filter-example'
class: 'p-8'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/)对API调用进行反跳。
::

## API

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
