---
title: 聊天提示
description: '增强的文本区域，用于在AI聊天界面中提交提示。'
category: chat
links:
  - label: Textarea
    to: /docs/components/textarea
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPrompt.vue
---

## 用法

ChatPrompt组件呈现`<form>`元素并扩展[Textarea](/docs/components/textarea)组件，以便您可以传递任何属性，如`icon`，`placeholder`，`autofocus`等。

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
ChatPrompt处理以下事件：

- 当用户按下：kbd{value="enter"}或单击提交按钮时，表单将被提交。将`submit-on-enter`属性设置为`false`，以使用：kbd{value="ctrl"}+：kbd{value="enter"}（或macOS上的：kbd{value="cmd"}+：kbd{value="enter"}）提交，允许：kbd{value="enter"}插入换行符。
- 当按下：kbd{value="escape"}并发出`close`事件时，文本区域模糊。
::

### Variant

使用`variant`属性将提示符的样式更改为`outline`。

::component-code
---
hide:
  - autofocus
props:
  variant: 'soft'
  autofocus: false
---
::

## 示例

::tip{to="/docs/components/chat"}
查看**Chat**概述页面以获取安装说明、服务器设置和使用示例。
::

### 与编辑器：badge{label="4.10+" class="align-text-top"}

编写`#header`、`#body`和`#footer`插槽以构建丰富的提示：文件附件、带有`@`提及的[Editor](/docs/components/editor)以及通过[EditorMentionMenu](/docs/components/editor-mention-menu)的`/`命令，以及模式选择器。

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
`#body`插槽替换了内部文本区域，并公开了`submit`和`close`处理程序，因此您可以将编辑器的键盘快捷键连接到表单。当提及菜单打开时，按：kbd{value="enter"}选择突出显示的项目，而不是提交。
::

### As主页

您也可以在聊天界面主页中使用它。

```vue [pages/index.vue] {2,4,8-15,24,26}
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <UDashboardPanel>
    <template #body>
      <UContainer>
        <h1>How can I help you today?</h1>

        <UChatPrompt v-model="input" @submit="onSubmit">
          <UChatPromptSubmit :status="status" />
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank"}
此组件还支持所有原生`<textarea>` HTML属性。
::

### Slots

:component-slots

### Emits

:component-emits

### 曝光

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| `textareaRef`{lang="ts-type"}| `Ref<HTMLTextAreaElement \| null>`{lang="ts-type"}|

## Theme

:component-theme

## Changelog

:component-changelog
