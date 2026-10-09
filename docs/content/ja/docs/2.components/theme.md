---
description: テーマ子コンポーネントへのヘッドレスコンポーネント。
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## 使用法

Themeコンポーネントは、すべての子コンポーネントのデフォルトの**slot classes**と**props**を個別に変更することなくオーバーライドします。内部ではVueの`provide`/`inject`メカニズムを使用しているため、オーバーライドはどんな深さでも適用されます。

::note
テーマコンポーネントはHTML要素をレンダリングせず、テーマのオーバーライドを子に提供するだけです。
::

::framework-only
#nuxt
:::tip
アプリレベルのテーマ設定では、代わりに`app.config.ts`ファイルを使用することをお勧めします。
:::

#vue
:::tip
アプリレベルのテーマ設定では、代わりに`vite.config.ts`ファイルを使用することをお勧めします。
:::
::

### Slotクラス

`ui`プロパティを使用して子孫コンポーネントのスロットクラスをオーバーライドします。キーはコンポーネント名camelCaseで、値はそれらのスロットクラスのオーバーライドです。

::component-example
---
name: 'theme-ui-example'
---
::

### Propデフォルトbadge{label="4.8+" class="align-text-top"}

`props`プロパティを使用して、子孫コンポーネントのプロパティのデフォルト値をオーバーライドします。各キーは、そのコンポーネントのプロパティの一部にマップされます。

::component-example
---
name: 'theme-props-example'
---
::

::tip
コンポーネント上の明示的なプロップ例えば`<UButton color="primary" />`は常に`<UTheme :props>`に勝ちます。テーマのデフォルトはプロップが明示的に渡されなかった場合にのみ適用されます。
::

## 例

### 複数コンポーネント

`ui`または`props`の異なるキーを使用して、複数のコンポーネントタイプを一度にテーマにします。

::component-example
---
name: 'theme-multiple-example'
---
::

### ネストされたテーマ

オーバーライドを作成するために複数のテーマコンポーネントをネストします。最も内側のテーマが優先され、オーバーライドされていないキーは外側のテーマから継承されます。

::component-example
---
name: 'theme-nested-example'
---
::

### 明示的優先度

個々のコンポーネントに明示的にプロパティ（`ui`を含む）を設定すると、常にテーマコンポーネントよりも優先されます。

::component-example
---
name: 'theme-priority-example'
---
::

### Deep伝播

オーバーライドは、どれだけ深くネストされているかに関係なく、すべての子孫コンポーネントが使用できます。

::component-example
---
name: 'theme-deep-example'
---
::

::note
この例では、`MyButton`は`UButton`を内部的にレンダリングするカスタムコンポーネントです。テーマオーバーライドはコンポーネントツリー全体を伝播するため、引き続き適用されます。
::

### Formコンポーネント

テーマコンポーネントを使用して、フォームコンポーネントのグループに一貫したスタイルを適用します。

::component-example
---
name: 'theme-form-example'
---
::

::tip
`size`、`color`、`highlight`では、`<UFormField>`、`<UFieldGroup>`、`<UAvatarGroup>`が`<UTheme :props>`よりも優先されます。バリデーションエラーは、`error`の色をテーマ値に強制します。
::

### 散文コンポーネント

`prose`名前空間を使用して、タイポグラフィコンポーネントをテーマにします。キーは`prose`の下にネストされます（例：`prose.p`、`prose.code`）。

::component-example
---
name: 'theme-prose-example'
---
::

## API

### Props

:component-props

### スロット

:component-slots

## Changelog

:component-changelog
