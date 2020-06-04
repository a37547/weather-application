import React from "react";
import Button from "./button";
import ListGroup from "./listGroup";

const Dropdown = ({
  buttonText,
  onButtonClick,
  isClicked,
  items,
  onItemClick,
  buttonBackground,
}) => {
  return (
    <React.Fragment>
      <Button
        className={`btn ${buttonBackground} dropdown-toggle w-100`}
        text={buttonText}
        onClick={onButtonClick}
      />
      {isClicked && (
        <ListGroup
          items={items}
          //key="day"
          //value="day"
          onItemClick={onItemClick}
        />
      )}
    </React.Fragment>
  );
};

export default Dropdown;
