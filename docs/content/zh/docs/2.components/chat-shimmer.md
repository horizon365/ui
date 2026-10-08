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

ChatShimmer 组件会渲染一个带有动画闪烁渐变的元素，渐变覆盖在文本之上，常用于在聊天界面中表示流式传输或加载状态。

::note
此组件在流式输出时会自动由 [`ChatTool`](/docs/components/chat-tool) 和 [`ChatReasoning`](/docs/components/chat-reasoning) 组件使用。
::

::tip
当用户偏好减少动态效果时，动画会自动禁用，文本将改为显示为静态的柔和文本。
::

### 文本

使用 `text` 属性设置闪烁文本。

::component-code
---
props:
  text: 'Thinking...'
---
::

### 持续时间

使用 `duration` 属性控制动画速度，单位为秒。

::component-code
---
props:
  text: 'Thinking...'
  duration: 4
---
::

### 扩散

使用 `spread` 属性控制闪烁高光的宽度。实际扩散范围按 `text.length * spread` 像素计算。

::component-code
---
props:
  text: 'Thinking...'
  spread: 5
---
::

## 示例

::tip{to="/docs/components/chat"}
查看 **Chat** 概览页面以获取安装说明、服务器设置和使用示例。
::

## API

### 属性

:component-props

## 主题

:component-theme

## 更新日志

:component-changelog