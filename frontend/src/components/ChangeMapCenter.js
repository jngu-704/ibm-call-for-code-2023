import { useMap } from "react-leaflet";

export default function ChangeMapCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
