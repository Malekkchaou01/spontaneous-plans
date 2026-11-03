import { useState } from 'react'
import { categories } from '../data/categories'

type CreateActivityFormProps = {
  hasLocation: boolean
  onCreate: (data: { title: string; emoji: string; startsAt: string }) => void
  onCancel: () => void
}

export default function CreateActivityForm({
  hasLocation,
  onCreate,
  onCancel,
}: CreateActivityFormProps) {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [time, setTime] = useState('15:00')

  function handleShare() {
    const category = categories[categoryIndex]
    onCreate({ title: category.label, emoji: category.emoji, startsAt: time })
  }

  return (
    <div style={{ padding: '16px', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)', textAlign: 'left' }}>
      <h2>What's the plan?</h2>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <button
            key={category.label}
            onClick={() => setCategoryIndex(index)}
            style={{ fontWeight: index === categoryIndex ? 'bold' : 'normal' }}
          >
            {category.emoji} {category.label}
          </button>
        ))}
      </div>
      <p>
        When?{' '}
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </p>
      <p>{hasLocation ? 'Place chosen 📍' : 'Tap the map to choose where.'}</p>
      <button onClick={handleShare} disabled={!hasLocation}>
        Share activity
      </button>{' '}
      <button onClick={onCancel}>Cancel</button>
      <p>An open invitation. No pressure to join.</p>
    </div>
  )
}