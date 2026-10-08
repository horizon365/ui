---
title: PageList
description: 'Ein vertikales Listenlayout zur Anzeige von Inhalten in einem gestapelten Format.'
category: page
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/PageList.vue
---

@@@ph000@Verwendung

Die PageList-Komponente bietet eine flexible Möglichkeit, Inhalte in einem vertikalen Listenlayout anzuzeigen. Es ist perfekt für die Erstellung von gestapelten Listen von [PageCard](/docs/components/page-card) Komponenten oder anderen Elementen mit optionalen Trennern zwischen den Elementen.

::component-example
---
Einsturz: wahr
Name: 'Beispielseite'
Props:
  Klasse: "W-voll"
---
::

@@ph005@split

Verwenden Sie `divide` prop, um einen Teiler zwischen jedem untergeordneten Element hinzuzufügen.

::component-example
---
Einsturz: wahr
name: 'page-list-divide-example'(Beispiel für eine Seite)
Props:
  Klasse: "W-voll"
---
::

@@007@bpb

@@@@@@@@@ph008@@props

Komponenten Props

@@ph009@gmail.de

Die Komponenten-Slots

@@ph010@@gmail.de

Das Komponenten-Theme

@@ph011@@changelog @@ changelog

Das Component-Changelog
