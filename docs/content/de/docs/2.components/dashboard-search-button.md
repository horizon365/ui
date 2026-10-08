---
title: Der DashboardSearchButton
description: 'Ein vordefinierter Button zum Öffnen des DashboardSearch-Modals.'
category: dashboard
links:
  - label: Der Button
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/DashboardSearchButton.vue
---

@@@ph000@Verwendung

Die DashboardSearchButton-Komponente wird verwendet, um das [DashboardSearch](/docs/components/dashboard-search) modal zu öffnen.

Der Komponentencode

Es erweitert die Komponente [Button](/docs/components/button), so dass Sie jede Eigenschaft wie `color`,`variant`,`size`, usw. passieren können.

::component-code
---
Ignoriert:
  @@ph012@@variant.de
Props:
  Variante: "Unterwürfig"
---
::

::note{to="#collapsed"}
Die Schaltfläche ist standardmäßig auf `color="neutral"` und `variant="outline"` eingestellt, wenn sie nicht zusammengeklappt ist, und `variant="ghost"`, wenn sie zusammengeklappt ist.
::

@@ph016@gmail.de ist kaputt

Verwenden Sie `collapsed` prop, um die Beschriftung der Schaltfläche auszublenden, und [kbds](#kbds). Standardmäßig `false`.

::component-code
---
Schöner: wahr
Props:
  untergegangen: true
---
::

::tip{to="/docs/components/dashboard-sidebar#slots"}
Wenn Sie die Schaltfläche in der Komponente **DashboardSidebar** verwenden, verwenden Sie direkt die `collapsed`-Slot-Prop.
::

### Kbds

Verwenden Sie `kbds` prop, um die Tastaturtasten in der Schaltfläche anzuzeigen. Standardmäßig auf `['meta', 'K']`{lang="ts-type"} entspricht die Standardverknüpfung der Komponente [DashboardSearch](/docs/components/dashboard-search#shortcut).

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph034@@kbds
Props:
  untergegangen: false
  Die KBS:
    - 'alt'
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#######################################################################################################################################
---
::

@@@@@@b37@b37

@@@@@@@@@@@@ph038@@props

Komponenten Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

@@ph040@@Slots

Die Komponenten-Slots

@@ph041@@gmail.de

Das Komponenten-Theme

@@ph042@@changelog @ changelog

Das Component-Changelog
