---
title: Prosecollapsible Ubersetzungen
description: 'Schalten Sie die Sichtbarkeit von Inhalten mit glatten Expand-und Collapse-Animationen um.'
category: components
navigation.title: Collapsible
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

@@@ph000@Verwendung

Wickeln Sie Ihren Inhalt mit der Komponente `collapsible` ein, um ein [Collapsible](/docs/components/collapsible) in Ihrem Inhalt anzuzeigen.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| Prop    | Default sein   | Typen                     |
|---------|-----------|--------------------------|
| @@@@006 @|           |@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0008|
| @@009 @|@@10 @      |{lang="ts-type"}|
| @@ph013 @|@@ph013 @|{lang="ts-type"}|

::

#Der Code

```mdc
::collapsible

| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::
```

::

@@@@@@b28@b28

@@@ph029@@Props

: component-props {prose}

### Slots

: component-slots {prose}

@@ph033@gmail.de

: component-theme {prose}

@@ph035@changelog @ changelog

: component-changelog {prefix="prose"}
