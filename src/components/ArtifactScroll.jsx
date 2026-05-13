import OutfitCard from './OutfitCard'

export default function ArtifactScroll({ title, items }) {
  if (!items.length) return null

  return (
    <section className="mt-10">
      <h2 className="mb-4 font-display text-2xl">{title}</h2>
      <div className="scrollbar-soft flex gap-4 overflow-x-auto pb-4">
        {items.map((item) => (
          <div key={item.id} className="w-72 shrink-0">
            <OutfitCard item={item} />
          </div>
        ))}
      </div>
    </section>
  )
}
