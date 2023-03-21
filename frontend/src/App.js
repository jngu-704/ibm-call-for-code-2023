import "./App.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import WorldMap from "./components/WorldMap";
import ListData from "./components/ListData";

function App() {
  const [location, setLocation] = useState("AUS");
  const [coordinates, setCoordinates] = useState([-27, 133]);
  const [cities, setCities] = useState([]);
  const [powerplants, setPowerplants] = useState([]);

  const inputRef = useRef(null);

  const handleClick = () => {
    let input = inputRef.current.value.toUpperCase();
    const iso3Toiso2 = require("country-iso-3-to-2");
    const geos = require("geos-major");
    let coordinates = geos.country(iso3Toiso2(input));
    setLocation(input);
    setCoordinates([coordinates.latitude, coordinates.longitude]);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/?search=${location}`)
      .then((response) => setCities(response.data));

    axios
      .get(`http://localhost:8000/api/powerplants/?search=${location}`)
      .then((response) => setPowerplants(response.data));
  }, [location]);

  return (
    <div>
      <input ref={inputRef} type="text" id="location" name="location" />
      <button onClick={handleClick}>Submit</button>
      <ListData powerplants={powerplants} cities={cities} />
      {/* <WorldMap
        coordinates={coordinates}
        powerplants={powerplants}
        cities={cities}
      /> */}
    </div>
  );
}

export default App;
