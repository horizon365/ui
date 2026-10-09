---
title: FormField
description: 提供验证和错误处理的表单元素包装器。
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

## 用法

使用FormField包装任何表单组件。在[Form](/docs/components/form)中使用，它提供验证和错误处理。

### Label

使用`label`属性为表单控件设置标签。

::component-code
---
prettier: true
props:
  label: Email
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

::note
标签`for`属性和表单控件与唯一的`id`相关联（如果未提供）。
::

当使用`required`属性时，标签旁边会添加一个星号。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  required: true
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### 说明

使用`description` prop在标签下方提供其他信息。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  description: We'll never share your email with anyone else.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Hint

使用`hint`属性在标签旁边显示提示消息。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  hint: Optional
slots:
  default: |

    <UInput placeholder="Enter your email" />
---

:u-input{placeholder="Enter your email"}
::

### 帮助

使用`help` prop在表单控件下显示帮助消息。当与`error` prop一起使用时，`error` prop优先。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  help: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### Error

使用`error` prop在表单控件下显示错误消息。当与`help` prop一起使用时，`error` prop优先。

当在[Form](/docs/components/form)中使用时，发生验证错误时会自动设置此值。

::component-code
---
prettier: true
ignore:
  - label
props:
  label: Email
  error: Please enter a valid email address.
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
这将表单控件上的`color`设置为`error`。您可以在`app.config.ts`中全局更改它。
::

### 错误模式

使用`error-pattern`属性来匹配正则表达式中的表单错误。这对于带有数组值的组件（如[InputTags](/docs/components/input-tags)）尤其重要，其中错误在其名称中包含数组索引（例如`tags.0`）。

::tip{to="/docs/components/form#error-reporting"}
查看在Form中使用`error-pattern`的示例。
::

### Size

使用`size`属性更改FormField的大小，`size`将被代理到表单控件。

::component-code
---
prettier: true
ignore:
  - label
  - description
  - hint
  - help
props:
  label: Email
  description: We'll never share your email with anyone else.
  hint: Optional
  help: Please enter a valid email address.
  size: xl
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

### 方向：badge{label="4.3+" class="align-text-top"}

使用`orientation`属性将FormField.xml的布局更改为`vertical`。

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  orientation: horizontal
  label: Email
  help: Please enter a valid email address.
  class: w-72
slots:
  default: |

    <UInput placeholder="Enter your email" class="w-full" />
---

:u-input{placeholder="Enter your email" class="w-full"}
::

## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
