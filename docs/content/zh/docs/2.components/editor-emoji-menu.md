---
title: 公司简介
description: "在编辑器中键入：字符时显示表情建议的表情符号选取器菜单。"
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## 用法

编辑器emoji菜单组件在编辑器中键入`:`字符时显示emoji建议菜单，并插入选定的emoji。它与`@tiptap/extension-emoji`包一起提供emoji支持。

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
name: 'editor-emoji-menu-example'
class: 'p-8'
---
::

::warning
默认情况下不安装`@tiptap/extension-emoji`包，需要单独安装。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
在TipTap文档中了解更多关于P2P扩展的信息。
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `name: string`{lang="ts-type"}
- `emoji: string`{lang="ts-type"}
- `shortcodes?: string[]`{lang="ts-type"}
- `tags?: string[]`{lang="ts-type"}
- `group?: string`{lang="ts-type"}
- `fallbackImage?: string`{lang="ts-type"}

::component-example
---
elevated: true
collapse: true
name: 'editor-emoji-menu-items-example'
class: 'p-8'
---
::

::note
您还可以将数组的数组传递给`items`属性，以创建分隔的项目组。
::

### Char

使用`char`属性将触发器字符. `:`{lang="ts-type"}更改为。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

### 建议：badge{label="4.7+" class="align-text-top"}

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </UEditor>
</template>
```

### 选项

使用`options` prop自定义使用[浮动UI选项](https://floating-ui.com/docs/computeposition#options)的定位行为。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu
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

应用程序接口

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
