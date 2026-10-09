---
description: Un composant de formulaire avec validation intégrée et gestion de la soumission.
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

## Utilisation

Utilisez le composant Formulaire pour valider les données de formulaire à l'aide de n'importe quelle bibliothèque de validation prenant en charge [xhttps://github.com/standard-schema/standard-schema), telle que [Valibotxph006https://github.com/fabian-hiller/valibot), [Zod](ph011), [Reglesph014xph015), [Yupxph018https://github.com/jquense/yup), [Joi](https://github.com/hapijs/joi) ou [Superstruct](https://github.com/ianstormtaylor/superstruct) ou votre propre logique de validation

Il fonctionne avec le composant [FormField](/docs/components/form-field) pour afficher automatiquement les messages d'erreur autour des éléments de formulaire.

### Validation du schéma

Cela nécessite deux props:

- `state`-un objet réactif contenant l'état de la forme.
- `schema`-tout schéma [Standard ou [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**Aucune bibliothèque de validation n'est incluse ** par défaut, assurez-vous **install celle dont vous avez besoin **.
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot était"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Le Zod"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="règle"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Yup"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="joie"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Superstructure"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### Validation personnalisée

Utilisez le prop `validate` pour appliquer votre propre logique de validation.

La fonction de validation doit renvoyer une liste d'erreurs avec les attributs suivants:

- `message`: message d'erreur à afficher.
- `name`-le `name` du `FormField` à qui envoyer l'erreur.

::tip
Il peut être utilisé avec le prop `schema` pour gérer des cas d'utilisation complexes.
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

Rapport d'erreur ### Error

Les erreurs sont associées au champ [FormField](/docs/components/form-field) correspondant en utilisant sa prop. `name` Une erreur sur le champ `email` est affichée par `<FormField name="email">`{lang="vue"}.

Un schéma comme `{ user: z.object({ email: z.string() }) }`{lang="ts"} sera appliqué à `<FormField name="user.email">`{lang="vue"}.

::warning
Les erreurs sur les éléments de tableau incluent l'index dans leur nom (par exemple, `tags.0`, `tags.1`) et ne correspondent pas à `<FormField name="tags">`{lang="vue"} par `name` seul. Utilisez la prop `error-pattern` avec une expression rationnelle comme `/^tags\..+/`{lang="ts"} pour les capturer. Ceci est particulièrement utile pour les composants comme [InputTags](xph121).
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Input Événements

Le composant Formulaire déclenche automatiquement la validation lorsqu 'une entrée émet un événement `input`, `change` ou `blur`.

- La validation sur `input` se produit **as vous tapez ph137x.
- Validation sur `change` se produit lorsque vous **commit à une value**.
La validation sur `blur` se produit lorsqu 'une entrée **perd le focus**.

Vous pouvez contrôler quand la validation se produit en utilisant le prop `validate-on`.

::tip
Le formulaire est toujours valide à la soumission.
::

::component-example{label="Défaut"}
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
Vous pouvez utiliser le composable `useFormField` pour implémenter cela dans vos propres composants.
::

Événement ### Error

Cet événement est déclenché lorsque le formulaire est envoyé et contient un tableau d'objets `FormError` avec les champs suivants:

- `id`-l'entrée `id`.
- `name`-le `name` du `FormField`
- `message`-le message d'erreur à afficher.

Voici un exemple qui focalise le premier élément d'entrée avec une erreur après la soumission du formulaire:

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

Validation ### HTML5: badge{label="4.5+" class="align-text-top"}

Lorsque vous appelez `form.submit()` par programmation, le composant Formulaire déclenche automatiquement la validation HTML5 native avant la soumission.

::note
Ceci est particulièrement utile lorsque le bouton de soumission est en dehors de l'élément de formulaire, comme dans un pied de page modal.
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### Formulaires de nesting

Utilisez la prop `nested` pour imbriquer plusieurs composants de formulaire et lier leurs fonctions de validation. Dans ce cas, la validation du formulaire parent validera automatiquement tous les autres formulaires qu 'il contient.

Les formulaires imbriqués héritent directement de l'état de leur parent, vous n'avez donc pas besoin de définir un état distinct pour eux. Vous pouvez utiliser la prop `name` pour cibler un attribut imbriqué dans l'état du parent.

Il peut être utilisé pour ajouter dynamiquement des champs en fonction de la saisie de l'utilisateur:

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

Ou pour valider les entrées de liste:

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
Ce composant prend également en charge tous les attributs HTML natifs `<form>`.
::

### Slots

:component-slots

### Emits

:component-emits

### Expose à

Vous pouvez accéder à l'instance du composant typé à l'aide de [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

Cela vous donnera accès à ce qui suit:

| nom| type|
| ---- | ---- |
| `submit()`x{lang="ts-type"}| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers soumission de formulaire avec validation HTML5. </p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"}| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers validation de formulaire. Générera des erreurs à moins que `opts.silent` ne soit défini sur true.</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p> Efface les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, efface toutes les erreurs de formulaire.</p></div>|
| `getErrors(path?: keyof T \| RegExp)`x{lang="ts-type"}| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Récupère les erreurs de formulaire associées à un chemin spécifique. Si aucun chemin n'est fourni, renvoie toutes les erreurs de formulaire. </p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`x{lang="ts-type"}| `void` <br> <div class="text-toned mt-1"><p>Ensemble les erreurs de formulaire pour un chemin donné. Si aucun chemin n'est fourni, remplace toutes les erreurs.</p></div>|
| `errors`x{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Una referencia a la matriz que contiene errores de validación. Use esto para acceder o manipular la información de error.</p></div>|
| `disabled`x{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `dirty`x{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"} `true` si au moins un champ de formulaire a été mis à jour par l'utilisateur.|
| `dirtyFields`x{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Trace les champs qui ont été modifiés par l'utilisateur.|
| `touchedFields`x{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Suit les champs avec lesquels l'utilisateur a interagi.|
| `blurredFields`x{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Trace les champs flous par l'utilisateur.|

## Thème

:component-theme

## Changelog

:component-changelog
