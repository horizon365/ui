---
description: 在带有页眉、正文和页脚的卡片中显示内容。
category: element
keywords:
  - panel
  - box
  - container
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Card.vue
---

## 使用情况

使用`header`、`default`和`footer`插槽向卡中添加内容。

::component-code
---
更漂亮：真的
隐藏：
  班级
道具：
  类别：'w-完整'
插槽：
  标题：|

<Placeholder class="h-8" />的

  默认值：|

<Placeholder class="h-32" />的

  页尾：|

<Placeholder class="h-8" />的
---

#信头
：占位符{class="h-8"}

#默认值
：占位符{class="h-32"}

#页脚
：占位符{class="h-8"}
::

标题：徽章

使用`title`道具来设定卡片标题。

::component-code
---
更漂亮：真的
忽略：
  班级
道具：
  title：'带标题的卡'
  类别：'w-完整'
插槽：
  默认值：|

<Placeholder class="h-32" />的
---

#默认值
：占位符{class="h-32"}
::

说明：徽章

使用`description`道具设置卡标题的说明。

::component-code
---
更漂亮：真的
忽略：
- 标题
  班级
道具：
  title：'带说明的卡片'
  描述：“痛苦的人是痛苦的，奉献的人是快乐的。”
  类别：'w-完整'
插槽：
  默认值：|

    022号
---

#默认值
：占位符{class="h-32"}
::

### 变体

使用`variant`道具来变更卡片的变体。

::component-code
---
更漂亮：真的
隐藏：
  班级
道具：
  变体：细微
  类别：'w-完整'
插槽：
  标题：|

    027号

  默认值：|

    028号

  页尾：|

    029号
---

#信头
：占位符{class="h-8"}

#默认值
：占位符{class="h-32"}

#页脚
：占位符{class="h-8"}
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
