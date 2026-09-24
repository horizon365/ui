import { z } from 'zod'
import { defineCollection } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

const Avatar = z.object({
  src: z.string(),
  alt: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  avatar: Avatar.optional(),
  leadingIcon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  class: z.string().optional()
})

const PageFeature = z.object({
  title: z.string(),
  description: z.string().optional(),
  icon: z.string(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const PageHero = z.object({
  /** The pill above the title: its label, or button props (`to` for a link). */
  badge: z.union([z.string(), Button]).optional(),
  /** The title's two halves: the second one in primary. */
  lead: z.string(),
  accent: z.string(),
  /** Break between them rather than running them on one line. */
  breakLine: z.boolean().optional(),
  description: z.string(),
  links: z.array(Button).optional()
})

// `@nuxtjs/sitemap` only walks a collection whose schema declares this field,
// and reads its per-page options (`lastmod`, `changefreq`, `priority`) off it.
const sitemap = defineSitemapSchema({ z })

const Page = z.object({
  title: z.string(),
  description: z.string(),
  hero: PageHero,
  sitemap
})

// Schema for the docs collection (components + getting-started). Shared by all
// language collections so query results have the same shape across locales.
const DocsSchema = z.object({
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay', 'dashboard', 'page', 'chat', 'content', 'editor', 'color-mode', 'i18n']).optional(),
  keywords: z.array(z.string()).optional(),
  index: z.boolean().optional(),
  framework: z.enum(['nuxt', 'vue']).optional(),
  navigation: z.object({
    title: z.string().optional(),
    badge: z.string().optional()
  }),
  links: z.array(Button),
  // External navigation entries (e.g. the Figma page): the sidebar link
  // points at `to` instead of the page's own path.
  to: z.string().optional(),
  target: z.string().optional(),
  // an entry that links out is not a page to index
  sitemap: defineSitemapSchema({ z, name: 'docs', filter: entry => !entry.to })
})

// Locales supported by the docs site. `en` is the default and has no URL prefix;
// every other locale is served under `/{code}/...` by `@nuxtjs/i18n`
// (`strategy: 'prefix_except_default'`).
const LOCALES = ['en', 'zh', 'ja', 'ko', 'fr', 'de', 'nl', 'es'] as const

// Per-locale docs collection. `source.prefix: '/docs'` keeps the content stem
// `/docs/...` regardless of language, so the catch-all page can strip the
// locale prefix and reuse one slug for every `docs_{locale}` collection.
function docsCollection(locale: string) {
  return defineCollection({
    type: 'page',
    source: {
      include: `${locale}/docs/**/*`,
      prefix: '/docs'
    },
    schema: DocsSchema
  })
}

// Per-locale landing-page collection. The home page reads `.first()` so we do
// not need a prefix; the page resolves it by locale-aware query.
function indexCollection(locale: string) {
  return defineCollection({
    type: 'page',
    source: `${locale}/index.yml`,
    schema: Page
  })
}

// Build the per-locale collections. The resulting object has keys
// `docs_en`, `docs_zh`, ..., `index_en`, `index_zh`, ...
const i18nCollections = Object.fromEntries(
  LOCALES.flatMap(locale => [
    [`docs_${locale}`, docsCollection(locale)],
    [`index_${locale}`, indexCollection(locale)]
  ])
)

export const collections = {
  ...i18nCollections,
  // Collections below are intentionally NOT translated in this iteration.
  // Visiting `/{locale}/blog/...` still resolves via i18n routing and falls
  // back to the English content; the collections stay single-source.
  showcase: defineCollection({
    type: 'page',
    source: 'showcase.yml',
    schema: Page.extend({
      items: z.array(z.object({
        name: z.string(),
        url: z.string(),
        screenshotUrl: z.string().optional(),
        screenshotOptions: z.object({
          delay: z.number().optional(),
          width: z.number().optional(),
          cookies: z.array(z.string()).optional(),
          removeElements: z.array(z.string()).optional()
        }).optional()
      }))
    })
  }),
  templates: defineCollection({
    type: 'page',
    source: 'templates.yml',
    schema: Page.extend({
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        framework: z.enum(['nuxt', 'vue']),
        features: z.array(PageFeature).optional(),
        links: z.array(Button).optional(),
        open_links: z.array(Button).optional()
      }))
    })
  }),
  community: defineCollection({
    type: 'page',
    source: 'community.yml',
    schema: Page.extend({
      items: z.array(z.object({
        label: z.string(),
        description: z.string(),
        avatar: Avatar,
        user: z.object({
          name: z.string(),
          avatar: Avatar,
          to: z.string()
        }),
        to: z.string()
      }))
    })
  }),
  team: defineCollection({
    type: 'page',
    source: 'team.yml',
    schema: Page
  }),
  blog: defineCollection({
    type: 'page',
    source: 'blog.yml',
    schema: Page
  }),
  posts: defineCollection({
    type: 'page',
    source: [{
      include: 'blog/**/*'
    }],
    schema: z.object({
      image: z.string(),
      date: z.string(),
      category: z.string().optional(),
      authors: z.array(z.object({
        name: z.string(),
        avatar: Avatar.optional(),
        to: z.string().optional()
      })).optional(),
      sitemap
    })
  })
}
