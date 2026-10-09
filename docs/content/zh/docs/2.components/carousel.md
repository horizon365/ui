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

## 用法

使用Carousel组件可以在carousel中显示项目列表。

::component-example
---
collapse: true
overflowHidden: true
name: 'carousel-example'
class: '!p-0'
---
::

::note
使用鼠标在桌面上水平拖动转盘。
::

### 项目

使用`items` prop作为数组，并使用默认插槽渲染每个项目：

::component-example
---
name: 'carousel-items-example'
class: 'p-8'
---
::

您也可以传递具有下列属性的物件数组：

- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue }`{lang="ts-type"}

通过使用`item`上的[`basis`](https://tailwindcss.com/docs/flex-basis)/[`width`](https://tailwindcss.com/docs/width)实用程序类，可以控制可见项目的数量：

::component-example
---
name: 'carousel-items-multiple-example'
class: 'p-8 px-16'
---
::

### 方向

使用`orientation`道具将Progress.dll的方向更改为`horizontal`。

::note
使用鼠标在桌面上垂直拖动转盘。
::

::component-example
---
name: 'carousel-orientation-example'
class: 'p-8'
---
::

::caution
您需要在容器上指定一个垂直方向的`height`。
::

### 箭头

使用`arrows` prop来显示prev和next按钮。

::component-example
---
name: 'carousel-arrows-example'
class: 'p-8'
---
::

### 上一页/下一页

使用`prev`和`next`道具自定义上一个和下一个按钮与任何[Button](/docs/components/button)道具。

::component-example
---
name: 'carousel-prev-next-example'
class: 'p-8'
---
::

### 上一个/下一个图标

使用`prev-icon`和`next-icon`道具自定义按钮[Icon](/docs/components/icon).exe到`i-lucide-arrow-left`/`i-lucide-arrow-right`。

::component-example
---
name: 'carousel-prev-next-icon-example'
class: 'p-8'
options:
  - name: 'prevIcon'
    label: 'prevIcon'
    default: 'i-lucide-chevron-left'
  - name: 'nextIcon'
    label: 'nextIcon'
    default: 'i-lucide-chevron-right'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.arrowLeft`/`ui.icons.arrowRight`键下全局自定义这些图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.arrowLeft`/`ui.icons.arrowRight`键下全局自定义这些图标。
:::
::

### Dots

使用`dots`道具显示点列表，以滚动到特定幻灯片。

::component-example
---
name: 'carousel-dots-example'
class: 'p-8 pb-12'
---
::

点的数量取决于视图中显示的幻灯片数量：

::component-example
---
name: 'carousel-dots-multiple-example'
class: 'p-8 px-16 pb-12'
---
::

## Plugins

Caribbean组件实现了官方[Embla Caribbean插件](https://www.embla-carousel.com/docs/v8/plugins)。

### 自动播放

此插件用于扩展Embla Carbide的**autoplay**功能。

使用`autoplay`属性作为布尔值或对象来配置[Autoplay插件](https://www.embla-carousel.com/docs/v8/plugins/autoplay)。

::component-example
---
name: 'carousel-autoplay-example'
class: 'p-8 px-16 pb-12'
---
::

::note
在这个例子中，我们使用`loop` prop来实现无限旋转木马。
::

### 自动滚动

此插件用于扩展Embla Caribbean的**自动滚动**功能。

使用`auto-scroll`属性作为布尔值或对象来配置[自动滚动插件](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll)。

::component-example
---
name: 'carousel-auto-scroll-example'
class: 'p-8 px-16 pb-12'
---
::

::note
在这个例子中，我们使用`loop` prop来实现无限旋转木马。
::

### 自动高度

此插件用于扩展Embla Carbide的**auto height**功能。它可以更改carousel容器的高度，以适应视图中最高幻灯片的高度。

使用`auto-height`属性作为布尔值或对象来配置[自动高度插件](https://www.embla-carousel.com/docs/v8/plugins/auto-height)。

::component-example
---
name: 'carousel-auto-height-example'
class: 'p-8 pt-16'
---
::

::note
在本例中，我们在容器上添加`transition-[height]`类，以动画方式显示高度变化。
::

### 类名称

Class Names是Embla Caribbean的**类名称toggle**实用程序插件，使您能够自动切换carousel上的类名称。

使用`class-names`属性作为布尔值或对象来配置[ClassNames插件](https://www.embla-carousel.com/docs/v8/plugins/class-names)。

::component-example
---
name: 'carousel-class-names-example'
class: 'p-8'
---
::

::note
在本例中，我们在`item`上添加`transition-opacity [&:not(.is-snapped)]:opacity-10`类，以动画方式显示不透明度的变化。
::

### Fade

此插件用于将Embla Carnival滚动功能替换为**fade transitions**。

使用`fade`属性作为布尔值或对象来配置[Fade插件](https://www.embla-carousel.com/docs/v8/plugins/fade)。

::component-example
---
name: 'carousel-fade-example'
class: 'p-8 pb-12'
---
::

### 滚轮手势

此插件用于扩展Embla Carbide，使其能够**使用鼠标/触控板滚轮**导航carousel。

使用`wheel-gestures` prop作为布尔值或对象来配置[Wheel Gestures插件](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures)。

::note
使用鼠标滚轮滚动传送带。
::

::component-example
---
name: 'carousel-wheel-gestures-example'
class: 'p-8 px-16'
---
::

## 示例

### 带缩略图

您可以使用[`emblaApi`](#expose)上的[`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto)方法在导航到特定幻灯片的旋转木马下显示缩略图。

::component-example
---
name: 'carousel-thumbnails-example'
class: 'p-8 px-16'
---
::

## API

### Props

:component-props

### Slots

:component-slots

### Emits

:component-emits

### 曝光

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
| `emblaRef`{lang="ts-type"}| `Ref<HTMLElement \| null>`{lang="ts-type"}|
| `emblaApi`{lang="ts-type"}| [`Ref<EmblaCarouselType \| null>`{lang="ts-type"}](https://www.embla-carousel.com/docs/v8/api/methods#typescript)|

## Theme

:component-theme

## Changelog

:component-changelog
