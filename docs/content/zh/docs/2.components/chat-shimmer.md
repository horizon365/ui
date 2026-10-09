---
title: ChatShimmer
description: 显示文本闪烁动画效果。
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatShimmer.vue
---

## 用法

ChatShimmer组件在文本上呈现具有动画闪烁渐变的元素，通常用于指示聊天界面中的流或加载状态。

::note
流式传输时，[`ChatTool`](/docs/components/chat-tool)和[`ChatReasoning`](/docs/components/chat-reasoning)组件自动使用此组件。
::

::tip
当用户喜欢减少运动时，动画自动禁用，文本显示为静态静音文本。
::

### Text

使用`text`道具设置微光文本。

::component-code
---
props:
  text: 'Thinking...'
---
::

### 持续时间

使用`duration`道具控制动画速度（以秒为单位）。

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### Spread

使用`spread`属性来控制微光高光的宽度。实际的扩散以像素为单位计算为`text.length * spread`。

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## 示例

::tip{to="/docs/components/chat"}
查看**Chat**概述页面以获取安装说明、服务器设置和使用示例。
::

## API

### Props

:component-props

## Theme

:component-theme

## Changelog

:component-changelog
