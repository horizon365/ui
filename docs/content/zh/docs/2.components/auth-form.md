---
title: AuthForm
description: '一个可自定义的表单，用于创建登录，注册或密码重置表单。'
category: page
links:
  - label: 形式
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

## 使用情况

`AuthForm`组件构建在[Form](/docs/components/form)组件的基础上，可以在您的页面中使用，也可以包装在[PageCard](/docs/components/page-card)中。

::component-example
---
名称：'验证表单范例'
收阖：true
---
::

### 字段

表单将根据`fields`属性建构自身，并在内部行程状态。

使用`fields`属性作为具有下列属性的对象数组：

我的天啊！
我的天啊！

每个字段都必须包含`type`属性，该属性确定输入组件和应用的任何附加属性：`checkbox`字段使用[复选框](/docs/components/checkbox#props)属性，`select`字段使用[选择菜单](/docs/components/select-menu#props)属性，`otp`字段使用[PinInput](/docs/components/pin-input#props)属性，而所有其他类型使用[Input](/docs/components/input#props)属性。

您也可以将[FormField](/docs/components/form-field#props)组件中的任何属性传递给每个字段。

::component-code
---
更漂亮：真的
忽略：
  字段
  班级
外部：
  字段
外部类型：
  - AuthFormField[]验证表单字段
道具：
  功能变数：
    姓名：'电子邮件'
      类型：'电子邮件'
      标签：'电子邮件'
      占位符：'输入您的电子邮件'
      必填项：true
    用户名：“密码”
      类型：'密码'
      标签：'密码'
      占位符：'输入您的密码'
      必填项：true
    姓名：“国家/地区”
      类型：'选择'
      标签：“国家/地区”
      占位符：'选择国家/地区'
      项目名称：
        - 标签：“美国”
          值：“用户”
        标签：“法国”
          值：'fr'
        - 标签：“英国”
          值：'uk'
        - 标签：“澳大利亚”
          值：'Au'
    名称：“OTP”
      类型：'otp'
      标签：“OTP”
      长度：6
      占位符：'○'
    “记住”
      类型：'复选框'
      标签：“记住我”
      description：'您将登录30天。'
  类别：'max-w-sm'
---
::

标题：

使用`title`属性设置表单标题。

::component-code
---
更漂亮：真的
忽略：
  字段
  班级
外部：
  字段
外部类型：
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    用户名：“密码”
      类型：'密码'
      标签：'密码'
  类别：'max-w-md'
---
::

说明：

使用`description`属性来设定表单的描述。

::component-code
---
更漂亮：真的
忽略：
  字段
  标题
  班级
外部：
  字段
外部类型：
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    用户名：“密码”
      类型：'密码'
      标签：'密码'
  类别：'max-w-md'
---
::

图标

使用`icon`道具设置窗体的图标。

::component-code
---
更漂亮：真的
忽略：
  字段
  标题
  描述：
  班级
外部：
  字段
外部类型：
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  图标：“i-lucide-用户”
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    用户名：“密码”
      类型：'密码'
      标签：'密码'
  类别：'max-w-md'
---
::

### 提供者

使用`providers`属性将提供程序添加到表单中。

您可以从[按钮](/docs/components/button)元件传递任何属性，例如`variant`、`color`、`to`等。

::component-code
---
更漂亮：真的
忽略：
  字段
  标题：
  描述：
  图标
- 提供商
  标题对齐
  班级
外部：
- 提供商
  100个字段
外部类型：
  - 按钮属性[]
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  图标：“i-lucide-用户”
  提供者：
    @@标签：“谷歌”
      图标：“i-simple-icons-谷歌”
      颜色：“中性”
      变体：“细微”
    - 标签：“GitHub”
      图标：“简单图标-github”
      颜色：“中性”
      变体：“细微”
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    - 用户名：“密码”
      类型：'密码'
      标签：'密码'
  类别：'max-w-md'
---
::

### 分隔符

使用`separator`属性可自定义提供程序和字段之间的[Separator](/docs/components/separator)。默认值为`or`。

::component-code
---
更漂亮：真的
忽略：
  字段
- 标题
  描述：
- 图标
- 提供商
  班级
外部：
- 提供商
  121个字段
外部类型：
  - 按钮属性[]
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  图标：“i-lucide-用户”
  提供者：
    @@标签：“谷歌”
      图标：“i-simple-icons-谷歌”
      颜色：“中性”
      变体：“细微”
    - 标签：“GitHub”
      图标：“简单图标-github”
      颜色：“中性”
      变体：“细微”
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    - 用户名：“密码”
      类型：'密码'
      标签：'密码'
  分隔符号：'Providers'
  类别：'max-w-md'
---
::

您可以从[Separator](/docs/components/separator#props)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
忽略：
  132个字段
- 标题
  描述
- 图标
- 提供商
  班级
外部：
- 提供商
  139个字段
外部类型：
  - 按钮属性[]
  - AuthFormField[]验证表单字段
道具类：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  图标：“i-lucide-用户”
  提供者：
    @@标签：“谷歌”
      图标：“i-simple-icons-谷歌”
      颜色：“中性”
      变体：“细微”
    @@标签：“GitHub”
      图标：“简单图标-github”
      颜色：“中性”
      变体：“细微”
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    - 用户名：“密码”
      类型：'密码'
      标签：'密码'
  分隔符：
    图标：“i-lucide-用户”
  类别：'max-w-md'
---
::

### 提交

使用`submit`属性更改表单的提交按钮。

您可以从[Button](/docs/components/button)元件传递任何属性，例如`variant`、`color`、`to`等。

::component-code
---
更漂亮：真的
忽略：
  155个字段
  标题
  描述
- 图标
- 提供商
- 提交标签
- 提交颜色
  - 提交变体
  班级
外部：
  字段
外部类型：
  - AuthFormField[]验证表单字段
道具：
  标题：'登录'
  description：'请输入您的凭据以访问您的帐户。'
  图标：“i-lucide-用户”
  功能变数：
    - 姓名：“电子邮件”
      文字：文字
      标签：'电子邮件'
    用户名：“密码”
      类型：'密码'
      标签：'密码'
  提交人：
    标签：'提交'
    颜色：'错误'
    变体：“细微”
  类别：'max-w-md'
---
::

示例

### 在页面内

例如，您可以使用[PageCard](/docs/components/page-card)组件来包装`AuthForm`组件，以便在`login.vue`页面中显示它。

::component-example
---
名称：'验证表单页面范例'
收阖：true
---
::

## 活性成分

道具

：组件-支柱

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
此组件还支持所有本机`<form>`HTML属性。
::

插槽

：组件插槽

### Emits

：组件发射

### Expose

您可以使用[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)访问类型化的组件实例（公开formRef和状态）。例如，在单独的表单（例如“重置”表单）中，您可以执行以下操作：

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

这使您可以访问以下（公开的）属性：

| 名称|类型|
| ---- | ---- |
| `formRef`{lang="ts-type"}|`Ref<HTMLFormElement \| null>`{lang="ts-type"}|
| `state`{lang="ts-type"}|`Reactive<FormStateType>`{lang="ts-type"}|

## Theme

：组件主题

## Changelog

：组件更改日志
