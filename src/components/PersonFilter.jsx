import { motion } from 'framer-motion'
import { useHeritageStore } from '../store/useHeritageStore'

const persons = ['All', 'Women', 'Men', 'Girls', 'Boys', 'Elders', 'Bride', 'Groom']
const regions = ['All India', 'North', 'South', 'East', 'West', 'Northeast']

export default function PersonFilter() {
  const { activePerson, activeRegion, setActivePerson, setActiveRegion } = useHeritageStore()

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.08 }}
      className="flex flex-col gap-4 border-b border-heritage-border bg-[#FFFCF7]/80 px-4 py-4 backdrop-blur sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2">
        {persons.map((person) => (
          <motion.button
            key={person}
            type="button"
            onClick={() => setActivePerson(person)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`rounded-full border px-4 py-2 font-nav text-sm transition ${
              activePerson === person
                ? 'border-[#C8920A] bg-[#1a0a2e] text-white'
                : 'border-heritage-border bg-white text-heritage-text hover:border-[#C8920A]'
            }`}
          >
            {person}
          </motion.button>
        ))}
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2">
        {regions.map((region) => (
          <motion.button
            key={region}
            type="button"
            onClick={() => setActiveRegion(region)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className={`rounded-full px-4 py-2 font-nav text-sm transition ${
              activeRegion === region ? 'bg-[#C8920A] text-white' : 'bg-[#FDF8F0] text-heritage-muted hover:bg-[#F5E7D1]'
            }`}
          >
            {region}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
