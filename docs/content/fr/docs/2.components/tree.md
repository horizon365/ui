---
description: Un composant de vue en arborescence pour afficher et interagir avec les structures de données hiérarchiques.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: Árbol
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

@@ph000@utilisation

Utilisez le composant Arbre pour afficher une structure hiérarchique des éléments.

::component-code
---
Collapse: vrai
Caché:
  @@ph001@classe
ignorer:
  @@ph002@articles
Extérieur:
  @@ph003@articles
Extérieurs:
  @@004@@Téléchargement []
Props:
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'utilisateur. s'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Carte. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'application. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

@@ph014@référencement

Utilisez le `items` prop comme un tableau d'objets avec les propriétés suivantes:

@@
@@
@@
@@
@@
@@
@@
@@
@@
@@
@@

::note
Un identifiant unique est requis pour chaque élément. Le composant utilisera le `label` prop comme identifiant si aucun `get-key` n'est fourni. Idéalement, vous devriez fournir un `get-key` prop de fonction pour retourner un identifiant unique. Alternativement, vous pouvez utiliser le `labelKey` prop pour spécifier quelle propriété utiliser comme identifiant unique.
::

::component-code
---
Collapse: vrai
Caché:
  @@classe 500
Ignorer:
  @@500@articles
Extérieur:
  @@505@articles
Extérieurs:
  @@556@@Téléchargement []
Props:
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'utilisateur. s'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Carte. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'application. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

@@ph066@multiple

Utilisez la prop `multiple` pour permettre la sélection de plusieurs éléments.

::component-code
---
Collapse: vrai
Caché:
  @@ph068@classe
Ignorer:
  @@ph069@articles
Extérieur:
  @@ph070@articles
Extérieurs:
  @@771@@Téléchargement []
Props:
  Multiple: vrai
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'utilisateur.es'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'application. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

### Nested: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `nested` pour contrôler si l'arbre est rendu avec une structure imbriquée ou sous forme de liste plate.

::component-code
---
Collapse: vrai
Caché:
  @@ph085@classe
ignorer:
  @@ph086@articles
Extérieur:
  @@ph087@articles
Extérieurs:
  @@888@888@888 [réf. nécessaire]
Props:
  Étiquette: false
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'utilisateur. s'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'components/'
          Défaut: true
          Enfants:
            - label:'Carte. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'application. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

::note{to="#with-virtualization"}
Lorsque `nested` est `false`, tous les éléments sont rendus au même niveau avec une indentation pour indiquer la hiérarchie.
::

### couleur

Utilisez le `color` prop pour changer la couleur de l'arbre.

::component-code
---
Collapse: vrai
Caché:
  @@ph102@classe
Ignorer:
  @@ph103@articles
Extérieure:
  @@ph104@articles
Extérieurs:
  @@105@@105@105@105@105@105@105@105@105@105@105@105]
Props:
  Couleur: Neutre
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'useUser. ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Carte. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'application. vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

@@ph115@@Size

Utilisez la prop `size` pour modifier la taille de l'arbre.

::component-code
---
Collapse: vrai
Caché:
  @@classe 117
Ignorer:
  @@ph118@articles
Extérieur:
  @@ph119@articles
Extérieurs:
  @@120@@120@120@120@120@120@120@120@120@120@120@120@120@120@120@120@12012)
Props:
  Taille: XL
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'utilisateur. s'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Carte. vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

### Trailing Icône

Utilisez le `trailing-icon` prop pour personnaliser le [Icon](/docs/components/icon) d'un nœud parent.

::note
Si une icône est spécifiée pour un élément, elle aura toujours priorité sur ces accessoires.
::

::component-code
---
Collapse: vrai
Caché:
  @@ph137@classe
ignorer:
  @@ph138@articles
Extérieur:
  @@ph139@articles
Extérieurs:
  @@140@@Téléchargement []
Props:
  trailingIcône:'i-lucide-arrow-down'
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          TrailingIcône:'i-lucide-chevron-down'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'useUser. ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
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

### Icône élargie

Utilisez les props `expanded-icon` et `collapsed-icon` pour personnaliser les icônes d'un nœud parent lorsqu 'il est développé ou réduit. Par défaut,`i-lucide-folder-open` et `i-lucide-folder` respectivement.

::component-code
---
Collapse: vrai
Caché:
  @@ph159@classe
ignorer:
  @@ph160@articles
Extérieur:
  @@ph161@articles
Extérieurs:
  @162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@162@1622@16]
Props:
  expandedIcône:'i-lucide-book-open'
  collapsedIcône:'i-lucide-book'
  items:
    - label:'app/'
      Défaut: true
      Enfants:
        - label:'composables/'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'useUser. ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants/'
          Défaut: true
          Enfants:
            - label:'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label:'Bouton. vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label:'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

::framework-only
#numérique
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `app.config.ts` sous les touches `ui.icons.folder` et `ui.icons.folderOpen`.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
Vous pouvez personnaliser ces icônes globalement dans votre `vite.config.ts` sous les touches `ui.icons.folder` et `ui.icons.folderOpen`.
:::
::

### désactivé

Utilisez la prop `disabled` pour empêcher toute interaction de l'utilisateur avec l'arbre.

::component-code
---
Collapse: vrai
Caché:
  @@ph180@classe
ignorer:
  @@ph181@articles
Extérieure:
  @@ph182@articles
Extérieurs:
  @183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@183@19999)
Props:
  handicapés: vrai
  items:
    - label:« application »
      icon: 'i-lucide-folder'
      Défaut: true
      Enfants:
        - label:'composables'
          icon: 'i-lucide-folder'
          Enfants:
            - label:'utiliseAuth. ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label:'useUser. ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label:'composants'
          icon: 'i-lucide-folder'
          Enfants:
            - label:« Maison »
              icon: 'i-lucide-folder'
              Enfants:
                - label:'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label:'Bouton. vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label:'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label:'nuxt. config. ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  Catégorie: W-60
---
::

::note
Vous pouvez également désactiver des éléments individuels en utilisant `item.disabled`.
::

@@ph195@@Exemples

### Contrôle élément (s) sélectionné (s)

Vous pouvez contrôler le ou les éléments sélectionnés en utilisant la prop `default-value` ou la directive `v-model`.

::component-example
---
nom: 'modèle-valeur-exemple'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

::tip
Utilisez la prop `get-key` pour modifier la fonction utilisée pour obtenir la clé unique de chaque élément lorsqu 'un `v-model` ou `default-value` est fourni.
::

Si vous voulez empêcher la sélection d'un élément, vous pouvez utiliser la propriété `item.onSelect()`{lang="ts-type"} ou l'événement global `select`:

::component-example
---
nom: 'tree-on-select-example'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

::note
Cela vous permet d'étendre ou de réduire un élément parent sans le sélectionner.
::

### Control éléments étendus

Vous pouvez contrôler les éléments développés à l'aide de la prop `default-expanded` ou de la directive `v-model`.

::component-example
---
nom: 'tree-expanded-exemple'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

Si vous souhaitez empêcher l'extension d'un élément, vous pouvez utiliser la propriété `item.onToggle()`{lang="ts-type"} ou l'événement global `toggle`:

::component-example
---
nom: 'arbre-sur-toggle-exemple'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

::note
Cela vous permet de sélectionner un élément parent sans développer ni réduire ses enfants.
::

### With checkbox in items: badge{label="4.1+" class="align-text-top"}

Vous pouvez utiliser l'emplacement `item-leading` pour ajouter une [Checkbox](/docs/components/checkbox) aux éléments.`propagate-select` et `bubble-select` pour permettre la sélection multiple avec la relation parent-enfant et les `select` et `toggle`événements pour contrôler l'état sélectionné et étendu des éléments.

::component-example
---
nom: 'arbre-checkbox-items-example'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

::note
Cet exemple utilise la prop `as` pour changer les éléments de `button` à `div` car le [`Checkbox`](/docs/components/checkbox) est également rendu en tant que `button`.
::

### Avec drag and drop: badge{label="4.1+" class="align-text-top"}

Utilisez le `useSortable`](https://vueuse.org/integrations/useSortable/) composable à partir de [`@vueuse/integrations`](https://vueuse.org/integrations/README.html) pour activer la fonctionnalité de glisser-déposer sur l'arbre. Cette intégration enveloppe @@PH2444@@@@@@Sortable.js](https://sortablejs.github.io/Sortable/) pour fournir une expérience drag and drop sans faille.

::component-example
---
Étiquette: true
Collapse: vrai
nom: 'arbre-drag-and-drop-exemple'
---
::

::note
Cet exemple définit la prop `nested` à `false` pour avoir une liste plate d'éléments afin que les éléments puissent être glissés et déposés.
::

### Avec la virtualisation: badge{label="4.1+" class="align-text-top"}

Utilisez la prop `virtualize` pour activer la virtualisation de grandes listes en tant que booléen ou objet avec des options telles que `{ estimateSize: 32, overscan: 12 }`.

::warning
Lorsque la virtualisation est activée, la structure de l'arborescence est aplatie, de la même façon que pour définir la prop `nested` à `false`.
::

::component-example
---
Étiquette: true
nom: 'arbre-virtualisation-exemple'
Props:
  Catégorie: W-60
---
::

### Avec slot custom

Utilisez la propriété `slot` pour personnaliser un élément spécifique.

Vous aurez accès aux slots suivants:

@@
@@
@@
@@
@@

::component-example
---
nom: 'tree-custom-slot-example'
Collapse: vrai
Props:
  Catégorie: W-60
---
::

@@ph273@api

@@ph274@@props

Composants-props

@@ph275@@Slots

Composants slots

@@276@émissions

Composants émetteurs

@277@thème

Composant-thème

@278@changements

Composant-changelog
