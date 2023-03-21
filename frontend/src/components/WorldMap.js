import React from "react";
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

export default function WorldMap(props) {
  return (
    <>
      <MapContainer center={props.coordinates} zoom={5} scrollWheelZoom={true}>
        <ChangeMapCenter center={props.coordinates} zoom={5} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Power Plants">
            <LayerGroup>
              <PowerPlantMarkers powerplants={props.powerplants} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cities">
            <LayerGroup>
              <CityMarkers cities={props.cities} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
}
