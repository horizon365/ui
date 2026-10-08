---
title: ChatPrompt
description: '用于在 AI 聊天界面中提交提示词的增强型 Textarea。'
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

ChatPrompt 组件渲染一个 `<form>` 元素，并扩展了 [Textarea](/docs/components/textarea) 组件，因此你可以传入 `icon`、`placeholder`、`autofocus` 等任意属性。

::component-example
---
collapse: true
name: 'chat-prompt-example'
---
::

::note
ChatPrompt 会处理以下事件：

- 当用户按下 :kbd{value="enter"} 或点击提交按钮时，表单会被提交。将 `submit-on-enter` 属性设置为 `false` 后，可以使用 :kbd{value="ctrl"} + :kbd{value="enter"}（在 macOS 上为 :kbd{value="cmd"} + :kbd{value="enter"}）提交，从而允许 :kbd{value="enter"} 插入换行。
- 当按下 :kbd{value="escape"} 时，textarea 会失去焦点，并发出 `close` 事件。
::

### 变体

使用 `variant` 属性可以更改提示框的样式。默认值为 `outline`。

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
查看 **Chat** 概览页面以获取安装说明、服务器设置和使用示例。
::

### 搭配编辑器 :badge{label="4.10+" class="align-text-top"}

组合 `#header`、`#body` 和 `#footer` 插槽以构建功能丰富的提示框：文件附件、带有 `@` 提及和 `/` 命令的 [Editor](/docs/components/editor)（通过 [EditorMentionMenu](/docs/components/editor-mention-menu) 实现），以及模式选择器。

::component-example
---
collapse: true
name: 'chat-prompt-editor-example'
class: 'justify-center'
---
::

::note
`#body` 插槽会替换内部 textarea，并暴露 `submit` 和 `close` 处理函数，因此你可以将编辑器的键盘快捷键连接到表单。当提及菜单处于打开状态时，按下 :kbd{value="enter"} 会选择高亮项，而不是提交表单。
::

### 用作主页

你也可以将其用于聊天界面的主页。

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
          <UChatTextarea v-model="input" placeholder="Ask me anything..." />

          <template #footer>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <UButton icon="i-lucide-paperclip" color="neutral" variant="ghost" />
                <UButton icon="i-lucide-mic" color="neutral" variant="ghost" />
              </div>

              <UChatSubmitButton :disabled="!input.trim()" />
            </div>
          </template>
        </UChatPrompt>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
```

## API

### 属性

:component-props

::callout{icon="i-lucide-info" color="info"}
此组件还支持所有 [Textarea](/docs/components/textarea) 属性。
::

### 暴露

:component-expose

你可以通过模板 ref 访问以下方法和属性。