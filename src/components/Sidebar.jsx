import { motion } from 'framer-motion'
import { allItems, categoryIcons, categoryLabels } from '../data/items'
import { useHeritageStore } from '../store/useHeritageStore'

export default function Sidebar() {
  const { activeCategory, activePerson, activeRegion, searchQuery, setActiveCategory, clearFilters } = useHeritageStore()
  const query = searchQuery.trim().toLowerCase()
  const countableItems = allItems.filter((item) => {
    const personMatch = activePerson === 'All' || item.persons.includes(activePerson)
    const regionMatch = activeRegion === 'All India' || item.region === activeRegion
    const textMatch =
      !query ||
      [item.name, item.state, item.fabric, item.festival, item.story.title, ...item.tags]
        .join(' ')
        .toLowerCase()
        .includes(query)

    return personMatch && regionMatch && textMatch
  })

  const counts = countableItems.reduce(
    (acc, item) => {
      acc.all += 1
      acc[item.category] = (acc[item.category] || 0) + 1
      return acc
    },
    { all: 0 },
  )

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="scrollbar-soft max-h-none overflow-visible border border-heritage-border bg-heritage-card p-4 shadow-heritage lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="font-display text-xl">Categories</h2>
          <button type="button" onClick={clearFilters} className="font-nav text-xs uppercase tracking-[0.14em] text-[#D85A30]">
            Reset
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {Object.entries(categoryLabels)
            .filter(([key]) => counts[key])
            .map(([key, label]) => (
              <motion.button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between gap-3 border px-3 py-3 text-left transition ${
                  activeCategory === key
                    ? 'border-[#C8920A] bg-[#FFF4D8]'
                    : 'border-heritage-border bg-white hover:border-[#C8920A]'
                }`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <span aria-hidden="true">{categoryIcons[key]}</span>
                  <span className="truncate font-nav text-sm">{label}</span>
                </span>
                <span className="rounded-full bg-[#F4E2C6] px-2 py-1 text-xs font-semibold text-heritage-muted">{counts[key]}</span>
              </motion.button>
            ))}
        </div>
      </motion.div>
    </aside>
  )
}
