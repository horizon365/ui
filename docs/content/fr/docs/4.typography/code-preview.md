---
title: Présentation ProseCodePreview
description: 'Affichez des exemples de code avec un aperçu et leur source pour une documentation plus claire.'
category: components
navigation.title: CodePreview
links:
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/prose/CodePreview.vue
---

@@ph000@@utilisation

Enveloppez tout contenu avec le composant `code-preview` pour afficher un aperçu en direct à côté de son code source à l'aide de l'emplacement `code`.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full" label="preview"}

::code-preview{class="[&>div]:*:my-0"}
@@@ 004 @

#code

```mdc
`inline code`
```

::

#code

````mdc
::code-preview
`inline code`

#code
```mdc
@@
```
::
````

::

@@ph018 @@ réponse

@@ph019@@props

: composants {prose}

@@2011@@Slots

: composant-slots {prose}

@@ph023@thème

: composant-thème {prose}

@@changelog

: composant-changelog {prefix="prose"}
