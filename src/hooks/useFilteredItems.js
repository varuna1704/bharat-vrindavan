import { useMemo } from 'react'
import { allItems } from '../data/items'
import { useHeritageStore } from '../store/useHeritageStore'

export function useFilteredItems(items = allItems) {
  const { activePerson, activeRegion, activeCategory, searchQuery } = useHeritageStore()

  return useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return items.filter((item) => {
      const personMatch = activePerson === 'All' || item.persons.includes(activePerson)
      const regionMatch = activeRegion === 'All India' || item.region === activeRegion
      const categoryMatch = activeCategory === 'all' || item.category === activeCategory
      const textMatch =
        !query ||
        [item.name, item.state, item.fabric, item.festival, item.story.title, ...item.tags]
          .join(' ')
          .toLowerCase()
          .includes(query)

      return personMatch && regionMatch && categoryMatch && textMatch
    })
  }, [items, activePerson, activeRegion, activeCategory, searchQuery])
}

export default useFilteredItems
