import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";
import city from "../img/city.png";

export default function CityMarkers(props) {
  const [cities, setCities] = useState([]);

  const cityIcon = new Icon({
    iconUrl: city,
    iconSize: [20, 20],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/?search=${props.country}`)
      .then((response) => setCities(response.data));
  }, [props.country]);

  return (
    <>
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
    </>
  );
}
