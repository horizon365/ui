---
title: PageCTA
description: '在页面中显示的行动号召部分。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageCTA.vue
---

## 使用情况

PageCTA组件提供了一种灵活的方式，可以在页面中显示行动号召，并在默认位置显示插图。

::code-preview

::u-page-c-t-a
---
title："受到我们令人惊叹的社区的信任和支持"
description：'预览最新的Tailwind CSS并开始使用Nuxt UI。'
方向：水平
链接：
  - label：'开始使用'
    颜色：'中性'
  - label：'了解更多'
    颜色："中性"
    变体："细微"
    尾部图标：'i-透明箭头-右'
---

：img{src="https://picsum.photos/640/616" width="320" height="308" alt="Illustration" class="w-full rounded-lg"}
::

::

在[PageSection](/docs/components/page-section)组件中使用它，或直接在您的页面中使用：

```vue {4,8-10}
<template>
  <UPageHero />

  <UPageCTA class="rounded-none" />

  <UPageSection />

  <UPageSection :ui="{ container: 'px-0' }">
    <UPageCTA class="rounded-none sm:rounded-xl" />
  </UPageSection>

  <UPageSection />
</template>
```

::tip
使用`px-0`和`rounded-none`类使CTA填充移动设备上的页面边缘。
::

标题：

使用`title`道具设置CTA的标题。

::component-code{slug="page-CTA"}
---
道具：
  title："受到我们令人惊叹的社区的信任和支持"
---
::

说明：

使用`description`道具设置CTA的描述。

::component-code{slug="page-CTA"}
---
更漂亮：真的
忽略：
  标题
道具：
  title："受到我们令人惊叹的社区的信任和支持"
  描述："我们建立了牢固、持久的合作关系。他们的信任是我们的动力，推动我们走向共同的成功。"
---
::

链接

使用`links`属性在描述下显示[按钮](/docs/components/button的列表。

::component-code{slug="page-CTA"}
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题
  描述：
  链接
道具：
  title："受到我们令人惊叹的社区的信任和支持"
  描述：“我们建立了牢固、持久的合作关系。他们的信任是我们的动力，推动我们走向共同的成功。”
  链接：
    - label：'开始使用'
      颜色：'中性'
    - label：'了解更多信息'
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
---
::

### 变体

使用`variant`道具更改CTA的样式。

::component-code{slug="page-CTA"}
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题
  描述
  链接
道具：
  title：“受到我们令人惊叹的社区的信任和支持”
  描述：“我们建立了牢固、持久的合作关系。他们的信任是我们的动力，推动我们走向共同的成功。”
  变体：软
  链接：
    - 标签：“开始使用”
      颜色：“中性”
    - label：'了解更多'
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
---
::

::tip
当使用`solid`变体来反转颜色时，您可以将`light`或`dark`类应用于`links`插槽。
::

方向

使用`orientation`道具更改默认插槽的方向。默认为`vertical`。

::component-code{slug="page-CTA"}
---
更漂亮：真的
外部：
  链接
外部类型：
  按钮属性[]
忽略：
  标题：
  描述：
  链接
道具：
  title：“受到我们令人惊叹的社区的信任和支持”
  描述：“我们建立了牢固、持久的合作关系。他们的信任是我们的动力，推动我们走向共同的成功。”
  方向：水平
  链接：
    - 标签：“开始使用”
      颜色：“中性”
    - label：'了解更多'
      颜色：“中性”
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    066号
---

：img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

反向

使用`reverse`道具反转默认插槽的方向。

::component-code{slug="page-CTA"}
---
更漂亮：真的
外部：
  链接
外部类型：
  - 按钮属性[]
忽略：
  标题：
  描述：
  链接
道具：
  title：“受到我们令人惊叹的社区的信任和支持”
  描述：“我们建立了牢固、持久的合作关系。他们的信任是我们的动力，推动我们走向共同的成功。”
  方向：水平
  反转：真
  链接：
    - 标签：“开始使用”
      颜色：“中性”
    - label：'了解更多'
      颜色：'中性'
      变体：“细微”
      尾部图标：'i-透明箭头-右'
插槽：
  默认值：|

    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
---

：img{src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy"}
::

## API

### Props

：组件-道具{slug="page-CTA"}

### Slots

：组件插槽{slug="page-CTA"}

## Theme

：组件主题{slug="page-CTA"}

## Changelog

：组件更改日志
