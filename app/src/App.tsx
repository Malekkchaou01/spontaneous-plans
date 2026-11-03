import { useState } from 'react'
import { activities as initialActivities } from './data/activities'
import type { Activity } from './types/activity'
import MapView from './components/MapView'
import ActivityCard from './components/ActivityCard'
import CreateActivityForm from './components/CreateActivityForm'

const CURRENT_USER = 'You'
const MAP_CENTER: [number, number] = [51.2277, 6.7735]

function App() {
  const [items, setItems] = useState<Activity[]>(initialActivities)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
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

  function createActivity(data: { title: string; emoji: string; startsAt: string }) {
    const newActivity: Activity = {
      id: Date.now().toString(),
      title: data.title,
      emoji: data.emoji,
      host: CURRENT_USER,
      startsAt: data.startsAt,
      locationName: 'Near the city center',
      interestedFriends: [],
      position: [
        MAP_CENTER[0] + (Math.random() - 0.5) * 0.01,
        MAP_CENTER[1] + (Math.random() - 0.5) * 0.01,
      ],
    }
    setItems((current) => [...current, newActivity])
    setSelectedId(newActivity.id)
    setShowForm(false)
  }

  return (
    <div>
      <h1>Spontaneous Plans</h1>
      <MapView activities={items} onSelect={setSelectedId} />
      {showForm ? (
        <CreateActivityForm
          onCreate={createActivity}
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          {selected ? (
            <ActivityCard
              activity={selected}
              currentUser={CURRENT_USER}
              onToggleInterest={toggleInterest}
            />
          ) : (
            <p>Tap a pin to see the plan.</p>
          )}
          <button onClick={() => setShowForm(true)}>+ Suggest an activity</button>
        </>
      )}
    </div>
  )
}

export default App