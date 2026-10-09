---
title: ProseCodePreview (Edición española)
description: 'Muestra ejemplos de código con una vista previa y su fuente para una documentación más clara.'
category: components
navigation.title: CodePreview
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

xph0000xUso

Envuelva cualquier contenido con el componente `code-preview` para mostrar una vista previa en vivo junto con su código fuente utilizando la ranura `code`.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Preview"}

::code-preview{class="[&>div]:*:my-0"}
xf004x (Edición)

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
`inline code` (Edición española)
```
::
````

::

## API (Edición española)

### Props (Edición española)

:component-props{prose}

### Slots

:component-slots{prose}

## Temas

:component-theme{prose}

## Changelog (Edición española)

:component-changelog{prefix="prose"}
