import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>

          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">20°C /</span>
            <span className="WeatherForecast-temp-min">11°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
