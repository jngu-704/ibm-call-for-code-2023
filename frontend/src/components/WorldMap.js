import React from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import { useState } from "react";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";

import PowerPlantMarkers from "./PowerPlantMarkers";
import CityMarkers from "./CityMarkers";

export default function WorldMap() {
  const [location, setLocation] = useState("Australia");

  return (
    <>
      <MapContainer
        center={[-26.439, 133.2813]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Power Plants">
            <LayerGroup>
              <PowerPlantMarkers country={location} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cities">
            <LayerGroup>
              <CityMarkers country={location} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
}
