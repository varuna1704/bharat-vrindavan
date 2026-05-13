import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MandalaDecor from '../components/MandalaDecor'

export default function NotFound() {
  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-gradient-to-br from-[#1E0B3B] via-[#3B1224] to-[#102A43] px-4 py-16 text-center text-white"
    >
      <div className="relative isolate max-w-4xl overflow-hidden px-6 py-14">
        <MandalaDecor size={300} color="#FAC775" opacity={0.14} className="mandala-spin absolute -right-16 -top-20 -z-10" />
        <p className="font-display text-7xl font-black text-[#FAC775] sm:text-8xl">404</p>
        <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          यह पृष्ठ नहीं मिला — This page was not found
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-xl text-white/74">
          The story you are looking for may have moved, or the route does not exist in this gallery.
        </p>
        <Link to="/" className="mt-8 inline-flex bg-[#FAC775] px-5 py-3 font-nav text-sm uppercase tracking-[0.14em] text-[#1E0B3B] transition hover:bg-white">
          Return to Gallery
        </Link>
      </div>
    </motion.div>
  )
}
