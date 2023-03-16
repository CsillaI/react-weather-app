import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div
        className="d-md-flex"
        style={{ marginTop: "10px", marginBottom: "40px" }}
      >
        <div className="time-date-wrapper">
          <h2 className="d-md-flex city">{props.data.city}</h2>
          <div className="d-sm-inline-flex">
            <span className="date-main">
              <FormattedDate date={props.data.date} />
            </span>
          </div>
        </div>
        <div className="d-flex" style={{ textAlign: "right" }}>
          <div className="main-weather-icon-wrapper">
            <h3
              className="d-sm-inline-flex align-content-sm-center"
              style={{ marginLeft: "30px" }}
            >
              <WeatherIcon code={props.data.icon} size={100} />
            </h3>
          </div>
        </div>
        <WeatherTemperature celsius={props.data.temperature} />

        <div
          className="d-sm-inline-flex more-weather-details-wrapper"
          style={{ marginLeft: "30px" }}
        >
          <h4>
            <div
              className="d-flex flex-column more-details"
              style={{ marginTop: "30px" }}
            >
              <div className="d-sm-flex align-content-sm-left weather-description">
                {props.data.description}
              </div>
              <hr className="horizontal-line" />
              <div className="more-details-boxes">
                Feels like:
                <div className="p-1 d-inline-flex feels-like-main">
                  {props.data.feelsLike}&deg;C
                </div>
              </div>

              <div className="more-details-boxes">
                Wind:
                <div className="p-1 d-inline-flex wind-main">
                  {props.data.wind}km/h
                </div>
              </div>

              <div className="more-details-boxes">
                Humidity:
                <div className="p-1 d-inline-flex humidity-main">
                  {props.data.humidity}%
                </div>
              </div>
            </div>
          </h4>
        </div>
      </div>
    </div>
  );
}
