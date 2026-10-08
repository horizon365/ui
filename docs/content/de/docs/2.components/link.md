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

@@@ph000@@Verwendung

Die Link-Komponente ist ein Wrapper um [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) unter Verwendung der [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop.

- `inactive-class` prop, um eine Klasse zu setzen, wenn der Link inaktiv ist, wird `active-class` verwendet, wenn er aktiv ist.
- `exact` prop mit `active-class` zu stylen, wenn der Link aktiv ist und die Route genau die gleiche wie die aktuelle ist.
- `exact-query` und `exact-hash` props, um mit `active-class` zu stylen, wenn der Link aktiv ist und die Abfrage oder der Hash genau die gleiche wie die aktuelle Abfrage oder der Hash ist.
  - use `exact-query="partial"` mit `active-class` zu stylen, wenn der Link aktiv ist und die Abfrage teilweise mit der aktuellen Abfrage übereinstimmt.

Der Anreiz dahinter ist, die gleiche API wie NuxtLink wieder in Nuxt 2/Vue 2. Sie können mehr darüber in der Vue Router [migration von Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) guide lesen.

::note
[`Breadcrumb`](/docs/components/breadcrumb)[`Button`/docs/components/button)[](](/docs/components/context-menuPH0444 [`DropdownMenu`](/docs/components/dropdown-menu) und [`NavigationMenu`](/docs/components/navigation-menu) Komponenten.
::

@@533@053@053@053@053@053@053@053@053@053@053@053@053@053@@053@053@@053@@053@@053@@053@@053@00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Die `Link`-Komponenten rendern ein `<a>`-Tag, wenn ein `to` prop bereitgestellt wird, andernfalls rendert es ein `<button>`-Tag.

::component-code
---
Props:
  zu: "
  Beispiel: Button
Slots auf:
  Fehler: link
---
::

::note
Sie können das gerenderte HTML überprüfen, indem Sie die `to` prop ändern.
::

@@ph060@@stylisch

Standardmäßig hat der Link standardmäßig aktive und inaktive Stile, siehe den Abschnitt [#theme](#theme).

::component-code
---
Props:
  nach: /docs/components/link
Slots auf:
  Fehler: link
---
::

::note
Ändern Sie `to` prop, um die aktiven und inaktiven Zustände zu sehen.
::

Sie können dieses Verhalten überschreiben, indem Sie `raw` prop verwenden und Ihre eigenen Stile mit `class`,`active-class` und `inactive-class` bereitstellen.

::component-code
---
Ignoriert:
  @@ph070@@rows.de
Props:
  RAW: Wahr
  zu: /docs/components/link
  Beispiel: font-bold
  inactiveClass: 'text-muted'(stummgeschaltet)
Slots auf:
  Fehler: link
---

Link auf
::

::callout{icon="i-simple-icons-visualstudiocode"}
Wenn Sie die Erweiterung [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) für VSCode verwenden und die automatische Vervollständigung für die Props `active-class` und `inactive-class` erhalten möchten, können Sie die folgenden Einstellungen zu Ihren `.vscode/settings.json` hinzufügen:

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

Die Link-Komponente integriert sich automatisch mit [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) bei der Installation. Interne Links werden automatisch mit dem `$localePath`-Helfer lokalisiert, ohne dass ein manuelles Wrapping erforderlich ist.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <ULink to="/about">About</ULink>
</template>
```

::tip
Sie können bei Bedarf weiterhin `localePath()` oder `localeRoute()` manuell verwenden.
::

::note{to="/docs/getting-started/integrations/i18n/nuxt#dynamic-locale"}
Erfahren Sie mehr über die Internationalisierung in Nuxt UI.
::

@@102@btw

@@@@@@@@ph103@props

::component-props
---
Ignoriert:
  @@ph104@gmail.de
---
::

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<a>` HTML-Attribute.
::

### Slots

Die Komponenten-Slots

## theme

Das Komponenten-Theme

@@ph108@@changelog (auf Englisch)

Das Component-Changelog
