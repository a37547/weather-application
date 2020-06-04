import React from "react";

const TableHeader = ({ onClick, columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th onClick={() => onClick(column)}>
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
