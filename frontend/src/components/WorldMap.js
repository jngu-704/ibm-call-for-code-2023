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
    <div aria-label="Map">
      <MapContainer
        center={props.coordinates}
        zoom={5}
        scrollWheelZoom={true}
        worldCopyJump={true}
      >
        <ChangeMapCenter center={props.coordinates} zoom={5} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={false}
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Renewable Energy Power Plants">
            <LayerGroup>
              <PowerPlantMarkers powerplants={props.renewablePowerplants} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Non Renewable Energy Power Plants">
            <LayerGroup>
              <PowerPlantMarkers powerplants={props.nonRenewablePowerplants} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cities">
            <LayerGroup>
              <CityMarkers cities={props.cities} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}
