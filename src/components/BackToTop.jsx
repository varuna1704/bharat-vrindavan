import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C8920A] text-white shadow-heritage transition hover:bg-[#1a0a2e]"
          aria-label="Back to top"
        >
          <ChevronUp size={22} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
