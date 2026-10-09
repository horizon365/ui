---
description: 一个按钮元素，可以作为一个链接或触发一个动作。
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## 用法

使用默认插槽设置按钮的标签。

::component-code
---
slots:
  default: Button
---
::

### Label

使用`label`属性设置Button的标签。

::component-code
---
props:
  label: Button
---
::

### 颜色

使用`color`属性更改按钮的颜色。

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variant

使用`variant` prop更改Button的变体。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### Size

使用`size`属性更改按钮的大小。

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icon

使用`icon`道具在按钮内显示[Icon](/docs/components/icon)。

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Button
---
::

使用`leading`和`trailing`道具设置图标位置，或使用`leading-icon`和`trailing-icon`道具为每个位置设置不同的图标。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

`label`作为道具或插槽是可选的，因此您可以将Button用作仅图标按钮。

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### Avatar

使用`avatar`道具在按钮内显示[Avatar](/docs/components/avatar)。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Button
---
::

`label`作为道具或插槽是可选的，因此您可以将Button用作仅限头像的按钮。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
---
::

### Link

您可以从[Link](/docs/components/link#props)组件传递任何属性，如`to`、`target`等。

::component-code
---
ignore:
  - target
props:
  to: https://github.com/nuxt/ui
  target: _blank
slots:
  default: Button
---
::

当Button是一个链接或使用`active`属性时，您可以使用`active-color`和`active-variant`属性来自定义活动状态。

::component-code
---
prettier: true
ignore:
  - color
  - variant
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  active: true
  color: neutral
  variant: outline
  activeColor: primary
  activeVariant: solid
slots:
  default: |

    Button
---

按钮
::

您还可以使用`active-class`和`inactive-class`属性来自定义活动状态。

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

按钮
::

::tip
您可以在`ui.button.variants.active`键下的`app.config.ts`文件中全局配置这些样式。

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### 加载中

使用`loading`道具显示一个加载图标并禁用按钮。

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
按钮
::

使用`loading-auto` prop在`@click` promise挂起时自动显示加载图标。

:component-example{name="button-loading-auto-example"}

这也适用于[Form](/docs/components/form)组件。

:component-example{name="button-loading-auto-form-example"}

### 加载图标

使用`loading-icon`道具自定义加载图标. `i-lucide-loader-circle`。

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
按钮
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
你可以在你的`app.config.ts`中的`ui.icons.loading`键下全局自定义这个图标。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
你可以在你的`ui.icons.loading`键下的`vite.config.ts`中全局自定义这个图标。
:::
::

### 禁用

使用`disabled` prop禁用按钮。

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

按钮
::

## 示例

### `class`道具

使用`class`属性覆盖Button的基本样式。

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui`道具

使用`ui`属性覆盖Button的插槽样式。

::component-code
---
prettier: true
ignore:
  - ui
  - color
  - variant
  - icon
props:
  icon: i-lucide-rocket
  color: neutral
  variant: outline
  ui:
    leadingIcon: 'text-primary'
slots:
  default: |

    Button
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
此组件还支持所有原生`<button>` HTML属性。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button`组件扩展了`Link`组件。在GitHub上查看源代码。
::

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
