import React from "react";
import TableBody from "./tableBody";

const Table = ({
  data,
  keyProperty,
  onItemClick,
  selectedItem,
  textProperty,
  className
}) => {
  return (
    <table className={className}>
      <TableBody
        data={data}
        keyProperty={keyProperty}
        onItemClick={onItemClick}
        selectedItem={selectedItem}
        textProperty={textProperty}
      />
    </table>
  );
};

export default Table;
