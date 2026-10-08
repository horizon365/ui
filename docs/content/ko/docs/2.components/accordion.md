---
description: 접을 수 있는 패널의 스택 세트입니다.
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: 아코디온
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

##  사용

아코디언 구성 요소를 사용하여 축소 가능한 항목 목록을 표시합니다.

::component-code
---
축소: true
무시하기:
  -  items
  -  ui. content
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  클래스
  -  ui
  -  defaultValue
소품 :
  defaultValue : '0'
  클래스: 'px-4 max-w-lg'
  ui:
    사진: "text-smuted"
  항목:
    - label: 'Nuxt UI는 무료로 사용할 수 있습니까?'
      Nuxt UI는 MIT 라이센스에 따라 완전히 무료이며 오픈 소스입니다. 125 + 구성 요소는 모두가 사용할 수 있습니다. "
    - label: 'Nuxt 없이 Vue와 Nuxt UI를 사용할 수 있습니까?'
      컨텐츠 :'그래! Nuxt에 최적화되어 있지만 Nuxt UI는 Vite 플러그인을 통해 독립형 Vue 프로젝트와 완벽하게 작동합니다. [설치 가이드 ](/docs/getting-started/installation/vue)를 따라 시작할 수 있습니다.'
    - label: 'Nuxt UI 프로덕션 준비가 되어 있습니까?
      콘텐츠: '예! Nuxt UI는 광범위한 테스트, 정기적 업데이트 및 활성 유지 관리를 통해 수천 개의 응용 프로그램에서 프로덕션에 사용됩니다.'
---
::

###  프로젝트

`items`prop을 다음과 같은 속성을 가진 객체의 배열로 사용합니다.

-  @ `label?: string` @ @ {lang="ts-type"} @
- `icon?: string`{lang="ts-type"}
-  @ `trailingIcon?: string` @ {lang="ts-type"} @
-  @ `content?: string` @ @ {lang="ts-type"} @
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
-  @ `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }` @ {lang="ts-type"}

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  class
소품 :
  클래스: 'px-4'
  프로젝트:
    - label: 'Icons'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

###  다중

여러 항목이 동시에 활성화되도록 `type`prop을 `multiple`로 설정합니다. 기본값은 `single`입니다.

::component-code
---
무시하기:
  -  type
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  클래스
소품 :
  클래스: px-4
  type: 'multiple'
  항목:
    - label: '아이콘'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

### Collapsible @ 다운랩 가능

`type`가 `single`인 경우 `collapsible`prop을 `false`로 설정하여 활성 항목이 축소되지 않도록 할 수 있습니다.

::component-code
---
무시하기:
  -  축소 가능
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  클래스
소품 :
  클래스: px-4
  축소 가능:false
  항목:
    - label: 'Icons'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

### 마운트 해제

아코디언이 축소될 때 내용이 마운트 해제되지 않도록 하려면 `unmount-on-hide`prop을 사용합니다. 기본값은 `true`입니다.

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  클래스
소품 :
  클래스: 'px-4'
  unmountOnHide : false
  항목:
    - label: '아이콘'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

::note
DOM을 검사하여 각 항목의 콘텐츠가 렌더링되고 있는지 확인할 수 있습니다.
::

###  비활성 화

`disabled` 등록 정보를 사용하여 아코디언을 비활성화합니다.

항목 객체에서 `disabled` 속성을 사용하여 특정 항목을 비활성화할 수도 있습니다.

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  - class 클래스
소품 :
  클래스: 'px-4'
  사용 안 함:true
  항목:
    - label: '아이콘'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
      사용 안 함:true
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props 또는 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

### 트레일링 아이콘

`trailing-icon`prop을 사용하여 각 항목의 후행 [Icon](/docs/components/icon) 을 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::tip
항목 객체에서 `trailingIcon` 등록 정보를 사용하여 특정 항목에 대한 아이콘을 설정할 수도 있습니다.
::

::component-code
---
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  AccordionItem []
숨기기 (Hide):
  -  class
소품 :
  클래스: px-4
  trailingIcon: 'i-lucide-arrow-down'
  프로젝트:
    - label: '아이콘'
      사진: "i-lucide-smile"
      content: '할 일이 없습니다. @nuxt/icon이 자동으로 처리합니다.'
      trailingIcon: 'i-lucide-plus'
    - label: '색상'
      아이콘 : i-lucide-swatch-book
      내용: 'Tailwind CSS 테마에서 기본 색상과 중립 색상을 선택하십시오.'
    - label: '구성 요소'
      아이콘 : i-lucide-box
      콘텐츠: '당신은 `class`/`ui`props를 사용하거나 app.config.ts에서 구성 요소를 사용자 정의 할 수 있습니다.'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

##  예제

### 활성 항목 제어

활성 항목은 `default-value`prop 또는 `value`와 함께 `v-model` 지시문을 사용하여 제어할 수 있습니다. `value`가 제공되지 않은 경우 기본적으로 인덱스 **가 문자열 **로 지정됩니다.

::component-example
---
이름 : 'accordion-model-value-example'
소품 :
  클래스: 'px-4'
---
::

::tip
`value-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 항목을 일치시키는 키를 변경합니다.
::

::caution
`type="multiple"` 때 `default-value`prop 또는 `v-model` 지시문에 배열을 전달해야 합니다.
::

###  드래그 앤 드롭

Accordion에서 드래그 앤 드롭 기능을 활성화하려면 [`useSortable`](https://vueuse.org/integrations/useSortable/) 컴포블 [`@vueuse/integrations`](https://vueuse.org/integrations/README.html @ ) 을 사용하십시오. 원활한 드래그 앤 드롭 환경을 제공합니다.

::component-example
---
이름: 'accordion-drag-and-drop-example'
---
::

###  바디 슬롯

`#body`슬롯을 사용하여 각 항목의 본문을 사용자 정의합니다.

::component-example
---
이름: 'accordion-body-slot-example'
소품 :
  클래스: px-4
---
::

::tip
`#body` 슬롯에는 미리 정의된 스타일이 포함되어 있으며 [`#content`slot](#with-content-slot) 처음부터 시작하려면 @@를 사용하십시오.
::

###  콘텐츠 슬롯 포함

`#content` 슬롯을 사용하여 각 항목의 콘텐츠를 사용자 정의합니다.

::component-example
---
이름: 'accordion-content-slot-example'
소품 :
  클래스: 'px-4'
---
::

### 사용자 지정 슬롯 사용

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
이름: 'accordion-custom-slot-example'
소품 :
  클래스: 'px-4'
---
::

###  마크다운 내용 포함

`@comark/vue`의 [Markdown](https://comark.dev/rendering/vue) 구성요소를 사용하여 아코디언 항목에서 Markdown을 렌더링할 수 있습니다.

::component-example
---
축소: true
이름: 'accordion-markdown-example'
클래스: 'px-8'
---
::

##  API

###  Props

: 컴포넌트-소품

###  슬롯

:구성요소 - 슬롯

###  에미츠

:구성요소 - 방사

##  테마

:구성요소 - 주제

##  Changelog

:component-changelog 구성요소 변경 로그
