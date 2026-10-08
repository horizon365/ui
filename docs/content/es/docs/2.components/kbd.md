---
description: Un elemento kbd para mostrar una tecla de teclado.
category: element
keywords:
  - keyboard shortcut
  - hotkey
  - keybinding
links:
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Kbd.vue
---

@@pH000@@Uso del producto

Utilice la ranura predeterminada para establecer el valor del Kbd.

::component-code
---
Los slots:
  por defecto: K
---
::

@@pH001@valor

Utilice el prop `value` para establecer el valor del Kbd.

::component-code
---
Props:
  Valoración: K
---
::

Puede pasar claves especiales a la `value` prop que pasa a través de la [`useKbd`](https://github.com/nuxt/ui/blob/v4/src/runtime/composables/useKbd.ts) componible. Por ejemplo, la `meta` muestra como `⌘` en macOS y `Ctrl` en otras plataformas.

::component-code
---
Props:
  Categoría: meta
items:
  Valor:
    @12@meta
    @13@@WINN
    @@pH014@comando
    @150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @ctrl @ ctrl
    @@17@opción
    @180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@pH019@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada@entrada
    @200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@2011@backspace (en inglés)
    @222@escapismo
    @23@tab
    @@24@capslock (en inglés)
    @25@@Arruño
    @260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    @@27@Arruño
    @@28@Arruño
    @@29@2009
    @@pH030@paginación
    @31@@casa
    @32@@final
---
::

@333@color

Utilice el prop `color` para cambiar el color de la Kbd.

::component-code
---
Props:
  Color: Neutral
Los slots:
  por defecto: K
---
::

@@P250@Variante

Utilice el prop `variant` para cambiar la variante de la Kbd.

::component-code
---
Props:
  Color: Neutral
  Variante: Sólido
Los slots:
  por defecto: k
---
::

@37@@Tamaño

Utilice el prop `size` para cambiar el tamaño del Kbd.

::component-code
---
Props:
  Tamaño: LG
Los slots:
  por defecto: K
---
::

@@pH039@Ejemplos

@@

Utilice el prop `class` para anular los estilos de base de la insignia.

::component-code
---
Props:
  Archivo de la etiqueta: font-bold round-full
  Variación: Sutil
Los slots:
  por defecto: k
---
::

@@pH043

@@444@444@444

Componentes Props

@@45000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes de slots

@466@466

Componente Tema

@@40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Categoría: component-changelog
