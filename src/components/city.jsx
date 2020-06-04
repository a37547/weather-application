import React from "react";
import Button from "./commons/button";
import SearchBox from "./commons/searchBox";
import Pagination from "./commons/paginations";
import ListGroup from "./commons/listGroup";

const City = ({
  selectedCity,
  onCityButtonClick,
  isCityListOpened,
  cityQuery,
  onCitySearch,
  cities,
  onCityClick,
  searchedCities,
  pageSizeCity,
  currentPageCity,
  onPageCityClick,
  onPreviousClick,
}) => {
  return (
    <React.Fragment>
      <Button
        className="btn btn-warning btn-sm dropdown-toggle w-100"
        text={`Select City: ${selectedCity}`}
        onClick={onCityButtonClick}
      />
      {isCityListOpened && (
        <React.Fragment>
          <SearchBox
            placeholder="Search for the cities"
            value={cityQuery}
            onChange={onCitySearch}
          />
          <ListGroup
            items={cities}
            key="id"
            value="name"
            onItemClick={onCityClick}
            backgroundColor="bg-light"
          />

          <Pagination
            itemsCount={searchedCities}
            pageSize={pageSizeCity}
            currentPage={currentPageCity}
            onPageClick={onPageCityClick}
            onPreviousClick={onPreviousClick}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default City;
