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

##  사용

`v-model` 지시문을 사용하여 FileUpload 값을 제어합니다.

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  클래스
외부:
  - modelValue - modelValue 이미지
소품 :
  ModelValue: null
  클래스: 'w-96 min-h-48'
---
::

###  다중

`multiple`prop을 사용하여 여러 파일을 선택할 수 있습니다.

::component-code
---
무시하기:
  -  클래스
소품 :
  다중: True
  클래스 : 'w-96 min-h-48'
---
::

###  Dropzone

`dropzone`prop을 사용하여 삭제 가능한 영역을 활성화/비활성화합니다. 기본값은 `true`입니다.

::component-code
---
무시하기:
  -  class
소품 :
  dropzone : 거짓
  클래스 : 'w-96 min-h-48'
---
::

### Interactive 대화형

`interactive`prop을 사용하여 클릭 가능한 영역을 활성화/비활성화합니다. 기본값은 `true`입니다.

::tip{to="#with-files-bottom-slot"}
이 기능은 `Button` 구성 요소를 `#actions` 슬롯에 추가할 때 유용합니다.
::

::component-code
---
무시하기:
  -  클래스
소품 :
  대화식: false
  클래스 : 'w-96 min-h-48'
---
::

###  수락 됨

`accept`prop을 사용하여 입력할 수 있는 파일 형식을 지정합니다. [MIME 형식](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) 또는 파일 확장자(예: `image/png,application/pdf,.jpg`). 기본값은 `*` (모든 파일 형식)입니다.

::component-code
---
무시하기:
  -  accept
  -  클래스
소품 :
  허용: 'image/*'
  클래스 : 'w-96 min-h-48'
---
::

###  레이블

`label`prop을 사용하여 FileUpload 레이블을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  클래스
소품 :
  사진: "Drop your image here"
  클래스 : 'w-96 min-h-48'
---
::

###  설명

`description`prop을 사용하여 FileUpload에 대한 설명을 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  클래스
소품 :
  사진: "Drop your image here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
  클래스 : 'w-96 min-h-48'
---
::

###  아이콘

`icon`prop을 사용하여 FileUpload.Defaults 아이콘을 `i-lucide-upload`로 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  -  클래스
소품 :
  아이콘: 'i-lucide-image'
  사진: "drop your image here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
  클래스 : 'w-96 min-h-48'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.upload` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.upload` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  색상

`color`prop을 사용하여 FileUpload의 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  -  클래스
소품 :
  색상: 중립
  강조 표시:true
  사진: "drop your image here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
  클래스 : 'w-96 min-h-48'
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용되며, 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

###  변형

`variant`prop 을 사용하여 FileUpload 의 변형을 변경합니다.

::component-code
---
무시하기:
  -  클래스
소품 :
  변형: 버튼
---
::

###  크기

`size`prop을 사용하여 FileUpload의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  -  클래스
소품 :
  크기: xl
  변형: 영역
  사진: "Drop your image here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
---
::

###  레이아웃

`layout`prop을 사용하여 FileUpload.Defaults에 파일이 표시되는 방식을 `grid`로 변경합니다.

::warning
이 prop은 `variant`가 `area`인 경우에만 작동합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  - multiple @ 다중
  -  클래스
  -  ui. base
소품 :
  배치: 리스트
  다중: true
  사진: "Drop your images here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
  클래스: 'w-96'
  ui:
    모델 번호:min-h-48
---
::

###  위치

`position`prop을 사용하여 FileUpload.Defaults에서 파일 위치를 `outside`로 변경합니다.

::warning
이 prop은 `variant`가 `area`일 때만 작동하고 `layout`이 `list`일 때만 작동합니다.
::

::component-code
---
상품명 : True
무시하기:
  -  label
  -  설명
  - multiple @ 다중
  -  layout
  -  클래스
  -  ui. base
소품 :
  위치: 내부
  배치: 리스트
  다중: True
  사진: "Drop your images here"
  설명: 'SVG, PNG, JPG 또는 GIF (최대 2MB)'
  클래스: 'W-96'
  ui:
    모델 번호:min-h-48
---
::

##  예제

###  양식 유효성 검사

[Form](/docs/components/form) 및 [FormField](/docs/components/form-field) 구성 요소 내에서 FileUpload를 사용하여 유효성 검사 및 오류 처리를 처리할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'file-upload-form-validation-example'
---
::

### 기본 슬롯 포함

기본 슬롯을 사용하여 파일업로드 구성 요소를 직접 만들 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'file-upload-default-slot-example'
---
::

###  파일 하단 슬롯 포함

예를 들어 `files-bottom`슬롯을 사용하여 파일 목록 아래에 [Button](/docs/components/button)를 추가하여 모든 파일을 제거할 수 있습니다.

::component-example
---
상품명 : True
축소: true
name: 'file-upload-files-bottom-slot-example' 파일 업로드-파일-bottom-slot-example
---
::

::note{to="#interactive"}
이 예제에서는 `interactive`prop이 `false`로 설정되어 있어 기본 클릭 가능 영역을 방지합니다.
::

###  파일 상단 슬롯 포함

예를 들어 파일 목록 위에 [Button](/docs/components/button) 슬롯을 사용하여 새 파일을 추가할 수 있습니다.

::component-example
---
상품명 : True
축소: true
이름: 'file-upload-files-top-slot-example'
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes" target="_blank"}
이 컴포넌트는 또한 모든 네이티브 `<input>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

###  Emits

:구성요소 - 방출

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `inputRef`{lang="ts-type"}| `Ref<HTMLInputElement \| null>` @ {lang="ts-type"}|
| `dropzoneRef`{lang="ts-type"}| `Ref<HTMLDivElement \| null>`{lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
