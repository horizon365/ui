---
description: Ein Wrapper um NuxtLink mit zusätzlichen Requisiten.
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

## Bearbeiten

Die Link-Komponente ist ein Wrapper um [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) mit dem [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop.

- `inactive-class` prop um eine Klasse zu setzen, wenn der Link inaktiv ist, wird `active-class` verwendet, wenn er aktiv ist.
- `exact` unterstützt das Styling mit `active-class`, wenn der Link aktiv ist und die Route genau der aktuellen Route entspricht.
- `exact-query` und `exact-hash` werden mit `active-class` formatiert, wenn der Link aktiv ist und die Abfrage oder der Hash genau mit der aktuellen Abfrage oder dem aktuellen Hash übereinstimmt.
  - Verwenden Sie `exact-query="partial"` zum Formatieren mit `active-class`, wenn der Link aktiv ist und die Abfrage teilweise mit der aktuellen Abfrage übereinstimmt.

Der Anreiz dahinter ist, die gleiche API wie NuxtLink wieder in Nuxt 2/Vue 2 bereitzustellen. Sie können mehr darüber in der Vue Router [migration von Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) Anleitung lesen.

::note
Es wird von den Komponenten [`Breadcrumb`](/docs/components/breadcrumb), [`Button`](/docs/components/button), [`ContextMenu`](](/docs/components/context-menu), [`DropdownMenu`](/docs/components/dropdown-menu) und [`NavigationMenu`xph0505505xxph0555555xph0555x verwendet.
::

xp053xTag

Die `Link`-Komponenten rendern ein `<a>`-Tag, wenn eine `to`-Prop bereitgestellt wird, andernfalls rendert sie ein `<button>`-Tag.

::component-code
---
props:
  to: ''
  as: 'button'
slots:
  default: Link
---
::

::note
Sie können den gerenderten HTML-Code überprüfen, indem Sie die `to`-Prop ändern.
::

### Style (Englisch)

Standardmäßig hat der Link standardmäßig aktive und inaktive Styles, siehe Abschnitt [#theme](#theme).

::component-code
---
props:
  to: /docs/components/link
slots:
  default: Link
---
::

::note
Versuchen Sie, die `to`-Prop zu ändern, um die aktiven und inaktiven Zustände zu sehen.
::

Sie können dieses Verhalten mit der `raw`-Prop überschreiben und Ihre eigenen Styles mit `class`, `active-class` und `inactive-class` bereitstellen.

::component-code
---
ignore:
  - raw
props:
  raw: true
  to: /docs/components/link
  activeClass: 'font-bold'
  inactiveClass: 'text-muted'
slots:
  default: Link
---

Link auf
::

::callout{icon="i-simple-icons-visualstudiocode"}
Wenn Sie die [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)-Erweiterung für VSCode verwenden und die automatische Vervollständigung für die `active-class`-und `inactive-class`-Props erhalten möchten, können Sie die folgenden Einstellungen zu Ihrem `.vscode/settings.json` hinzufügen:

```json [.vscode/settings.json]
{
  "tailwindCSS.classAttributes": [
    "active-class",
    "inactive-class"
  ]
}
```
::

### Locale: badge{label="4.7+" class="align-text-top"}

Die Link-Komponente integriert sich automatisch in [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/), wenn sie installiert ist. Interne Links werden automatisch mit dem `$localePath`-Helfer lokalisiert, ohne dass ein manuelles Wrapping erforderlich ist.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
Bei Bedarf können Sie weiterhin manuell `localePath()` oder `localeRoute()` verwenden.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Erfahren Sie mehr über die Internationalisierung in Nuxt UI.
::

## API ist

### Props (nicht)

::component-props
---
ignore:
  - custom
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<a>` HTML-Attribute.
::

### Slots (englisch)

:component-slots

## Theme Bearbeiten

:component-theme

## Changelog Bearbeiten

:component-changelog
