---
title: Die ProseCard
description: 'Erstellen Sie hervorgehobene Inhaltsblöcke mit optionalen Links und Navigation.'
category: components
navigation.title: Card
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Card.vue
---

@@@ph000@Verwendung

Verwenden Sie Markdown im Standard-Slot der`card`Komponente , um Ihre Inhalte hervorzuheben .

Sie können auch jede Eigenschaft von der Komponente[`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link)oder[`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html)übergeben .

::component-code{slug="card" prose}
---
Hide :
  @@15@Klasse
Ignoriert :
  @@ph016@@zielgerichteter
Props :
  Klasse : ' my - 0 w - 96 ' (Meine - 0 w - 96)
  Titel : Startup
  Icon : i-lucide - Benutzer
  Farbe : Primär
  auf : ' https ://nuxt.lemonsqueezy.com'
  Ziel : _ blank
Die Slots :
  Standard : Am besten für kleine Teams , Startups und Agenturen mit bis zu 5 Entwicklern geeignet .
---

Ideal für kleine Teams , Startups und Agenturen mit bis zu 5 Entwicklern .
::

@@@@@b17@b17.de

@@ph018@@@gmail.de

: component-props{prose}

@@ph020@@slots (nicht vorhanden)

: component-slots{prose}

@@ph022@@gmail.de

: component-theme{prose}

@@ph024@@changelog@changelog

: component-changelog {prefix="prose"}
