---
description: 하위 구성요소의 주제를 지정하는 헤드 없는 구성요소입니다.
category: layout
links:
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## Usage

Theme 구성 요소는 각 구성 요소를 개별적으로 수정하지 않고 모든 하위 구성 요소의 기본 **slot 클래스 ** 및 **props**를 재정의합니다. Vue의 `provide`/`inject` 메커니즘을 후드 아래에 사용하므로 재정의는 모든 깊이에서 적용됩니다.

::note
Theme 구성 요소는 HTML 요소를 렌더링하지 않으며 자식에 대한 테마 재정의만 제공합니다.The Theme component does not render any HTML element, it only provides theme overrides to its children.
::

::framework-only
#nuxt
:::tip
앱 레벨 테마 구성의 경우 대신 `app.config.ts` 파일을 사용하는 것이 좋습니다.
:::

#vue
:::tip
앱 레벨 테마 구성의 경우 대신 `vite.config.ts` 파일을 사용하는 것이 좋습니다.
:::
::

### slot 클래스

`ui` prop을 사용하여 하위 구성 요소의 슬롯 클래스를 재정의합니다. 키는 구성 요소 이름(camelCase)이고 값은 슬롯 클래스 재정의입니다.

::component-example
---
name: 'theme-ui-example'
---
::

### Prop 기본값: badge{label="4.8+" class="align-text-top"}

`props` Prop을 사용하여 하위 구성 요소에 있는 Prop의 기본값을 재정의합니다. 각 키는 해당 구성 요소의 Prop 부분에 매핑됩니다.

::component-example
---
name: 'theme-props-example'
---
::

::tip
컴포넌트의 명시적 props(예: `<UButton color="primary" />`)는 항상 `<UTheme :props>`를 이긴다. topic defaults는 prop이 명시적으로 전달되지 않은 경우에만 적용됩니다.
::

## 예

### 다중 구성 요소

`ui` 또는 `props`에서 다른 키를 사용하여 여러 구성요소 유형에 대한 주제를 한 번에 지정합니다.

::component-example
---
name: 'theme-multiple-example'
---
::

### 중첩 테마

여러 Theme 구성 요소를 중첩하여 재정의를 작성합니다. 가장 안쪽의 Theme가 우선 순위를 갖고 오버라이드되지 않은 키는 외부 Theme에서 상속됩니다.

::component-example
---
name: 'theme-nested-example'
---
::

### 명시적 우선 순위

개별 컴포넌트에 prop(`ui` 포함)을 명시적으로 설정하는 것은 항상 Theme 컴포넌트보다 우선합니다.

::component-example
---
name: 'theme-priority-example'
---
::

### 딥 전파

중첩된 깊이에 관계없이 모든 하위 구성요소에서 재지정을 사용할 수 있습니다.

::component-example
---
name: 'theme-deep-example'
---
::

::note
이 예에서 `MyButton`는 `UButton`를 내부적으로 렌더링하는 사용자 정의 구성 요소입니다. 주제 재정의는 전체 구성 요소 트리를 통해 전파되므로 계속 적용됩니다.
::

### Form 구성 요소

Theme 구성 요소를 사용하여 양식 구성 요소 그룹에 일관된 스타일 지정을 적용할 수도 있습니다.

::component-example
---
name: 'theme-form-example'
---
::

::tip
`<UFormField>`, `<UFieldGroup>` 및 `<UAvatarGroup>`는 `size`, `color` 및 `highlight`에 대해 `<UTheme :props>`보다 우선 순위를 유지합니다. 검증 오류는 모든 주제 값보다 `error` 색상을 강제로 적용합니다.
::

### Prose 구성요소

`prose` 네임스페이스를 사용하여 타이포그래피 구성 요소에 테마를 지정합니다. 키는 `prose` 아래에 중첩됩니다(예: `prose.p`, `prose.code`).

::component-example
---
name: 'theme-prose-example'
---
::

## API

### Props (### Props)

:component-props

### 슬롯

:component-slots

## 변경 로그Name

:component-changelog
