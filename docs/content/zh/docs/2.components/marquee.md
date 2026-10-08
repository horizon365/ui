---
description: '创建无限滚动内容的组件。'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

## 使用情况

将默认插槽与您的内容一起使用可创建无限滚动动画。

::component-code
---
更漂亮：真的
插槽：
  默认值：|

<UIcon name="i-simple-icons-github" class="size-10 shrink-0" />号
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-x" class="size-10 shrink-0" />的
    004号
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />的
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
当用户喜欢减少运动时，动画自动禁用，内容改为静态显示。
::

### 悬停时暂停

使用`pause-on-hover`道具可在用户将鼠标悬停在内容上时暂停动画。

::component-code
---
更漂亮：真的
道具：
  暂停在悬停状态：true
插槽：
  默认值：|

<UIcon name="i-simple-icons-github" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-discord" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-x" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />的电话
<UIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />的
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

反向

使用`reverse`道具反转动画的方向。

::component-code
---
更漂亮：真的
道具：
  反转：真
插槽：
  默认值：|

    029号
    030秒
<UIcon name="i-simple-icons-x" class="size-10 shrink-0" />，你好
    032号
    033号
    034号
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

方向

使用`orientation`道具更改滚动方向。

::component-code
---
更漂亮：真的
类别：“h-96”
道具：
  方向：'垂直'
插槽：
  默认值：|

    043号
    044号
    045号
    046号
    047号
    048号
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

重复一遍

使用`repeat`道具来指定动画中内容应重复的次数。

::component-code
---
更漂亮：真的
道具：
  重复次数：6次
插槽：
  默认值：|

    057号
    058号
    059号
<UIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />的
<UIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />，你好
    062号
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

复盖

使用`overlay`道具移除选取框边缘上的渐变覆盖。

::component-code
---
更漂亮：真的
道具：
  覆盖：假
插槽：
  默认值：|

    071号
    072号
    073号
    第074章
    075号
    第076章：
---
：u图标{name="i-simple-icons-github" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-discord" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-x" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-instagram" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-linkedin" class="size-10 shrink-0"}
：u图标{name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

示例

客户评价

使用`Marquee`组件为您的客户评价创建无限滚动动画。

::component-example{label="与项目"}
---
更漂亮：真的
名称：“侯爵-奖状”
收阖：true
overflowHidden：真的
类别：'px-0'
---
::

屏幕截图

使用`Marquee`组件为您的屏幕快照创建无限滚动动画。

::component-example{label="关于Screenshots"}
---
更漂亮：真的
名称：'marquee-screenshots'（字幕截图）
收阖：true
overflowHidden：真的
类：“！p-0”
---
::

## 活性成分

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
