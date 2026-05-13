import { motion } from 'framer-motion'
import { useHeritageStore } from '../store/useHeritageStore'

export default function EmptyState() {
  const clearFilters = useHeritageStore((state) => state.clearFilters)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex min-h-80 flex-col items-center justify-center border border-dashed border-[#C8920A]/55 bg-[#FFFCF7]/80 px-6 py-12 text-center"
    >
      <svg width="92" height="92" viewBox="0 0 100 100" className="text-[#C8920A]" role="img" aria-label="Amber lotus illustration">
        <path d="M50 18C39 31 34 42 34 52c0 10 7 18 16 18s16-8 16-18c0-10-5-21-16-34Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M28 38c-8 11-9 22-2 30 6 7 17 8 24 2-10-5-17-16-22-32Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M72 38c8 11 9 22 2 30-6 7-17 8-24 2 10-5 17-16 22-32Z" fill="none" stroke="currentColor" strokeWidth="4" />
        <path d="M23 76h54" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <h2 className="mt-5 font-display text-3xl text-heritage-text">No artifacts found</h2>
      <p className="mt-2 text-heritage-muted">Try adjusting your filters or search query</p>
      <button type="button" onClick={clearFilters} className="mt-6 bg-[#C8920A] px-5 py-3 font-nav text-sm uppercase tracking-[0.12em] text-white transition hover:bg-[#1a0a2e]">
        Clear all filters
      </button>
    </motion.div>
  )
}
