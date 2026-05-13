import { motion } from 'framer-motion'
import MandalaDecor from '../components/MandalaDecor'

export default function About() {
  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
    >
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#1E0B3B] via-[#3B1224] to-[#8B4A05] px-6 py-14 text-white shadow-heritage">
        <MandalaDecor size={260} color="#FAC775" opacity={0.14} className="mandala-spin absolute -right-20 -top-24 -z-10" />
        <p className="font-nav text-sm uppercase tracking-[0.24em] text-[#FAC775]">About</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Bharat Vrindavan</h1>
        <p className="mt-5 max-w-3xl text-xl leading-8 text-white/78">
          Bharat Vrindavan is an immersive gallery built to help people explore India's living cultural heritage through stories, regional clothing, ritual objects, art, music, and 3D interaction.
        </p>
      </section>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <section className="border border-heritage-border bg-heritage-card p-6 shadow-heritage">
          <h2 className="font-display text-2xl">Mission</h2>
          <p className="mt-3 leading-7 text-heritage-muted">
            The project preserves cultural memory in a visual, approachable way, connecting younger audiences with the textiles, tools, objects, and festivals that shape Indian identity.
          </p>
        </section>
        <section className="border border-heritage-border bg-heritage-card p-6 shadow-heritage">
          <h2 className="font-display text-2xl">What's inside</h2>
          <p className="mt-3 leading-7 text-heritage-muted">
            Clothing, jewelry, musical instruments, paintings, pottery, masks, wedding objects, farming tools, state traditions, and festival stories from across India.
          </p>
        </section>
        <section className="border border-heritage-border bg-heritage-card p-6 shadow-heritage">
          <h2 className="font-display text-2xl">Tech</h2>
          <p className="mt-3 leading-7 text-heritage-muted">
            The gallery uses React, Vite, Tailwind CSS, Framer Motion, Zustand, and React Three Fiber to blend fast UI, animation, filtering, and interactive 3D heritage viewing.
          </p>
        </section>
      </div>
    </motion.div>
  )
}
