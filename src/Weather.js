import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.city);
  function handleResponse(response) {
    console.log(response);
    setLoading(true);

    setWeather({
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "646809et7a8c3ba7374obd5ce9af7bc0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loading) {
    return (
      <div className="container text-center">
        <div className="row wrapping">
          <div className="col-12 border">
            <div className="row main-weather-elemts-row">
              <div className="col-12">
                <form className="mb-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control shadow-sm"
                    placeholder="Enter city name..."
                    autoFocus="on"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                  <input
                    type="submit"
                    className="btn btn-primary shadow-sm search-button"
                    value="Search"
                  />
                  <input
                    type="submit"
                    className="btn btn-secondary shadow-sm current-button"
                    value="Current"
                  />
                </form>
                <WeatherInfo data={weather} />
              </div>
            </div>

            <WeatherForecast city={weather.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return <div>Loading...</div>;
  }
}
