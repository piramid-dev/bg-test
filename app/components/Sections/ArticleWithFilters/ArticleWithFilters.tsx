import { AnimatePresence, motion } from 'framer-motion'
import { useScrollTo } from 'framer-motion-scroll-to-hook'
import { useState, type FC, useEffect, useRef } from 'react'

import Button from '~/components/Atoms/Button'
import SortIcon from '~/components/Atoms/SortIcon'
import DropdownOrder from '~/components/Molecules/DropdownOrder'
import FilterOrderMobile from '~/components/Molecules/FilterOrderMobile'
import CardNews from '~/components/Organisms/CardNews/CardNews'
import DrawerFilter from '~/components/Organisms/DrawerFilter'
import DrawerSort from '~/components/Organisms/DrawerSort'
import DynamicFilters from '~/components/Organisms/DynamicFilters'
import { filterItems, prepareFilterArray } from '~/lib/filter.utils'
import {
  sortByDateAsc,
  sortByDateDesc,
  sortByTitleAsc,
  sortByTitleDesc,
} from '~/lib/sort.utils'
import type { IArticle } from '~/types/article.interface'
import type {
  IFilter,
  IPrefilledFilter,
  ISortOption,
} from '~/types/filter.interface'

interface ArticleWithFiltersProps {
  locked?: boolean
  articles: IArticle[]
  filters: IFilter[]
  prefilledFilters?: IPrefilledFilter[]
}

const ArticleWithFilters: FC<ArticleWithFiltersProps> = ({
  locked = false,
  articles,
  filters,
  prefilledFilters,
}) => {
  const itemsQuantity = 32
  const articleListStart = useRef<any>()
  const sortOptions: ISortOption[] = [
    { name: 'date', label: 'Data', direction: 'asc' },
    { name: 'date', label: 'Data', direction: 'desc' },
    { name: 'name', label: 'Nome', alphabetically: true, direction: 'asc' },
    {
      name: 'name',
      label: 'Nome',
      alphabetically: true,
      direction: 'desc',
    },
  ]
  const scrollTo = useScrollTo()
  const scrollToFilters = () => {
    console.log(articleListStart.current, '   ----')
    scrollTo(articleListStart?.current, -150)
  }

  const [shownElements, setShownElements] = useState(itemsQuantity)
  const [articleFilters, setArticleFilters] = useState(
    prepareFilterArray(JSON.parse(JSON.stringify(filters)), prefilledFilters),
  )

  const [filteredArticles, setFilteredArticles] = useState(articles)
  const [sortedArticles, setSortedArticles] = useState(articles)
  const [showFilter, setShowFilter] = useState(false)
  const [showSort, setShowSort] = useState(false)
  const [filterCount, setFilterCount] = useState(0)
  const [selectedSortOption, setSelectedSortOption] = useState<ISortOption>(
    sortOptions[0],
  )

  useEffect(() => {
    handleSortArticles(sortOptions[0])
    setTimeout(() => {
      if (prefilledFilters && prefilledFilters.length > 0) {
        handleApplyFilter()
      }
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortProducts = (articleList: IArticle[], option: ISortOption) => {
    if (option.name === 'date' && option.direction === 'asc') {
      return articleList.sort(sortByDateAsc)
    }

    if (option.name === 'date' && option.direction === 'desc') {
      return articleList.sort(sortByDateDesc)
    }

    if (option.name === 'name' && option.direction === 'asc') {
      return articleList.sort(sortByTitleAsc)
    }

    if (option.name === 'name' && option.direction === 'desc') {
      return articleList.sort(sortByTitleDesc)
    }

    return articleList
  }

  const handleSortArticles = (option: ISortOption) => {
    setSelectedSortOption(option)
    const articlesSorted = sortProducts(articles, option)
    setSortedArticles(articlesSorted)

    const filteredProducts = filterItems(articlesSorted, articleFilters)
    setFilteredArticles(filteredProducts)
  }

  const handleApplyFilter = () => {
    scrollToFilters()
    const filteredProducts = filterItems(sortedArticles, articleFilters)
    setFilteredArticles(filteredProducts)
    setShownElements(itemsQuantity)

    setFilterCount(
      articleFilters
        .filter((f) => f.type === 'multichoice')
        .filter(
          (f) =>
            f.checkboxes?.some((p) => p.value) &&
            !f.checkboxes.every((p) => p.value),
        ).length,
    )
  }

  const handleResetFilter = () => {
    scrollToFilters()
    // reset filters
    setArticleFilters(prepareFilterArray(JSON.parse(JSON.stringify(filters))))

    // reset filtered articles to original (sorted or non sorted)
    setFilteredArticles(sortedArticles)

    // reset shown elements
    setShownElements(itemsQuantity)

    // reset filter count
    setFilterCount(0)
  }
  return (
    <>
      <FilterOrderMobile
        variant="dark"
        onFilterClicked={() => setShowFilter(true)}
        onSortClicked={() => setShowSort(true)}
        filterCount={filterCount}
        sortLabel={selectedSortOption.label}
        sortIcon={
          selectedSortOption ? <SortIcon {...selectedSortOption} /> : null
        }
      />
      <DrawerSort
        sortOptions={sortOptions}
        onSelect={handleSortArticles}
        show={showSort}
        onClose={() => setShowSort(false)}
      />
      <DrawerFilter
        show={showFilter}
        onClose={() => setShowFilter(false)}
        onApplyFilters={handleApplyFilter}
        onResetFilters={handleResetFilter}
      >
        <DynamicFilters
          filters={articleFilters}
          locked={locked}
          setUpdatedFilters={setArticleFilters}
        />
      </DrawerFilter>
      <div className="container py-12">
        <div className="flex flex-row gap-6" ref={articleListStart}>
          <div className="hidden h-fit grow-0 basis-1/4 rounded-xl border bg-dove-300 p-4 lg:block">
            <h4 className="h4 font-sans">Filtra risultati</h4>
            <div className="pt-6">
              <DynamicFilters
                filters={articleFilters}
                locked={locked}
                setUpdatedFilters={setArticleFilters}
              />
              <div className="flex flex-row gap-2 [&>*]:grow lg:z-50 lg:bg-dove-300 lg:sticky lg:bottom-0 lg:py-2">
                <Button
                  variant="secondary"
                  label="Azzera"
                  onClick={handleResetFilter}
                  extraClasses="body-m"
                />
                <Button
                  variant="primary"
                  label="Applica"
                  onClick={handleApplyFilter}
                  extraClasses="body-m"
                />
              </div>
            </div>
          </div>
          <div className="grow lg:grow-0 lg:basis-3/4 lg:sticky lg:mt-auto lg:bottom-[24px] lg:min-h-[calc(100vh-40px)]">
            <div className="flex flex-row items-baseline justify-between">
              <div className="h5 mb-6 font-sans uppercase text-black/70 lg:mb-0 !font-normal">
                {filteredArticles.length}{' '}
                {filteredArticles.length === 1 ? 'risultato' : 'risultati'} su{' '}
                {articles.length}
              </div>
              <div className="hidden lg:block">
                <DropdownOrder
                  label="Ordina per"
                  options={sortOptions}
                  onSelectedOption={handleSortArticles}
                  preselectedOption={sortOptions[0]}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:grid-cols-3 lg:gap-3">
              <AnimatePresence>
                {filteredArticles.map(
                  (p, idx) =>
                    idx < shownElements && (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 25,
                          delay:
                            idx < shownElements - itemsQuantity
                              ? 0
                              : 0.05 * (idx - (shownElements - itemsQuantity)),
                        }}
                      >
                        <CardNews {...p} />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
            {shownElements < filteredArticles.length ? (
              <div className="mt-16 text-center">
                <div className="body-l mb-5 font-sans text-black/70">
                  Mostrati {Math.min(shownElements, filteredArticles.length)} di{' '}
                  {filteredArticles.length}
                </div>
                <Button
                  variant="secondary"
                  label="Mostra altri"
                  onClick={() => setShownElements((s) => s + itemsQuantity)}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticleWithFilters
