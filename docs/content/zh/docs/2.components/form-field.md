---
title: FormField
description: 提供验证和错误处理的表单元素包装器。
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## 使用情况

使用FormField包装任何表单元件。在[Form](/docs/components/form)中使用时，它提供验证和错误行程。

标签

使用`label`属性来设定表单控件的标签。

::component-code
---
更漂亮：真的
道具：
  标签：电子邮件
插槽：
  默认值：|

<UInput placeholder="Enter your email" />的
---

：u-输入{placeholder="Enter your email"}
::

::note
标签`for`属性和表单控件与唯一的`id`相关联（如果未提供）。
::

使用`required`道具时，会在标签旁边添加一个星号。

::component-code
---
更漂亮：真的
忽略：
  标签
道具：
  标签：电子邮件
  必填项：true
插槽：
  默认值：|

<UInput placeholder="Enter your email" />的
---

：u-输入{placeholder="Enter your email"}
::

说明：

使用`description`道具在标签下方提供其他信息。

::component-code
---
更漂亮：真的
忽略：
  标签
道具：
  标签：电子邮件
  描述：我们不会与任何人共享您的电子邮件。
插槽：
  默认值：|

<UInput placeholder="Enter your email" class="w-full" />的
---

：u-输入{placeholder="Enter your email" class="w-full"}
::

提示：

使用`hint`道具在标签旁边显示提示消息。

::component-code
---
更漂亮：真的
忽略：
  标签
道具：
  标签：电子邮件
  提示：可选
插槽：
  默认值：|

    023号
---

：u-输入{placeholder="Enter your email"}
::

帮助信息

使用`help`属性可在表单控件下方显示帮助消息。当与`error`属性一起使用时，`error`属性优先。

::component-code
---
更漂亮：真的
忽略：
  标签
道具：
  标签：电子邮件
  帮助：请输入有效的电子邮件地址。
插槽：
  默认值：|

    030秒
---

：u-输入{placeholder="Enter your email" class="w-full"}
::

错误

使用`error`属性可在表单控件下方显示错误消息。当与`help`属性一起使用时，`error`属性优先。

当在[Form](/docs/components/form)中使用时，会在发生验证错误时自动设定此选项。

::component-code
---
更漂亮：真的
忽略：
  标签
道具：
  标签：电子邮件
  错误：请输入有效的电子邮件地址。
插槽：
  默认值：|

    041号
---

：u输入{placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
这会将表单控件上的`color`设定为`error`。您可以在`app.config.ts`中全域变更它。
::

### 错误模式

使用`error-pattern`属性将表单错误与正则表达式进行匹配。这对于包含数组值的组件（如[InputTags](/docs/components/input-tags)）尤其重要，其中的错误在其名称中包含数组索引（例如`tags.0`）。

::tip{to="/docs/components/form#error-reporting"}
请参阅在表单中使用`error-pattern`的范例。
::

尺寸

使用`size`属性更改FormField的大小，`size`将被代理到表单控件。

::component-code
---
更漂亮：真的
忽略：
  标签
  描述
  提示：
  帮助信息
道具：
  标签：电子邮件
  描述：我们不会与任何人共享您的电子邮件。
  提示：可选
  帮助：请输入有效的电子邮件地址。
  尺寸：xl
插槽：
  默认值：|

<UInput placeholder="Enter your email" class="w-full" />，你好
---

：u输入{placeholder="Enter your email" class="w-full"}
::

方向：徽章

使用`orientation`属性来变更表单字段的版面配置。预设值为`vertical`。

::component-code
---
更漂亮：真的
忽略：
  标签
  班级
道具类：
  方向：水平
  标签：电子邮件
  帮助：请输入有效的电子邮件地址。
  类别：w-72
插槽：
  默认值：|

    069号
---

：u输入{placeholder="Enter your email" class="w-full"}
::

活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
