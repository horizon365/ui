---
title: Changelog版本
description: '在时间轴中显示更新日志版本列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## 用法

ChangelogVersions组件提供了一个灵活的布局，可以使用默认插槽或`versions`属性显示[ChangelogVersion](/docs/components/changelog-version)组件的列表。

```vue {2,8}
<template>
  <UChangelogVersions>
    <UChangelogVersion
      v-for="(version, index) in versions"
      :key="index"
      v-bind="version"
    />
  </UChangelogVersions>
</template>
```

### 版本

使用`versions` prop作为具有[ChangelogVersion](/docs/components/changelog-version#props)组件属性的对象数组。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### 指示灯

使用`indicator`道具隐藏左边的指示条。将其隐藏到`true`。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
props:
  indicator: false
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

### 指示器运动

使用`indicator-motion`道具自定义或隐藏指示条上的运动效果。使用`{ damping: 30, restDelta: 0.001 }` [弹簧转换选项](https://motion.dev/docs/vue-transitions#spring)将其转换为`true`。

::component-code
---
collapse: true
ignore:
  - versions
external:
  - versions
externalTypes:
  - ChangelogVersionProps[]
hide:
  - class
items:
  indicatorMotion:
    - true
    - false
props:
  indicatorMotion: true
  versions:
    - title: Nuxt 3.17
      description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.17.png
      date: 2025-04-27
      to: 'https://nuxt.com/blog/v3-17'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.16
      description: 'Nuxt 3.16 is out - packed with features and performance improvements!'
      image: https://nuxt.com/assets/blog/v3.16.png
      date: 2025-03-07
      to: 'https://nuxt.com/blog/v3-16'
      target: '_blank'
      ui.container: 'max-w-lg'
    - title: Nuxt 3.15
      description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!'
      image: https://nuxt.com/assets/blog/v3.15.png
      date: 2024-12-24
      to: 'https://nuxt.com/blog/v3-15'
      target: '_blank'
      ui.container: 'max-w-lg'
  class: 'w-full'
---
::

## 示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 页面内

在页面中使用ChangelogVersions组件来创建一个更新日志页面：

```vue [pages/changelog.vue]{10-17}
<script setup lang="ts">
const { data: versions } = await useAsyncData('versions', () => queryCollection('versions').all())
</script>

<template>
  <UPage>
    <UPageHero title="Changelog" />

    <UPageBody>
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
          :to="version.path"
        />
      </UChangelogVersions>
    </UPageBody>
  </UPage>
</template>
```

::note
在本例中，`versions`是使用`queryCollection`从`@nuxt/content`模块中获取的。
::

::tip
这里`to`属性被覆盖，因为`@nuxt/content`使用`path`属性。
::

### 带粘性指示灯

您可以使用`ui`道具和不同的插槽来使指标具有粘性：

::component-example
---
prettier: true
collapse: true
name: 'changelog-versions-sticky-example'
class: 'p-8'
props:
  class: 'w-full'
---
::

### 带滚动容器：badge{label="4.4+" class="align-text-top"}

将对象传递给`indicator` prop以配置滚动容器。默认情况下，指示器跟踪窗口/页面滚动（https：//motion.dev/docs/vue-use-scroll#page-scroll）。

```vue
<script setup lang="ts">
const scrollContainer = ref<HTMLElement>()
</script>

<template>
  <div ref="scrollContainer" class="max-h-96 overflow-y-auto">
    <UChangelogVersions v-if="scrollContainer" :indicator="{ container: scrollContainer }" />
  </div>
</template>
```

::warning
使用自定义`container`时，请确保容器元素在`UChangelogVersions`之前装入。
::

## API

### Props

:component-props

### Slots

:component-slots

::tip
您可以在ChangelogVersions中使用[`ChangelogVersion`](/docs/components/changelog-version#slots)组件的所有插槽，它们会自动转发，因此您可以在使用`versions` prop时自定义各个版本。

```vue{3-5}
<template>
  <UChangelogVersions :versions="versions">
    <template #body="{ version }">
      <Markdown :value="version.content" />
    </template>
  </UChangelogVersions>
</template>
```
::

## Theme

:component-theme

## Changelog

:component-changelog
