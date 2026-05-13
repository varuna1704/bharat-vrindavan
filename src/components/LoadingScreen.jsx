import { useProgress } from '@react-three/drei'
import { AnimatePresence, motion } from 'framer-motion'
import MandalaDecor from './MandalaDecor'

export default function LoadingScreen() {
  const { progress, active } = useProgress()
  const isVisible = active && progress < 100

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0a00] via-[#3B1224] to-[#1E0B3B] px-6 text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="status"
          aria-live="polite"
        >
          <MandalaDecor size={104} color="#FAC775" opacity={0.95} className="mandala-spin" />
          <p className="mt-5 font-nav text-2xl font-bold text-[#FAC775]">Loading Bharat Vrindavan...</p>
          <div className="mt-8 h-2 w-full max-w-sm overflow-hidden rounded-full bg-white/16">
            <motion.div
              className="h-full rounded-full bg-[#FAC775]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.round(progress)}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <p className="mt-3 font-nav text-sm uppercase tracking-[0.18em] text-white/70">{Math.round(progress)}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
