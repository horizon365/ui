---
description: '一个响应页脚为您的网站链接和法律的通知。'
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Footer.vue
---

## 使用情况

页脚组件呈现`<footer>`元素。

使用`left`、`default`和`right`插槽来自定义页脚。

::component-example
---
更漂亮：真的
收阖：true
名称：'页脚示例'
类：“！p-0”
道具：
  类别：'w-完整'
---
::

::note
在本例中，我们使用[NavigationMenu](/docs/components/navigation-menu)组件在中心呈现页脚链接。
::

::tip{to="/docs/components/footer-columns"}
您可以使用`FooterColumns`组件来显示`top`插槽内的链接列表。
::

示例：

### 在`app.vue`内

在`app.vue`或版面中使用页脚组件：

```vue [app.vue]{32-67}
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]
</script>

<template>
  <UApp>
    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>

      <UNavigationMenu :items="items" variant="link" />

      <template #right>
        <UButton
          icon="i-simple-icons-discord"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/discord"
          target="_blank"
          aria-label="Discord"
        />
        <UButton
          icon="i-simple-icons-x"
          color="neutral"
          variant="ghost"
          to="https://go.nuxt.com/x"
          target="_blank"
          aria-label="X"
        />
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/nuxt"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </UApp>
</template>
```

::note
在这个范例中，我们会使用[Separator](/docs/components/separator)组件，在页尾上方加入框缐。
::

美国石油学会

道具

：组件-支柱

插槽

：组件插槽

主题

：组件主题

## 变更日志

：组件更改日志
