import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === `celsius`) {
    return (
      <div
        className="WeatherTemperature d-sm-inline-flex temperature-wrapper"
        style={{ marginTop: "30px" }}
      >
        <h1 className="d-sm-inline-flex">
          {props.celsius}
          <span className="temperature-main"></span>
          <span className="d-sm-inline-flex units">
            <a
              href="/"
              onClick={showCelsius}
              className="celsius active"
              rel="noreferrer"
            >
              &deg;C<span className="units-separator">|</span>
            </a>
            <a
              href="/"
              onClick={showFahrenheit}
              className="fahrenheit"
              rel="noreferrer"
            >
              &deg;F
            </a>
          </span>
        </h1>
      </div>
    );
  } else {
    return (
      <div
        className="WeatherTemperature d-sm-inline-flex temperature-wrapper"
        style={{ marginTop: "30px" }}
      >
        <h1 className="d-sm-inline-flex">
          {fahrenheit()}
          <span className="temperature-main"></span>
          <span className="d-sm-inline-flex units">
            <a
              href="/"
              onClick={showCelsius}
              className="celsius active"
              rel="noreferrer"
            >
              &deg;C<span className="units-separator">|</span>
            </a>
            <a
              href="/"
              onClick={showFahrenheit}
              className="fahrenheit"
              rel="noreferrer"
            >
              &deg;F
            </a>
          </span>
        </h1>
      </div>
    );
  }
}
