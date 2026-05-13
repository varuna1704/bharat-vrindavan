export default function MandalaDecor({ size = 120, color = 'currentColor', opacity = 0.3, className = '' }) {
  const center = 50
  const points = Array.from({ length: 8 }, (_, index) => {
    const angle = (Math.PI * 2 * index) / 8 - Math.PI / 2
    const radius = index % 2 === 0 ? 42 : 18
    return `${center + Math.cos(angle) * radius},${center + Math.sin(angle) * radius}`
  }).join(' ')

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ color, opacity }}
      role="presentation"
      aria-hidden="true"
    >
      {[10, 20, 31, 40, 48].map((radius) => (
        <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="0.8" />
      ))}
      {Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12
        return (
          <line
            key={index}
            x1={50 + Math.cos(angle) * 8}
            y1={50 + Math.sin(angle) * 8}
            x2={50 + Math.cos(angle) * 48}
            y2={50 + Math.sin(angle) * 48}
            stroke="currentColor"
            strokeWidth="0.7"
          />
        )
      })}
      <polygon points={points} fill="none" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  )
}
