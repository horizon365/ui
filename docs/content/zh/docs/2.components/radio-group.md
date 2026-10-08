---
title: RadioGroup
description: 从列表中选择单个选项的一组单选按钮。
category: form
keywords:
  - radio buttons
  - single choice
links:
  - label: RadioGroup
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/radio-group
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/RadioGroup.vue
---

## 使用情况

使用`v-model`指示词来控制RadioGroup的值，或使用`default-value`属性来设定初始值（如果不需要控制其状态）。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
  项目数
外部：
  项目数
  - 模型值
道具：
  模型值：'系统'
  项目名称：
    - '系统'
    - '浅色'
    '深色'
---
::

项目

将`items`属性用作字符串或数字的数组：

::component-code
---
更漂亮：真的
忽略：
  - 模型值
  项目名称
外部：
  项目名称
  - 模型值
道具：
  模型值：'系统'
  项目名称：
    - '系统'
- '浅色'
    '黑暗'
---
::

您也可以传递具有下列属性的物件数组：

019、020、021、
022号，023号
@@小标题：小标题
我的天啊！
我的天啊，我的天啊
我的天啊！
我的天啊！

::component-code
---
忽略：
  模型值
  - items
外部：
  - items
- 模型值
外部类型：
  - RadioGroupItem []
道具：
  modelValue：'system'
  项目名称：
    - label：'系统'
      描述：'匹配您的设备设置。'
      value：'system'
    - label：'光'
      说明：'始终使用灯光主题。'
      值：'light'
    - label：'暗'
      描述：'总是使用黑暗的主题。'
      值：'dark'
---
::

::caution
使用对象时，需要在`v-model`指令或`default-value`属性中引用对象的`value`属性。
::

### Value Key

您可以使用`value-key`prop. push将用于设置值的属性更改为`value`。

::component-code
---
忽略：
  - modelValue
  - items
  - valueKey
外部：
  - items
  - modelValue
外部类型：
  - RadioGroupItem []
道具：
  modelValue：'light'
  值键：'id'
  项目名称：
    - label：'系统'
      描述：'匹配您的设备设置。'
      id：'系统'
    - label：'光'
      说明：'始终使用灯光主题。'
      id：'light'
    标签：“深色”
      description：'总是使用深色主题。'
      id：'深色'
---
::

图例

使用`legend`属性设置单选按钮组的图例。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
  项目数
外部：
  项目数
道具：
  图例：“主题”
  默认值：“系统”
  项目名称：
    - '系统'
- '浅色'
    '黑暗'
---
::

颜色

使用`color`属性更改单选按钮组的颜色。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
- 个项目
外部：
  项目数
道具：
  颜色：中性
  默认值：“系统”
  项目名称：
    - '系统'
- '浅色'
    '黑暗'
---
::

变体

使用`variant`属性更改单选按钮组的变体。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
- 个项目
外部：
- 个项目
外部类型：
- 单选按钮组项[]
道具：
  颜色：'主要'
  变体：'card'
  默认值：“系统”
  项目名称：
    - 标签：“系统”
      值：'系统'
      description：'与您的设备设置匹配。'
    - 标签：“浅色”
      值：'light'
      description：'始终使用灯光主题。'
    @@标签：“深色”
      值：“暗”
      description：'总是使用深色主题。'
---
::

尺寸

使用`size`属性更改单选按钮组的大小。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
  项目数
外部：
  100个项目
道具：
  尺寸：'xl'
  变量：'list'
  默认值：“系统”
  项目名称：
    - '系统'
- '浅色'
- '深色'
---
::

方向图

使用`orientation`属性更改单选按钮组的方向。默认为`vertical`。

::component-code
---
更漂亮：真的
忽略：
- 默认值
  108个项目
外部：
  109个项目
道具：
  方向：'水平'
  变量：'list'
  默认值："系统"
  项目名称：
    - '系统'
    '浅色'
- '深色'
---
::

### 指标

使用`indicator`道具来变更位置或隐藏指标。预设值为`start`。

::note
项目的`icon`仅在标签上方的`indicator`为`hidden`时才显示，因为单选按钮的指示器内没有图标。
::

::component-code
---
更漂亮：真的
忽略：
  - 默认值
  120个项目
外部：
  121个项目
外部类型：
- 单选按钮组项[]
项目名称：
  指标：
    开始
- 结束
- 隐藏
  变体：
    列表中
- 卡
- 表格
道具：
  指示器："隐藏"
  方向：'水平'
  变量：'table'
  默认值："系统"
  项目名称：
    - 标签："系统"
      图标："i-lucide监护仪"
      值：'系统'
      类别：'w-20'
    - 标签："浅色"
      图标：“i-lucide-sun”
      值：“浅色”
      类别：'w-20'
    @@标签：“深色”
      图标：“i-透明月亮”
      值：'深色'
      类别：'w-20'
---
::

### 已禁用

使用`disabled`道具禁用单选按钮组。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
  135个项目
外部：
  136个项目
道具：
  已禁用：true
  默认值：“系统”
  项目名称：
    - '系统'
- '浅色'
    '黑暗'
---
::

## 活性成分

### 道具

：组件-支柱

插槽数

：组件插槽

发射量

：组件发射

主题

：组件主题

## 变更日志

：组件更改日志
