import { motion } from 'framer-motion'
import StateCard from '../components/StateCard'
import states from '../data/states'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function StatesPage() {
  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6"
    >
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <p className="font-nav text-sm uppercase tracking-[0.2em] text-heritage-muted">State-wise browse</p>
        <h1 className="font-display text-4xl">All 28 States and 8 Union Territories</h1>
      </motion.div>
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {states.map((state) => (
          <StateCard key={state.name} state={state} />
        ))}
      </motion.div>
    </motion.div>
  )
}
