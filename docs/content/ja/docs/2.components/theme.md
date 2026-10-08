---
description: テーマ子コンポーネントへのヘッドレスコンポーネント。
category: layout
links:
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Theme.vue
---

## 使用法

Themeコンポーネントは、すべての子コンポーネントのデフォルトの** slot classes **と** props **を個別に変更することなくオーバーライドします。内部ではVueの`provide`/`inject`メカニズムを使用しているので、オーバーライドはどんな深さでも適用されます。

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

### スロットクラス

子孫コンポーネントのスロットクラスをオーバーライドするには、`ui` propを使用します。キーはコンポーネント名camelCaseで、値はそれらのスロットクラスのオーバーライドです。

::component-example
---
名前'theme—ui—example'
---
::

###  Propデフォルトbadge {label="4.8+" class="align-text-top"}

`props` propを使用して、子孫コンポーネントのプロパティのデフォルト値を上書きします。各キーは、そのコンポーネントのプロパティの一部にマップされます。

::component-example
---
名前'theme—props'
---
::

::tip
コンポーネント上の明示的なプロップ例：`<UButton color="primary" />`は常に`<UTheme :props>`に勝ちます。テーマのデフォルトはプロップが明示的に渡されなかった場合にのみ適用されます。
::

## 例

### 複数のコンポーネント

`ui`または`props`の異なるキーを使用して、複数のコンポーネントタイプを一度にテーマにします。

::component-example
---
名前'theme—multiple'
---
::

### ネストされたテーマ

オーバーライドを作成するために複数のテーマコンポーネントをネストします。最も内側のテーマが優先され、オーバーライドされていないキーは外側のテーマから継承されます。

::component-example
---
name 'theme—nested—example'
---
::

### 明示的優先度

個々のコンポーネントに任意のプロパティ`ui`を含むを明示的に設定すると、常にテーマコンポーネントよりも優先されます。

::component-example
---
名前'テーマ優先度—example'
---
::

### 深い伝播

オーバーライドは、どれだけ深くネストされているかに関係なく、すべての子孫コンポーネントが使用できます。

::component-example
---
名前'テーマ深い例'
---
::

::note
この例では、`MyButton`は、内部で`UButton`をレンダリングするカスタムコンポーネントです。テーマオーバーライドはコンポーネントツリー全体を伝播するため、引き続き適用されます。
::

### フォームコンポーネント

テーマコンポーネントを使用して、フォームコンポーネントのグループに一貫したスタイルを適用します。

::component-example
---
名前'theme—form—example'
---
::

::tip
`<UFormField>`、`<UFieldGroup>`、および`<UAvatarGroup>``size`、`color`、および`highlight`については、`<UTheme :props>`よりも優先されます。検証エラーは、任意のテーマ値に対して`error`の色を強制します。
::

### 散文コンポーネント

タイポグラフィコンポーネントをテーマにするには、`prose`名前空間を使用します。キーは`prose`の下にネストされます（例：`prose.p`、`prose.code`）。

::component-example
---
名前：'テーマ散文例'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

##  Changelog

component—changelog
