import { create } from 'zustand'

export const useHeritageStore = create((set) => ({
  activePerson: 'All',
  activeRegion: 'All India',
  activeCategory: 'all',
  searchQuery: '',
  selectedItem: null,
  setActivePerson: (activePerson) => set({ activePerson }),
  setActiveRegion: (activeRegion) => set({ activeRegion }),
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSelectedItem: (selectedItem) => set({ selectedItem }),
  clearFilters: () =>
    set({
      activePerson: 'All',
      activeRegion: 'All India',
      activeCategory: 'all',
      searchQuery: '',
    }),
}))

export default useHeritageStore
