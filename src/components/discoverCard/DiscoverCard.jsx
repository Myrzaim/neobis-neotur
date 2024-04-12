import React from "react";
import "./discoverCard.css";
import mountain from "../../images/mountain.jpg";

const DiscoverCard = () => {
  return (
    <div className="discoverCard" >
      <img className="discoverCard__img" src={mountain} alt="mountain" />
      <p className="discoverCard__title">Nouthern Mountain</p>
    </div>
  );
};

export default DiscoverCard;
