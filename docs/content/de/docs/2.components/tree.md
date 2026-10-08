---
description: Eine Baumansichtskomponente zum Anzeigen und Interagieren mit hierarchischen Datenstrukturen.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: Bäume
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

@@@ph000@Verwendung

Verwenden Sie die Komponente Baum, um eine hierarchische Struktur von Elementen anzuzeigen.

::component-code
---
Einsturz: wahr
Hide:
  @@001@Klasse
Ignoriert:
  @@ph002@@gmail.de
Außen:
  @@ph003@gmail.de
Externe Personen:
  @@ph004@@gmail.de [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'app/'
      defaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Bezeichnung: W-60
---
::

@@ph014@gmail.de

Verwenden Sie `items` prop als Array von Objekten mit den folgenden Eigenschaften:

`icon?: string``icon?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}PH018018@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH02020@@@@@@@@@PH0202020@@@@@@@@@@@PH02021
`trailingIcon?: string`{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}{lang="ts-type"}
`defaultExpanded?: boolean``defaultExpanded?: boolean``defaultExpanded?: boolean``defaultExpanded?: boolean`{lang="ts-type"}
`disabled?: boolean`PH03030
`slot?: string`{lang="ts-type"}
`children?: TreeItem[]``children?: TreeItem[]``children?: TreeItem[]`{lang="ts-type"}{lang="ts-type"}
`onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void``onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void``onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}
`onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void``onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void``onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH0444@@@@@@@@PH0444@@@@@@@@@@@PH04444@@@@@@@@@@PH0445 @
`ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }``ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }``ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
Für jedes Element ist ein eindeutiger Identifikator erforderlich. Die Komponente verwendet `label` prop als Identifikator, wenn kein `get-key` zur Verfügung gestellt wird. Idealerweise sollten Sie eine `get-key`-Funktionsprop angeben, um einen eindeutigen Identifikator zurückzugeben. Alternativ können Sie die `labelKey` prop verwenden, um anzugeben, welche Eigenschaft als eindeutiger Identifikator verwendet werden soll.
::

::component-code
---
Einsturz: wahr
Hide:
  @@53@Klasse
Ignoriert:
  @@ph054@gmail.de
Außen:
  @@@ph055@gmail.de
Externe Personen:
  @@ph056@@gmail.de [Bearbeiten | Quelltext bearbeiten]
Props:
  Items:
    - label:'app/'
      defaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

@@@@@@@@666@@1000000000000000000000000000000000000000000000

Verwenden Sie `multiple` prop, um mehrere Elemente auszuwählen.

::component-code
---
Einsturz: wahr
Hide:
  @@@@@@@@@@@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@class@classclass@classclass@class@class@class@class@classclass@class@classclass@classc
Ignoriert:
  @@ph069@gmail.de
Außen:
  @@ph070@gmail.de
Externe Typen:
  - TreeItem [Bearbeiten | Quelltext bearbeiten]
Props:
  Anzahl: true
  Items:
    - label:'app/'
      DefaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

@@ph082@@@ph082@@ph082@@@ph082@@@@ph082@@@@@@@ph082@@geschwärzt: badge@@ph082 @

Verwenden Sie `nested` prop, um zu steuern, ob der Baum mit einer verschachtelten Struktur oder als flache Liste gerendert wird.

::component-code
---
Einsturz: wahr
Hide:
  @@85@Klasse
Ignoriert:
  @@ph086@@gmail.de
Außen:
  @@@ph087@gmail.de
Externe Personen:
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@[]
Props:
  Geschützt: false
  Items:
    - label:'app/'
      DefaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          defaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

::note{to="#with-virtualization"}
Wenn `nested` ist, werden alle Elemente auf der gleichen Ebene mit Einrückung gerendert, um die Hierarchie anzuzeigen.
::

@@100@Farbe

Verwenden Sie `color` prop, um die Farbe des Baumes zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  @@102@Klasse
Ignoriert:
  @@ph103@gmail.de
Außen:
  - Artikel
Externe Typen:
  @@ph105@@gmail.de [Bearbeiten | Quelltext bearbeiten]
Props:
  Farbe: neutral
  Items:
    - label:'app/'
      defaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

@@115@115@115@111111111115@11115@11111115@1115@11115@1115@11115@11115@1115@111115@1115@111115@1115@11115@1115@11115@1115@1111115@11115@1111115@111115@111111115@111111115

Verwenden Sie die `size` prop, um die Größe des Baums zu ändern.

::component-code
---
Einsturz: wahr
Hide:
  @@117@Klasse
Ignoriert:
  @@118@gmail.de
Außen:
  - Artikel
Externe Personen:
  @@ph120@@gmail.de [Bearbeiten | Quelltext bearbeiten]
Props:
  Größe: XL
  Items:
    - label:'app/'
      defaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Bezeichnung: W-60
---
::

@@ph130@trailing-icon (auf Englisch)

Verwenden Sie die `trailing-icon` prop, um die nachlaufende [Icon](/docs/components/icon) eines übergeordneten Knotens anzupassen.

::note
Wenn für ein Element ein Symbol angegeben ist, hat es immer Vorrang vor diesen Requisiten.
::

::component-code
---
Einsturz: wahr
Hide:
  @@137@Klasse
Ignoriert:
  @@138@gmail.de
Außen:
  @@ph139@gmail.de
Externe Typen:
  @@140@@gmail.de [Bearbeiten | Quelltext bearbeiten]
Props:
  trailingIcon: 'i-lucide-arrow-down'(deutsch: 'i-lucide-arrow-down')
  Items:
    - label:'app/'
      DefaultErweitert: true
      Kinder:
        - label:'composables/'
          trailingIcon: 'i-lucide-chevron-down'(Deutsche Übersetzung)
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können dieses Symbol global in Ihrem `app.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter `ui.icons.chevronDown` key anpassen.
:::
::

@@ph154@@Erweitertes Icon

Verwenden Sie die Props `expanded-icon` und `collapsed-icon`, um die Symbole eines übergeordneten Knotens anzupassen, wenn er erweitert oder reduziert wird.

::component-code
---
Einsturz: wahr
Hide:
  @159@Klasse
Ignoriert:
  - Artikel
Außen:
  - Artikel
Externe Personen:
  @@@@@@@@162 [Bearbeiten]
Props:
  Icon: 'i-lucide-book-open'(Symbol: 'i-lucide-book-open')
  collapsedIcon: 'i-lucide-book'(englisch)
  Items:
    - label:'app/'
      DefaultErweitert: true
      Kinder:
        - label:'composables/'
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten/'
          DefaultErweitert: true
          Kinder:
            - label:'Karte. vue'
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
            - label:'Button. vue'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Klasse: W-60
---
::

::framework-only
#nuxt sein
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Sie können diese Symbole global in Ihren `app.config.ts` unter `ui.icons.folder` und `ui.icons.folderOpen` Tasten anpassen.
:::

#Ansehen
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können diese Symbole global in Ihren `vite.config.ts` unter `ui.icons.folder` und `ui.icons.folderOpen` Tasten anpassen.
:::
::

### disabled

Verwenden Sie `disabled` prop, um jegliche Benutzerinteraktion mit dem Baum zu verhindern.

::component-code
---
Einsturz: wahr
Hide:
  @@180@Klasse
Ignoriert:
  @@181@181@181@181@181@181@181@181@181@181@181@@181@181@18@181@18@18@18@@181@@@181@@18@@@181@@181@@181@@181@@181@@181@@181@@181@@@@181000000@@@@@@1000000000
Außen:
  @@ph182@gmail.de
Externe Personen:
  @@@@@@@@183 [Bearbeiten]
Props:
  Behindert: Wahr
  Items:
    - label:'app'(auf Englisch)
      Icon: 'i-lucide-folder'(I-lucide-Ordner)
      DefaultErweitert: true
      Kinder:
        - label:'zusammensetzbare'
          Icon: 'i-lucide-folder'(I-lucide-Ordner)
          Kinder:
            - label:'useAuth. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
            - label:'useUser. ts'(auf Englisch)
              Icon: 'i-vscode-icons-file-type-typescript'(I-vscode-icons-Datei-Type-Skript)
        - label:'Komponenten'
          Icon: 'i-lucide-folder'(I-lucide-Ordner)
          Kinder:
            - label:'Zuhause'
              Icon: 'i-lucide-folder'(I-lucide-Ordner)
              Kinder:
                - label:'Karte. vue'
                  Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
                - label:'Button. vue'(auf Englisch)
                  Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'app. vue'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-vue'(i-vscode-icons-datei-type-vue) auf der rechten Seite
    - label:'nuxt. config. ts'(auf Englisch)
      Icon: 'i-vscode-icons-file-type-nuxt'(i-vscode-icons-file-type-nuxt) auf der rechten Seite
  Bezeichnung: W-60
---
::

::note
Sie können auch einzelne Elemente deaktivieren, indem Sie `item.disabled`.
::

## Beispiele

### Control ausgewählte (n) Artikel

Sie können das/die ausgewählte (n) Element (e) mithilfe der Direktive `default-value` prop oder `v-model` steuern.

::component-example
---
Name: 'Baum-Modell-Wert-Beispiel'
Einsturz: wahr
Props:
  Klasse: W-60
---
::

::tip
Verwenden Sie `get-key` prop, um die Funktion zu ändern, mit der der eindeutige Schlüssel von jedem Element abgerufen wird, wenn ein `v-model` oder `default-value` bereitgestellt wird.
::

Wenn Sie verhindern möchten, dass ein Artikel ausgewählt wird, können Sie die `item.onSelect()`{lang="ts-type"}-Eigenschaft oder das globale `select`-Ereignis verwenden:

::component-example
---
Name: 'Baum-auf-Select-Beispiel'
Einsturz: wahr
Props:
  Klasse: W-60
---
::

::note
Auf diese Weise können Sie ein übergeordnetes Element erweitern oder reduzieren, ohne es auszuwählen.
::

### Control erweiterte Elemente

Sie können die erweiterten Elemente mit der `default-expanded` prop oder der `v-model` Direktive steuern.

::component-example
---
Name: 'Baum-expandiertes-Beispiel'
Einsturz: wahr
Props:
  Bezeichnung: W-60
---
::

Wenn Sie verhindern möchten, dass ein Element erweitert wird, können Sie die `item.onToggle()`{lang="ts-type"}-Eigenschaft oder das globale `toggle`-Ereignis verwenden:

::component-example
---
Name: "Baum-auf-Toggle-Beispiel"
Einsturz: wahr
Props:
  Bezeichnung: W-60
---
::

::note
Auf diese Weise können Sie ein Elternelement auswählen, ohne seine untergeordneten Elemente zu erweitern oder zu reduzieren.
::

### Mit Checkbox in Artikeln: badge{label="4.1+" class="align-text-top"}

Sie können den `item-leading`-Steckplatz verwenden, um eine [Checkbox]() zu den Elementen hinzuzufügen.`propagate-select` und `bubble-select` props, um eine Mehrfachauswahl mit Eltern-Kind-Beziehung zu ermöglichen und die `select` und `toggle`Ereignisse, um den ausgewählten und erweiterten Zustand der Elemente zu steuern.

::component-example
---
Name: 'Baum-Checkbox-Items-Beispiel'
Einsturz: wahr
Props:
  Bezeichnung: W-60
---
::

::note
In diesem Beispiel wird `as` prop verwendet, um die Elemente von `button` in `div` zu ändern, da das [`Checkbox`](/docs/components/checkbox) wird auch als `button` wiedergegeben.
::

### Mit Drag & Drop: badge{label="4.1+" class="align-text-top"}

Verwenden Sie die [`useSortable`]() composable from [`@vueuse/integrations`](https://vueuse.org/integrations/README.html)[Sortable.js](https://sortablejs.github.io/Sortable/)Für ein nahtloses Drag & Drop Erlebnis.

::component-example
---
Schöner: wahr
Einsturz: wahr
Name: "Baum-Drag-and-Drop-Beispiel"
---
::

::note
In diesem Beispiel wird `nested` prop auf `false` gesetzt, um eine flache Liste von Elementen zu haben, so dass die Elemente per Drag & Drop gezogen werden können.
::

### Mit Virtualisierung: badge{label="4.1+" class="align-text-top"}

Verwenden Sie `virtualize` prop, um die Virtualisierung für große Listen als Boolean oder ein Objekt mit Optionen wie `{ estimateSize: 32, overscan: 12 }` zu aktivieren.

::warning
Wenn die Virtualisierung aktiviert ist, wird die Baumstruktur abgeflacht, ähnlich wie bei der Einstellung von `nested` prop auf `false`.
::

::component-example
---
Schöner: wahr
Name: 'Baum-Virtualisierungs-Beispiel'
Props:
  Klasse: W-60
---
::

### Mit benutzerdefinierten Steckplatz

Verwenden Sie die `slot`-Eigenschaft, um ein bestimmtes Element anzupassen.

Sie haben Zugriff auf folgende Slots:

`#{{ item.slot }}-wrapper`{lang="ts-type"}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@PH26262@@@@@@@@@@PH26263 @
`#{{ item.slot }}-leading``#{{ item.slot }}-leading`PH2666 @
`#{{ item.slot }}-label``#{{ item.slot }}-label`PH2699@@@@@@PH2699@@@@@@@PH26999@@@@@@@@@@@@@@@PH2699999@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`#{{ item.slot }}-trailing``#{{ item.slot }}-trailing`PH27272 @

::component-example
---
Name: 'Baum-Custom-Slot-Beispiel'
Einsturz: wahr
Props:
  Klasse: W-60
---
::

@@@@@@@@b273@b273

@@@ph274@@props

Komponenten-Props

### Spielautomaten

Die Komponenten-Slots

@@@ph276@@emits

Komponenten emittieren

## theme

Das Komponenten-Theme

@@ph278@@changelog @@changelog

Das Component-Changelog
