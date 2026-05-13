import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import PersonFilter from '../components/PersonFilter'
import Sidebar from '../components/Sidebar'
import OutfitCard from '../components/OutfitCard'
import EmptyState from '../components/EmptyState'
import { useFilteredItems } from '../hooks/useFilteredItems'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function ExplorePage() {
  const items = useFilteredItems()

  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <HeroSection />
      <PersonFilter />
      <div id="gallery-section" className="mx-auto grid max-w-7xl scroll-mt-28 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_1fr]">
        <Sidebar />
        <section>
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="font-nav text-sm uppercase tracking-[0.2em] text-heritage-muted">Explore gallery</p>
              <h2 className="font-display text-3xl">Stories in cloth, clay, wood, and sound</h2>
            </div>
            <p className="shrink-0 rounded-full bg-[#F4E2C6] px-3 py-1 font-nav text-sm text-[#6E4A08]">{items.length} items</p>
          </motion.div>
          {items.length === 0 ? (
            <EmptyState />
          ) : (
            <motion.div variants={staggerContainer} initial="hidden" animate="show" className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <OutfitCard key={item.id} item={item} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </section>
      </div>
    </motion.div>
  )
}
