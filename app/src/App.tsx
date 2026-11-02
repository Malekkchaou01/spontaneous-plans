import { useState } from 'react'
import { activities } from './data/activities'
import MapView from './components/MapView'
import ActivityCard from './components/ActivityCard'

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = activities.find((a) => a.id === selectedId) ?? null

  return (
    <div>
      <h1>Spontaneous Plans</h1>
      <MapView activities={activities} onSelect={setSelectedId} />
      {selected ? (
        <ActivityCard activity={selected} />
      ) : (
        <p>Tap a pin to see the plan.</p>
      )}
    </div>
  )
}

export default App