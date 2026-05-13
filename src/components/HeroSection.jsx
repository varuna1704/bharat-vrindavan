import { motion } from 'framer-motion'
import MandalaDecor from './MandalaDecor'

export default function HeroSection() {
  const scrollToGallery = () => {
    document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#3B1224] via-[#7A1028] to-[#C8920A] px-4 py-16 text-white sm:px-6 lg:py-20">
      <MandalaDecor size={420} color="#FAC775" opacity={0.13} className="mandala-spin absolute -right-28 -top-24" />
      <MandalaDecor size={260} color="#FFFCF7" opacity={0.08} className="absolute -bottom-20 left-4" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p className="font-nav text-sm uppercase tracking-[0.3em] text-[#FAC775]">India's living archive</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Bharat Vrindavan
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-white/86 sm:text-2xl">
            Explore India's living heritage — clothing, artifacts, music, and stories from every state
          </p>
          <button
            type="button"
            onClick={scrollToGallery}
            className="mt-8 bg-[#FAC775] px-5 py-3 font-nav text-sm uppercase tracking-[0.14em] text-[#1E0B3B] shadow-heritage transition hover:bg-white"
          >
            Start Exploring ↓
          </button>
        </div>

        <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:w-[28rem]">
          {[
            ['2400+', 'outfits mapped'],
            ['650+', 'artifacts traced'],
            ['120+', 'stories archived'],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index }}
              className="border border-white/15 bg-white/10 p-5 backdrop-blur"
            >
              <p className="font-display text-3xl text-[#FAC775]">{value}</p>
              <p className="font-nav text-sm uppercase tracking-[0.16em] text-white/72">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
