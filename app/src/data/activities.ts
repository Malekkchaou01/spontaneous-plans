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
  },
  {
    id: '2',
    title: 'A little walk',
    emoji: '🚶',
    host: 'Sam',
    startsAt: '4:30 pm',
    locationName: 'Silver Lake Park',
    interestedFriends: [],
  },
  {
    id: '3',
    title: 'Coffee?',
    emoji: '☕',
    host: 'You',
    startsAt: '3:00 pm',
    locationName: 'Effie St',
    interestedFriends: ['Maya'],
  },
]