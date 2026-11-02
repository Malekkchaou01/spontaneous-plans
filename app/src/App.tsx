import { useState } from 'react'
import { activities as initialActivities } from './data/activities'
import MapView from './components/MapView'
import ActivityCard from './components/ActivityCard'

const CURRENT_USER = 'You'

function App() {
  const [items, setItems] = useState(initialActivities)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = items.find((a) => a.id === selectedId) ?? null

  function toggleInterest(id: string) {
    setItems((current) =>
      current.map((a) => {
        if (a.id !== id) return a
        const isInterested = a.interestedFriends.includes(CURRENT_USER)
        return {
          ...a,
          interestedFriends: isInterested
            ? a.interestedFriends.filter((name) => name !== CURRENT_USER)
            : [...a.interestedFriends, CURRENT_USER],
        }
      }),
    )
  }

  return (
    <div>
      <h1>Spontaneous Plans</h1>
      <MapView activities={items} onSelect={setSelectedId} />
      {selected ? (
        <ActivityCard
          activity={selected}
          currentUser={CURRENT_USER}
          onToggleInterest={toggleInterest}
        />
      ) : (
        <p>Tap a pin to see the plan.</p>
      )}
    </div>
  )
}

export default App