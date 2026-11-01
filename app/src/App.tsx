import { activities } from './data/activities'

function App() {
  return (
    <div>
      <h1>Spontaneous Plans</h1>
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