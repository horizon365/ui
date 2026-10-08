---
description: 옵션 리스트에서 선택할 요소입니다.
category: form
keywords:
  - dropdown
  - picker
links:
  - label: 선택
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/select
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Select.vue
---

##  사용

`v-model` 지시문을 사용하여 Select의 값을 제어하거나 `default-value`prop을 사용하여 상태를 제어할 필요가 없을 때 초기 값을 설정합니다.

::component-code
---
상품명 : True
숨기기 (Hide):
  -  클래스
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  항목:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  프로젝트

`items`prop을 문자열, 숫자 또는 부울 배열로 사용합니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

또한 다음 속성을 사용하여 객체 배열을 전달할 수 있습니다.

-  @ `label?: string` @ @ {lang="ts-type"} @
-  @ [ @ `value?: string` @ {lang="ts-type"} @ ]( @ #value-key ) @
- [[`type?: "label" | "separator" | "item"`{lang="ts-type"}](#with-items-type)
- [`icon?: string`{lang="ts-type"} ]( @ #with-icons-in-items @ ) @
-  [ @ `avatar?: AvatarProps` @ {lang="ts-type"} @ @ ]( @ #with-avatar-in-items @ )
-  @ [ @ @ `chip?: ChipProps` @ {lang="ts-type"} @ ]( @ #with-chip-in-items @ )
-  @ `disabled?: boolean` @ @ {lang="ts-type"} @
-  @ `class?: any` @ @ {lang="ts-type"} @
-  @ `ui?: { label?: ClassNameValue, separator?: ClassNameValue, item?: ClassNameValue, itemLeadingIcon?: ClassNameValue, itemLeadingAvatarSize?: ClassNameValue, itemLeadingAvatar?: ClassNameValue, itemLeadingChipSize?: ClassNameValue, itemLeadingChip?: ClassNameValue, itemLabel?: ClassNameValue, itemTrailing?: ClassNameValue, itemTrailingIcon?: ClassNameValue }` @ {lang="ts-type"}

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectItem []
소품 :
  모델 값: 'backlog'
  프로젝트:
    - label: 'Backlog'
      값: '백로그'
    - label: 'Todo'
      value: 'todo' 값
    - label: '진행 중'
      값: "in_progress"
    - label: '완료'
      값: '완료'
  클래스: 'W-48'
---
::

::caution
객체를 사용할 때 `v-model` 지시문 또는 `default-value`prop에서 객체의 `value` 속성을 참조해야 합니다.
::

또한 배열 배열을 `items`prop에 전달하여 개별 항목 그룹을 표시할 수 있습니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  클래스
외부:
  - items @ 항목
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Apple'
  항목:
    -  - 애플
      -  바나나
      - Blueberry @ 블루베리
      -  Grapes
      -  Pineapple
    -  - 오베르진
      -  브로콜리
      -  Carrot
      - Courgette -  코제트
      -  Leek
  클래스: 'W-48'
---
::

###  값 키

`value-key`prop.Defaults를 사용하여 값을 설정하는 데 사용되는 속성을 변경할 수 있습니다.You can change the property that is used to set the value by using the `value-key`prop.Defaults to `value`

::component-code
---
무시하기:
  - modelValue - modelValue 이미지
  -  valueKey
  -  items
  -  클래스
외부:
  -  items
  - modelValue - modelValue
externalTypes:
  -  SelectItem []
소품 :
  모델 값: 'backlog'
  valueKey : 'id'
  항목:
    - label: 'Backlog'
      ID: 'Backlog'
    - label: 'Todo'
      id: 'todo' 입니다.
    - label: '진행 중'
      id: 'in_progress' 입니다.
    - label: '완료'
      사진: "done"
  클래스: 'W-48'
---
::

###  다중

`multiple`prop을 사용하여 여러 개의 선택을 허용하면 선택된 항목은 트리거에서 쉼표로 구분됩니다.

::component-code
---
상품명 : True
무시하기:
  - modelValue - modelValue 이미지
  -  items
  -  multiple
  -  클래스
외부:
  -  items
  - modelValue - modelValue
소품 :
  modelValue:
    - Backlog @ 백로그
    -  Todo
  다중: True
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::caution
배열을 `default-value`prop 또는 `v-model` 지시문으로 전달해야 합니다.
::

### 자리 표시자

`placeholder`prop 을 사용하여 자리 표시자 텍스트를 설정합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  -  클래스
외부:
  -  items
소품 :
  자리 표시자: '상태 선택'
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  컨텐츠

`content`prop을 사용하여 `align` 또는 `side`와 같이 Select 콘텐츠가 렌더링되는 방식을 제어합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
프로젝트:
  content.align:
    -  start
    -  센터
    -  끝
  content.side:
    -  오른쪽
    -  왼쪽
    -  top
    -  아래
소품 :
  modelValue: 'Backlog'
  컨텐츠:
    정렬: 중심
    측면: 맨 아래
    사이드 오프셋: 8
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::note
이러한 옵션은 `content.position`가 `popper`인 경우에만 적용됩니다.
::

### 위치: badge{label="4.7+" class="align-text-top"}

`content.position`prop을 사용하여 Select 콘텐츠가 트리거에 상대적으로 배치되는 방법을 제어합니다. 기본값은 `popper`로 설정되며, 다른 Popovers와 마찬가지로 콘텐츠를 배치합니다. `item-aligned`로 설정하면 콘텐츠가 선택된 항목에 정렬됩니다(기본 macOS 메뉴와 유사).

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue 이미지
프로젝트:
  content.position:
    - 항목 정렬
    - popper @ 팝퍼
소품 :
  modelValue: 'Todo'
  컨텐츠 :
    위치:항목 정렬
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  Arrow

`arrow`prop을 사용하여 선택에 화살표를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue
  -  class
  -  arrow
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  화살표: True
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  색상

선택에 초점을 맞추고 있을 때 `color`prop을 사용하여 링 색상을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  색상: 중립
  강조 표시: True
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::note
`highlight`prop은 초점 상태를 보여주기 위해 사용됩니다. 검증 오류가 발생할 때 내부적으로 사용됩니다.
::

###  변형

`variant`prop 을 사용하여 Select 의 변형을 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  색상: 중립
  변형: 미묘함
  강조 표시:거짓
  프로젝트:
    -  Backlog
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  크기

`size`prop을 사용하여 Select의 크기를 변경합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  모델값: 'Backlog'
  크기: xl
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

###  아이콘

`icon`prop을 사용하여 Select 내부에 [Icon](/docs/components/icon)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  아이콘: 'i-lucide-search'
  크기: md
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

### 트레일링 아이콘

`trailing-icon`prop을 사용하여 후행 [Icon](/docs/components/icon)로 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  trailingIcon: 'i-lucide-arrow-down'
  크기: md
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.chevronDown` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### 선택한 아이콘

항목을 선택할 때 `selected-icon`prop을 사용하여 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-check`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  selectedIcon: 'i-lucide-flame'
  크기: md
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt #nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.check` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

### Avatar 이미지

`avatar`prop을 사용하여 Select 내부에 [Avatar](/docs/components/avatar)를 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
  - avatar.loading - avatar.loading
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Nuxt'
  아바타 (Avatar):
    src: 'https://github.com/nuxt.png'
    로드: Lazy
  항목:
    -  Nuxt
    - NuxtHub @ NuxtHub
    - NuxtLabs @ NuxtLabs -  NuxtLabs @ NuxtLabs @ NuxtLabs
    - Nuxt 모듈
    - Nuxt 커뮤니티
  클래스: 'W-48'
---
::

###  로딩 중

`loading`prop을 사용하여 선택에 로드 아이콘을 표시합니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  class
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  로드: true
  후행: false
  프로젝트:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

### Loading Icon (아이콘 로드)

`loading-icon`prop을 사용하여 로드 아이콘을 사용자 정의합니다. 기본값은 `i-lucide-loader-circle`입니다.

::component-code
---
상품명 : True
무시하기:
  -  items
  - modelValue - modelValue 이미지
  -  클래스
외부:
  -  items
  - modelValue - modelValue 이미지
소품 :
  modelValue: 'Backlog'
  로드: true
  loadingIcon: 'i-lucide-loader'
  항목:
    - Backlog @ 백로그
    -  Todo
    -  진행 중
    -  완료
  클래스: 'W-48'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이 아이콘은 `app.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이 아이콘은 `vite.config.ts` 아래 `ui.icons.loading` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  비활성 화

`disabled`prop을 사용하여 선택을 비활성화합니다.

::component-code
---
상품명 : True
무시하기:
  -  프로젝트
  - 자리 표시자
  -  클래스
외부:
  -  items
소품 :
  사용 안 함:true
  자리 표시자: '상태 선택'
  항목:
    - Backlog @ 백로그
    -  Todo
    - 진행 중
    -  완료
  클래스: 'W-48'
---
::

##  예제

###  항목 유형

`type` 속성을 `separator`와 함께 사용하여 항목 사이의 구분 기호를 표시하거나 `label` 태그를 표시할 수 있습니다.

::component-code
---
축소: true
무시하기:
  - modelValue - modelValue 이미지
  -  프로젝트
  -  클래스
외부:
  -  프로젝트
  - modelValue - modelValue 이미지
externalTypes:
  -  SelectItem []
소품 :
  모델값: 'Apple'
  프로젝트:
    - type: 'label'
      사진: "Fruits"
    -  애플
    -  바나나
    - Blueberry @ 블루베리
    -  Grapes
    -  파인애플
    - type: 'separator'
    - type: 'label'
      사진: "vegetables"
    - Aubergine - Aubergine
    -  브로콜리
    -  Carrot
    - Courgette -  코제트
    -  Leek
  클래스: 'W-48'
---
::

###  항목에 아이콘이 있습니다.

`icon` 속성을 사용하여 [Icon](/docs/components/icon)를 항목 내부에 표시할 수 있습니다.

::component-example
---
축소: true
name: 'select-items-icon-example' 선택-항목-아이콘-예
---
::

::note
이 예제에서는 선택한 항목의 `value` 속성에서 아이콘을 계산합니다.
::

::tip
또한 `#leading`슬롯을 사용하여 선택한 아이콘을 표시할 수 있습니다.
::

###  항목에 아바타가 있습니다.

`avatar` 속성을 사용하여 [Avatar](/docs/components/avatar)를 항목 내부에 표시할 수 있습니다.

::component-example
---
축소: true
name: 'select-items-avatar-example' 선택 항목-avatar-example'
---
::

::note
이 예제에서는 선택한 항목의 `value` 속성에서 아바타를 계산합니다.
::

::tip
또한 `#leading`slot을 사용하여 선택한 아바타를 표시할 수 있습니다.
::

###  칩 항목

`chip` 속성을 사용하여 항목 내부에 [Chip](/docs/components/chip)를 표시할 수 있습니다.

::component-example
---
축소: true
name: 'select-items-chip-example' 선택항목-칩-예제
---
::

::note
이 예제에서는 `#leading`슬롯을 사용하여 선택된 칩을 표시합니다.
::

###  열린 상태 제어

`default-open`prop 또는 `v-model:open` 지시문을 사용하여 열린 상태를 제어할 수 있습니다.

::component-example
---
이름 : 'select-open-example'
---
::

::note
이 예에서는 [`defineShortcuts`](/docs/composables/define-shortcuts)를 사용하여 선택을 전환할 수 있습니다. kbd{value="O"} 키를 눌러 선택을 전환할 수 있습니다.
::

### 회전 아이콘

다음은 선택의 열린 상태를 나타내는 회전 아이콘이 있는 예제입니다.

::component-example
---
이름: 'select-icon-example'
---
::

### 가져온 항목과 함께

API에서 항목을 가져와서 선택에서 사용할 수 있습니다.

::component-example
---
name: 'select-fetch-example' (선택-fetch-example)'
축소: true
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하여 메뉴가 열릴 때만 데이터를 가져오므로 페이지 로드 시 불필요한 API 호출을 피할 수 있습니다.
::

### 무한 스크롤 : badge{label="4.4+" class="align-text-top"}

사용자가 스크롤할 때 더 많은 데이터를 로드하려면 [`useInfiniteScroll`](https://vueuse.org/core/useInfiniteScroll/)컴포지블을 사용하십시오.

::component-example
---
상품명 : True
축소: true
강조 표시:
  -  41
  -  51
overflowHidden: true
이름: 'select-infinite-scroll-example'
---
::

::note
이 예제에서는 `useLazyFetch`와 `immediate: false`를 사용하므로 사용자가 스크롤할 때만 데이터가 로드됩니다.
::

###  전체 콘텐츠 너비

`ui.content` 슬롯에 `min-w-fit` 클래스를 추가하여 항목의 전체 너비로 콘텐츠를 확장할 수 있습니다.

::component-example
---
name: 'select-content-width-example' 선택-내용-너비-예
축소: true
---
::

::tip
또한 `app.config.ts`에서 전체적으로 콘텐츠 너비를 변경할 수 있습니다.

```
export default defineAppConfig({
  ui: {
    select: {
      slots: {
        content: 'min-w-fit'
      }
    }
  }
})
```
::

##  API

### Props 이미지

:컴포넌트 - 소품

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
이 컴포넌트는 모든 네이티브 `<button>`HTML 속성을 지원합니다.
::

###  슬롯

:컴포넌트 - 슬롯

###  에미츠

:구성요소 - 방출

###  노출

템플릿 참조를 통해 컴포넌트에 액세스하는 경우 다음을 사용할 수 있습니다.

| 이름 (Name)| 유형 (Type)|
| ---- | ---- |
| `triggerRef` @ {lang="ts-type"} @ @|`Ref<HTMLButtonElement \| null>`{lang="ts-type"}|
| `viewportRef` @ {lang="ts-type"}| `Ref<HTMLDivElement \| null>` {lang="ts-type"}|

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
