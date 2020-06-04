import React from "react";

const SearchBox = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className="form-control form-control-sm my-1"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
