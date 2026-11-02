import type { Activity } from '../types/activity'

type ActivityCardProps = {
  activity: Activity
}

export default function ActivityCard({ activity }: ActivityCardProps) {
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
    </div>
  )
}