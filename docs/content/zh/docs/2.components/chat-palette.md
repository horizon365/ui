---
title: 沙托
description: '一个聊天面板，用于在覆盖层内创建聊天机器人界面。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---

## 用法

聊天机器人组件是一个结构化的布局包装器，它将[ChatMessages](/docs/components/chat-messages)组织在一个可滚动的内容区域中，将[ChatMessages](/docs/components/chat-prompt)组织在一个固定的底部区域中，为模态、幻灯片或抽屉创建内聚的聊天机器人界面。

```vue{2,8}
<template>
  <UChatPalette>
    <UChatMessages />

    <template #prompt>
      <UChatPrompt />
    </template>
  </UChatPalette>
</template>
```

## 示例

::tip{to="/docs/components/chat"}
查看**Chat**概述页面，了解安装说明、服务器设置和使用示例。
::

### Within a Modal

您可以在[Modal](/docs/components/modal)的内容中使用Chatterfly组件。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### Within ContentSearch

您可以在[ContentSearch](/docs/components/content-search)的内容中有条件地使用Chatbot组件，以便在用户选择项目时显示聊天机器人界面。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
::


## API

### Props

:component-props

### 老虎机

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
