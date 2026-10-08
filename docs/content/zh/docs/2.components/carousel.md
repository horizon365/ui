---
description: 使用Embla构建的具有运动和滑动功能的旋转木马。
category: data
keywords:
  - swiper
  - gallery
  - image slider
  - slideshow
links:
  - label: Embla
    to: https://www.embla-carousel.com/docs/v8/api
    icon: i-custom-embla-carousel
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Carousel.vue
---

## 使用情况

使用Carousel组件可以显示Carousel中的项目列表。

::component-example
---
收阖：true
overflowHidden：真的
名称：'转盘-示例'
类：“！p-0”
---
::

::note
使用鼠标在桌面上水平拖动转盘。
::

项目

将`items`道具用作数组，并使用默认插槽呈现每个项目：

::component-example
---
名称：'转盘-项目-示例'
类别：'p-8'
---
::

您也可以传递具有下列属性的物件数组：

005号机
006，007，008，008，009，009，0009，0009，00009，0009，00009，00009，000009，00009，000009，000000，00009，000009，00000，009，00009，00009，0009，00009，000009，00009，0

您可以使用`item`上的[`basis`](https://tailwindcss.com/docs/flex-basis) /[`width`](https://tailwindcss.com/docs/width)实用程序类来控制可见的项目数：

::component-example
---
名称：'转盘-项目-多个-示例'
类别：'p-8像素-16'
---
::

定位

使用`orientation`道具来变更进度的方向。预设为`horizontal`。

::note
使用鼠标在桌面上垂直拖动转盘。
::

::component-example
---
名称：'转盘-方向-示例'
类别：'p-8'
---
::

::caution
您需要在垂直方向的容器上指定`height`。
::

箭头

使用`arrows`属性显示“上一个”和“下一个”按钮。

::component-example
---
名称：'旋转木马-箭头-示例'
类别：'p-8'
---
::

### 上一个/下一个

使用`prev`和`next`道具，以任何[按钮](/docs/components/button)道具自订上一个和下一个按钮。

::component-example
---
名称：'转盘-上一个-下一个-示例'
类别：'p-8'
---
::

### 上一个/下一个图标

使用`prev-icon`和`next-icon`道具来自定义按钮[图标](。默认值为`i-lucide-arrow-left` / `i-lucide-arrow-right`。

::component-example
---
名称：'转盘-上一个-下一个-图标-示例'
类别：'p-8'
可选项：
  名称：'前一个图标'
    标签：'prevIcon'
    默认值：“i-lucide-V形符号-左”
  名称：'下一个图标'
    标签：'nextIcon'
    默认值：'i-lucide-chevron-right'
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.arrowLeft` / `ui.icons.arrowRight`键下全局自定义这些图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.arrowLeft` / `ui.icons.arrowRight`键下全局自定义这些图标。
:::
::

### Dots

使用`dots`道具显示点列表，以滚动到特定幻灯片。

::component-example
---
名称：'carousel-dots-example'
类别：'p-8 pb-12'
---
::

点的数量取决于视图中显示的幻灯片数量：

::component-example
---
名称：'carousel-dots-multiple-example'
类别：'p-8 px-16 pb-12'
---
::

## Plugins

Caribbean组件实现了官方的[Embla Caribbean插件](https://www.embla-carousel.com/docs/v8/plugins)。

### Autoplay

此插件用于扩展Embla Carbide，使其具有**autoplay**功能。

使用`autoplay`prop作为布尔值或对象来配置[Autoplay插件](https://www.embla-carousel.com/docs/v8/plugins/autoplay)。

::component-example
---
名称：'旋转木马-自动播放-示例'
类别：'p-8 px-16 pb-12'
---
::

::note
在这个例子中，我们使用了`loop`prop作为一个无限旋转木马。
::

### Auto Scroll

此插件用于扩展Embla Carbide，使其具有**自动滚动**功能。

使用`auto-scroll`prop作为布尔值或对象来配置[自动滚动插件](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll)。

::component-example
---
名称：'旋转木马自动滚动示例'
类别：'p-8 px-16 pb-12'
---
::

::note
在这个例子中，我们使用了`loop`prop作为一个无限旋转木马。
::

### Auto Height

此插件用于扩展Embla Carbide，使其具有**auto height**功能。它可以更改carousel容器的高度，以适应视图中最高幻灯片的高度。

使用`auto-height`prop作为布尔值或对象来配置[自动高度插件](https://www.embla-carousel.com/docs/v8/plugins/auto-height)。

::component-example
---
名称：'旋转木马自动高度示例'
类别：'p-8 pt-16'
---
::

::note
在本例中，我们在容器上添加`transition-[height]`类，以动画方式显示高度变化。
::

### 类名

Class Names是一个用于Embla Caribbean的**class name toggle**实用程序插件，使您能够在carousel上自动切换类名。

使用`class-names`prop作为布尔值或对象来配置[类名插件](https://www.embla-carousel.com/docs/v8/plugins/class-names)。

::component-example
---
name：'carousel-class-names-example'
类别：'p-8'
---
::

::note
在本例中，我们在`item`上添加了`transition-opacity [&:not(.is-snapped)]:opacity-10`类，以动画方式显示不透明度的变化。
::

### Fade

此插件用于将Embla Carnival滚动功能替换为**fade transitions**。

使用`fade`prop作为布尔值或对象来配置](https://www.embla-carousel.com/docs/v8/plugins/fade)。

::component-example
---
名称：'旋转木马-褪色-例子'
类别：'p-8 pb-12'
---
::

### Wheel手势

此插件用于扩展Embla Carbide，使其能够**使用鼠标/触控板滚轮**来导航carousel。

使用`wheel-gestures`prop作为布尔值或对象来配置[Wheel Gestures插件](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)。

::note
使用鼠标滚轮滚动传送带。
::

::component-example
---
name：'旋转木马-轮子-手势-示例'
类别：'p-8 px-16'
---
::

## 示例

### With thumbnails

您可以在[`emblaApi`](#expose)上使用[`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto)方法，在导航到特定幻灯片的轮播下显示缩略图。

::component-example
---
名称：'旋转木马-缩略图-示例'
类别：'p-8 px-16'
---
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

### Expose

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例。

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <UCarousel ref="carousel" />
</template>
```

这将使您能够访问以下内容：

| 名称|类型|
| ---- | ---- |
| `emblaRef`{lang="ts-type"}|`Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}|[`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## Theme

：组件主题

## Changelog

：组件更改日志
