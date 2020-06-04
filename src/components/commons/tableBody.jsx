import React from "react";

const TableBody = props => {
  const { data, keyProperty, onItemClick, selectedItem, textProperty } = props;
  return (
    <tbody>
      {data.map(item => (
        <tr
          key={item[keyProperty]}
          onClick={() => onItemClick(item)}
          className={selectedItem === item ? "active" : ""}
        >
          <td>{item[textProperty]}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
