import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "./WorldMap.css";
import "leaflet/dist/leaflet.css";

export default function WorldMap() {
  const [powerplants, setPowerplants] = useState([]);
  const [cities, setCities] = useState([]);

  const solarIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3463/3463440.png",
    iconSize: [30, 30],
  });

  const windTurbineIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/4293/4293738.png",
    iconSize: [30, 30],
  });

  const oilIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3129/3129632.png",
    iconSize: [30, 30],
  });

  const hydroIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/3444/3444136.png",
    iconSize: [30, 30],
  });

  const gasIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/869/869785.png",
    iconSize: [30, 30],
  });

  const biomassIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/2355/2355270.png",
    iconSize: [30, 30],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/powerplants/?search=Australia")
      .then((response) => setPowerplants(response.data));

    axios
      .get("http://localhost:8000/api/cities/")
      .then((response) => setCities(response.data));
  }, []);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {powerplants.map((powerplant) => (
          <Marker
            key={powerplant.id}
            position={[powerplant.latitude, powerplant.longitude]}
            icon={solarIcon}
          ></Marker>
        ))}
      </MapContainer>
    </div>
  );
}
