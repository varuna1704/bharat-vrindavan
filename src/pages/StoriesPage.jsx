import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { allItems } from '../data/items'
import { useFilteredItems } from '../hooks/useFilteredItems'
import { useHeritageStore } from '../store/useHeritageStore'
import { cardReveal, fadeUp, staggerContainer } from '../lib/motion'

export default function StoriesPage() {
  const items = useFilteredItems(allItems)
  const setSelectedItem = useHeritageStore((state) => state.setSelectedItem)

  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <p className="font-nav text-sm uppercase tracking-[0.2em] text-heritage-muted">Stories archive</p>
        <h1 className="font-display text-4xl">Every Object Has a Memory</h1>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-7 space-y-4">
        {items.map((item) => (
          <motion.article
            key={item.id}
            variants={cardReveal}
            whileHover={{ x: 6, boxShadow: `0 18px 50px ${item.color[1]}30` }}
            className="grid gap-4 border border-heritage-border bg-heritage-card p-4 shadow-heritage sm:grid-cols-[6rem_1fr_auto] sm:items-center"
          >
            <motion.div
              className="flex aspect-square items-center justify-center text-5xl"
              style={{ background: `linear-gradient(135deg, ${item.color[0]}, ${item.color[1]})` }}
              whileHover={{ rotate: 3, scale: 1.04 }}
            >
              {item.emoji}
            </motion.div>
            <div>
              <p className="font-nav text-xs uppercase tracking-[0.18em] text-heritage-muted">{item.story.origin}</p>
              <h2 className="font-display text-2xl">{item.story.title}</h2>
              <p className="text-heritage-muted">{item.story.body.slice(0, 116)}...</p>
            </div>
            <div className="flex gap-2 sm:flex-col">
              <button type="button" onClick={() => setSelectedItem(item)} className="bg-[#1a0a2e] px-4 py-2 font-nav text-sm text-white">
                Read Full Story
              </button>
              <Link to={`/item/${item.id}`} className="border border-heritage-border bg-white px-4 py-2 text-center font-nav text-sm">
                Detail
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  )
}
