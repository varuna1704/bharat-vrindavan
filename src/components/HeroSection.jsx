import { motion } from 'framer-motion'
import MandalaDecor from './MandalaDecor'

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1E0B3B] via-[#3B1224] to-[#102A43] px-4 py-16 text-white sm:px-6 lg:py-20">
      <MandalaDecor size={420} color="#FAC775" opacity={0.13} className="mandala-spin absolute -right-28 -top-24" />
      <MandalaDecor size={260} color="#FFFCF7" opacity={0.08} className="absolute -bottom-20 left-4" />
      <div className="hero-fade-up relative mx-auto max-w-7xl">
        <p className="font-nav text-sm uppercase tracking-[0.3em] text-[#FAC775]">India's living archive</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
          Bharat Vrindavan
        </h1>
        <p className="mt-5 max-w-3xl text-2xl leading-8 text-white/82">
          An immersive 3D cultural heritage gallery of traditional clothing, jewelry, instruments, paintings, pottery,
          masks, tools, and wedding objects.
        </p>
        <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ['2400+', 'outfits mapped'],
            ['650+', 'artifacts traced'],
            ['120+', 'stories archived'],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="border border-white/15 bg-white/10 p-5 backdrop-blur"
            >
              <p className="font-display text-3xl text-[#FAC775]">{value}</p>
              <p className="font-nav text-sm uppercase tracking-[0.16em] text-white/70">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
