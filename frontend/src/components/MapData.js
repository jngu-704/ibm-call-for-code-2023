import React from "react";
import Table from "react-bootstrap/Table";

export default function MapData(props) {
  return (
    <>
      <h1>Power Plants</h1>
      <Table striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Primary Fuel</th>
            <th>Capacity (Megawatts)</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {props.powerplants.map((powerplant) => (
            <tr key={powerplant.id}>
              <td>{powerplant.id}</td>
              <td>{powerplant.name}</td>
              <td>{powerplant.country}</td>
              <td>{powerplant.primary_fuel}</td>
              <td>{parseFloat(powerplant.capacity_mw)}</td>
              <td>{powerplant.latitude}</td>
              <td>{powerplant.longitude}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h1>Cities</h1>
      <Table striped bordered hover size="sm" variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>Population</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {props.cities.map((city) => (
            <tr key={city.id}>
              <td>{city.id}</td>
              <td>{city.name}</td>
              <td>{city.country}</td>
              <td>{Math.floor(city.population)}</td>
              <td>{city.latitude}</td>
              <td>{city.longitude}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
