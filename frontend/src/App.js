import "./App.css";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import axios from "axios";
import WorldMap from "./components/WorldMap";
import MapData from "./components/MapData";

function App() {
  const [location, setLocation] = useState("AUS");
  const [coordinates, setCoordinates] = useState([-27, 133]);
  const [cities, setCities] = useState([]);
  const [powerplants, setPowerplants] = useState([]);
  const [renewablePowerplants, setRenewablePowerplants] = useState([]);
  const [nonRenewablePowerplants, setNonRenewablePowerplants] = useState([]);
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

  useEffect(() => {
    setRenewablePowerplants(
      powerplants.filter((powerplant) => powerplant.renewable === 1)
    );
    setNonRenewablePowerplants(
      powerplants.filter((powerplant) => powerplant.renewable === 0)
    );
  }, [powerplants]);

  return (
    <div>
      <Navbar bg="light">
        <h1>World Map</h1>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="ISO 3166-1"
            aria-label="location"
            id="location"
            name="location"
            ref={inputRef}
          />
        </Form>

        <Button type="submit" variant="outline-success" onClick={handleClick}>
          Submit
        </Button>
      </Navbar>

      <WorldMap
        coordinates={coordinates}
        renewablePowerplants={renewablePowerplants}
        nonRenewablePowerplants={nonRenewablePowerplants}
        cities={cities}
      />
      <MapData powerplants={powerplants} cities={cities} />
    </div>
  );
}

export default App;
