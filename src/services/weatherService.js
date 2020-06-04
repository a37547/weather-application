import { key } from "../config.json";

//Calling API endpoint to get the weather info of city
export async function getWeather(cityID) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${key}&units=metric`
  );

  return response.json();
}

export async function getFiveDayWeather(cityID) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${key}&units=metric`
  );

  return response.json();
}
