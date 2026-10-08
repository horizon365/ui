---
title: PageLogos
description: '要在页面上显示的徽标或图像的列表。'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageLogos.vue
---

## 使用情况

PageLogos组件提供了一种在页面中显示徽标或图像列表的灵活方法。

::component-code
---
收阖：true
更漂亮：真的
隐藏：
  班级
忽略：
- 个项目
道具：
  项目名称：
    - i-简单图标-github
    - i-简单图标-不和谐
    - i-简单图标-x
    - i-简单图标-Instagram
    - 我的简单图标-linkedin
    - i-简单图标-facebook
  类别：'mb-10'
---
::

标题：

使用`title`道具在徽标上方设置标题。

::component-code
---
更漂亮：真的
忽略：
- 个项目
隐藏：
  班级
道具：
  title：“受最佳前端团队信任”
  项目名称：
    - 我的简单图标-github
    - i-简单图标-不和谐
    - i-简单图标-x
    - i-简单图标-Instagram
    - 我的简单图标-linkedin
    - i-简单图标-facebook
  类别：'my-10'
---
::

项目

您可以使用两种方式显示标志：

1. 使用`items`属性提供徽标列表。每个项目可以是：
  - 一个图标名称（例如`i-simple-icons-github`）
  - 一个包含图像的`src`和`alt`属性的对象，该属性将在`UAvatar`组件中使用
2. 使用默认插槽完全控制内容

::tabs{class="gap-0"}

::component-example{label="与项目"}
---
名称：'包含项目的页面徽标'
类：'[&>div]：my-10'
---
::

::component-example{label="与槽"}
---
名称：'带插槽的页面徽标'
类：'[&>div]：my-10'
---
::

::

### 字幕

使用`marquee`道具为徽标启用字幕效果。

::component-code
---
更漂亮：真的
忽略：
  项目
  选取框
隐藏：
  班级
道具：
  title：“受最佳前端团队信任”
  选取框：true
  项目名称：
    - 我的简单图标-github
    - i-简单图标-不和谐
    - i-简单图标-x
    - i-简单图标-Instagram
    - 我的简单图标-linkedin
    - i-简单图标-Facebook
  类别：'my-10'
---
::

::note{to="/docs/components/marquee"}
当您使用`marquee`模式时，您可以透过传递props自订其行为。如需详细信息，请参阅`Marquee`元件。
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
