import type { Activity } from '../types/activity'

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Pizza later',
    emoji: '🍕',
    host: 'Maya',
    startsAt: '3:00 pm',
    locationName: 'Silver Lake',
    interestedFriends: ['Adam', 'Lina'],
    position: [51.2295, 6.776],
  },
  {
    id: '2',
    title: 'A little walk',
    emoji: '🚶',
    host: 'Sam',
    startsAt: '4:30 pm',
    locationName: 'Silver Lake Park',
    interestedFriends: [],
    position: [51.225, 6.77],
  },
  {
    id: '3',
    title: 'Coffee?',
    emoji: '☕',
    host: 'You',
    startsAt: '3:00 pm',
    locationName: 'Effie St',
    interestedFriends: ['Maya'],
    position: [51.231, 6.782],
  },
]