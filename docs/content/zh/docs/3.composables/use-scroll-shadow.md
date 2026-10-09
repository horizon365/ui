---
title: 使用ScrollShadow
description: '一个可组合的应用滚动阴影效果的任何滚动元素。'
---

## 用法

使用自动导入的`useScrollShadow`组合件在可滚动元素的边缘应用淡入淡出阴影，指示滚动方向上有更多内容可用。

::component-example
---
name: 'use-scroll-shadow-example'
---
::

- 使用CSS `mask-image`在边缘淡化内容而不是覆盖元素，因此它适用于任何背景。
- 自动检测元素是否溢出，仅在需要时应用阴影。
- 支持垂直和水平方向。

## API

`useScrollShadow(element, options?)`{lang="ts-type"}

### 参数

::field-group

  ::field{name="element" type="MaybeRef<HTMLElement | null | undefined>" required}
  对可滚动元素的模板引用或反应性引用。
  ::

  ::field{name="options" type="UseScrollShadowOptions"}
  滚动阴影的配置选项。

    ::collapsible

      ::field-group
        ::field{name="size" type="MaybeRefOrGetter<number>" default="24"}
        阴影大小（以像素为单位）。
        ::

        ::field{name="orientation" type="MaybeRefOrGetter<'vertical' | 'horizontal'>" default="'vertical'"}
        应用阴影的滚动方向。
        ::
      ::
    ::
  ::
::

### 返回

::field-group

  ::field{name="style" type="ComputedRef<CSSProperties | undefined>"}
  使用`:style`绑定到可滚动元素上的反应式对象。当阴影活动时包含`maskImage`，否则包含`undefined`。
  ::

  ::field{name="isOverflowing" type="ComputedRef<boolean>"}
  元素的内容是否溢出其可见区域。
  ::

  ::field{name="arrivedState" type="{ top: boolean, bottom: boolean, left: boolean, right: boolean }"}
  来自[`useScroll`](https://vueuse.org/core/useScroll/)的被动滚动到达状态。
  ::
::

## 示例

### 水平

使用`orientation`选项用于水平滚动容器：

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { orientation: 'horizontal' })
</script>

<template>
  <div ref="el" class="overflow-x-auto whitespace-nowrap" :style="style">
    <!-- Horizontally scrollable content -->
  </div>
</template>
```

### 自定义尺寸

使用`size`选项更改阴影大小（以像素为单位）：

```vue
<script setup lang="ts">
const el = useTemplateRef('el')

const { style } = useScrollShadow(el, { size: 48 })
</script>

<template>
  <div ref="el" class="max-h-[300px] overflow-y-auto" :style="style">
    <!-- Scrollable content -->
  </div>
</template>
```
