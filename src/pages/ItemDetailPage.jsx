import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { Link, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, ZoomIn } from 'lucide-react'
import { allItems } from '../data/items'
import ArtifactScroll from '../components/ArtifactScroll'
import OutfitCard from '../components/OutfitCard'
import LoadingScreen from '../components/LoadingScreen'
import ErrorBoundary from '../components/ErrorBoundary'

function HeritageObject({ color }) {
  return (
    <Float speed={1.6} rotationIntensity={0.55} floatIntensity={0.8}>
      <mesh rotation={[0.25, 0.4, 0]}>
        <torusKnotGeometry args={[1, 0.32, 128, 18]} />
        <meshStandardMaterial color={color} metalness={0.45} roughness={0.28} />
      </mesh>
    </Float>
  )
}

export default function ItemDetailPage() {
  const { id } = useParams()
  const [showHint, setShowHint] = useState(true)
  const item = allItems.find((entry) => String(entry.id) === id)

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowHint(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [id])

  if (!item) {
    return (
      <motion.div
        id="main-content"
        role="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6"
      >
        <h1 className="font-display text-4xl">Item not found</h1>
        <Link to="/" className="mt-4 inline-block bg-[#1a0a2e] px-4 py-2 font-nav text-white">Back to Explore</Link>
      </motion.div>
    )
  }

  const related = item.relatedIds.map((relatedId) => allItems.find((entry) => entry.id === relatedId)).filter(Boolean)
  const sameState = allItems.filter((entry) => entry.state === item.state && entry.id !== item.id).slice(0, 3)

  return (
    <motion.div
      id="main-content"
      role="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <section>
          <div className="flex aspect-[4/3] items-center justify-center text-8xl shadow-heritage" style={{ background: `linear-gradient(135deg, ${item.color[0]}, ${item.color[1]})` }}>
            <span role="img" aria-label={`${item.name} from ${item.state}`}>{item.emoji}</span>
          </div>
          <div
            className="relative mt-5 h-80 overflow-hidden border border-heritage-border bg-[#120718]"
            onPointerDown={() => setShowHint(false)}
            onWheel={() => setShowHint(false)}
          >
            <ErrorBoundary>
              <Canvas
                camera={{ position: [0, 0, 4.2], fov: 45 }}
                role="img"
                aria-label={`${item.name} — 3D interactive cultural artifact from India`}
              >
                <ambientLight intensity={0.85} />
                <directionalLight position={[3, 3, 3]} intensity={1.3} />
                <Suspense fallback={null}>
                  <HeritageObject color={item.color[1]} />
                </Suspense>
                <OrbitControls enablePan={false} />
              </Canvas>
            </ErrorBoundary>
            <AnimatePresence>
              {showHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute left-1/2 top-4 z-10 flex -translate-x-1/2 flex-wrap items-center justify-center gap-3 rounded-full bg-black/55 px-4 py-2 text-sm text-white backdrop-blur"
                >
                  <span className="inline-flex items-center gap-2"><RotateCcw size={16} aria-hidden="true" />Drag to rotate</span>
                  <span className="inline-flex items-center gap-2"><ZoomIn size={16} aria-hidden="true" />Scroll to zoom</span>
                </motion.div>
              )}
            </AnimatePresence>
            <LoadingScreen />
          </div>
        </section>
        <section className="bg-heritage-card p-6 shadow-heritage">
          <p className="font-nav text-sm uppercase tracking-[0.2em] text-heritage-muted">{item.story.origin}</p>
          <h1 className="mt-2 font-display text-4xl leading-tight">{item.name}</h1>
          <p className="mt-1 font-nav text-sm uppercase tracking-[0.16em] text-[#C8920A]">{item.state} · {item.region}</p>
          <h2 className="mt-8 font-display text-2xl">{item.story.title}</h2>
          <p className="story-text mt-3">{item.story.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[...item.story.meta, item.fabric, item.festival].map((meta) => (
              <span key={meta} className="rounded-full bg-[#F4E2C6] px-3 py-1 text-sm font-semibold text-[#6E4A08]">{meta}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="border border-heritage-border bg-white px-3 py-1 text-sm">{tag}</span>
            ))}
          </div>
        </section>
      </div>
      <ArtifactScroll title="Related Items" items={related} />
      {sameState.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 font-display text-2xl">Also from {item.state}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sameState.map((entry) => <OutfitCard key={entry.id} item={entry} />)}
          </div>
        </section>
      )}
    </motion.div>
  )
}
