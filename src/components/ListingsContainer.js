import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleListingDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => <ListingCard handleListingDelete={handleListingDelete} key={listing.description} description={listing.description} image={listing.image} location={listing.location} id={listing.id} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
