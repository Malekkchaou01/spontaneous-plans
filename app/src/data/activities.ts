import type { Activity } from '../types/activity'

const minutesFromNow = (minutes: number) => Date.now() + minutes * 60 * 1000

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Pizza later',
    emoji: '🍕',
    host: 'Maya',
    startsAt: minutesFromNow(60),
    locationName: 'Silver Lake',
    interestedFriends: ['Adam', 'Lina'],
    position: [51.2295, 6.776],
  },
  {
    id: '2',
    title: 'A little walk',
    emoji: '🚶',
    host: 'Sam',
    startsAt: minutesFromNow(-210),
    locationName: 'Silver Lake Park',
    interestedFriends: [],
    position: [51.225, 6.77],
  },
  {
    id: '3',
    title: 'Coffee?',
    emoji: '☕',
    host: 'You',
    startsAt: minutesFromNow(20),
    locationName: 'Effie St',
    interestedFriends: ['Maya'],
    position: [51.231, 6.782],
  },
]