import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Sphere,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
//"../assets/world-countries.json";

export default function MapChart() {
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
      </ZoomableGroup>
    </ComposableMap>
  );
}
