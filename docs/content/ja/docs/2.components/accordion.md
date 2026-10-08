---
description: 折りたたみ式パネルの積み重ねセット。
category: data
keywords:
  - disclosure
  - collapse
  - faq
  - expansion panel
links:
  - label: アコーディオン
    icon: i-custom-reka-ui
    to: https://reka-ui.com/docs/components/accordion
  - label: サイトマップ
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Accordion.vue
---

## 使用法

アコーディオンコンポーネントを使用して、折りたたみ可能なアイテムのリストを表示します。

::component-code
---
崩壊真
無視
  - アイテム
  メール：info @ ui.content
外部
  - アイテム
externalTypes
  - アコーディオンアイテム[]
隠す
  - クラス
  -  ui
  -  defaultValue
小道具
  defaultValue '0'
  クラス'px—4 max—w—lg'
  UI
    content 'テキストミュート'
  アイテム
    -  label 'Nuxt UIは無料で使えますか？'
      content 'はい！Nuxt UIはMITライセンスのもとで完全にフリーでオープンソースです。125以上のコンポーネントはすべて誰でも利用できます。'
    -  label 'NuxtなしでVueでNuxt UIを使えますか？'
      内容：『 Yes！Nuxt用に最適化されていますが、Nuxt UIはViteプラグインを介してスタンドアロンのVueプロジェクトと完全に連携します。[インストールガイド](/docs/getting-started/installation/vue)に従って開始してください。
    -  label 'Nuxt UIはプロダクション対応ですか？'
      content 'はい！Nuxt UIは、広範なテスト、定期的なアップデート、アクティブなメンテナンスを経て、何千ものアプリケーションで運用されています。'
---
::

### アイテム

`items` propを、次のプロパティを持つオブジェクトの配列として使用します。

- `label?: string`{lang="ts-type"}
- `icon?: string`{lang="ts-type"}
- `trailingIcon?: string`{lang="ts-type"}
- `content?: string`{lang="ts-type"}
- `value?: string`{lang="ts-type"}
- `disabled?: boolean`{lang="ts-type"}
- [`slot?: string`{lang="ts-type"}](#with-custom-slot)
- `class?: any`{lang="ts-type"}
- `ui?: { item?: ClassNameValue, header?: ClassNameValue, trigger?: ClassNameValue, leadingIcon?: ClassNameValue, label?: ClassNameValue, trailingIcon?: ClassNameValue, content?: ClassNameValue, body?: ClassNameValue }`{lang="ts-type"}

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  - アコーディオンアイテム[]
隠す
  - クラス
小道具
  クラス'px—4'
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
    -  label 'Components'
      アイコン'i—lucide—box'
      content 'コンポーネントをカスタマイズするには、`class`/`ui` propsを使用するか、app.config.tsで使用できます。'
---
::

### 複数

`type`プロパティを`multiple`に設定して、複数のアイテムを同時にアクティブにできるようにします。デフォルトは`single`です。

::component-code
---
無視
  - タイプ
  - アイテム
外部
  - アイテム
externalTypes
  - アコーディオンアイテム[]
隠す
  - クラス
小道具
  クラス'px—4'
  タイプ'複数'
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
    -  label 'Components'
      アイコン'i—lucide—box'
      content '`class`/`ui` propsを使用するか、app.config.tsでコンポーネントをカスタマイズできます。'
---
::

###  Collapsible

`type`が`single`の場合、`collapsible` propを`false`に設定して、アクティブなアイテムが折りたたまれないようにできます。

::component-code
---
無視
  - 折りたたみ可能
  - アイテム
外部
  - アイテム
externalTypes
  - アコーディオンアイテム[]
隠す
  - クラス
小道具
  クラス'px—4'
  折りたたみ式false
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
    -  label 'Components'
      アイコン'i—lucide—box'
      content 'コンポーネントをカスタマイズするには、`class`/`ui` propsを使用するか、app.config.tsで使用できます。'
---
::

### アンマウント

アコーディオンが折りたたまれたときにコンテンツがアンマウントされないようにするには、`unmount-on-hide`プロパティを使用します。デフォルトは`true`です。

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  AccordionItem []
隠す
  - クラス
小道具
  クラス'px—4'
  unmountOnHide false
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
    -  label 'Components'
      アイコン'i—lucide—box'
      content '`class`/`ui` propsまたはapp.config.tsでコンポーネントをカスタマイズできます。'
---
::

::note
DOMを検査して、各項目のコンテンツがレンダリングされていることを確認できます。
::

### 無効

アコーディオンを無効にするには、`disabled`プロパティを使用します。

itemオブジェクトの`disabled`プロパティを使用して、特定の項目を無効にすることもできます。

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  AccordionItem []
隠す
  - クラス
小道具
  クラス'px—4'
  無効true
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
      無効true
    -  label 'Components'
      アイコン'i—lucide—box'
      content 'コンポーネントをカスタマイズするには、`class`/`ui` propsまたはapp.config.tsを使用します。'
---
::

### トレーリングアイコン

`trailing-icon`プロパティを使用して、各アイテムの末尾の[ Icon ](/docs/components/icon)をカスタマイズします。デフォルトは`i-lucide-chevron-down`です。

::tip
itemオブジェクトの`trailingIcon`プロパティを使用して、特定のアイテムにアイコンを設定することもできます。
::

::component-code
---
無視
  - アイテム
外部
  - アイテム
externalTypes
  -  AccordionItem []
隠す
  - クラス
小道具
  クラス'px—4'
  trailingIcon 'i—lucide—arrow—down'
  アイテム
    -  label 'アイコン'
      アイコン'i—lucide—smile'
      content：'あなたは何もすることはありません。@ nuxt/iconが自動的に処理します。
      trailingIcon 'i—lucide'
    -  label 'Colors'
      アイコン'i—lucide—swatch—book'
      content：'Tailwind CSSテーマから原色とニュートラルカラーを選択してください。
    -  label 'コンポーネント'
      アイコン'i—lucide—box'
      content 'コンポーネントをカスタマイズするには、`class`/`ui` propsまたはapp.config.tsを使用します。'
---
::

::framework-only
#nuxt
:::tip{to="/docs/getting-started/integrations/icons/nuxt#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`app.config.ts`でグローバルにカスタマイズできます。
:::

#vue
:::tip{to="/docs/getting-started/integrations/icons/vue#theme"}
このアイコンは、`ui.icons.chevronDown`キーの下の`vite.config.ts`でグローバルにカスタマイズできます。
:::
::

## 例

###  Controlアクティブな項目

`default-value` propまたは`v-model`ディレクティブを使用して、アクティブなアイテムを制御できます。`value`が指定されていない場合、デフォルトでは**としてインデックス**になります。

::component-example
---
名前'accordion—model—value example'
小道具
  クラス'px—4'
---
::

::tip
`v-model`または`default-value`が指定されたときにアイテムにマッチするために使用されるキーを変更するには、`value-key` propを使用します。
::

::caution
`type="multiple"`の場合は、`default-value` propまたは`v-model`ディレクティブに配列を渡すようにしてください。
::

### ドラッグアンドドロップで

アコーディオンでドラッグ&ドロップ機能を有効にするには、[`useSortable`](https://vueuse.org/integrations/useSortable/)[`@vueuse/integrations`](https://vueuse.org/integrations/README.html)から構成可能な[[ Sortable.js ](https://sortablejs.github.io/Sortable/)シームレスなドラッグアンドドロップ体験を提供します

::component-example
---
名前'アコーディオンドラッグアンドドロップサンプル'
---
::

### ボディスロット付き

`#body`スロットを使用して、各アイテムの本体をカスタマイズします。

::component-example
---
名前'accordion—body slot—example'
小道具
  クラス'px—4'
---
::

::tip
`#body`スロットにはいくつかの定義済みのスタイルが含まれています。ゼロから始めたい場合は、[`#content` slot ](#with-content-slot)を使用してください。
::

### コンテンツスロット付き

`#content`スロットを使用して、各項目の内容をカスタマイズします。

::component-example
---
名前'accordion—content—slot—example'
小道具
  クラス'px—4'
---
::

### カスタムスロット付き

特定の項目をカスタマイズするには、`slot`プロパティを使用します。

以下のスロットにアクセスできます：

- `#{{ item.slot }}`{lang="ts-type"}
- `#{{ item.slot }}-body`{lang="ts-type"}

::component-example
---
名前'accordion—custom—slot example'
小道具
  クラス'px—4'
---
::

### マークダウンコンテンツ付き

`@comark/vue`の[ Markdown ](https://comark.dev/rendering/vue)コンポーネントを使用して、アコーディオンアイテムのマークダウンをレンダリングできます。

::component-example
---
崩壊真
名前'accordion—markdown'
クラス'px—8'
---
::

##  API

###  Props

component—props

### スロット

コンポーネントスロット

### エミッツ

component—emits

## テーマ

コンポーネントテーマ

##  Changelog

component—changelog
