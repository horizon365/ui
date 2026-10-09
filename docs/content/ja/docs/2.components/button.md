---
description: リンクとして機能したり、アクションをトリガーしたりできるボタン要素。
category: element
keywords:
  - cta
  - action
  - btn
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Button.vue
---

## 使用法

デフォルトスロットを使用してボタンのラベルを設定します。

::component-code
---
slots:
  default: Button
---
::

### Label

`label`プロパティを使用してButtonのラベルを設定します。

::component-code
---
props:
  label: Button
---
::

### Color

`color`プロパティを使用してボタンの色を変更します。

::component-code
---
props:
  color: neutral
slots:
  default: Button
---
::

### Variant

`variant`プロパティを使用してButtonのバリアントを変更します。

::component-code
---
props:
  color: neutral
  variant: outline
slots:
  default: Button
---
::

### サイズ

ボタンのサイズを変更するには、`size`プロパティを使用します。

::component-code
---
props:
  size: xl
slots:
  default: Button
---
::

### Icon

`icon`プロパティを使用して、Button内に[Icon](/docs/components/icon)を表示します。

::component-code
---
props:
  icon: i-lucide-rocket
  size: md
  color: primary
  variant: solid
slots:
  default: Button
---
::

アイコンの位置を設定するには`leading`と`trailing`の小道具を使用し、位置ごとに異なるアイコンを設定するには`leading-icon`と`trailing-icon`の小道具を使用します。

::component-code
---
props:
  trailingIcon: i-lucide-arrow-right
  size: md
slots:
  default: Button
---
::

`label`をプロップまたはスロットとして使用することはオプションであるため、ボタンをアイコンのみのボタンとして使用できます。

::component-code
---
props:
  icon: i-lucide-search
  size: md
  color: primary
  variant: solid
---
::

### アバター

`avatar`プロパティを使用して、ボタン内の[Avatar](/docs/components/avatar)を表示します。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
slots:
  default: |

    Button
---
::

`label`をプロップまたはスロットとして使用することはオプションですので、Buttonをアバター専用のボタンとして使用できます。

::component-code
---
prettier: true
ignore:
  - avatar.loading
props:
  avatar:
    src: 'https://github.com/nuxt.png'
    loading: lazy
  size: md
  color: neutral
  variant: outline
---
::

### Link

[Link](/docs/components/link#props)コンポーネントから、`to`、`target`などの任意のプロパティを渡すことができます。

::component-code
---
ignore:
  - target
props:
  to: https://github.com/nuxt/ui
  target: _blank
slots:
  default: Button
---
::

Buttonがリンクの場合、または`active`プロパティを使用する場合、`active-color`と`active-variant`プロパティを使用してアクティブな状態をカスタマイズできます。

::component-code
---
prettier: true
ignore:
  - color
  - variant
items:
  activeColor:
    - primary
    - secondary
    - success
    - info
    - warning
    - error
    - neutral
  activeVariant:
    - solid
    - outline
    - soft
    - subtle
    - ghost
    - link
props:
  active: true
  color: neutral
  variant: outline
  activeColor: primary
  activeVariant: solid
slots:
  default: |

    Button
---

ボタン
::

`active-class`および`inactive-class`プロパティを使用してアクティブ状態をカスタマイズすることもできます。

::component-code
---
props:
  active: true
  activeClass: 'font-bold'
  inactiveClass: 'font-light'
slots:
  default: Button
---

ボタン
::

::tip
これらのスタイルは、`app.config.ts`ファイルの`ui.button.variants.active`キーでグローバルに設定できます。

```ts
export default defineAppConfig({
  ui: {
    button: {
      variants: {
        active: {
          true: {
            base: 'font-bold'
          }
        }
      }
    }
  }
})
```
::

### Loading

`loading`プロパティを使用してロードアイコンを表示し、Buttonを無効にします。

::component-code
---
props:
  loading: true
  trailing: false
slots:
  default: Button
---
ボタン
::

`@click` Promiseが保留中の間、ロードアイコンを自動的に表示するには、`loading-auto`プロパティを使用します。

:component-example{name="button-loading-auto-example"}

これは[Form](/docs/components/form)コンポーネントでも動作します。

:component-example{name="button-loading-auto-form-example"}

### Loading Icon

`loading-icon`プロパティを使用して、ロードアイコンをカスタマイズします。デフォルトは`i-lucide-loader-circle`です。

::component-code
---
props:
  loading: true
  loadingIcon: 'i-lucide-loader'
slots:
  default: Button
---
ボタン
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`app.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは`vite.config.ts`の`ui.icons.loading`キーでグローバルにカスタマイズできます。
:::
::

### 無効

`disabled`プロパティを使用してButtonを無効にします。

::component-code
---
props:
  disabled: true
slots:
  default: Button
---

ボタン
::

## サンプル

### `class`プロップ

ボタンの基本スタイルをオーバーライドするには、`class`プロパティを使用します。

::component-code
---
props:
  class: 'font-bold rounded-full'
slots:
  default: Button
---
::

### `ui`プロップ

ボタンのスロットスタイルをオーバーライドするには、`ui`プロパティを使用します。

::component-code
---
prettier: true
ignore:
  - ui
  - color
  - variant
  - icon
props:
  icon: i-lucide-rocket
  color: neutral
  variant: outline
  ui:
    leadingIcon: 'text-primary'
slots:
  default: |

    Button
---
::

## API

### Props

:component-props

::callout{icon="i-simple-icons-mdnwebdocs" to="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes" target="_blank"}
このコンポーネントはすべてのネイティブ`<button>` HTML属性もサポートします。
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/src/runtime/components/Link.vue#L13"}
`Button`コンポーネントは`Link`コンポーネントを拡張したものです。ソースコードはGitHubで確認してください。
::

### スロット

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
