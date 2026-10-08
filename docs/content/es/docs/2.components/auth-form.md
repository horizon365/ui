---
title: Autenticidad
description: 'Un formulario personalizable para crear formularios de inicio de sesión, registro o restablecimiento de contraseña.'
category: page
links:
  - label: Forma
    to: /docs/components/form
    icon: i-simple-icons-nuxtdotjs
  - label: GitHub también
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/AuthForm.vue
---

@@pH000@@Uso del producto

Construido sobre el [Form](/docs/components/form) componente, el `AuthForm` componente se puede utilizar en sus páginas o envuelto en un [PageCard](/docs/components/page-card).

::component-example
---
Nombre: 'auth-form-example'
Colapso: Verdad
---
::

@100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

El formulario se construirá a sí mismo basado en el prop `fields` y el estado se manejará internamente.

Utilice el `fields` prop como una matriz de objetos con las siguientes propiedades:

@@
@@

Cada campo debe incluir una propiedad `type`, que determina el componente de entrada y cualquier accesorio adicional aplicado:`checkbox` los campos usan [Checkbox](/docs/components/checkbox#props) los accesorios,`select` los campos usan [SelectMenu](/docs/components/select-menu#props) los accesorios,`otp` campos de uso [PinInput](/docs/components/pin-input#props) accesorios, y todos los demás tipos de uso de [Input](/docs/components/input#props) accesorios.

También puede pasar cualquier propiedad del componente [FormField](/docs/components/form-field#props) a cada campo.

::component-code
---
Categoría: true
Ignora:
  @@304@campos
  @444@clase
Externo:
  @@F045 @ Campos
Externalidades:
  - AuthFormField [en inglés]
Props:
  Campos:
    - nombre:'correo electrónico'
      Categoría:"Email"
      Etiqueta: "Correo electrónico"
      marcador de posición:"Introduzca su correo electrónico"
      Requerido: Verdadero
    - nombre:'contraseña'
      Tipo de contraseña:"Password"
      Categoría:"Password"
      Contraseña:"Introduzca su contraseña"
      Requerido: Verdadero
    - name:'país'
      Tipo: "Selección"
      Etiqueta: "país"
      placeholder: "Seleccione país"
      Items:
        - label:'Estados Unidos'
          Nombre: "Nosotros"
        - label:'España'
          Nombre: "fr"
        - label:'Reino Unido'
          Nombre: "UK"
        - label:'España'
          Nombre: 'au'
    - name:'otp'(en inglés)
      Categoría:"OTP"
      Categoría: OTP
      Longitud: 6
      Plantilla: '○'
    - name:"Recuerda"
      Categoría:"Checkbox"
      Archivo de la etiqueta: "Remember Me"
      Descripción:"Usted estará conectado durante 30 días".
  Categoría: max-w-sm
---
::

@@506@Título

Utilice el prop `title` para establecer el título del formulario.

::component-code
---
Categoría: true
Ignora:
  @@508@campos
  @@50000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
Externo:
  @@F060@F060
Externalidades:
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo de contraseña:"Password"
      Categoría:"Password"
  Categoría: Max-W-MD
---
::

@@pH064@Descripción

Utilice el prop `description` para establecer la descripción del formulario.

::component-code
---
Categoría: true
Ignora:
  @666@Campos
  @@767@título
  @068@clase
Externo:
  @@pH069@campos
Externalidades:
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  Categoría: Max-W-MD
---
::

@@pH073@Icon

Utilice el prop `icon` para establecer el icono del formulario.

::component-code
---
Categoría: true
Ignora:
  @750@campos
  @@76@título
  @@777@Descripción
  @788@clase
Externo:
  @79@campos
Externalidades:
  - AuthFormField [en inglés]
Props:
  Título: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  icono: 'i-lucide-usuario'
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  Categoría: Max-W-MD
---
::

### Servicios

Utilice el prop `providers` para agregar proveedores al formulario.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) como `variant`,`color`,`to`, etc.

::component-code
---
Categoría: true
Ignora:
  @2009@campos
  @@pH093@título
  @@ph094@descripción
  @@icon
  @@pH096@proveedores
  @@pH097@@headerAlign
  @098@clase
Externo:
  @@pH099@proveedores
  @@F100@Campos
Externalidades:
  @101@101@101@101@101@101@101@101@101@101@101@101@101@101@10101)
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  icono: 'i-lucide-usuario'
  Proveedores:
    - label:'Google'(Edición española)
      icono: 'i-simple-icons-google'
      Categoría:"Neutral"
      Variación:"Sutil"
    - label:'GitHub'(Edición española)
      icono: 'i-simple-icons-github'
      Categoría:"Neutral"
      Variación:"Sutil"
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  Categoría: Max-W-MD
---
::

### Separador

Utilice el prop `separator` para personalizar el [Separator](/docs/components/separator) entre los proveedores y los campos.

::component-code
---
Categoría: true
Ignora:
  @114 @ Campos
  @@115@título
  @@ph116@descripción
  @117@icon
  @118@proveedores
  @119 @ clase
Externo:
  @@pH120@proveedores
  @121 @ Campos
Externalidades:
  @@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@2012@222@2012@2012@2012@@2012@2222222222222222222222222222012@20120122222222222012012012201220122001222200120
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  icono: 'i-lucide-usuario'
  Proveedores:
    - label:'Google'(Edición española)
      icono: 'i-simple-icons-google'
      Categoría:"Neutral"
      Variación:"Sutil"
    - label:'GitHub'(Edición española)
      icono: 'i-simple-icons-github'
      Categoría:"Neutral"
      Variación:"Sutil"
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  Separador: "Proveedores"
  Categoría: Max-W-MD
---
::

Puede pasar cualquier propiedad del componente [Separator](/docs/components/separator#props) para personalizarlo.

::component-code
---
Categoría: true
Ignora:
  @@ph132@campos
  @@313@título
  @@ph134@descripción
  @@icon 135
  - proveedores
  @137 @ clase
Externo:
  - proveedores
  @@ph139@campos
Externalidades:
  @@P140@@BotónProps []
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  icono: 'i-lucide-usuario'
  Proveedores:
    - label:'Google'(Edición española)
      icono: 'i-simple-icons-google'
      Categoría:"Neutral"
      Variación:"Sutil"
    - label:'GitHub'(Edición española)
      icono: 'i-simple-icons-github'
      Categoría:"Neutral"
      Variación:"Sutil"
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  separador:
    icono: 'i-lucide-usuario'
  Categoría: Max-W-MD
---
::

@146 @ Submitir

Utilice el prop `submit` para cambiar el botón de envío del formulario.

Puede pasar cualquier propiedad del componente [Button](/docs/components/button) como `variant`,`color`,`to`, etc.

::component-code
---
Categoría: true
Ignora:
  @@F155 @ Campos
  @156@título
  - descripción
  @@icon 158
  - proveedores
  @@submit.label
  - submit.color
  - submit.variante
  @163 @ clase
Externo:
  @F164 @ Campos
Externalidades:
  - AuthFormField [en inglés]
Props:
  Nombre: Login
  Descripción:"Introduzca sus credenciales para acceder a su cuenta."
  Icono: 'i-lucide-usuario'
  Campos:
    - nombre:'correo electrónico'
      Tipo: Texto
      Etiqueta: "Correo electrónico"
    - nombre:'contraseña'
      Tipo: "Contraseña"
      Categoría:"Password"
  Sumisión:
    Categoría:"Submit"
    Categoría:"Error"
    Variación:"Sutil"
  Categoría: Max-W-MD
---
::

@@ph168@Ejemplos

### Dentro de una página

Puede envolver el componente `AuthForm` con el componente [PageCard](/docs/components/page-card) para mostrarlo dentro de una página `login.vue`, por ejemplo.

::component-example
---
Nombre: 'auth-form-page-exemple'
Colapso: Verdad
---
::

@176

@177@177@177

Componentes Props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
Este componente también soporta todos los atributos HTML nativos `<form>`.
::

@179@179@179

Componentes de slots

@180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

Componentes Emisiones

@@181@181@181

Puede acceder a la instancia del componente escrito (exponiendo formRef y estado) usando [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref). Por ejemplo, en una forma separada (por ejemplo, un formulario de "restablecimiento") puede hacer:

```vue
<script setup lang="ts">
const authForm = useTemplateRef('authForm')
</script>

<template>
  <UAuthForm ref="authForm" />
</template>
```

Esto le da acceso a las siguientes propiedades (expuestas):

| Nombre| Tipo|
| ---- | ---- |
| @196@198| @1977 @@@ 1999 @|
| @200@2002| @@|

@@204@Proyecto

Componente Tema

@2015@Changelog

Categoría: component-changelog
