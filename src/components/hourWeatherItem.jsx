import React from "react";

const HourWeatherItem = ({ hour, src, temperature }) => {
  return (
    <React.Fragment>
      <div
        className="col-6 col-md-4 py-2 border d-flex flex-column align-items-center"
        style={{ height: "25vh" }}
      >
        <div className="row h-25 py-1">
          <p>{hour}</p>
        </div>
        <div className="h-50 py-1">
          <img src={src} className="img-fluid h-100" alt="" />
        </div>
        <div className="row h-25 py-1">
          <p>{temperature}ºC</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HourWeatherItem;
