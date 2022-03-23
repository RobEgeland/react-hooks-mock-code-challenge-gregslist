import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch() {
    const newListings = listings.filter((listing) => listing.description === searchTerm)
    setListings(newListings)
  }

  function handleListingDelete(id) {
    const newListings = listings.filter((listing) => listing.id !== id)
    setListings(newListings)
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setListings(listings))
  }, [])
  return (
    <div className="app">
      <Header handleSearch={handleSearch} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <ListingsContainer handleListingDelete={handleListingDelete} listings={listings} />
    </div>
  );
}

export default App;
