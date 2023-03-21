import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
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

export default function Legend() {
  const map = useMap();
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "bottomright" });

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        div.innerHTML = "legend";

        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}
