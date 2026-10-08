---
title: PinInput
description: 输入pin的输入元素。
category: form
keywords:
  - otp
  - one-time password
  - verification code
links:
  - label: PinInput
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/pin-input
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PinInput.vue
---

## 使用情况

使用`v-model`指令来控制PinInput的值。

::component-code
---
更漂亮：真的
忽略：
  - 模型值
外部：
  - 模型值
道具：
  型号值：[]
---
::

当您不需要控制其状态时，请使用`default-value`属性来设定初始值。

::component-code
---
更漂亮：真的
忽略：
  - 默认值
道具：
  默认值：['1'，'2'，'3']
---
::

### 类型

使用`type`属性更改输入类型。默认为`text`。

::component-code
---
项目名称：
  字体：
    - 文本
- 编号
道具：
  类型：'number'
---
::

::note
当`type`设置为`number`时，它将只接受数字字符。
::

屏蔽

使用`mask`属性将输入视为密码。

::component-code
---
更漂亮：真的
忽略：
- 占位符
  - 默认值
道具：
  遮罩：true
  默认值：[“1”、“2”、“3”、“4”、“5”]
---
::

一步法

使用`otp`属性启用一次性密码功能。启用后，移动的设备可以自动检测并填充SMS消息或剪贴板内容中的OTP代码，并支持自动完成功能。

::component-code
---
道具：
  OTP：真
---
::

### 预留位置

使用`placeholder`道具来设定预留位置文字。

::component-code
---
道具类：
  占位符：'○'
---
::

长度

使用`length`道具更改输入量。

::component-code
---
忽略：
- 占位符
道具：
  长度：6
  占位符：'○'
---
::

分隔符：徽标

使用`separator`属性在输入组之间插入分隔符。传递一个数字可在每N个输入后插入一个分隔符。

::component-code
---
忽略：
  占位符
道具：
  长度：6
  分隔符：3
  占位符：'○'
---
::

您也可以传递位置数组，以便在特定输入之后插入分隔符号。

::component-code
---
更漂亮：真的
忽略：
  占位符
  长度
- 分隔符
道具：
  长度：7
  分隔符：[3，4]
  占位符：'○'
---
::

彩色的

使用`color`道具更改PinInput聚焦时的圆环颜色。

::component-code
---
忽略：
- 占位符
道具：
  颜色：中性
  高亮显示：真
  占位符：'○'
---
::

::note
`highlight`属性在这里用来显示焦点状态。当发生验证错误时，它会在内部使用。
::

### 变体

使用`variant`属性更改PinInput的变体。

::component-code
---
忽略：
  占位符
道具：
  颜色：中性
  变体：细微
  突出显示：假
  占位符：'○'
---
::

尺寸

使用`size`属性更改PinInput的大小。

::component-code
---
忽略：
- 占位符
道具：
  尺寸：xl
  占位符：'○'
---
::

### 已停用

使用`disabled`属性禁用PinInput。

::component-code
---
忽略：
  占位符
道具：
  已禁用：true
  占位符：'○'
---
::

示例

### 带分隔符插槽：徽标{label="4.9+" class="align-text-top"}

使用`separator`插槽自定分隔符外观。

::component-example
---
名称：'引脚-输入-分隔符-插槽-示例'
---
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

发射器

：组件发射

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 我的天啊|我的天啊|

主题

：组件主题

## 变更日志

：组件更改日志
