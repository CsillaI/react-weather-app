import React from "react";
import WeatherIcon from "./WeatherIcon";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

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
    <Col>
      <Card className="card text-center first" style={{ width: "9rem" }}>
        <Card.Body className="card-body">
          <Card.Title className="card-title fs-4 fw-bold">{day()}</Card.Title>

          <span className="fs-5">{today()}</span>
          <WeatherIcon code={props.forecast.condition.icon} size={65} />
          <span className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">
              {maxTemperature()}°C
            </span>
            <span className="WeatherForecast-temp-separator">/</span>
            <span className="WeatherForecast-temp-min">
              {minTemperature()}°C
            </span>
          </span>
        </Card.Body>
      </Card>
    </Col>
  );
}
