import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
  Marker,
  Annotation,
} from "react-simple-maps";

//"http://localhost:8000/api/powerplants/?search=Australia"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
//"../assets/world-countries.json";

export default function MapChart() {
  const [powerplants, setPowerplants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/powerplants/")
      .then((response) => setPowerplants(response.data));
  }, []);

  console.log(powerplants);

  return (
    <ComposableMap>
      <ZoomableGroup center={[0, 0]} zoom={1}>
        <Sphere />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {powerplants.map((powerplant) => (
          <Marker
            key={powerplant.id}
            coordinates={[powerplant.longitude, powerplant.latitude]}
          >
            <circle r={0.1} fill="#F00" />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
}
