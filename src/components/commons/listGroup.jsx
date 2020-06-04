import React from "react";

const ListGroup = ({
  items,
  key,
  value,
  onItemClick,
  backgroundColor = "bg-warning",
}) => {
  return (
    <ul className="list-group my-1">
      {items.map((item) => (
        <li
          onClick={() => onItemClick(item)}
          key={item[key]}
          className={`list-group-item px-3 py-1 text-dark text-center ${backgroundColor}`}
          style={{ cursor: "pointer" }}
        >
          <small>{value ? item[value] : item}</small>
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
