import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";
import city from "../img/city.png";

export default function CityMarkers(props) {
  const cityIcon = new Icon({
    iconUrl: city,
    iconSize: [20, 20],
  });

  return (
    <>
      {props.cities.map((city) => (
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
    </>
  );
}
