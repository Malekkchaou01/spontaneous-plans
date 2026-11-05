import { useEffect, useState } from 'react'
import { activities as initialActivities } from './data/activities'
import { EXPIRY_MS } from './config'
import type { Activity } from './types/activity'
import MapView from './components/MapView'
import ActivityCard from './components/ActivityCard'
import CreateActivityForm from './components/CreateActivityForm'
import { timeTodayToTimestamp } from './utils/time'

const CURRENT_USER = 'You'

function App() {
  const [items, setItems] = useState<Activity[]>(initialActivities)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [pickedPosition, setPickedPosition] = useState<[number, number] | null>(null)
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 30 * 1000)
    return () => clearInterval(timer)
  }, [])

  const visibleItems = items.filter((a) => now < a.startsAt + EXPIRY_MS)
  const selected = visibleItems.find((a) => a.id === selectedId) ?? null

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

  function removeActivity(id: string) {
    setItems((current) => current.filter((a) => a.id !== id))
    setSelectedId(null)
  }

  function closeForm() {
    setShowForm(false)
    setPickedPosition(null)
  }

  function createActivity(data: { title: string; emoji: string; startsAt: string }) {
    if (!pickedPosition) return
    const newActivity: Activity = {
      id: Date.now().toString(),
      title: data.title,
      emoji: data.emoji,
      host: CURRENT_USER,
      startsAt: timeTodayToTimestamp(data.startsAt),      locationName: 'Chosen on the map',
      interestedFriends: [],
      position: pickedPosition,
    }
    setItems((current) => [...current, newActivity])
    setSelectedId(newActivity.id)
    closeForm()
  }

  return (
    <div>
      <h1>Spontaneous Plans ✨</h1>
      <MapView
        activities={visibleItems}
        onSelect={setSelectedId}
        pickedPosition={pickedPosition}
        onPickLocation={showForm ? setPickedPosition : undefined}
      />
      {showForm ? (
        <CreateActivityForm
          hasLocation={pickedPosition !== null}
          onCreate={createActivity}
          onCancel={closeForm}
        />
      ) : (
        <>
          {selected ? (
            <ActivityCard
              activity={selected}
              currentUser={CURRENT_USER}
              onToggleInterest={toggleInterest}
              onRemove={removeActivity}
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