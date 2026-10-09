---
description: NuxtLink的包装器，带有额外的道具。
category: navigation
keywords:
  - anchor
  - href
  - navigation
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue
---

## 用法

Link组件是[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)的包装器，使用[`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom)属性。它提供了一些额外的属性：

- `inactive-class` prop在链接不活动时设置类，`active-class`在活动时使用。
- `exact`当链路处于活动状态并且路由与当前路由完全相同时，使用`active-class`进行样式设置。
- `exact-query`和`exact-hash`在链接处于活动状态并且查询或散列与当前查询或散列完全相同时使用`active-class`进行样式设置。
  - 使用`exact-query="partial"`在链接处于活动状态并且查询与当前查询部分匹配时使用`active-class`进行样式设置。

这背后的动机是在Nuxt 2 / Vue 2中提供与NuxtLink相同的API。您可以在Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link)指南的Vue路由器[迁移中阅读更多信息。

::note
它由[`Breadcrumb`](/docs/components/breadcrumb)、[`Button`](/docs/components/button)、[`ContextMenu`](/docs/components/context-menu)、[`DropdownMenu`](/docs/components/dropdown-menu)和[`NavigationMenu`](/docs/components/navigation-menu)组件使用。
::

### Tag

当提供`to`属性时，`Link`组件会呈现`<a>`标记，否则会呈现`<button>`标记。您可以使用`as`属性更改回退标记。

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
您可以通过更改`to`属性来检查呈现的HTML。
::

### Style

默认情况下，链接有默认的活动和非活动样式，请查看[#theme](#theme)部分。

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
尝试更改`to`属性以查看活动和非活动状态。
::

您可以使用`raw`属性覆盖此行为，并使用`class`、`active-class`和`inactive-class`提供您自己的样式。

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

链路
::

::callout{icon="i-simple-icons-visualstudiocode"}
如果您正在使用[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)扩展用于VSCode，并希望获得`active-class`和`inactive-class`道具的自动完成，您可以将以下设置添加到`.vscode/settings.json`：

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### 区域设置：badge{label="4.7+" class="align-text-top"}

Link组件在安装时自动与[`@nuxtjs/i18n`](https://i18n.nuxtjs.org/)集成。内部链接使用`$localePath`帮助程序自动本地化，无需手动包装。

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
如果需要，您仍然可以手动使用`localePath()`或`localeRoute()`。
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
了解更多关于Nuxt UI中的国际化。
::

## API

### Props

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
此组件还支持所有原生`<a>` HTML属性。
::

### 老虎机

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
