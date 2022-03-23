import React from "react";
import Search from "./Search";

function Header({searchTerm, setSearchTerm, handleSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </header>
  );
}

export default Header;
