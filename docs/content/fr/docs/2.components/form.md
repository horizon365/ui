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

@@ph000@utilisation

Utilisez le composant Formulaire pour valider les données du formulaire en utilisant n'importe quelle bibliothèque de validation prenant en charge le schéma standard ](https://github.com/standard-schema/standard-schema), telle que [Valibot](),[Zod](),[Regle](https://github.com/victorgarciaesgi/regle),[Yup](),[Joi](https://github.com/hapijs/joi) ou [Superstruct](https://github.com/ianstormtaylor/superstruct) ou votre logique de validation.

Il fonctionne avec le composant [FormField](/docs/components/form-field) pour afficher automatiquement les messages d'erreur autour des éléments de formulaire.

### Validation du schéma

Cela nécessite deux props:

- `state`-un objet réactif qui détient l'état de la forme.
- `schema`-n'importe quel schéma [standard ](https://github.com/standard-schema/standard-schema) ou [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**Aucune bibliothèque de validation n'est incluse ** par défaut, assurez-vous que **installez celle dont vous avez besoin **.
::

::tabs{class="gap-0"}
  ::component-example{label="Valibot était"}
  ---
  nom: 'form-exemple-valibot'
  Props:
    Catégorie: W-60
  ---
  ::

  ::component-example{label="Le Zod"}
  ---
  nom: form-exemple-zod
  Props:
    Catégorie: W-60
  ---
  ::

  ::component-example{label="règle"}
  ---
  nom: 'form-exemple-règle'
  Props:
    Catégorie: W-60
  ---
  ::

  ::component-example{label="Yup"}
  ---
  nom: 'form-exemple-yup'
  Props:
    Catégorie: W-60
  ---
  ::

  ::component-example{label="joie"}
  ---
  nom: 'form-exemple-joi'
  Props:
    Catégorie: W-60
  ---
  ::

  ::component-example{label="Superstructure"}
  ---
  nom: 'form-exemple-superstructure'
  Props:
    Catégorie: W-60
  ---
  ::
::

### Validation personnalisée

Utilisez la prop `validate` pour appliquer votre propre logique de validation.

La fonction de validation doit retourner une liste d'erreurs avec les attributs suivants:

- `message`-le message d'erreur à afficher.
- `name`-le `name` du `FormField` à qui envoyer l'erreur.

::tip
Il peut être utilisé aux côtés du prop `schema` pour gérer des cas d'utilisation complexes.
::

::component-example
---
nom: 'form-exemple-basic'
Props:
  Catégorie: W-60
---
::

### Rapport d'erreur

Les erreurs sont appariées au [FormField](/docs/components/form-field) en utilisant sa `name` prop.

Un schéma tel que `{ user: z.object({ email: z.string() }) }`{lang="ts"} sera appliqué à `<FormField name="user.email">`{lang="vue"}.

::warning
Les erreurs sur les éléments de tableau incluent l'index dans leur nom.(par exemple `tags.0`,`tags.1`) et ne correspondra pas à `<FormField name="tags">`{lang="vue"} par `name` seul. Utilisez le prop `error-pattern` avec une expression régulière comme `/^tags\..+/`{lang="ts"} pour les capturer. Ceci est particulièrement utile pour les composants comme [InputTags ](/docs/components/input-tags)
::

::component-example
---
nom: 'form-exemple-error-pattern'
Props:
  Catégorie: W-60
---
::

### Input événements

Le composant Formulaire déclenche automatiquement la validation lorsqu 'une entrée émet un événement `input`,`change` ou `blur`.

- La validation sur `input` se produit **lorsque vous tapez **.
- La validation sur `change` se produit lorsque vous **commit à une valeur **.
- La validation sur `blur` se produit lorsqu 'une entrée **perd le focus**.

Vous pouvez contrôler quand la validation se produit en utilisant le prop `validate-on`.

::tip
Le formulaire est toujours valide à la soumission.
::

::component-example{label="Défaut"}
---
Source: faux
nom: 'form-exemple-éléments'
options:
  - name:'validate-on'
    Étiquette:'validate-on'
    items:
    @@ph109 @@'input '
    @@P110 @@'changement '
    @111 @@« bleu »
    Default:
    @@ph112 @@'input '
    @@@ph113 @@'changement '
    @@ph114 @@'blur '
    Multiple: Vrai
---
::

::tip
Vous pouvez utiliser le `useFormField` composable pour implémenter cela dans vos propres composants.
::

### Erreur d'événement

Vous pouvez écouter l'événement `@error` pour gérer les erreurs. Cet événement est déclenché lorsque le formulaire est envoyé et contient un tableau d'objets `FormError` avec les champs suivants:

- `id`-l'entrée est `id`.
- `name`-le `name` du `FormField`
- `message`-le message d'erreur à afficher.

Voici un exemple qui focalise le premier élément d'entrée avec une erreur après la soumission du formulaire:

::component-example
---
nom: 'form-exemple-on-error'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

### validation HTML5: badge{label="4.5+" class="align-text-top"}

Lorsque vous appelez `form.submit()` par programmation, le composant Formulaire déclenche automatiquement la validation HTML5 native avant la soumission.

::note
Ceci est particulièrement utile lorsque le bouton de soumission est en dehors de l'élément de formulaire, comme dans un pied de page modal.
::

::component-example
---
name: 'form-example-html5-validation'
Props:
  Catégorie: W-60
---
::

### Formulaires de nesting

Utilisez la prop `nested` pour imbriquer plusieurs composants de formulaire et lier leurs fonctions de validation. Dans ce cas, la validation du formulaire parent valide automatiquement tous les autres formulaires qu 'il contient.

Les formulaires imbriqués héritent directement de l'état de leur parent, vous n'avez donc pas besoin de définir un état distinct pour eux. Vous pouvez utiliser la prop `name` pour cibler un attribut imbriqué dans l'état du parent.

Il peut être utilisé pour ajouter dynamiquement des champs en fonction de l'entrée de l'utilisateur:

::component-example
---
Collapse: vrai
nom: 'form-exemple-nested'
---
::

Ou pour valider les entrées de liste:

::component-example
---
Collapse: vrai
nom: 'form-exemple-nested-list'
---
::

@@ph134@api

@@ph135@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<form>`.
::

@@ph137@@réseaux sociaux

Composants slots

@@ph138@@émissions

Composants émetteurs

@@ph139@@exposé

Vous pouvez accéder à l'instance du composant typé en utilisant `useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

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
| @154 @@ 161 @|`Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Déclencheurs de soumission de formulaire avec validation HTML5.</p></div>|
| @@|`Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Déclencheurs de validation de formulaire. Soulevera toutes les erreurs à moins que `opts.silent` ne soit réglé sur vrai.</p></div>|
| @@|`void`<br><div class="text-toned mt-1"><p>Efface les erreurs de formulaire associées à un chemin spécifique.Si aucun chemin n'est fourni, efface toutes les erreurs de formulaire.</p></div>|
| @@|`FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Récupère les erreurs de formulaire associées à un chemin spécifique.|
| @@|`void`<br><div class="text-toned mt-1"><p>Définit les erreurs de formulaire pour un chemin donné. Si aucun chemin n'est fourni, remplace toutes les erreurs.</p></div>|
| @@|`Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1"><p>Une référence au tableau contenant des erreurs de validation. Utilisez ceci pour accéder ou manipuler les informations d'erreur.</p></div>|
| @@ph207 @|@@|
| @@|`Ref<boolean>`{lang="ts-type"}`true` si au moins un champ du formulaire a été mis à jour par l'utilisateur.|
| @@|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Trace les champs qui ont été modifiés par l'utilisateur.|
| @@|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Suit les champs avec lesquels l'utilisateur a interagi.|
| @@|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} Trace les champs flous par l'utilisateur.|

@228@thème

Composant-thème

@@229@changements

Composant-changelog
