---
title: 输入评级
description: 显示和收集用户评级的组件。
category: form
keywords:
  - star rating
  - stars
links:
  - label: 评级
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/rating
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/InputRating.vue
---

## 使用情况

使用`v-model`指令可控制InputRating组件的评级值。

::component-code
---
外部：
  - 模型值
道具：
  型号值：3
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
忽略：
  - 默认值
道具：
  默认值：3
---
::

第五步

使用`step`属性来控制每颗星星的粒度。将其设置为`0.5`可允许半星评级。

::component-code
---
忽略：
  - 默认值
道具类：
  步长：0.5
  默认值：3.5
---
::

长度

使用`length`道具来设定星星的数目。预设值为`5`。

::component-code
---
忽略：
  - 默认值
道具：
  长度：10
  步长：0.5
  默认值：7.5
---
::

### 可清除

使用`clearable`道具，允许使用者按一下目前选取的值来清除分级。预设值为`false`。

::component-code
---
忽略：
  - 默认值
道具：
  可清除：true
  默认值：3
---
::

### 可悬停

使用`hoverable`道具可控制评分是否在悬停在星星上时预览值。默认值为`false`。

::component-code
---
忽略：
  - 默认值
道具：
  可悬停：true
  默认值：3
---
::

### Icon

使用`icon`道具自定义用于星星的图标。将其添加到`i-lucide-star`。

::component-code
---
忽略：
  - defaultValue
道具：
  图标：“i-lucide-heart”（我的心）
  默认值：4
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`app.config.ts`中的`ui.icons.star`键下全局自定义默认的星星图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`vite.config.ts`中的`ui.icons.star`键下全局自定义默认的星星图标。
:::
::

### Empty图标

使用`empty-icon`prop自定义空星的图标。如果未提供，则使用与`icon`相同的图标。

::component-code
---
忽略：
  - defaultValue
道具：
  emptyIcon：'i-lucide-circle'
  图标：'i-lucide-circle-check'
  默认值：3
---
::

### Color

使用`color`道具更改填充星星的颜色。

::component-code
---
忽略：
  - defaultValue
道具：
  颜色：中性
  默认值：4
---
::

### Size

使用`size`道具更改星星的大小。

::component-code
---
忽略：
  - defaultValue
项目名称：
  尺寸：
    - xs
    - sm
    - md
    - lg
    - xl
道具：
  尺寸：xl
  默认值：4
---
::

方向

使用`orientation`道具更改评级的方向。默认为`horizontal`。

::component-code
---
忽略：
  - 默认值
道具：
  方向：垂直
  默认值：4
---
::

### 已禁用

使用`disabled`道具来停用InputRating组件。停用时，该组件的不透明度会降低（75%），并显示`not-allowed`游标来表示它不是互动式的。

::component-code
---
忽略：
  - 默认值
道具：
  已禁用：true
  默认值：3
---
::

### 只读

使用`readonly`道具可在不允许使用者互动的情况下显示评等。与`disabled`不同的是，它会维持正常的外观（完全不透明，预设游标）。当您要显示无法变更但看起来正常的评等时，请使用此道具。

::component-code
---
忽略：
  - 默认值
道具：
  只读：true
  默认值：4.5
---
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
