---
title: 파일 (File) 업로드 (Upload)
description: '파일을 업로드할 입력 요소입니다.'
category: form
keywords:
  - dropzone
  - drag and drop
  - file input
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/FileUpload.vue
---

## Usage

`v-model` 지시문을 사용하여 FileUpload 값을 제어합니다.

::component-code
---
ignore:
  - modelValue
  - class
external:
  - modelValue
props:
  modelValue: null
  class: 'w-96 min-h-48'
---
::

### Multiple 다중

`multiple` prop를 사용하여 여러 파일을 선택할 수 있습니다.

::component-code
---
ignore:
  - class
props:
  multiple: true
  class: 'w-96 min-h-48'
---
::

### Dropzone 이미지

`dropzone` 소품을 사용하여 드롭 가능 영역을 활성화/비활성화합니다. 기본값은 `true`입니다.

::component-code
---
ignore:
  - class
props:
  dropzone: false
  class: 'w-96 min-h-48'
---
::

### Interactive 대화식

`interactive` 소품을 사용하여 클릭 가능한 영역을 활성화/비활성화합니다. 기본값은 `true`입니다.

::tip{to="#with-files-bottom-slot"}
이 기능은 `#actions` 슬롯에 `Button` 구성 요소를 추가할 때 유용합니다.
::

::component-code
---
ignore:
  - class
props:
  interactive: false
  class: 'w-96 min-h-48'
---
::

### 수락 됨

`accept` 소품을 사용하여 입력에 허용되는 파일 유형을 지정합니다. [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) 또는 파일 확장자(예: `image/png,application/pdf,.jpg`)의 쉼표로 구분된 목록을 제공합니다. 기본값은 `*`(모든 파일 유형)입니다.

::component-code
---
ignore:
  - accept
  - class
props:
  accept: 'image/*'
  class: 'w-96 min-h-48'
---
::

### Label 태그

`label` prop을 사용하여 FileUpload 레이블을 설정합니다.

::component-code
---
prettier: true
ignore:
  - class
props:
  label: 'Drop your image here'
  class: 'w-96 min-h-48'
---
::

### Description

`description` prop를 사용하여 FileUpload에 대한 설명을 설정합니다.

::component-code
---
prettier: true
ignore:
  - label
  - class
props:
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

### Icon

`icon` prop을 사용하여 FileUpload.Defaults 아이콘을 `i-lucide-upload`로 설정합니다.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  icon: 'i-lucide-image'
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.upload` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.upload` 키 아래의 `vite.config.ts` 내에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### color

`color` prop을 사용하여 FileUpload 색상을 변경합니다.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  color: neutral
  highlight: true
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96 min-h-48'
---
::

::note
`highlight` prop은 초점 상태를 표시하기 위해 사용되며, 유효성 검사 오류가 발생할 때 내부적으로 사용됩니다.
::

### Variant

`variant` prop을 사용하여 FileUpload 변형을 변경합니다.

::component-code
---
ignore:
  - class
props:
  variant: button
---
::

### Size

`size` prop을 사용하여 FileUpload 크기를 변경합니다.

::component-code
---
prettier: true
ignore:
  - label
  - description
  - class
props:
  size: xl
  variant: area
  label: 'Drop your image here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
---
::

### Layout

`layout` prop을 사용하여 FileUpload.Defaults에 파일이 표시되는 방식을 `grid`로 변경합니다.

::warning
이 소품은 `variant`가 `area`일 때만 작동합니다.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - class
  - ui.base
props:
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

### Position 위치

`position` prop을 사용하여 FileUpload.Defaults에서 파일의 위치를 `outside`로 변경합니다.

::warning
이 소품은 `variant`가 `area`이고 `layout`가 `list`일 때만 작동합니다.
::

::component-code
---
prettier: true
ignore:
  - label
  - description
  - multiple
  - layout
  - class
  - ui.base
props:
  position: inside
  layout: list
  multiple: true
  label: 'Drop your images here'
  description: 'SVG, PNG, JPG or GIF (max. 2MB)'
  class: 'w-96'
  ui:
    base: 'min-h-48'
---
::

## 예제

### With 폼 유효성 검사

[Form](/docs/components/form) 및 [FormField](/docs/components/form-field) 구성 요소 내에서 FileUpload를 사용하여 유효성 검사 및 오류 처리를 처리할 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-form-validation-example'
---
::

### 기본 슬롯 사용

기본 슬롯을 사용하여 고유한 FileUpload 구성 요소를 만들 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-default-slot-example'
---
::

### 파일 하단 슬롯이 있습니다.

`files-bottom` 슬롯을 사용하여 파일 목록 아래에 [Button](/docs/components/button)를 추가하여 모든 파일을 제거 할 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-bottom-slot-example'
---
::

::note{to="#interactive"}
이 예제에서 `interactive` prop은 기본 클릭 가능 영역을 방지하기 위해 `false`로 설정되어 있습니다.
::

### 파일 상단 슬롯이 있습니다.

`files-top` 슬롯을 사용하여 파일 목록 위에 [Button](xph24x)를 추가하여 새 파일을 추가 할 수 있습니다.

::component-example
---
prettier: true
collapse: true
name: 'file-upload-files-top-slot-example'
---
::

## API

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<input>` HTML 속성을 지원합니다.
::

### Slots

:component-slots

### Emits

:component-emits

### 노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"} 파일| `Ref<HTMLInputElement \| null>`{lang="ts-type"}|
| `dropzoneRef`{lang="ts-type"} 공식| `Ref<HTMLDivElement \| null>`{lang="ts-type"} 파일|

## Theme 테마

:component-theme

## 변경 로그

:component-changelog
