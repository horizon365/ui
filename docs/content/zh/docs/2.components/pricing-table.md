---
title: 价格表
description: '一个响应式定价表组件，用于显示分层定价计划和功能比较。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## 用法

PricingTable组件提供了一种以表格格式显示定价计划的响应式和可自定义的方式，可以在桌面上的水平表格布局（便于比较）和移动的上的垂直卡片布局（便于可读性）之间自动切换。

::code-preview

::u-pricing-table
---
tiers:
  - id: 'solo'
    title: 'Solo'
    description: 'For indie hackers.'
    price: '$249'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    badge: 'Most popular'
    button:
      label: 'Buy now'
      variant: 'subtle'
  - id: 'team'
    title: 'Team'
    description: 'For growing teams.'
    price: '$499'
    billingCycle: '/month'
    billingPeriod: 'billed annually'
    button:
      label: 'Buy now'
    highlight: true
  - id: 'enterprise'
    title: 'Enterprise'
    description: 'For large organizations.'
    price: 'Custom'
    button:
      label: 'Contact sales'
      color: 'neutral'
sections:
  - title: 'Features'
    features:
      - title: 'Number of developers'
        tiers:
          solo: '1'
          team: '5'
          enterprise: 'Unlimited'
      - title: 'Projects'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'GitHub repository access'
        tiers:
          solo: true
          team: true
          enterprise: true
      - title: 'Updates'
        tiers:
          solo: 'Patch & minor'
          team: 'All updates'
          enterprise: 'All updates'
      - title: 'Support'
        tiers:
          solo: 'Community'
          team: 'Priority'
          enterprise: '24/7'
  - title: 'Security'
    features:
      - title: 'SSO'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Audit logs'
        tiers:
          solo: false
          team: true
          enterprise: true
      - title: 'Custom security review'
        tiers:
          solo: false
          team: false
          enterprise: true
---
::

::

### Tiers

使用`tiers` prop作为对象数组来定义定价计划。每个层对象支持以下属性：

- `id: string`{lang="ts-type"}-层的唯一标识符（必需）
- `title?: string`{lang="ts-type"}-定价计划的名称
- `description?: string`{lang="ts-type"}-计划的简短描述
- `price?: string`{lang="ts-type"}-计划的当前价格（例如“$99”，“€99”，“免费”）
- `discount?: string`{lang="ts-type"}-显示`price`带删除线的折扣价格（例如“$79”、“€79”）
- `billingCycle?: string`{lang="ts-type"}-价格旁边显示的单价期间（例如“/月”、“/座位/月”）
- `billingPeriod?: string`{lang="ts-type"}-在计费周期上方显示的其他计费上下文（例如“按月计费”）
- `badge?: string | BadgeProps`{lang="ts-type"}-在标题旁边显示徽章`{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"}-配置CTA按钮`{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"}-是否在视觉上强调此层作为推荐选项

::component-code
---
prettier: true
collapse: true
external:
  - tiers
externalTypes:
  - PricingTableTier[]
hide:
  - class
ignore:
  - tiers
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      description: 'For indie hackers.'
      price: '$249'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      badge: 'Most popular'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      description: 'For growing teams.'
      price: '$499'
      billingCycle: '/month'
      billingPeriod: 'billed annually'
      button:
        label: 'Buy now'
      highlight: true
    - id: 'enterprise'
      title: 'Enterprise'
      description: 'For large organizations.'
      price: 'Custom'
      button:
        label: 'Contact sales'
        color: 'neutral'
  class: 'border-b border-default'
---
::

### 截面

使用`sections`属性将功能组织到逻辑组中。每个部分代表您要在不同定价层中进行比较的功能类别。

- `title: string`{lang="ts-type"}-功能部分的标题
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-一系列功能及其在每个层中的可用性：
  - 每个功能都需要将层ID映射到值的`title`和`tiers`对象
  - 布尔值（`true`/`false`）将显示为复选标记（）或减号图标（-）
  - String值将显示为文本（例如“无限”，“最多5个用户”）
  - 数值将按原样显示（例如10、100）

::component-code
---
prettier: true
collapse: true
external:
  - tiers
  - sections
externalTypes:
  - PricingTableTier[]
  - PricingTableSection[]
hide:
  - class
ignore:
  - tiers
  - sections
props:
  tiers:
    - id: 'solo'
      title: 'Solo'
      price: '$249'
      description: 'For indie hackers.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
        variant: 'subtle'
    - id: 'team'
      title: 'Team'
      price: '$499'
      description: 'For growing teams.'
      billingCycle: '/month'
      button:
        label: 'Buy now'
    - id: 'enterprise'
      title: 'Enterprise'
      price: 'Custom'
      description: 'For large organizations.'
      button:
        label: 'Contact sales'
        color: 'neutral'
  sections:
    - title: 'Features'
      features:
        - title: 'Number of developers'
          tiers:
            solo: '1'
            team: '5'
            enterprise: 'Unlimited'
        - title: 'Projects'
          tiers:
            solo: true
            team: true
            enterprise: true
    - title: 'Security'
      features:
        - title: 'SSO'
          tiers:
            solo: false
            team: true
            enterprise: true
---
::

## 示例

### 带插槽

PricingTable组件提供了强大的插槽自定义选项来定制内容的显示。您可以使用通用插槽自定义单个元素，也可以使用其ID来定位特定项目。

::component-example
---
prettier: true
name: 'pricing-table-slots-example'
collapse: true
---
::

该组件支持各种插槽类型，以实现最大的自定义灵活性：

| 时隙类型|图案|描述|例如|
|-----------|---------|-------------|---------|
| **层插槽**| `#{tier-id}-{element}`|针对特定层|`#team-title`、`#solo-price`|
| **截面槽**| `#section-{id\|formatted-title}-title`|目标特定部分|`#section-features-title`|
| **功能插槽**| `#feature-{id\|formatted-title}-{title\|value}`|目标特定功能|`#feature-developers-title`|
| **通用插槽**| `#tier-title`、`#section-title`等。|适用于所有项目|`#feature-value`|

::note
当没有提供`id`时，插槽名称将从标题自动生成（例如，“Premium Features！”将变为`#section-premium-features-title`）。
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
