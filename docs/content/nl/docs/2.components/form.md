---
description: Een formuliercomponent met ingebouwde validatie en afhandeling van inzendingen.
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

## Gebruik

Gebruik de Form-component om formuliergegevens te valideren met behulp van een validatiebibliotheek die [Standard ondersteunt Schema](https://github.com/standard-schema/standard-schema) zoals [Valibot](https://github.com/fabian-hiller/valibot), [Zod](https://github.com/colinhacks/zod), [Regle](https://github.com/victorgarciaesgi/regle), [Yup](https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) of [Superstruct](https://github.com/ianstormtaylor/superstruct) of uw eigen validatielogica.

Het werkt met de [FormField](/docs/components/form-field) component om foutmeldingen rond formulierelementen automatisch weer te geven.

### Schema validatie

Het vereist twee rekwisieten:

- `state` - een reactief object met de status van het formulier.
- `schema` - elke [Standard Schema](https://github.com/standard-schema/standard-schema) of [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**Standaard is er geen validatiebibliotheek opgenomen**, zorg ervoor dat u **installeert degene die u nodig hebt**.
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Zod"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Regle"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="JEP"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Joi ik"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstruct"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### Aangepaste validatie

Gebruik de `validate` prop om je eigen validatielogica toe te passen.

De validatiefunctie moet een lijst met fouten retourneren met de volgende kenmerken:

- `message` - het te tonen foutbericht.
- `name` - de `name` van de `FormField` om de fout naar toe te sturen.

::tip
Het kan naast de `schema`-prop worden gebruikt om complexe use-cases te behandelen.
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### Foutmelding

Fouten worden gekoppeld aan de overeenkomstige [FormField](/docs/components/form-field) met behulp van de `name`-prop. Een fout in het `email`-veld wordt weergegeven door `<FormField name="email">`{lang="vue"}.

Genestelde velden worden gematcht met behulp van puntnotatie. Een schema zoals `{ user: z.object({ email: z.string() }) }`{lang="ts"} zal worden toegepast op `<FormField name="user.email">`{lang="vue"}.

::warning
Fouten op array-items bevatten de index in hun naam (bijv. `tags.0`, `tags.1`) en komen niet overeen met `<FormField name="tags">`{lang="vue"} alleen door `name`.
Gebruik de `error-pattern` prop met een reguliere expressie zoals `/^tags\..+/`{lang="ts"} om ze vast te leggen. Dit is vooral handig voor componenten zoals [InputTags](/docs/components/input-tags).
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Input gebeurtenissen

Het Form-onderdeel activeert automatisch validatie wanneer een invoer een `input`, `change` of `blur`-gebeurtenis uitzendt.

- Validatie op `input` komt voor **as u type**.
- Validatie op `change` treedt op wanneer u **commit naar een value**.
- Validatie op `blur` gebeurt wanneer een ingang **loses focus**.

U kunt dit controleren wanneer validatie plaatsvindt met behulp van de `validate-on` prop.

::tip
Het formulier valideert altijd bij verzending.
::

::component-example{label="Standaard"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
U kunt de `useFormField` composable gebruiken om dit in uw eigen componenten te implementeren.
::

### Fout gebeurtenis

U kunt naar de `@error`-gebeurtenis luisteren om fouten te verwerken. Deze gebeurtenis wordt geactiveerd wanneer het formulier wordt ingediend en bevat een reeks `FormError`-objecten met de volgende velden:

- `id` - de invoer is `id`.
- `name` - de `name` van de `FormField`
- `message` - het te tonen foutbericht.

Hier is een voorbeeld dat het eerste invoerelement focust met een fout nadat het formulier is ingediend:

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### HTML5 validatie: badge{label="4.5+" class="align-text-top"}

Wanneer `form.submit()` programmatisch wordt aangeroepen, activeert de Form-component automatisch native HTML5-validatie voordat deze wordt ingediend.

::note
Dit is vooral handig wanneer de verzendknop zich buiten het formulierelement bevindt, zoals in een modale voettekst.
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### Nestvormen

Gebruik de `nested` prop om meerdere Form-componenten te nesten en hun validatiefuncties te koppelen. In dit geval zal het valideren van het bovenliggende formulier automatisch alle andere formulieren erin valideren.

Genestelde formulieren erven rechtstreeks de staat van hun ouders, dus u hoeft geen afzonderlijke staat voor hen te definiëren.
U kunt de `name`-prop gebruiken om een genest attribuut binnen de status van de ouder te targeten.

Het kan worden gebruikt om dynamisch velden toe te voegen op basis van input van de gebruiker:

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

Of om lijstinvoer te valideren:

::component-example
---
collapse: true
name: 'form-example-nested-list'
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Dit onderdeel ondersteunt ook alle native `<form>` HTML-kenmerken.
::

### Slots

:component-slots

### Uitzendt

:component-emits

### Expose

U hebt toegang tot de getypte componentinstantie met [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

Dit geeft u toegang tot het volgende:

| Naam | Type |
| ---- | ---- |
| `submit()`{lang="ts-type"} | `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers formulier indienen met HTML5-validatie.</p></div> |
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"} | `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers formuliervalidatie. Zal fouten veroorzaken tenzij `opts.silent` is ingesteld op true.</p></div> |
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"} | `void` <br> <div class="text-toned mt-1"><p>Clears formulierfouten die aan een specifiek pad zijn gekoppeld. Als er geen pad is opgegeven, worden alle formulierfouten verwijderd.</p></div> |
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"} | `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Retrieves formulierfouten die aan een specifiek pad zijn gekoppeld. Als er geen pad is opgegeven, worden alle formulierfouten geretourneerd.</p></div> |
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"} | `void` <br> <div class="text-toned mt-1"><p>Stelt formulierfouten in voor een bepaald pad. Als er geen pad is opgegeven, worden alle fouten overschreven. </p></div> |
| `errors`{lang="ts-type"} | `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Een verwijzing naar de array die validatiefouten bevat. Gebruik dit om de foutinformatie te openen of te manipuleren.</p></div> |
| `disabled`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} |
| `dirty`{lang="ts-type"} | `Ref<boolean>`{lang="ts-type"} `true` als ten minste één formulierveld is bijgewerkt door de gebruiker. |
| `dirtyFields`{lang="ts-type"} | `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Tracks velden die zijn gewijzigd door de gebruiker. |
| `touchedFields`{lang="ts-type"} | `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Houdt velden bij waarmee de gebruiker interactie heeft gehad. |
| `blurredFields`{lang="ts-type"} | `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Velden bijhouden die door de gebruiker zijn vervaagd. |

## Thema

:component-theme

## Changelog

:component-changelog
