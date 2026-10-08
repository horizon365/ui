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

## 使用情况

链接组件是使用[`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom)属性围绕[`<NuxtLink>`PH04@PH05@PH06 @@的包装器。它提供了一些额外的属性：

- `inactive-class`属性用于在链接处于非活动状态时设置类，`active-class`用于在活动状态时设置类。
- `exact`当链接处于活动状态且路线与当前路线完全相同时，使用`active-class`来设置样式。
- `exact-query`和`exact-hash`支持在链接处于活动状态并且查询或哈希与当前查询或哈希完全相同时使用`active-class`设置样式。
  - 当链接处于活动状态且查询与当前查询部分匹配时，使用`exact-query="partial"`设置`active-class`的样式。

这背后的动机是在Nuxt 2 / Vue 2中提供与NuxtLink相同的API。您可以在Vue Router[从Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link)迁移指南中了解更多有关它的信息。

::note
它是由[、](、/docs/components/breadcrumb、)、[、](、)、[、](、/docs/components/context-menu、)、[、](、[、[、](、[、[、[、](、[、[、](、/docs/components/dropdown-menu、[、)、[、](、/docs/components/context-menu、)、和)的组件。
::

标签：

当提供`to`属性时，`Link`组件会呈现`<a>`标记，否则会呈现`<button>`标记。您可以使用`as`属性来变更后援标记。

::component-code
---
道具：
  到：''
  为：'按钮'
插槽：
  默认：链接
---
::

::note
可以通过更改`to`属性来检查呈现的HTML。
::

### 风格

默认情况下，链接具有默认的活动和非活动样式，请查看[#theme](#theme)部分。

::component-code
---
道具：
  到：/docs/组件/链接
插槽：
  默认：链接
---
::

::note
请尝试更改`to`道具以查看活动和非活动状态。
::

您可以使用`raw`属性来覆写此行为，并使用`class`、`active-class`和`inactive-class`来提供您自己的样式。

::component-code
---
忽略：
- 原始
道具：
  raw：真
  到：/docs/组件/链接
  活动类：'字体粗体'
  inactiveClass：“文本静音”
插槽：
  默认：链接
---

链路
::

::callout{icon="i-simple-icons-visualstudiocode"}
如果您正在使用VSCode的[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)扩展，并希望自动完成`active-class`和`inactive-class`属性，则可以将以下设置添加到`.vscode/settings.json`中：

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### 区域设置：徽标{label="4.7+" class="align-text-top"}

安装后，链接组件会自动与[`@nuxtjs/i18n`](https://i18n.nuxtjs.org/)集成。使用`$localePath`帮助器可自动本地化内部链接，而无需手动换行。

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
进一步了解Nuxt UI中的国际化。
::

## 活性成分

### 道具

::component-props
---
忽略：
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
此组件还支持所有本机`<a>`HTML属性。
::

### Slots

：组件插槽

## Theme

：组件主题

## Changelog

：组件更改日志
