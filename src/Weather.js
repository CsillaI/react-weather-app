import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container text-center">
      <div className="row wrapping">
        <div className="col-12 border">
          <div className="row main-weather-elemts-row">
            <div className="col-12">
              <form className="mb-3" id="search-city">
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Enter city name..."
                  autoFocus="on"
                  autoComplete="off"
                  id="search-city-input"
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
                  id="current-button"
                />
              </form>
              <div
                className="d-md-flex"
                style={{ marginTop: "10px", marginBottom: "40px" }}
              >
                <div className="time-date-wrapper">
                  <h2 className="d-md-flex city" id="city">
                    Cluj-Napoca
                  </h2>
                  <div className="d-sm-inline-flex">
                    <span className="today" id="current-day"></span>
                    <span className="date-main" id="current-date"></span>
                  </div>
                  <div className="d-sm-flex time-main" id="current-time">
                    T
                  </div>
                </div>
                <div className="d-flex" style={{ textAlign: "right" }}>
                  <div className="main-weather-icon-wrapper">
                    <h3
                      className="d-sm-inline-flex align-content-sm-center"
                      style={{ marginLeft: "30px" }}
                    >
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="partly cloudy"
                        className="main-weather-icon"
                        id="main-weather-icon"
                      />
                    </h3>
                  </div>
                </div>

                <div
                  className="d-sm-inline-flex temperature-wrapper"
                  style={{ marginTop: "30px" }}
                >
                  <h1 className="d-sm-inline-flex">
                    5
                    <span
                      className="temperature-main"
                      id="temperature-main"
                    ></span>
                    <span className="d-sm-inline-flex units">
                      <a
                        href="/"
                        className="celsius active"
                        rel="noreferrer"
                        id="celsius"
                      >
                        &deg;C<span className="units-separator">|</span>
                      </a>
                      <a
                        href="/"
                        className="fahrenheit"
                        rel="noreferrer"
                        id="fahrenheit"
                      >
                        &deg;F
                      </a>
                    </span>
                  </h1>
                </div>

                <div
                  className="d-sm-inline-flex more-weather-details-wrapper"
                  style={{ marginLeft: "30px" }}
                >
                  <h4>
                    <div
                      className="d-flex flex-column more-details"
                      style={{ marginTop: "30px" }}
                    >
                      <div
                        className="d-sm-flex align-content-sm-left weather-description"
                        id="weather-description"
                      >
                        Clear Sky
                      </div>
                      <hr className="horizontal-line" />
                      <div className="more-details-boxes">
                        Feels like:
                        <div
                          className="p-1 d-inline-flex feels-like-main"
                          id="feels-like-main"
                        >
                          25C
                        </div>
                      </div>

                      <div className="more-details-boxes">
                        Wind:
                        <div
                          className="p-1 d-inline-flex wind-main"
                          id="wind-main"
                        >
                          10 km/h
                        </div>
                      </div>

                      <div className="more-details-boxes">
                        Humidity:
                        <div
                          className="p-1 d-inline-flex humidity-main"
                          id="humidity-main"
                        >
                          80%
                        </div>
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="weather-forecast" id="weather-forecast"></div>
        </div>
      </div>
    </div>
  );
}
