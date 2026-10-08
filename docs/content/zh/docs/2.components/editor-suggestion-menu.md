---
title: 编辑建议菜单
description: 在编辑器中键入/字符时显示格式设置和操作建议的命令菜单。
category: editor
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/EditorSuggestionMenu.vue
---

## 使用情况

在编辑器中键入触发器字符时，EditorSugestionMenu组件会显示格式与操作建议得菜单，并在选定某个项时执行相应得[handler](/docs/components/editor#handlers).

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
名称：'编辑器-建议-菜单-示例'
类别：'p-8'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

@@小标题：小标题：小标题
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！

::component-example
---
升高：true
收阖：true
名称：'编辑器-建议-菜单-项目-示例'
类别：'p-8'
---
::

::note
您也可以将数组的数组传递给`items`属性，以建立个别的项目群组。
::

::tip
将`type: 'label'`用于节标题，将`type: 'separator'`用于可视分隔符，以便将命令组织到逻辑组中，从而提高可发现性。
::

字符集

使用`char`属性更改触发器字符。默认值为`/`{lang="ts-type"}。

```vue
<template>
  <UEditor v-slot="{ editor }">
    <UEditorSuggestionMenu :editor="editor" :items="items" char=">" />
  </UEditor>
</template>
```

建议：徽章

使用`suggestion`道具自定义TipTap的[建议匹配行为](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings)。

当触发器字符应直接在其他字符之后打开而不需要默认的空白前缀时，这很有用。

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

使用`options`属性，使用[浮动UI选项来自订定位行为](https://floating-ui.com/docs/computeposition#options)。

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

活性成分

道具

：组件-支柱

主题

：组件主题

## 变更日志

：组件更改日志
