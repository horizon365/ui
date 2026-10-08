---
title: Changelog版本
description: '在时间轴中显示更新日志版本列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersions.vue
---

## 使用情况

ChangelogVersions组件提供了灵活的布局，可使用默认插槽或`versions`属性显示[ChangelogVersion](/docs/components/changelog-version)组件的列表。

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

版本号

使用`versions`属性作为具有[ChangelogVersion](/docs/components/changelog-version#props)组件属性的对象数组。

::component-code
---
收阖：true
忽略：
  版本号
外部：
  版本号
外部类型：
  - Changelog版本属性[]
隐藏：
  班级
道具：
  版本：
    新版本3.17
      产品说明：“Nuxt 3.17已经发布--对异步数据层进行了重大改造，添加了一个新的内置组件，提供了更好的警告，并提高了性能！”
      图片：https://nuxt.com/assets/blog/v3.17.png
      日期：2025年4月27日
      发送至：“https：//nuxt.com/blog/v3-17”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
    新版本3.16
      描述：“Nuxt3.16在功能和性能上都有改进！”
      图片：https://nuxt.com/assets/blog/v3.16.png
      日期：2025年3月7日
      发送至：“https：//nuxt.com/blog/v3-16”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
    新版本3.15
      描述：“Nuxt 3.15已经过时了--Vite 6，更好的HMR和更快的性能！”
      图片：https://nuxt.com/assets/blog/v3.15.png
      日期：2024年12月24日
      发送至：“https：//nuxt.com/blog/v3-15”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
  类别：'w-完整'
---
::

### 指标

使用`indicator`道具隐藏左侧的指示器栏。默认为`true`。

::component-code
---
收阖：true
忽略：
  版本号
外部：
  版本号
外部类型：
  - Changelog版本属性[]
隐藏：
  班级
道具：
  指示器：假
  版本：
    新版本3.17
      产品说明：“Nuxt 3.17已经发布--对异步数据层进行了重大改造，添加了一个新的内置组件，提供了更好的警告，并提高了性能！”
      图片：https://nuxt.com/assets/blog/v3.17.png
      日期：2025年4月27日
      发送至：“https：//nuxt.com/blog/v3-17”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
    新版本3.16
      描述：“Nuxt3.16在功能和性能上都有改进！”
      图片：https://nuxt.com/assets/blog/v3.16.png
      日期：2025年3月7日
      发送至：“https：//nuxt.com/blog/v3-16”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
    新版本3.15
      描述：“Nuxt 3.15已经过时了--Vite 6，更好的HMR和更快的性能！”
      图片：https://nuxt.com/assets/blog/v3.15.png
      日期：2024年12月24日
      发送至：“https：//nuxt.com/blog/v3-15”
      目的：'_blank'
      UI.容器：“最大值-w-lg”
  类别：'w-完整'
---
::

### 指示器移动

使用`indicator-motion`道具可自定义或隐藏指示器栏上的运动效果。默认为`true`，`{ damping: 30, restDelta: 0.001 }`[弹簧切换选项](https://motion.dev/docs/vue-transitions#spring)。

::component-code
---
收阖：true
忽略：
  版本号
外部：
  版本号
外部类型：
  - Changelog版本属性[]
隐藏：
  班级
项目名称：
  指示灯运动：
    真的
    不对
道具：
  指示器运动：真
  版本：
    新版本3.17
      产品说明："Nuxt 3.17已经发布--对异步数据层进行了重大改造，添加了一个新的内置组件，提供了更好的警告，并提高了性能!"
      图片：www.example.com
      日期：2025年4月27日
      发送至："https：//nuxt.com/blog/v3-17"
      目的：'_blank'
      UI.容器："最大值-w-lg"
    新版本3.16
      描述："Nuxt3.16在功能和性能上都有改进!"
      图片：www.example.com
      日期：2025年3月7日
      发送至："https：//nuxt.com/blog/v3-16"
      目的：'_blank'
      UI.容器："最大值-w-lg"
    新版本3.15
      描述："Nuxt 3.15已经过时了--Vite 6，更好的HMR和更快的性能!"
      图片：www.example.com
      日期：2024年12月24日
      发送至："https：//nuxt.com/blog/v3-15"
      目的：'_blank'
      UI.容器："最大值-w-lg"
  类别：'w-完整'
---
::

示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 在页面内

在页面中使用ChangelogVersions组件创建更改日志页面：

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
在此示例中，`versions`是使用`queryCollection`从`@nuxt/content`模块中提取的。
::

::tip
`to`属性在此处被覆盖，因为`@nuxt/content`使用了`path`属性。
::

### 使用粘性指示器

您可以使用`ui`道具和不同的插槽使指示器具有粘性：

::component-example
---
更漂亮：真的
收阖：true
名称：'变更记录版本固定范例'
类别：'p-8'
道具：
  类别：'w-完整'
---
::

### 带有滚动容器：徽标{label="4.4+" class="align-text-top"}

将物件传递至`indicator`属性以设定卷动容器。根据预设，指示器会追踪视窗/页面卷动（https：//motion.dev/docs/vue-use-scroll#page-scroll）。

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
使用自定义`container`时，请确保在`UChangelogVersions`之前装入容器元素。
::

## 活性成分

### 道具

：组件-支柱

插槽

：组件插槽

::tip
您可以在ChangelogVersions中使用[`ChangelogVersion`](/docs/components/changelog-version#slots)组件的所有插槽，这些插槽会自动转发，因此您可以在使用`versions`属性时自定义各个版本。

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

主题

：组件主题

## 变更日志

：组件更改日志
