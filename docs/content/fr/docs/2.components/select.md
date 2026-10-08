---
description: Un élément select pour choisir parmi une liste d'options.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: Sélectionnez
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

@@ph000@@utilisation

Utilisez la directive `v-model` pour contrôler la valeur de Select ou la prop `default-value` pour définir la valeur initiale lorsque vous n'avez pas besoin de contrôler son état.

::component-code
---
Étiquette: true
Caché:
  @@ph003@classe
Ignorer:
  - modèleValeur
  @@ph005@articles
  @@ph006@classe
Extérieure:
  @@ph007@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    - Backlog
    @@ph010@tout
    - En cours
    @@ph012@@fait
  Catégorie: W-48
---
::

@@ph013@référencement

Utilisez la prop `items` comme un tableau de chaînes, de nombres ou de booléens:

::component-code
---
Étiquette: true
Ignorer:
  - modèleValeur
  @@ph016@articles
  @@classe 17
Extérieure:
  @@ph018@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  items:
    @@20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@21@tout
    - En cours
    @@ph023@fait
  Catégorie: W-48
---
::

Vous pouvez également passer un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
- `icon?: string`{lang="ts-type"}](#with-icons-in-items)
@@
@@
@@
@@
@@

::component-code
---
ignorer:
  - modèleValeur
  @@ph072@articles
  @@ph073@classe
Extérieure:
  @@ph074@articles
  - modèleValeur
Extérieurs:
  @@776@sélectionnées []
Props:
  Valeur: 'Backlog'
  items:
    - label:'Backlog'
      Valeur: Backlog
    - label:« Tout »
      Valeur: 'tout'
    - label:« En cours »
      valeur: 'in_progress'
    - label:« Réalisé »
      Valeur: "Done"
  Catégorie: W-48
---
::

::caution
Lorsque vous utilisez des objets, vous devez faire référence à la propriété `value` de l'objet dans la directive `v-model` ou dans la propriété `default-value`.
::

Vous pouvez également passer un tableau de tableaux à la prop `items` pour afficher des groupes d'éléments séparés.

::component-code
---
Étiquette: true
ignorer:
  - modèleValeur
  @@ph086@articles
  @@ph087@classe
Extérieur:
  @@888@articles
  - modèleValeur
Props:
  Modèle:"Apple"
  items:
    - -Développeur
      - Banane
      @@ph092@blueberry
      @@P093@@Référencement
      @@Pineapple 94@Pineapple
    - -Aubergine
      - Broccoli
      - étoile
      @098@courgette
      @099@@Lénine
  Catégorie: W-48
---
::

### Clé de valeur

Vous pouvez modifier la propriété utilisée pour définir la valeur en utilisant la propriété `value-key`.

::component-code
---
Ignorer:
  - modèle
  - valueKey
  @@ph105@articles
  @@ph106@classe
Extérieur:
  @@ph107@articles
  - modelValeur
Extérieurs:
  @109@@sélectionné []
Props:
  Valeur: 'Backlog'
  Valeur: 'id'
  items:
    - label:'Backlog'
      Définition: Backlog
    - label:« Tout »
      ID: « tout »
    - label:« En cours »
      id: 'in_progress'
    - label:« Réalisé »
      ID: "fait"
  Catégorie: W-48
---
::

@@ph114@@multiple

Utilisez la prop `multiple` pour permettre des sélections multiples, les éléments sélectionnés seront séparés par une virgule dans le déclencheur.

::component-code
---
Étiquette: true
Ignorer:
  - modelValeur
  @@ph117@articles
  @@ph118@multiple
  @@classe 119
Extérieure:
  @120@120@120
  - modèleValeur
Props:
  Modèle:
    @@2012@Backlog
    @@ph123@tout
  Multiple: Vrai
  items:
    @124@Backlog
    @@ph125@tout
    - En cours
    @@ph127@fait
  Catégorie: W-48
---
::

::caution
Assurez-vous de passer un tableau à la prop `default-value` ou à la directive `v-model`.
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé.

::component-code
---
Étiquette: true
Ignorer:
  @@ph132@articles
  @@ph133@classe
Extérieure:
  @@ph134@articles
Props:
  placeholder: "Sélectionner le statut"
  items:
    - Backlog
    @@ph136@tout
    - En cours
    @@ph138@fait
  Catégorie: W-48
---
::

@@ph139@contenu

Utilisez la prop `content` pour contrôler la façon dont le contenu Select est rendu, comme son `align` ou `side` par exemple.

::component-code
---
Étiquette: true
Ignorer:
  @@ph143@articles
  - modèleValeur
  @@ph145@classe
Extérieur:
  @@ph146@articles
  - modèleValeur
items:
  content.align:
    @@ph148@départ
    -  réseau
    @@ph150@fin
  content.side:
    @@ph151@@droite
    @@ph152@left
    @@ph153@top
    @@ph154@réduit
Props:
  Valeur: 'Backlog'
  contenu:
    Alignement: Centre
    Étiquette: bottom
    Décalage: 8
  items:
    @@P155@@référencement
    @@ph156@tout
    - En cours
    @@ph158@fait
  Catégorie: W-48
---
::

::note
Ces options s'appliquent uniquement lorsque `content.position` est `popper`(par défaut).
::

### Position: badge{label="4.7+" class="align-text-top"}

Utilisez la prop `content.position` pour contrôler le positionnement du contenu Sélectionner par rapport au déclencheur. Par défaut à `popper`, qui positionne le contenu comme les autres popovers. Définissez-le sur `item-aligned` pour aligner le contenu avec l'élément sélectionné (similaire à un menu natif de macOS).

::component-code
---
Étiquette: true
ignorer:
  @@ph166@éléments
  - modèleValeur
  @@ph168@classe
Extérieure:
  @@ph169@articles
  - modèleValeur
items:
  content.position:
    -  item-aligné
    @@ph172@popper
Props:
  Modèle:'Tout'
  contenu:
    Étiquette: item-aligned
  items:
    @173@Backlog
    @@ph174@tout
    - En cours
    @@ph176@fait
  Catégorie: W-48
---
::

### Arrivée

Utilisez la prop `arrow` pour afficher une flèche sur la sélection.

::component-code
---
Étiquette: true
ignorer:
  @@ph179@articles
  - modèleValeur
  @@ph181@classe
  @@ph182@@flèche
Extérieur:
  @@ph183@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Arrow: vrai
  items:
    @185@Backlog
    @@ph186@tout
    - En cours
    @@ph188@fait
  Catégorie: W-48
---
::

### couleur

Utilisez la prop `color` pour changer la couleur de la bague lorsque le sélecteur est mis au point.

::component-code
---
Étiquette: true
Ignorer:
  @@ph191@articles
  - modelValeur
  @@ph193@classe
Extérieur:
  @@ph194@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Highlight: vrai
  items:
    @196@Backlog
    @@ph197@tout
    - En cours
    @@ph199@fait
  Catégorie: W-48
---
::

::note
Le `highlight` prop est utilisé ici pour afficher l'état de mise au point. Il est utilisé en interne lorsqu 'une erreur de validation se produit.
::

@@201@@Variant

Utilisez la prop `variant` pour modifier la variante du Select.

::component-code
---
Étiquette: true
Ignorer:
  @@ph203@articles
  - modèleValeur
  @@ph205@classe
Extérieure:
  @@ph206@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  Couleur: Neutre
  Variante: subtile
  Étiquette: false
  items:
    @@208@Backlog
    @209@tout
    - En cours
    @@ph211@fait
  Catégorie: W-48
---
::

@@ph212@Size

Utilisez la prop `size` pour modifier la taille du Select.

::component-code
---
Étiquette: true
Ignorer:
  @@ph214@articles
  - modelValeur
  @@ph216@classe
Extérieur:
  @@ph217@articles
  - modelValeur
Props:
  Valeur: 'Backlog'
  Taille: XL
  items:
    @@219@Backlog
    @220@tout
    @@221@En cours
    @@222@réponse
  Catégorie: W-48
---
::

@223@Icon

Utilisez le prop `icon` pour afficher un [Icon](/docs/components/icon) à l'intérieur de la sélection.

::component-code
---
Étiquette: true
Ignorer:
  @@229@articles
  - modèleValeur
  @@ph231@@classe
Extérieure:
  @@232@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  icon: 'i-lucide-search'
  Taille: MD
  items:
    @@234@Backlog
    @@P235@tout
    - En cours
    @@ph237@fait
  Catégorie: W-48
---
::

### Trailing Icône

Utilisez le prop `trailing-icon` pour personnaliser le [Icon](/docs/components/icon).

::component-code
---
Étiquette: true
Ignorer:
  @@245@articles
  - modèleValeur
  @@ph247@classe
Extérieur:
  @@ph248@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  trailingIcône:'i-lucide-arrow-down'
  Taille: MD
  items:
    @@250@Backlog
    @@ph251@@tout
    - En cours
    @@ph253@réalisé
  Catégorie: W-48
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.chevronDown`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.chevronDown`.
:::
::

### Icône sélectionnée

Utilisez la prop `selected-icon` pour personnaliser l'icône lorsqu 'un élément est sélectionné. Par défaut,`i-lucide-check`.

::component-code
---
Étiquette: true
Ignorer:
  @@ph261@articles
  - modèleValeur
  @@ph263@classe
Extérieur:
  @@ph264@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  sélectionnéIcône:'i-lucide-flame'
  Étiquette: MD
  items:
    @@266@Backlog
    @267@tout
    - En cours
    @@ph269@fait
  Catégorie: W-48
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.check`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous `ui.icons.check` touche.
:::
::

@@274@avatars

Utilisez la prop `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur du Sélectionner.

::component-code
---
Étiquette: true
ignorer:
  @@ph280@articles
  - modèleValeur
  @@ph282@classe
  - avatar.chargement
Extérieur:
  @@ph284@articles
  - modèleValeur
Props:
  Valeur: 'Nuxt'
  Avatar:
    src: 'https://github.com/nuxt.png'
    Étiquette: Lazy
  items:
    @@ph286@nuxt
    - NuxtHub
    - NuxtLabs
    - Nuxt Modules de sécurité
    - Nuxt Communauté
  Catégorie: W-48
---
::

@@291@chargement

Utilisez la prop `loading` pour afficher une icône de chargement sur le Select.

::component-code
---
Étiquette: true
Ignorer:
  @@ph293@articles
  - modèleValeur
  @@ph295@classe
Extérieure:
  @@ph296@articles
  - modèleValeur
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  Traînée: Faux
  items:
    @@298@Backlog
    @299@tout
    - En cours
    @@ph301@fait
  Catégorie: W-48
---
::

### Icône de chargement

Utilisez la prop `loading-icon` pour personnaliser l'icône de chargement. Par défaut,`i-lucide-loader-circle`.

::component-code
---
Étiquette: true
ignorer:
  @@ph305@articles
  - modèleValeur
  @classe 307
Extérieure:
  @@ph308@articles
  - modèle
Props:
  Valeur: 'Backlog'
  Chargement: vrai
  loadingIcon: 'i-lucide-loader'
  items:
    @@P310@Backlog
    @@ph311@tout
    - En cours
    @@ph313@fait
  Catégorie: W-48
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `app.config.ts` sous la touche `ui.icons.loading`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser cette icône globalement dans votre `vite.config.ts` sous la touche `ui.icons.loading`.
:::
::

### Disabled

Utilisez la prop `disabled` pour désactiver la fonction Select.

::component-code
---
Étiquette: true
ignorer:
  @@ph320@articles
  @@ph321@réservoir
  @@ph322@classe
Extérieure:
  @@ph323@articles
Props:
  handicapés: vrai
  placeholder: "Sélectionner le statut"
  items:
    @@224@Backlog
    @@P325@tout
    - En cours
    @@ph327@fait
  Catégorie: W-48
---
::

@@ph328@exemples

### Avec type d'éléments

Vous pouvez utiliser la propriété `type` avec `separator` pour afficher un séparateur entre les éléments ou `label` pour afficher une étiquette.

::component-code
---
Collapse: vrai
ignorer:
  - modèleValeur
  @@ph334@articles
  @@ph335@classe
Extérieur:
  @@ph336@articles
  - modèleValeur
Extérieurs:
  @@338@@Sélectionner []
Props:
  Modèle:"Apple"
  items:
    - type:'étiquette'
      Étiquette: fruits
    @P340 @ Apple
    - Banane
    @ph342@blueberry
    @@343@@référencement
    @@Pineapple 344@@Pineapple
    - type:'séparateur'
    - type:'étiquette'
      Étiquette:"légumes"
    - Aubergine
    @348@broccoli
    - Carotte
    @@P350@@courgette
    @@ph351@@leek
  Catégorie: W-48
---
::

### Avec icône dans les éléments

Vous pouvez utiliser la propriété `icon` pour afficher une [Icon](/docs/components/icon) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nommé:'select-items-icon-example'
---
::

::note
Dans cet exemple, l'icône est calculée à partir de la propriété `value` de l'élément sélectionné.
::

::tip
Vous pouvez également utiliser l'emplacement `#leading` pour afficher l'icône sélectionnée.
::

### Avec avatar dans les éléments

Vous pouvez utiliser la propriété `avatar` pour afficher un [Avatar](/docs/components/avatar) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nommé:'select-items-avatar-example'
---
::

::note
Dans cet exemple, l'avatar est calculé à partir de la propriété `value` de l'élément sélectionné.
::

::tip
Vous pouvez également utiliser l'emplacement `#leading` pour afficher l'avatar sélectionné.
::

### Avec puce dans des articles

Vous pouvez utiliser la propriété `chip` pour afficher une [Chip](/docs/components/chip) à l'intérieur des éléments.

::component-example
---
Collapse: vrai
nom: 'select-items-chip-example'
---
::

::note
Dans cet exemple, le slot `#leading` est utilisé pour afficher la puce sélectionnée.
::

### Control état ouvert

Vous pouvez contrôler l'état ouvert en utilisant la prop `default-open` ou la directive `v-model:open`.

::component-example
---
nom: 'select-open-example'
---
::

::note
Dans cet exemple, en utilisant [`defineShortcuts`](/docs/composables/define-shortcuts), vous pouvez basculer le Sélectionner en appuyant sur: kbd{value="O"}.
::

### Avec icône rotative

Voici un exemple avec une icône tournante qui indique l'état ouvert du Select.

::component-example
---
nom: 'select-icon-example'
---
::

### Avec les éléments récupérés

Vous pouvez récupérer des éléments à partir d'une API et les utiliser dans le Select.

::component-example
---
nom: 'select-fetch-exemple'
Collapse: vrai
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false` pour récupérer les données uniquement lorsque le menu s'ouvre, évitant ainsi les appels d'API inutiles lors du chargement de la page.
::

### Avec défilement infini: badge{label="4.4+" class="align-text-top"}

Vous pouvez utiliser le [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/) pour charger plus de données au fur et à mesure que l'utilisateur fait défiler.

::component-example
---
Étiquette: true
Collapse: vrai
Highlights:
  @@395@39
  @@396@51
dépassement: true
nom: 'select-infinite-scroll-example'
---
::

::note
Cet exemple utilise `useLazyFetch` avec `immediate: false`, de sorte que les données ne sont chargées que lorsque l'utilisateur fait défiler.
::

### Avec largeur de contenu complète

Vous pouvez étendre le contenu à toute la largeur de ses éléments en ajoutant la classe `min-w-fit` sur l'emplacement `ui.content`.

::component-example
---
nom: 'select-content-width-example'
Collapse: vrai
---
::

::tip
Vous pouvez également modifier la largeur du contenu globalement dans votre `app.config.ts`:

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

@@ph414@@api

@@ph415@@Props

Composants-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
Ce composant prend également en charge tous les attributs HTML natifs `<button>`.
::

### Slots

Composants slots

@@ph418@@émissions

Composants émetteurs

@@ph419@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|
| @@|@@|

@@ph428@thème

Composant-thème

@29@changements

Composant-changelog
