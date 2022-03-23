import React, {useState} from "react";

function ListingCard({description, image, location, id, handleListingDelete}) {
  const [favorite, setFavorite] = useState(false)

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => handleListingDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={() => setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
