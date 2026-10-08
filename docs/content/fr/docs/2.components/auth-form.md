---
title: Authentique
description: 'Un formulaire personnalisable pour créer des formulaires de login, d'enregistrement ou de réinitialisation de mot de passe.'
category: page
links:
  - label: forme
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

@@ph000@@utilisation

Construit au-dessus du composant [Form](/docs/components/form), le composant `AuthForm` peut être utilisé dans vos pages ou enveloppé dans une [PageCard](/docs/components/page-card).

::component-example
---
nom: 'auth-form-example'
Collapse: vrai
---
::

@@ph010@@champs

Le formulaire se construira lui-même sur la base de la prop `fields` et l'état sera géré en interne.

Utilisez le `fields` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@

Chaque champ doit inclure une propriété `type`, qui détermine le composant d'entrée et tous les accessoires supplémentaires appliqués:`checkbox` les champs utilisent [Checkbox](/docs/components/checkbox#props) les accessoires,`select` les champs utilisent [SelectMenu](/docs/components/select-menu#props) les accessoires, Les champs `otp` utilisent les accessoires [PinInput](/docs/components/pin-input#props), et tous les autres types utilisent les accessoires [Input](/docs/components/input#props).

Vous pouvez également passer n'importe quelle propriété du composant [FormField](/docs/components/form-field#props) à chaque champ.

::component-code
---
Étiquette: true
ignorer:
  @@ph043@@champs
  @@ph044@classe
Extérieur:
  @@ph045@champs
Extérieurs:
  - AuthFormField [réf. nécessaire]
Props:
  champs:
    - nom:'email'
      Type: "Email"
      Étiquette:'Email'
      placeholder: "Entrez votre email"
      Requis: Vrai
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
      réservé:"Entrez votre mot de passe"
      Requis: Vrai
    - name:'pays'
      Type: "sélectionner"
      Étiquette:"Pays"
      placeholder: 'Sélectionner un pays'
      items:
        - label:'États-Unis d'Amérique'
          Valeur: "nous"
        - label:« France »
          Valeur: 'fr'
        - label:'Royaume-Uni'
          Valeur: 'UK'
        - label:« Australie »
          Valeur: "au"
    - nom:'otp'
      Catégorie:"OTP"
      Étiquette: OTP
      Longueur: 6
      réservé:'○'
    - name:« souvenez-vous »
      Catégorie:"checkbox"
      Étiquette: Remember Me
      Description: "Vous serez connecté pendant 30 jours."
  classe: 'max-w-sm'
---
::

@@56@titre

Utilisez la prop `title` pour définir le titre du formulaire.

::component-code
---
Étiquette: true
Ignorer:
  @@ph058@champs
  @@ph059@classe
Extérieur:
  @@ph060@champs
Extérieurs:
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Champs:
    - name:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  classe: 'max-w-md'
---
::

### Description

Utilisez la prop `description` pour définir la description du formulaire.

::component-code
---
Étiquette: true
Ignorer:
  @@ph066@champs
  @@ph067@titre
  @@ph068@classe
Extérieure:
  @@ph069@champs
Extérieurs:
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte".
  champs:
    - name:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  classe: 'max-w-md'
---
::

### Icon

Utilisez la prop `icon` pour définir l'icône du formulaire.

::component-code
---
Étiquette: true
Ignorer:
  @@ph075@champs
  @@ph076@titre
  @@ph077@description
  @@ph078@classe
Extérieur:
  @@ph079@champs
Extérieurs:
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte."
  icon: 'i-lucide-user'
  Champs:
    - nom:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  classe: 'max-w-md'
---
::

### Fournisseurs

Utilisez la prop `providers` pour ajouter des fournisseurs au formulaire.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) comme `variant`,`color`,`to`, etc.

::component-code
---
Étiquette: true
ignorer:
  @@ph092@champs
  @@ph093@titre
  @@ph094@description
  @@ph095@icon
  - fournisseurs
  - headerAlign
  @@ph098@classe
Extérieur:
  - fournisseurs
  @@ph100@champs
Extérieurs:
  @@ph101@@buttonprops []
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte."
  icon: 'i-lucide-user'
  Fournisseurs:
    - label:« Google »
      icon: 'i-simple-icons-google'
      Couleur: "Neutre"
      Étiquette:"subtil"
    - label:« GitHub »
      icon: 'i-simple-icons-github'
      Couleur: "Neutre"
      Étiquette:"subtil"
  Champs:
    - nom:'email'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  classe: 'max-w-md'
---
::

### Séparateur

Utilisez le prop `separator` pour personnaliser le [Separator](/docs/components/separator) entre les fournisseurs et les champs.

::component-code
---
Étiquette: true
ignorer:
  @@ph114@champs
  @@ph115@titre
  @@ph116@description
  @@ph117@icon
  - fournisseurs
  @@classe 119
Extérieure:
  - fournisseurs
  @@ph121@@champs
Extérieurs:
  @@ph122@@buttonprops [réf. nécessaire]
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte."
  icon: 'i-lucide-user'
  Fournisseurs:
    - label:« Google »
      icon: 'i-simple-icons-google'
      Couleur: "Neutre"
      Étiquette:"subtil"
    - label:« GitHub »
      icon: 'i-simple-icons-github'
      Couleur: "Neutre"
      Étiquette:"subtil"
  champs:
    - name:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  Séparateur:"Fournisseurs"
  classe: 'max-w-md'
---
::

Vous pouvez passer n'importe quelle propriété du composant [Separator](/docs/components/separator#props) pour le personnaliser.

::component-code
---
Étiquette: true
Ignorer:
  @@ph132@champs
  @@ph133@titre
  @@ph134@description
  @@P135 @@ icon
  - fournisseurs
  @@ph137@classe
Extérieur:
  - fournisseurs
  @@ph139@@champs
Extérieurs:
  @@ph140@@buttonprops [réf. nécessaire]
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte."
  icon: 'i-lucide-user'
  Fournisseurs:
    - label:« Google »
      icon: 'i-simple-icons-google'
      Couleur: "Neutre"
      Étiquette:"subtil"
    - label:« GitHub »
      icon: 'i-simple-icons-github'
      Couleur: "Neutre"
      Étiquette:"subtil"
  Champs:
    - name:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  Séparateur:
    icon: 'i-lucide-user'
  classe: 'max-w-md'
---
::

@@ph146@soumettre

Utilisez la prop `submit` pour modifier le bouton de soumission du formulaire.

Vous pouvez passer n'importe quelle propriété du composant [Button](/docs/components/button) comme `variant`,`color`,`to`, etc.

::component-code
---
Étiquette: true
ignorer:
  @@ph155@champs
  @@ph156@titre
  - description
  @@ph158@icon
  - fournisseurs
  - submit.label
  - submit.couleur
  - submit.variant
  @@ph163@classe
Extérieure:
  @@ph164@champs
Extérieurs:
  - AuthFormField [réf. nécessaire]
Props:
  Titre: Login
  Description: "Entrez vos informations d'identification pour accéder à votre compte."
  icon: 'i-lucide-user'
  champs:
    - name:'courriel'
      Type: texte
      Étiquette:'Email'
    - name: mot de passe
      Type: "password"
      Étiquette:"Password"
  soumis:
    Étiquette:"Submit"
    Couleur: "Erreur"
    Étiquette:"subtil"
  classe: 'max-w-md'
---
::

## Exemples

### Dans une page

Vous pouvez envelopper le composant `AuthForm` avec le composant [PageCard](/docs/components/page-card) pour l'afficher dans une page `login.vue` par exemple.

::component-example
---
nom: 'auth-form-page-exemple'
Collapse: vrai
---
::

@@ph176@api

@@ph177@props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<form>`.
::

@@ph179@@réglages

Composants slots

### émissions

Composants émetteurs

### Exposé

Vous pouvez accéder à l'instance du composant typé (exposant formRef et state) en utilisant `useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). Par exemple, dans une forme séparée (par exemple, un formulaire "reset"), vous pouvez faire:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Cela vous donne accès aux propriétés (exposées) suivantes:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

@204@thème

Composant-thème

@205@changements

Composant-changelog
