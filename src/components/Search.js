import React from "react";

function Search({searchTerm, setSearchTerm, handleSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchTerm);
    handleSearch()

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
