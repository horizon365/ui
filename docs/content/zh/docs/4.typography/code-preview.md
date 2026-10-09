---
title: ProseCodePreview
description: '显示带有预览的代码示例及其源代码，以获得更清晰的文档。'
category: components
navigation.title: CodePreview
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## 用法

使用`code-preview`组件包装任何内容，以使用`code`插槽在其源代码旁边显示实时预览。

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="预览"}

::code-preview{class="[&>div]:*:my-0"}
`inline code`

#code

```mdc
`inline code`
```

::

#code

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
