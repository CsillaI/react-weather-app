import React, { useState } from "react";

import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(false);
  const [city, setCity] = useState(props.city);

  if (forecast) {
    return (
      <div className="WeatherForecast">
        <div className="card text-center first" style={{ width: "9rem" }}>
          <div className="card-body">
            <h5 className="card-title">Wed</h5>
            <div className="card-text">
              <div className="date">Mar 15</div>
              <WeatherIcon code="clear-sky-day" size={65} />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temp-max">20°C</span>
                <span className="WeatherForecast-temp-separator">/</span>
                <span className="WeatherForecast-temp-min">11°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    function handleResponse(response) {
      console.log(response);
      setForecast(true);
      setCity(response.data.city);
    }

    const apiKey = "646809et7a8c3ba7374obd5ce9af7bc0";
    let units = "metric";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return <div>Loading...</div>;
  }
}
