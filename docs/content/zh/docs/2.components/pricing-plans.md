---
title: 价格计划
description: '在响应式网格布局中显示定价计划列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingPlans.vue
---

## 使用情况

PricingPlans组件提供了一种灵活的布局，可使用默认插槽或`plans`属性显示[PricingPlan](/docs/components/pricing-plan)组件的列表。

```vue {2,8}
<template>
  <UPricingPlans>
    <UPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </UPricingPlans>
</template>
```

::tip
网格列将根据计划的数量自动计算，这与`plans`属性以及默认插槽一起使用。
::

计划

使用`plans`属性作为具有[PricingPlan](/docs/components/pricing-plan#props)组件属性的对象数组。

::component-code
---
收阖：true
忽略：
  计划
外部：
  计划
外部类型：
  - 定价计划属性[]
道具：
  计划：
    独奏曲
      description：“专为独立黑客量身定制。”
      售价：“$249”
      特点：
        - '一个开发人员'
        - '终身访问'
      按钮：
        标签：“立即购买”
    启动中
      description：'最适合小型团队。'
      售价：四百九十九元
      特点：
        - '最多5名开发人员'
        - '全部在独奏中'
      按钮：
        标签：“立即购买”
- 组织机构
      description：'适合大型团队和组织。'
      售价：“$999”
      特点：
        - '最多20名开发人员'
        - '启动中所有内容'
      按钮：
        标签：“立即购买”
---
::

定位

使用`orientation`属性更改定价计划的方向。默认为`horizontal`。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  计划
外部：
  计划
外部类型：
  - 定价计划属性[]
道具：
  方向：垂直
  计划：
    独奏曲
      description：“专为独立黑客量身定制。”
      售价：“$249”
      特点：
        - '一个开发人员'
        - '终身访问'
      按钮：
        标签：“立即购买”
    启动中
      description：'最适合小型团队。'
      售价：四百九十九元
      特点：
        - '最多5名开发人员'
        - '全部在独奏中'
      按钮：
        标签：“立即购买”
    组织机构
      description：'适合大型团队和组织。'
      售价：“$999”
      特点：
        - '最多20名开发人员'
        - '启动中所有内容'
      按钮：
        标签：“立即购买”
  类：'w-完整'
---
::

::tip
当使用`plans`道具而不是默认插槽时，平面图的`orientation`将自动反转，`horizontal`将变为`vertical`，反之亦然。
::

### 紧凑

在缩放其中一个平面图以获得更好的视觉平衡时，使用`compact`道具来减少平面图之间的填充。

::component-code
---
收阖：true
忽略：
  计划
  紧凑型
外部：
  计划
外部类型：
  - PricingPlan属性[]
类别：'p-8'
道具：
  压缩：true
  计划：
    独奏曲
      description：“专为独立黑客量身定制。”
      售价：“$249”
      特点：
        - '一个开发人员'
        - '终身访问'
      按钮：
        标签：“立即购买”
    启动中
      description：'最适合小型团队。'
      售价：四百九十九元
      比例：真
      特点：
        - '最多5名开发人员'
        “一切尽在独奏”
      按钮：
        标签：“立即购买”
    组织机构
      description：'适合大型团队和组织。'
      售价：“$999”
      特点：
        - '最多20名开发人员'
        - '启动中一切'
      按钮：
        标签：'立即购买'
---
::

比例尺

在缩放其中一个平面图以获得更好的视觉平衡时，使用`scale`道具调整平面图之间的间距。

::component-code
---
收阖：true
忽略：
  计划
  比例尺
外部：
  计划
外部类型：
- 定价计划属性[]
类别：'p-8'
道具：
  比例：真
  计划：
    独奏曲
      description：“专为独立黑客量身定制。”
      售价：“$249”
      特点：
        - '一个开发人员'
        - '终身访问'
      按钮：
        标签：“立即购买”
    启动中
      description：'最适合小型团队。'
      售价：四百九十九元
      比例：真
      特点：
        - '最多5名开发人员'
        - '全部在独奏中'
      按钮：
        标签：“立即购买”
    组织机构
      description：'适合大型团队和组织。'
      售价：“$999”
      特点：
        - '最多20名开发人员'
        - '启动中所有内容'
      按钮，您可以：
        标签：“立即购买”
---
::

示例

::note
虽然这些示例使用[Nuxt Content](https://content.nuxt.com)，但这些组件可以与任何内容管理系统集成。
::

### 在页面内

在页面中使用PricingPlans组件创建定价页面：

```vue [pages/pricing/index.vue]{11}
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <UPage>
    <UPageHero title="Pricing" />

    <UPageBody>
      <UContainer>
        <UPricingPlans :plans="plans" />
      </UContainer>
    </UPageBody>
  </UPage>
</template>
```

::note
在本例中，使用`queryCollection`从`@nuxt/content`模块中获取`plans`。
::

## 活性成分

### Props

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## Changelog

：组件更改日志
