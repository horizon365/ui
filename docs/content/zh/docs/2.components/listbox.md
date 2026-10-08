---
description: 一个可选择的项目列表与搜索，虚拟化和丰富的项目呈现。
category: form
keywords:
  - option list
  - picker
  - selection
links:
  - label: Listbox
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/listbox
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Listbox.vue
---

## 使用情况

使用`v-model`指令控制列表框的值，或使用`default-value`属性在不需要控制其状态时设置初始值。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  - modelValue.label模型值标签
  模型值.图标
- modelValue.value模型值
  项目
外部：
  项目名称
  - 模型值
外部类型：
  - ListboxItem[]列表框项目
道具：
  型号值：
    标签：“法国”
    图标：“i-lucide-映射针”
    值：'FR'
  项目名称：
    - 标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
    - 标签：'意大利'
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：'西班牙'
      图标：“i-lucide-映射针”
      值：'ES'
    - 标签：'荷兰'
      图标：“i-lucide-映射针”
      值：'NL'
    - 标签：“波兰”
      图标：“i-lucide-映射针”
      值：'PL'
    - 标签：“比利时”
      图标：“i-lucide-映射针”
      值：'BE'
    - 标签：“葡萄牙”
      图标：“i-lucide-映射针”
      值：'PT'
    - 标签：“奥地利”
      图标：“i-lucide-映射针”
      值：'AT'
    - 标签：'瑞典'
      图标：“i-lucide-映射针”
      值：'SE'
  类别：'w-完整'
---
::

项目

使用`items`属性作为具有下列属性的对象数组：

我的天啊！
@@小标题：小标题
我的天啊！
我的天啊！
@@小标题：小标题：小标题
我的天啊，我的天啊
我的天啊！
我的天啊！
我的天啊！
我的天啊！

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
外部：
  项目数
外部类型：
  列表框项目[]
道具：
  项目名称：
    @@标签：“法国”
      描述："六边形“
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      描述：“联邦共和国”
      图标：“i-lucide-映射针”
      值：'DE'
    标签：“意大利”
      描述：“靴子”
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：'西班牙'
      描述：“公牛皮”
      图标：“i-lucide-映射针”
      值：'ES'
  类别：'w-完整'
---
::

您也可以将数组的数组传递给`items`属性，以显示分隔的项目群组。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
外部：
  项目数
外部类型：
  - 列表框项目[][]
道具：
  项目名称：
    - -标签：“法国”
        图标：“i-lucide-映射针”
        值：'FR'
      标签：“德国”
        图标：“i-lucide-映射针”
        值：'DE'
      标签：“意大利”
        图标：“i-lucide-映射针”
        值：'IT'
    - -标签：“巴西”
        图标：“i-lucide-映射针”
        值：'BR'
      - 标签：“阿根廷”
        图标：“i-lucide-映射针”
        值：'AR'
  类别：'w-完整'
---
::

多个

使用`multiple`属性可以选择多个项目。启用后，`v-model`将是一个数组。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  项目数
  多个
外部：
  项目数
外部类型：
  - 列表框项目[]
道具：
  多个：真
  项目名称：
    标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
- 标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
- 标签：“意大利”
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：“西班牙”
      图标：“i-lucide-映射针”
      值：'ES'
  类别：'w-完整'
---
::

### Value键

您可以选择使用`value-key`属性来系结物件的单一属性，而非整个物件。预设值为`undefined`。

::component-code
---
收阖：true
忽略：
- 模型值
- 值键
  108个项目
  班级
外部：
- 个项目
- 模型值
外部类型：
  - 列表框项目[]
道具：
  模型值：'FR'
  值键：'值'
  项目名称：
    - 标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
    - 标签：“意大利”
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：“西班牙”
      图标：“i-lucide-映射针”
      值：'ES'
  类别：'w-完整'
---
::

### 过滤器

使用`filter`属性可显示筛选器输入或传递对象以自定义[Input](/docs/components/input)组件。默认值为`false`。

::component-code
---
收阖：true
隐藏：
  124班
忽略：
  125个项目
外部：
  126个项目
外部类型：
  - ListboxItem[]列表框项
道具：
  过滤器：
    占位符：'筛选器...'
    图标：“i-lucide-搜索”
  项目名称：
    - 标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
    - 标签：“意大利”
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：“西班牙”
      图标：“i-lucide-映射针”
      值：'ES'
    - 标签：'荷兰'
      图标：“i-lucide-映射针”
      值：'NL'
    - 标签：“波兰”
      图标：“i-lucide-映射针”
      值：'PL'
  类别：'w-完整'
---
::

### 选定的图标

使用`selected-icon`属性来自订选取项目时的图标。预设为`i-lucide-check`。

::component-code
---
收阖：true
忽略：
  137个项目
- 模型值
  139值键
- 级
外部：
  141个项目
- 模型值
外部类型：
  - ListboxItem[]列表框项
道具：
  模型值：'FR'
  选定图标：“i-lucide-火焰”
  值键：'值'
  项目名称：
    @@标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
    标签：“意大利”
      图标：“i-lucide-映射针”
      值：'IT'
    @标签："西班牙"
      图标："i-lucide-映射针"
      值：'ES'
  类别：'w-完整'
---
::

尺寸：148

使用`size`属性更改列表框的大小。

::component-code
---
收阖：true
隐藏：
- 级
忽略：
  151个项目
外部：
  152个项目
外部类型：
  - ListboxItem []列表框项
道具：
  尺寸：xl
  项目名称：
    @@标签："法国"
      图标："i-lucide-映射针"
      值：'FR'
    - 标签：'德国'
      图标："i-lucide-映射针"
      值：'DE'
    标签："意大利"
      图标："i-lucide-映射针"
      值：'IT'
    - 标签："西班牙"
      图标："i-lucide-映射针"
      值：'ES'
  类别：'w-完整'
---
::

正在载入

使用`loading`道具可显示加载指示器。使用`loading-icon`道具可自定义图标。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  162个项目
外部的：
  163个项目
外部类型：
  - ListboxItem[]列表框项
道具：
  载入：true
  项目名称：
    @@标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
  类别：'w-完整'
---
::

### 已停用

使用`disabled`道具可防止用户与列表框进行任何交互。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  170个项目
外部：
  171个项目
外部类型：
  - 列表框项[]
道具：
  已禁用：true
  项目名称：
    @@标签：“法国”
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      图标：“i-lucide-映射针”
      值：'DE'
    标签：“意大利”
      图标：“i-lucide-映射针”
      值：'IT'
    - 标签：“西班牙”
      图标：“i-lucide-映射针”
      值：'ES'
  类别：'w-完整'
---
::

示例：

### 使用项目类型

可以将`type`属性与`separator`一起使用，以显示项之间的分隔符，或将`label`一起使用，以显示标签。

::component-code
---
收阖：true
隐藏：
  182级
忽略：
  183个项目
外部：
  184个项目
外部类型：
  - 列表框项[][]
道具：
  项目名称：
    - -类型：“标签”
        标签：“水果”
      @@标签：“苹果”
      @@标签：香蕉
      标签：“蓝莓”
      标签：“葡萄”
      - 标签：菠萝
    - -类型：“标签”
        标签：“蔬菜”
      - 标签：“茄子色”
      标签：“西兰花”
      标签：胡萝卜
      @标签：“小瓜”
      标签：“韭菜”
  类别：'w-完整'
---
::

::note
使用`label`项目做为群组标题时，请传递数组的数组，以便在搜寻时将标签与其群组一起筛选出来。
::

### 在项目中使用图标

您可以使用`icon`属性，在项目内显示[图标](/docs/components/icon)。

::component-code
---
收阖：true
隐藏：
- 类
忽略：
- 个项目
外部：
  207个项目
外部类型：
  - 列表框项目[]
道具：
  项目名称：
    - 标签：“积压工作”
      图标：“i-透明-圆圈-帮助”
      值：'待办事项'
    - 标签：“待办事项”
      图标：“i-lucide-圆圈+”
      值：'待办事项'
    - 标签：“进行中”
      图标：“i-透明-圆圈-箭头-向上”
      值：'进行中'
    - 标签：“完成”
      图标：“i-透明-圆圈-检查”
      值：'完成'
  类别：'w-完整'
---
::

### 在项目中使用虚拟形象

您可以使用`avatar`属性在项目中显示[Avatar](/docs/components/avatar)。

::component-code
---
收阖：true
隐藏：
  219班
忽略：
  220个项目
外部：
  221个项目
外部类型：
  - ListboxItem[]列表框项
道具：
  项目名称：
    @标签：“本杰明·坎纳克”
      头像：
        来源：'https：//github.com/benjamincanac.png'
    标签：“HugoRCD”
      头像：
        来源：“https：//github.com/HugoRCD.png”（网址：http：//github.com/HugoRCD.png）
    @标签：“阿牛”
      头像：
        第一个字符串
    @@标签：'来自hml'
      头像：
        第一个字符串
  类别：'w-完整'
---
::

带芯片的物品

您可以使用`chip`属性来显示项目内的[Chip](/docs/components/chip)。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  234个项目
外部：
  235个项目
外部类型：
  - 列表框项目[]
道具：
  项目名称：
    - 标签：“错误”
      芯片：
        颜色：'错误'
    - 标签：“功能”
      芯片：
        颜色：“成功”
    - 标签：“增强”
      芯片：
        颜色：“信息”
  类别：'w-完整'
---
::

### 在项目中包含说明

您可以使用`description`属性在标签下方显示其他文字。

::component-code
---
收阖：true
隐藏：
  班级
忽略：
  243个项目
外部：
  244个项目
外部类型：
  - 列表框项目[]
道具：
  项目名称：
    @@标签：“法国”
      描述："六边形“
      图标：“i-lucide-映射针”
      值：'FR'
    标签：“德国”
      描述：“联邦共和国”
      图标：“i-lucide-映射针”
      值：'DE'
    标签：“意大利”
      描述：“靴子”
      图标：“i-lucide-映射针”
      值：'IT'
    @标签：“西班牙”
      描述：“公牛皮”
      图标：“i-lucide-映射针”
      值：'ES'
  类别：'w-完整'
---
::

### 控制所选项目

您可以使用`default-value`属性或`v-model`指示词来控制选取的项目。

::component-example
---
名称：'列表框-模型-值-示例'
收阖：true
---
::

### 控制搜索词

使用`v-model:search-term`指令控制搜索词。

::component-example
---
名称：'列表框-搜索项-示例'
---
::

### 使用忽略筛选

将`ignore-filter`属性设置为`true`以禁用内部搜索并使用您自己的搜索逻辑。

::component-example
---
收阖：true
名称：'列表框忽略过滤器示例'
---
::

::note
此示例使用[`refDebounced`](https://vueuse.org/shared/refDebounced/#refdebounced)来消除API调用的抖动。
::

### 使用筛选字段

使用`filter-fields`属性搭配字段数组来筛选。预设值为`[labelKey]`。

::component-example
---
收阖：true
名称：'列表框-筛选器-字段-示例'
---
::

通过虚拟化

使用`virtualize`属性为大型列表启用虚拟化，将其作为布尔值或带有`{ estimateSize: 32, overscan: 12 }`等选项的对象。

::component-example
---
名称：“列表框-虚拟化-示例”
收阖：true
---
::

### 作为传输列表

您可以使用[Button](/docs/components/button)控件组合两个Listbox组件，以建立传输清单模式。

::component-example
---
名称：'列表框-传输-列表-示例'
收阖：true
---
::

活性成分

道具

：组件-支柱

### Slots

：组件插槽

### Emits

：组件发射

## Theme

：组件主题

## Changelog

：组件更改日志
