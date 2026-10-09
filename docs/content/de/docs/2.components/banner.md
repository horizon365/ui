---
description: 'Platzieren Sie ein Banner oben auf Ihrer Website, um die Benutzer über wichtige Informationen zu informieren.'
category: element
keywords:
  - announcement bar
  - top bar
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Banner.vue
---

## Bearbeiten

### Titel

Verwenden Sie die `title`-Prop, um einen Titel auf dem Banner anzuzeigen.

::component-code
---
prettier: true
class: '!p-0'
props:
  title: 'This is a banner with an important message.'
---
::

### Icon (englisch)

Verwenden Sie die `icon` prop, um ein Symbol auf dem Banner anzuzeigen.

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

### color Bearbeiten

Verwenden Sie die `color` prop, um die Farbe des Banners zu ändern.

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

### Schließen

Verwenden Sie die `close`-Prop, um einen [Button](/docs/components/button) anzuzeigen, um das Banner zu schließen.

::tip
Ein `close`-Ereignis wird ausgegeben, wenn der Schließen-Button angeklickt wird.
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
Beim Schließen wird `banner-${id}` im lokalen Speicher gespeichert, um zu verhindern, dass es erneut angezeigt wird.: br Im obigen Beispiel wird `banner-example` im lokalen Speicher gespeichert.
::

::caution
Um den Status dismissed über Seiten-Reloads hinweg beizubehalten, müssen Sie eine `id`-Prop angeben. Ohne ein explizites `id` wird das Banner nur für die aktuelle Sitzung ausgeblendet und beim Seiten-Reload wieder angezeigt.
::

### Close Symbol

Verwenden Sie die `close-icon`-Prop, um die Schließen-Taste [Icon](/docs/components/icon). Defaults auf `i-lucide-x`.

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
Sie können dieses Symbol global in Ihrem `app.config.ts` unter der `ui.icons.close`-Taste.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Sie können dieses Symbol global in Ihrem `vite.config.ts` unter der `ui.icons.close`-Taste.
:::
::

### Actions Bearbeiten

Verwenden Sie die `actions`-Prop, um einige [Button](/docs/components/button)-Aktionen zum Banner hinzuzufügen.

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
Die Aktionsbuttons sind standardmäßig `color="neutral"` und `size="xs"`. Sie können diese Werte anpassen, indem Sie sie direkt an jede Aktionsschaltfläche übergeben.
::

### Link ist

Sie können jede Eigenschaft der Komponente [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) übergeben, z. B. `to`, `target`, `rel` usw.

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
Die `NuxtLink`-Komponente erbt alle anderen Attribute, die Sie an die `User`-Komponente übergeben.
::

## Examples (Beispiele)

### Innerhalb von `app.vue`

Verwenden Sie die Banner-Komponente in Ihrem `app.vue` oder in einem Layout:

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

### Props Bearbeiten

:component-props

### Slots Bearbeiten

:component-slots

### Emits (englisch)

:component-emits

## Theme Bearbeiten

:component-theme

## Changelog (englisch)

:component-changelog
