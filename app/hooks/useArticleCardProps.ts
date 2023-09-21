// Create props for product card
import { useTranslation } from 'react-i18next'

import { useLocalizeLink } from '~/hooks/useLocalizeLink'
import type {
  CategoryRecord,
  ArticleRecord,
  TopicRecord,
} from '~/lib/generated'
import type { ColorTypes } from '~/types/globalTypes'

export const useArticleCardProps = (articles: Array<ArticleRecord>) => {
  const { t } = useTranslation()
  const { l } = useLocalizeLink()

  return articles.map((article: ArticleRecord) => ({
    ...article,
    id: article.id,
    publishedAt: article._publishedAt,
    slug: article.slug!,
    type: 'about' as any,
    title: article.title!,
    description: article.modules.map((module) => {
      if (module.__typename === 'HeroRecord') {
        return module.subheading
      }
      return article.metadata?.description
    })[0] as string,
    color:
      article.topics.length > 0
        ? (article.topics[0].color as ColorTypes)
        : 'white',
    chips: [
      ...article.categories.map((category: CategoryRecord) => ({
        label: category.name!,
        to: l(`/category/${category.slug!}`),
        variant: 'overlay' as 'overlay',
      })),
      ...article.topics.map((topic: TopicRecord) => ({
        label: topic.name!,
        to: l(`/topic/${topic.slug!}`),
        variant: 'white' as 'white',
      })),
    ],
    imageUrl: article.modules.map((module) => {
      if (module.__typename === 'HeroRecord') {
        return module.image?.responsiveImage?.src
      }
      return ['/assets/mock-news.png']
    })[0] as string,
    to: l(`/articles/${article.slug}`),
    label: t('readMore'),
  }))
}
