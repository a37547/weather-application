import React, { Component } from "react";
import { getData } from "../services/dayService";
import { getFiveDayWeather } from "../services/weatherService";
import { findImage } from "../services/images_helper";
import Dropdown from "./commons/dropdown";
import HourWeatherItem from "./hourWeatherItem";

class DetailedWeather extends Component {
  state = {
    days: [],
    months: [],
    years: [],
    dayClicked: false,
    monthClicked: false,
    yearClicked: false,
    selectedDay: "",
    selectedMonth: "",
    selectedYear: "",
    data: [],
  };

  async componentDidMount() {
    const cityId = this.props.match.params.id;
    let data = await getFiveDayWeather(cityId);
    data = data.list;
    let days = getData(data, 8, 10);
    let months = getData(data, 5, 7);
    let years = getData(data, 0, 4);
    const selectedDay = days[0];
    const selectedMonth = months[0];
    const selectedYear = years[0];

    this.setState({
      days,
      months,
      years,
      selectedDay,
      selectedMonth,
      selectedYear,
      data,
    });
  }

  handleDayHeaderClick = () => {
    const dayClicked = this.state.dayClicked;
    let monthClicked = this.state.monthClicked;
    monthClicked && (monthClicked = !monthClicked);
    let yearClicked = this.state.yearClicked;
    yearClicked && (yearClicked = !yearClicked);
    this.setState({ dayClicked: !dayClicked, monthClicked, yearClicked });
  };

  handleMonthHeaderClick = () => {
    const monthClicked = this.state.monthClicked;
    let dayClicked = this.state.dayClicked;
    dayClicked && (dayClicked = !dayClicked);
    let yearClicked = this.state.yearClicked;
    yearClicked && (yearClicked = !yearClicked);
    this.setState({ monthClicked: !monthClicked, dayClicked, yearClicked });
  };

  handleYearHeaderClick = () => {
    const yearClicked = this.state.yearClicked;
    let dayClicked = this.state.dayClicked;
    dayClicked && (dayClicked = !dayClicked);
    let monthClicked = this.state.monthClicked;
    monthClicked && (monthClicked = !monthClicked);
    this.setState({ yearClicked: !yearClicked, monthClicked, dayClicked });
  };

  handleDayClick = async (selectedDay) => {
    const dayClicked = this.state.dayClicked;
    this.setState({ selectedDay, dayClicked: !dayClicked });
  };

  handleMonthClick = (selectedMonth) => {
    const monthClicked = this.state.monthClicked;
    this.setState({ selectedMonth, monthClicked: !monthClicked });
  };

  handleYearClick = (selectedYear) => {
    const yearClicked = this.state.yearClicked;
    this.setState({ selectedYear, yearClicked: !yearClicked });
  };

  render() {
    const {
      days,
      months,
      years,
      dayClicked,
      monthClicked,
      yearClicked,
      data,
      selectedDay,
      selectedMonth,
      selectedYear,
    } = this.state;

    const dataFiltered = data.filter(
      (d) =>
        d.dt_txt.substring(8, 10) === selectedDay &&
        d.dt_txt.substring(5, 7) === selectedMonth &&
        d.dt_txt.substring(0, 4) === selectedYear
    );

    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-12 col-md-4 my-1 my-md-0">
            <Dropdown
              buttonText={`Day - ${selectedDay}`}
              onButtonClick={this.handleDayHeaderClick}
              isClicked={dayClicked}
              items={days}
              onItemClick={this.handleDayClick}
              buttonBackground="bg-warning"
            />
          </div>
          <div className="col-12 col-md-4 my-1 my-md-0">
            <Dropdown
              buttonText={`Month - ${selectedMonth}`}
              onButtonClick={this.handleMonthHeaderClick}
              isClicked={monthClicked}
              items={months}
              onItemClick={this.handleMonthClick}
              buttonBackground="bg-warning"
            />
          </div>
          <div className="col-12 col-md-4 my-1 my-md-0">
            <Dropdown
              buttonText={`Year - ${selectedYear}`}
              onButtonClick={this.handleYearHeaderClick}
              isClicked={yearClicked}
              items={years}
              onItemClick={this.handleYearClick}
              buttonBackground="bg-warning"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="container">
            <div className="row">
              {dataFiltered.map((d) => (
                <HourWeatherItem
                  hour={d.dt_txt.substring(11, 16)}
                  src={findImage(d.weather[0].description)}
                  temperature={d.main.temp}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedWeather;
