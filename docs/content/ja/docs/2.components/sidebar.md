---
description: '複数のビジュアルバリエーションを持つ折りたたみ式サイドバー。'
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Sidebar.vue
---

## 使用法

サイドバーコンポーネントは、ページコンテンツをプッシュするスタンドアロンの固定サイドバーです。デスクトップではインラインでレンダリングし、折りたたむことができます。モバイルでは、[Modal](/docs/components/modal)、[Slideover](/docs/components/slideoverxph08x、[Drawer](xph01xxph01x)コンポーネントを開きます。

::tip{to="/docs/components/dashboard-sidebar"}
**Sidebar vs DashboardSidebar**このコンポーネントは、任意の場所（チャットパネル、設定、ナビゲーション）にドロップできるシンプルなスタンドアロンのサイドバーです。サイズ変更、ステートの永続性、および[DashboardGroup](/docs/components/dashboard-group)との統合が必要な場合は、代わりに[DashboardSidebar](/docs/components/dashboard-sidebar)を使用してください。
::

サイドバーのコンテンツをカスタマイズするには、`header`、`default`、`footer`スロットを使用します。`v-model:open`ディレクティブはviewportに対応しています。デスクトップでは展開/折りたたみ状態を制御し、モバイルではメニューを制御します。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Variant

サイドバーのビジュアルスタイルを変更するには、`variant`プロパティを使用します。デフォルトは`sidebar`です。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'inset'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Collapsible

`collapsible`プロパティを使用して、サイドバーの折りたたみ動作を変更します。デフォルトは`offcanvas`です。

- `offcanvas`：サイドバーが完全に見えなくなります。
- `icon`：サイドバーがアイコンのみの幅に縮小します。
- `none`：サイドバーが折りたたみできません。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'collapsible'
    label: 'collapsible'
    items:
      - offcanvas
      - icon
      - none
    default: 'icon'
  - name: 'variant'
    label: 'variant'
    items:
      - sidebar
      - floating
      - inset
    default: 'sidebar'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::tip{to="#slots"}
スロットプロップの`state`にアクセスして、サイドバーが折りたたまれたときにコンテンツをカスタマイズできます。
::

### Side

サイドバーの側面を変更するには`side`プロパティを使用します。デフォルトは`left`です。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-props-example'
overflowHidden: true
options:
  - name: 'side'
    label: 'side'
    items:
      - left
      - right
    default: 'right'
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### Title

`title`プロパティを使用してサイドバーヘッダーのタイトルを設定します。

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - ui.container
props:
  title: Navigation
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Description

`description`プロパティを使用して、サイドバーヘッダーの説明を設定します。

::component-code
---
prettier: true
hide:
  - class
  - ui
ignore:
  - title
  - ui.container
props:
  title: Navigation
  description: Browse your workspace
  ui:
    container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### Rail

`rail`プロパティを使用して、サイドバーに薄いインタラクティブエッジを表示し、クリック時に折りたたまれた状態を切り替えます。レールは`collapsible`が`none`でない場合にのみレンダリングされます。

::component-code
---
prettier: true
ignore:
  - title
  - ui.container
hide:
  - ui
  - class
props:
  rail: true
  collapsible: icon
  title: Navigation
  ui.container: h-full
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### 閉じる

`close`プロパティを使用してサイドバーヘッダーに閉じるボタンを表示します。閉じるボタンは`collapsible`が`none`でない場合にのみ表示されます。

[Button](/docs/components/button)コンポーネントの任意のプロパティを渡してカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  rail: true
  collapsible: icon
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

### アイコンを閉じる

`close-icon`プロパティを使用して、閉じるボタン[Icon](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-x`です。

::component-code
---
prettier: true
ignore:
  - title
  - rail
  - side
  - close
  - ui.container
hide:
  - ui
  - class
props:
  close: true
  closeIcon: i-lucide-panel-right-close
  rail: true
  collapsible: icon
  side: right
  title: Navigation
  ui:
    container: h-full
items:
  close:
    - true
    - false
slots:
  default: |

    <Placeholder class="h-full" />
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---

:placeholder{class="h-full"}
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは`app.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.close`キーでグローバルにカスタマイズできます。
:::
::

### Mode

`mode`プロパティを使用して、モバイルでサイドバーメニューのモードを変更します。デフォルトは`slideover`です。

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'sidebar-mode-example'
options:
  - name: 'mode'
    label: 'mode'
    default: 'slideover'
    items:
      - modal
      - slideover
      - drawer
props:
  class: 'w-full'
---
::

::tip{to="#props"}
`menu`プロパティを使用してサイドバーのメニューをカスタマイズできます。選択したモードに応じて適応します。
::

## 例

###  Controlオープンステート

`open`プロパティまたは`v-model:open`ディレクティブを使用してオープン状態を制御できます。デスクトップでは展開/折りたたみ状態を制御し、モバイルではシートメニューのオープン/クローズを制御します。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-open-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
この例では、[`defineShortcuts`](/docs/composables/define-shortcuts)を活用して、kbd{value="O"}を押してサイドバーのオープン状態を切り替えることができます。
::

### オープン状態を永続させる

ページリロード中もサイドバー状態を維持するには、`ref`の代わりにVueUseの[`useLocalStorage`](https://vueuse.org/core/useLocalStorage/)または[`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie)を使用してください。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-persist-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
前の例との唯一の違いは、`ref(true)`を`useLocalStorage('sidebar-open', true)`に置き換えることです。
::

### カスタム幅付き

サイドバーの幅はCSS変数`--sidebar-width`デフォルトは`16rem`で制御されます。折りたたまれたアイコンの幅は`--sidebar-width-icon`デフォルトは`4rem`で制御されます。

CSSまたは`style`属性を使用してインスタンスごとにグローバルに上書きします。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-width-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

### With header

サイドバーを[Header](/docs/components/header)の下に配置するには、`ui` propを使用して`gap`と`container`をカスタマイズします。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-header-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

::note
`--ui-header-height`変数のデフォルト値は`4rem`で、ヘッダーによって使用されます。ナビバーが異なる高さを使用している場合は調整してください。
::

### With AIチャット

右側のサイドバーを[ChatMessages](/docs/components/chat-messages)と[ChatPrompt](/docs/components/chat-prompt)で使用してAIチャットパネルを作成します。

::component-example
---
collapse: true
prettier: true
name: 'sidebar-chat-example'
overflowHidden: true
class: '!p-0 !justify-start h-[500px] contain-[paint] transform-gpu'
---
::

## API

### Props

:component-props

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
