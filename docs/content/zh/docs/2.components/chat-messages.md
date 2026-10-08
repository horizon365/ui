---
title: 聊天信息
description: '显示聊天消息列表，旨在与Vercel AI SDK无缝协作。'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatMessages.vue
---

## 使用情况

ChatMessages组件使用默认插槽或`messages`属性显示[ChatMessage](/docs/components/chat-message)组件的列表。

```vue {2,8}
<template>
  <UChatMessages>
    <UChatMessage
      v-for="(message, index) in messages"
      :key="index"
      v-bind="message"
    />
  </UChatMessages>
</template>
```

::callout{icon="i-lucide-rocket"}
此组件专为AI聊天机器人构建，具有以下特性：

- 加载时初始滚动到底部（[`shouldScrollToBottom`](#should-scroll-to-bottom)）。
当新邮件到达时，继续向下滚动（[`shouldAutoScroll`](#should-auto-scroll)）。
- 向上卷动时会出现[自动卷动]按钮，让使用者可以跳回到最新的邮件（[`autoScroll`](#auto-scroll)）。
- 当助手正在处理（[`status`](#status)）时，将显示一个加载指示器。
- Submitted message会卷动到检视区的顶端，而且最后一个使用者消息的高度会动态调整。
::

消息

使用`messages`道具显示聊天消息列表。

::component-code
---
更漂亮：真的
外部：
  消息
忽略：
  消息
隐藏：
  应该滚动到底部
收阖：true
类：'溢出-y-auto'
道具：
  留言：
    【045235a-a435 - 46b8 - 989d-2df38ca2eb47】我的手机号码是：
      角色：用户
      零件名称：
        类型：'文本'
          短信："你好，你好吗？"
    "我的天啊!"
      角色：助理
      零件名称：
- 类型："文本"
          文本："我做得很好，谢谢你的关心!今天我能为你做些什么？"
    "我的天啊!"
      角色：用户
      零件名称：
        类型：'文本'
          text："东京现在的天气怎么样？"
    【字幕翻译】
      角色：助理
      零件名称：
        类型：'文本'
          正文：“根据最新的数据，东京目前天气晴朗，气温在24°C（75°F）左右。这是一个晴朗的天气。”
  应滚动到底部：false
---
::

状态

使用`status`道具可在助手处理时显示可视指示器。

::component-code
---
更漂亮：真的
外部：
  消息
忽略：
  消息
  状态
隐藏：
- 应该滚动到底部
类：'溢出-y-auto'
道具：
  状态：'已提交'
  留言：
    【061】手机号码：6045235 a-a
      角色：用户
      零件名称：
        类型：“文本”
          短信：“你好，你好吗？”
  应滚动到底部：false
---
::

::note
以下是AI SDK`useChat`composable中不同状态的详细信息：

- `submitted`：消息已发送到API，我们正在等待响应流的开始。
- `streaming`：响应正在从API中以流的形式传入，正在接收数据块。
- `ready`：已收到并处理完整响应;可以提交新的用户消息。
- `error`：API请求过程中发生错误，导致无法成功完成。
::

用户

使用`user`属性可更改`user`消息的[ChatMessage](/docs/components/chat-message)属性。默认值为：

我的天啊！
我的天啊！

::component-code
---
更漂亮：真的
外部的：
  消息
忽略：
  消息
  虚拟形象. src
- 头像.加载中
隐藏：
  应该滚动到底部
收阖：true
项目名称：
  user.variant:
    实心的
    大纲
    微妙的
    软的
    裸体的
  user.side:
    左侧
    对了
类：'溢出-y-auto'
道具：
  使用者：
    侧：左
    变体：实体
    头像：
      来源：https://github.com/benjamincanac.png
      加载：惰性
  留言：
    “我的手机号码是6045235 a-a435
      角色：用户
      零件名称：
        类型：'文本'
          短信：“你好，你好吗？”
    【099】
      角色：助理
      零件名称：
        - 类型：“文本”
          文本：“我做得很好，谢谢你的关心！今天我能为你做些什么？”
    “9 c84 d 6a 7 - 8b 23 - 4f 12-a1 d5-e7 f3 b 9 c 05 e2 a”是一个很好的例子，它是一个很好的例子。
      角色：用户
      零件名称：
        - 类型：“文本”
          text：“东京现在的天气怎么样？”
    “我的天啊！”
      角色：助理
      零件名称：
        类型：'文本'
          正文：“根据最新的数据，东京目前天气晴朗，气温在24°C（75°F）左右。这是一个晴朗的天气。”
  应滚动到底部：false
---
::

### 助手

使用`assistant`属性可更改`assistant`消息的[ChatMessage](/docs/components/chat-message)属性。默认值为：

112号，113号，114号
115号，116号，117号

::component-code
---
更漂亮：真的
外部：
  消息
忽略：
  消息
  - 头像.图标
  - 助理.操作
隐藏：
  - 应该滚动到底部
收阖：true
项目名称：
  assistant.variant:
    固体，固体
- 大纲
    微妙的
    软的
    裸体的
  assistant.side:
    左侧128
- 右侧
类：'溢出-y-auto'
道具类：
  助手：
    侧：左
    变体：轮廓
    头像：
      图标：i-lucide-bot
    动作：
      - label：'复制到剪贴板'
        图标：i-lucide-副本
  留言：
    @我的手机号码：
      角色：用户
      零件名称：
        “文本”
          短信：“你好，你好吗？”
    “我的天啊！”
      角色：助理
      零件名称：
        类型：'文本'
          文本：“我做得很好，谢谢你的关心！今天我能为你做些什么？”
    “我的天啊！”
      角色：用户
      零件名称：
        “文本”
          text：“东京现在的天气怎么样？”
    “我的天啊！”
      角色：助理
      零件名称：
        “文本”
          正文：“根据最新的数据，东京目前天气晴朗，气温在24°C（75°F）左右。这是一个晴朗的天气。”
  应滚动到底部：false
---
::

### 自动卷动

使用`auto-scroll`道具来自定义或隐藏滚动到聊天顶部时显示的自动滚动按钮（值为`false`）。默认值为：

142小时143小时144小时
145小时146小时147小时

您可以从[Button](/docs/components/button)组件传递任何属性来自订该组件。

::component-code
---
更漂亮：真的
收阖：true
外部：
  邮件数
忽略：
  邮件
  自动滚动.颜色
- 自动滚动.变量
  - 应该滚动到底部
类：“溢出-y-自动最大值-h-[341 px]静态”
道具：
  自动卷动：
    颜色：中性
    变体：轮廓
  应滚动到底部：false
  留言：
    【045235 a-a435 - 46 b8 - 989 d-2df 38 ca 2 eb 47】我的手机号码是：
      角色：用户
      零件名称：
        “文本”
          短信：“你好，你好吗？”
    “我的天啊！”
      角色：助理
      零件名称：
        “文本”
          文本：“我做得很好，谢谢你的关心！今天我能为你做些什么？”
    “我的天啊！”
      角色：用户
      零件名称：
        类型：'文本'
          text：“东京现在的天气怎么样？”
    “我的天啊！”
      角色：助理
      零件名称：
        类型：'文本'
          正文：“根据最新的数据，东京目前天气晴朗，气温在24°C（75°F）左右。这是一个晴朗的天气。本周剩余时间的天气预报显示，周四有轻微的降雨可能，到周末气温将逐渐上升到28°C。湿度水平适中，在65%左右。”东南方向风速为8公里/小时，空气质量良好，指数为42。紫外线指数高达7，所以如果你打算在户外度过一段时间，建议你涂防晒霜。日出是在早上5点24分，日落是在早上6点。48，东京今天大约有13小时24分钟的日照时间，月亮现在正处于上蜡的凸状阶段。”
    “我的天啊！”
      角色：用户
      零件名称：
        类型：'文本'
          text：“你能推荐京都一些热门的旅游景点吗？”
    “我的天啊！”
      角色：助理
      零件名称：
        类型：'文本'
          正文：京都以其美丽的寺庙、传统的茶馆和花园而闻名。一些受欢迎的景点包括金阁寺（金阁），其令人惊叹的金箔外观反射在镜子池塘，伏见稻成神社，其数千个朱红鸟居门蜿蜒在山腰，岚山格罗夫，高耸的茎创造了一个超凡脱俗的气氛，清水寺（Kiyomizu-dera Temple）坐落在一座希尔赛德上，可以俯瞰整个城市的全景，还有历史悠久的园区（Gion district），在那里，你可能会看到艺妓们在狭窄的石板街道上匆忙赴约，街道两旁是传统的木制町屋。
---
::

### 自动滚动图标

使用`auto-scroll-icon`属性来自订自动卷动按钮[Icon](/docs/components/icon)。预设值为`i-lucide-arrow-down`。

::component-code
---
更漂亮：真的
收阖：true
外部：
  消息
忽略：
  消息
  自动滚动.颜色
  自动滚动.变量
- 应该滚动到底部
类：“溢出-y-自动最大值-h-[341 px]静态”
道具：
  autoScrollIcon：'i-lucide-V形图案-向下'
  应滚动到底部：false
  留言：
    @我的手机号码：
      角色：用户
      零件名称：
        "文本"
          短信："你好，你好吗？"
    "我的天啊!"
      角色：助理
      零件名称：
        "文本"
          文本："我做得很好，谢谢你的关心!今天我能为你做些什么？"
    "我的天啊!"
      角色：用户
      零件名称：
        "文本"
          text："东京现在的天气怎么样？"
    "我的天啊!"
      角色：助理
      零件名称：
        "文本"
          正文："根据最新的数据，东京目前天气晴朗，气温在24 ° C（75 ° F）左右。这是一个晴朗的天气。本周剩余时间的天气预报显示，周四有轻微的降雨可能，到周末气温将逐渐上升到28 ° C。湿度水平适中，在65%左右。"东南方向风速为8公里/小时，空气质量良好，指数为42。紫外线指数高达7，所以如果你打算在户外度过一段时间，建议你涂防晒霜。日出是在早上5点24分，日落是在早上6点。48，东京今天大约有13小时24分钟的日照时间，月亮现在正处于上蜡的凸状阶段。"
    "我的天啊!"
      角色：用户
      零件名称：
        "文本"
          text："你能推荐京都一些热门的旅游景点吗？"
    "我的天啊!"
      角色：助理
      零件名称：
        "文本"
          正文：京都以其美丽的寺庙、传统的茶馆和花园而闻名。一些受欢迎的景点包括金阁寺（金阁），其令人惊叹的金箔外观反射在镜子池塘，伏见稻成神社，其数千个朱红鸟居门蜿蜒在山腰，岚山竹林，高耸的茎创造了一个超凡脱俗的气氛，清水寺（Kiyomizu-dera Temple）坐落在一座山坡上，可以俯瞰整个城市的全景，还有历史悠久的园区（Gion district），在那里，你可能会看到艺妓们在狭窄的石板街道上匆忙赴约，街道两旁是传统的木制町屋。
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.arrowDown`键下的`app.config.ts`中全局自定此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.arrowDown`键下的`vite.config.ts`中全局自定此图标。
:::
::

### 应该自动卷动

使用`should-auto-scroll`属性可启用/禁用邮件流传输时的连续自动滚动。默认为`false`。

```vue
<template>
  <UChatMessages :messages="messages" should-auto-scroll />
</template>
```

### 应该滚动到底部

使用`should-scroll-to-bottom`属性来启用/停用挂载元件时的底部自动卷动。预设值为`true`。

```vue
<template>
  <UChatMessages :messages="messages" :should-scroll-to-bottom="false" />
</template>
```

示例

::tip{to="/docs/components/chat"}
有关安装说明、服务器设置和使用示例，请查看**Chat**概述页。
::

### 带指示槽

使用`#indicator`插槽自定义加载指示器，使其具有[`ChatShimmer`](/docs/components/chat-shimmer)效果。

::component-example
---
名称：'聊天消息指示器插槽示例'
类：'溢出-y-auto'
收阖：true
---
::

## 活性成分

道具

：组件-支柱

插槽数

：组件插槽

::tip
您可以在ChatMessages中使用[`ChatMessage`](/docs/components/chat-message#slots)组件的所有插槽，这些插槽会自动转发，因此您可以在使用`messages`属性时自定义各个消息。

```vue{7-15}
<script setup lang="ts">
import { isTextUIPart } from 'ai'
</script>

<template>
  <UChatMessages :messages="messages" :status="status">
    <template #content="{ message }">
      <template
        v-for="(part, index) in message.parts"
        :key="`${message.id}-${part.type}-${index}`"
      >
        <p v-if="isTextUIPart(part)" class="whitespace-pre-wrap">
          {{ part.text }}
        </p>
      </template>
    </template>
  </UChatMessages>
</template>
```
::

暴露

通过模板引用访问组件时，可以使用以下命令：

| 名称|类型|
| ---- | ---- |
| 255秒后|254小时256小时|

主题

：组件主题

## 变更日志

：组件更改日志
