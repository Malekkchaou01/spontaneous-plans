import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import { divIcon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Activity } from '../types/activity'

type Position = [number, number]

type MapViewProps = {
  activities: Activity[]
  onSelect: (id: string) => void
  pickedPosition: Position | null
  onPickLocation?: (position: Position) => void
}

function emojiIcon(emoji: string) {
  return divIcon({
    html: `<div style="width:46px;height:46px;display:flex;align-items:center;justify-content:center;font-size:26px;background:white;border:2.5px solid #172b24;border-radius:50%;box-shadow:0 3px 0 rgba(0,0,0,0.15);">${emoji}</div>`,
    className: '',
    iconSize: [46, 46],
    iconAnchor: [23, 23],
  })
}

function pinIcon() {
  return divIcon({
    html: `<div style="font-size:34px;line-height:1;filter:drop-shadow(0 2px 2px rgba(0,0,0,0.3));">📍</div>`,
    className: '',
    iconSize: [34, 34],
    iconAnchor: [17, 34],
  })
}

function ClickHandler({ onPick }: { onPick: (position: Position) => void }) {
  useMapEvents({
    click(e) {
      onPick([e.latlng.lat, e.latlng.lng])
    },
  })
  return null
}

export default function MapView({
  activities,
  onSelect,
  pickedPosition,
  onPickLocation,
}: MapViewProps) {
  return (
    <MapContainer
      center={[51.2277, 6.7735]}
      zoom={14}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {onPickLocation && <ClickHandler onPick={onPickLocation} />}
      {activities.map((activity) => (
        <Marker
          key={activity.id}
          position={activity.position}
          icon={emojiIcon(activity.emoji)}
          eventHandlers={{ click: () => onSelect(activity.id) }}
        />
      ))}
      {pickedPosition && (
  <Marker position={pickedPosition} icon={pinIcon()} />
      )}
    </MapContainer>
  )
}