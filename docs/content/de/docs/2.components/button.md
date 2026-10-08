---
description: Ein Button-Element, das als Link fungieren oder eine Aktion auslösen kann.
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

@@@ph000@Verwendung

Verwenden Sie den Standard-Slot, um das Label des Buttons festzulegen.

::component-code
---
Die Slots:
  Markiert: Button
---
::

@@ph001@@@bpg-bpg.de

Verwenden Sie `label` prop, um die Beschriftung des Buttons festzulegen.

::component-code
---
Props:
  Bezeichnung: Button
---
::

@@003@Farbe

Verwenden Sie die `color` prop, um die Farbe des Buttons zu ändern.

::component-code
---
Props:
  Farbe: neutral
Slots auf:
  Markiert: Button
---
::

@@ph005@@Variantentyp

Verwenden Sie die `variant` prop, um die Variante des Buttons zu ändern.

::component-code
---
Props:
  Farbe: neutral
  Beschreibung: Outline
Die Slots:
  Fehler: Button
---
::

@@007@000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Verwenden Sie die `size` prop, um die Größe des Buttons zu ändern.

::component-code
---
Props:
  Größe: XL
Die Slots:
  Fehler: Button
---
::

@@ph009@@gmail.de

Verwenden Sie die `icon` prop, um ein [Icon](/docs/components/icon) innerhalb des Buttons anzuzeigen.

::component-code
---
Props:
  I-Lucide-Rakete
  Größe: md
  Farbe: Primary
  Variante: solide
Die Slots:
  Markiert: Button
---
::

Verwenden Sie `leading` und `trailing` props, um die Symbolposition festzulegen, oder die `leading-icon` und `trailing-icon` props, um für jede Position ein anderes Symbol festzulegen.

::component-code
---
Props:
  trailingIcon: i-lucide-arrow-right (englisch)
  Größe: MD
Slots auf:
  Markiert: Button
---
::

Der `label` als Prop oder Slot ist optional, sodass Sie den Button als Nur-Symbol-Button verwenden können.

::component-code
---
Props:
  I-Lucide-Suche
  Größe: md
  Farbe: Primary
  Variante: solide
---
::

@@@@@@@@avatar20@@@avatar200000000000000000000000000000000000000000000000000

Verwenden Sie die `avatar` prop, um ein [Avatar](/docs/components/avatar) innerhalb des Buttons anzuzeigen.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Farbe: neutral
  Beschreibung: Outline
Slots auf:
  Default:|

    Der Button
---
::

Der `label` als Prop oder Slot ist optional, sodass Sie den Button nur als Avatar-Button verwenden können.

::component-code
---
Schöner: wahr
Ignoriert:
  - avatar.loading (nicht verfügbar)
Props:
  Avatare sind:
    src: 'https://github.com/nuxt.png'(auf Englisch)
    Aufladung: Lazy
  Größe: md
  Farbe: neutral
  Variante: Übersicht
---
::

@@@@@@@29@@Link

Sie können jede Eigenschaft von der[Link](/docs/components/link#props)Komponente wie`to`,`target`, etc. übergeben .

::component-code
---
Ignoriert :
  @@ph036@@zielgerichtet.de
Props :
  zwei :https://github.com/nuxt/ui
  Ziel : _ blank
Slots auf :
  Markiert : Button
---
::

Wenn der Button ein Link ist oder wenn Sie`active`prop verwenden , können Sie die`active-color`und`active-variant`props verwenden , um den aktiven Status anzupassen .

::component-code
---
Schöner : wahr
Ignoriert :
  @@ph040@gmail.de
  @@ph041@@variantenreich
Items :
  Aktiviert :
    - vorallem
    @@ph043@zweitrangig
    @@ph044@Erfolg
    @@45@info.de
    @@ph046@@warning
    @@ph047@Fehler
    @@ph048@neutral.de
  Aktivvariante :
    @@ph049@@gmail.de
    @@ph050@@outline (nicht bekannt)
    @@ph051@gmail.de
    @@ph052@unterschwellig
    @@ph053@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost@ghost.com
    @@@@@@54@Link
Props:
  aktiv: wahr
  Farbe: neutral
  Variante: Übersicht
  activeFarbe: primär
  Ausführung: Solid
Slots auf:
  Default:|

    Der Button
---

Der Button
::

Sie können auch die Props `active-class` und `inactive-class` verwenden, um den aktiven Status anzupassen.

::component-code
---
Props:
  aktiv: wahr
  Beispiel: font-bold
  inactiveClass: 'font-light'(nicht aktiviert)
Die Slots:
  Fehler: Button
---

Der Button
::

::tip
Sie können diese Stile global in Ihrer `app.config.ts` Datei unter dem `ui.button.variants.active` Schlüssel konfigurieren.

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

@@ph074@Aufladen

Verwenden Sie die `loading` prop, um ein Ladesymbol anzuzeigen und den Button zu deaktivieren.

::component-code
---
Props:
  Aufladung: true
  Nachtrag: false
Slots auf:
  Markiert: Button
---
Der Button
::

Verwenden Sie `loading-auto` prop, um das Ladesymbol automatisch anzuzeigen, während das `@click`-Versprechen aussteht.

: component-example {name="button-loading-auto-example"}

Dies funktioniert auch mit der Komponente [Form](/docs/components/form).

: component-example {name="button-loading-auto-form-example"}

@@ph084@@Iconloading @@ Iconloading@@@ph084@@loading-icon@@loading-icon.de

Verwenden Sie `loading-icon` prop, um das Ladesymbol anzupassen. Standardmäßig ist `i-lucide-loader-circle`.

::component-code
---
Props:
  Aufladung: true
  loadingIcon: 'i-lucide-loader'(englisch)
Die Slots:
  Markiert: Button
---
Der Button
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

@@ph091@@disabled @ nicht vorhanden

Verwenden Sie `disabled` prop, um die Schaltfläche zu deaktivieren.

::component-code
---
Props:
  Behindert: Wahr
Die Slots:
  Markiert: Button
---

Der Button
::

@@ph093@@Beispiele

`class` prop

Verwenden Sie `class` prop, um die Grundstile des Buttons zu überschreiben.

::component-code
---
Props:
  Klasse: 'font-bold rounded-full'(font-bold gerunded-voll)
Slots auf:
  Markiert: Button
---
::

`ui` prop

Verwenden Sie die `ui` prop, um die Slots-Stile des Buttons zu überschreiben.

::component-code
---
Schöner: wahr
Ignoriert:
  @@100@Ui
  @@101@101@101@101@101@101@101@101@101@101@101@101@101@101@@101@101@101@@101@101@@101@101@101@101@101@101@@10101@101@101@101@101@101@101@10101@101@101@101@10101@101@101@101@@@1010101@@@@10101001@@@@@1010101@@@@@@@@@10101010101@@@@@@@@@@@@@@@1010101010
  @@ph102@@variantenreich
  @@ph103@@gmail.de
Props:
  I-Lucide-Rakete
  Farbe: neutral
  Beschreibung: Outline
  ui: ist
    leadingIcon: 'text-primär'
Slots auf:
  Default:|

    Der Button
---
::

@@104@bmg10

### Props

Komponenten-Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Diese Komponente unterstützt auch alle nativen `<button>` HTML-Attribute.
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
Die `Button` Komponente erweitert die `Link` Komponente.
::

### Spielautomaten

Die Komponenten-Slots

@@ph110@gmail.de

Das Komponenten-Theme

@@ph111@changelog @@changelog @ changelog

Das Component-Changelog
