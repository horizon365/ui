---
title: ProseCodeVoorbeeld
description: 'Geef codevoorbeelden weer met een voorbeeld en hun bron voor duidelijkere documentatie.'
category: components
navigation.title: CodePreview
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## Gebruik

Wikkel alle inhoud met de `code-preview`-component om een live preview naast de broncode weer te geven met behulp van de `code`-sleuf.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Voorbeeld"}

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

## Thema

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
