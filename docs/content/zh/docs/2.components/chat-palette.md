---
title: ChatPalette
description: '一个聊天面板，用于在遮罩层中创建聊天机器人界面。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPalette.vue
---
## 用法

ChatPalette 组件是一个结构化布局包装器，用于将 [ChatMessages](/docs/components/chat-messages) 组织在可滚动内容区域，并将 [ChatPrompt](/docs/components/chat-prompt) 固定在底部区域，从而为模态框、滑出面板或抽屉创建协调一致的聊天机器人界面。

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
查看 **Chat** 概览页面以获取安装说明、服务器设置和使用示例。
::

### 在模态框内

你可以在 [Modal](/docs/components/modal) 的内容中使用 ChatPalette 组件。

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

### 在 ContentSearch 内

你可以在 [ContentSearch](/docs/components/content-search) 的内容中条件性地使用 ChatPalette 组件，以便在用户选择某一项时显示聊天机器人界面。

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

### Slots

:component-slots

## 主题

:component-theme

## 更新日志

:component-changelog