---
description: '显示空状态的组件。'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

## 使用情况

当没有要显示得内容时，使用“空”组件显示占位符状态.

::code-preview

:::u-empty
---
图标：i-lucide文件
title：找不到项目
描述：您似乎尚未新增任何项目。请建立一个项目以开始。
动作：
  i-lucide-plus（氯苄氨基糖苷+）
    label：新建
  - 图标：i-透明质酸-刷新-cw
    标签：刷新
    颜色：中性
    变体：细微
---
:::

::

标题：

使用`title`道具设置空状态的标题。

::component-code
---
道具：
  title：找不到项目
---
::

说明：

使用`description`属性来设定空白状态的描述。

::component-code
---
更漂亮：真的
忽略：
  标题：
道具：
  title：找不到项目
  描述：您似乎尚未新增任何项目。请建立一个项目以开始。
---
::

### 图标

使用`icon`道具将图标设置为空状态。

::component-code
---
更漂亮：真的
忽略：
- 标题
  说明：
道具：
  图标：i-lucide文件
  title：找不到项目
  描述：您似乎尚未新增任何项目。请建立一个项目以开始。
---
::

虚拟人偶

使用`avatar`道具将头像设置为空状态。

::component-code
---
更漂亮：真的
忽略：
- 图标
- 标题
  说明：
道具类：
  虚拟化身.src：“https：//github.com/nuxt.png”（网址：http：//github.com/nuxt.png）
  title：找不到项目
  描述：您似乎尚未新增任何项目。请建立一个项目以开始。
---
::

正在加载：徽标

使用`loading`道具来显示载入中的图标来取代图标。版面配置会保持不变，因此您可以在载入和清空状态之间切换，而不需变更版面配置。

::component-code
---
更漂亮：真的
忽略：
- 图标
- 标题
  描述：
道具：
  图标：i-lucide文件
  载入：true
  title：载入项目
  description：正在获取您的项目，请稍候。
---
::

### 正在载入图标：徽章{label="4.10+" class="align-text-top"}

使用`loading-icon`属性来自订载入图标。预设为`i-lucide-loader-circle`。

::component-code
---
更漂亮：真的
忽略：
  图标
  标题
  描述
  正在加载
道具：
  图标：i-lucide文件
  载入：true
  加载图标：“i-lucide加载程序”
  title：载入项目
  description：正在获取您的项目，请稍候。
---
::

::framework-only
#nuxt（无文本）
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
您可以在`ui.icons.loading`键下的`app.config.ts`中全局自定义此图标。
:::

版本号
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
您可以在`ui.icons.loading`键下的`vite.config.ts`中全局自定义此图标。
:::
::

操作

使用`actions`属性将一些[按钮](/docs/components/button)操作添加到空状态。

::component-code
---
更漂亮：真的
忽略：
  “- ”图标
  标题：
  描述：
  操作
道具：
  图标：i-lucide文件
  title：找不到项目
  描述：您似乎尚未新增任何项目。请建立一个项目以开始。
  动作：
    碘苯磺酰脲
      label：新建
    - 图标：碘苯丙氨酸-刷新-cw
      标签：刷新
      颜色：中性
      变体：细微
---
::

变体

使用`variant`属性更改空状态的变量。

::component-code
---
更漂亮：真的
忽略：
  图标
  标题：
  描述：
  操作
道具：
  变体：裸
  图标：i-lucide-铃
  title：无通知
  描述：你已经赶上了。新的通知将出现在这里。
  动作：
    - 图标：碘苯丙氨酸-刷新-cw
      标签：刷新
      颜色：中性
      变体：细微
---
::

尺寸

使用`size`属性更改空状态的大小。

::component-code
---
更漂亮：真的
忽略：
  图标
  标题
  描述
  操作
道具：
  尺寸：xl
  图标：i-lucide-铃
  title：无通知
  描述：你已经赶上了。新的通知将出现在这里。
  处理措施：
    i-lucide-刷新-cw
      标签：刷新
      颜色：中性色
      变体：细微
---
::

示例

带插槽

使用可用插槽创建更复杂的空状态。

::component-example
---
收阖：true
名称：'空插槽示例'
---
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
