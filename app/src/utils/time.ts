const GRACE_MS = 15 * 60 * 1000

export function timeToTimestamp(time: string): number {
  const [hours, minutes] = time.split(':').map(Number)
  const date = new Date()
  date.setHours(hours, minutes, 0, 0)
  if (date.getTime() < Date.now() - GRACE_MS) {
    date.setDate(date.getDate() + 1)
  }
  return date.getTime()
}

export function formatTime(timestamp: number): string {
  const time = new Date(timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
  const startOfTomorrow = new Date()
  startOfTomorrow.setHours(24, 0, 0, 0)
  return timestamp >= startOfTomorrow.getTime() ? `Tomorrow ${time}` : time
}