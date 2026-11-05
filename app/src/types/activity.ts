export type Activity = {
  id: string
  title: string
  emoji: string
  host: string
  startsAt: string
  locationName: string
  interestedFriends: string[]
  position: [number, number]
  createdAt: number
}