import { Link } from 'react-router-dom'
import MandalaDecor from './MandalaDecor'

const footerLinks = [
  ['/', 'Explore'],
  ['/states', 'States'],
  ['/stories', 'Stories'],
  ['/festivals', 'Festivals'],
  ['/about', 'About'],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1E0B3B] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <MandalaDecor size={46} color="#FAC775" opacity={0.9} className="mandala-spin shrink-0" />
            <p className="font-display text-xl font-black text-[#FAC775]">Bharat Vrindavan</p>
          </div>
          <p className="mt-4 max-w-sm text-white/72">Preserving India's cultural heritage</p>
        </div>

        <div>
          <h2 className="font-nav text-sm uppercase tracking-[0.18em] text-[#FAC775]">Links</h2>
          <nav className="mt-4 grid gap-2">
            {footerLinks.map(([to, label]) => (
              <Link key={to} to={to} className="text-white/70 transition hover:text-[#FAC775]">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-nav text-sm uppercase tracking-[0.18em] text-[#FAC775]">Contact</h2>
          <p className="mt-4 text-white/70">hello@bharat-vrindavan.vercel.app</p>
          <div className="mt-5 flex gap-3">
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-nav text-xs font-bold transition hover:bg-[#FAC775] hover:text-[#1E0B3B]" href="https://github.com/varuna1704/bharat-vrindavan" target="_blank" rel="noreferrer" aria-label="GitHub">
              GH
            </a>
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-nav text-xs font-bold transition hover:bg-[#FAC775] hover:text-[#1E0B3B]" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              IG
            </a>
            <a className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-nav text-sm font-bold transition hover:bg-[#FAC775] hover:text-[#1E0B3B]" href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Twitter or X">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/58">
        © 2025 Bharat Vrindavan. Crafted with love for India's heritage.
      </div>
    </footer>
  )
}
