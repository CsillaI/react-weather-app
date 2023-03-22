import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.forecast.temperature.maximum);
    return maxTemperature;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.forecast.temperature.minimum);
    return minTemperature;
  }

  function day() {
    let date = new Date(props.forecast.time * 1000);

    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function today() {
    let date = new Date(props.forecast.time * 1000);
    let month = date.getMonth();
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let today = date.getDate();

    return (
      <div>
        <span>{months[month]}</span> <span>{today}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <div className="card-text">
          <div className="date">{today()}</div>
          <WeatherIcon code={props.forecast.condition.icon} size={65} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">
              {maxTemperature()}°C
            </span>
            <span className="WeatherForecast-temp-separator">/</span>
            <span className="WeatherForecast-temp-min">
              {minTemperature()}°C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
