---
title: 价格表
description: '一个响应式定价表组件，用于显示分层定价计划和功能比较。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PricingTable.vue
---

## 使用情况

PricingTable组件提供了一种响应迅速且可自定义的方式，用于以表格格式显示定价计划，自动在桌面上的水平表格布局（便于比较）和移动的上的垂直卡片布局（可读性更好）之间切换。

::code-preview

::u-pricing-table
---
层级：
- 账号：“单飞”
    标题：“独奏”
    description：“为独立黑客提供。”
    售价：“$249”
    计费周期：'/月'
    billingPeriod：'每年计费'
    徽章：“最受欢迎”
    按钮：
      标签：“立即购买”
      变体：“细微”
  - id：“团队”
    标题：“团队”
    description：'适合成长中的团队。'
    售价：四百九十九元
    计费周期：'/月'
    billingPeriod：'每年计费'
    按钮：
      标签：“立即购买”
    高亮显示：真
  - id：“企业”
    标题：“企业”
    description：'适用于大型组织。'
    价格：'自定义'
    按钮：
      label：'联系销售'
      颜色：“中性”
区段：
  - title：“功能”
    特点：
      - title：'开发人员数量'
        层级：
          独奏：'1'
          队伍：'5'
          企业：'无限制'
      - title：“项目”
        层级：
          独奏：true
          组：真
          企业：true
      - title：“GitHub存储库访问”
        层级：
          独奏：true
          组：真
          企业：true
      - title：“更新”
        层级：
          solo：'Patch小调（& M）'
          组：'所有更新'
          企业：'所有更新'
      - title：“支持”
        层级：
          solo：“社区”
          组：“优先级”
          企业：“24/7”
  - title：“安全性”
    特点：
      标题：“单点登录”
        层级：
          solo：假
          组：真
          企业：true
      - title：'审核日志'
        层级：
          solo：假
          组：真
          企业：true
      - title：'自订安全性检阅'
        层级：
          solo：假
          组：假
          企业：true
---
::

::

分层

使用`tiers`属性作为对象数组来定义您的定价计划。每个层对象都支持以下属性：

- `id: string`{lang="ts-type"} -层的唯一标识符（必需）
- `title?: string`{lang="ts-type"} -定价计划的名称
- `description?: string`{lang="ts-type"} -计划的简短描述
- `price?: string`{lang="ts-type"} -计划的当前价格（例如，“$99”、“€99”、“免费”）
- `discount?: string`{lang="ts-type"} -将显示带删除线的`price`的折扣价（例如“$79”、“€79”）
- `billingCycle?: string`{lang="ts-type"} -出现在价格旁边的单价周期（例如“/月”、“/座位/月”）
- `billingPeriod?: string`{lang="ts-type"} -显示在计费周期上方的其他计费上下文（例如，“按月计费”）
- `badge?: string | BadgeProps`{lang="ts-type"} -在标题旁边显示徽章`{ color: 'primary', variant: 'subtle' }`{lang="ts-type"}
- `button?: ButtonProps`{lang="ts-type"} -设定CTA按钮`{ size: 'lg', block: true }`{lang="ts-type"}
- `highlight?: boolean`{lang="ts-type"} -是否在视觉上强调此层为建议选项

::component-code
---
更漂亮：真的
收阖：true
外部：
- 层
外部类型：
  - 定价表层[]
隐藏：
  班级
忽略：
  分层
道具：
  层级：
    我的名字是“solo”
      标题：“独奏”
      description：“为独立黑客提供。”
      售价：“$249”
      计费周期：'/月'
      billingPeriod：'每年计费'
      徽章：“最受欢迎”
      按钮：
        标签：“立即购买”
        变体：“细微”
    - id：“团队”
      标题：“团队”
      description：'适合成长中的团队。'
      售价：四百九十九元
      计费周期：'/月'
      billingPeriod：'每年计费'
      按钮：
        标签：“立即购买”
      高亮显示：真
    - id：“企业”
      标题：“企业”
      description：'适用于大型组织。'
      价格：'自定义'
      按钮：
        label：'联系销售'
        颜色："中性"
  类别：'border-b边界-预设值'
---
::

部分

使用`sections`属性可将功能组织到逻辑组中。每个部分都代表要在不同定价层之间进行比较的功能类别。

- `title: string`{lang="ts-type"}-功能部分的标题
- `features: PricingTableSectionFeature[]`{lang="ts-type"}-一组功能及其在每一层中的可用性：
  - 每个功能都需要一个`title`和一个`tiers`对象，用于将层ID映射到值
  - 布尔值（`true`/`false`）将显示为复选标记（）或减号图标（-）
  - 字符串值将显示为文本（例如"无限制"、"最多5个用户"）
  - 数字值将按原样显示（例如10、100）

::component-code
---
更漂亮：真的
收阖：true
外部：
  分层
  部分
外部类型：
  - 定价表层[]
  - 定价表部分[]
隐藏：
  班级
忽略：
  分层
  部分
道具：
  层级：
- id："独奏"
      标题："独奏"
      售价：“$249”
      description："为独立黑客提供。"
      计费周期：'/月'
      按钮：
        标签："立即购买"
        变体："细微"
    - id："团队"
      标题："团队"
      售价：四百九十九元
      description：'适合成长中的团队。'
      计费周期：'/月'
      按钮：
        标签：“立即购买”
    - id：“企业”
      标题：“企业”
      价格：'自定义'
      description：'适用于大型组织。'
      按钮：
        label：'联系销售'
        颜色：“中性”
  区段：
    - title：“功能”
      特点：
        - title：'开发人员数量'
          层级：
            独奏：'1'
            队伍：'5'
            企业：'无限制'
        - title：“项目”
          层级：
            独奏：true
            组：真
            企业：true
    - title：“安全性”
      特点：
        标题：“单点登录”
          层级：
            solo：假
            组：真
            企业：true
---
::

示例

带插槽

PricingTable组件提供了功能强大的槽定制选项来定制内容的显示。您可以使用通用槽来定制各个元素，也可以使用其ID来定制特定的项目。

::component-example
---
更漂亮：真的
名称：'定价表插槽示例'
收阖：true
---
::

该组件支持各种插槽类型，以实现最大的自定义灵活性：

| 时隙类型|图案|描述|例如|
|-----------|---------|-------------|---------|
| 分层插槽数|第091章|针对特定层|第92章，第93章|
| 章节插槽|第096章|目标特定部分|第097章|
| **Featureslots**|`#feature-{id\|formatted-title}-{title\|value}`|目标特定功能|`#feature-developers-title`|
| **Generic插槽**|`#tier-title`、`#section-title`等|适用于所有项目|`#feature-value`|

::note
如果未提供`id`，插槽名称将从标题自动生成（例如，“Premium Features！”将变为`#section-premium-features-title`）。
::

## API

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
