---
title: ProsePrompt
description: '通过一键复制和IDE集成显示预构建的AI提示。'
category: components
navigation.title: Prompt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

## 使用情况

使用`prompt`组件可以显示一个预构建的AI提示，用户可以将其复制到剪贴板或直接在IDE中打开。`description`prop显示为可见标签，而默认插槽包含复制的提示文本。

::component-code{slug="prompt" prose}
---
道具：
  描述：使用Nuxt UI构建仪表板布局。
  class：'w-full my-0'
隐藏：
  班级
插槽：
  默认值：|
    你是一个Nuxt UI专家。帮我构建一个带有可折叠侧边栏和粘性顶部导航栏的仪表板布局。

    要求：
    - 使用`UDashboardPanel`、`UDashboardSidebar`和`UDashboardNavbar`
    - 使用语义颜色标记（如`bg-elevated`和`text-muted`）进行主题化
    - The sidebar should include navigation links with icons using`UNavigationMenu`
    - 导航栏应显示面包屑、搜索按钮和用户菜单
    - The layout must be fully responsive and collapse the sidebar on移动的
---
::

### Icon

使用`icon`道具在描述旁边显示图标。

::component-code{slug="prompt" prose}
---
忽略：
  - description
隐藏：
  班级
道具：
  描述：创建带有验证的表单。
  图标：i-lucide-file-pen-line
  class：'w-full my-0'
插槽：
  默认值：|
    使用带有Zod模式验证的Nuxt UI创建注册表单。

    要求：
    - 将`UForm`与Zod架构一起使用以进行验证
    - 添加`UFormField`包装每个输入：名称（`UInput`）、电子邮件（`UInput`type email）、角色（`USelect`，带有选项Admin、Editor、Viewer）
    - 包括一个带有加载状态的提交`UButton`
    - Display inline error messages below each field
    - 成功提交后，显示`UToast`通知
---
::

### Actions

使用`actions`道具可显示其他按钮。始终显示`copy`按钮。可用操作为`cursor`、`windsurf`和`claude`。

::component-code{slug="prompt" prose}
---
忽略：
  描述：
  - icon
隐藏：
  班级
道具：
  描述：添加颜色模式切换。
  图标：i-lucide-sun-moon
  动作：
    - cursor
    - claude
  class：'w-full my-0'
插槽：
  默认值：|
    添加一个颜色模式切换到我的Nuxt应用程序。

    要求：
    - 使用`@nuxtjs/color-mode`中的`useColorMode`管理当前模式
    - 使用在`light`、`dark`和`system`之间循环的`variant="ghost"`渲染一个`UButton`
    - 动态更新按钮图标：`i-lucide-sun`为亮，`i-lucide-moon`为暗，`i-lucide-monitor`为系统
    - 使用`UTooltip`添加显示当前活动模式的工具提示
---
::

## API

### Props

：组件-道具{prose}

### Slots

：组件插槽{prose}

## Theme

：component-theme{prose}

## Changelog

：component-changelog{prefix="prose"}
