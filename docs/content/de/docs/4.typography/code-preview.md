---
title: Vorschau ProseCodePreview
description: 'Zeigen Sie Codebeispiele mit einer Vorschau und deren Quelle an, um eine klarere Dokumentation zu erhalten.'
category: components
navigation.title: CodePreview
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

## Bearbeiten

Wickeln Sie alle Inhalte mit der `code-preview`-Komponente ein, um eine Live-Vorschau neben dem Quellcode mit dem `code`-Steckplatz anzuzeigen.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Vorschau Preview"}

::code-preview{class="[&>div]:*:my-0"}
x004x Bearbeiten

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
x014x ist
```
::
````

::

## API (Englisch)

### Props (englisch)

:component-props{prose}

### Slots (englisch)

:component-slots{prose}

## Theme Bearbeiten

:component-theme{prose}

## Changelog (englisch)

:component-changelog{prefix="prose"}
