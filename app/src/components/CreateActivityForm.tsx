import { useState } from 'react'
import { categories } from '../data/categories'

const CUSTOM_EMOJIS = ['🎲', '🎬', '🛹', '🎨', '🍦', '⚽', '🎮', '🌳']
const MAX_TITLE_LENGTH = 30

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
  const [selected, setSelected] = useState<number | 'custom'>(0)
  const [customTitle, setCustomTitle] = useState('')
  const [customEmoji, setCustomEmoji] = useState(CUSTOM_EMOJIS[0])
  const [time, setTime] = useState('15:00')

  const isCustom = selected === 'custom'
  const hasTitle = !isCustom || customTitle.trim().length > 0

  function handleShare() {
    if (selected === 'custom') {
      onCreate({ title: customTitle.trim(), emoji: customEmoji, startsAt: time })
    } else {
      const category = categories[selected]
      onCreate({ title: category.label, emoji: category.emoji, startsAt: time })
    }
  }

  return (
    <div className="card">
      <h2>What's the plan?</h2>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {categories.map((category, index) => (
          <button
            key={category.label}
            onClick={() => setSelected(index)}
            className={selected === index ? 'chip selected' : 'chip'}
          >
            {category.emoji} {category.label}
          </button>
        ))}
        <button
          onClick={() => setSelected('custom')}
          className={isCustom ? 'chip selected' : 'chip'}
        >
          Something else ✨
        </button>
      </div>

      {isCustom && (
        <div style={{ marginTop: '12px' }}>
          <input
            type="text"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            placeholder="e.g. Board games at mine"
            maxLength={MAX_TITLE_LENGTH}
          />
          <p style={{ fontSize: '0.85rem', margin: '4px 0 0' }}>
             {customTitle.length}/{MAX_TITLE_LENGTH}
          </p>
          <p>Pick an emoji (optional):</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {CUSTOM_EMOJIS.map((emoji) => (
              <button
                key={emoji}
                onClick={() => setCustomEmoji(emoji)}
                className={
                  customEmoji === emoji ? 'chip emoji-btn selected' : 'chip emoji-btn'
                }
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      <p>
        When?{' '}
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </p>
      <p>{hasLocation ? 'Place chosen 📍' : 'Tap the map to choose where.'}</p>

      <button onClick={handleShare} disabled={!hasLocation || !hasTitle}>
        Share activity
      </button>{' '}
      <button onClick={onCancel}>Cancel</button>
      <p>An open invitation. No pressure to join.</p>
    </div>
  )
}