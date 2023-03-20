import React from "react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";
import PowerPlantMarkers from "./PowerPlantMarkers";
import CityMarkers from "./CityMarkers";
import ChangeMapCenter from "./ChangeMapCenter";
import Legend from "./Legend";

export default function WorldMap(props) {
  const [map, setMap] = useState(null);

  return (
    <>
      <MapContainer
        center={props.coordinates}
        zoom={5}
        scrollWheelZoom={true}
        whenCreated={setMap}
      >
        <ChangeMapCenter center={props.coordinates} zoom={5} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Power Plants">
            <LayerGroup>
              <PowerPlantMarkers country={props.location} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cities">
            <LayerGroup>
              <CityMarkers country={props.location} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
        <Legend map={map} />
      </MapContainer>
    </>
  );
}
