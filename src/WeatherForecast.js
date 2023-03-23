import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import Row from "react-bootstrap/Row";

import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [city, setCity] = useState(props.city);
  const [forecastData, setForecastData] = useState(null);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 6) {
            return (
              <Row xs={1} md={6} className="g-6 forecast-wrapper">
                <div key={index}>
                  <WeatherForecastDay forecast={dailyForecast} />
                </div>
              </Row>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    function handleResponse(response) {
      console.log(response);
      setLoaded(true);
      setCity(response.data.city);
      setForecastData(response.data.daily);
    }

    const apiKey = "646809et7a8c3ba7374obd5ce9af7bc0";
    let units = "metric";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
