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

@@@ph000@Verwendung

Wickeln Sie alle Inhalte mit der `code-preview` Komponente ein, um eine Live-Vorschau neben dem Quellcode mit dem `code` Slot anzuzeigen.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="Vorschau Preview"}

::code-preview{class="[&>div]:*:my-0"}
@@@@004

#Der Code

```mdc
`inline code`
```

::

#Der Code

````mdc
::code-preview
`inline code`

#code
```mdc
@@ph013 @
```
::
````

::

@@@@@@18@18@1999

@@ph019@@@props

: component-props {prose}

### Slots

: component-slots {prose}

@@ph023@gmail.de

: component-theme {prose}

@@ph025@@changelog @ changelog

: component-changelog {prefix="prose"}
