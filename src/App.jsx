import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import StoryModal from './components/StoryModal'
import ExplorePage from './pages/ExplorePage'
import StatesPage from './pages/StatesPage'
import StoriesPage from './pages/StoriesPage'
import FestivalsPage from './pages/FestivalsPage'
import ItemDetailPage from './pages/ItemDetailPage'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.22 }}
        >
          <Routes location={location}>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/states" element={<StatesPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/festivals" element={<FestivalsPage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <StoryModal />
    </div>
  )
}

export default App
