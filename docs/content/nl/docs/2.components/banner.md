---
description: 'Toon een banner bovenaan uw website om gebruikers te informeren over belangrijke informatie.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## Gebruik

### Titel

Gebruik de `title` prop om een titel op de Banner weer te geven.

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### Icoon

Gebruik de `icon` prop om een pictogram op de banner weer te geven.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
props:
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Kleur

Gebruik de `color` prop om de kleur van de Banner te veranderen.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - icon
  - title
props:
  color: 'neutral'
  icon: i-lucide-info
  title: 'This is a banner with an icon.'
---
::

### Sluiten

Gebruik de `close`-prop om een [Button](/docs/components/button) weer te geven om de banner te verwijderen. Standaard `false`.

::tip
Een `close` event wordt uitgezonden wanneer op de knop Sluiten wordt geklikt.
::

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
---
#code

```vue
<template>
  <UBanner id="example" title="This is a closable banner." close />
</template>
```

::

::note
Als het gesloten is, wordt `banner-${id}` opgeslagen in de lokale opslag om te voorkomen dat het opnieuw wordt weergegeven.: br Voor het bovenstaande voorbeeld wordt `banner-example` opgeslagen in de lokale opslag.
::

::caution
Om de afgewezen status bij het opnieuw laden van pagina 's te behouden, moet u een `id`-prop specificeren.
Zonder een expliciete `id` wordt de banner alleen verborgen voor de huidige sessie en verschijnt deze opnieuw bij het opnieuw laden van de pagina.
::

### Sluit pictogram

Gebruik de `close-icon` prop om de knop Sluiten aan te passen [Icon](/docs/components/icon). Standaard `i-lucide-x`.

::component-example
---
iframe:
  style: 'height: 48px;'
overflowHidden: true
name: 'banner-example'
props:
  title: 'This is a closable banner with a custom close icon.'
  closeIcon: 'i-lucide-x-circle'
---
#code

```vue
<template>
  <UBanner
    title="This is a closable banner with a custom close icon."
    close
    close-icon="i-lucide-x-circle"
  />
</template>
```

::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
U kunt dit pictogram globaal aanpassen in uw `app.config.ts` onder `ui.icons.close`-toets.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
U kunt dit pictogram globaal aanpassen in uw `vite.config.ts` onder `ui.icons.close`-sleutel.
:::
::

### Acties

Gebruik de `actions` prop om enkele [Button](/docs/components/button) acties aan de Banner toe te voegen.

::component-code
---
prettier: true
class: '!p-0'
ignore:
  - title
  - actions
  - variant
external:
  - actions
externalTypes:
  - ButtonProps[]
props:
  title: 'This is a banner with actions.'
  actions:
    - label: Action 1
      variant: outline
    - label: Action 2
      trailingIcon: i-lucide-arrow-right
---
::

::note
De actieknoppen zijn standaard `color="neutral"` en `size="xs"`. U kunt deze waarden aanpassen door ze rechtstreeks aan elke actieknop door te geven.
::

### Link

U kunt elke eigenschap van de [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component doorgeven, zoals `to`, `target`, `rel`, enz.

::component-code
---
prettier: true
class: '!p-0'
overflowHidden: true
ignore:
  - title
  - target
props:
  to: 'https://nuxtlabs.com/'
  target: '_blank'
  title: 'NuxtLabs is joining Vercel!'
  color: 'primary'
---
::

::note
De `NuxtLink`-component neemt alle andere kenmerken over die u aan de `User`-component doorgeeft.
::

## Voorbeelden

### Binnen `app.vue`

Gebruik de Banner component in je `app.vue` of in een layout:

```vue [app.vue]{3}
<template>
  <UApp>
    <UBanner icon="i-lucide-construction" title="Nuxt UI v4 has been released!" />

    <UHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter />
  </UApp>
</template>
```

## API

### Props

:component-props

### Slots

:component-slots

### Uitzendt

:component-emits

## Thema

:component-theme

## Wijzigingsgelog

:component-changelog
