---
title: Formées Field
description: Un wrapper pour les éléments de formulaire qui fournit la validation et la gestion des erreurs.
category: form
keywords:
  - field wrapper
  - form label
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FormField.vue
---

@@ph000@utilisation

Utilisé dans un [Form](/docs/components/form), il assure la validation et la gestion des erreurs.

@@ph005@étiquette

Utilisez la prop `label` pour définir l'étiquette du contrôle de formulaire.

::component-code
---
Étiquette: true
Props:
  Étiquette: Email
Slots:
  Défaut:|

    @@@ 007 @
---

par: u-input {placeholder="Enter your email"}
::

::note
L'attribut `for` et le contrôle de formulaire sont associés à un `id` unique s'ils ne sont pas fournis.
::

Lorsque vous utilisez le prop `required`, un astérisque est ajouté à côté de l'étiquette.

::component-code
---
Étiquette: true
Ignorer:
  @@ph012@étiquette
Props:
  Étiquette: Email
  Requis: Vrai
Slots:
  Défaut:|

    @@
---

par: u-input {placeholder="Enter your email"}
::

### Description

Utilisez le prop `description` pour fournir des informations supplémentaires sous l'étiquette.

::component-code
---
Étiquette: true
ignorer:
  @@ph017@label
Props:
  Étiquette: Email
  Description: Nous ne partagerons jamais votre adresse e-mail avec quiconque.
Slots:
  Défaut:|

    @@@@ 018 @
---

par: u-input {placeholder="Enter your email" class="w-full"}
::

@@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Utilisez la prop `hint` pour afficher un message d'allusion à côté de l'étiquette.

::component-code
---
Étiquette: true
Ignorer:
  @@22@label
Props:
  Étiquette: Email
  Indice: optionnel
Slots:
  Default:|

    @@@ 23 @
---

: u-input {placeholder="Enter your email"}
::

@@25@Aidez-moi

Utilisez la prop `help` pour afficher un message d'aide sous le contrôle de formulaire. Lorsqu 'elle est utilisée avec la prop `error`, la prop `error` a priorité.

::component-code
---
Étiquette: true
ignorer:
  @29@label
Props:
  Étiquette: Email
  Aide: Veuillez entrer une adresse email valide.
Slots:
  Default:|

    @@@ 030 @
---

par: u-input {placeholder="Enter your email" class="w-full"}
::

@@ph032@erreur

Utilisez la prop `error` pour afficher un message d'erreur sous le contrôle de formulaire. Lorsqu 'elle est utilisée avec la prop `help`, la prop `error` a priorité.

Lorsqu 'il est utilisé à l'intérieur d'un [Form](/docs/components/form), ceci est automatiquement défini lorsqu' une erreur de validation se produit.

::component-code
---
Étiquette: true
Ignorer:
  @@ph040@label
Props:
  Étiquette: Email
  error: Veuillez entrer une adresse e-mail valide.
Slots:
  Défaut:|

    @@@ 041 @
---

par: u-input {placeholder="Enter your email" class="w-full"}
::

::tip{to="/docs/getting-started/theme/design-system#color-system"}
Cela définit le `color` à `error` sur le contrôle de formulaire. Vous pouvez le modifier globalement dans votre `app.config.ts`.
::

### Pattern d'erreur

Ceci est particulièrement pertinent pour les composants avec des valeurs de tableau telles que [InputTags](/docs/components/input-tags), où les erreurs incluent des indices de tableau dans leur nom (par exemple,`tags.0`).

::tip{to="/docs/components/form#error-reporting"}
Voir un exemple d'utilisation de `error-pattern` dans un formulaire.
::

@@500@Size

Utilisez la prop `size` pour modifier la taille du FormField, le `size` est proxié au contrôle de formulaire.

::component-code
---
Étiquette: true
ignorer:
  @@ph057@label
  @@ph058@description
  @@59@heure
  @@pH060@aide
Props:
  Étiquette: Email
  Description: Nous ne partagerons jamais votre adresse e-mail avec quiconque.
  Indice: optionnel
  Aide: Veuillez entrer une adresse email valide.
  Taille: XL
Slots:
  Défaut:|

    @@@ 061 @
---

: u-input {placeholder="Enter your email" class="w-full"}
::

### Orientation: badge{label="4.3+" class="align-text-top"}

Utilisez la prop `orientation` pour modifier la disposition du FormField. Defaults à `vertical`.

::component-code
---
Étiquette: true
ignorer:
  @@ph067@étiquette
  @@ph068@classe
Props:
  Orientation: horizontale
  Étiquette: Email
  Aide: Veuillez entrer une adresse email valide.
  Catégorie: W-72
Slots:
  Default:|

    @@@ 069 @
---

: u-input {placeholder="Enter your email" class="w-full"}
::

@@ph071@api

@@ph072@@props

Composants-props

@@773@@réseau

Composants slots

@@ph074@thème

Composant-thème

@@changement@changement@changement.com

Composant-changelog
