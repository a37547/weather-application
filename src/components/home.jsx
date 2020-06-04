import React, { Component } from "react";
import Country from "./country";
import City from "./city";
import Weather from "./weather";
import { getCountries, getCities } from "../services/dayService";
import { paginate } from "../utils/paginate";
import { getWeather } from "../services/weatherService";

class Home extends Component {
  state = {
    countries: [],
    cities: [],
    selectedCountry: {},
    selectedCity: {},
    currentPageCountry: 1,
    currentPageCity: 1,
    pageSizeCountry: 4,
    pageSizeCity: 4,
    countryQuery: "",
    cityQuery: "",
    isCountryListOpened: false,
    isCityListOpened: false,
    selectedCityTemperature: "",
    selectedCityDescription: "clear sky",
  };

  async componentDidMount() {
    const countries = getCountries();
    const selectedCountry = countries[0];
    let cities = getCities(selectedCountry.code);
    cities = cities.filter(
      (v, i, a) => a.findIndex((t) => t.name === v.name) === i
    );
    const selectedCity = cities[0];
    const { main: temperature, weather: description } = await getWeather(
      selectedCity.id
    );
    const selectedCityTemperature = temperature.temp;
    const selectedCityDescription = description[0].description;

    this.setState({
      countries,
      selectedCountry,
      cities,
      selectedCity,
      selectedCityTemperature,
      selectedCityDescription,
    });
  }

  //Handling Select Country Button Click
  handleCountryButtonClick = () => {
    const isCountryListOpened = this.state.isCountryListOpened;
    let isCityListOpened = this.state.isCityListOpened;
    if (isCityListOpened) {
      isCityListOpened = !isCityListOpened;
    }
    this.setState({
      isCountryListOpened: !isCountryListOpened,
      isCityListOpened,
    });
  };

  //Handling Select City Button Click
  handleCityButtonClick = () => {
    const isCityListOpened = this.state.isCityListOpened;
    let isCountryListOpened = this.state.isCountryListOpened;
    if (isCountryListOpened) {
      isCountryListOpened = !isCountryListOpened;
    }
    this.setState({
      isCityListOpened: !isCityListOpened,
      isCountryListOpened,
    });
  };

  handleCountrySearch = (query) => {
    this.setState({ countryQuery: query, currentPageCountry: 1 });
  };

  handleCitySearch = (query) => {
    this.setState({ cityQuery: query, currentPageCity: 1 });
  };

  //Handling clicks in pagination of countries
  handlePageCountryClick = (page) => {
    this.setState({ currentPageCountry: page });
  };

  //Handling clicks in pagination of cities
  handlePageCityClick = (page) => {
    this.setState({ currentPageCity: page });
  };

  handleCountryClick = (country) => {
    const isCountryListOpened = this.state.isCountryListOpened;
    let cities = getCities(country.code);
    cities = cities.filter(
      (v, i, a) => a.findIndex((t) => t.name === v.name) === i
    );
    const selectedCity = cities[0];
    this.setState({
      selectedCountry: country,
      isCountryListOpened: !isCountryListOpened,
      cities,
      selectedCity,
    });
  };

  handleCityClick = async (city) => {
    const isCityListOpened = this.state.isCityListOpened;
    const { main: temperature, weather: description } = await getWeather(
      city.id
    );

    const selectedCityTemperature = temperature.temp;
    const selectedCityDescription = description[0].description;

    this.setState({
      selectedCity: city,
      isCityListOpened: !isCityListOpened,
      selectedCityTemperature,
      selectedCityDescription,
    });
  };

  handlePreviousClickCountry = () => {
    let currentPageCountry = this.state.currentPageCountry;
    if (currentPageCountry <= 1) return;

    currentPageCountry--;

    this.setState({ currentPageCountry });
  };

  handlePreviousClickCity = () => {
    let currentPageCity = this.state.currentPageCity;
    if (currentPageCity <= 1) return;

    currentPageCity--;

    this.setState({ currentPageCity });
  };

  //Gets the data that starts with the letter passed in the query
  getSearchedData = (data, query) => {
    let filtered = data;
    if (query) {
      filtered = data.filter((d) =>
        d.name.toLowerCase().startsWith(query.toLowerCase())
      );
    }

    return filtered;
  };

  render() {
    const {
      selectedCountry,
      isCountryListOpened,
      countryQuery,
      countries: allCountries,
      currentPageCountry,
      pageSizeCountry,
      cities: allCities,
      cityQuery,
      currentPageCity,
      pageSizeCity,
      selectedCity,
      isCityListOpened,
      selectedCityTemperature,
      selectedCityDescription,
    } = this.state;

    const searchedCountries = this.getSearchedData(allCountries, countryQuery);
    const searchedCities = this.getSearchedData(allCities, cityQuery);

    const countries = paginate(
      searchedCountries,
      currentPageCountry,
      pageSizeCountry
    );

    const cities = paginate(searchedCities, currentPageCity, pageSizeCity);

    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <Country
              selectedCountryName={selectedCountry.name}
              onCountryButtonClick={this.handleCountryButtonClick}
              onCountrySearch={this.handleCountrySearch}
              onCountryClick={this.handleCountryClick}
              isCountryListOpened={isCountryListOpened}
              countryQuery={countryQuery}
              countries={countries}
              searchedCountries={searchedCountries.length}
              pageSizeCountry={pageSizeCountry}
              currentPageCountry={currentPageCountry}
              onPageCountryClick={this.handlePageCountryClick}
              onPreviousClickCountry={this.handlePreviousClickCountry}
            />
          </div>
          <div className="col-12 col-md-6 my-1 my-md-0">
            <City
              selectedCity={selectedCity.name}
              onCityButtonClick={this.handleCityButtonClick}
              isCityListOpened={isCityListOpened}
              onCitySearch={this.handleCitySearch}
              cityQuery={cityQuery}
              cities={cities}
              searchedCities={searchedCities.length}
              pageSizeCity={pageSizeCity}
              currentPageCity={currentPageCity}
              onPageCityClick={this.handlePageCityClick}
              onCityClick={this.handleCityClick}
              onPreviousClick={this.handlePreviousClickCity}
            />
          </div>
          <div className="col-12 my-3" style={{ height: "60vh" }}>
            <Weather
              city={selectedCity}
              temperature={selectedCityTemperature}
              description={selectedCityDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
