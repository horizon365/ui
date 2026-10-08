---
title: chatpromptsoumission
description: 'Un bouton pour soumettre des invites de chat avec gestion automatique du statut.'
category: chat
links:
  - label: bouton
    to: /docs/components/button
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/ChatPromptSubmit.vue
---

@@ph000@@utilisation

Le composant ChatPromptSubmit est utilisé à l'intérieur du composant [ChatPrompt](/docs/components/chat-prompt) pour soumettre l'invite. Il gère automatiquement les différentes valeurs `status` pour contrôler le chat.

Il étend le [Button](/docs/components/button) composant, de sorte que vous pouvez passer n'importe quelle propriété telle que `color`,`variant`,`size`, etc.

::code-preview

#Défaut
: u-chat-prompt-soumettre

#code
```vue
<template>
  <UChatPrompt>
    <UChatPromptSubmit />
  </UChatPrompt>
</template>
```
::

::note
Vous pouvez également l'utiliser à l'intérieur de l'emplacement `footer` du composant [`ChatPrompt`](/docs/components/chat-prompt).
::

@@26@prêt

Lorsque son statut est `ready`{lang="ts-type"}, utilisez les accessoires `color`,`variant` et `icon` pour personnaliser le bouton. Par défaut:

@@
@@
@@

::component-code
---
Étiquette: true
items:
  Couleur:
    @@ph041@primaire
    - secondaire
    - réussite
    @@44@avertissement
    @@F045@erreur
    @@ph046@neutre
  Variante:
    @@ph047@solide
    @@ph048@outline
    @@pH049@@doux
    @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@ph051@fantôme
Props:
  Couleur: Primaire
  Étiquette:"solide"
  Icône: i-lucide-arrow-up
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.arrowUp`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.arrowUp`.
:::
::

@@pH056@@Réponse

Lorsque son statut est `submitted`{lang="ts-type"}, utilisez les accessoires `submitted-color`,`submitted-variant` et `submitted-icon` pour personnaliser le bouton. Par défaut:

@@
@@
@@

::note
L'événement `stop` est émis lorsque l'utilisateur clique sur le bouton.
::

::component-code
---
Étiquette: true
ignorer:
  @@ph072@statut
items:
  Soumissionnaire:
    @@ph073@primaire
    @@ph074@secondaire
    @@75@réussite
    @@776@référencement
    @@77@erreur
    @@ph078@neutre
  SoumissionVariante:
    @@ph079@solide
    @@ph080@outline
    @@ph081@doudou
    @082@suédois
    @@ph083@fantôme
Props:
  Couleur: "Neutre"
  Étiquette:"subtil"
  Étiquette: i-lucide-square
  Statut: "Soumis"
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.stop`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.stop`.
:::
::

@@888@Streaming

Lorsque son statut est `streaming`{lang="ts-type"}, utilisez les accessoires `streaming-color`,`streaming-variant` et `streaming-icon` pour personnaliser le bouton. Par défaut:

@@
@@
@@

::note
L'événement `stop` est émis lorsque l'utilisateur clique sur le bouton.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph104@statut
items:
  StreamingCouleur:
    - primaire
    @@ph106@secondaire
    @@707@réussite
    @@ph108@avertissement
    @@ph109@erreur
    @@ph110@neutre
  StreamingVariété:
    @@ph111@solide
    @@ph112@outline
    @@ph113@doux
    @@ph114@subtile
    @@ph115@fantôme
Props:
  Couleur: "Neutre"
  Étiquette:'subtil'
  Étiquette: i-lucide-square
  Étiquette: streaming
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.stop`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.stop`.
:::
::

@@ph120@erreur

Lorsque son statut est `error`{lang="ts-type"}, utilisez les accessoires `error-color`,`error-variant` et `error-icon` pour personnaliser le bouton.

@@
@@
@@

::note
L'événement `reload` est émis lorsque l'utilisateur clique sur le bouton.
::

::component-code
---
Étiquette: true
Ignorer:
  @@ph136@statut
items:
  Erreur couleur:
    @@ph137@primaire
    - secondaire
    - réussite
    @@ph140@avertissement
    @@ph141@@erreur
    @@ph142@neutre
  Variante d'erreur:
    - solide
    - outline
    @@ph145@@doux
    @@ph146@subtile
    @ph147@fantôme
Props:
  erreur: 'erreur'
  Étiquette:"soft"
  errorIcon: 'i-lucide-rotate-ccw'
  État:"Erreur"
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.reload`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.reload`.
:::
::

@@ph152@@Exemples

::tip{to="/docs/components/chat"}
Consultez la page d'aperçu **Chat** pour connaître les instructions d'installation, la configuration du serveur et les exemples d'utilisation.
::

@@ph155 @@ référence

@@ph156@@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

@@ph158@@réglages

Composants slots

### Emits

Composants émetteurs

@@ph160@thème

Composant-thème

@161@changements

Composant-changelog
