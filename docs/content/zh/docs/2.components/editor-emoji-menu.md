---
title: 公司简介
description: "在编辑器中键入：字符时显示表情建议的表情符号选取器菜单。"
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorEmojiMenu.vue
---

## 使用情况

在编辑器中键入`:`字符时，EditorEmojiMenu组件会显示一个表情建议菜单，并插入选定的表情。该组件与`@tiptap/extension-emoji`软件包一起使用，以提供表情支持。

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
名称：'编辑器-表情符号-菜单-示例'
类别：'p-8'
---
::

::warning
默认情况下，`@tiptap/extension-emoji`软件包未安装，您需要单独安装它。
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/nodes/emoji" target="_blank"}
在TipTap文稿中了解有关Emoji扩展的更多信息。
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！
021、022、023、
我的天啊！
我的天啊！
我的天啊！

::component-example
---
升高：true
收阖：true
名称：'编辑器-表情符号-菜单-项目-示例'
类别：'p-8'
---
::

::note
您也可以将数组的数组传递至`items`属性，以建立个别的项目群组。
::

字符

使用`char`属性更改触发器字符。默认值为`:`{lang="ts-type"}。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </UEditor>
</template>
```

建议：使用徽章

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发器字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

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

使用`options`属性，使用[浮动UI选项来自订定位行为](https://floating-ui.com/docs/computeposition#options)。

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

美国石油学会

道具

：组件-支柱

主题

：组件主题

## 变更日志

：组件更改日志
