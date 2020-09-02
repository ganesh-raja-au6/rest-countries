import React from "react";

const Search = () => {
  return (
    <form>
      <div className="search-group">
          <i className="fa fa-search"></i>
        <input type="search" placeholder="Search for a country..." />
      </div>
    </form>
  );
};

export default Search;
