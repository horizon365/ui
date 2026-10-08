---
description: 계층 데이터 구조를 표시하고 상호 작용하는 트리 뷰 구성 요소입니다.
category: data
keywords:
  - file tree
  - hierarchy
  - folder tree
links:
  - label: 나무 (Tree)
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/tree
  - label: Github (GitHub)
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Tree.vue
---

##  사용

트리 구성 요소를 사용하여 항목의 계층 구조를 표시합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  항목:
    - label: 'app/'
      defaultExpanded: true : true : 기본값
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본 설정
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

###  프로젝트

`items`prop을 다음 속성을 가진 객체의 배열로 사용합니다.

-  @ `icon?: string` @ @ {lang="ts-type"} @
- `label?: string` {lang="ts-type"}
-  @ `trailingIcon?: string` @ @ {lang="ts-type"} @
-  @ `defaultExpanded?: boolean` @ @ {lang="ts-type"} @
-  @ `disabled?: boolean` @ {lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
-  @ `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void` @ @ {lang="ts-type"} @
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"}
-  @ `class?: any` @ {lang="ts-type"}
-  @ `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }` @ {lang="ts-type"}

::note
각 항목에 고유한 식별자가 필요합니다. `get-key`가 제공되지 않은 경우 구성 요소는 `label`prop을 식별자로 사용합니다. 고유 식별자를 반환하는 `get-key` 함수 prop을 제공하는 것이 좋습니다. 또는 `labelKey`prop을 사용하여 고유 식별자로 사용할 속성을 지정할 수 있습니다.
::

::component-code
---
축소: true
숨기기 (Hide):
  - class 클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  프로젝트:
    - label: 'app/'
      defaultExpanded: true : true : 기본 설정
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본 설정
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

###  다중

`multiple`prop을 사용하여 여러 항목을 선택할 수 있습니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  다중: True
  프로젝트:
    - label: 'app/'
      defaultExpanded: true : true : 기본 설정
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본값
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

###  Nested: badge {label="4.1+" class="align-text-top"}

`nested`prop을 사용하여 트리를 중첩된 구조로 렌더링할지 아니면 플랫 목록으로 렌더링할지 제어합니다. 기본값은 `true`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  - items @ 항목
externalTypes:
  -  TreeItem []
소품 :
  중첩: false
  프로젝트:
    - label: 'app/'
      defaultExpanded: true : true : 기본 설정
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본 설정
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

::note{to="#with-virtualization"}
`nested`이 `false`인 경우 모든 항목이 동일한 레벨에서 들여쓰기로 렌더링되어 계층을 나타냅니다. 이 기능은 가상화 또는 드래그 앤 드롭 기능에 유용합니다.
::

###  색상

`color`prop을 사용하여 트리의 색을 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  색상: 중립
  항목:
    - label: 'app/'
      defaultExpanded: true : true : 기본값
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본값
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

###  크기

`size`prop을 사용하여 트리의 크기를 변경합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  크기: xl
  항목:
    - label: 'app/'
      defaultExpanded: true : true : 기본값
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본 설정
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

### 트레일링 아이콘

`trailing-icon`prop을 사용하여 상위 노드의 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::note
항목에 아이콘이 지정된 경우 해당 아이콘은 항상 이러한 소품보다 우선합니다.
::

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  trailingIcon: 'i-lucide-arrow-down'
  프로젝트:
    - label: 'app/'
      defaultExpanded: true : true : 기본 설정
      1차 하위 항목:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down' 이미지
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본 설정
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
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

###  확장 아이콘

`expanded-icon` 및 `collapsed-icon`props를 사용하여 상위 노드가 확장되거나 축소될 때 상위 노드의 아이콘을 사용자 정의합니다. 기본값은 각각 `i-lucide-folder-open` 및 `i-lucide-folder`입니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  class
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  expandedIcon: 'i-lucide-book-open'
  collapsed Icon: i-lucide-book (i-lucide-book) - 아이루이드 북 (i-lucide-book)
  항목:
    - label: 'app/'
      defaultExpanded: true : true : 기본값
      1차 하위 항목:
        - label: 'composables/'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true : true : 기본값
          1차 하위 항목:
            - label: 'Card.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

::framework-only
#nuxt 코드
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
이러한 아이콘은 `app.config.ts` 아래 `ui.icons.folder` 및 `ui.icons.folderOpen` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::

#vue #vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
이러한 아이콘은 `vite.config.ts` 아래 `ui.icons.folder` 및 `ui.icons.folderOpen` 키에서 전역적으로 사용자 지정할 수 있습니다.
:::
::

###  비활성 화

`disabled`prop을 사용하여 사용자가 트리와 상호 작용하지 않도록 합니다.

::component-code
---
축소: true
숨기기 (Hide):
  -  클래스
무시하기:
  -  items
외부:
  -  items
externalTypes:
  -  TreeItem []
소품 :
  사용 안 함:true
  프로젝트:
    - label: 'app'
      아이콘: 'i-lucide-folder'
      defaultExpanded: true : true : 기본값
      1차 하위 항목:
        - label: 'composables'
          아이콘: 'i-lucide-folder'
          1차 하위 항목:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript' 아이콘: 'i-vscode-icons-file-type-typescript'
        - label: '구성 요소'
          아이콘: 'i-lucide-folder'
          1차 하위 항목:
            - label: '홈'
              아이콘: 'i-lucide-folder'
              1차 하위 항목:
                - label: 'Card.vue'
                  아이콘: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      아이콘: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      아이콘: 'i-vscode-icons-file-type-nuxt'
  클래스: 'w-60'
---
::

::note
또한 `item.disabled`를 사용하여 개별 항목을 비활성화 할 수 있습니다.
::

##  예

###  선택한 항목 제어

선택된 항목을 제어하려면 `default-value`prop 또는 `v-model` 지시문을 사용합니다.

::component-example
---
이름: 'tree-model-value-example'
축소: true
소품 :
  클래스: 'w-60'
---
::

::tip
`get-key`prop을 사용하여 `v-model` 또는 `default-value` 가 제공될 때 각 항목에서 고유 키를 가져오는 함수를 변경합니다.
::

항목을 선택하지 못하게 하려면 `item.onSelect()`{lang="ts-type"} 속성 또는 글로벌 `select` 이벤트를 사용하십시오.

::component-example
---
이름: 'tree-on-select-example'
축소: true
소품 :
  클래스: 'w-60'
---
::

::note
이렇게 하면 상위 항목을 선택하지 않고 확장하거나 축소할 수 있습니다.
::

###  확장 항목 제어

확장된 항목은 `default-expanded`prop 또는 `v-model` 지시문을 사용하여 제어할 수 있습니다.

::component-example
---
이름: 'tree-expanded-example'
축소: true
소품 :
  클래스: 'w-60'
---
::

항목이 확장되는 것을 방지하려면 `item.onToggle()`{lang="ts-type"} 속성 또는 global`toggle` 이벤트를 사용하십시오.

::component-example
---
모델 번호:tree-on-toggle-example
축소: true
소품 :
  클래스: 'w-60'
---
::

::note
이렇게 하면 하위 항목을 확장하거나 축소하지 않고도 상위 항목을 선택할 수 있습니다.
::

###  항목에 체크 박스가 있습니다 : badge{label="4.1+" class="align-text-top"}

`item-leading` 슬롯을 사용하여 [Checkbox](/docs/components/checkbox) 을 항목에 추가할 수 있습니다.`multiple``propagate-select` 및 `bubble-select`props 부모-자식 관계와 `select` 및 `toggle` 다중 선택을 가능하게 합니다. 항목의 선택된 상태와 확장된 상태를 제어하는 이벤트입니다.

::component-example
---
이름 : 'tree-checkbox-items-example'
축소: true
소품 :
  클래스: 'w-60'
---
::

::note
이 예제에서는 `as`prop을 사용하여 `button`에서 `div`로 항목을 변경합니다. [`Checkbox`](/docs/components/checkbox) 또한 @@ 로 렌더링됩니다.
::

###  드래그 앤 드롭 : badge{label="4.1+" class="align-text-top"}

트리에서 드래그 앤 드롭 기능을 활성화하려면 [`useSortable`](https://vueuse.org/integrations/useSortable/) 컴포블을 사용하십시오. 이 통합은 [](https://vueuse.org/integrations/README.html)원활한 드래그 앤 드롭 경험을 제공합니다.

::component-example
---
상품명 : True
축소: true
이름 : 'tree-drag-and-drop-example'
---
::

::note
이 예제에서는 `nested`prop을 `false`로 설정하여 항목을 드래그 앤 드롭할 수 있도록 항목의 평면 목록을 갖습니다.
::

### 가상화 사용: badge{label="4.1+" class="align-text-top"}

`virtualize`prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이 있는 개체로 가상화를 활성화합니다.

::warning
가상화가 활성화되면 트리 구조가 평평해집니다. `nested`prop을 `false`로 설정하는 것과 비슷합니다.
::

::component-example
---
상품명 : True
이름: 'tree-virtualize-example'
소품 :
  클래스: 'w-60'
---
::

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}` {lang="ts-type"}
- `#{{ item.slot }}-leading` {lang="ts-type"}
-  @ `#{{ item.slot }}-label` @ @ {lang="ts-type"}
- `#{{ item.slot }}-trailing` {lang="ts-type"} @

::component-example
---
이름: "tree-custom-slot-example"
축소: true
소품 :
  클래스: 'w-60'
---
::

##  API

###  Props

:컴포넌트 - 소품

###  슬롯

:구성요소 - 슬롯

### Emits @ 에미츠

:구성요소 - 방사

##  테마

:구성요소 주제

##  Changelog

:component-changelog 구성요소 변경 로그
