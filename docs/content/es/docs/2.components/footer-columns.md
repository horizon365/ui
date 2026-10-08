---
title: Columnas de pie
description: 'Una lista de enlaces como columnas para mostrar en su pie de página.'
category: navigation
keywords:
  - footer links
  - sitemap
  - columns
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FooterColumns.vue
---

@@pH000@@Uso del producto

El componente FooterColumns representa una lista de columnas para mostrar en el pie de página.

Utilícelo en la ranura `top` del componente [Footer](/docs/components/footer):

```vue {3-7}
<template>
  <UFooter>
    <template #top>
      <UContainer>
        <UFooterColumns />
      </UContainer>
    </template>
  </UFooter>
</template>
```

@@17@columnas

Utilice el prop `columns` como una matriz de objetos con las siguientes propiedades:

@@
@@

Cada columna contiene un array de objetos que definen los enlaces. Cada enlace puede tener las siguientes propiedades:

@@
@@
@@
@@

Puede pasar cualquier propiedad del componente [Link](/docs/components/link#props) como `to`,`target`, etc.

::component-example
---
Categoría: true
Nombre: 'foot-columns-ejemplo'
Categoría: P-8
Props:
  Categoría: w-full
---
::

@@444@4444 años

@@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Props

@@46000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@477@themes

Componente Tema

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
