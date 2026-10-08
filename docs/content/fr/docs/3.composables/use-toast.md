---
title: Utilisation
description: 'Un composable pour afficher des notifications de toast dans votre application.'
---

@@ph000@@utilisation

Utilisez le composant `useToast` auto-importé pour afficher les notifications [Toast](/docs/components/toast).

::component-example
---
nom: 'utilisation-exemple'
---
::

- Le composable `useToast` utilise le `useState` de Nuxt pour gérer l'état du toast, assurant ainsi la réactivité de votre application.
- Un maximum de 5 toasts sont affichés à la fois par défaut. Lorsque vous ajoutez un nouveau toast qui dépasserait cette limite, le plus ancien est automatiquement supprimé. Changez-le avec le `toaster.max` prop sur le `App`](/docs/components/app#props) composant.
- Lors de la suppression d'un toast, il y a un délai de 200 ms avant qu 'il ne soit effectivement retiré de l'état, ce qui permet des animations de sortie.

::warning
Assurez-vous d'envelopper votre application avec le composant [`App`](PH0223 @@ qui utilise notre composant [](https://github.com/nuxt/ui/blob/v4/src/runtime/components/Toaster.vue) qui utilise le composant [](https://reka-ui.com/docs/components/toast#provider) Composants de Reka UI.
::

::tip{to="/docs/components/toast"}
Découvrez comment personnaliser l'apparence et le comportement des toasts dans la documentation du composant **Toast**.
::

@@ph034@@api

@@

Le composable `useToast` fournit des méthodes pour gérer les notifications de toast à l'échelle mondiale.

@@ph038@add ()

@@

Ajouter une nouvelle notification de toast.

@@ph041@@paramètres

::field-group

  ::field{name="toast" type="Partial<Toast>" required}
  Un objet partiel `Toast` avec les propriétés suivantes:

    ::collapsible

      ::field-group
        ::field{name="id" type="string | number"}
        Un identifiant unique pour le toast. S'il n'est pas fourni, un identifiant unique est généré. La réutilisation d'un identifiant existant se fond dans ce toast au lieu d'en ajouter un nouveau.
        ::

        ::field{name="open" type="boolean"}
        Si le toast est ouvert. Par défaut à `true`.
        ::

        ::field{name="title" type="string | VNode | (() => VNode)"}
        Le titre figure sur le toast.
        ::

        ::field{name="description" type="string | VNode | (() => VNode)"}
        La description affichée dans le toast.
        ::

        ::field{name="icon" type="string"}
        L'icône affichée dans le toast.
        ::

        ::field{name="avatar" type="AvatarProps"}
        Voir [Avatar](/docs/components/avatar#props).
        ::

        ::field{name="color" type="string"}
        La couleur du toast. Par défaut à `primary`.
        ::

        ::field{name="orientation" type="'horizontal' | 'vertical'"}
        L'orientation entre le contenu et les actions. Par défaut à `vertical`.
        ::

        ::field{name="close" type="boolean | Omit<ButtonProps, LinkPropsKeys>"}
        Personnalisez ou masquez le bouton de fermeture (avec la valeur `false`). Par défaut,`true`.
        ::

        ::field{name="closeIcon" type="string"}
        L'icône affichée dans le bouton Fermer.
        ::

        ::field{name="actions" type="ButtonProps[]"}
        Les actions affichées dans le toast. Voir [Button](/docs/components/button#props).
        ::

        ::field{name="progress" type="boolean | Pick<ProgressProps, 'color' | 'ui'>"}
        Personnaliser ou masquer la barre de progression (avec `false` valeur). Par défaut à `true`.
        ::

        ::field{name="duration" type="number"}
        Durée en millisecondes avant la fermeture automatique du pain grillé. Par défaut à `5000`. Définir sur `0` pour garder le pain grillé ouvert jusqu'à ce qu 'il soit fermé manuellement. Peut également être défini globalement sur le composant `App`](/docs/components/app).
        ::

        ::field{name="onClick" type="(toast: Toast) => void"}
        Une fonction de callback appelée lorsque le toast est cliqué.
        ::

        ::field{name="onUpdateOpen" type="(open: boolean) => void"}
        Une fonction de rappel appelée lorsque l'état ouvert du toast change. Utile pour effectuer une action lorsque le toast se ferme (expiré ou rejeté).
        ::

        ::field{name="type" type="'foreground' | 'background'"}
        Utilisez `background` pour les toasts qui ne sont pas le résultat d'une action directe de l'utilisateur.
        ::

        ::field{name="as" type="any"}
        L'élément ou le composant que le toast rend comme. Defaults à `li`.
        ::
      ::
    ::
  ::
::

**Retourne:** L'objet complet `Toast` qui a été ajouté.

```vue
<script setup lang="ts">
const toast = useToast()

function showToast() {
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'success'
  })
}
</script>
```

### update ()

@@

Mise à jour d'une notification existante.

@@ph086@@Paramètres

::field-group
  ::field{name="id" type="string | number" required}
  L'identifiant unique du toast à mettre à jour.
  ::

  ::field{name="toast" type="Omit<Partial<Toast>, 'id'>" required}
  Un objet `Toast` partiel avec les propriétés à mettre à jour. Le `id` ne peut pas être modifié, le toast est rouvert et le `duration` est réinitialisé à moins que vous ne le passiez à nouveau.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function updateToast(id: string | number) {
  toast.update(id, {
    title: 'Updated Toast',
    description: 'This toast has been updated.'
  })
}
</script>
```

@@ph102@remove ()

@@

Supprimer une notification de toast.

#### Paramètres

::field-group
  ::field{name="id" type="string | number" required}
  L'identifiant unique du toast à enlever.
  ::
::

```vue
<script setup lang="ts">
const toast = useToast()

function removeToast(id: string | number) {
  toast.remove(id)
}
</script>
```

@@clear@clear ()

@@

Supprime toutes les notifications de toast.

```vue
<script setup lang="ts">
const toast = useToast()

function clearAllToasts() {
  toast.clear()
}
</script>
```

@127@toasts

@@

Un tableau réactif contenant toutes les notifications de toast actuelles.

```vue
<script setup lang="ts">
const { toasts } = useToast()
</script>

<template>
  <div>
    <pre>{{ toasts }}</pre>
  </div>
</template>
```
