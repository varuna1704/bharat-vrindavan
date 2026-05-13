import { motion } from 'framer-motion'
import { cardReveal, softPop } from '../lib/motion'

export default function FestivalCard({ festival }) {
  return (
    <motion.article
      variants={cardReveal}
      whileHover={softPop.whileHover}
      whileTap={softPop.whileTap}
      transition={softPop.transition}
      className="overflow-hidden border border-heritage-border bg-heritage-card shadow-heritage"
    >
      <div className="p-5 text-white" style={{ background: `linear-gradient(135deg, ${festival.color[0]}, ${festival.color[1]})` }}>
        <motion.div
          className="text-4xl"
          aria-hidden="true"
          animate={{ rotate: [0, -4, 4, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {festival.emoji}
        </motion.div>
        <h2 className="mt-3 font-display text-2xl">{festival.name}</h2>
        <p className="font-nav text-sm uppercase tracking-[0.16em] text-white/75">{festival.region}</p>
      </div>
      <div className="p-5">
        <p className="mb-5 text-base leading-7 text-heritage-muted">{festival.story}</p>
        <p className="font-nav text-xs uppercase tracking-[0.18em] text-heritage-muted">Traditional outfits</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {festival.outfits.map((outfit) => (
            <span key={outfit} className="rounded-full bg-[#F4E2C6] px-3 py-1 text-sm font-semibold text-[#6E4A08]">
              {outfit}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
