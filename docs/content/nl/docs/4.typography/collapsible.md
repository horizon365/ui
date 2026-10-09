---
title: ProseInklapbaar
description: 'Schakel de zichtbaarheid van inhoud in met vloeiende animaties voor uitvouwen en samenvouwen.'
category: components
navigation.title: Collapsible
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Collapsible.vue
---

## Gebruik

Wikkel uw inhoud in met de `collapsible`-component om een [Collapsible](/docs/components/collapsible) in uw inhoud weer te geven.

::code-preview{class="[&>div]:*:w-full [&>div]:*:my-0"}

::collapsible

| Prop | Standaard | Type |
|---------|-----------|--------------------------|
| `name` | | `string`{lang="ts-type"} |
| `size` | `md` | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |

::

#code

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

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Thema

:component-theme{prose}

## Wijzigingsgelog

:component-changelog{prefix="prose"}
