import React from "react";
import Search from "./Search";

const Header = ({ title, searchValue, setSearchValue, search }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        search={search}
      />
    </div>
  );
};

export default Header;
