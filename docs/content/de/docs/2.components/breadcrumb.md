---
description: Eine Hierarchie von Links zum Navigieren durch eine Website.
category: navigation
keywords:
  - breadcrumbs
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Breadcrumb.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Breadcrumb-Komponente, um den Speicherort der aktuellen Seite in der Hierarchie Ihrer Website anzuzeigen.

::component-code
---
Einsturz: wahr
Ignoriert:
  @@ph001@@gmail.de
Außen:
  @@ph002@@gmail.de
Externe Typen:
  @@@ph003@@breadcrumbItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Docs'(Deutsche Übersetzung)
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      zu: '/docs'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      nach: '/docs/components'
    - label:'Breadcrumb'(Brotkrümel)
      Icon: 'i-lucide-link'(I-lucide-Verbindung)
      zu: '/docs/components/breadcrumb'
---
::

@@ph007@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`label?: string``label?: string`PH0111 @
`icon?: string``icon?: string``icon?: string`{lang="ts-type"}
`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`{lang="ts-type"}{lang="ts-type"}`avatar?: AvatarProps``avatar?: AvatarProps``avatar?: AvatarProps`
- [`slot?: string`))))
`class?: any``class?: any``class?: any`{lang="ts-type"}{lang="ts-type"}`class?: any`{lang="ts-type"}
`ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLeadingAvatar?: ClassNameValue, linkLabel?: ClassNameValue, separator?: ClassNameValue, separatorIcon?: ClassNameValue }`PH03030

Sie können jede Eigenschaft von der [Link](/docs/components/link#props) Komponente wie `to`,`target`, etc. übergeben.

::component-code
---
Ignoriert:
  @@ph037@@gmail.de
Außen:
  @@ph038@gmail.de
Externe Typen:
  @@@ph039@@breadcrumbItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'Docs'(Deutsche Übersetzung)
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      zu: '/docs'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      nach: '/docs/components'
    - label:'Breadcrumb'(Deutsche Übersetzung)
      Icon: 'i-lucide-link'(I-lucide-Verbindung)
      zu: '/docs/components/breadcrumb'
---
::

::note
Ein `span` wird anstelle eines Links gerendert, wenn die `to`-Eigenschaft nicht definiert ist.
::

@@ph045@@Trennungszeichen

Verwenden Sie die `separator-icon` prop, um die [Icon](/docs/components/icon) zwischen den einzelnen Elementen anzupassen.

::component-code
---
Ignoriert:
  @@ph052@gmail.de
Außen:
  @@ph053@gmail.de
Externe Personen:
  @@ph054@@@breadcrumbItem [Bearbeiten | Quelltext bearbeiten]
Props:
  separatorIcon: 'i-lucide-arrow-right'(I-lucide-arrow-rechts)
  Items:
    - label:'Docs'(Deutsche Übersetzung)
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      zu: '/docs'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      nach: '/docs/components'
    - label:'Breadcrumb'(Deutsche Übersetzung)
      Icon: 'i-lucide-link'(I-lucide-Verbindung)
      zu: '/docs/components/breadcrumb'
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronRight` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronRight` key anpassen.
:::
::

@@ph062@@@@ph063@@@@ph063@@@@@ph063@@@@@badge@@ph063@@@@@badge@@ph063 @

Verwenden Sie `color` prop, um die Farbe des aktiven Breadcrumb zu ändern.

::component-code
---
Ignoriert:
  @@ph065@gmail.de
Außen:
  - Artikel
Externe Typen:
  - BreadcrumbItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: "zweitrangig"
  Items:
    - label:'Docs'(Deutsche Übersetzung)
      Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
      zu: '/docs'
    - label:'Komponenten'
      Icon: 'i-lucide-box'(I-lucide-Box) auf Englisch
      nach: '/docs/components'
    - label:'Breadcrumb'(Deutsche Übersetzung)
      Icon: 'i-lucide-link'(I-lucide-Verbindung)
      zu: '/docs/components/breadcrumb'
---
::

## Beispiele

### Mit Trennschlitz

Verwenden Sie den `#separator`-Steckplatz, um den Trenner zwischen den einzelnen Elementen anzupassen.

: component-example {name="breadcrumb-separator-slot-example"}

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot` Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

: component-example {name="breadcrumb-custom-slot-example"}

::tip{to="#slots"}
Sie können auch die `#item`,`#item-leading`,`#item-label` und `#item-trailing` Slots verwenden, um alle Elemente anzupassen.
::

@@@@@@@@@@@@@@@@@@@@@@@@@@api

@@@@@@@@@@@ph095@@@props

Komponenten-Props

@@ph096@@slots

Die Komponenten-Slots

@@@@@@@@@ph097@@theme

Das Komponenten-Theme

@@ph098@@changelog @@changelog

Das Component-Changelog
