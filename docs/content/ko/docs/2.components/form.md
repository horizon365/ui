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

## Usage

양식 구성 요소를 사용하여 [Standard Schema](xph03x)를 지원하는 검증 라이브러리를 사용하여 양식 데이터를 검증합니다(예: [Valibot](https://github.com/fabian-hiller/valibotxph08x, [Zod](https://github.com/colinhacks/zod), [Regex014x, ](, ](, [Regex00004x, xxph0004x). [Joi](https://github.com/hapijs/joi) 또는 [Superstruct](https://github.com/ianstormtaylor/superstruct) 또는 사용자 고유의 유효성 검사 로직.

[FormField](/docs/components/form-field) 구성 요소와 함께 작동하여 양식 요소 주위에 오류 메시지를 자동으로 표시합니다.

### Schema 유효성 검사

그것은 두 개의 props를 필요로합니다 :

- `state` - 폼의 상태를 유지하는 반응형 개체입니다.
- `schema` - 모든 [Standard Schema](https://github.com/standard-schema/standard-schema) 또는 [Superstruct](https://github.com/ianstormtaylor/superstruct).

::warning
**No 유효성 검사 라이브러리는 기본적으로 included**입니다. **를 필요로하는 하나를 **install해야합니다.
::

::tabs{class="gap-0"}
  ::component-example{label="발리봇 Valibot"}
  ---
  name: 'form-example-valibot'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="zod 조드"}
  ---
  name: 'form-example-zod'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Regle (Regle)"}
  ---
  name: 'form-example-regle'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="Yup 예"}
  ---
  name: 'form-example-yup'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="조이 Joi"}
  ---
  name: 'form-example-joi'
  props:
    class: 'w-60'
  ---
  ::

  ::component-example{label="슈퍼 구조체(Superstruct)"}
  ---
  name: 'form-example-superstruct'
  props:
    class: 'w-60'
  ---
  ::
::

### 사용자 정의 유효성 검증

`validate` prop을 사용하여 자신만의 검증 로직을 적용합니다.

유효성 검사 함수는 다음과 같은 속성을 가진 오류 목록을 반환해야 합니다.

- `message` - 표시할 오류 메시지입니다.
- `name` - 오류를 보낼 `FormField`의 `name`입니다.

::tip
`schema` prop과 함께 사용하여 복잡한 사용 사례를 처리 할 수 있습니다.
::

::component-example
---
name: 'form-example-basic'
props:
  class: 'w-60'
---
::

### Error 보고

해당 `name` prop를 사용하여 해당 [FormField](/docs/components/form-field)와 오류가 일치합니다. `email` 필드의 오류는 `<FormField name="email">`{lang="vue"}로 표시됩니다.

중첩 필드는 점 표기법을 사용하여 일치합니다. `{ user: z.object({ email: z.string() }) }`{lang="ts"}와 같은 스키마는 `<FormField name="user.email">`xph12x에 적용됩니다.

::warning
배열 항목의 오류는 이름에 인덱스(예: `tags.0`, `tags.1`)를 포함하며 `name`의 xph15x{lang="vue"}와 일치하지 않습니다. `error-pattern` Prop을 `/^tags\..+/`{lang="ts"}와 같은 정규 표현식과 함께 사용하여 캡처하십시오. 이것은 [InputTagsph120x와 같은 구성 요소에 특히 유용합니다.
::

::component-example
---
name: 'form-example-error-pattern'
props:
  class: 'w-60'
---
::

### Input 이벤트

Form 구성 요소는 입력이 `input`, `change` 또는 `blur` 이벤트를 방출할 때 자동으로 유효성 검사를 트리거합니다.

`input`에서 - Validation은 type**로 **As you type**에서 발생합니다.
`change`의 - Validation은 value**에 **commit을 수행할 때 발생합니다.
`blur`의 - Validation은 입력 **focus**가 손실 될 때 발생합니다.

검증이 발생하는 시기는 `validate-on` prop를 사용하여 제어할 수 있습니다.

::tip
양식은 제출할 때 항상 유효합니다.
::

::component-example{label="기본 값"}
---
source: false
name: 'form-example-elements'
options:
  - name: 'validate-on'
    label: 'validate-on'
    items:
    - 'input'
    - 'change'
    - 'blur'
    default:
    - 'input'
    - 'change'
    - 'blur'
    multiple: true
---
::

::tip
`useFormField` 컴포지블을 사용하여 자신의 컴포넌트 내에서 이를 구현할 수 있습니다.
::

### Error 이벤트

`@error` 이벤트를 수신하여 오류를 처리할 수 있습니다. 이 이벤트는 양식을 제출할 때 트리거되며 다음 필드가 있는 `FormError` 객체 배열이 포함됩니다.

- `id` - 입력의 `id`.
- `name` - `FormField`의 `name`
- `message` - 표시할 오류 메시지.

다음은 양식을 제출한 후 오류가 있는 첫 번째 입력 요소에 초점을 맞추는 예제입니다.

::component-example
---
name: 'form-example-on-error'
collapse: true
props:
  class: 'w-60'
---
::

### HTML5 유효성 검사 : badge{label="4.5+" class="align-text-top"}

프로그래밍 방식으로 `form.submit()`를 호출할 때 Form 구성 요소는 제출하기 전에 기본 HTML5 유효성 검사를 자동으로 트리거합니다.

::note
이 기능은 제출 단추가 모달 바닥글과 같이 양식 요소 외부에 있는 경우에 특히 유용합니다.
::

::component-example
---
name: 'form-example-html5-validation'
props:
  class: 'w-60'
---
::

### Nesting 양식

`nested` Prop을 사용하여 여러 Form 구성 요소를 중첩시키고 해당 검증 함수를 연결합니다. 이 경우 상위 양식의 유효성을 검사하면 해당 안에 있는 다른 모든 양식이 자동으로 검증됩니다.

중첩된 양식은 상위의 상태를 직접 상속하므로 별도의 상태를 정의할 필요가 없습니다. `name` Prop을 사용하여 상위 상태 내에 중첩된 속성을 대상으로 지정할 수 있습니다.

사용자의 입력에 따라 필드를 동적으로 추가하는 데 사용할 수 있습니다.

::component-example
---
collapse: true
name: 'form-example-nested'
---
::

또는 목록 입력을 검증하려면 다음을 수행합니다.

::component-example
---
collapse: true
name: 'form-example-nested-list'
---
::

## API 사용

### Props (### Props)

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes" target="_blank"}
이 구성 요소는 모든 기본 `<form>` HTML 속성을 지원합니다.
::

### Slots

:component-slots

### Emits

:component-emits

### 노출

[`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref)를 사용하여 유형 구성 요소 인스턴스에 액세스할 수 있습니다.

```vue
<script setup lang="ts">
const form = useTemplateRef('form')
</script>

<template>
  <UForm ref="form" />
</template>
```

이렇게 하면 다음 항목에 액세스할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `submit()`{lang="ts-type"}| `Promise<void>`{lang="ts-type"} <br> <div class="text-toned mt-1">xph26xTriggers 양식 제출 HTML5 유효성 검사.</p></div>|
| `validate(opts: { name?: keyof T \| (keyof T)[], silent?: boolean, nested?: boolean, transform?: boolean })`{lang="ts-type"}| `Promise<T>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>Triggers 양식 검증. `opts.silent`가 true로 설정되지 않으면 오류가 발생합니다.|
| `clear(path?: keyof T \| RegExp)`{lang="ts-type"} 파일| `void` <br> <div class="text-toned mt-1"><p>특정 경로와 연관된 양식 오류를 지웁니다. 경로가 제공되지 않으면 모든 양식 오류를 지웁니다. </p></div>|
| `getErrors(path?: keyof T \| RegExp)`{lang="ts-type"} 파일| `FormErrorWithId[]`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>특정 경로와 연관된 양식 오류를 검색합니다. 경로가 제공되지 않으면 모든 양식 오류를 반환합니다. </p></div>|
| `setErrors(errors: FormError[], name?: keyof T \| RegExp)`{lang="ts-type"} 파일| `void` <br> <div class="text-toned mt-1"><p>주어진 경로에 대한 양식 오류를 설정합니다. 경로가 제공되지 않으면 모든 오류를 덮어씁니다. </p></div>|
| `errors`{lang="ts-type"}| `Ref<FormErrorWithId[]>`{lang="ts-type"} <br> <div class="text-toned mt-1"><p>A 검증 오류가 있는 어레이에 대한 참조입니다. 이 참조를 사용하여 오류 정보에 액세스하거나 조작할 수 있습니다. </p></div>|
| `disabled`{lang="ts-type"} 파일| `Ref<boolean>`{lang="ts-type"}|
| `dirty`{lang="ts-type"} 파일| `Ref<boolean>`{lang="ts-type"} `true` 사용자가 하나 이상의 양식 필드를 업데이트한 경우.|
| `dirtyFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} 사용자에 의해 수정된 필드를 추적합니다.|
| `touchedFields`{lang="ts-type"}의 발음을 `touchedFields`xph290| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} 사용자가 상호 작용한 필드를 추적합니다.|
| `blurredFields`{lang="ts-type"}| `ReadonlySet<DeepReadonly<keyof T>>`{lang="ts-type"} 사용자에 의해 흐리게 된 필드를 추적합니다.|

## 테마

:component-theme

## Changelog 파일

:component-changelog
