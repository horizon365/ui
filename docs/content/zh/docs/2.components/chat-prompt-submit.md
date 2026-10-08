---
title: ChatPromptSubmit
description: '用于提交聊天提示的按钮，可自动处理状态。'
category: chat
links:
  - label: Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---
## 用法

ChatPromptSubmit 组件用于在 [ChatPrompt](/docs/components/chat-prompt) 组件内部提交提示词。它会自动处理不同的 `status` 值以控制聊天。

它扩展了 [Button](/docs/components/button) 组件，因此你可以传入任意属性，例如 `color`、`variant`、`size` 等。

::code-preview

#default
:u-chat-prompt-submit

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
你也可以将其用在 [`ChatPrompt`](/docs/components/chat-prompt) 组件的 `footer` 插槽中。
::

### 就绪

当其状态为 `ready`{lang="ts-type"} 时，使用 `color`、`variant` 和 `icon` 属性来自定义 Button。默认值为：

- `color="primary"`{lang="ts-type"}
- `variant="solid"`{lang="ts-type"}
- `icon="i-lucide-arrow-up"`{lang="ts-type"}

::component-code
---
prettier: true
items:
  color:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  variant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  color: 'primary'
  variant: 'solid'
  icon: 'i-lucide-arrow-up'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.arrowUp` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.arrowUp` 键下全局自定义此图标。
:::
::

### 已提交

当其状态为 `submitted`{lang="ts-type"} 时，使用 `submitted-color`、`submitted-variant` 和 `submitted-icon` 属性来自定义 Button。默认值为：

- `submittedColor="neutral"`{lang="ts-type"}
- `submittedVariant="subtle"`{lang="ts-type"}
- `submittedIcon="i-lucide-square"`{lang="ts-type"}

::note
当用户点击 Button 时，会发出 `stop` 事件。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  submittedColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  submittedVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  submittedColor: 'neutral'
  submittedVariant: 'subtle'
  submittedIcon: 'i-lucide-square'
  status: 'submitted'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
:::
::

### 流式传输

当其状态为 `streaming`{lang="ts-type"} 时，使用 `streaming-color`、`streaming-variant` 和 `streaming-icon` 属性来自定义 Button。默认值为：

- `streamingColor="neutral"`{lang="ts-type"}
- `streamingVariant="subtle"`{lang="ts-type"}
- `streamingIcon="i-lucide-square"`{lang="ts-type"}

::note
当用户点击 Button 时，会发出 `stop` 事件。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  streamingColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  streamingVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  streamingColor: 'neutral'
  streamingVariant: 'subtle'
  streamingIcon: 'i-lucide-square'
  status: 'streaming'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.stop` 键下全局自定义此图标。
:::
::

### 错误

当其状态为 `error`{lang="ts-type"} 时，使用 `error-color`、`error-variant` 和 `error-icon` 属性来自定义 Button。默认值为：

- `errorColor="error"`{lang="ts-type"}
- `errorVariant="soft"`{lang="ts-type"}
- `errorIcon="i-lucide-rotate-ccw"`{lang="ts-type"}

::note
当用户点击 Button 时，会发出 `reload` 事件。
::

::component-code
---
prettier: true
ignore:
  - status
items:
  errorColor:
    - primary
    - secondary
    - success
    - warning
    - error
    - neutral
  errorVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
props:
  errorColor: 'error'
  errorVariant: 'soft'
  errorIcon: 'i-lucide-rotate-ccw'
  status: 'error'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在 `app.config.ts` 中的 `ui.icons.reload` 键下全局自定义此图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在 `vite.config.ts` 中的 `ui.icons.reload` 键下全局自定义此图标。
:::
::

## 示例

::tip{to="/docs/components/chat"}
查看 **Chat** 概览页面，了解安装说明、服务器设置和使用示例。
::

## API

### 属性

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生 `<button>` HTML 属性。
::

### 插槽

:component-slots

### 事件

:component-emits

## 主题

:component-theme

## 更新日志

:component-changelog