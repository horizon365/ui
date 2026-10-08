---
description: Un éditeur de texte enrichi basé sur TipTap avec prise en charge des types de contenu Markdown, HTML et JSON.
category: editor
links:
  - label: Tiptap
    icon: i-custom-tiptap
    to: https://tiptap.dev/
  - label: GitHub à
    icon: i-simple-icons-github
    to: https://github.com/nuxt/ui/blob/v4/src/runtime/components/Editor.vue
---

@@ph000@utilisation

Le composant Éditeur offre une puissante expérience d'édition de texte enrichi construite sur [TipTap](https://tiptap.dev/). Il prend en charge plusieurs formats de contenu (JSON, HTML, Markdown), barres d'outils personnalisables, réorganisation de blocs par glisser-déposer, commandes slash, mentions, sélecteur d'emoji et architecture extensible pour ajouter des fonctionnalités personnalisées.

::component-example
---
Source: Faux
Élevé: True
nom: 'exemple éditeur'
class: 'relative h-176 overflow-y-auto! p-0 rounded-b-md'
---
::

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt/ui/blob/v4/docs/app/components/content/examples/editor/EditorExample.vue" aria-label="Voir le code source"}
Cet exemple illustre un composant Editor prêt à la production. Consultez le code source sur GitHub.
::

::warning
Si vous rencontrez des erreurs liées à prosemirror telles que `Adding different instances of a keyed plugin` lors de l'utilisation du composant Editor ou de ses extensions, vous devrez peut-être ajouter des paquets prosemirror à la liste `vite.optimizeDeps.include` dans votre fichier `nuxt.config.ts`.

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor'
      ]
    }
  }
})
```
::

@@24@contenu

Utilisez la directive `v-model` pour contrôler la valeur de l'Éditeur.

::component-code
---
Élevé: True
Étiquette: true
Collapse: vrai
Ignorer:
  - modelValue.type
  - modelValue.content
  @@ph028@classe
Extérieur:
  - modèleValeur
Catégorie: P-8
Props:
  Modèle:
    Catégorie:"Doc"
    contenu:
      - type:'en-tête'
        Attractions:
          Niveau: 1
        contenu:
          - type:'texte'
            Étiquette:"Hello World"
      - type:'paragraphe'
        contenu:
          - type:'texte'
            Texte: "Ceci est un"
          - type:'texte'
            Marques:
              - type:'gras'
            Étiquette: rich text
          - type:'texte'
            Texte: "Editeur".
  classe: 'w-full min-h-21'
---
::

### Type de contenu

L'éditeur détecte automatiquement le format de contenu basé sur le type `v-model`: les chaînes sont traitées comme `html`{lang="ts-type"} et les objets comme `json`{lang="ts-type"}.

Vous pouvez définir explicitement le format en utilisant le prop `content-type`:`json`{lang="ts-type"},`html`{lang="ts-type"}, ou `markdown`{lang="ts-type"}.

::component-code
---
Élevé: True
Étiquette: true
ignorer:
  - modèleValeur
  - contentType
  @@ph052@classe
Extérieur:
  - modèleValeur
Catégorie: P-8
Props:
  Modèle:|
    <h1>Bonjour Monde
    <p>Ceci est un <strong>texte riche </strong> editor.</p>
  Type de contenu: 'html'
  classe: 'w-full min-h-21'
---
::

@@ph060@@Résultats

L'éditeur inclut les extensions suivantes par défaut:

- [**StarterKit**](#starter-kit)-Fonctionnalités d'édition de base (gras, italique, titres, listes, etc.))
- [**Placeholder**](#placeholder)-Afficher le texte de l'espace réservé (lorsque l'espace réservé est fourni)
- **Image**-Insérer et afficher des images
- **Mention**-Ajouter @ mentionne le support
- **Markdown**-analyse et sérialisation du markdown (lorsque le type de contenu est markdown)

::note
Chaque extension intégrée peut être configurée à l'aide de son prop correspondant (`starter-kit`,`placeholder`,`image`,`mention`,`markdown`) pour personnaliser son comportement avec les options TipTap.
::

Vous pouvez utiliser la prop `extensions` pour ajouter des extensions TipTap supplémentaires afin d'améliorer les capacités de l'éditeur:

```vue
<script setup lang="ts">
import { Emoji } from '@tiptap/extension-emoji'
import { TextAlign } from '@tiptap/extension-text-align'

const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :extensions="[
      Emoji,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ]"
  />
</template>
```

::tip{to="#with-image-upload"}
Consultez l'exemple de téléchargement d'image pour créer des extensions TipTap personnalisées.
::

### Placeholder

Utilisez la prop `placeholder` pour définir un texte d'espace réservé qui s'affiche dans les paragraphes vides.

::component-code
---
Élevé: True
Étiquette: true
ignorer:
  - modèleValeur
  - contentType
  @@ph114@@placeholder
  @@classe 115
Extérieur:
  - modelValeur
Catégorie: P-8
Props:
  Modèle:''
  placeholder: "Commencez à écrire..."
  classe: 'w-full min-h-7'
---
::

::note
Le prop `placeholder` accepte une chaîne ou un objet avec [PlaceholderOptions](https://tiptap.dev/docs/editor/extensions/functionality/placeholder) et une propriété additionnelle `mode`:
- `everyLine`: Affiche l'espace réservé sur chaque ligne vide lorsqu 'elle est focalisée (par défaut).
- `firstLine`: Affiche l'espace réservé uniquement sur la première ligne lorsque l'éditeur est vide.

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" />
</template>
```
::

::tip
Par défaut, les espaces réservés apparaissent uniquement sur les nœuds vides de niveau supérieur. Pour afficher les espaces réservés dans des éléments imbriqués tels que des éléments de liste, définissez `includeChildren` sur `true`:

```vue
<template>
  <UEditor :placeholder="{ placeholder: 'Start writing...', includeChildren: true }" />
</template>
```
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/placeholder" target="_blank"}
En savoir plus sur l'extension Placeholder dans la documentation de TipTap.
::

### Kit de démarrage

Utilisez le prop `starter-kit` pour configurer l'extension TipTap StarterKit intégrée qui inclut des fonctionnalités d'éditeur courantes telles que gras, italique, en-têtes, listes, citations de bloc, blocs de code, etc.

```vue
<script setup lang="ts">
const value = ref('<h1>Hello World</h1>\n')
</script>

<template>
  <UEditor
    v-model="value"
    :starter-kit="{
      blockquote: false,
      headings: {
        levels: [1, 2, 3, 4]
      },
      dropcursor: {
        color: 'var(--ui-primary)',
        width: 2
      },
      link: {
        openOnClick: false
      }
    }"
  />
</template>
```

::tip
Définissez `starter-kit` à `false` pour un éditeur de texte brut. Il conserve les nœuds essentiels (paragraphe, texte, historique) et désactive toutes les fonctionnalités de mise en forme telles que gras, italique, titres, listes, code, blockquote, liens et règles horizontales.
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/functionality/starterkit" target="_blank"}
En savoir plus sur l'extension StarterKit dans la documentation TipTap.
::

@167@167@167@167

Lorsque vous ajoutez une propriété `kind` à un élément [EditorToolbar](/docs/components/editor-toolbar) ou [EditorSuggestionMenu](/docs/components/editor-suggestion-menu), le gestionnaire correspondant exécute la commande TipTap et gère son état.(actifs, handicapés, etc.).

#### Gestionnaires par défaut

Le composant Éditeur fournit ces gestionnaires par défaut, que vous pouvez référencer dans la barre d'outils ou les éléments de menu de suggestion en utilisant la propriété `kind`:

| Handler était| Description| Utilisation|
|---------|-------------|-------|
| @@ph181 @| Basculer les marques de texte (gras, italique, grève, code, soulignement)| Nécessite la propriété `mark` dans l'article|
| @@ph182@| Définir l'alignement du texte (gauche , centre , droite , justifier)| Nécessite la propriété`align`dans l'élément|
| @@| Toggle niveaux de titre (1 - 6)| Nécessite la propriété`level`dans l'élément|
| @@ph188@@@ph189| Ajouter , éditer ou supprimer des liens| Indiquer l'URL si elle n'est pas fournie|
| @@| Insérer images| Indiquer l'URL si elle n'est pas fournie|
| @@| Toggle blockquotes à||
| @@| Toggle bullet listes| Gestion des conversions liste|
| @@| Toggle listes ordonnées| Gestion des conversions liste|
| @@| Toggle listes de tâches| Gestion des conversions liste|
| @@| Toggle blocs de code||
| @@| Insérer des règles horizontales||
| @@| Format de paragraphe||
| @@| Undo dernier changement||
| @@ph208@@@ph209@| Redo dernier changement undone||
| @@| Supprimer tout formatage| Fonctionne avec sélection ou position|
| @@| Dupliquer le noeud| Nécessite la propriété`pos`dans l'élément|
| @@| Découvrez Node| Nécessite la propriété`pos`dans l'élément|
| @@| Déplacer un node vers le haut| Nécessite la propriété`pos`dans l'article|
| @@| Déplacer un noeud vers le bas| Nécessite la propriété`pos`dans l'élément|
| @@| Menu de suggestions Trigger| Insérer le caractère`/`|
| @@227@@229| Menu Trigger mentionné| Insérer le caractère`@`|
| @@| Déclencheur Emoji Picker| Insérer le caractère`:`|

::warning
Les gestionnaires`taskList`et`textAlign`ne fonctionnent que lorsque leurs extensions respectives sont installées , car ils ne sont pas inclus dans l'Éditeur par défaut .
::

Voici comment utiliser les gestionnaires par défaut dans la barre d'outils ou les éléments de menu de suggestion :

```vue
<script setup lang="ts">
import type { EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const items: EditorToolbarItem[] = [
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  { kind: 'mark', mark: 'italic', icon: 'i-lucide-italic' },
  { kind: 'heading', level: 1, icon: 'i-lucide-heading-1' },
  { kind: 'heading', level: 2, icon: 'i-lucide-heading-2' },
  { kind: 'textAlign', align: 'left', icon: 'i-lucide-align-left' },
  { kind: 'textAlign', align: 'center', icon: 'i-lucide-align-center' },
  { kind: 'bulletList', icon: 'i-lucide-list' },
  { kind: 'orderedList', icon: 'i-lucide-list-ordered' },
  { kind: 'blockquote', icon: 'i-lucide-quote' },
  { kind: 'link', icon: 'i-lucide-link' }
]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

#### Gestionnaire personnalisé

Utilisez la prop`handlers`pour étendre ou remplacer les gestionnaires par défaut . Les gestionnaires personnalisés sont fusionnés avec les gestionnaires par défaut , vous pouvez donc ajouter de nouvelles actions ou modifier le comportement existant .

Chaque gestionnaire implémente l'interface `EditorHandler`{lang="ts-type"}:

```ts
interface EditorHandler {
  /* Checks if the command can be executed in the current editor state */
  canExecute: (editor: Editor, item?: any) => boolean
  /* Executes the command and returns a Tiptap chain */
  execute: (editor: Editor, item?: any) => any
  /* Determines if the item should appear active (used for toggle states) */
  isActive: (editor: Editor, item?: any) => boolean
  /* Optional additional check to disable the item (combined with `canExecute`) */
  isDisabled?: (editor: Editor, item?: any) => boolean
}
```

Voici un exemple de création de gestionnaires personnalisés:

```vue
<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import type { EditorCustomHandlers, EditorToolbarItem } from '@nuxt/ui'

const value = ref('<h1>Hello World</h1>\n')

const customHandlers = {
  highlight: {
    canExecute: (editor: Editor) => editor.can().toggleHighlight(),
    execute: (editor: Editor) => editor.chain().focus().toggleHighlight(),
    isActive: (editor: Editor) => editor.isActive('highlight'),
    isDisabled: (editor: Editor) => !editor.isEditable
  }
} satisfies EditorCustomHandlers

const items = [
  // Built-in handler
  { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
  // Custom handler
  { kind: 'highlight', icon: 'i-lucide-highlighter' }
] satisfies EditorToolbarItem<typeof customHandlers>[]
</script>

<template>
  <UEditor v-slot="{ editor }" v-model="value" :handlers="customHandlers">
    <UEditorToolbar :editor="editor" :items="items" />
  </UEditor>
</template>
```

::tip{to="#with-image-upload"}
Consultez l'exemple de téléchargement d'image pour une implémentation complète avec des gestionnaires personnalisés.
::

@@ph307@exemples

::callout{icon="i-simple-icons-github" to="https://github.com/nuxt-ui-templates/editor" target="_blank"}
Consultez le code source de notre **Editor template** sur GitHub pour un exemple réel.
::

### Avec barre d'outils

Vous pouvez utiliser le composant [EditorToolbar](/docs/components/editor-toolbar) pour ajouter une barre d'outils `fixed`,`bubble` ou `floating` à l'Éditeur avec des actions de mise en forme courantes.

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'éditeur-toolbar-exemple'
Catégorie: P-8
---
::

### Avec poignée de drag

Vous pouvez utiliser le composant [EditorDragHandle](/docs/components/editor-drag-handle) pour ajouter une poignée glissable pour réorganiser les blocs.

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'éditeur-drag-handle-example'
Catégorie: P-8
---
::

### Avec menu de suggestion

Vous pouvez utiliser le composant [EditorSuggestionMenu](/docs/components/editor-suggestion-menu) pour ajouter des commandes slash pour une mise en forme et des insertions rapides.

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'rédacteur-suggestion-menu-exemple'
Catégorie: P-8
---
::

### Avec menu mention

Vous pouvez utiliser le composant [EditorMentionMenu](/docs/components/editor-mention-menu) pour ajouter des mentions @ pour marquer des utilisateurs ou des entités.

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'rédacteur-mention-menu-exemple'
Catégorie: P-8
---
::

### Avec menu emoji

Vous pouvez utiliser le composant [EditorEmojiMenu](/docs/components/editor-emoji-menu) pour ajouter la prise en charge du sélecteur d'emoji.

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'emoji-menu-exemple'
Catégorie: P-8
---
::

### Avec téléchargement d'image

Cet exemple montre comment créer une fonctionnalité de téléchargement d'image à l'aide de la prop `extensions` pour enregistrer un nœud TipTap personnalisé et de la prop `handlers` pour définir comment le bouton de la barre d'outils déclenche le flux de téléchargement.

1. Créer un composant Vue qui utilise le composant [FileUpload](/docs/components/file-upload):

::component-example
---
Prévision: Faux
Collapse: vrai
nom: 'éditeur-image-upload-node'
---
::

2. Créer une extension TipTap personnalisée pour enregistrer le nœud:

::component-example
---
Prévision: Faux
Collapse: vrai
Étiquette:'ts'
nom: 'éditeur-image-upload-extension'
---
::

3. Utilisez l'extension personnalisée dans l'éditeur:

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
nom: 'éditeur-image-upload-exemple'
classe: '! p-0'
---
::

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/extensions/custom-extensions" target="_blank"}
En savoir plus sur la création d'extensions personnalisées dans la documentation TipTap.
::

### Avec l'achèvement AI

Cet exemple montre comment ajouter des fonctionnalités alimentées par l'IA à l'éditeur en utilisant le [Vercel AI SDK](https://ai-sdk.dev/), en particulier le [`useCompletion`](composable pour les complétions de texte en streaming, combiné avec le [Vercel AI Gateway](https://vercel.com/ai-gateway) pour accéder aux modèles d'IA via un point de terminaison centralisé. Il comprend des actions d'autocomplétion de texte fantôme et de transformation de texte (correction de grammaire, extension, réduction, simplification, traduction, etc.).

::note
Vous devez d'abord installer ces dépendances pour utiliser cet exemple:

::code-group{sync="pm"}

```bash [pnpm]
pnpm add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [yarn]
yarn add ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [npm]
npm install ai @ai-sdk/gateway @ai-sdk/vue
```

```bash [bun]
bun add ai @ai-sdk/gateway @ai-sdk/vue
```

::

::

1. Créez une extension TipTap personnalisée qui gère les suggestions de texte fantôme en ligne:

::component-example
---
Prévision: Faux
Collapse: vrai
nom: 'éditeur-complétion-extension'
Étiquette:'ts'
---
::

2. Créer un composable qui gère l'état d'achèvement de l'IA et les gestionnaires:

::component-example
---
Prévision: Faux
Collapse: vrai
nom: 'éditeur-utilisation-réalisation'
nom de fichier: 'useEditorCompletion'
Étiquette:'ts'
---
::

3. Créer un point de terminaison API serveur pour gérer les demandes d'achèvement en utilisant [](https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text#streamtext):

::code-collapse

```ts [server/api/completion.post.ts]
import { streamText, createTextStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { prompt, mode, language } = await readBody(event)
  if (!prompt) {
    throw createError({ statusCode: 400, message: 'Prompt is required' })
  }

  let instructions: string
  let maxOutputTokens: number

  const preserveMarkdown = 'IMPORTANT: Preserve all markdown formatting (bold, italic, links, etc.) exactly as in the original.'

  switch (mode) {
    case 'fix':
      instructions = `You are a writing assistant. Fix all spelling and grammar errors in the given text. ${preserveMarkdown} Only output the corrected text, nothing else.`
      maxOutputTokens = 500
      break
    case 'extend':
      instructions = `You are a writing assistant. Extend the given text with more details, examples, and explanations while maintaining the same style. ${preserveMarkdown} Only output the extended text, nothing else.`
      maxOutputTokens = 500
      break
    case 'reduce':
      instructions = `You are a writing assistant. Make the given text more concise by removing unnecessary words while keeping the meaning. ${preserveMarkdown} Only output the reduced text, nothing else.`
      maxOutputTokens = 300
      break
    case 'simplify':
      instructions = `You are a writing assistant. Simplify the given text to make it easier to understand, using simpler words and shorter sentences. ${preserveMarkdown} Only output the simplified text, nothing else.`
      maxOutputTokens = 400
      break
    case 'summarize':
      instructions = 'You are a writing assistant. Summarize the given text concisely while keeping the key points. Only output the summary, nothing else.'
      maxOutputTokens = 200
      break
    case 'translate':
      instructions = `You are a writing assistant. Translate the given text to ${language || 'English'}. ${preserveMarkdown} Only output the translated text, nothing else.`
      maxOutputTokens = 500
      break
    case 'continue':
    default:
      instructions = `You are a writing assistant providing inline autocompletions.
CRITICAL RULES:
- Output ONLY the NEW text that comes AFTER the user's input
- NEVER repeat any words from the end of the user's text
- Keep completions short (1 sentence max)
- Match the tone and style of the existing text
- ${preserveMarkdown}`
      maxOutputTokens = 25
      break
  }

  const result = streamText({
    model: gateway('anthropic/claude-haiku-4.5'),
    instructions,
    prompt,
    maxOutputTokens
  })

  return createTextStreamResponse({ stream: result.textStream })
})
```

::

4. Utilisez le composable dans l'éditeur:

::component-example
---
Élevé: True
Collapse: vrai
Étiquette: true
name: 'rédacteur-exemple'
classe: '! p-0'
---
::

::note
L'extension de complétion peut être configurée avec `autoTrigger: true` pour suggérer automatiquement des complétions lors de la saisie (désactivée par défaut). Vous pouvez également la déclencher manuellement avec: kbd{value="meta"}: kbd{value="j" class="ms-px"}.
::

::callout{icon="i-simple-icons-vercel" to="https://ai-sdk.dev/" target="_blank"}
En savoir plus sur le SDK Vercel AI et les fournisseurs disponibles.
::

@449 @@ référencement

@@ph450@@props

Composants-props

### Slots

Composants slots

### émissions

Composants émetteurs

@@ph453@@exposé

Lorsque vous accédez au composant via une référence de modèle, vous pouvez utiliser les éléments suivants:

| nom| type|
| ---- | ---- |
| @@|@@|

::callout{icon="i-custom-tiptap" to="https://tiptap.dev/docs/editor/api/editor" target="_blank"}
L'instance de l'éditeur exposée est l'API TipTap Editor. Consultez la documentation TipTap pour connaître toutes les méthodes et propriétés disponibles.
::

@@ph458@thème

Composant-thème

@@changement459

Composant-changelog
