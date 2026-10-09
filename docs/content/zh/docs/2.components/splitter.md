---
description: 一组由可拖动手柄分隔的可调整大小的面板。
category: layout
links:
  - label: 分离器
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/splitter
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Splitter.vue
navigation.badge: New
---

## 用法

使用Splitter组件显示由可拖动手柄分隔的可调整大小的面板的列表。

::component-example
---
collapse: true
name: 'splitter-example'
---
::

::note
Splitter填充其容器的高度，因此请确保父元素定义了一个Splitter。
::

### 项目

使用`items` prop作为具有以下属性的对象数组：

- `defaultSize?: number`{lang="ts-type"}
- `minSize?: number`{lang="ts-type"}
- `maxSize?: number`{lang="ts-type"}
- `collapsible?: boolean`{lang="ts-type"}
- `collapsedSize?: number`{lang="ts-type"}
- `sizeUnit?: '%' | 'px'`{lang="ts-type"}
- `order?: number`{lang="ts-type"}
- `id?: string`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { panel?: ClassNameValue }`{lang="ts-type"}

使用`slot`键填充面板的内容，使用`class`键设置面板的样式。没有`slot`键的项目将返回到`panel-{index}`插槽。默认情况下，大小为百分比，在像素值的项目上设置`sizeUnit: 'px'`。

::caution
在服务器上渲染时，设置`id`属性并将`defaultSize`赋予所有项目或不赋予任何项目。否则会自动生成ID，服务器和客户端可能会不一致，这会破坏布局。没有`defaultSize`的项目会在服务器上退回到相等的份额，因此混合两者会使面板在水合后跳动。像素大小在客户端上测量，并且总是会有一点偏移。
::

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-items'
  items:
    - slot: 'sidebar'
      minSize: 15
      maxSize: 40
      defaultSize: 25
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'main'
      defaultSize: 75
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  sidebar: Sidebar
  main: Main
---

#sidebar
边栏

#main
主要
::

### 方向

使用`orientation`属性将拆分器. xmp的方向更改为`horizontal`。

::component-code
---
collapse: true
class: 'h-96'
prettier: true
ignore:
  - items
  - id
external:
  - items
externalTypes:
  - SplitterItem[]
props:
  id: 'splitter-orientation'
  orientation: 'vertical'
  items:
    - slot: 'first'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
    - slot: 'second'
      class: 'bg-elevated/50 border border-default rounded-xl items-center justify-center text-muted font-medium'
slots:
  first: First
  second: Second
---

#first
第一

#second
二
::

## 示例

### 带可折叠面板

在一个项目上设置`collapsible: true`，让它折叠超过它的`minSize`，并使用`collapsedSize`在折叠时保持面板的一部分可见。面板槽暴露`collapsed`，`collapse`和`expand`，因此您可以通过编程方式控制它，`collapse`，`expand`和`resize`事件将与面板索引一起触发。

::component-example
---
collapse: true
name: 'splitter-collapsible-example'
---
::

### 带嵌套拆分器

将`Splitter`嵌套在面板中以构建二维IDE样式的布局。

::component-example
---
collapse: true
name: 'splitter-nested-example'
---
::

### 带自定义手柄

默认情况下，句柄是不可见的。使用`ui`属性可以重新设置它的样式，例如，作为齐平布局的可见分隔线，使用`resize-handle`插槽可以将其内部的内容呈现为夹点。

::component-example
---
collapse: true
name: 'splitter-custom-handle-example'
---
::

### 具有持久性

提供一个`auto-save-id`来将布局保持为`localStorage`并在重新加载时恢复它。

```vue
<template>
  <USplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </USplitter>
</template>
```

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
