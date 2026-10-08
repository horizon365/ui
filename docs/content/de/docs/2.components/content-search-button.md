---
title: Der ContentSearchButton
description: 'Ein vordefinierter Button zum Öffnen des ContentSearch-Modals.'
category: content
framework: nuxt
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/content/ContentSearchButton.vue
---

::warning{to="/docs/getting-started/integrations/content"}
Diese Komponente ist nur verfügbar, wenn das `@nuxt/content`-Modul installiert ist.
::

@@ph001@@Nutzung

Die ContentSearchButton-Komponente wird verwendet, um das [ContentSearch](/docs/components/content-search) modal zu öffnen.

: component-code {prefix="content"}

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size` usw. übergeben können.

::component-code{prefix="content"}
---
Ignoriert:
  @@ph014@@variantenreich
Props:
  Variante: „ subtil "
---
::

::note{to="#collapsed"}
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="outline"` eingestellt, wenn sie nicht kollabiert ist, und `variant="ghost"`, wenn sie kollabiert ist.
::

@@ph018@gmail.de ist kaputt

Verwenden Sie `collapsed` prop, um die Beschriftung der Schaltfläche anzuzeigen, und [kbds](#kbds). Standardmäßig `true`.

::component-code{prefix="content"}
---
Schöner: wahr
Props:
  untergegangen: false
---
::

### Kbds

Verwenden Sie `kbds` prop, um Tastaturtasten in der Schaltfläche anzuzeigen. Standardmäßig auf `['meta', 'K']`{lang="ts-type"} entspricht die Standardverknüpfung der Komponente [ContentSearch](/docs/components/content-search#shortcut).

::component-code{prefix="content"}
---
Schöner: wahr
Ignoriert:
  - kbds
Props:
  untergegangen: false
  Die KBD:
    - 'alt'
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@####################################################################################################################################
---
::

@@@@@@b36@b36

@@@@@@@@@@ph037@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@ph039@gmail.de

Die Komponenten-Slots

@@ph040@@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@the

Das Komponenten-Theme

@@ph041@@changelog @ changelog

: component-changelog {prefix="content"}
