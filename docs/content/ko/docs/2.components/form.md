---
description: 유효성 검사 및 제출 처리가 내장된 양식 구성 요소입니다.
category: form
keywords:
  - validation
  - schema
  - submit
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Form.vue
---

##  사용

양식 구성 요소를 사용하여 [표준 스키마](https://github.com/standard-schema/standard-schema)예: [Valibot](https://github.com/fabian-hiller/valibot)PH08@@@@@PH08[Zod](](PH00@PH00)를 지원하는 검증 라이브러리를 지원하는 검증 라이브러리를 사용하여 양식 데이터를 사용하여 양식 데이터를 검증합니다.[Regle](https://github.com/victorgarciaesgi/regle)[Yup](https://github.com/jquense/yup)Joi[Joi](https://github.com/hapijs/joihttps://github.com/hapijs/joi](Ph023@@@Ph024@Ph024@ 또는 Ph024@Ph024@ Ph024@ 자신의 검증 또는 Ph017@ Ph016@ Ph018@ Ph017@ Ph018@ Ph018@

[FormField](/docs/components/form-field) 구성 요소와 함께 작동하여 양식 요소 주위에 오류 메시지를 자동으로 표시합니다.

### 스키마 검증

그것은 두 개의 props가 필요합니다 :

- `state` - 폼의 상태를 유지하는 반응형 개체.
- `schema` - any[표준 스키마](https://github.com/standard-schema/standard-schema ) 또는 [Superstruct](https://github.com/ianstormtaylor/superstruct)

::warning
** 유효성 검사 라이브러리는 포함되어 있지 않습니다 ** 기본적으로, 필요한 것을 ** 설치하십시오.
::

::tabs{class="gap-0"}
  ::component-example{label="발리봇 Valibot"}
  ---
  이름: 'form-example-valibot'
  소품 :
    클래스: 'w-60'
  ---
  ::

  ::component-example{label="zod 조드"}
  ---
  이름: 'form-example-zod'
  소품 :
    클래스: 'w-60'
  ---
  ::

  ::component-example{label="Regle (Regle)"}
  ---
  이름: 'form-example-regle'
  소품 :
    클래스: 'w-60'
  ---
  ::

  ::component-example{label="Yup 예"}
  ---
  이름: 'form-example-yup'
  소품 :
    클래스: 'w-60'
  ---
  ::

  ::component-example{label="조이 Joi"}
  ---
  이름: 'form-example-joi'
  소품 :
    클래스: 'w-60'
  ---
  ::

  ::component-example{label="슈퍼 구조체(Superstruct)"}
  ---
  이름: 'form-example-superstruct'
  소품 :
    클래스: 'w-60'
  ---
  ::
::

### 사용자 정의 검증

`validate`prop을 사용하여 자신의 검증 로직을 적용합니다.

유효성 검사 함수는 다음과 같은 속성을 가진 오류 목록을 반환해야 합니다.

- `message` - 표시할 오류 메시지입니다.
- `name` - `FormField` 의 `name` 에 오류를 전송합니다.

::tip
`schema`prop과 함께 사용하여 복잡한 사용 사례를 처리할 수 있습니다.
::

::component-example
---
이름: "form-example-basic"
소품 :
  클래스: 'w-60'
---
::

###  오류 보고

오류는 해당 [FormField](/docs/components/form-field) @ @ @ prop 사용 `name` @ prop에 일치합니다. `email` 필드의 오류는 `<FormField name="email">` {lang="vue"} 로 표시됩니다.

중첩된 필드는 점 표기법을 사용하여 일치합니다. `{ user: z.object({ email: z.string() }) }`{lang="ts"} 같은 스키마는 `<FormField name="user.email">` {lang="vue"}에 적용됩니다.

::warning
배열 항목의 오류는 이름에 인덱스를 포함합니다.(예: `tags.0``tags.1` )와 일치하지 않습니다. {lang="vue"} by `name` alone. `error-pattern` prop을 `/^tags\..+/`{lang="ts"} 와 같은 정규 표현식과 함께 사용하십시오. 이것은 특히 [InputTags@@와 같은 구성 요소에 유용합니다.]( /docs/components/input-tags @ ) @ .
::

::component-example
---
name: 'form-example-error-pattern' 에러 패턴
소품 :
  클래스: 'w-60'
---
::

### 입력 이벤트

양식 구성 요소는 입력이 `input`, `change` 또는 `blur` 이벤트를 생성할 때 자동으로 유효성 검사를 트리거합니다.

- Validation on `input`occurs** as you type **
- Validation on `change`은 ** 가 값** 에 커밋 할 때 발생합니다.
- Validation on `blur` 입력 ** loses focus** 에서 발생합니다.

검증이 발생하는 시기는 `validate-on`prop을 사용하여 제어할 수 있습니다.

::tip
양식은 제출 시 항상 유효합니다.
::

::component-example{label="기본 값"}
---
출처 : false
name: 'form-example-elements' 형식-예제-요소
선택 사항:
  -  이름: 'validate-on'
    태그: validate-on
    항목:
    - input @ '입력'
    -  '변경'
    - blur' @ @ @ 'blur' -  'blur'
    기본값 :
    - input @ '입력'
    -  '변경'
    - blur' @ @ @ 'blur' @ -  'blur'
    다중: True
---
::

::tip
`useFormField`composable을 사용하여 자체 구성 요소 내에서 구현할 수 있습니다.
::

###  오류 이벤트

`@error` 이벤트를 수신하여 오류를 처리할 수 있습니다. 이 이벤트는 양식을 제출할 때 트리거되며 다음 필드와 함께 `FormError` 객체의 배열이 포함됩니다.

- `id` - 입력의 `id`
- `name` @ `name` 의 `FormField`
- `message` - 표시할 오류 메시지입니다.

다음은 양식을 제출한 후 오류가 있는 첫 번째 입력 요소에 초점을 맞추는 예제입니다.

::component-example
---
이름: "form-example-on-error"
축소: true
소품 :
  클래스: 'w-60'
---
::

### HTML5 유효성 검사: badge{label="4.5+" class="align-text-top"}

프로그래밍 방식으로 `form.submit()`를 호출하면 Form 구성 요소는 제출 전에 기본 HTML5 유효성 검사를 자동으로 트리거합니다.

::note
이 기능은 제출 단추가 모달 바닥글과 같이 양식 요소 외부에 있는 경우에 특히 유용합니다.
::

::component-example
---
이름: 'form-example-html5-validation'
소품 :
  클래스: 'w-60'
---
::

### Nesting 양식

`nested`prop을 사용하여 여러 Form 구성 요소를 중첩하고 해당 검증 함수를 연결합니다. 이 경우 상위 양식의 검증은 해당 안에 있는 다른 모든 양식의 검증을 자동으로 수행합니다.

중첩된 양식은 상위의 상태를 직접 상속하므로 별도의 상태를 정의할 필요가 없습니다. `name`prop을 사용하여 상위의 상태 내에서 중첩된 속성을 대상으로 지정할 수 있습니다.

사용자의 입력에 따라 필드를 동적으로 추가하는 데 사용할 수 있습니다.

::component-example
---
축소: true
이름: 'form-example-nested'
---
::

또는 목록 입력을 검증하려면 다음을 수행합니다.

::component-example
---
축소: true
이름: 'form-example-nested-list'
---
::

##  API

###  Props

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
이 컴포넌트는 또한 모든 네이티브 `<form>`HTML 속성을 지원합니다.
::

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방출

###  노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 Name| 유형 (Type)|
| ---- | ---- |
| `submit()`{lang="ts-type"}| `Promise<void>`{lang="ts-type"}<br><div class="text-toned mt-1">HTML5 검증을 사용하여 양식 제출을 트리거합니다.</p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"} @ {lang="ts-type"} @|`Promise<T>`{lang="ts-type"}<br><div class="text-toned mt-1"><p> 트리거 폼 검증.@@ `opts.silent` 가 true로 설정되지 않은 경우 오류가 발생합니다.</p></div>|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"}| `void`<br><div class="text-toned mt-1"><p>특정 경로와 관련된 양식 오류를 삭제합니다. 경로가 없으면 양식 오류를 모두 삭제합니다. </p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"}| `FormErrorWithId[]`{lang="ts-type"}<br><div class="text-toned mt-1"><p> 특정 경로와 관련된 양식 오류를 검색합니다. 경로가 없으면 모든 양식 오류를 반환합니다.</p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"}| `void`<br><div class="text-toned mt-1"><p> 지정된 경로에 대한 양식 오류를 설정합니다. 경로가 없으면 모든 오류를 무시합니다. </p></div>|
| `errors`{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"}<br><div class="text-toned mt-1">검증 오류가 있는 스토리지에 대한 참조입니다. 이 항목을 사용하여 오류 정보를 액세스하거나 조작할 수 있습니다. </p></div>|
| `disabled` {lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}|
| `dirty`{lang="ts-type"}| `Ref<boolean>`{lang="ts-type"}`true` 사용자가 하나 이상의 양식 필드를 업데이트한 경우.|
| `dirtyFields`{lang="ts-type"} @ {lang="ts-type"} @|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}사용자가 수정한 필드를 추적합니다.|
| `touchedFields` {lang="ts-type"} @|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}사용자가 상호 작용한 필드를 추적합니다.|
| `blurredFields` @ {lang="ts-type"} @|`ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"}사용자에 의해 모호한 필드를 추적합니다.|

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
