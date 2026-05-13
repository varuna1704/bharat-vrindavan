import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ExternalLink } from 'lucide-react'
import { useHeritageStore } from '../store/useHeritageStore'
import { cardReveal } from '../lib/motion'

export default function OutfitCard({ item }) {
  const setSelectedItem = useHeritageStore((state) => state.setSelectedItem)
  const [from, to] = item.color

  return (
    <motion.article
      layout
      variants={cardReveal}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, scale: 0.94, y: 12 }}
      whileHover={{
        rotateX: 6,
        rotateY: -4,
        y: -8,
        boxShadow: `0 24px 60px ${to}55`,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group overflow-hidden border border-heritage-border bg-heritage-card shadow-heritage"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <button
        type="button"
        onClick={() => setSelectedItem(item)}
        className="block w-full text-left"
        aria-label={`Read story for ${item.name}`}
      >
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
          <span className="absolute right-3 top-3 rounded-full bg-white/88 px-3 py-1 font-nav text-xs text-[#1a0a2e]">
            {item.persons[0]}
          </span>
          <span className="text-6xl drop-shadow-xl" role="img" aria-label={`${item.name} from ${item.state}`}>
            {item.emoji}
          </span>
          <span className="absolute bottom-3 left-3 rounded-full bg-black/35 px-3 py-1 font-nav text-xs text-white backdrop-blur">
            {item.state}
          </span>
        </div>
      </button>
      <div className="p-4">
        <h3 className="font-display text-xl leading-tight text-heritage-text">{item.name}</h3>
        <p className="mt-1 text-sm text-heritage-muted">{item.fabric}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-[#F4E2C6] px-2.5 py-1 text-xs font-semibold text-[#6E4A08]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedItem(item)}
            className="inline-flex flex-1 items-center justify-center gap-2 bg-[#1a0a2e] px-3 py-2 font-nav text-sm text-white transition hover:bg-[#3B1224]"
          >
            <BookOpen size={16} aria-hidden="true" />
            Read Story
          </button>
          <Link
            to={`/item/${item.id}`}
            className="inline-flex h-10 w-10 items-center justify-center border border-heritage-border bg-white text-heritage-text transition hover:border-[#C8920A]"
            title="Open detail page"
          >
            <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only">Open {item.name}</span>
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
