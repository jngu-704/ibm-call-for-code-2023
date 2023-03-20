import "./App.css";
import { useState, useRef } from "react";
import WorldMap from "./components/WorldMap";

function App() {
  const [location, setLocation] = useState("AUS");
  const [coordinates, setCoordinates] = useState([-27, 133]);
  const inputRef = useRef(null);

  const handleClick = () => {
    let input = inputRef.current.value.toUpperCase();
    const iso3Toiso2 = require("country-iso-3-to-2");
    const geos = require("geos-major");
    let coordinates = geos.country(iso3Toiso2(input));
    setLocation(input);
    setCoordinates([coordinates.latitude, coordinates.longitude]);
  };

  return (
    <div>
      <input ref={inputRef} type="text" id="location" name="location" />
      <button onClick={handleClick}>Submit</button>

      <WorldMap location={location} coordinates={coordinates} />
    </div>
  );
}

export default App;
