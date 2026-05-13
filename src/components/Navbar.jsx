import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import MandalaDecor from './MandalaDecor'
import { useHeritageStore } from '../store/useHeritageStore'

const links = [
  ['/', 'Explore'],
  ['/states', 'States'],
  ['/stories', 'Stories'],
  ['/festivals', 'Festivals'],
]

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useHeritageStore()

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-white/10 text-white shadow-lg"
      style={{ background: 'var(--bg-nav)' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <MandalaDecor size={42} color="#FAC775" opacity={0.95} className="mandala-spin shrink-0" />
          <div>
            <p className="font-display text-xl font-black leading-none text-[#FAC775]">Bharat Vrindavan</p>
            <p className="font-nav text-xs uppercase tracking-[0.22em] text-white/70">Cultural Heritage Gallery</p>
          </div>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2 font-nav text-sm">
          {links.map(([to, label]) => (
            <motion.div key={to} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-white text-[#1E0B3B]' : 'text-white/80 hover:bg-white/10 hover:text-white'}`
              }
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <label className="flex min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-white/80 backdrop-blur lg:w-72">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Search collection</span>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search stories, states..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-white/45"
          />
        </label>
      </div>
    </motion.header>
  )
}
