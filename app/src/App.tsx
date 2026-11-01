import { activities } from './data/activities'
import MapView from './components/MapView'

function App() {
  return (
    <div>
      <h1>Spontaneous Plans</h1>
      <MapView activities={activities} />    
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.emoji} {activity.title} · {activity.startsAt}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App