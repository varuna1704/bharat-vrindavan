import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import MandalaDecor from './MandalaDecor'

const footerLinks = [
  ['/about', 'About'],
  ['mailto:hello@bharat-vrindavan.vercel.app', 'Contact'],
  ['https://github.com/varuna1704/bharat-vrindavan', 'GitHub'],
]

function GithubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.95.68 1.91v2.82c0 .27.18.58.69.49A10.1 10.1 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function InstagramMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  )
}

function XMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.3 3h3.1l-6.8 7.8 8 10.2h-6.3l-4.9-6.3L5.8 21H2.7L10 12.6 2.3 3h6.4l4.4 5.7L18.3 3Zm-1.1 16.2h1.7L7.7 4.7H5.9l11.3 14.5Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1E0B3B] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <MandalaDecor size={46} color="#FAC775" opacity={0.9} className="mandala-spin shrink-0" />
            <p className="font-display text-xl font-black text-[#FAC775]">Bharat Vrindavan</p>
          </div>
          <p className="mt-4 max-w-sm text-white/72">
            Preserving India's cultural heritage through immersive technology
          </p>
        </div>

        <div>
          <h2 className="font-nav text-sm uppercase tracking-[0.18em] text-[#FAC775]">Links</h2>
          <nav className="mt-4 grid gap-2">
            {footerLinks.map(([to, label]) => (
              to.startsWith('http') || to.startsWith('mailto:') ? (
                <a
                  key={to}
                  href={to}
                  className="text-white/70 transition hover:text-[#FAC775]"
                  target={to.startsWith('http') ? '_blank' : undefined}
                  rel={to.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {label}
                </a>
              ) : (
                <Link key={to} to={to} className="text-white/70 transition hover:text-[#FAC775]">
                  {label}
                </Link>
              )
            ))}
          </nav>
        </div>

        <div>
          <h2 className="font-nav text-sm uppercase tracking-[0.18em] text-[#FAC775]">Contact</h2>
          <a
            className="mt-4 inline-flex items-center gap-2 text-white/70 transition hover:text-[#FAC775]"
            href="mailto:hello@bharat-vrindavan.vercel.app"
          >
            <Mail size={16} aria-hidden="true" />
            hello@bharat-vrindavan.vercel.app
          </a>
          <div className="mt-5 flex gap-3">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FAC775] hover:text-[#1E0B3B]"
              href="https://github.com/varuna1704/bharat-vrindavan"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubMark />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FAC775] hover:text-[#1E0B3B]"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramMark />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#FAC775] hover:text-[#1E0B3B]"
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter or X"
            >
              <XMark />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/58">
        © 2025 Bharat Vrindavan. All rights reserved.
      </div>
    </footer>
  )
}
