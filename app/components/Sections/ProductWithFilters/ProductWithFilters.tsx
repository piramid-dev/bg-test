import { useState, type FC, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollTo } from 'framer-motion-scroll-to-hook'

import SortIcon from '~/components/Atoms/SortIcon'
import BlockNoResults from '~/components/Organisms/BlockNoResults/BlockNoResults'
import { useContext } from '~/hooks/useContext'

import {
  sortByNameAsc,
  sortByNameDesc,
  sortByWeightAsc,
  sortByWeightDesc,
} from '../../../lib/sort.utils'
import FilterOrderMobile from '../..//Molecules/FilterOrderMobile/FilterOrderMobile'
import type {
  IFilter,
  IFilterEnriched,
  IPrefilledFilter,
  ISortOption,
} from '../../..//types/filter.interface'
import { filterItems, prepareFilterArray } from '../../../lib/filter.utils'
import type { IProduct } from '../../../types/product.interface'
import Button from '../../Atoms/Button/Button'
import DropdownOrder from '../../Molecules/DropdownOrder/DropdownOrder'
import CardProduct from '../../Organisms/CardProduct/CardProduct'
import DrawerFilter from '../../Organisms/DrawerFilter/DrawerFilter'
import DrawerSort from '../../Organisms/DrawerSort/DrawerSort'
import DynamicFilters from '../../Organisms/DynamicFilters/DynamicFilters'

interface ProductWithFiltersProps {
  products: IProduct[]
  filters: IFilter[]
  prefilledFilters?: IPrefilledFilter[]
}

const ProductWithFilters: FC<ProductWithFiltersProps> = ({
  products,
  filters,
  prefilledFilters = [],
}) => {
  const { validPass } = useContext()
  const itemsQuantity = 32
  const productListStart = useRef<any>()
  const sortOptions: ISortOption[] = [
    { name: 'peso', label: 'Peso', direction: 'asc' },
    { name: 'peso', label: 'Peso', direction: 'desc' },
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
    scrollTo(productListStart?.current, -150)
  }

  const [shownElements, setShownElements] = useState(itemsQuantity)
  const [productFilters, setProductFilters] = useState(
    prepareFilterArray(JSON.parse(JSON.stringify(filters)), prefilledFilters),
  )

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortedProducts, setSortedProducts] = useState(products)
  const [showFilter, setShowFilter] = useState(false)
  const [showSort, setShowSort] = useState(false)
  const [filterCount, setFilterCount] = useState(0)
  const [selectedSortOption, setSelectedSortOption] = useState<ISortOption>(
    sortOptions[0],
  )
  const [enableApply, setEnableApply] = useState(false)

  useEffect(() => {
    handleSortProducts(sortOptions[0])
    setTimeout(() => {
      if (prefilledFilters && prefilledFilters.length > 0) {
        console.log('prefilledFilters', productFilters)
        handleApplyFilter()
      }
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortProducts = (productList: IProduct[], option: ISortOption) => {
    if (option.name === 'peso' && option.direction === 'asc') {
      return productList.sort(sortByWeightAsc)
    }

    if (option.name === 'peso' && option.direction === 'desc') {
      return productList.sort(sortByWeightDesc)
    }

    if (option.name === 'name' && option.direction === 'asc') {
      return productList.sort(sortByNameAsc)
    }

    if (option.name === 'name' && option.direction === 'desc') {
      return productList.sort(sortByNameDesc)
    }

    return productList
  }

  const handleSetProductFilters = (updatedFilters: IFilterEnriched[]) => {
    setProductFilters(updatedFilters)

    setEnableApply(true)
  }

  const handleSortProducts = (option: ISortOption) => {
    setSelectedSortOption(option)
    const productsSorted = sortProducts(products, option)
    setSortedProducts(productsSorted)

    const filteredProducts = filterItems(productsSorted, productFilters)
    setFilteredProducts(filteredProducts)
  }

  const handleApplyFilter = () => {
    scrollToFilters()
    const filteredProducts = filterItems(sortedProducts, productFilters)
    setFilteredProducts(filteredProducts)
    setShownElements(itemsQuantity)

    setFilterCount(
      productFilters
        .filter((f) => f.type === 'multichoice')
        .filter(
          (f) =>
            f.checkboxes?.some((p) => p.value) &&
            !f.checkboxes.every((p) => p.value),
        ).length,
    )

    setEnableApply(false)
  }

  const handleResetFilter = () => {
    scrollToFilters()
    // reset filters
    setProductFilters(prepareFilterArray(JSON.parse(JSON.stringify(filters))))

    // reset filtered products to original (sorted or non sorted)
    setFilteredProducts(sortedProducts)

    // reset shown elements
    setShownElements(itemsQuantity)

    // reset filter count
    setFilterCount(0)

    setEnableApply(false)
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
        onSelect={handleSortProducts}
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
          filters={productFilters}
          locked={validPass ? false : true}
          setUpdatedFilters={handleSetProductFilters}
        />
      </DrawerFilter>
      <div className="container py-12">
        <div className="flex flex-row gap-6" ref={productListStart}>
          <div className="hidden h-fit grow-0 basis-1/4 rounded-xl border bg-dove-300 p-4 lg:block">
            <h4 className="h4 font-sans">Filtra risultati</h4>
            <div className="pt-6">
              <DynamicFilters
                filters={productFilters}
                locked={validPass ? false : true}
                setUpdatedFilters={handleSetProductFilters}
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
                  disabled={!enableApply}
                />
              </div>
            </div>
          </div>
          <div className="grow lg:grow-0 lg:basis-3/4 lg:sticky lg:mt-auto lg:bottom-[24px] lg:min-h-[calc(100vh-40px)]">
            <div className="flex flex-row items-baseline justify-between">
              <div className="h5 mb-6 font-sans uppercase text-black/70 lg:mb-0 !font-normal">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'risultato' : 'risultati'} su{' '}
                {products.length}
              </div>
              <div className="hidden lg:block">
                <DropdownOrder
                  label="Ordina per"
                  options={sortOptions}
                  onSelectedOption={handleSortProducts}
                  preselectedOption={sortOptions[0]}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:gap-3">
              <AnimatePresence>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(
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
                                : 0.05 *
                                  (idx - (shownElements - itemsQuantity)),
                          }}
                        >
                          <CardProduct {...p} supermatch={false} />
                        </motion.div>
                      ),
                  )
                ) : (
                  <div className="lg:col-span-4 col-span-2">
                    <BlockNoResults onResetFiltersClick={handleResetFilter} />
                  </div>
                )}
              </AnimatePresence>
            </div>
            {shownElements < filteredProducts.length ? (
              <div className="mt-16 text-center">
                <div className="body-l mb-5 font-sans text-black/70">
                  Mostrati {Math.min(shownElements, filteredProducts.length)} di{' '}
                  {filteredProducts.length}
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

export default ProductWithFilters
