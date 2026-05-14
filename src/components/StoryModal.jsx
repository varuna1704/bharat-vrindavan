import { useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import MandalaDecor from './MandalaDecor'
import { useHeritageStore } from '../store/useHeritageStore'

export default function StoryModal() {
  const { selectedItem, setSelectedItem } = useHeritageStore()
  const closeButtonRef = useRef(null)
  const closeModal = useCallback(() => setSelectedItem(null), [setSelectedItem])

  useEffect(() => {
    if (!selectedItem) return undefined
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
      if (event.key === 'Tab') {
        const focusable = document.querySelectorAll('[data-story-modal] button, [data-story-modal] a')
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [closeModal, selectedItem, setSelectedItem])

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#120718]/70 px-4 py-6 backdrop-blur-[10px] sm:items-center sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={closeModal}
        >
          <motion.section
            data-story-modal
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-title"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="my-auto w-full max-w-3xl overflow-hidden bg-heritage-card shadow-2xl"
          >
            <div
              className="relative overflow-hidden p-6 text-white"
              style={{ background: `linear-gradient(135deg, ${selectedItem.color[0]}, ${selectedItem.color[1]})` }}
            >
              <MandalaDecor size={220} color="#FFFFFF" opacity={0.12} className="mandala-spin absolute -right-12 -top-16" />
              <button
                ref={closeButtonRef}
                type="button"
                onMouseDown={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  closeModal()
                }}
                onClick={(event) => {
                  event.preventDefault()
                  event.stopPropagation()
                  closeModal()
                }}
                className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close story"
              >
                <X size={18} aria-hidden="true" />
              </button>
              <div className="relative pr-12">
                <div className="text-6xl" role="img" aria-label={selectedItem.name}>
                  {selectedItem.emoji}
                </div>
                <p className="mt-4 font-nav text-xs uppercase tracking-[0.24em] text-white/72">{selectedItem.story.origin}</p>
                <h2 id="story-title" className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
                  {selectedItem.story.title}
                </h2>
              </div>
            </div>
            <div className="max-h-[min(52vh,28rem)] overflow-y-auto p-6">
              <p className="story-text text-heritage-text">{selectedItem.story.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedItem.story.meta.map((meta) => (
                  <span key={meta} className="rounded-full bg-[#F4E2C6] px-3 py-1 text-sm font-semibold text-[#6E4A08]">
                    {meta}
                  </span>
                ))}
              </div>
              <div className="mt-5">
                <p className="font-nav text-xs uppercase tracking-[0.18em] text-heritage-muted">Who wears it</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedItem.persons.map((person) => (
                    <span key={person} className="border border-heritage-border bg-white px-3 py-1 text-sm text-heritage-text">
                      {person}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
