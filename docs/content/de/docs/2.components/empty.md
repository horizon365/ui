---
description: 'Eine Komponente, die einen leeren Zustand anzeigt.'
category: data
keywords:
  - no data
  - placeholder
  - zero state
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Empty.vue
---

@@@ph000@@Verwendung

Verwenden Sie die Komponente Leer, um einen Platzhalterstatus anzuzeigen, wenn kein Inhalt angezeigt werden soll.

::code-preview

:::u-empty
---
Icon: I-Lucide-Datei
Titel: Kein Projekt gefunden
description: Es sieht so aus, als hätten Sie keine Projekte hinzugefügt. Erstellen Sie eines, um zu beginnen.
Aktionen:
  - icon: i-lucide-plus (auf Englisch)
    Labels: Neues schaffen
  - icon: i-lucide-refresh-cw (Deutsche Übersetzung)
    Bezeichnung: Refresh
    Farbe: neutral
    Variante: subtil
---
:::

::

@@ph003@title

Verwenden Sie `title` prop, um den Titel des leeren Status festzulegen.

::component-code
---
Props:
  Titel: Kein Projekt gefunden
---
::

@@ph005@Beschreibung

Verwenden Sie `description` prop, um den leeren Zustand zu beschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@007@title
Props:
  Titel: Keine Projekte gefunden
  description: Es sieht so aus, als hätten Sie keine Projekte hinzugefügt. Erstellen Sie eines, um zu beginnen.
---
::

@@@@@@@@@@@@@@@@@@ICON

Verwenden Sie `icon` prop, um das Symbol für den leeren Zustand festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph010@title
  @@ph011@description
Props:
  Icon: I-Lucide-Datei
  Titel: Keine Projekte gefunden
  description: Es sieht so aus, als hätten Sie keine Projekte hinzugefügt. Erstellen Sie eines, um zu beginnen.
---
::

@@@@@avatar@@@avatar@avatar@@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avatar@avataratar@avatar@avatar@avataratar@avataratar@avatar@avatar@avatar@avataratar@avataratar@avataratar@avatar@avataratar@avataram@avataram@avataram@avataram@avataram@avataramataram@avataramataram@avataramataramataramataramataram@@@@avataramataramataramataramataramataramataramataramataramataram

Verwenden Sie `avatar` prop, um den Avatar des leeren Zustands festzulegen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@@@@@@@@icon.de
  @@ph015@title
  @@ph016@@beschreibung
Props:
  avatar. src: 'https://github.com/nuxt.png'(englisch)
  Titel: Keine Projekte gefunden
  description: Es sieht so aus, als hätten Sie keine Projekte hinzugefügt. Erstellen Sie eines, um zu beginnen.
---
::

### Loading: badge{label="4.10+" class="align-text-top"}

Verwenden Sie `loading` prop, um ein Ladesymbol anstelle des Symbols anzuzeigen. Das Layout bleibt identisch, sodass Sie ohne Layoutverschiebungen zwischen Lade-und Leerzustand wechseln können.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph020@@gmail.de
  @@ph021@title
  @@ph022@beschreibung
Props:
  Icon: I-Lucide-Datei
  Aufladung: true
  Titel: Ladeprojekte
  Beschreibung: Bitte warten Sie, während wir Ihre Projekte abrufen.
---
::

### Loading Icon: badge{label="4.10+" class="align-text-top"}

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig auf `i-lucide-loader-circle`.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph027@@gmail.de
  @@ph028@title
  @@ph029@beschreibung
  @@ph030@@Aufladen
Props:
  Icon: I-Lucide-Datei
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
  Titel: Verladung
  Beschreibung: Bitte warten Sie, während wir Ihre Projekte abrufen.
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.loading` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.loading` key anpassen.
:::
::

@@ph035@@Aktionen

Verwenden Sie die `actions` prop, um einige [Button](/docs/components/button) Aktionen in den leeren Zustand einzufügen.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph041@@gmail.de
  @@ph042@title
  @@ph043@beschreibung
  @@ph044@Aktion
Props:
  Icon: I-Lucide-Datei
  Titel: Keine Projekte gefunden
  description: Es sieht so aus, als hätten Sie keine Projekte hinzugefügt. Erstellen Sie eines, um zu beginnen.
  Aktionen:
    - icon: i-lucide-plus (auf Englisch)
      Labels: Neues schaffen
    - icon: i-lucide-refresh-cw (auf Englisch)
      Markiert: Refresh
      Farbe: neutral
      Variante: subtil
---
::

@@ph047@@Variantentabelle

Verwenden Sie `variant` prop, um die Variante des leeren Zustands zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph049@@gmail.de
  @@ph050@title
  @@@ph051@beschreibung
  @@ph052@Aktion
Props:
  Variante: Nackt
  I-Lucide-Bell Ubersetzungen
  Titel: Keine Anmeldung
  description: You're all caught up. New notifications will appear here. Neue Benachrichtigungen werden hier angezeigt.
  Aktionen:
    - icon: i-lucide-refresh-cw (auf Englisch)
      Markiert: Refresh
      Farbe: neutral
      Variante: subtil
---
::

@@@@@544@@554@54@54@54@54@54@54@54@@54@@54@54@@@54@@54@@@54@@54@@@54@@@54@@54@@54@@54@54@@54@54@54@54@54@54@54@54@54@54@@54@554@@54@@@554@@54@@@54@@54@@@554@@@@@554@@@@@@@5554@@@@@@@@@@@5554@@@@@@@@@@5554@@@@@@@@@@@@@@@@@55554@@@@@@@@@@@@@@@@@@@@@@

Verwenden Sie `size` prop, um die Größe des leeren Zustands zu ändern.

::component-code
---
Schöner: wahr
Ignoriert:
  @@ph056@@gmail.de
  @@@@@57@title
  @@ph058@beschreibung
  @@ph059@Aktion
Props:
  Größe: XL
  I-Lucide-Bell Ubersetzungen
  Titel: Keine Anmeldung
  description: You're all caught up. New notifications will appear here. Neue Benachrichtigungen werden hier angezeigt.
  Aktionen:
    - icon: i-lucide-refresh-cw (Deutsche Übersetzung)
      Markiert: Refresh
      Farbe: neutral
      Variante: subtil
---
::

## Beispiele

### Mit Slots

Verwenden Sie die verfügbaren Slots, um einen komplexeren leeren Zustand zu erstellen.

::component-example
---
Einsturz: wahr
Name: 'Empty-Slots-Beispiel'
---
::

## api

@@@ph064@@Props

Komponenten Props

### Slots

Die Komponenten-Slots

## Thema

Das Komponenten-Theme

@@ph067@@changelog @@changelog

Das Component-Changelog
