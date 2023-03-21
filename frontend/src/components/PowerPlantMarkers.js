import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";
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

export default function PowerPlantMarkers(props) {
  const iconSize = [25, 25];

  const biomassIcon = new Icon({
    iconUrl: biomass,
    iconSize: iconSize,
  });

  const coalIcon = new Icon({
    iconUrl: coal,
    iconSize: iconSize,
  });

  const cogenerationIcon = new Icon({
    iconUrl: cogeneration,
    iconSize: iconSize,
  });

  const gasIcon = new Icon({
    iconUrl: gas,
    iconSize: iconSize,
  });

  const geothermalIcon = new Icon({
    iconUrl: geothermal,
    iconSize: iconSize,
  });

  const hydroIcon = new Icon({
    iconUrl: hydro,
    iconSize: iconSize,
  });

  const nuclearIcon = new Icon({
    iconUrl: nuclear,
    iconSize: iconSize,
  });

  const oilIcon = new Icon({
    iconUrl: oil,
    iconSize: iconSize,
  });

  const solarIcon = new Icon({
    iconUrl: solar,
    iconSize: iconSize,
  });

  const storageIcon = new Icon({
    iconUrl: storage,
    iconSize: iconSize,
  });

  const wasteIcon = new Icon({
    iconUrl: waste,
    iconSize: iconSize,
  });

  const waveIcon = new Icon({
    iconUrl: wave,
    iconSize: iconSize,
  });

  const windIcon = new Icon({
    iconUrl: wind,
    iconSize: iconSize,
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

  return (
    <>
      {props.powerplants.map((powerplant) => (
        <Marker
          key={powerplant.id}
          position={[powerplant.latitude, powerplant.longitude]}
          icon={getIcon(powerplant.primary_fuel)}
          riseOnHover={true}
        >
          <Popup>
            Name: {powerplant.name}
            <br />
            Primary Fuel: {powerplant.primary_fuel}
            <br />
            Capacity: {parseFloat(powerplant.capacity_mw)} MW
          </Popup>
        </Marker>
      ))}
    </>
  );
}
