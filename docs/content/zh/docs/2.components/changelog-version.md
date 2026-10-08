---
title: ChangelogVersion
description: '一个可定制的文章显示在一个更新日志。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChangelogVersion.vue
---

## 使用情况

ChangelogVersion组件提供了一种灵活的方式来显示具有可自定义内容（包括标题、描述、图像等）的`<article>`元素。

::code-preview

::u-changelog-version
---
标题：'Introducing Nuxt UI v3'
产品说明：Nuxt UI v3发布了！经过1500多次提交，这个重大的重新设计带来了改进的可访问性，Tailwind CSS支持和完全的Vue兼容性。
图片：'https：//nuxt.com/assets/blog/nuxt-ui-v3.png'
2019 -03- 12 2019 -03-12 2019 -03-12
作者：
  - name：Benjamin Canac
    描述：'@benjamincanac'
    头像：
      来源：https://github.com/benjamincanac.png
      加载：惰性
    发送至：https://x.com/benjamincanac
    目标：空白（_B）
  - name：Chopin
    描述：'@atinux'
    头像：
      来源：https://github.com/atinux.png
      加载：惰性
    发送至：https://x.com/atinux
    目标：空白（_B）
  - name：Hugo Richard
    描述：'@hugorcd'
    头像：
      来源：https://github.com/hugorcd.png
      加载：惰性
    发送至：https://x.com/hugorcd
    目标：空白（_B）
至：'https：//nuxt.com/blog/nuxt-ui-v3'
目标：'_blank'
类别：'w-完整'
ui.container：'max-w-lg'
---
::

::

::tip{to="/docs/components/changelog-versions"}
使用`ChangelogVersions`组件可以在时间轴中显示多个更新日志版本，并在左侧显示指示条。
::

### Title

使用`title`道具显示ChangelogVersion的标题。

::component-code
---
隐藏：
  - class
  - ui
  - ui.容器
道具：
  title：“Nuxt UI v3简介”
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

说明：

使用`description`属性显示ChangelogVersion的说明。

::component-code
---
更漂亮：真的
隐藏：
  班级
  你好
  容器，容器
忽略：
- 标题
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

### 日期

使用`date`道具显示ChangelogVersion的日期。

::tip
日期会自动格式化为[目前的区域设置](/docs/getting-started/integrations/i18n/nuxt#locale)。您可以传递`Date`物件或字串。
::

::component-code
---
更漂亮：真的
隐藏：
  班级
  我的天
  容器，容器
忽略：
  标题：
  描述：
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

### 徽章

使用`badge`道具在变更日志版本上显示[](/docs/components/badge)。

::component-code
---
更漂亮：真的
隐藏：
  班级
  我的天
  - 用户界面.容器
忽略：
  标题
  描述：
- 日期
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  徽章：“释放”
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来自订它。

::component-code
---
更漂亮：真的
隐藏：
  班级
  我的天
  集装箱
忽略：
  标题
  描述
- 日期
- 徽章标签
  徽章颜色
- 徽章.变体
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  胸卡：
    标签：'发布'
    颜色：主要
    变体：轮廓
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

图片

使用`image`道具在BlogPost中显示图像。

::note
如果安装了[`@nuxt/image`](https://image.nuxt.com/get-started/installation)，则将使用`<NuxtImg>`组件，而不是本机`img`标记。
::

::component-code
---
更漂亮：真的
隐藏：
  班级
  我的天
  容器，容器
忽略：
  标题：
  描述：
- 日期
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  图片：“https：//nuxt.com/assets/blog/nuxt-ui-v3.png”
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

作者

使用`authors`属性可将ChangelogVersion中[User](/docs/components/user)的列表显示为具有以下属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)组件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
隐藏：
  班级
- 用户界面
- ui容器
外部：
  作者
外部类型：
  - UserProps[]用户属性
忽略：
  第104章
  描述：
- 日期
  图片：
  作者
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出!经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  图片："https：//nuxt.com/assets/blog/nuxt-ui-v3.png"
  作者：
    姓名：本杰明·卡纳克
      描述：'@benjamincanac '
      头像：
        来源：www.example.com
        加载：惰性
      发送至：www.example.com
      目标：空白（_B）
    你的名字：塞巴斯蒂安肖邦
      描述：'@atinux '
      头像：
        来源：www.example.com
        加载：惰性
      发送至：www.example.com
      目标：空白（_B）
    - 姓名：雨果·理查德
      描述：'@hugorcd '
      头像：
        来源：www.example.com
        加载：惰性
      发送至：www.example.com
      目标：空白（_B）
  类别：'w-完整'
  UI.容器："最大值-w-lg"
---
::

### 链接

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)元件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
隐藏：
- 类
- 用户界面
- 用户界面.容器
忽略：
  第124章
  描述
- 日期
  图片：
- 目标
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  图片：“https：//nuxt.com/assets/blog/nuxt-ui-v3.png”
  到：“https：//nuxt.com/blog/nuxt-ui-v3”
  目标：空白（_B）
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

### 指标

使用`indicator`道具隐藏左侧的指示器圆点。默认值为`true`。

::component-code
---
更漂亮：真的
隐藏：
  班级
- 用户界面
- 用户界面.容器
忽略：
  标题：
  描述
- 日期
  图片：
道具：
  title：“Nuxt UI v3简介”
  产品说明：'Nuxt UI v3已推出！经过1500多次提交后，这次重大的重新设计带来了改进的可访问性、Tailwind CSS支持和完全的Vue兼容性。
  日期：2025年3月12日
  图片：“https：//nuxt.com/assets/blog/nuxt-ui-v3.png”
  指示器：假
  类别：'w-完整'
  UI.容器：“最大值-w-lg”
---
::

::note
当`indicator`道具为`false`时，日期将显示在标题上方。
::

示例

### 带车身槽

您可以使用`body`插槽，通过以下方式显示图像和作者之间的自定义内容：

- 将[标记下调](https://comark.dev/rendering/vue组件从`@comark/vue`中删除以显示某些标记下调。
- 使用`@nuxt/content`中的[内容呈现器](https://content.nuxt.com/docs/components/content-renderer组件来呈现页面或列表的内容。
- 或直接在您的内容中使用`:u-changelog-version`组件，并在`body`槽中进行标记，因为Nuxt UI提供了预样式的散文组件。

::component-example
---
更漂亮：真的
名称：'变更记录版本标示范例'
收阖：true
---
::

美国石油学会

### Props

：组件-支柱

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
