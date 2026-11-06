export type Activity = {
  id: string
  title: string
  emoji: string
  host: string
  startsAt: number
  locationName: string
  interestedFriends: string[]
  position: [number, number]
}