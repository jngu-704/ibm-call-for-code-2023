import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";
import city from "../img/city.png";
import biomass from "../img/biomass.png";
import coal from "../img/coal.png";
import cogeneration from "../img/cogeneration.png";
import gas from "../img/gas.png";
import geothermal from "../img/geothermal.png";
import hydro from "../img/hydro.png";
import nuclear from "../img/nuclear.png";
import oil from "../img/oil.png";
import solar from "../img/solar.png";
import storage from "../img/storage.png";
import wind from "../img/wind.png";
import waste from "../img/waste.png";
import wave from "../img/wave.png";

export default function WorldMap() {
  const [powerplants, setPowerplants] = useState([]);
  const [cities, setCities] = useState([]);

  const cityIcon = new Icon({
    iconUrl: city,
    iconSize: [30, 30],
  });

  const biomassIcon = new Icon({
    iconUrl: biomass,
    iconSize: [30, 30],
  });

  const coalIcon = new Icon({
    iconUrl: coal,
    iconSize: [30, 30],
  });

  const cogenerationIcon = new Icon({
    iconUrl: cogeneration,
    iconSize: [30, 30],
  });

  const gasIcon = new Icon({
    iconUrl: gas,
    iconSize: [30, 30],
  });

  const geothermalIcon = new Icon({
    iconUrl: geothermal,
    iconSize: [30, 30],
  });

  const hydroIcon = new Icon({
    iconUrl: hydro,
    iconSize: [30, 30],
  });

  const nuclearIcon = new Icon({
    iconUrl: nuclear,
    iconSize: [30, 30],
  });

  const oilIcon = new Icon({
    iconUrl: oil,
    iconSize: [30, 30],
  });

  const solarIcon = new Icon({
    iconUrl: solar,
    iconSize: [30, 30],
  });

  const storageIcon = new Icon({
    iconUrl: storage,
    iconSize: [30, 30],
  });

  const wasteIcon = new Icon({
    iconUrl: waste,
    iconSize: [30, 30],
  });

  const waveIcon = new Icon({
    iconUrl: wave,
    iconSize: [30, 30],
  });

  const windIcon = new Icon({
    iconUrl: wind,
    iconSize: [30, 30],
  });

  function getIcon(type) {
    switch (type) {
      case "Biomass":
        return biomassIcon;
      case "Coal":
        return coalIcon;
      case "Cogeneration":
        return cogenerationIcon;
      case "Gas":
        return gasIcon;
      case "Geothermal":
        return geothermalIcon;
      case "Hydro":
        return hydroIcon;
      case "Nuclear":
        return nuclearIcon;
      case "Oil":
        return oilIcon;
      case "Petcoke":
        return coalIcon;
      case "Solar":
        return solarIcon;
      case "Storage":
        return storageIcon;
      case "Waste":
        return wasteIcon;
      case "Wave":
        return waveIcon;
      case "Wind":
        return windIcon;
      default:
        return hydroIcon;
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/powerplants/?search=Australia")
      .then((response) => setPowerplants(response.data));

    axios
      .get("http://localhost:8000/api/cities/?search=Australia")
      .then((response) => setCities(response.data));
  }, []);

  return (
    <div>
      <MapContainer
        center={[-26.439, 133.2813]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {powerplants.map((powerplant) => (
          <Marker
            key={powerplant.id}
            position={[powerplant.latitude, powerplant.longitude]}
            icon={getIcon(powerplant.primary_fuel)}
            riseOnHover={true}
          >
            <Popup>
              Name: {powerplant.name}
              <br />
              Source: {powerplant.primary_fuel}
            </Popup>
          </Marker>
        ))}
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.latitude, city.longitude]}
            icon={cityIcon}
            riseOnHover={true}
          >
            <Popup>
              Name: {city.name}
              <br />
              Population: {Math.floor(city.population)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
