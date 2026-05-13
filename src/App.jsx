import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import StoryModal from './components/StoryModal'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ExplorePage from './pages/ExplorePage'
import StatesPage from './pages/StatesPage'
import StoriesPage from './pages/StoriesPage'
import FestivalsPage from './pages/FestivalsPage'
import ItemDetailPage from './pages/ItemDetailPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen pt-[72px]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/states" element={<StatesPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <StoryModal />
    </div>
  )
}

export default App
