import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <select>
        <option>Filter by Region</option>
        <option value="country">country</option>
      </select>
    </div>
  );
};

export default Dropdown;
