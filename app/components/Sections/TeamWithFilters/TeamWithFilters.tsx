import { AnimatePresence, motion } from 'framer-motion'
import { useScrollTo } from 'framer-motion-scroll-to-hook'
import { useRef, type FC, useState, useEffect } from 'react'

import Button from '~/components/Atoms/Button'
import SortIcon from '~/components/Atoms/SortIcon'
import DropdownOrder from '~/components/Molecules/DropdownOrder'
import FilterOrderMobile from '~/components/Molecules/FilterOrderMobile'
import CardTeam from '~/components/Organisms/CardTeam/CardTeam'
import DrawerFilter from '~/components/Organisms/DrawerFilter'
import DrawerSort from '~/components/Organisms/DrawerSort'
import DynamicFilters from '~/components/Organisms/DynamicFilters'
import { filterItems, prepareFilterArray } from '~/lib/filter.utils'
import { sortByNameSurnameAsc, sortByNameSurnameDesc } from '~/lib/sort.utils'
import type {
  IFilter,
  IPrefilledFilter,
  ISortOption,
} from '~/types/filter.interface'
import type { ITeam } from '~/types/team.interface'

interface TeamWithFiltersProps {
  locked?: boolean
  teams: ITeam[]
  filters: IFilter[]
  prefilledFilters?: IPrefilledFilter[]
}

const TeamWithFilters: FC<TeamWithFiltersProps> = ({
  locked = false,
  teams,
  filters,
  prefilledFilters,
}) => {
  const itemsQuantity = 32
  const teamListStart = useRef<any>()
  const sortOptions: ISortOption[] = [
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
    // console.log(teamListStart.current, '   ----')
    scrollTo(teamListStart?.current, -150)
  }

  const [shownElements, setShownElements] = useState(itemsQuantity)
  const [teamFilters, setTeamFilters] = useState(
    prepareFilterArray(JSON.parse(JSON.stringify(filters)), prefilledFilters),
  )

  const [filteredTeams, setFilteredTeams] = useState(teams)
  const [sortedTeams, setSortedTeams] = useState(teams)
  const [showFilter, setShowFilter] = useState(false)
  const [showSort, setShowSort] = useState(false)
  const [filterCount, setFilterCount] = useState(0)
  const [selectedSortOption, setSelectedSortOption] = useState<ISortOption>(
    sortOptions[0],
  )

  useEffect(() => {
    handleSort(sortOptions[0])
    setTimeout(() => {
      if (prefilledFilters && prefilledFilters.length > 0) {
        handleApplyFilter()
      }
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const sortProducts = (articleList: ITeam[], option: ISortOption) => {
    if (option.name === 'name' && option.direction === 'asc') {
      return articleList.sort(sortByNameSurnameAsc)
    }

    if (option.name === 'name' && option.direction === 'desc') {
      return articleList.sort(sortByNameSurnameDesc)
    }

    return articleList
  }

  const handleSort = (option: ISortOption) => {
    setSelectedSortOption(option)
    const teamsSorted = sortProducts(teams, option)
    setSortedTeams(teamsSorted)

    const filteredTeams = filterItems(teamsSorted, teamFilters)
    setFilteredTeams(filteredTeams)
  }

  const handleApplyFilter = () => {
    scrollToFilters()
    const filteredTeams = filterItems(sortedTeams, teamFilters)
    setFilteredTeams(filteredTeams)
    setShownElements(itemsQuantity)

    setFilterCount(
      teamFilters
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
    setTeamFilters(prepareFilterArray(JSON.parse(JSON.stringify(filters))))

    // reset filtered teams to original (sorted or non sorted)
    setFilteredTeams(sortedTeams)

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
        onSelect={handleSort}
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
          filters={teamFilters}
          locked={locked}
          setUpdatedFilters={setTeamFilters}
        />
      </DrawerFilter>
      <div className="container py-12">
        <div className="flex flex-row gap-6" ref={teamListStart}>
          <div className="hidden h-fit grow-0 basis-1/4 rounded-xl border bg-dove-300 p-4 lg:block">
            <h4 className="h4 font-sans">Filtra risultati</h4>
            <div className="pt-6">
              <DynamicFilters
                filters={teamFilters}
                locked={locked}
                setUpdatedFilters={setTeamFilters}
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
                {filteredTeams.length}{' '}
                {filteredTeams.length === 1 ? 'risultato' : 'risultati'} su{' '}
                {teams.length}
              </div>
              <div className="hidden lg:block">
                <DropdownOrder
                  label="Ordina per"
                  options={sortOptions}
                  onSelectedOption={handleSort}
                  preselectedOption={sortOptions[0]}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3 lg:gap-3">
              <AnimatePresence>
                {filteredTeams.map(
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
                        <CardTeam {...p} />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
            {shownElements < filteredTeams.length ? (
              <div className="mt-16 text-center">
                <div className="body-l mb-5 font-sans text-black/70">
                  Mostrati {Math.min(shownElements, filteredTeams.length)} di{' '}
                  {filteredTeams.length}
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

export default TeamWithFilters
