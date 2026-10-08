---
title: BlogPost
description: '一个可定制的文章显示在博客页面。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/BlogPost.vue
---

## 使用情况

BlogPost组件提供了一种灵活的方式来显示包含可自定义内容（包括标题、描述、图像等）的`<article>`元素。

::code-preview

::u-blog-post
---
title：“Nuxt Icon v1简介”
Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
日期：2024年11月25日
作者：
  - 姓名：安东尼·傅
    描述：antfu 7
    头像：
      来源：https://github.com/antfu.png
      加载：惰性
    发送至：https://github.com/antfu
    目标：空白（_B）
到：“https：//nuxt.com/blog/nuxt-icon-v1-0”
目的：'_blank'
类别：'w-96'
---
::

::

::tip{to="/docs/components/blog-posts"}
使用`BlogPosts`组件在响应网格布局中显示多个博客文章。
::

标题：

使用`title`道具显示BlogPost的标题。

::component-code
---
更漂亮：真的
隐藏：
  班级
道具：
  title：“Nuxt Icon v1简介”
  类别：'w-96'
---
::

说明：

使用`description`道具显示BlogPost的说明。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
- 标题
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  类别：'w-96'
---
::

### 日期

使用`date`道具来显示BlogPost的日期。

::tip
日期会自动格式化为[目前的区域设置](/docs/getting-started/integrations/i18n/nuxt#locale)。您可以传递`Date`物件或字串。
::

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  019标题
  描述：
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  日期：2024年11月25日
  类别：'w-96'
---
::

### 徽章

使用`badge`道具在博客帖子中显示[徽章](/docs/components/badge)。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  徽章：“释放”
  类别：'w-96'
---
::

您可以从[Badge](/docs/components/badge#props)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题
  描述：
- 徽章标签
  徽章颜色
- 徽章.变体
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  徽章：
    标签：'发布'
    颜色：原色
    变体：实体
  类别：'w-96'
---
::

图片

使用`image`道具在BlogPost中显示图像。

::note
如果已安装[`@nuxt/image`](https://image.nuxt.com/get-started/installation)，则将使用`<NuxtImg>`组件，而不是本机`img`标记。
::

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述：
- 日期
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  类别：'w-96'
---
::

作者

使用`authors`属性可将BlogPost中[User](/docs/components/user)的列表显示为具有以下属性的对象数组：

我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！
我的天啊！

您可以从[Link](/docs/components/link#props)元件传递任何属性，例如`to`、`target`等。

::component-code
---
更漂亮：真的
隐藏：
  班级
外部：
  作者
外部类型：
  - UserProps[]用户属性
忽略：
  标题：
  描述
- 日期
  图片：
  作者
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  作者：
    - 姓名：傅安东
      描述：antfu 7
      头像：
        来源：https://github.com/antfu.png
        加载：惰性
      发送至：https://github.com/antfu
      目标：空白（_B）
  类别：'w-96'
---
::

当`authors`道具有多个项目时，将使用[AvatarGroup](/docs/components/avatar-group)组件。

::component-code
---
更漂亮：真的
隐藏：
  班级
外部：
  作者
外部类型：
  - UserProps[]用户属性
忽略：
- 标题
  描述：
- 日期
  图片：
  作者
道具类：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  作者：
    - 姓名：安东尼·傅
      描述：antfu 7
      头像：
        来源：https://github.com/antfu.png
        加载：惰性
      发送至：https://github.com/antfu
      目标：空白（_B）
    我的名字：本杰明·卡纳克
      商品名称：benjamincanac
      头像：
        来源：https://github.com/benjamincanac.png
        加载：惰性
      发送至：https://github.com/benjamincanac
      目标：空白（_B）
  类别：'w-96'
---
::

链接

您可以从[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)元件传递任何属性，例如`to`、`target`、`rel`等。

::component-code
---
更漂亮：真的
隐藏：
  116班
忽略：
- 标题
  描述
- 日期
  图片：
- 目标
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  到：“https：//nuxt.com/blog/nuxt-icon-v1-0”
  目标：空白（_B）
  类别：'w-96'
---
::

### 变体

使用`variant`道具更改BlogPost的样式。

::component-code
---
更漂亮：真的
隐藏：
  124班
忽略：
  标题
  描述
- 日期
  图片：
- 至
- 目标值
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  到：“https：//nuxt.com/blog/nuxt-icon-v1-0”
  目标：空白（_B）
  变体：裸
  类别：'w-96'
---
::

::note
无论您提供的是`to`道具还是`image`道具，样式都将有所不同。
::

方向

使用`orientation`属性更改BlogPost的方向。默认为`vertical`。

::component-code
---
更漂亮：真的
隐藏：
  班级
忽略：
  标题：
  描述
- 日期
  图片：
- 至
- 目标
道具：
  title：“Nuxt Icon v1简介”
  Description：'发现Nuxt Icon v1 -一个现代的、多功能的、可定制的Nuxt项目图标解决方案。'
  图片：“https：//nuxt.com/assets/blog/nuxt-icon/cover.png”
  日期：2024年11月25日
  到：“https：//nuxt.com/blog/nuxt-icon-v1-0”
  目标：空白（_B）
  方向：水平
  变体：轮廓
---
::

## 活性成分

道具

：组件-支柱

插槽数

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
