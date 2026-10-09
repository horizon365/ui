---
description: Een hoofdloze component om kindcomponenten te thematiseren.
category: layout
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## Gebruik

De Thema-component overschrijft standaard **slot classes** en **props** van alle onderliggende componenten zonder ze afzonderlijk te wijzigen.
Het maakt gebruik van Vue 's `provide` / `inject`-mechanisme onder de motorkap, dus de overrides zijn op elke diepte van toepassing.

::note
De Thema-component geeft geen HTML-element weer, het biedt alleen thema-overschrijvingen aan zijn kinderen.
::

::framework-only
#nuxt
:::tip
Voor themaconfiguratie op app-niveau raden we aan in plaats daarvan het `app.config.ts`-bestand te gebruiken.
:::

#vue
:::tip
Voor themaconfiguratie op app-niveau raden we aan in plaats daarvan het `vite.config.ts`-bestand te gebruiken.
:::
::

### Slot klassen

Gebruik de `ui` prop om slotklassen van afstammelende componenten te overschrijven. Toetsen zijn componentnamen (camelCase) en waarden zijn hun slotklasse-overschrijvingen.

::component-example
---
name: 'theme-ui-example'
---
::

### Prop standaard: badge{label="4.8+" class="align-text-top"}

Gebruik de `props`-prop om de standaardwaarde van een prop op afstammelingscomponenten te overschrijven. Elke toets wordt toegewezen aan een deel van de rekwisieten van dat onderdeel.

::component-example
---
name: 'theme-props-example'
---
::

::tip
Expliciete rekwisieten op een component (bijv. `<UButton color="primary" />`) winnen altijd `<UTheme :props>`. Standaardwaarden voor thema 's zijn alleen van toepassing wanneer de prop niet expliciet is doorgegeven.
::

## Voorbeelden

### Meerdere componenten

Gebruik verschillende toetsen in `ui` of `props` om meerdere componenttypen tegelijk te thematiseren.

::component-example
---
name: 'theme-multiple-example'
---
::

### Genestelde thema 's

Nest meerdere Thema-componenten om overrides samen te stellen. Het binnenste Thema heeft voorrang, terwijl niet-overschreven toetsen worden overgenomen van het buitenste Thema.

::component-example
---
name: 'theme-nested-example'
---
::

### Expliciete prioriteit

Het expliciet instellen van een prop (inclusief `ui`) op een individuele component heeft altijd voorrang op de Thema-component.

::component-example
---
name: 'theme-priority-example'
---
::

### Diepe voortplanting

De overschrijvingen zijn beschikbaar voor alle afstammelingscomponenten, ongeacht hoe diep ze zijn genest.

::component-example
---
name: 'theme-deep-example'
---
::

::note
In dit voorbeeld is `MyButton` een aangepast onderdeel dat intern een `UButton` weergeeft. Het thema overrides is nog steeds van toepassing omdat ze zich door de hele componentboom verspreiden.
::

### Form onderdelen

Gebruik de Thema-component om consistente styling toe te passen op een groep formuliercomponenten.

::component-example
---
name: 'theme-form-example'
---
::

::tip
`<UFormField>`, `<UFieldGroup>` en `<UAvatarGroup>` houden voorrang op `<UTheme :props>` voor `size`, `color` en `highlight`. Validatiefouten dwingen de `error`-kleur ook boven elke thema-waarde.
::

### Prose onderdelen

Gebruik de `prose`-naamruimte om typografische componenten te thematiseren. Toetsen zijn genest onder `prose` (bijv. `prose.p`, `prose.code`).

::component-example
---
name: 'theme-prose-example'
---
::

## API

### Props

:component-props

### Slots

:component-slots

## Wijzigingsgelog

:component-changelog
