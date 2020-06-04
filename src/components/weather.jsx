import React from "react";
import { findImage } from "../services/images_helper";
import { Link } from "react-router-dom";

const Weather = ({ temperature, city, description }) => {
  const image = findImage(description);

  return (
    <div className="container h-100">
      <div className="row h-25 d-flex justify-content-center align-items-center">
        <Link
          to={`/weather/${city.id}`}
          className="text-decoration-none text-dark"
        >
          <h3>{city.name}</h3>
        </Link>
      </div>
      <div className="row h-50 d-flex justify-content-center">
        <img className="img-fluid" src={image} alt="" />
      </div>
      <div className="row h-25 d-flex justify-content-center align-items-center">
        <h3>
          {temperature}
          {"º"}
        </h3>
      </div>
    </div>
  );
};

export default Weather;
