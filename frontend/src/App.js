import "./App.css";
import { useState, useRef } from "react";
import WorldMap from "./components/WorldMap";

function App() {
  const [location, setLocation] = useState("Australia");
  const [coordinates, setCoordinates] = useState([-27, 133]);
  const inputRef = useRef(null);

  const handleClick = () => {
    let input = inputRef.current.value;

    setLocation(input.replace(/ /g, "+"));
  };
  return (
    <div class="row">
      <div class="column">
        <input ref={inputRef} type="text" id="location" name="location" />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div class="column">
        <WorldMap location={location} coordinates={coordinates} />
      </div>
    </div>
  );
}

export default App;
