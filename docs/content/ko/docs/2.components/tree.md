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

## Usage

트리 구성 요소를 사용하여 항목의 계층 구조를 표시합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Items 항목

`items` prop을 다음 속성을 가진 오브젝트 배열로 사용합니다.

- `icon?: string`{lang="ts-type"} Xph037x{lang="ts-type"}
- `label?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `defaultExpanded?: boolean`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- `slot?: string`{lang="ts-type"}
- `children?: TreeItem[]`{lang="ts-type"}
- `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}의 발음을 - `onToggle?: (e: TreeItemToggleEvent<TreeItem>) => void`{lang="ts-type"}
- `onSelect?: (e: TreeItemSelectEvent<TreeItem>) => void`{lang="ts-type"} - {lang="ts-type"}
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, itemWithChildren?: ClassNameValue, link?: ClassNameValue, linkLeadingIcon?: ClassNameValue, linkLabel?: ClassNameValue, linkTrailing?: ClassNameValue, linkTrailingIcon?: ClassNameValue, listWithChildren?: ClassNameValue }`{lang="ts-type"}

::note
각 항목에 고유한 식별자가 필요합니다. `get-key`가 제공되지 않은 경우 구성 요소는 `label` prop을 식별자로 사용합니다. 고유 식별자를 반환하려면 `get-key` 함수 prop을 제공하는 것이 좋습니다. 또는 `labelKey` prop을 사용하여 고유 식별자로 사용할 속성을 지정할 수도 있습니다.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Multiple 다중

`multiple` prop을 사용하여 여러 항목 선택을 허용합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  multiple: true
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Nested: badge{label="4.1+" class="align-text-top"}

`nested` 소품을 사용하여 트리를 중첩된 구조로 렌더링할지 아니면 플랫 목록으로 렌더링할지를 제어합니다. 기본값은 `true`입니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  nested: false
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note{to="#with-virtualization"}
`nested`가 `false`인 경우 모든 항목이 들여쓰기로 동일한 레벨에서 렌더링되어 계층을 나타냅니다. 이 기능은 가상화 또는 드래그 앤 드롭 기능에 유용합니다.
::

### color

`color` Prop을 사용하여 나무의 색상을 변경합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  color: neutral
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### Size 파일

`size` prop을 사용하여 나무의 크기를 변경합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  size: xl
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

### 트레일 아이콘

`trailing-icon` 소품을 사용하여 상위 노드의 후행 [Icon](/docs/components/icon)를 사용자 정의합니다. 기본값은 `i-lucide-chevron-down`입니다.

::note
항목에 아이콘이 지정된 경우 해당 아이콘은 항상 이러한 소품보다 우선합니다.
::

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  trailingIcon: 'i-lucide-arrow-down'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          trailingIcon: 'i-lucide-chevron-down'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`ui.icons.chevronDown` 키 아래의 `app.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`ui.icons.chevronDown` 키 아래의 `vite.config.ts`에서 이 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### 확장 아이콘

`expanded-icon` 및 `collapsed-icon` 소품을 사용하여 상위 노드가 확장되거나 축소될 때 해당 아이콘을 사용자 정의합니다. 기본값은 각각 `i-lucide-folder-open` 및 `i-lucide-folder`입니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  expandedIcon: 'i-lucide-book-open'
  collapsedIcon: 'i-lucide-book'
  items:
    - label: 'app/'
      defaultExpanded: true
      children:
        - label: 'composables/'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components/'
          defaultExpanded: true
          children:
            - label: 'Card.vue'
              icon: 'i-vscode-icons-file-type-vue'
            - label: 'Button.vue'
              icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
`app.config.ts`에서 `ui.icons.folder` 및 `ui.icons.folderOpen` 키로 이러한 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
`vite.config.ts`에서 `ui.icons.folder` 및 `ui.icons.folderOpen` 키 아래에서 이러한 아이콘을 전역적으로 사용자 정의할 수 있습니다.
:::
::

### Disabled 사용 안 함

`disabled` prop을 사용하여 사용자가 트리와 상호 작용하지 않도록 합니다.

::component-code
---
collapse: true
hide:
  - class
ignore:
  - items
external:
  - items
externalTypes:
  - TreeItem[]
props:
  disabled: true
  items:
    - label: 'app'
      icon: 'i-lucide-folder'
      defaultExpanded: true
      children:
        - label: 'composables'
          icon: 'i-lucide-folder'
          children:
            - label: 'useAuth.ts'
              icon: 'i-vscode-icons-file-type-typescript'
            - label: 'useUser.ts'
              icon: 'i-vscode-icons-file-type-typescript'
        - label: 'components'
          icon: 'i-lucide-folder'
          children:
            - label: 'Home'
              icon: 'i-lucide-folder'
              children:
                - label: 'Card.vue'
                  icon: 'i-vscode-icons-file-type-vue'
                - label: 'Button.vue'
                  icon: 'i-vscode-icons-file-type-vue'
    - label: 'app.vue'
      icon: 'i-vscode-icons-file-type-vue'
    - label: 'nuxt.config.ts'
      icon: 'i-vscode-icons-file-type-nuxt'
  class: 'w-60'
---
::

::note
`item.disabled`를 사용하여 개별 항목을 비활성화할 수도 있습니다.
::

## examples 예제

### Control 선택된 항목

`default-value` prop 또는 `v-model` 지시문을 사용하여 선택된 항목을 제어할 수 있습니다.

::component-example
---
name: 'tree-model-value-example'
collapse: true
props:
  class: 'w-60'
---
::

::tip
`get-key` Prop을 사용하여 `v-model` 또는 `default-value`가 제공 될 때 각 항목에서 고유 키를 얻는 데 사용되는 기능을 변경합니다.
::

항목이 선택되지 않도록 하려면 `item.onSelect()`{lang="ts-type"} 속성 또는 전역 `select` 이벤트를 사용할 수 있습니다.

::component-example
---
name: 'tree-on-select-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
이렇게 하면 상위 항목을 선택하지 않고 확장하거나 축소할 수 있습니다.
::

### Control 확장된 항목

`default-expanded` prop 또는 `v-model` 지시문을 사용하여 확장 된 항목을 제어 할 수 있습니다.

::component-example
---
name: 'tree-expanded-example'
collapse: true
props:
  class: 'w-60'
---
::

항목이 확장되지 않도록 하려면 `item.onToggle()`{lang="ts-type"} 속성 또는 전역 `toggle` 이벤트를 사용할 수 있습니다.

::component-example
---
name: 'tree-on-toggle-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
이렇게 하면 하위 항목을 확장하거나 축소하지 않고도 상위 항목을 선택할 수 있습니다.
::

### 항목에 체크 박스가 있습니다 : badge{label="4.1+" class="align-text-top"}

`item-leading` 슬롯을 사용하여 [Checkbox](xph47x)를 항목에 추가할 수 있습니다. `multiple`, `propagate-select` 및 `bubble-select` 소품을 사용하여 상위-하위 관계와 `select` 및 xph44x 이벤트를 사용하여 다중 선택을 활성화하여 항목의 선택 및 확장 상태를 제어합니다.

::component-example
---
name: 'tree-checkbox-items-example'
collapse: true
props:
  class: 'w-60'
---
::

::note
이 예제에서는 [`Checkbox`](/docs/components/checkbox)도 `button`로 렌더링되므로 `as` prop을 사용하여 항목을 `button`에서 `div`로 변경합니다.
::

### 드래그 앤 드롭 사용 : badge{label="4.1+" class="align-text-top"}

[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)의 [`useSortable`https://vueuse.org/integrations/useSortable/) 컴포지블을 사용하여 트리에서 드래그 앤 드롭 기능을 사용할 수 있습니다. 이 통합은 [Sortable.js](https://sortablejs.github.io/Sortable/)를 감싸서 원활한 드래그 앤 드롭 환경을 제공합니다.

::component-example
---
prettier: true
collapse: true
name: 'tree-drag-and-drop-example'
---
::

::note
이 예제에서는 `nested` prop을 `false`로 설정하여 항목을 드래그 앤 드롭할 수 있도록 항목의 평평한 목록을 갖습니다.
::

### 가상화 지원: badge{label="4.1+" class="align-text-top"}

`virtualize` prop을 사용하여 큰 목록에 대해 부울 또는 `{ estimateSize: 32, overscan: 12 }`와 같은 옵션이있는 개체로 가상화를 활성화합니다.

::warning
가상화가 활성화되면 `nested` prop을 `false`로 설정하는 것과 유사하게 트리 구조가 편평화됩니다.
::

::component-example
---
prettier: true
name: 'tree-virtualize-example'
props:
  class: 'w-60'
---
::

### 사용자 지정 슬롯 포함

`slot` 속성을 사용하여 특정 항목을 사용자 정의합니다.

다음과 같은 슬롯에 액세스할 수 있습니다.

- `#{{ item.slot }}-wrapper`{lang="ts-type"}
- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-leading`{lang="ts-type"}
- `#{{ item.slot }}-label`{lang="ts-type"}
- `#{{ item.slot }}-trailing`{lang="ts-type"}

::component-example
---
name: 'tree-custom-slot-example'
collapse: true
props:
  class: 'w-60'
---
::

## API 사용

### Props (### Props)

:component-props

### Slots

:component-slots

### Emits

:component-emits

## 테마

:component-theme

## Changelog 파일

:component-changelog
