import { motion } from 'framer-motion'
import { cardReveal } from '../lib/motion'

export default function StateCard({ state }) {
  return (
    <motion.article
      variants={cardReveal}
      whileHover={{ y: -6, boxShadow: `0 20px 55px ${state.accent}33` }}
      whileTap={{ scale: 0.985 }}
      className="border border-heritage-border bg-heritage-card p-5 shadow-heritage transition"
      style={{ '--hover-color': state.accent }}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = state.accent
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = 'var(--border)'
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl leading-tight">{state.name}</h2>
          <p className="font-nav text-sm uppercase tracking-[0.16em] text-heritage-muted">{state.region}</p>
        </div>
        <motion.span
          className="text-3xl"
          aria-hidden="true"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {state.emoji}
        </motion.span>
      </div>
      <div className="mt-5 divide-y divide-heritage-border">
        {Object.entries(state.wearing).map(([person, outfit]) => (
          <div key={person} className="grid grid-cols-[5rem_1fr] gap-3 py-2 text-sm">
            <span className="font-nav text-heritage-muted">{person}</span>
            <span className="font-semibold text-heritage-text">{outfit}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}
