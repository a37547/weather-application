import cityList from "../jsons/api-cities.json";
import lodash from "lodash";

//list of all existing countries and their codes (ex: name: Portugal, alpha2: PT)
import allCountryCodes from "../jsons/country-codes.json";
import { getWeather } from "./weatherService";

//Getting list of objects with the names of the corresponding country codes : (PT = Portugal)
export function getCountries() {
  const codes = getCodes();
  let countries = [];
  codes.map((code) => {
    for (let index in codes) {
      if (allCountryCodes[index].alpha2 === code) {
        countries.push({ code, name: allCountryCodes[index].name });
      }
    }
    return countries;
  });

  countries = lodash.sortBy(countries, "name");

  return countries;
}

//Get list of cities by country (passed as argument), sorted by name
export function getCities(country) {
  let cities = cityList.filter((c) => c.country === country);
  cities = lodash.sortBy(cities, "name");
  return cities;
}

//codes of the countries that exist on Weather API (ex: PT, BR, ES)
export function getCodes() {
  let codes = [];
  cityList.map((city) => {
    codes.push(city.country);
    return codes;
  });

  codes = lodash.uniq(codes);
  return codes;
}

/*get the day, month and year. API return dt_txt with a string like:
"2020-06-04"*/
export function getData(data, inicial, end) {
  let days = [];
  days = data.map((d) => d.dt_txt.substring(inicial, end));
  return days.filter((x, i, a) => a.indexOf(x) === i);
}

//Getting specific data from API
export async function getCityWeather(locationID) {
  const { main: temperature, weather: description } = await getWeather(
    locationID
  );

  return {
    temperature: temperature.temp,
    description: description[0].description,
  };
}
