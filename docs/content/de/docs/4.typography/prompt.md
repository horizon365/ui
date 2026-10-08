---
title: ProsePrompt
description: 'Zeigen Sie vorgefertigte AI-Eingabeaufforderungen mit One-Click-Kopie und IDE-Integration an.'
category: components
navigation.title: Prompt
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/Prompt.vue
---

@@@ph000@@Verwendung

Verwenden Sie die `prompt` Komponente, um eine vorgefertigte AI-Eingabeaufforderung anzuzeigen, die Benutzer in ihre Zwischenablage kopieren oder direkt in ihrer IDE öffnen können. Die `description` prop wird als sichtbare Beschriftung angezeigt, während der Standard-Slot den Eingabeaufforderungstext enthält, der kopiert wird.

::component-code{slug="prompt" prose}
---
Props:
  Beschreibung: Erstellen Sie ein Dashboard-Layout mit Nuxt UI.
  Klasse: 'w-voll mein-0'
Hide:
  @@003@Klasse
Slots auf:
  Default:|
    Sie sind ein Nuxt UI expert. Help mir bauen ein dashboard-layout mit einer zusammenklappbaren sidebar und eine klebrige top navbar.

    Forderungen:
    - Verwendung `UDashboardPanel`,`UDashboardSidebar`, und `UDashboardNavbar`
    - Verwenden Sie semantische Farb-Token wie `bg-elevated` und `text-muted` für die Thematisierung
    - Die Seitenleiste sollte Navigationslinks mit Symbolen enthalten, die `UNavigationMenu` verwenden
    - Die Navigationsleiste sollte einen Breadcrumb, eine Suchschaltfläche und ein Dropdown-Menü für Benutzer anzeigen
    - Das Layout muss vollständig responsiv sein und die Seitenleiste auf dem Handy zusammenklappen
---
::

@@ph015@@gmail.de

Verwenden Sie das `icon` prop, um ein Symbol neben der Beschreibung anzuzeigen.

::component-code{slug="prompt" prose}
---
Ignoriert:
  @@ph017@beschreibung
Hide:
  @@@@@18@18@18
Props:
  description: Erstellen Sie ein Formular mit Validierung.
  I-Lucide-File-Pen-Line (englisch)
  Klasse: 'w-voll my-0'
Die Slots:
  Default:|
    Erstellen Sie ein Registrierungsformular mit Nuxt UI mit Zod-Schemavalidierung.

    Anforderungen:
    - Use `UForm` mit einem Zod-Schema zur Validierung
    - Add `UFormField` umschließt jede Eingabe: Name (`UInput`), E-Mail (`UInput` type email), Rolle (`USelect` mit Optionen Admin, Editor, Viewer)
    - Include ein submit `UButton` mit Ladezustand
    - Inline-Fehlermeldungen unterhalb jedes Feldes anzeigen
    - Bei erfolgreicher Einreichung, zeigen Sie eine `UToast` Benachrichtigung
---
::

@@ph031@@Aktion

Verwenden Sie `actions` prop, um zusätzliche Schaltflächen anzuzeigen. Die Schaltfläche `copy` wird immer angezeigt. Die verfügbaren Aktionen sind `cursor`,`windsurf` und `claude`.

::component-code{slug="prompt" prose}
---
Ignoriert:
  @@ph037@beschreibung
  @@@@@@@@@@icon______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
Hide:
  @@@@@@399@@class
Props:
  Beschreibung: Fügen Sie einen Farbmodus hinzu.
  I-Lucide-Sonne-Mond
  Aktionen:
    @@ph040@@cursor |
    @@ph041@@@claude
  Klasse: 'w-voll mein-0'
Die Slots:
  Default:|
    Fügen Sie meiner Nuxt-App einen Farbmodus-Umschalter hinzu.

    Anforderungen:
    - Verwenden Sie `useColorMode` von `@nuxtjs/color-mode`, um den aktuellen Modus zu verwalten
    - Render ein `UButton` mit `variant="ghost"`, dass Zyklen zwischen `light`,`dark` und `system` auf Klick
    - Aktualisieren Sie das Tastensymbol dynamisch: `i-lucide-sun` für Licht,`i-lucide-moon` für Dunkelheit,`i-lucide-monitor` für System
    - Fügen Sie einen Tooltip mit `UTooltip` hinzu, der den aktuellen aktiven Modus anzeigt
---
::

@@@@@@57@@bpb

@@@@@@@@@@@@ph058@@@props

: component-props {prose}

### Slots

: component-slots {prose}

@@ph062@@theme@@theme@@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@theme@@theme@theme@theme@theme@@theme@theme@theme@theme@theme@theme@theme@theme@the

: component-theme {prose}

@@ph064@@changelog @@changelog

: component-changelog {prefix="prose"}
