import React from "react";
import Button from "./commons/button";
import SearchBox from "./commons/searchBox";
import Pagination from "./commons/paginations";
import ListGroup from "./commons/listGroup";

const Country = ({
  selectedCountryName,
  onCountryButtonClick,
  isCountryListOpened,
  countryQuery,
  onCountrySearch,
  countries,
  onCountryClick,
  searchedCountries,
  onPageCountryClick,
  pageSizeCountry,
  currentPageCountry,
  onPreviousClickCountry,
}) => {
  return (
    <React.Fragment>
      <Button
        className="btn btn-warning btn-sm dropdown-toggle w-100"
        text={`Select Country: ${selectedCountryName}`}
        onClick={onCountryButtonClick}
      />
      {isCountryListOpened && (
        <React.Fragment>
          <SearchBox
            placeholder="Search for the country"
            value={countryQuery}
            onChange={onCountrySearch}
          />
          <ListGroup
            items={countries}
            key="code"
            value="name"
            onItemClick={onCountryClick}
            backgroundColor="bg-light"
          />

          <Pagination
            itemsCount={searchedCountries}
            pageSize={pageSizeCountry}
            currentPage={currentPageCountry}
            onPageClick={onPageCountryClick}
            onPreviousClick={onPreviousClickCountry}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Country;
