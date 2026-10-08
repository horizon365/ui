---
description: 'Un composant pour créer du contenu à défilement infini.'
category: data
keywords:
  - ticker
  - scroller
  - carousel
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Marquee.vue
---

@@ph000@@utilisation

Utilisez l'emplacement par défaut de votre contenu pour créer une animation à défilement infini.

::component-code
---
Étiquette: true
Slots:
  Défaut:|

    @@@ 001 @
    @@@ 002 @
    @@@ 003 @
    @@@ 004 @
    @@@ 005 @
    @@@ 006 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

::tip
L'animation est automatiquement désactivée lorsque l'utilisateur préfère un mouvement réduit, le contenu est affiché statiquement à la place.
::

### Pause sur Hover

Utilisez la prop `pause-on-hover` pour mettre en pause l'animation lorsque l'utilisateur survole le contenu.

::component-code
---
Étiquette: true
Props:
  PauseOnHover: vrai
Slots:
  Défaut:|

    @@
    @@@@ 016 @
    @@@ 017 @
    @@@@ 018 @
    @@@@ 019 @
    @@@ 2019 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@27@@Reverse

Utilisez la prop `reverse` pour inverser la direction de l'animation.

::component-code
---
Étiquette: true
Props:
  Revers: vrai
Slots:
  Default:|

    @@@ 29 @
    @@@ 030 @
    @@@ 031 @
    @@@ 032 @
    @@@@ 33 @
    @@@ 034 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### Référencement

Utilisez la prop `orientation` pour changer la direction du défilement.

::component-code
---
Étiquette: true
Catégorie: H-96
Props:
  Orientation: "Vertical"
Slots:
  Défaut:|

    @@@ 043 @
    @@@ 44 @
    @@@ 045 @
    @@@ 046 @
    @@@ 047 @
    @@@ 048 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@55@Répétez

Utilisez la prop `repeat` pour spécifier combien de fois le contenu doit être répété dans l'animation.

::component-code
---
Étiquette: true
Props:
  Répétition: 6
Slots:
  Default:|

    @@@ 57 @
    @@@ 58 @
    @@@ 59 @
    @@@ 060 @
    @@@ 061 @
    @@@ 062 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

### L'étoile

Utilisez le prop `overlay` pour enlever les superpositions de dégradé sur les bords de la marquise.

::component-code
---
Étiquette: true
Props:
  Définition: Faux
Slots:
  Default:|

    @@@ 071 @
    @@@ph072 @
    @@@ 073 @
    @@@ 74 @
    @@@ 75 @
    @@@ph076 @
---
par: u-icon {name="i-simple-icons-github" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-discord" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-x" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-instagram" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-linkedin" class="size-10 shrink-0"}
par: u-icon {name="i-simple-icons-facebook" class="size-10 shrink-0"}
::

@@ph083@exemples

@084@Témoignages

Utilisez le composant `Marquee` pour créer une animation de défilement infini pour vos témoignages.

::component-example{label="Con los items"}
---
Étiquette: true
nom: 'marque-témoignages'
Collapse: vrai
dépassement: true
Classe: px-0
---
::

### captures d'écran

Utilisez le composant `Marquee` pour créer une animation de défilement infini pour vos captures d'écran.

::component-example{label="Avec Screenshots"}
---
Étiquette: true
nom: 'marquee-screenshots'
Collapse: vrai
dépassement: true
classe: '! p-0'
---
::

@@P090@@écrivain

@@ph091@@props

Composants-props

@@ph092@@Slots

Composants slots

@@ph093@thème

Composant-thème

@changement@changement@changement@changement.com

Composant-changelog
