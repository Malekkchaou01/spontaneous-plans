import type { Activity } from '../types/activity'

type ActivityCardProps = {
  activity: Activity
  currentUser: string
  onToggleInterest: (id: string) => void
  onRemove: (id: string) => void
}

export default function ActivityCard({
  activity,
  currentUser,
  onToggleInterest,
  onRemove,
}: ActivityCardProps) {
  const isHost = activity.host === currentUser
  const isInterested = activity.interestedFriends.includes(currentUser)

  return (
    <div
      style={{
        padding: '16px',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        textAlign: 'left',
      }}
    >
      <h2>
        {activity.emoji} {activity.title}
      </h2>
      <p>
        Suggested by {activity.host} · {activity.startsAt}
      </p>
      <p>{activity.locationName}</p>
      <p>
        {activity.interestedFriends.length > 0
          ? `Interested: ${activity.interestedFriends.join(', ')}`
          : 'Nobody has joined yet'}
      </p>

      {isHost ? (
        <button onClick={() => onRemove(activity.id)}>
          Remove my activity
        </button>
      ) : (
        <>
          <button onClick={() => onToggleInterest(activity.id)}>
            {isInterested ? "You're interested ✓" : "I'm interested"}
          </button>
          <p>No pressure. Plans can stay spontaneous.</p>
        </>
      )}
    </div>
  )
}