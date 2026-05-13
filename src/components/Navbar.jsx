import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import MandalaDecor from './MandalaDecor'
import { useHeritageStore } from '../store/useHeritageStore'

const links = [
  ['/', 'Explore'],
  ['/states', 'States'],
  ['/stories', 'Stories'],
  ['/festivals', 'Festivals'],
  ['/about', 'About'],
]

function linkClass({ isActive }) {
  return `border-b-2 px-1 py-2 font-nav text-sm uppercase tracking-[0.12em] transition ${
    isActive ? 'border-[#FAC775] text-[#FAC775]' : 'border-transparent text-white/78 hover:border-white/35 hover:text-white'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { searchQuery, setSearchQuery } = useHeritageStore()

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/60 text-white shadow-lg backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <MandalaDecor size={42} color="#FAC775" opacity={0.95} className="mandala-spin shrink-0" />
          <div className="min-w-0">
            <p className="truncate font-display text-xl font-black leading-none text-[#FAC775]">Bharat Vrindavan</p>
            <p className="hidden font-nav text-xs uppercase tracking-[0.22em] text-white/70 sm:block">Cultural Heritage Gallery</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <label className="hidden min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/80 backdrop-blur lg:flex lg:w-72">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search collection</span>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search stories, states..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/45"
          />
        </label>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-40 bg-black/45 md:hidden"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[86vw] bg-[#1E0B3B] p-5 shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-[#FAC775]">Bharat Vrindavan</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
                  aria-label="Close navigation menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-4">
                {links.map(([to, label]) => (
                  <NavLink key={to} to={to} className={linkClass} onClick={() => setOpen(false)}>
                    {label}
                  </NavLink>
                ))}
              </nav>
              <label className="mt-8 flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/80 backdrop-blur">
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">Search collection</span>
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search collection..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/45"
                />
              </label>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
